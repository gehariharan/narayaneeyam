import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const args = Object.fromEntries(process.argv.slice(2).map((arg) => {
  const match = arg.match(/^--([^=]+)=(.+)$/);
  return match ? [match[1], match[2]] : [arg.replace(/^--/, ''), true];
}));
const daskamId = Number(args.daskam);
const stanzaNumber = Number(args.sloka ?? args.stanza);
const orientation = args.orientation;
const candidate = args.file ? path.resolve(args.file) : null;
if (!Number.isInteger(daskamId) || !Number.isInteger(stanzaNumber) || !['landscape', 'portrait'].includes(orientation) || !candidate) {
  console.error('Usage: npm run art:approve -- --daskam=1 --sloka=1 --orientation=portrait --file=path/to/candidate.png');
  process.exit(1);
}

const root = process.cwd();
const slug = `d${String(daskamId).padStart(3, '0')}`;
const stanzaSlug = `s${String(stanzaNumber).padStart(3, '0')}`;
const manifestPath = path.join(root, 'art', 'approved', `${slug}.json`);
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const record = manifest.stanzas.find((item) => item.n === stanzaNumber);
if (!record) throw new Error(`No approval record for ${slug}/${stanzaSlug}`);

const metadata = await sharp(candidate).metadata();
if (!metadata.width || !metadata.height || !metadata.format) throw new Error('Candidate is not a readable raster image');
const expected = orientation === 'landscape' ? 16 / 9 : 4 / 5;
const actual = metadata.width / metadata.height;
if (Math.abs(actual - expected) > 0.035) {
  throw new Error(`${orientation} candidate is ${metadata.width}x${metadata.height}; expected ${orientation === 'landscape' ? '16:9' : '4:5'} without cropping`);
}

const masterDir = path.join(root, 'artifacts', slug, stanzaSlug, orientation);
await mkdir(masterDir, { recursive: true });
const prior = await readdir(masterDir);
const versions = prior
  .map((name) => name.match(/^master-v(\d{3})\./))
  .filter(Boolean)
  .map((match) => Number(match[1]));
const version = Math.max(0, ...versions) + 1;
const extension = metadata.format === 'jpeg' ? 'jpg' : metadata.format;
const destination = path.join(masterDir, `master-v${String(version).padStart(3, '0')}.${extension}`);
await copyFile(candidate, destination);
const hash = createHash('sha256').update(await readFile(destination)).digest('hex');

record[orientation] = {
  status: 'approved',
  master_path: path.relative(root, destination).replaceAll('\\', '/'),
  preview_path: `/images/${slug}/${stanzaSlug}-${orientation}.webp`,
  sha256: hash,
  approved_at: new Date().toISOString(),
  source_candidate: path.relative(root, candidate).replaceAll('\\', '/'),
  dimensions: { width: metadata.width, height: metadata.height },
};
manifest.updated_at = new Date().toISOString();
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(`Approved ${path.relative(root, destination)}`);
console.log('Run npm run preview:sync, then npm run studio:validate.');
