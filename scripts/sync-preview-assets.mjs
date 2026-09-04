import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { glob } from 'node:fs/promises';
import sharp from 'sharp';

const root = process.cwd();
let count = 0;
for await (const manifestPath of glob('art/approved/d*.json', { cwd: root })) {
  const manifest = JSON.parse(await readFile(path.join(root, manifestPath), 'utf8'));
  const slug = `d${String(manifest.daskam_id).padStart(3, '0')}`;
  for (const stanza of manifest.stanzas ?? []) {
    const stanzaSlug = `s${String(stanza.n).padStart(3, '0')}`;
    for (const orientation of ['landscape', 'portrait']) {
      const asset = stanza[orientation];
      if (!asset?.master_path || ['missing', 'planned'].includes(asset.status)) continue;
      const source = path.resolve(root, asset.master_path);
      const destination = path.join(root, 'public', 'images', slug, `${stanzaSlug}-${orientation}.webp`);
      await mkdir(path.dirname(destination), { recursive: true });
      const limit = orientation === 'landscape' ? { width: 1600 } : { height: 1800 };
      await sharp(source).resize({ ...limit, withoutEnlargement: true }).webp({ quality: 88 }).toFile(destination);
      console.log(path.relative(root, destination));
      count++;
    }
  }
}
console.log(`Synced ${count} preview image(s).`);
