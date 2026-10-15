import fs from 'node:fs/promises';
import path from 'node:path';

// This is shared by the builder and the publication validator: alternates are selections too.
export const selectionFiles = [
  'd001-comparison-v001.json', 'd002-comparison-v001.json', 'd003-traditional-v001.json',
  'd004-comparison-v001.json', 'd005-comparison-v001.json', 'd006-comparison-v002.json',
  'd007-comparison-v001.json', 'd038-comparison-v002.json', 'd096-comparison-v003.json'
];
export async function loadSelections(root) {
  return Promise.all(selectionFiles.map(async file => {
    const batch = JSON.parse(await fs.readFile(path.join(root, 'art/batches', file), 'utf8'));
    return { ...batch, daskam_id: batch.daskam_id ?? batch.daskam, selectionFile: file };
  }));
}
export function selectedImages(batches) {
  return batches.flatMap(batch => batch.rows.flatMap(row => [
    { ...row.matte, chapter: batch.daskam_id, sloka: row.n, role: 'matte' },
    ...(row.alternates || []).map(item => ({ ...item, chapter: batch.daskam_id, sloka: row.n, role: 'alternate' }))
  ]));
}
