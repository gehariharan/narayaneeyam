import { validateBundle } from '../image-review.mjs';
import { loadSelections, selectedImages } from '../selections.mjs';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import { renderChapter, renderIndex, chapterSlug } from '../views.mjs';
import { createServer } from 'node:http';
import { verifyLivePages } from './verify-live-pages.mjs';
// Test source import with the generated data replaced so Node requires no JSON import attribute.
await validateBundle(fileURLToPath(new URL('../..',import.meta.url)), fileURLToPath(new URL('../../artifacts/review-site',import.meta.url)));
const data=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/data.json',import.meta.url)));
const source=(await fs.readFile(new URL('../worker.mjs',import.meta.url),'utf8')).replace("import data from '../artifacts/review-site/data.json';",`const data=${JSON.stringify(data)};`).replace("from './views.mjs'",`from '${new URL('../views.mjs',import.meta.url).href}'`);
const {feedback,default:worker}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
for(const c of data.chapters){const html=renderChapter(c,data.revision);assert.equal((html.match(/class="sloka"/g)||[]).length,c.rows.length);assert.equal((html.match(/<figure>/g)||[]).length,c.rows.reduce((sum,r)=>sum+r.images.length,0));assert.equal((html.match(/data-feedback action/g)||[]).length,c.rows.length);assert.equal((html.match(/class="commentary"/g)||[]).length,c.rows.length);assert.ok(!html.includes('<select'));assert.ok(!html.includes('Editorial review pending'));assert.ok(!html.includes('<footer'));assert.ok(!html.includes('name="name"'));assert.ok(html.includes('Traditional matte mural')||html.includes('Landscape candidate'));assert.ok(!html.includes('Detailed painting'));assert.ok(!html.includes('Glossy mural'));assert.ok(!html.includes('<small>'));for(const r of c.rows)assert.ok(html.includes(r.commentary.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')));for(const r of c.rows)for(const i of r.images)if(i.key)await fs.access(new URL('../../artifacts/review-site/'+i.key,import.meta.url));}
assert.equal(data.chapters[1].rows.flatMap(r=>r.images).filter(i=>i.key).length,20);
let written;const env={FEEDBACK_LIMIT:{limit:async()=>({success:true})},DB:{prepare:sql=>({bind:(...args)=>({run:async()=>{written={sql,args}}})})}};
const good={daskam:2,sloka:1,message:'Check the hand.',revision:data.revision,website:''};
const req=(body,origin='https://gehariharan.com')=>new Request('https://gehariharan.com/narayaneeyam/api/feedback',{method:'POST',headers:{'content-type':'application/json',origin},body:JSON.stringify(body)});
assert.equal((await feedback(req(good),env)).status,201);assert.equal(written.args[5],'Check the hand.');assert.ok(written.args[8].includes('matte'));assert.equal(written.args[3],'generated');assert.equal(written.args[4],'other');assert.equal(written.args[6],'');assert.ok(JSON.parse(written.args[8]).every(i=>i.role!=='reference'&&i.key));assert.ok(written.sql.includes('VALUES (?,?,?,?,?,?,?,?,?,?)'));
assert.equal((await feedback(req(good,'https://evil.example'),env)).status,403);
assert.equal((await feedback(req({...good,sloka:99}),env)).status,400);
assert.equal((await feedback(req({...good,revision:'stale'}),env)).status,409);
assert.equal((await feedback(req({...good,message:'x'.repeat(9000)}),env)).status,413);
assert.equal((await feedback(req({...good,website:'spam'}),env)).status,400);
assert.equal((await feedback(req(good),{...env,FEEDBACK_LIMIT:{limit:async()=>({success:false})}})).status,429);
assert.equal((await worker.fetch(new Request('https://gehariharan.com/narayaneeyam/api/feedback'),env)).status,405);
assert.equal((await worker.fetch(new Request('https://gehariharan.com/narayaneeyam/media/not-allowed.webp'),env)).status,404);
const hostile=structuredClone(data.chapters[1]);hostile.rows[0].commentary='<script>alert(1)</script>';assert.ok(renderChapter(hostile,data.revision).includes('&lt;script&gt;'));
console.log('Passed: integrated comparison layout, local assets, vetted commentary, generated-only feedback, feedback persistence payload, injection escaping, origin/size/version validation, rate limiting, and closed feedback reads.');

const selectionBatches=await loadSelections(fileURLToPath(new URL('../..',import.meta.url)));
const expectedGenerated=selectedImages(selectionBatches).length;
const expectedRows=selectionBatches.reduce((sum,b)=>sum+b.rows.length,0);
const expectedMedia=expectedGenerated+selectionBatches.reduce((sum,b)=>sum+b.rows.reduce((n,r)=>n+(r.references||(r.reference?[r.reference]:[])).length,0),0);
assert.deepEqual(data.chapters.map(c=>c.id),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,62,63,64,65,66,67,72,94,95,96,97,98,99,100]);
assert.deepEqual(data.chapters.map(c=>c.id),selectionBatches.map(b=>b.daskam_id).sort((a,b)=>a-b));
assert.equal(data.chapters.reduce((sum,c)=>sum+c.rows.length,0),expectedRows);
assert.equal(Object.keys(data.assets).length,expectedMedia);
const generatedSelected=data.chapters.flatMap(c=>c.rows.flatMap(r=>r.images)).filter(i=>i.role!=='reference');
assert.equal(generatedSelected.length,expectedGenerated);
assert.equal(generatedSelected.filter(i=>i.inspectionStatus==='historical').length,69);
assert.equal(generatedSelected.filter(i=>i.inspectionStatus==='inspected').length,expectedGenerated-69);
const d11=data.chapters.find(c=>c.id===11);
assert.deepEqual(d11.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.ok(d11.rows.every(r=>r.images.filter(i=>i.role==='reference').length===1&&r.images.filter(i=>i.role==='matte').length===1));
assert.ok(d11.rows.every(r=>r.images.find(i=>i.role==='matte').inspectionStatus==='inspected'));
const d13=data.chapters.find(c=>c.id===13);
assert.deepEqual(d13.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.ok(d13.rows.every(r=>r.images.filter(i=>i.role==='reference').length===1&&r.images.filter(i=>i.role==='matte').length===1));
assert.ok(d13.rows.every(r=>r.images.find(i=>i.role==='matte').inspectionStatus==='inspected'));
const d14=data.chapters.find(c=>c.id===14);
assert.deepEqual(d14.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.ok(d14.rows.every(r=>r.images.filter(i=>i.role==='reference').length===1&&r.images.filter(i=>i.role==='matte').length===1));
assert.ok(d14.rows.every(r=>r.images.find(i=>i.role==='matte').inspectionStatus==='inspected'));
const d27=data.chapters.find(c=>c.id===27);
assert.ok(d27);assert.deepEqual(d27.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11]);
assert.ok(d27.reviewNotice.toLowerCase().includes('unapproved'));
const content27=JSON.parse(await fs.readFile(new URL('../../content/daskams/d027.json',import.meta.url)));
const selected27=JSON.parse(await fs.readFile(new URL('../../art/batches/d027-comparison-v001.json',import.meta.url)));
assert.equal(selected27.rows.length,11);assert.equal(selected27.review_status,'needs-review');
for(const row of d27.rows){assert.equal(row.commentary,content27.stanzas.find(s=>s.n===row.n).commentary_en);assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);}
assert.equal((await feedback(req({...good,daskam:27,sloka:11}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:27,sloka:12}),env)).status,400);
const d37=data.chapters.find(c=>c.id===37);
assert.ok(d37);assert.deepEqual(d37.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.ok(d37.reviewNotice.toLowerCase().includes('unapproved'));
const content37=JSON.parse(await fs.readFile(new URL('../../content/daskams/d037.json',import.meta.url)));
const selected37=JSON.parse(await fs.readFile(new URL('../../art/batches/d037-comparison-v006.json',import.meta.url)));
const provenance37=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected37.rows.length,10);assert.equal(selected37.review_status,'needs-review');
for(const row of d37.rows){const selected=selected37.rows.find(r=>r.n===row.n);assert.equal(row.commentary,content37.stanzas.find(s=>s.n===row.n).commentary_en);assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');for(const role of ['reference','matte'])assert.equal(provenance37.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);}
assert.equal((await feedback(req({...good,daskam:37,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:37,sloka:11}),env)).status,400);
const d48=data.chapters.find(c=>c.id===48);assert.ok(d48);assert.deepEqual(d48.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content48=JSON.parse(await fs.readFile(new URL('../../content/daskams/d048.json',import.meta.url)));
const selected48=JSON.parse(await fs.readFile(new URL('../../art/batches/d048-comparison-v005.json',import.meta.url)));
const provenance48=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected48.rows.length,10);assert.equal(selected48.review_status,'needs-review');assert.ok(d48.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of d48.rows){
 assert.equal(row.commentarySource,`intake/D048/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content48.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected48.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance48.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:48,sloka:10}),env)).status,201);assert.equal((await feedback(req({...good,daskam:48,sloka:11}),env)).status,400);
console.log('Passed: D048 has ten caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');
const d42=data.chapters.find(c=>c.id===42);
assert.deepEqual(d42.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11]);
assert.ok(d42.rows.every(r=>r.images.filter(i=>i.role==='reference').length===1&&r.images.filter(i=>i.role==='matte').length===1));
assert.ok(d42.rows.every(r=>r.images.find(i=>i.role==='matte').inspectionStatus==='inspected'));
const selected42=JSON.parse(await fs.readFile(new URL('../../art/batches/d042-comparison-v001.json',import.meta.url)));
const provenance42=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
for(const row of d42.rows){const selected=selected42.rows.find(r=>r.n===row.n);assert.equal(row.commentarySource,`intake/D042/photo-captions.txt#${String(row.n).padStart(3,'0')}`);for(const role of ['reference','matte'])assert.equal(provenance42.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);}
assert.equal((await feedback(req({...good,daskam:42,sloka:11}),env)).status,201);
console.log(`Passed: ${data.chapters.length} chapters, ${expectedRows} rows, ${expectedMedia} media, ${expectedGenerated} generated selections (69 historical, ${expectedGenerated-69} inspected), including Dasakam 30, 45, 46, 47, 49, 65, 94, 97, 100, D041, D042, D048, D062, D064, D072 and all ten D011, D012, D013, D014, D029, D031, D034, D040, D043, D044 and D067 leads.`);
const indexHtml=renderIndex(data);assert.ok(indexHtml.includes('/narayaneeyam/d003'));assert.ok(indexHtml.includes('/narayaneeyam/d038'));assert.ok(!indexHtml.includes('/d0038'));
for(const c of data.chapters){
 const response=await worker.fetch(new Request('https://gehariharan.com/narayaneeyam/'+chapterSlug(c.id)),env);
 assert.equal(response.status,200);const html=await response.text();
 for(const next of data.chapters)assert.ok(html.includes('/narayaneeyam/'+chapterSlug(next.id)));
}
assert.equal((await worker.fetch(new Request('https://gehariharan.com/narayaneeyam/d0038'),env)).status,404);
assert.equal((await feedback(req({...good,daskam:38}),env)).status,201);assert.equal(written.args[1],38);assert.equal(JSON.parse(written.args[8]).length,1);
console.log('Passed: D038 routing, chapter navigation, generated-only D038 feedback.');

assert.equal((await feedback(req({...good,daskam:96,sloka:4}),env)).status,201);assert.equal((await feedback(req({...good,daskam:96,sloka:11}),env)).status,400);

const full96=data.chapters.find(c=>c.id===96);assert.deepEqual(full96.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const provenance=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
const borderless96=JSON.parse(await fs.readFile(new URL('../../art/batches/d096-comparison-v003.json',import.meta.url)));
for(const row of full96.rows)for(const role of ['matte']){const selected=borderless96.rows.find(r=>r.n===row.n)[role];assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected.sha256);}
console.log('Passed: all ten D096 slokas use the selected borderless candidate hashes.');

const full3=data.chapters.find(c=>c.id===3);assert.deepEqual(full3.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const selected3=JSON.parse(await fs.readFile(new URL('../../art/batches/d003-traditional-v001.json',import.meta.url)));
for(const row of full3.rows){assert.equal(row.images.length,2);assert.equal(row.commentarySource,`content/sources/d003/photo-captions.txt#${String(row.n).padStart(3,'0')}`);const selected=selected3.rows.find(r=>r.n===row.n);for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);}
assert.equal((await feedback(req({...good,daskam:3,sloka:10}),env)).status,201);
console.log('Passed: D003 contains exactly ten vetted-caption rows and selected reference/matte hashes.');

const full5=data.chapters.find(c=>c.id===5);assert.deepEqual(full5.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.equal(full5.rows.reduce((sum,r)=>sum+r.images.length,0),23);
assert.ok(full5.reviewNotice.includes('unapproved candidates'));
assert.ok(full5.reviewNotice.includes('translation are not yet available'));
for(const row of full5.rows){
 assert.equal(row.commentarySource,`intake/D005/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.images.filter(i=>i.role==='reference').length,1);
 assert.ok(row.images.some(i=>i.role==='matte'));
 if([1,7,10].includes(row.n))assert.equal(row.images.filter(i=>i.role==='alternate').length,1);
 else assert.equal(row.images.filter(i=>i.role==='alternate').length,0);
}
const selected5=JSON.parse(await fs.readFile(new URL('../../art/batches/d005-comparison-v001.json',import.meta.url)));
for(const row of full5.rows){const selected=selected5.rows.find(r=>r.n===row.n);for(const item of [selected.reference,selected.matte,...(selected.alternates||[])])assert.equal(provenance.find(p=>p.source===item.file).sourceHash,item.sha256);}
assert.equal((await feedback(req({...good,daskam:5,sloka:1}),env)).status,201);
assert.equal(JSON.parse(written.args[8]).length,2);
console.log('Passed: D005 has ten rows, thirteen candidate images, pinned source/candidate hashes, clear incomplete-source notice, and candidate-version feedback snapshots.');

const full6=data.chapters.find(c=>c.id===6);assert.deepEqual(full6.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.equal(full6.rows.reduce((sum,r)=>sum+r.images.length,0),23);
assert.ok(full6.reviewNotice.includes('All artwork is unapproved landscape candidate material'));
assert.ok(full6.reviewNotice.includes('English translations are not yet available'));
for(const row of full6.rows){
 assert.equal(row.commentarySource,`intake/D006/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.images.filter(i=>i.role==='reference').length,1);
 assert.ok(row.images.some(i=>i.role==='matte'));
 assert.equal(row.images.filter(i=>i.role==='alternate').length,row.n===1?2:row.n===7?1:0);
}
const selected6=JSON.parse(await fs.readFile(new URL('../../art/batches/d006-comparison-v002.json',import.meta.url)));
for(const row of full6.rows){const selected=selected6.rows.find(r=>r.n===row.n);for(const item of [selected.reference,selected.matte,...(selected.alternates||[])])assert.equal(provenance.find(p=>p.source===item.file).sourceHash,item.sha256);}
assert.equal((await feedback(req({...good,daskam:6,sloka:1}),env)).status,201);
assert.equal(JSON.parse(written.args[8]).length,3);
console.log('Passed: D006 has ten rows, thirteen unapproved landscape candidates, pinned reference/candidate hashes, editorial status notice, and version-specific feedback snapshots.');

const full8=data.chapters.find(c=>c.id===8);assert.deepEqual(full8.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11,12,13]);
assert.ok(full8.reviewNotice.includes('unapproved candidates'));
const content8=JSON.parse(await fs.readFile(new URL('../../content/daskams/d008.json',import.meta.url)));
const selected8=JSON.parse(await fs.readFile(new URL('../../art/batches/d008-comparison-v001.json',import.meta.url)));
for(const row of full8.rows){
 assert.equal(row.commentarySource,`intake/D008/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content8.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected8.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d008\/s\d{3}\/landscape\//);
}
assert.equal((await feedback(req({...good,daskam:8,sloka:13}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:8,sloka:14}),env)).status,400);
console.log('Passed: D008 has thirteen caption-mapped rows, one pinned reference and one unapproved landscape candidate each, and stanza-bounded feedback.');

const full9=data.chapters.find(c=>c.id===9);assert.deepEqual(full9.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content9=JSON.parse(await fs.readFile(new URL('../../content/daskams/d009.json',import.meta.url)));
const selected9=JSON.parse(await fs.readFile(new URL('../../art/batches/d009-comparison-v001.json',import.meta.url)));
for(const row of full9.rows){
 assert.equal(row.commentarySource,`intake/D009/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content9.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected9.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d009\/s\d{3}\/landscape\//);
}
assert.equal((await feedback(req({...good,daskam:9,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:9,sloka:11}),env)).status,400);
console.log('Passed: D009 has ten caption-mapped rows, one pinned reference and one unapproved landscape candidate each, and stanza-bounded feedback.');

const full12=data.chapters.find(c=>c.id===12);assert.deepEqual(full12.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content12=JSON.parse(await fs.readFile(new URL('../../content/daskams/d012.json',import.meta.url)));
const selected12=JSON.parse(await fs.readFile(new URL('../../art/batches/d012-comparison-v001.json',import.meta.url)));
for(const row of full12.rows){
 assert.equal(row.commentarySource,`intake/D012/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content12.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected12.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d012\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:12,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:12,sloka:11}),env)).status,400);
console.log('Passed: D012 consumes ten exact reference/candidate pairs with checksum-bound visual reviews and stanza-bounded feedback.');

const full10=data.chapters.find(c=>c.id===10);assert.deepEqual(full10.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content10=JSON.parse(await fs.readFile(new URL('../../content/daskams/d010.json',import.meta.url)));
const selected10=JSON.parse(await fs.readFile(new URL('../../art/batches/d010-comparison-v001.json',import.meta.url)));
for(const row of full10.rows){
 assert.equal(row.commentarySource,`intake/D010/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content10.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected10.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d010\/s\d{3}\/landscape\//);
}
assert.equal((await feedback(req({...good,daskam:10,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:10,sloka:11}),env)).status,400);
console.log('Passed: D010 has ten caption-mapped rows, one pinned reference and one unapproved landscape candidate each, and stanza-bounded feedback.');

const full13=data.chapters.find(c=>c.id===13);assert.deepEqual(full13.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content13=JSON.parse(await fs.readFile(new URL('../../content/daskams/d013.json',import.meta.url)));
const selected13=JSON.parse(await fs.readFile(new URL('../../art/batches/d013-comparison-v001.json',import.meta.url)));
assert.ok(full13.reviewNotice.includes('unapproved landscape candidates'));
for(const row of full13.rows){
 assert.equal(row.commentarySource,`intake/D013/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content13.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected13.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:13,sloka:10}),env)).status,201);
assert.equal(JSON.parse(written.args[8]).length,1);
console.log('Passed: D013 has ten caption-mapped rows, pinned references and selected candidate hashes, current inspection labels, and stanza-bounded feedback.');

const full14=data.chapters.find(c=>c.id===14);assert.ok(full14);assert.deepEqual(full14.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content14=JSON.parse(await fs.readFile(new URL('../../content/daskams/d014.json',import.meta.url)));
const selected14=JSON.parse(await fs.readFile(new URL('../../art/batches/d014-comparison-v001.json',import.meta.url)));
assert.equal(selected14.rows.length,10);assert.equal(selected14.review_status,'needs-review');
for(const row of full14.rows){
 assert.equal(row.commentarySource,`intake/D014/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content14.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected14.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d014\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
}
assert.equal((await feedback(req({...good,daskam:14,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:14,sloka:11}),env)).status,400);
console.log('Passed: D014 is integrated as ten caption-mapped rows with pinned references, unapproved landscape candidates and stanza-bounded feedback.');

const full34=data.chapters.find(c=>c.id===34);assert.ok(full34);assert.deepEqual(full34.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content34=JSON.parse(await fs.readFile(new URL('../../content/daskams/d034.json',import.meta.url)));
const selected34=JSON.parse(await fs.readFile(new URL('../../art/batches/d034-comparison-v001.json',import.meta.url)));
assert.equal(selected34.rows.length,10);assert.equal(selected34.review_status,'needs-review');
assert.ok(full34.reviewNotice.includes('Unapproved'));
for(const row of full34.rows){
 assert.equal(row.commentarySource,`intake/D034/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content34.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected34.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d034\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:34,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:34,sloka:11}),env)).status,400);
console.log('Passed: D034 has ten source-mapped rows, pinned references and inspected but unapproved landscape candidates, and stanza-bounded feedback.');

const full40=data.chapters.find(c=>c.id===40);assert.ok(full40);assert.deepEqual(full40.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content40=JSON.parse(await fs.readFile(new URL('../../content/daskams/d040.json',import.meta.url)));
const selected40=JSON.parse(await fs.readFile(new URL('../../art/batches/d040-comparison-v001.json',import.meta.url)));
assert.equal(selected40.rows.length,10);assert.equal(selected40.review_status,'needs-review');
assert.ok(full40.reviewNotice.includes('unapproved'));
for(const row of full40.rows){
 assert.equal(row.commentarySource,content40.stanzas.find(s=>s.n===row.n).commentary_source);
 assert.equal(row.commentary,content40.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected40.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:40,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:40,sloka:11}),env)).status,400);
console.log('Passed: D040 has ten source-mapped rows, pinned references and inspected but unapproved landscape candidates, and stanza-bounded feedback.');

const full41=data.chapters.find(c=>c.id===41);assert.ok(full41);assert.deepEqual(full41.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content41=JSON.parse(await fs.readFile(new URL('../../content/daskams/d041.json',import.meta.url)));
const selected41=JSON.parse(await fs.readFile(new URL('../../art/batches/d041-comparison-v001.json',import.meta.url)));
const versions41=JSON.parse(await fs.readFile(new URL('../../art/batches/d041-candidate-versions-v001.json',import.meta.url)));
assert.equal(selected41.rows.length,10);assert.equal(selected41.review_status,'needs-review');assert.equal(versions41.versions.length,26);
assert.ok(full41.reviewNotice.includes('unapproved'));
for(const row of full41.rows){
 const stanza=content41.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,stanza.commentary_source);assert.equal(row.commentary,stanza.commentary_en);
 assert.match(row.commentarySource,/photo-captions\.txt#(?:[1-9]|10)$/);assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected41.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
 assert.match(selected.matte.file,/^artifacts\/d041\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
}
assert.equal((await feedback(req({...good,daskam:41,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:41,sloka:11}),env)).status,400);
console.log('Passed: D041 has ten source-mapped rows, candidate-version inventory, pinned references and inspected but unapproved landscape candidates, and stanza-bounded feedback.');

const full43=data.chapters.find(c=>c.id===43);assert.ok(full43);assert.deepEqual(full43.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content43=JSON.parse(await fs.readFile(new URL('../../content/daskams/d043.json',import.meta.url)));
const selected43=JSON.parse(await fs.readFile(new URL('../../art/batches/d043-comparison-v001.json',import.meta.url)));
assert.equal(selected43.rows.length,10);assert.equal(selected43.review_status,'needs-review');
assert.ok(full43.reviewNotice.includes('unapproved'));
for(const row of full43.rows){
 assert.equal(row.commentarySource,content43.stanzas.find(s=>s.n===row.n).commentary_source);
 assert.equal(row.commentary,content43.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected43.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:43,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:43,sloka:11}),env)).status,400);
console.log('Passed: D043 has ten source-mapped rows, pinned references and inspected but unapproved landscape candidates, and stanza-bounded feedback.');

const full44=data.chapters.find(c=>c.id===44);assert.ok(full44);assert.deepEqual(full44.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content44=JSON.parse(await fs.readFile(new URL('../../content/daskams/d044.json',import.meta.url)));
const selected44=JSON.parse(await fs.readFile(new URL('../../art/batches/d044-comparison-v001.json',import.meta.url)));
assert.equal(selected44.rows.length,10);assert.equal(selected44.review_status,'needs-review');
assert.ok(full44.reviewNotice.includes('unapproved'));
for(const row of full44.rows){
 assert.equal(row.commentarySource,`intake/D044/photo-captions.txt#${String(row.n).padStart(3,'0')}`);
 assert.equal(row.commentary,content44.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected44.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d044\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
}
assert.equal((await feedback(req({...good,daskam:44,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:44,sloka:11}),env)).status,400);
console.log('Passed: D044 has ten source-mapped rows, pinned references and unapproved landscape candidates, and stanza-bounded feedback.');

const full28=data.chapters.find(c=>c.id===28);assert.ok(full28);
const content28=JSON.parse(await fs.readFile(new URL('../../content/daskams/d028.json',import.meta.url)));
const selected28=JSON.parse(await fs.readFile(new URL('../../art/batches/d028-comparison-v001.json',import.meta.url)));
assert.deepEqual(full28.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
assert.equal(selected28.review_status,'needs-review');assert.ok(full28.reviewNotice.includes('unapproved'));
for(const row of full28.rows){
 const stanza=content28.stanzas.find(s=>s.n===row.n),selected=selected28.rows.find(s=>s.n===row.n);
 assert.equal(row.commentary,stanza.commentary_en);assert.equal(row.commentarySource,stanza.commentary_source);
 assert.equal(row.images.at(-1).version,selected.matte.version);
 assert.equal(row.images.at(-1).inspectionStatus,'inspected');
 assert.equal((await feedback(req({...good,daskam:28,sloka:row.n,image_versions:[{version:'tampered'}]}),env)).status,201);
 assert.deepEqual(JSON.parse(written.args[8]),[{role:'matte',key:row.images.at(-1).key,version:row.images.at(-1).version}]);
}
assert.equal(full28.rows.find(r=>r.n===2).images.filter(i=>i.role==='reference').length,5);
assert.equal((await feedback(req({...good,daskam:28,sloka:11}),env)).status,400);
assert.equal((await feedback(req({...good,daskam:28,revision:'stale-d028'}),env)).status,409);
console.log('Passed: D028 has ten source-mapped rows, unapproved selected versions, and stanza-bounded feedback bound to the selected candidate.');

const full29=data.chapters.find(c=>c.id===29);assert.ok(full29);assert.deepEqual(full29.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content29=JSON.parse(await fs.readFile(new URL('../../content/daskams/d029.json',import.meta.url)));
const selected29=JSON.parse(await fs.readFile(new URL('../../art/batches/d029-comparison-v003.json',import.meta.url)));
assert.equal(selected29.rows.length,10);assert.equal(selected29.review_status,'needs-review');
assert.ok(full29.reviewNotice.includes('Unapproved D029 candidate comparison'));
for(const row of full29.rows){
 const stanza=content29.stanzas.find(s=>s.n===row.n);assert.ok(stanza);
 assert.equal(row.commentarySource,stanza.commentary_source);
 assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected29.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:29,sloka:10}),env)).status,201);
assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:29,sloka:11}),env)).status,400);
console.log('Passed: D029 has ten caption-mapped rows, checksum-pinned references and selected candidates, inspected but unapproved landscapes, and stanza-bounded feedback.');

const full31=data.chapters.find(c=>c.id===31);assert.ok(full31);assert.deepEqual(full31.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content31=JSON.parse(await fs.readFile(new URL('../../content/daskams/d031.json',import.meta.url)));
const selected31=JSON.parse(await fs.readFile(new URL('../../art/batches/d031-comparison-v001.json',import.meta.url)));
assert.equal(selected31.rows.length,10);assert.equal(selected31.review_status,'needs-review');assert.ok(full31.reviewNotice.includes('unapproved'));
for(const row of full31.rows){
 const stanza=content31.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,stanza.commentary_source);assert.equal(row.commentary,stanza.commentary_en);
 const selected=selected31.rows.find(r=>r.n===row.n);assert.ok(selected);
 const refs=selected.references||[selected.reference];
 assert.equal(row.images.length,refs.length+1);
 assert.deepEqual(row.images.slice(0,refs.length).map(i=>i.role),Array(refs.length).fill('reference'));
 for(let i=0;i<refs.length;i++)assert.equal(provenance.find(p=>p.key===row.images[i].key).sourceHash,refs[i].sha256);
 assert.equal(provenance.find(p=>p.key===row.images.at(-1).key).sourceHash,selected.matte.sha256);
 assert.equal(row.images.at(-1).role,'matte');assert.equal(row.images.at(-1).inspectionStatus,'inspected');
}
assert.equal(full31.rows.find(r=>r.n===9).images.filter(i=>i.role==='reference').length,2);
assert.deepEqual(selected31.rows.map(r=>r.matte.version),['v001','v001','v001','v002','v002','v005','v004','v002','v003','v002']);
assert.equal((await feedback(req({...good,daskam:31,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:31,sloka:11}),env)).status,400);
console.log('Passed: D031 has ten caption-mapped rows, both S009 references, pinned unapproved landscape candidates, and stanza-bounded feedback.');

const full36=data.chapters.find(c=>c.id===36);assert.ok(full36);assert.deepEqual(full36.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11]);
const selected36=JSON.parse(await fs.readFile(new URL('../../art/batches/d036-comparison-v001.json',import.meta.url)));
const plan36=JSON.parse(await fs.readFile(new URL('../../art/plans/d036.json',import.meta.url)));
assert.equal(selected36.rows.length,11);assert.equal(selected36.review_status,'needs-review');assert.match(full36.reviewNotice,/unapproved/i);
assert.deepEqual(selected36.rows.map(r=>r.matte.version),['v001','v001','v001','v001','v002','v001','v001','v002','v002','v002','v001']);
assert.match(selected36.visual_review_status,/S010 v002 passes with repeated background ancestor faces/);
for(const row of full36.rows){
 const scene=plan36.stanzas.find(s=>s.n===row.n);const selected=selected36.rows.find(r=>r.n===row.n);assert.ok(scene&&selected);
 const refs=selected.references||[selected.reference];assert.equal(row.images.length,refs.length+1);
 assert.deepEqual(row.images.slice(0,refs.length).map(i=>i.role),Array(refs.length).fill('reference'));
 for(let i=0;i<refs.length;i++)assert.equal(provenance.find(p=>p.key===row.images[i].key).sourceHash,refs[i].sha256);
 const matte=row.images.at(-1);assert.equal(matte.role,'matte');assert.equal(matte.version,selected.matte.version);assert.equal(matte.inspectionStatus,'inspected');
 assert.equal(scene.orientations.landscape.candidate_path,selected.matte.file);assert.equal(scene.orientations.landscape.candidate_sha256,selected.matte.sha256);
 assert.ok(selected.candidate_history.some(c=>c.selected&&c.version===selected.matte.version&&c.sha256===selected.matte.sha256));
 const producerPath=selected.notes.match(/`(art\/reviews\/d036-s\d{3}-landscape-v\d{3}-producer-v001\.md)`/)?.[1];assert.ok(producerPath);
 const producer=await fs.readFile(new URL('../../'+producerPath,import.meta.url),'utf8');assert.ok(producer.includes(`SHA-256 \`${selected.matte.sha256}\``));assert.ok(producer.includes('Review role: producer'));
}
assert.equal(selected36.rows.reduce((sum,r)=>sum+(r.references||[r.reference]).filter(ref=>ref?.file.startsWith('intake/D036/')).length,0),20);
assert.match(plan36.stanzas.find(s=>s.n===10).orientations.landscape.candidate_status,/repeated background ancestor faces/);
assert.match(selected36.rows.find(r=>r.n===10).producer_deviation,/captain art approval is pending/);
assert.equal((await feedback(req({...good,daskam:36,sloka:11}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:36,sloka:12}),env)).status,400);
console.log('Passed: D036 has eleven source-mapped, checksum-pinned landscape comparisons, producer reports, preserved candidate versions, explicit unapproved status, and stanza-bounded feedback.');

const full66=data.chapters.find(c=>c.id===66);assert.ok(full66);assert.deepEqual(full66.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content66=JSON.parse(await fs.readFile(new URL('../../content/daskams/d066.json',import.meta.url)));
const selected66=JSON.parse(await fs.readFile(new URL('../../art/batches/d066-comparison-v001.json',import.meta.url)));
assert.equal(selected66.rows.length,10);assert.equal(selected66.review_status,'needs-review');assert.ok(full66.reviewNotice.includes('unapproved'));
assert.deepEqual(selected66.rows.map(r=>r.matte.version),['v001','v004','v001','v001','v001','v004','v001','v001','v001','v004']);
assert.equal(selected66.candidate_history.length,19);
assert.deepEqual(selected66.candidate_history.filter(x=>x.disposition==='excluded-needs-fix').map(x=>`${x.stanza}:${x.version}`),['6:v001','6:v002','10:v001','10:v002']);
assert.equal(selected66.candidate_history.find(x=>x.stanza===6&&x.version==='v003').disposition,'unselected');
for(const row of full66.rows){
 const stanza=content66.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,stanza.commentary_source);assert.equal(row.commentary,stanza.commentary_en);
 const selected=selected66.rows.find(r=>r.n===row.n);assert.ok(selected);assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 const matte=row.images.find(i=>i.role==='matte');assert.equal(matte.version,selected.matte.version);assert.equal(matte.inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:66,sloka:6}),env)).status,201);
assert.deepEqual(JSON.parse(written.args[8]),[{role:'matte',key:full66.rows.find(r=>r.n===6).images.find(i=>i.role==='matte').key,version:'v004'}]);
assert.equal((await feedback(req({...good,daskam:66,sloka:11}),env)).status,400);
console.log('Passed: D066 has ten mapped, checksum-pinned and inspected landscape leads, unapproved labels, preserved excluded versions, and stanza-bounded feedback.');

const full67=data.chapters.find(c=>c.id===67);assert.ok(full67);assert.deepEqual(full67.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content67=JSON.parse(await fs.readFile(new URL('../../content/daskams/d067.json',import.meta.url)));
const selected67=JSON.parse(await fs.readFile(new URL('../../art/batches/d067-comparison-v001.json',import.meta.url)));
assert.equal(selected67.rows.length,10);assert.equal(selected67.review_status,'needs-review');assert.ok(full67.reviewNotice.includes('unapproved'));
for(const row of full67.rows){
 const stanza=content67.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,stanza.commentary_source);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected67.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d067\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:67,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:67,sloka:11}),env)).status,400);
