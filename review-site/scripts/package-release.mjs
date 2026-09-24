import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const root = path.resolve(import.meta.dirname, '../..');
const source = path.join(root, 'artifacts/review-site');
const { stdout: head } = await run('git', ['rev-parse', 'HEAD'], { cwd: root });
const commit = head.trim();
const { stdout: status } = await run('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: root });
if (status.trim()) throw new Error('Commit the review source before packaging its exact GitHub Actions revision.');

const data = JSON.parse(await fs.readFile(path.join(source, 'data.json'), 'utf8'));
const files = ['data.json', 'asset-provenance.json', 'index.html'];
for (const chapter of data.chapters) files.push(`d${String(chapter.id).padStart(3, '0')}.html`);
for (const [key, item] of Object.entries(data.assets)) {
  if (!/^media\/[a-z0-9-]+\.webp$/.test(key)) throw new Error(`Invalid media key: ${key}`);
  const bytes = await fs.readFile(path.join(source, key));
  if (crypto.createHash('sha256').update(bytes).digest('hex') !== item.sha256) throw new Error(`Media checksum mismatch: ${key}`);
  files.push(key);
}
for (const file of files) await fs.access(path.join(source, file));

const dest = path.join(root, 'artifacts/review-releases', commit);
await fs.mkdir(dest, { recursive: true });
const bundle = path.join(dest, 'review-site-bundle.zip');
try { await fs.access(bundle); throw new Error(`Release bundle already exists: ${bundle}`); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
await run('zip', ['-q', '-9', bundle, ...files], { cwd: source, maxBuffer: 1024 * 1024 });
const digest = crypto.createHash('sha256').update(await fs.readFile(bundle)).digest('hex');
await fs.writeFile(path.join(dest, 'review-site-bundle.zip.sha256'), `${digest}  review-site-bundle.zip\n`);
console.log(`Packaged ${files.length} review-only files for commit ${commit}: ${path.relative(root, dest)}`);
