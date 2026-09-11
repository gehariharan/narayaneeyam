import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parseArgs } from 'node:util';

const root = process.cwd();
const { values } = parseArgs({
  options: {
    page: { type: 'string' },
    limit: { type: 'string', default: '3' },
    download: { type: 'boolean', default: false },
    all: { type: 'boolean', default: false },
    output: { type: 'string' },
    version: { type: 'string', default: 'v25.0' },
    help: { type: 'boolean', default: false },
  },
  strict: true,
});

if (values.help) {
  console.log(`Usage:
  npm run facebook:graph -- [options]

Required environment:
  FACEBOOK_USER_ACCESS_TOKEN  User token with pages_show_list and
                              pages_read_engagement.

Options:
  --page <id-or-name>  Managed Page ID or name. Auto-selects when only one exists.
  --limit <number>     Posts to request per page (default: 3, maximum: 100).
  --download           Save captions, attachments, and images under intake/facebook-graph/.
  --all                Follow pagination until every available Page post is fetched.
  --output <path>      Override the timestamped intake directory.
  --version <version>  Graph API version (default: v25.0).
  --help               Show this help.`);
  process.exit(0);
}

const userToken = process.env.FACEBOOK_USER_ACCESS_TOKEN;
if (!userToken) {
  throw new Error(
    'FACEBOOK_USER_ACCESS_TOKEN is not set. Generate a User access token in ' +
      'Graph API Explorer with pages_show_list and pages_read_engagement.',
  );
}

const limit = Number(values.limit);
if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
  throw new Error('--limit must be an integer from 1 to 100.');
}
if (!/^v\d+\.\d+$/.test(values.version)) {
  throw new Error('--version must look like v25.0.');
}

const graphBase = process.env.FACEBOOK_GRAPH_BASE_URL ?? 'https://graph.facebook.com';
const graphRoot = `${graphBase.replace(/\/$/, '')}/${values.version}`;
const accounts = await graphGet(`${graphRoot}/me/accounts`, userToken, {
  fields: 'id,name,access_token,tasks',
  limit: '100',
});
const pages = accounts.data ?? [];
if (pages.length === 0) {
  throw new Error(
    'No managed Pages were returned. Confirm pages_show_list permission and that the token belongs to a Page owner.',
  );
}

const page = selectPage(pages, values.page);
console.log(`Page: ${page.name} (${page.id})`);
console.log(`Tasks: ${(page.tasks ?? []).join(', ') || 'not returned'}`);

const fields = [
  'id',
  'message',
  'created_time',
  'updated_time',
  'permalink_url',
  'full_picture',
  'attachments{description,media_type,target,title,url,media,subattachments{description,media_type,target,title,url,media}}',
].join(',');
let nextUrl = buildGraphUrl(`${graphRoot}/${page.id}/posts`, {
  fields,
  limit: String(limit),
});
const posts = [];

while (nextUrl) {
  const response = await graphGet(nextUrl, page.access_token);
  posts.push(...(response.data ?? []));
  nextUrl = values.all ? response.paging?.next ?? null : null;
}

console.log(`Fetched ${posts.length} Page-authored post(s).`);
for (const post of posts.slice(0, 10)) {
  const summary = (post.message ?? '').replace(/\s+/g, ' ').slice(0, 100);
  console.log(`${post.created_time ?? 'unknown date'} ${post.id}: ${summary}`);
}

if (!values.download) process.exit(0);

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputRoot = path.resolve(
  root,
  values.output ?? path.join('intake', 'facebook-graph', timestamp),
);
const rawRoot = path.join(outputRoot, 'raw');
await mkdir(rawRoot, { recursive: true });

const manifestPosts = [];
const failures = [];