console.log('Passed: D067 has ten source-mapped rows, version-pinned exact-checksum inspected but unapproved landscape candidates, and stanza-bounded feedback.');

const full62=data.chapters.find(c=>c.id===62);assert.ok(full62);assert.deepEqual(full62.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content62=JSON.parse(await fs.readFile(new URL('../../content/daskams/d062.json',import.meta.url)));
const selected62=JSON.parse(await fs.readFile(new URL('../../art/batches/d062-comparison-v001.json',import.meta.url)));
assert.equal(selected62.rows.length,10);assert.equal(selected62.review_status,'needs-review');assert.ok(full62.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full62.rows){
 assert.equal(row.commentarySource,`intake/D062/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content62.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected62.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full62.rows[5].images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
assert.equal((await feedback(req({...good,daskam:62,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:62,sloka:11}),env)).status,400);
console.log('Passed: D062 has ten caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');

const full97=data.chapters.find(c=>c.id===97);assert.ok(full97);assert.deepEqual(full97.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content97=JSON.parse(await fs.readFile(new URL('../../content/daskams/d097.json',import.meta.url)));
const selected97=JSON.parse(await fs.readFile(new URL('../../art/batches/d097-comparison-v013.json',import.meta.url)));
const provenance97=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
const visualReviews97=JSON.parse(await fs.readFile(new URL('../../art/reviews/visual-reviews.json',import.meta.url)));
const imageHash97=bytes=>createHash('sha256').update(bytes).digest('hex');
assert.equal(selected97.rows.length,10);assert.equal(selected97.review_status,'needs-review');assert.equal(selected97.artwork_approval,'not-approved');assert.equal(selected97.plan_sha256,'d034006eb1e0cc41d6988e60886b96abc70327ad3e7e015abd56f36fd79b34b2');assert.equal(selected97.review_request_id,'d097-independent-review-v010');assert.match(selected97.visual_review_status,/all ten selected versions passed independent exact-checksum review/i);assert.ok(full97.reviewNotice.toLowerCase().includes('unapproved'));assert.ok(full97.reviewNotice.toLowerCase().includes('captions are empty'));assert.ok(selected97.review_notice.toLowerCase().includes('none is art-approved'));
for(const row of full97.rows){
 const stanza=content97.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,`content/sources/d097/COMMENTRY.txt#${row.n}`);assert.equal(row.commentary,stanza.commentary_en);
 const selected=selected97.rows.find(r=>r.n===row.n);assert.deepEqual(row.images.map(i=>i.role),selected.reference?['reference','matte']:['matte']);
 for(const role of row.images.map(i=>i.role)){const selectedImage=role==='reference'?selected.reference:selected.matte;assert.equal(provenance97.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selectedImage.sha256);}
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');assert.ok(row.images.find(i=>i.role==='matte').inspectionLabel.toLowerCase().includes('not art approval'));
 const independent=selected.independent_review;assert.equal(independent.outcome,'pass');assert.equal(independent.plan_sha256,selected97.plan_sha256);assert.equal(independent.report_sha256,imageHash97(await fs.readFile(new URL(`../../${independent.report}`,import.meta.url))));
 const candidateReview=visualReviews97.reviews.find(r=>r.chapter===97&&r.sloka===row.n&&r.role==='matte'&&r.file===selected.matte.file&&r.version===selected.matte.version&&r.sha256===selected.matte.sha256);assert.ok(candidateReview);assert.equal(candidateReview.outcome,'pass');assert.equal(candidateReview.inspected_at,independent.inspected_at);assert.equal(candidateReview.reviewer,`Independent reviewer ${independent.reviewer_id}`);assert.ok(candidateReview.contracts.some(c=>c.path==='art/plans/d097.json'&&c.sha256===selected97.plan_sha256));
}
assert.equal((await feedback(req({...good,daskam:97,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:97,sloka:11}),env)).status,400);
console.log('Passed: D097 has ten stanza-bound comparison rows, exact-hash mapped references and unapproved candidates, tracked commentary sources and stanza-bounded feedback.');

const full30=data.chapters.find(c=>c.id===30);assert.ok(full30);assert.deepEqual(full30.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content30=JSON.parse(await fs.readFile(new URL('../../content/daskams/d030.json',import.meta.url)));
const selected30=JSON.parse(await fs.readFile(new URL('../../art/batches/d030-comparison-v013.json',import.meta.url)));
assert.equal(selected30.rows.length,10);assert.equal(selected30.review_status,'needs-review');assert.ok(full30.reviewNotice.toLowerCase().includes('unapproved'));assert.equal(selected30.rows[3].matte.version,'v010');assert.equal(selected30.rows[3].producer_review.outcome,'uncertain');assert.equal(selected30.rows[4].matte.version,'v019');assert.equal(selected30.rows[4].producer_review.outcome,'pass');assert.equal(selected30.rows[5].matte.version,'v015');assert.equal(selected30.rows[5].producer_review.outcome,'pass');assert.equal(selected30.rows[7].matte.version,'v007');assert.equal(selected30.rows[7].producer_review.outcome,'pass');assert.equal(selected30.rows[8].matte.version,'v010');assert.equal(selected30.rows[8].producer_review.outcome,'pass');assert.equal(selected30.rows[9].matte.version,'v008');assert.equal(selected30.rows[9].producer_review.outcome,'pass');
const referenceFiles30={1:'intake/D030/001.jpg',2:'intake/D030/002.jpg',3:'intake/D030/003.jpg',4:'intake/D030/004.jpg',5:'intake/D030/006.jpg',6:'intake/D030/007.jpg',7:'intake/D030/008.jpg',8:'intake/D030/009.jpg',9:'intake/D030/010.jpg',10:'artifacts/d030/no-reference-s010.svg'};
for(const row of full30.rows){
 const stanza=content30.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,`intake/D030/photo-captions.txt#${row.n}`);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected30.rows.find(r=>r.n===row.n);assert.ok(selected);
 assert.equal(selected.reference.file,referenceFiles30[row.n]);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d030\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal(selected30.rows[9].reference.file,'artifacts/d030/no-reference-s010.svg');
assert.equal(selected30.rows[9].reference.displayLabel,'No photo reference');
assert.ok(selected30.rows[9].candidate_status.includes('no photo is mapped'));
assert.equal((await feedback(req({...good,daskam:30,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:30,sloka:11}),env)).status,400);
console.log('Passed: D030 has ten caption-mapped rows, an explicit no-photo stanza 10 reference, version-pinned unapproved landscapes, provenance-backed references, and stanza-bounded feedback.');

const full49=data.chapters.find(c=>c.id===49);assert.ok(full49);assert.deepEqual(full49.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content49=JSON.parse(await fs.readFile(new URL('../../content/daskams/d049.json',import.meta.url)));
const selected49=JSON.parse(await fs.readFile(new URL('../../art/batches/d049-comparison-v013.json',import.meta.url)));
assert.equal(selected49.rows.length,10);assert.equal(selected49.review_status,'needs-review');assert.ok(full49.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full49.rows){
 assert.equal(row.commentarySource,`intake/D049/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content49.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected49.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.match(selected.matte.file,/^artifacts\/d049\/s\d{3}\/landscape\/candidate-v\d{3}\.png$/);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full49.rows[0].images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
assert.equal((await feedback(req({...good,daskam:49,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:49,sloka:11}),env)).status,400);
console.log('Passed: D049 has ten source-mapped reference rows, exact-checksum unapproved landscape candidates, separately attributed commentary, and stanza-bounded feedback.');

const full100=data.chapters.find(c=>c.id===100);assert.ok(full100);assert.deepEqual(full100.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11]);
const content100=JSON.parse(await fs.readFile(new URL('../../content/daskams/d100.json',import.meta.url)));
const selected100=JSON.parse(await fs.readFile(new URL('../../art/batches/d100-comparison-v001.json',import.meta.url)));
assert.equal(selected100.rows.length,11);assert.equal(selected100.review_status,'needs-review');assert.ok(full100.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full100.rows){
 assert.equal(row.commentarySource,`intake/D100/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content100.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected100.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:100,sloka:11}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:100,sloka:12}),env)).status,400);
