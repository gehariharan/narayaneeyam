import data from '../artifacts/review-site/data.json';
import {renderIndex, renderChapter} from './views.mjs';
const BASE='/narayaneeyam';
const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY','Content-Security-Policy':"default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'"};
const json=(body,status=200)=>Response.json(body,{status,headers:{...headers,'Cache-Control':'no-store'}});
export async function feedback(request,env,dataset=data){
 if(request.headers.get('origin')!==new URL(request.url).origin)return json({error:'Please submit feedback from this site.'},403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return json({error:'Expected JSON.'},415);
 const reader=request.body?.getReader(); let total=0,chunks=[];
 if(!reader)return json({error:'Missing feedback.'},400);
 while(true){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>8192){await reader.cancel();return json({error:'Feedback is too long.'},413);}chunks.push(value);}
 let input;try{const all=new Uint8Array(total);let at=0;for(const c of chunks){all.set(c,at);at+=c.length;}input=JSON.parse(new TextDecoder().decode(all));}catch{return json({error:'Invalid feedback.'},400);}
 if(!input||typeof input!=='object'||Array.isArray(input))return json({error:'Invalid feedback.'},400);
 const chapter=dataset.chapters.find(c=>c.id===input.daskam),row=chapter?.rows.find(r=>r.n===input.sloka);
 if(!row)return json({error:'Unknown sloka.'},400);
 if(input.revision!==dataset.revision)return json({error:'This review page has changed. Reload it before submitting.'},409);
 if(typeof input.message!=='string'||input.message.trim().length<3||input.message.length>2000)return json({error:'Enter feedback between 3 and 2,000 characters.'},400);
 if(input.website)return json({error:'Unable to accept this submission.'},400);
 const ip=request.headers.get('CF-Connecting-IP')||'local';
 const limit=await env.FEEDBACK_LIMIT.limit({key:ip});
 if(!limit.success)return json({error:'Too many submissions. Please wait a minute and retry.'},429);
 const id=crypto.randomUUID();
 const versions=JSON.stringify(row.images.filter(i=>i.role!=='reference'&&i.key).map(({role,key,version})=>({role,key,version})));
 await env.DB.prepare('INSERT INTO feedback (id,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status) VALUES (?,?,?,?,?,?,?,?,?,?)').bind(id,input.daskam,input.sloka,'generated','other',input.message.trim(),'',dataset.revision,versions,'open').run();
 return json({id},201);
}
export default {async fetch(request,env){
 try{
 const url=new URL(request.url),p=url.pathname;
 if(p!==BASE&&!p.startsWith(BASE+'/'))return new Response('Not found',{status:404,headers});
 if(p===BASE+'/api/feedback')return request.method==='POST'?await feedback(request,env):json({error:'Method not allowed.'},405);
 if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers});
 if(p===BASE)return new Response(null,{status:308,headers:{...headers,Location:BASE+'/'}});
 const key=p.slice(BASE.length+1);
 if(key.startsWith('media/')){
  if(!Object.hasOwn(data.assets,key))return new Response('Not found',{status:404,headers});
  const object=await env.ART.get(key);
  if(!object)return new Response('Image unavailable',{status:404,headers});
  const h={...headers,'Content-Type':data.assets[key].type,'Cache-Control':'public, max-age=31536000, immutable',ETag:object.httpEtag};
  if(request.headers.get('if-none-match')===object.httpEtag)return new Response(null,{status:304,headers:h});
  return new Response(request.method==='HEAD'?null:object.body,{headers:h});
 }
 let body;
 if(key==='')body=renderIndex(data);
 else{const chapter=data.chapters.find(c=>key===`d00${c.id}`||key===`d00${c.id}/`);if(chapter)body=renderChapter(chapter,data.revision);}
 if(!body)return new Response('Not found',{status:404,headers});
 return new Response(request.method==='HEAD'?null:body,{headers:{...headers,'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
 }catch(error){console.error('Review request failed',error?.name);return json({error:'The service is temporarily unavailable. Please retry.'},503);}
}};
