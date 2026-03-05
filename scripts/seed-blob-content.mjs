/**
 * One-time script: upload existing daskam01.json to Vercel Blob
 * and create the daskam index.
 *
 * Usage: node scripts/seed-blob-content.mjs
 * Requires: BLOB_READ_WRITE_TOKEN env var
 */
import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { put } from '@vercel/blob';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error('Missing BLOB_READ_WRITE_TOKEN');
  process.exit(1);
}

const d01 = JSON.parse(await readFile('src/content/daskam01.json', 'utf-8'));

// Upload daskam content
console.log('Uploading content/daskam-01.json...');
await put('content/daskam-01.json', JSON.stringify(d01, null, 2), {
  access: 'public',
  contentType: 'application/json',
  addRandomSuffix: false,
  token,
});
console.log('  done');

// Create/update index
const index = {
  version: 1,
  daskams: [
    {
      id: 1,
      title: d01.title,
      description: 'Brahma-tattva and the blessing of Guruvayur.',
      status: 'published',
      slokaCount: d01.stanzas.length,
      updatedAt: new Date().toISOString(),
    },
  ],
};

console.log('Uploading content/daskam-index.json...');
await put('content/daskam-index.json', JSON.stringify(index, null, 2), {
  access: 'public',
  contentType: 'application/json',
  addRandomSuffix: false,
  token,
});
console.log('  done');

console.log('\nSeed complete. Daskam 1 uploaded and marked as published.');
