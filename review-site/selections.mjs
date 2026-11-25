import fs from 'node:fs/promises';
import path from 'node:path';

// This is shared by the builder and the publication validator: alternates are selections too.
export const selectionFiles = [
  'd001-comparison-v001.json', 'd002-comparison-v001.json', 'd003-traditional-v001.json', 'd045-comparison-v005.json',
  'd004-comparison-v001.json', 'd005-comparison-v001.json', 'd006-comparison-v002.json',
  'd007-comparison-v001.json', 'd008-comparison-v001.json', 'd009-comparison-v001.json', 'd010-comparison-v001.json',
  'd011-comparison-v001.json', 'd012-comparison-v001.json', 'd013-comparison-v001.json', 'd014-comparison-v001.json', 'd027-comparison-v001.json', 'd028-comparison-v001.json', 'd029-comparison-v003.json', 'd031-comparison-v001.json', 'd032-comparison-v001.json', 'd033-comparison-v001.json', 'd034-comparison-v001.json', 'd035-comparison-v001.json', 'd036-comparison-v001.json', 'd037-comparison-v006.json', 'd038-comparison-v002.json', 'd039-comparison-v001.json', 'd040-comparison-v001.json', 'd041-comparison-v001.json', 'd042-comparison-v001.json', 'd043-comparison-v001.json', 'd044-comparison-v001.json', 'd046-comparison-v001.json', 'd047-comparison-v001.json', 'd048-comparison-v005.json', 'd062-comparison-v001.json', 'd063-comparison-v008.json', 'd064-comparison-v001.json', 'd065-comparison-v001.json', 'd066-comparison-v001.json', 'd067-comparison-v001.json', 'd072-comparison-v001.json', 'd094-comparison-v015.json', 'd095-comparison-v006.json', 'd096-comparison-v003.json', 'd098-comparison-v004.json', 'd099-comparison-v001.json', 'd100-comparison-v001.json'
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
