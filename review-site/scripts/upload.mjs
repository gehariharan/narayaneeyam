import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run=promisify(execFile);
const root=path.resolve(import.meta.dirname,'../..');
const data=JSON.parse(await fs.readFile(path.join(root,'artifacts/review-site/data.json')));
const queue=Object.keys(data.assets).filter(key=>!process.argv.includes('--d001-detailed') || /^media\/d001-s\d{3}-glossy-/.test(key));const total=queue.length;let complete=0;
await Promise.all(Array.from({length:4},async()=>{
 while(queue.length){const key=queue.shift();
  await run('wrangler',['r2','object','put',`narayaneeyam/${key}`,'--file',path.join(root,'artifacts/review-site',key),'--content-type','image/webp','--cache-control','public, max-age=31536000, immutable','--remote'],{maxBuffer:1024*1024});
  console.log(`Uploaded ${++complete}/${total}: ${key}`);
 }
}));
