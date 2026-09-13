import { createHash } from 'node:crypto';
import {
  access,
  copyFile,
  mkdir,
  readdir,
  readFile,
  stat,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parseArgs } from 'node:util';

const root = process.cwd();
const { values } = parseArgs({
  options: {
    source: { type: 'string' },
    output: { type: 'string' },
    help: { type: 'boolean', default: false },
  },
  strict: true,
});

if (values.help || !values.source) {
  console.log(`Usage:
  npm run facebook:export -- --source <facebook-export-posts-directory>

Options:
  --source <path>  Facebook export directory containing profile_posts_*.json.
  --output <path>  Override intake (destination must not already exist).
  --help           Show this help.`);
  process.exit(values.help ? 0 : 1);
}

const sourcePostsRoot = path.resolve(root, values.source);
const exportRoot = findExportRoot(sourcePostsRoot);
const outputRoot = path.resolve(
  root,
  values.output ?? 'intake',
);

await assertDirectory(sourcePostsRoot);
if (await exists(outputRoot)) {
  throw new Error(
    `Output already exists: ${outputRoot}. Use --output with a new path; existing intake is never overwritten.`,
  );
}

const sourceEntries = await readdir(sourcePostsRoot, { withFileTypes: true });
const postFiles = sourceEntries
  .filter((entry) => entry.isFile() && /^profile_posts_\d+\.json$/i.test(entry.name))
  .map((entry) => entry.name)
  .sort(naturalCompare);
if (postFiles.length === 0) {
  throw new Error(`No profile_posts_*.json files found in ${sourcePostsRoot}.`);
}

const sourcePosts = [];
for (const postFile of postFiles) {
  const posts = JSON.parse(await readFile(path.join(sourcePostsRoot, postFile), 'utf8'));
  if (!Array.isArray(posts)) {
    throw new Error(`${postFile} must contain a JSON array.`);
  }
  sourcePosts.push(...posts.map((post) => ({ ...post, _source_file: postFile })));
}

const mediaPosts = sourcePosts.filter((post) => collectMedia(post).length > 0);
const usedFolders = new Set();
const organizedPosts = [];
const copiedSourceFiles = [];
let mediaCount = 0;
let totalBytes = 0;

await mkdir(outputRoot, { recursive: true });
for (const [postIndex, post] of mediaPosts.entries()) {
  const caption = getPostCaption(post);
  const daskam = detectDaskam(caption);
  const timestamp = new Date(post.timestamp * 1000);
  const timestampSlug = Number.isNaN(timestamp.valueOf())
    ? `unknown-${String(postIndex + 1).padStart(3, '0')}`
    : timestamp.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const baseFolder = daskam
    ? `D${String(daskam).padStart(3, '0')}`
    : path.join('_other', `POST${String(postIndex + 1).padStart(3, '0')}-${timestampSlug}`);
  const relativeFolder = uniqueFolder(baseFolder);
  const postRoot = path.join(outputRoot, ...relativeFolder.split('/'));
  await mkdir(postRoot, { recursive: true });

  await writeFile(path.join(postRoot, 'post-caption.txt'), caption, 'utf8');
  const mediaEntries = [];
  const mergedCaptions = [];
  for (const [mediaIndex, item] of collectMedia(post).entries()) {
    const sourceFile = await resolveExportFile(exportRoot, sourcePostsRoot, item.media.uri);
    const extension = path.extname(sourceFile).toLowerCase() || '.bin';
    const sequence = String(mediaIndex + 1).padStart(3, '0');
    const destinationName = `${sequence}${extension}`;
    const destination = path.join(postRoot, destinationName);
    const description = decodeFacebookText(item.media.description ?? '');

    await copyFile(sourceFile, destination);
    mergedCaptions.push(
      `## ${destinationName}\n\n${description || '(No photo caption in export)'}`,
    );

    const fileStat = await stat(destination);
    const fileHash = await sha256File(destination);
    mediaEntries.push({
      order: mediaIndex + 1,
      local_path: destinationName,
      caption: description,
      original_uri: item.media.uri,
      original_filename: path.basename(item.media.uri),
      creation_timestamp: item.media.creation_timestamp ?? null,
      taken_timestamp:
        item.media.media_metadata?.photo_metadata?.exif_data?.[0]?.taken_timestamp ?? null,
      bytes: fileStat.size,
      sha256: fileHash,
    });
    mediaCount++;
    totalBytes += fileStat.size;
  }
  await writeFile(
    path.join(postRoot, 'photo-captions.txt'),
    `${mergedCaptions.join('\n\n')}\n`,
    'utf8',
  );

  const normalizedPost = {
    schema_version: 1,
    daskam,
    source_post_index: postIndex + 1,
    source_json: post._source_file,
    timestamp: post.timestamp ?? null,
    created_at: Number.isNaN(timestamp.valueOf()) ? null : timestamp.toISOString(),
    original_title: decodeFacebookText(post.title ?? ''),
    caption,
    media_count: mediaEntries.length,
    media: mediaEntries,
  };
  await writeFile(
    path.join(postRoot, 'post.json'),
    `${JSON.stringify(normalizedPost, null, 2)}\n`,
    'utf8',
  );

  organizedPosts.push({
    daskam,
    folder: relativeFolder,
    timestamp: normalizedPost.timestamp,
    created_at: normalizedPost.created_at,
    media_count: mediaEntries.length,
  });
  console.log(
    `[${postIndex + 1}/${mediaPosts.length}] ${relativeFolder}: ${mediaEntries.length} media`,
  );
}