for (const [postIndex, post] of posts.entries()) {
  const daskam = detectDaskam(post.message);
  const postId = post.id.replace(/[^a-zA-Z0-9_-]/g, '_');
  const postSlug = daskam
    ? `d${String(daskam).padStart(3, '0')}-${postId}`
    : `post-${String(postIndex + 1).padStart(3, '0')}-${postId}`;
  const postRoot = path.join(rawRoot, postSlug);
  await mkdir(postRoot, { recursive: true });

  const caption = post.message ?? '';
  await writeFile(path.join(postRoot, 'caption.txt'), caption, 'utf8');
  await writeFile(
    path.join(postRoot, 'graph-response.json'),
    `${JSON.stringify(post, null, 2)}\n`,
    'utf8',
  );

  const imageUrls = collectImageUrls(post);
  const images = [];
  for (const [imageIndex, sourceUrl] of imageUrls.entries()) {
    try {
      const response = await fetch(sourceUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get('content-type') ?? '';
      const extension = extensionFor(contentType, sourceUrl);
      const localName = `image-${String(imageIndex + 1).padStart(2, '0')}${extension}`;
      await writeFile(path.join(postRoot, localName), bytes);
      images.push({
        source_url: sourceUrl,
        local_path: `raw/${postSlug}/${localName}`,
        content_type: contentType,
        bytes: bytes.length,
        sha256: sha256(bytes),
      });
    } catch (error) {
      failures.push({ post_id: post.id, source_url: sourceUrl, error: error.message });
    }
  }

  manifestPosts.push({
    post_id: post.id,
    post_url: post.permalink_url ?? null,
    created_time: post.created_time ?? null,
    daskam,
    caption_path: `raw/${postSlug}/caption.txt`,
    caption_sha256: sha256(caption),
    graph_response_path: `raw/${postSlug}/graph-response.json`,
    images,
  });
}

const manifest = {
  schema_version: 1,
  graph_api_version: values.version,
  page: { id: page.id, name: page.name },
  retrieved_at: new Date().toISOString(),
  source_endpoint: `/${page.id}/posts`,
  post_count: manifestPosts.length,
  image_count: manifestPosts.reduce((sum, post) => sum + post.images.length, 0),
  posts: manifestPosts,
  failures,
};
await writeFile(
  path.join(outputRoot, 'retrieval-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

console.log(
  `Saved ${manifest.post_count} post(s) and ${manifest.image_count} image(s) to ${outputRoot}`,
);
if (failures.length) {
  throw new Error(`${failures.length} image download(s) failed; see retrieval-manifest.json.`);
}

async function graphGet(url, token, parameters = {}) {
  const requestUrl = buildGraphUrl(url, parameters);
  const response = await fetch(requestUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const payload = await response.json();
  if (!response.ok || payload.error) {
    const error = payload.error ?? {};
    throw new Error(
      `Facebook Graph API error ${error.code ?? response.status}` +
        `${error.error_subcode ? `/${error.error_subcode}` : ''}: ` +
        `${error.message ?? response.statusText}`,
    );
  }
  return payload;
}

function buildGraphUrl(url, parameters = {}) {
  const result = new URL(url);
  for (const [name, value] of Object.entries(parameters)) {
    result.searchParams.set(name, value);
  }
  return result.href;
}

function selectPage(pages, selector) {
  if (!selector && pages.length === 1) return pages[0];
  if (!selector) {
    const available = pages.map((page) => `${page.name} (${page.id})`).join(', ');
    throw new Error(`Multiple managed Pages found. Pass --page <id-or-name>. Available: ${available}`);
  }
  const normalized = selector.trim().toLowerCase();
  const matches = pages.filter(
    (page) =>
      page.id === selector ||
      page.name.toLowerCase() === normalized ||
      page.name.toLowerCase().includes(normalized),
  );
  if (matches.length !== 1) {
    throw new Error(`Could not uniquely match managed Page: ${selector}`);
  }
  return matches[0];
}

function collectImageUrls(post) {
  const urls = new Set();
  if (post.full_picture) urls.add(post.full_picture);
  for (const attachment of post.attachments?.data ?? []) {
    addAttachmentImages(attachment, urls);
    for (const child of attachment.subattachments?.data ?? []) {
      addAttachmentImages(child, urls);
    }
  }
  return [...urls];
}

function addAttachmentImages(attachment, output) {
  const source = attachment.media?.image?.src;
  if (source) output.add(source);
}

function detectDaskam(caption = '') {
  const match = caption.match(/\bDasakam\s*[-:]?\s*(\d{1,3})\b/i);
  return match ? Number(match[1]) : null;
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
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
