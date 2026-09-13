import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const origin='https://gehariharan.com';
const base=origin+'/narayaneeyam';
const data=JSON.parse(await fs.readFile('artifacts/review-site/data.json'));
for(const suffix of ['/','/d001','/d002']){
 const res=await fetch(base+suffix);if(!res.ok)throw Error(`${suffix}: ${res.status}`);
 const html=await res.text();if(suffix!=='/'&&(html.match(/class="sloka"/g)||[]).length!==10)throw Error('Expected ten rows');
 console.log(`${suffix}: ${res.status}`);
}
const blog=await fetch(origin);if(!blog.ok)throw Error('Blog not reachable');console.log('Blog home: '+blog.status);
const queue=Object.entries(data.assets);let count=0;
await Promise.all(Array.from({length:5},async()=>{while(queue.length){const [key,meta]=queue.shift();const response=await fetch(base+'/'+key);if(!response.ok)throw Error('Missing '+key);const sha=crypto.createHash('sha256').update(Buffer.from(await response.arrayBuffer())).digest('hex');if(sha!==meta.sha256)throw Error('Hash mismatch '+key);count++;}}));
console.log(`Verified ${count} live image hashes.`);
const body={daskam:2,sloka:1,message:'Deployment verification — automated feedback persistence test.',revision:data.revision,website:''};
const res=await fetch(base+'/api/feedback',{method:'POST',headers:{'content-type':'application/json',origin},body:JSON.stringify(body)});
const saved=await res.json();if(res.status!==201)throw Error(JSON.stringify(saved));
await fs.writeFile('artifacts/review-site/live-verification.json',JSON.stringify({checkedAt:new Date().toISOString(),images:count,feedbackId:saved.id},null,2));
await fs.writeFile('artifacts/review-site/verify-feedback.sql',`SELECT id,daskam,sloka,target,revision FROM feedback WHERE id='${saved.id}';\n`);
await fs.writeFile('artifacts/review-site/cleanup-test-feedback.sql',`DELETE FROM feedback WHERE id='${saved.id}' AND reviewer_name='' AND target='generated' AND message='Deployment verification — automated feedback persistence test.';\n`);
console.log('Live feedback accepted: '+saved.id);
