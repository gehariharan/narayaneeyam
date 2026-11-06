import { validateBundle } from '../image-review.mjs';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
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

assert.deepEqual(data.chapters.map(c=>c.id),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,38,42,43,44,96]);
assert.equal(data.chapters.length,19);
assert.equal(data.chapters.reduce((sum,c)=>sum+c.rows.length,0),199);
assert.equal(Object.keys(data.assets).length,404);
const generatedSelected=data.chapters.flatMap(c=>c.rows.flatMap(r=>r.images)).filter(i=>i.role!=='reference');
assert.equal(generatedSelected.length,205);
assert.equal(generatedSelected.filter(i=>i.inspectionStatus==='historical').length,69);
assert.equal(generatedSelected.filter(i=>i.inspectionStatus==='inspected').length,136);
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
const d42=data.chapters.find(c=>c.id===42);
assert.deepEqual(d42.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10,11]);
assert.ok(d42.rows.every(r=>r.images.filter(i=>i.role==='reference').length===1&&r.images.filter(i=>i.role==='matte').length===1));
assert.ok(d42.rows.every(r=>r.images.find(i=>i.role==='matte').inspectionStatus==='inspected'));
const selected42=JSON.parse(await fs.readFile(new URL('../../art/batches/d042-comparison-v001.json',import.meta.url)));
const provenance42=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
for(const row of d42.rows){const selected=selected42.rows.find(r=>r.n===row.n);assert.equal(row.commentarySource,`intake/D042/photo-captions.txt#${String(row.n).padStart(3,'0')}`);for(const role of ['reference','matte'])assert.equal(provenance42.find(p=>p.key===row.images.find(i=>i.role===role).key).sourceHash,selected[role].sha256);}
assert.equal((await feedback(req({...good,daskam:42,sloka:11}),env)).status,201);
console.log('Passed: 19 chapters, 199 rows, 404 media, 205 generated selections (69 historical, 136 inspected), including D042 and all ten D011, D012, D013, D014, D043 and D044 leads.');
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
