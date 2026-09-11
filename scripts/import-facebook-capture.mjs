import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parseArgs } from 'node:util';

const root = process.cwd();
const { values } = parseArgs({
  options: {
    capture: { type: 'string' },
    output: { type: 'string' },
    help: { type: 'boolean', default: false },
  },
  strict: true,
});

if (values.help || !values.capture) {
  console.log(`Usage:
  npm run facebook:intake -- --capture <facebook-capture.json>

Options:
  --capture <file>  JSON created by scripts/facebook-capture-snippet.js.
  --output <path>   Override the default timestamped intake directory.
  --help            Show this help.`);
  process.exit(values.help ? 0 : 1);
}

const capturePath = path.resolve(root, values.capture);
const capture = JSON.parse(await readFile(capturePath, 'utf8'));
if (capture.schema_version !== 1 || !Array.isArray(capture.posts)) {
  throw new Error('Unsupported Facebook capture format.');
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputRoot = path.resolve(
  root,
  values.output ?? path.join('intake', 'facebook', timestamp),
);
const rawRoot = path.join(outputRoot, 'raw');
await mkdir(rawRoot, { recursive: true });

const posts = [];
const failures = [];
const seenPosts = new Set();

for (const [postIndex, post] of capture.posts.entries()) {
  const identity = post.post_url || `${post.caption}\n${post.image_urls?.join('\n')}`;
  const identityHash = createHash('sha256').update(identity).digest('hex').slice(0, 12);
  if (seenPosts.has(identityHash)) continue;
  seenPosts.add(identityHash);

  const daskam =
    positiveInteger(post.daskam) ??
    positiveInteger(post.caption?.match(/\bDasakam\s*[-:]?\s*(\d{1,3})\b/i)?.[1]);
  const postSlug = daskam
    ? `d${String(daskam).padStart(3, '0')}-${identityHash}`
    : `post-${String(postIndex + 1).padStart(3, '0')}-${identityHash}`;
  const postRoot = path.join(rawRoot, postSlug);
  await mkdir(postRoot, { recursive: true });

  const caption = typeof post.caption === 'string' ? post.caption : '';
  await writeFile(path.join(postRoot, 'caption.txt'), caption, 'utf8');

  const images = [];
  for (const [imageIndex, imageUrl] of [...new Set(post.image_urls ?? [])].entries()) {
    try {
      const response = await fetch(imageUrl, {
        headers: {
          Referer: post.post_url ?? capture.source_page ?? 'https://www.facebook.com/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140 Safari/537.36',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const bytes = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get('content-type') ?? '';
      const extension = extensionFor(contentType, imageUrl);
      const localName = `image-${String(imageIndex + 1).padStart(2, '0')}${extension}`;
      await writeFile(path.join(postRoot, localName), bytes);
      images.push({
        source_url: imageUrl,
        local_path: `raw/${postSlug}/${localName}`,
        content_type: contentType,
        bytes: bytes.length,
        sha256: createHash('sha256').update(bytes).digest('hex'),
      });
    } catch (error) {
      failures.push({
        post: postSlug,
        source_url: imageUrl,
        error: error.message,
      });
    }
  }

  posts.push({
    post_url: post.post_url ?? null,
    daskam,
    caption_path: `raw/${postSlug}/caption.txt`,
    caption_sha256: createHash('sha256').update(caption).digest('hex'),
    images,
  });
  console.log(
    `[${postIndex + 1}/${capture.posts.length}] ${postSlug}: ${images.length} image(s)`,
  );
}

const manifest = {
  schema_version: 1,
  source_page: capture.source_page ?? null,
  captured_at: capture.captured_at ?? null,
  imported_at: new Date().toISOString(),
  preservation_note:
    'Captions and downloaded images are raw references. They have not been copied into canonical content or approved artwork.',
  post_count: posts.length,
  image_count: posts.reduce((sum, post) => sum + post.images.length, 0),
  posts,
  failures,
};

await writeFile(
  path.join(outputRoot, 'retrieval-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

console.log(
  `Imported ${manifest.post_count} post(s) and ${manifest.image_count} image(s) to ${outputRoot}`,
);
if (failures.length) {
  throw new Error(
    `${failures.length} image download(s) failed. Re-capture Facebook and import immediately because CDN URLs expire.`,
  );
}

function positiveInteger(value) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function extensionFor(contentType, imageUrl) {
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('webp')) return '.webp';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('avif')) return '.avif';
  if (contentType.includes('jpeg') || contentType.includes('jpg')) return '.jpg';
  const extension = path.extname(new URL(imageUrl).pathname).toLowerCase();
  return ['.png', '.webp', '.gif', '.avif', '.jpg', '.jpeg'].includes(extension)
    ? extension
    : '.img';
}
