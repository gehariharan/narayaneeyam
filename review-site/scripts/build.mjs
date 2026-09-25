import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { renderIndex, renderChapter, chapterSlug } from '../views.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const dest = path.join(root, 'artifacts/review-site');
await fs.mkdir(path.join(dest, 'media'), { recursive: true });
const assets = {};
const provenance = [];
async function asset(source, label) {
  const data = await fs.readFile(path.join(root, source));
  const sourceHash = crypto.createHash('sha256').update(data).digest('hex');
  const bytes = await sharp(data).rotate().resize({ width: 1672, withoutEnlargement: true }).webp({ quality: 90 }).toBuffer();
  const hash = crypto.createHash('sha256').update(bytes).digest('hex');
  const key = `media/${label}-${hash.slice(0, 16)}.webp`;
  await fs.writeFile(path.join(dest, key), bytes);
  assets[key] = { type: 'image/webp', bytes: bytes.length, sha256: hash };
  provenance.push({ source, sourceHash, key });
  return key;
}
function vettedCommentary(stanza, daskam) {
  const source = stanza.commentary_source || '';
  const chapter = String(daskam).padStart(3, '0');
  const allowed = new RegExp(`^(?:intake/D${chapter}/photo-captions\\.txt|content/sources/d${chapter}/(?:photo-captions\\.txt|COMMENTRY\\.txt))#\\d+$`).test(source);
  if (!allowed) throw new Error(`Unvetted commentary source for D${String(daskam).padStart(3, '0')} S${String(stanza.n).padStart(3, '0')}: ${source || '(missing)'}`);
  if (!stanza.commentary_en) throw new Error(`Missing vetted commentary text for D${chapter} S${String(stanza.n).padStart(3, '0')}`);
  return stanza.commentary_en;
}
const chapters = [];
for (const id of [2]) {
  const d = `d${String(id).padStart(3, '0')}`;
  const content = JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`)));
  const plan = JSON.parse(await fs.readFile(path.join(root, `art/plans/${d}.json`)));
  const chapter = { id, title: `Dasakam ${id}`, description: content.description || '', rows: [] };
  for (const stanza of content.stanzas) {
    const n = stanza.n, s = String(n).padStart(3, '0');
    const ref = `intake/D00${id}/${s}.jpg`;
    const matteV = [1, 6, 9].includes(n) ? 3 : 2;
    const matte = id === 1 ? `artifacts/d001/s${s}/landscape/master.png` : `artifacts/d002/s${s}/landscape/candidate-v00${matteV}.png`;
    const images = [
      { role: 'reference', label: 'Original reference', version: `${s}.jpg`, key: await asset(ref, `${d}-s${s}-reference`) },
      { role: 'matte', label: 'Traditional matte mural', version: id === 1 ? 'approved legacy' : `v00${matteV}`, key: await asset(matte, `${d}-s${s}-matte`) }
    ];
    chapter.rows.push({ n, title: plan.stanzas.find(x => x.n === n)?.alt || `Sloka ${s}`, commentary: vettedCommentary(stanza, id), commentarySource: stanza.commentary_source, editorialStatus: stanza.review_status || 'needs-review', images });
  }
  chapter.representative = chapter.rows[0].images[1].key;
  chapters.push(chapter);
}
for (const { id, selectionFile } of [
  { id: 1, selectionFile: 'd001-comparison-v001.json' },
  { id: 3, selectionFile: 'd003-traditional-v001.json' },
  { id: 4, selectionFile: 'd004-comparison-v001.json' },
  { id: 38, selectionFile: 'd038-comparison-v002.json' },
  { id: 96, selectionFile: 'd096-comparison-v003.json' }
]) {
  const d=chapterSlug(id);
  const importedSelection = JSON.parse(await fs.readFile(path.join(root, `art/batches/${selectionFile}`)));
  const content=JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`)));
  const plan=JSON.parse(await fs.readFile(path.join(root, `art/plans/${d}.json`)));
  const chapter={id,title:`Dasakam ${id}`,description:content.description||importedSelection.description||'',rows:[]};
  for(const stanza of content.stanzas.filter(s=>importedSelection.rows.some(r=>r.n===s.n))){
    const n=stanza.n,s=String(n).padStart(3,'0');
    const selected=importedSelection.rows.find(r=>r.n===n);
    if(!selected)throw new Error(`Missing ${d} selection ${n}`);
    const images=[];
    for(const role of ['reference','matte']){
      const item=selected[role];
      const actualHash=crypto.createHash('sha256').update(await fs.readFile(path.join(root,item.file))).digest('hex');
      if(actualHash!==item.sha256)throw new Error(`Selection checksum mismatch for ${d} S${s} ${role}`);
      images.push({role,label:role,version:item.version,key:await asset(item.file,`${d}-s${s}-${role}`)});
    }
    chapter.rows.push({n,title:plan.stanzas.find(x=>x.n===n).alt,commentary:vettedCommentary(stanza,id),commentarySource:stanza.commentary_source,editorialStatus:stanza.review_status||'needs-review',images});
  }
  chapter.representative=(chapter.rows[2]||chapter.rows[0]).images[1].key;
  chapters.push(chapter);
}
chapters.sort((a, b) => a.id - b.id);
const dataset = { revision: crypto.createHash('sha256').update(JSON.stringify(chapters)).digest('hex').slice(0, 16), chapters, assets };
await fs.writeFile(path.join(dest, 'data.json'), JSON.stringify(dataset));
await fs.writeFile(path.join(dest, 'asset-provenance.json'), JSON.stringify(provenance, null, 2));
await fs.writeFile(path.join(dest, 'index.html'), renderIndex(dataset, './', false));
for (const chapter of chapters) await fs.writeFile(path.join(dest, `${chapterSlug(chapter.id)}.html`), renderChapter(chapter, dataset.revision, './', false, chapters));
console.log(`Built ${chapters.length} chapters, ${chapters.reduce((n,c)=>n+c.rows.length,0)} rows and ${Object.keys(assets).length} distinct review images.`);
