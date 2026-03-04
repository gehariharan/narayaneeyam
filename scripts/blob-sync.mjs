import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { put } from '@vercel/blob';
import sharp from 'sharp';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) throw new Error('Missing BLOB_READ_WRITE_TOKEN');

const ROOT = path.resolve('public/images');
const MANIFEST_PATH = path.resolve('src/content/blob-manifest.json');

function sha1(buf) {
  return crypto.createHash('sha1').update(buf).digest('hex');
}

async function loadManifest() {
  try {
    return JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf-8'));
  } catch {
    return { version: 1, updatedAt: null, objects: {} };
  }
}

async function saveManifest(m) {
  m.updatedAt = new Date().toISOString();
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(m, null, 2) + '\n');
}

async function uploadOnce(key, buf, contentType) {
  const res = await put(key, buf, {
    access: 'public',
    contentType,
    token,
    allowOverwrite: true,
  });
  return res.url;
}

async function main() {
  const manifest = await loadManifest();

  // We treat current PNGs as masters.
  const files = (await fs.readdir(ROOT)).filter(f => f.startsWith('d01-') && f.endsWith('.png'));
  files.sort();

  for (const file of files) {
    const full = path.join(ROOT, file);
    const pngBuf = await fs.readFile(full);
    const pngHash = sha1(pngBuf);

    const mkeyMaster = `daskam-01/masters/${file}`;
    const stateMaster = manifest.objects[mkeyMaster];

    if (!stateMaster || stateMaster.sha1 !== pngHash) {
      console.log('UPLOAD master', mkeyMaster);
      const url = await uploadOnce(mkeyMaster, pngBuf, 'image/png');
      manifest.objects[mkeyMaster] = { sha1: pngHash, url, bytes: pngBuf.length };
    } else {
      console.log('SKIP master', mkeyMaster);
    }

    // Create web-optimized WebP (1280x720) from PNG master.
    const webName = file.replace(/\.png$/, '.webp');
    const webKey = `daskam-01/web/${webName}`;

    const webBuf = await sharp(pngBuf)
      .resize(1280, 720, { fit: 'cover', position: 'centre' })
      .webp({ quality: 85 })
      .toBuffer();

    const webHash = sha1(webBuf);
    const stateWeb = manifest.objects[webKey];

    if (!stateWeb || stateWeb.sha1 !== webHash) {
      console.log('UPLOAD web', webKey);
      const url = await uploadOnce(webKey, webBuf, 'image/webp');
      manifest.objects[webKey] = { sha1: webHash, url, bytes: webBuf.length };
    } else {
      console.log('SKIP web', webKey);
    }
  }

  await saveManifest(manifest);

  // Print web URLs for convenience
  const out = Object.entries(manifest.objects)
    .filter(([k]) => k.startsWith('daskam-01/web/'))
    .sort()
    .map(([k, v]) => `${k} -> ${v.url}`)
    .join('\n');
  console.log('\nWEB URLS:\n' + out);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