const metadataRoot = path.join(outputRoot, '_source-metadata');
for (const sourceFile of await collectJsonFiles(sourcePostsRoot)) {
  const relativePath = path.relative(sourcePostsRoot, sourceFile);
  const destination = path.join(metadataRoot, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(sourceFile, destination);
  copiedSourceFiles.push({
    path: relativePath.split(path.sep).join('/'),
    sha256: await sha256File(destination),
  });
}

const daskams = organizedPosts
  .map((post) => post.daskam)
  .filter((value) => value !== null)
  .sort((left, right) => left - right);
const manifest = {
  schema_version: 1,
  source_export: exportRoot,
  source_posts_directory: sourcePostsRoot,
  organized_at: new Date().toISOString(),
  ordering_contract:
    'Media file prefixes follow attachments[].data[] order from the Facebook export. Photo captions appear in the same sequence in photo-captions.txt.',
  preservation_contract:
    'Source export files are copied, never moved or modified. Decoded captions are derivatives; original JSON is preserved under _source-metadata.',
  post_count: organizedPosts.length,
  daskam_post_count: organizedPosts.filter((post) => post.daskam !== null).length,
  other_post_count: organizedPosts.filter((post) => post.daskam === null).length,
  media_count: mediaCount,
  total_media_bytes: totalBytes,
  daskams: [...new Set(daskams)],
  posts: organizedPosts,
  source_metadata: copiedSourceFiles,
};
await writeFile(
  path.join(outputRoot, 'retrieval-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

console.log(
  `Organized ${manifest.post_count} post(s), including ${manifest.daskam_post_count} ` +
    `Daskam post(s), with ${manifest.media_count} ordered media file(s).`,
);
console.log(`Output: ${outputRoot}`);

function collectMedia(post) {
  return (post.attachments ?? [])
    .flatMap((attachment) => attachment.data ?? [])
    .filter((entry) => typeof entry.media?.uri === 'string');
}

function getPostCaption(post) {
  const captions = (post.data ?? [])
    .map((entry) => entry.post)
    .filter((value) => typeof value === 'string' && value.trim())
    .map(decodeFacebookText);
  return captions.join('\n\n').trim();
}

function detectDaskam(caption) {
  const match = caption.match(
    /(?:Naarayaneeyam\s+)?Dasa(?:kam|gam)\s*[-:]?\s*(\d{1,3})\b/i,
  );
  return match ? Number(match[1]) : null;
}

function decodeFacebookText(value) {
  if (!/[ÃÂâðà]/.test(value)) return value;
  const repaired = Buffer.from(value, 'latin1').toString('utf8');
  const originalErrors = (value.match(/\uFFFD/g) ?? []).length;
  const repairedErrors = (repaired.match(/\uFFFD/g) ?? []).length;
  return repairedErrors <= originalErrors ? repaired : value;
}

function findExportRoot(start) {
  let current = start;
  for (let depth = 0; depth < 6; depth++) {
    if (/^facebook-/i.test(path.basename(current))) return current;
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return path.resolve(start, '..', '..');
}

async function resolveExportFile(exportDirectory, postsDirectory, uri) {
  const normalizedUri = uri.replaceAll('/', path.sep);
  const candidates = [
    path.resolve(exportDirectory, normalizedUri),
    path.resolve(postsDirectory, normalizedUri),
    path.resolve(postsDirectory, '..', normalizedUri),
    path.resolve(postsDirectory, '..', '..', normalizedUri),
  ];
  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }
  throw new Error(`Referenced media file was not found: ${uri}`);
}

async function collectJsonFiles(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      output.push(...(await collectJsonFiles(absolutePath)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.json')) {
      output.push(absolutePath);
    }
  }
  return output.sort(naturalCompare);
}

async function sha256File(filePath) {
  return createHash('sha256').update(await readFile(filePath)).digest('hex');
}

async function assertDirectory(directory) {
  const directoryStat = await stat(directory);
  if (!directoryStat.isDirectory()) throw new Error(`Not a directory: ${directory}`);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function uniqueFolder(baseFolder) {
  let candidate = baseFolder.replaceAll(path.sep, '/');
  let suffix = 2;
  while (usedFolders.has(candidate)) {
    candidate = `${baseFolder}-${suffix}`.replaceAll(path.sep, '/');
    suffix++;
  }
  usedFolders.add(candidate);
  return candidate;
}

function naturalCompare(left, right) {
  return left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' });
}