console.log('Passed: D100 has eleven caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');

const full46=data.chapters.find(c=>c.id===46);assert.ok(full46);assert.deepEqual(full46.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content46=JSON.parse(await fs.readFile(new URL('../../content/daskams/d046.json',import.meta.url)));
const selected46=JSON.parse(await fs.readFile(new URL('../../art/batches/d046-comparison-v001.json',import.meta.url)));
assert.equal(selected46.rows.length,10);assert.equal(selected46.review_status,'needs-review');assert.ok(full46.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full46.rows){
 assert.equal(row.commentarySource,`intake/D046/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content46.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected46.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full46.rows[6].images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
assert.equal((await feedback(req({...good,daskam:46,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:46,sloka:11}),env)).status,400);
console.log('Passed: D046 has ten caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');

const full47=data.chapters.find(c=>c.id===47);assert.ok(full47);assert.deepEqual(full47.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content47=JSON.parse(await fs.readFile(new URL('../../content/daskams/d047.json',import.meta.url)));
const selected47=JSON.parse(await fs.readFile(new URL('../../art/batches/d047-comparison-v001.json',import.meta.url)));
const provenance47=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected47.rows.length,10);assert.equal(selected47.review_status,'needs-review');assert.ok(full47.reviewNotice.toLowerCase().includes('unapproved'));
assert.equal(selected47.artwork_approval,'not-approved');assert.equal(selected47.approval_manifest_updated,false);assert.equal(selected47.portrait_status,'paused');
for(const row of full47.rows){
 assert.equal(row.commentarySource,`intake/D047/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content47.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected47.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance47.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full47.rows[5].images.find(i=>i.role==='matte').inspectionLabel.toLowerCase().includes('not art approval'));
assert.equal((await feedback(req({...good,daskam:47,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:47,sloka:11}),env)).status,400);
console.log('Passed: D047 has ten caption-mapped, exact-hash reference/candidate pairs with independently reviewed, unapproved selections and stanza-bounded feedback.');


const full95=data.chapters.find(c=>c.id===95);assert.ok(full95);assert.deepEqual(full95.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content95=JSON.parse(await fs.readFile(new URL('../../content/daskams/d095.json',import.meta.url)));
const selected95=JSON.parse(await fs.readFile(new URL('../../art/batches/d095-comparison-v006.json',import.meta.url)));
const provenance95=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected95.rows.length,10);assert.equal(selected95.review_status,'needs-review');assert.ok(full95.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full95.rows){
 assert.equal(row.commentarySource,`intake/D095/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content95.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected95.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance95.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:95,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:95,sloka:11}),env)).status,400);
console.log('Passed: D095 has ten caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');
const full94=data.chapters.find(c=>c.id===94);assert.ok(full94);assert.deepEqual(full94.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content94=JSON.parse(await fs.readFile(new URL('../../content/daskams/d094.json',import.meta.url)));
const selected94=JSON.parse(await fs.readFile(new URL('../../art/batches/d094-comparison-v015.json',import.meta.url)));
const provenance94=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected94.rows.length,10);assert.equal(selected94.review_status,'needs-review');assert.ok(full94.reviewNotice.toLowerCase().includes('unapproved'));assert.match(selected94.visual_review_status,/passed for all ten selected versions/i);assert.equal(selected94.review_request_id,'d094-independent-review-v022m');
assert.equal(selected94.rows.find(r=>r.n===3).matte.version,'v016');assert.equal(selected94.rows.find(r=>r.n===4).matte.version,'v034');assert.match(selected94.rows.find(r=>r.n===4).candidate_status,/minor generation drift/i);
assert.equal(selected94.rows.find(r=>r.n===9).matte.version,'v010');assert.match(selected94.rows.find(r=>r.n===9).candidate_status,/R-B 110–129/);assert.match(selected94.rows.find(r=>r.n===9).candidate_status,/could not count.*toe tips.*no missing-toe defect/i);assert.match(selected94.rows.find(r=>r.n===9).candidate_status,/42% of height/);assert.equal(selected94.rows.find(r=>r.n===6).matte.version,'v014');assert.equal(selected94.rows.find(r=>r.n===8).matte.version,'v010');
assert.match(selected94.rows.find(r=>r.n===3).candidate_status,/maximum R-B 120/);assert.match(selected94.rows.find(r=>r.n===4).candidate_status,/R-B samples range 102–122/);assert.ok(selected94.rows.every(r=>r.independent_review.outcome==='pass'&&r.independent_review.request_id==='d094-independent-review-v022m'));
for(const row of full94.rows){
 assert.equal(row.commentarySource,`intake/D094/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content94.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 for(const image of row.images)assert.ok(data.assets[image.key]);
 const selected=selected94.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance94.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full94.rows[5].images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
assert.equal((await feedback(req({...good,daskam:94,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:94,sloka:11}),env)).status,400);
console.log('Passed: D094 has ten caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');
const full98=data.chapters.find(c=>c.id===98);assert.ok(full98);assert.deepEqual(full98.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11]);
const content98=JSON.parse(await fs.readFile(new URL('../../content/daskams/d098.json',import.meta.url)));
const selected98=JSON.parse(await fs.readFile(new URL('../../art/batches/d098-comparison-v004.json',import.meta.url)));
const provenance98=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected98.rows.length,11);assert.equal(selected98.review_status,'needs-review');assert.ok(full98.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full98.rows){
 assert.equal(row.commentarySource,`intake/D098/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content98.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected98.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance98.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
 assert.ok(row.images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
}
assert.equal((await feedback(req({...good,daskam:98,sloka:11}),env)).status,201);assert.equal((await feedback(req({...good,daskam:98,sloka:12}),env)).status,400);
console.log('Passed: D098 has eleven caption-mapped, exact-hash reference/candidate pairs with independent inspections, unapproved selections and stanza-bounded feedback.');

const full63=data.chapters.find(c=>c.id===63);assert.ok(full63);assert.deepEqual(full63.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content63=JSON.parse(await fs.readFile(new URL('../../content/daskams/d063.json',import.meta.url)));
const selected63=JSON.parse(await fs.readFile(new URL('../../art/batches/d063-comparison-v008.json',import.meta.url)));
assert.equal(selected63.rows.length,10);assert.equal(selected63.review_status,'needs-review');assert.ok(full63.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full63.rows){
 const stanza=content63.stanzas.find(s=>s.n===row.n);const selected=selected63.rows.find(r=>r.n===row.n);
 assert.equal(row.commentarySource,`intake/D063/photo-captions.txt#${row.n}`);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.equal((await feedback(req({...good,daskam:63,sloka:10}),env)).status,201);assert.equal((await feedback(req({...good,daskam:63,sloka:11}),env)).status,400);
console.log('Passed: D063 has ten unapproved, caption-mapped exact-hash reference/candidate pairs with stanza-bounded feedback.');

const full99=data.chapters.find(c=>c.id===99);assert.ok(full99);assert.deepEqual(full99.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content99=JSON.parse(await fs.readFile(new URL('../../content/daskams/d099.json',import.meta.url)));
const selected99=JSON.parse(await fs.readFile(new URL('../../art/batches/d099-comparison-v001.json',import.meta.url)));
const provenance99=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
assert.equal(selected99.rows.length,10);assert.ok(selected99.review_status.toLowerCase().includes('review'));assert.ok(full99.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full99.rows){
 const stanza=content99.stanzas.find(s=>s.n===row.n);const selected=selected99.rows.find(r=>r.n===row.n);
 assert.equal(row.commentarySource,`intake/D099/photo-captions.txt#${row.n}`);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 for(const role of ['reference','matte'])assert.equal(provenance99.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full99.rows.every(row=>row.images.find(i=>i.role==='matte').inspectionLabel.toLowerCase().includes('not art approval')));
assert.equal((await feedback(req({...good,daskam:99,sloka:10}),env)).status,201);assert.equal((await feedback(req({...good,daskam:99,sloka:11}),env)).status,400);
console.log('Passed: D099 has ten caption-mapped, exact-hash independent-review candidates, stanza-bounded feedback, and explicit unapproved status.');

const full64=data.chapters.find(c=>c.id===64);assert.ok(full64);assert.deepEqual(full64.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content64=JSON.parse(await fs.readFile(new URL('../../content/daskams/d064.json',import.meta.url)));
const selected64=JSON.parse(await fs.readFile(new URL('../../art/batches/d064-comparison-v001.json',import.meta.url)));
assert.equal(selected64.rows.length,10);assert.equal(selected64.review_status,'needs-review');assert.ok(full64.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full64.rows){
 const stanza=content64.stanzas.find(s=>s.n===row.n);const selected=selected64.rows.find(r=>r.n===row.n);
 assert.equal(row.commentarySource,`intake/D064/photo-captions.txt#${row.n}`);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
assert.ok(full64.rows[5].images.find(i=>i.role==='matte').inspectionLabel.toLowerCase().includes('not art approval'));
assert.equal((await feedback(req({...good,daskam:64,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:64,sloka:11}),env)).status,400);
console.log('Passed: D064 has ten caption-mapped, exact-hash reference/candidate pairs with inspected, unapproved selections and stanza-bounded feedback.');

const full65=data.chapters.find(c=>c.id===65);assert.ok(full65);assert.deepEqual(full65.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9]);
const content65=JSON.parse(await fs.readFile(new URL('../../content/daskams/d065.json',import.meta.url)));
const selected65=JSON.parse(await fs.readFile(new URL('../../art/batches/d065-comparison-v001.json',import.meta.url)));
assert.equal(selected65.rows.length,9);assert.equal(selected65.review_status,'needs-review');assert.ok(full65.reviewNotice.toLowerCase().includes('unapproved'));
assert.equal(selected65.chapter_label,'Dasakam 65');assert.match(selected65.visual_review_status,/independent exact-checksum review is recorded/);
for(const row of full65.rows){
 assert.equal(row.commentarySource,`intake/D065/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content65.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected65.rows.find(r=>r.n===row.n);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
 assert.ok(row.images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
}
assert.equal((await feedback(req({...good,daskam:65,sloka:9}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:65,sloka:10}),env)).status,400);
console.log('Passed: Dasakam 65 has nine unpadded caption-mapped, exact-hash comparisons, producer disclosures, unapproved status, and stanza-bounded feedback.');

const full72=data.chapters.find(c=>c.id===72);assert.ok(full72);assert.deepEqual(full72.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11,12]);
const content72=JSON.parse(await fs.readFile(new URL('../../content/daskams/d072.json',import.meta.url)));
const selected72=JSON.parse(await fs.readFile(new URL('../../art/batches/d072-comparison-v001.json',import.meta.url)));
assert.equal(selected72.rows.length,12);assert.equal(selected72.review_status,'needs-review');assert.ok(full72.reviewNotice.toLowerCase().includes('unapproved'));
for(const row of full72.rows){
 assert.equal(row.commentarySource,`intake/D072/photo-captions.txt#${row.n}`);
 assert.equal(row.commentary,content72.stanzas.find(s=>s.n===row.n).commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected72.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
 assert.ok(row.images.find(i=>i.role==='matte').inspectionLabel.includes('not art approval'));
}
assert.equal((await feedback(req({...good,daskam:72,sloka:12}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:72,sloka:13}),env)).status,400);
console.log('Passed: D072 has twelve unpadded caption-mapped, exact-hash reference/candidate comparisons, inspected but unapproved landscapes, and stanza-bounded feedback.');

const full35=data.chapters.find(c=>c.id===35);assert.ok(full35);assert.deepEqual(full35.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content35=JSON.parse(await fs.readFile(new URL('../../content/daskams/d035.json',import.meta.url)));
const selected35=JSON.parse(await fs.readFile(new URL('../../art/batches/d035-comparison-v001.json',import.meta.url)));
const plan35=JSON.parse(await fs.readFile(new URL('../../art/plans/d035.json',import.meta.url)));
assert.equal(selected35.rows.length,10);assert.equal(selected35.review_status,'needs-review');assert.ok(full35.reviewNotice.includes('unapproved'));
assert.ok(content35.stanzas.every(s=>s.translation_en===''));
for(const row of full35.rows){
 const stanza=content35.stanzas.find(s=>s.n===row.n);assert.equal(row.commentarySource,stanza.commentary_source);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected35.rows.find(r=>r.n===row.n);assert.ok(selected);assert.equal(selected.alternates.length,0);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 const scene=plan35.stanzas.find(s=>s.n===row.n);assert.equal(scene.selected_landscape.file,selected.matte.file);assert.equal(scene.selected_landscape.sha256,selected.matte.sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
for(const [n,versions] of [[1,['v001']],[2,['v001']],[3,[]],[4,['v001','v002','v003']],[5,['v001','v002','v003']],[6,['v001','v002']],[7,['v001','v002']],[8,[]],[9,['v001','v002','v003','v004']],[10,['v001','v002']]]){const row=selected35.rows.find(r=>r.n===n);assert.deepEqual(row.superseded_trials.map(x=>x.version),versions);for(const trial of row.superseded_trials){assert.match(trial.sha256,/^[a-f0-9]{64}$/);assert.ok(!full35.rows.find(r=>r.n===n).images.some(i=>i.version===trial.version));}}
assert.equal((await feedback(req({...good,daskam:35,sloka:10}),env)).status,201);
assert.equal((await feedback(req({...good,daskam:35,sloka:11}),env)).status,400);
console.log('Passed: D035 has ten mapped rows, checksum-pinned candidates, unapproved status, and stanza-bounded feedback.');

const full39=data.chapters.find(c=>c.id===39);assert.ok(full39);assert.deepEqual(full39.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const content39=JSON.parse(await fs.readFile(new URL('../../content/daskams/d039.json',import.meta.url)));
const selected39=JSON.parse(await fs.readFile(new URL('../../art/batches/d039-comparison-v001.json',import.meta.url)));
assert.equal(selected39.rows.length,10);assert.equal(selected39.review_status,'needs-review');assert.match(full39.reviewNotice,/unapproved|no artwork is approved/);
for(const row of full39.rows){
 const stanza=content39.stanzas.find(s=>s.n===row.n);
 assert.equal(row.commentarySource,stanza.commentary_source);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected39.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
}
const map39=JSON.parse(await fs.readFile(new URL('../../content/sources/d039/reference-map.json',import.meta.url)));
for(const entry of map39.stanza_to_reference_map){
 const row=full39.rows.find(r=>r.n===entry.canonical_stanza);assert.ok(row);
 const [lead,...extra]=entry.references;
 const shown=provenance.find(p=>p.key===row.images.find(i=>i.role==='reference').key);
 assert.equal(shown.source,`intake/${lead.path}`);assert.equal(shown.sourceHash,lead.sha256);
 assert.deepEqual((selected39.rows.find(r=>r.n===entry.canonical_stanza).source_alternates||[]).map(a=>[a.file,a.sha256]),extra.map(r=>[`intake/${r.path}`,r.sha256]));
}
assert.equal(selected39.rows.find(r=>r.n===8).reference.file,'intake/D039/008.jpg');
assert.deepEqual(selected39.rows.find(r=>r.n===8).source_alternates,[{file:'intake/D039/009.jpg',sha256:'00a712e8aa2dd271abc52bc76e375a0971f01c3074f63499ce4da7d68c46420f',caption_number:8,role:'same-stanza source alternate only; not an artwork alternate'}]);
assert.equal((await feedback(req({...good,daskam:39,sloka:10}),env)).status,201);assert.equal(JSON.parse(written.args[8]).length,1);
assert.equal((await feedback(req({...good,daskam:39,sloka:11}),env)).status,400);
console.log('Passed: D039 has ten source-mapped rows, exact S008 duplicate-caption source handling, pinned unapproved landscape candidates, and stanza-bounded feedback.');

const full45=data.chapters.find(c=>c.id===45);assert.ok(full45);assert.deepEqual(full45.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11,12]);
const content45=JSON.parse(await fs.readFile(new URL('../../content/daskams/d045.json',import.meta.url)));
const selected45=JSON.parse(await fs.readFile(new URL('../../art/batches/d045-comparison-v010.json',import.meta.url)));
assert.equal(selected45.rows.length,12);assert.equal(selected45.review_status,'needs-review');assert.ok(full45.reviewNotice.toLowerCase().includes('unapproved'));assert.equal(selected45.batch_version,'v010');assert.match(selected45.visual_review_status,/5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5/);assert.equal(selected45.plan_sha256,'5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5');
for(const row of full45.rows){
 const stanza=content45.stanzas.find(s=>s.n===row.n);
 assert.equal(row.commentarySource,`intake/D045/photo-captions.txt#${row.n}`);assert.equal(row.commentary,stanza.commentary_en);
 assert.deepEqual(row.images.map(i=>i.role),['reference','matte']);
 const selected=selected45.rows.find(r=>r.n===row.n);assert.ok(selected);
 for(const role of ['reference','matte'])assert.equal(provenance.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);
 assert.equal(row.images.find(i=>i.role==='matte').version,selected.matte.version);
 assert.equal(row.images.find(i=>i.role==='matte').inspectionStatus,'inspected');
 assert.match(selected.producer_review.sha256,/^[a-f0-9]{64}$/);const producer=JSON.parse(await fs.readFile(new URL('../../art/reviews/visual-reviews.json',import.meta.url))).reviews.find(r=>r.chapter===45&&r.sloka===row.n&&r.file===selected.matte.file);assert.ok(producer);assert.deepEqual(producer.evidence,[{path:selected.producer_review.file,sha256:selected.producer_review.sha256}]);
 const independent=producer.independent_reviews;assert.ok(Array.isArray(independent)&&independent.length);assert.equal(independent.at(-1).outcome,'pass');for(const review of independent){assert.equal(review.candidate_sha256,selected.matte.sha256);assert.equal(review.plan_sha256,selected45.plan_sha256);assert.ok(Date.parse(review.inspected_at));for(const evidence of review.evidence){const bytes=await fs.readFile(new URL('../../'+evidence.path,import.meta.url));assert.equal(createHash('sha256').update(bytes).digest('hex'),evidence.sha256);}}if(row.n===8)assert.deepEqual(independent.map(review=>review.outcome),['needs-fix','pass']);
}
assert.equal(selected45.rows.find(r=>r.n===3).reference.file,'intake/D045/003.jpg');
assert.equal(selected45.rows.find(r=>r.n===4).reference.file,'intake/D045/004.jpg');
assert.deepEqual(selected45.rows.find(r=>r.n===4).source_alternates.map(a=>[a.file,a.sha256,a.caption_number]),[['intake/D045/003.jpg',JSON.parse(await fs.readFile(new URL('../../content/sources/d045/reference-map.json',import.meta.url))).references.find(r=>r.stanza===3).sha256,3]]);
assert.deepEqual(selected45.rows.find(r=>r.n===5).source_alternates.map(a=>[a.file,a.sha256,a.caption_number]),[['intake/D045/004.jpg',JSON.parse(await fs.readFile(new URL('../../content/sources/d045/reference-map.json',import.meta.url))).references.find(r=>r.stanza===4).sha256,4]]);
assert.equal((await feedback(req({...good,daskam:45,sloka:12}),env)).status,201);assert.equal((await feedback(req({...good,daskam:45,sloka:13}),env)).status,400);
console.log('Passed: D045 has twelve caption-mapped, exact-hash unapproved landscape pairs and stanza-bounded feedback.');

async function withLiveFixture(fixtureData, callback, { missingRoutes = [], pageOverrides = {}, staleResponses = {} } = {}) {
 const pages=new Map([["/narayaneeyam/",renderIndex(fixtureData)]]);
 for(const chapter of fixtureData.chapters)if(!missingRoutes.includes(chapter.id)){const route=`/narayaneeyam/${chapterSlug(chapter.id)}`;pages.set(route,pageOverrides[chapter.id]??renderChapter(chapter,fixtureData.revision,'/narayaneeyam/',true,fixtureData.chapters));}
 const stale=new Map(Object.entries(staleResponses).map(([route,responses])=>[route,[...responses]]));
 const server=createServer((req,res)=>{const html=stale.get(req.url)?.shift()??pages.get(req.url);res.statusCode=html?200:404;res.end(html||'not found');});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try { await callback(`http://127.0.0.1:${server.address().port}/narayaneeyam`); }
 finally { await new Promise((resolve,reject)=>server.close(error=>error?reject(error):resolve())); }
}

await withLiveFixture(data,async base=>verifyLivePages(data,{base,retryDelayMs:0}));
const stalePage6=renderChapter(data.chapters.find(c=>c.id===6),data.revision,'/narayaneeyam/',true,data.chapters).replace('Landscape candidate v006','Landscape candidate v004');
await withLiveFixture(data,async base=>assert.rejects(verifyLivePages(data,{base,retryDelayMs:0}),/missing selected matte version v006/),{pageOverrides:{6:stalePage6}});
await withLiveFixture(data,async base=>assert.rejects(verifyLivePages(data,{base,retryDelayMs:0}),/did not converge for \/d008: HTTP 404/),{missingRoutes:[8]});
const previousData={...data,chapters:data.chapters.filter(c=>c.id!==8)};
await withLiveFixture(data,async base=>verifyLivePages(data,{base,retryDelayMs:0}),{staleResponses:{'/narayaneeyam/':[renderIndex(previousData),renderIndex(previousData)],'/narayaneeyam/d006':[stalePage6,stalePage6,stalePage6]}});
await withLiveFixture(data,async base=>assert.rejects(verifyLivePages(data,{base,retryDelayMs:0}),/did not converge for \/: HTTP 200 \(Live index is missing d008\)/),{staleResponses:{'/narayaneeyam/':Array(6).fill(renderIndex(previousData))}});
const stalePage8=renderChapter(data.chapters.find(c=>c.id===8),data.revision,'/narayaneeyam/',true,data.chapters).replace('Landscape candidate v004','Landscape candidate v002');
await withLiveFixture(data,async base=>assert.rejects(verifyLivePages(data,{base,retryDelayMs:0}),/missing selected matte version v004/),{pageOverrides:{8:stalePage8}});
const extended=structuredClone(data);const additional=structuredClone(extended.chapters.find(c=>c.id===8));additional.id=Math.max(...extended.chapters.map(c=>c.id))+1;additional.title=`Dasakam ${additional.id}`;extended.chapters.push(additional);
await withLiveFixture(extended,async base=>verifyLivePages(extended,{base,retryDelayMs:0}));
console.log('Passed: live verifier checks current bundled data over HTTP, rejects stale D006 and missing D008 route/selection, and follows additional selected chapters.');
