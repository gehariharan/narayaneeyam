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
const detailedSelection = JSON.parse(await fs.readFile(path.join(root, 'art/batches/d001-detailed-comparison-v001.json')));
const chapters = [];
for (const id of [1, 2]) {
  const d = `d${String(id).padStart(3, '0')}`;
  const content = JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`)));
  const plan = JSON.parse(await fs.readFile(path.join(root, `art/plans/${d}.json`)));
  const chapter = { id, title: `Dasakam ${id}`, description: content.description || '', rows: [] };
  for (const stanza of content.stanzas) {
    const n = stanza.n, s = String(n).padStart(3, '0');
    const ref = `intake/D00${id}/${s}.jpg`;
    const matteV = [1, 6, 9].includes(n) ? 3 : 2;
    const glossyV = [1, 6, 9].includes(n) ? 2 : 1;
    const matte = id === 1 ? `artifacts/d001/s${s}/landscape/master.png` : `artifacts/d002/s${s}/landscape/candidate-v00${matteV}.png`;
    const glossy = id === 2 ? `artifacts/d002/s${s}/landscape/candidate-v00${glossyV}.png` : detailedSelection.candidates.find(c => c.n === n).file;
    const images = [
      { role: 'reference', label: 'Original reference', version: `${s}.jpg`, key: await asset(ref, `${d}-s${s}-reference`) },
      { role: 'matte', label: id === 1 ? 'Recovered mural' : 'Matte mural', version: id === 1 ? 'approved legacy' : `v00${matteV}`, key: await asset(matte, `${d}-s${s}-matte`) },
      { role: 'glossy', label: 'Glossy mural', version: id === 2 ? `v00${glossyV}` : detailedSelection.candidates.find(c => c.n === n).version, key: glossy ? await asset(glossy, `${d}-s${s}-glossy`) : null }
    ];
    chapter.rows.push({ n, title: plan.stanzas.find(x => x.n === n)?.alt || `Sloka ${s}`, commentary: stanza.commentary_en || stanza.meaning_en || '', commentarySource: stanza.commentary_source || '', translation: stanza.translation_en || '', translationSource: stanza.translation_source || '', editorialStatus: stanza.review_status || 'needs-review', images });
  }
  chapter.representative = chapter.rows[0].images[1].key;
  chapters.push(chapter);
}
for (const id of [38,96]) {
  const d=chapterSlug(id);
  const importedSelection = JSON.parse(await fs.readFile(path.join(root, `art/batches/${d}-comparison-v001.json`)));
  const content=JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`)));
  const plan=JSON.parse(await fs.readFile(path.join(root, `art/plans/${d}.json`)));
  const chapter={id,title:`Dasakam ${id}`,description:importedSelection.description||content.description,rows:[]};
  for(const stanza of content.stanzas.filter(s=>importedSelection.rows.some(r=>r.n===s.n))){
    const n=stanza.n,s=String(n).padStart(3,'0');
    const selected=importedSelection.rows.find(r=>r.n===n);
    if(!selected)throw new Error(`Missing ${d} selection ${n}`);
    const images=[];
    for(const role of ['reference','matte','glossy']){
      const item=selected[role];
      images.push({role,label:role,version:item.version,key:await asset(item.file,`${d}-s${s}-${role}`)});
    }
    chapter.rows.push({n,title:plan.stanzas.find(x=>x.n===n).alt,commentary:stanza.commentary_en||stanza.meaning_en||'',commentarySource:stanza.commentary_source||'',translation:stanza.translation_en||'',translationSource:stanza.translation_source||'',editorialStatus:stanza.review_status||'needs-review',images});
  }
  chapter.representative=(chapter.rows[2]||chapter.rows[0]).images[1].key;
  chapters.push(chapter);
}
const dataset = { revision: crypto.createHash('sha256').update(JSON.stringify(chapters)).digest('hex').slice(0, 16), chapters, assets };
await fs.writeFile(path.join(dest, 'data.json'), JSON.stringify(dataset));
await fs.writeFile(path.join(dest, 'asset-provenance.json'), JSON.stringify(provenance, null, 2));
await fs.writeFile(path.join(dest, 'index.html'), renderIndex(dataset, './', false));
for (const chapter of chapters) await fs.writeFile(path.join(dest, `${chapterSlug(chapter.id)}.html`), renderChapter(chapter, dataset.revision, './', false, chapters));
console.log(`Built ${chapters.length} chapters, ${chapters.reduce((n,c)=>n+c.rows.length,0)} rows and ${Object.keys(assets).length} distinct review images.`);
