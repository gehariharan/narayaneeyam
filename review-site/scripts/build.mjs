import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { loadSelections } from '../selections.mjs';
import { validateSelections, reviewFor, validateBundle } from '../image-review.mjs';
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
const batches = await loadSelections(root);
const validation = await validateSelections(root, batches);
for (const importedSelection of batches) {
  const id = importedSelection.daskam_id;
  const d = chapterSlug(id);
  const content=JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`)));
  const plan=JSON.parse(await fs.readFile(path.join(root, `art/plans/${d}.json`)));
  const chapter={id,title:`Dasakam ${id}`,description:content.description||importedSelection.description||'',reviewNotice:importedSelection.review_notice||'',rows:[]};
  for(const stanza of content.stanzas.filter(s=>importedSelection.rows.some(r=>r.n===s.n))){
    const n=stanza.n,s=String(n).padStart(3,'0');
    const selected=importedSelection.rows.find(r=>r.n===n);
    if(!selected)throw new Error(`Missing ${d} selection ${n}`);
    const images=[];
    for(const role of ['reference','matte']){
      const item=selected[role];
      const actualHash=crypto.createHash('sha256').update(await fs.readFile(path.join(root,item.file))).digest('hex');
      if(actualHash!==item.sha256)throw new Error(`Selection checksum mismatch for ${d} S${s} ${role}`);
      const mediaLabel=id===5?`${d}-s${s}-${role}-${item.version||'selected'}`:`${d}-s${s}-${role}`;
      const review = role === 'reference' ? null : reviewFor(validation, { ...item, chapter:id, sloka:n, role });
      images.push({role,label:role,displayLabel:item.displayLabel,version:item.version,key:await asset(item.file,mediaLabel), ...(review ? {inspectionStatus:review.status,inspectionLabel:review.label} : {})});
    }
    for(const item of selected.alternates||[]){
      const actualHash=crypto.createHash('sha256').update(await fs.readFile(path.join(root,item.file))).digest('hex');
      if(actualHash!==item.sha256)throw new Error(`Selection checksum mismatch for ${d} S${s} alternate ${item.version||''}`);
      const review = reviewFor(validation, { ...item, chapter:id, sloka:n, role:'alternate' });
      images.push({inspectionStatus:review.status,inspectionLabel:review.label,role:'alternate',label:item.label||'Alternate candidate',displayLabel:item.displayLabel||item.label,version:item.version,key:await asset(item.file,`${d}-s${s}-alternate-${item.version||'candidate'}`)});
    }
    chapter.rows.push({n,title:plan.stanzas.find(x=>x.n===n).alt,commentary:vettedCommentary(stanza,id),commentarySource:stanza.commentary_source,editorialStatus:stanza.review_status||'needs-review',images});
  }
  chapter.representative=(id === 2 ? chapter.rows[0] : (chapter.rows[2]||chapter.rows[0])).images[1].key;
  chapters.push(chapter);
}
chapters.sort((a, b) => a.id - b.id);
const dataset = { revision: crypto.createHash('sha256').update(JSON.stringify(chapters)).digest('hex').slice(0, 16), chapters, assets };
await fs.writeFile(path.join(dest, 'data.json'), JSON.stringify(dataset));
await fs.writeFile(path.join(dest, 'asset-provenance.json'), JSON.stringify(provenance, null, 2));
await fs.writeFile(path.join(dest, 'index.html'), renderIndex(dataset, './', false));
for (const chapter of chapters) await fs.writeFile(path.join(dest, `${chapterSlug(chapter.id)}.html`), renderChapter(chapter, dataset.revision, './', false, chapters));
await validateBundle(root, dest);
console.log(`Built ${chapters.length} chapters, ${chapters.reduce((n,c)=>n+c.rows.length,0)} rows and ${Object.keys(assets).length} distinct review images.`);
