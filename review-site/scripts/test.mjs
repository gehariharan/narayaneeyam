import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { renderChapter, renderIndex, chapterSlug } from '../views.mjs';
// Test source import with the generated data replaced so Node requires no JSON import attribute.
const data=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/data.json',import.meta.url)));
const source=(await fs.readFile(new URL('../worker.mjs',import.meta.url),'utf8')).replace("import data from '../artifacts/review-site/data.json';",`const data=${JSON.stringify(data)};`).replace("from './views.mjs'",`from '${new URL('../views.mjs',import.meta.url).href}'`);
const {feedback,default:worker}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
for(const c of data.chapters){const html=renderChapter(c,data.revision);assert.equal((html.match(/class="sloka"/g)||[]).length,c.rows.length);assert.equal((html.match(/<figure>/g)||[]).length,c.rows.length*3);assert.equal((html.match(/data-feedback action/g)||[]).length,c.rows.length);assert.equal((html.match(/class="commentary"/g)||[]).length,c.rows.length);assert.ok(!html.includes('<select'));assert.ok(!html.includes('Editorial review pending'));assert.ok(!html.includes('<footer'));assert.ok(!html.includes('name="name"'));assert.ok(html.includes('Traditional mural'));assert.ok(html.includes('Detailed painting'));assert.ok(!html.includes('<small>'));for(const r of c.rows)assert.ok(html.includes(r.commentary.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')));for(const r of c.rows)for(const i of r.images)if(i.key)await fs.access(new URL('../../artifacts/review-site/'+i.key,import.meta.url));}
assert.equal(data.chapters[1].rows.flatMap(r=>r.images).filter(i=>i.key).length,30);
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
console.log('Passed: compact 40-row layout, local assets, unchanged commentary, generated-only feedback, feedback persistence payload, injection escaping, origin/size/version validation, rate limiting, and closed feedback reads.');

assert.deepEqual(data.chapters.map(c=>c.id),[1,2,38,96]);
const indexHtml=renderIndex(data);assert.ok(indexHtml.includes('/narayaneeyam/d038'));assert.ok(!indexHtml.includes('/d0038'));
for(const c of data.chapters){
 const response=await worker.fetch(new Request('https://gehariharan.com/narayaneeyam/'+chapterSlug(c.id)),env);
 assert.equal(response.status,200);const html=await response.text();
 for(const next of data.chapters)assert.ok(html.includes('/narayaneeyam/'+chapterSlug(next.id)));
}
assert.equal((await worker.fetch(new Request('https://gehariharan.com/narayaneeyam/d0038'),env)).status,404);
assert.equal((await feedback(req({...good,daskam:38}),env)).status,201);assert.equal(written.args[1],38);assert.equal(JSON.parse(written.args[8]).length,2);
console.log('Passed: D038 routing, chapter navigation, generated-only D038 feedback.');

assert.equal((await feedback(req({...good,daskam:96,sloka:4}),env)).status,201);assert.equal((await feedback(req({...good,daskam:96,sloka:11}),env)).status,400);

const full96=data.chapters.find(c=>c.id===96);assert.deepEqual(full96.rows.map(r=>r.n),[1,2,3,4,5,6,7,8,9,10]);
const originalPilot=JSON.parse(await fs.readFile(new URL('../../art/batches/d096-comparison-v001.json',import.meta.url)));
const provenance=JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/asset-provenance.json',import.meta.url)));
for(const role of ['matte','glossy']){const old=originalPilot.rows[0][role];assert.equal(provenance.find(p=>p.key===full96.rows.find(r=>r.n===4).images.find(i=>i.role===role).key).sourceHash,old.sha256);}
console.log('Passed: all ten D096 slokas and unchanged S004 pilot image hashes.');
