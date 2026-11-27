import data from '../artifacts/review-site/data.json';
import {renderIndex, renderChapter, chapterSlug} from './views.mjs';
const BASE='/narayaneeyam';
const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY','X-Robots-Tag':'noindex, nofollow','Content-Security-Policy':"default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'"};
const json=(body,status=200)=>Response.json(body,{status,headers:{...headers,'Cache-Control':'no-store'}});
// Passphrase lock. The passphrase lives only in the NARAYANEEYAM_PASSPHRASE Worker secret;
// without it nothing unlocks. The unlock cookie is an HMAC keyed by that secret over its
// expiry, so it cannot be forged and rotating the secret signs every visitor out.
const UNLOCK_PATH=BASE+'/unlock';
const UNLOCK_COOKIE='narayaneeyam_unlock';
const UNLOCK_MAX_AGE=90*24*60*60;
const encoder=new TextEncoder();
const secretOf=env=>typeof env?.NARAYANEEYAM_PASSPHRASE==='string'?env.NARAYANEEYAM_PASSPHRASE:'';
const hmacKey=secret=>crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);
const unlockMessage=expires=>encoder.encode(`narayaneeyam-unlock:v1:${expires}`);
const toBase64Url=bytes=>btoa(String.fromCharCode(...new Uint8Array(bytes))).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
const fromBase64Url=text=>{if(!/^[A-Za-z0-9_-]{43}$/.test(text))return null;const raw=atob(text.replaceAll('-','+').replaceAll('_','/')+'=');const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));return toBase64Url(bytes)===text?bytes:null;};
export async function unlockToken(secret,expires){
 if(!secret)throw new Error('No passphrase secret configured.');
 return `${expires}.${toBase64Url(await crypto.subtle.sign('HMAC',await hmacKey(secret),unlockMessage(expires)))}`;
}
const cookieValue=(request,name)=>{for(const part of (request.headers.get('cookie')||'').split(';')){const at=part.indexOf('=');if(at>0&&part.slice(0,at).trim()===name)return part.slice(at+1).trim();}return null;};
export async function isUnlocked(request,env,now=Date.now()){
 const secret=secretOf(env),token=cookieValue(request,UNLOCK_COOKIE);
 if(!secret||!token)return false;
 const match=/^(\d{1,12})\.([A-Za-z0-9_-]{43})$/.exec(token);
 if(!match)return false;
 const expires=Number(match[1]),seconds=Math.floor(now/1000);
 if(expires<=seconds||expires>seconds+UNLOCK_MAX_AGE+300)return false;
 const signature=fromBase64Url(match[2]);
 return !!signature&&crypto.subtle.verify('HMAC',await hmacKey(secret),signature,unlockMessage(expires));
}
const sha256=async text=>new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(text)));
async function samePassphrase(given,secret){
 const [a,b]=await Promise.all([sha256(given),sha256(secret)]);
 if(typeof crypto.subtle.timingSafeEqual==='function')return crypto.subtle.timingSafeEqual(a,b);
 let diff=0;for(let i=0;i<a.length;i++)diff|=a[i]^b[i];return diff===0;
}
export function safeNext(value){
 if(typeof value!=='string'||!value.startsWith('/')||value.startsWith('//')||/[\\\u0000-\u001f\u007f]/.test(value))return BASE+'/';
 let target;try{target=new URL(value,'https://review.invalid');}catch{return BASE+'/';}
 if(target.origin!=='https://review.invalid'||(target.pathname!==BASE&&!target.pathname.startsWith(BASE+'/'))||target.pathname===UNLOCK_PATH)return BASE+'/';
 return target.pathname+target.search;
}
const escapeAttr=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lockHeaders={...headers,'Cache-Control':'no-store'};
export function lockPage(request,env,{next,message='',status=401}={}){
 const configured=!!secretOf(env);
 const form=configured?`<form method="post" action="${UNLOCK_PATH}"><input type="hidden" name="next" value="${escapeAttr(next)}"><label for="passphrase">Passphrase</label><input id="passphrase" name="passphrase" type="password" autocomplete="current-password" required autofocus maxlength="512"><button type="submit">Unlock</button></form>`:'<p>The review site is closed to visitors at the moment.</p>';
 const body=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Narayaneeyam · Locked</title><style>body{font:16px/1.5 system-ui,sans-serif;background:#f4ebdb;color:#392719;margin:0;display:grid;place-items:center;min-height:100vh}main{max-width:380px;width:90vw;padding:1.5rem;background:#fff8eb;border:1px solid #d5bd98;border-radius:8px}h1{font-family:Georgia,serif;font-size:1.5rem;margin:0 0 .5rem}label{display:block;margin:.8rem 0 .3rem}input{font:inherit;width:100%;padding:.5rem;border:1px solid #a98d6b;border-radius:4px;background:#fffcf6}button{font:inherit;margin-top:.8rem;border:0;border-radius:4px;padding:.5rem 1rem;background:#793e2d;color:#fff;cursor:pointer}.error{color:#8a1f11}</style></head><body><main><h1>Narayaneeyam</h1><p>This site is locked.${configured?' Enter the shared passphrase to continue.':''}</p>${message?`<p class="error" role="alert">${escapeAttr(message)}</p>`:''}${form}</main></body></html>`;
 return new Response(request.method==='HEAD'?null:body,{status,headers:{...lockHeaders,'Content-Type':'text/html; charset=utf-8'}});
}
async function readForm(request){
 if(!request.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded'))return null;
 const reader=request.body?.getReader();if(!reader)return null;
 let total=0;const chunks=[];
 while(true){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>4096){await reader.cancel();return null;}chunks.push(value);}
 const all=new Uint8Array(total);let at=0;for(const c of chunks){all.set(c,at);at+=c.length;}
 return new URLSearchParams(new TextDecoder().decode(all));
}
export async function unlock(request,env,now=Date.now()){
 if(request.method!=='POST')return request.method==='GET'||request.method==='HEAD'?new Response(null,{status:303,headers:{...lockHeaders,Location:BASE+'/'}}):new Response(null,{status:405,headers:lockHeaders});
 if(request.headers.get('origin')!==new URL(request.url).origin)return new Response(null,{status:403,headers:lockHeaders});
 const form=await readForm(request);
 const next=safeNext(form?.get('next')??'');
 if(!form)return lockPage(request,env,{next,message:'Unable to read the passphrase. Please retry.',status:400});
 const ip=request.headers.get('CF-Connecting-IP')||'local';
 const limit=await env.FEEDBACK_LIMIT.limit({key:`unlock:${ip}`});
 if(!limit.success)return lockPage(request,env,{next,message:'Too many attempts. Please wait a minute and retry.',status:429});
 const secret=secretOf(env),given=form.get('passphrase')||'';
 if(!secret||!given||!(await samePassphrase(given,secret)))return lockPage(request,env,{next,message:secret?'That passphrase is not correct.':''});
 const expires=Math.floor(now/1000)+UNLOCK_MAX_AGE;
 return new Response(null,{status:303,headers:{...lockHeaders,Location:next,'Set-Cookie':`${UNLOCK_COOKIE}=${await unlockToken(secret,expires)}; Max-Age=${UNLOCK_MAX_AGE}; Path=${BASE}; HttpOnly; Secure; SameSite=Lax`}});
}
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
 // Each dasakam carries its own revision, so republishing one chapter does not reject open forms on another.
 if(typeof chapter.revision!=='string'||!chapter.revision||input.revision!==chapter.revision)return json({error:'This review page has changed. Reload it before submitting.'},409);
 if(typeof input.message!=='string'||input.message.trim().length<3||input.message.length>2000)return json({error:'Enter feedback between 3 and 2,000 characters.'},400);
 if(input.website)return json({error:'Unable to accept this submission.'},400);
 const ip=request.headers.get('CF-Connecting-IP')||'local';
 const limit=await env.FEEDBACK_LIMIT.limit({key:ip});
 if(!limit.success)return json({error:'Too many submissions. Please wait a minute and retry.'},429);
 const id=crypto.randomUUID();
 const versions=JSON.stringify(row.images.filter(i=>i.role!=='reference'&&i.key).map(({role,key,version})=>({role,key,version})));
 await env.DB.prepare('INSERT INTO feedback (id,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status) VALUES (?,?,?,?,?,?,?,?,?,?)').bind(id,input.daskam,input.sloka,'generated','other',input.message.trim(),'',chapter.revision,versions,'open').run();
 return json({id},201);
}
export default {async fetch(request,env){
 try{
 const url=new URL(request.url),p=url.pathname;
 if(p!==BASE&&!p.startsWith(BASE+'/'))return new Response('Not found',{status:404,headers});
 if(p===UNLOCK_PATH)return await unlock(request,env);
 if(!(await isUnlocked(request,env))){
  const page=['GET','HEAD'].includes(request.method)&&!p.startsWith(BASE+'/media/')&&!p.startsWith(BASE+'/api/');
  return page?lockPage(request,env,{next:safeNext(p+url.search)}):new Response(null,{status:401,headers:lockHeaders});
 }
 if(p===BASE+'/api/feedback')return request.method==='POST'?await feedback(request,env):json({error:'Method not allowed.'},405);
 if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers});
 if(p===BASE)return new Response(null,{status:308,headers:{...headers,Location:BASE+'/'}});
 const key=p.slice(BASE.length+1);
 if(key.startsWith('media/')){
  if(!Object.hasOwn(data.assets,key))return new Response('Not found',{status:404,headers});
  const object=await env.ART.get(key);
  if(!object)return new Response('Image unavailable',{status:404,headers});
  const h={...headers,'Content-Type':data.assets[key].type,'Cache-Control':'private, max-age=86400',ETag:object.httpEtag};
  if(request.headers.get('if-none-match')===object.httpEtag)return new Response(null,{status:304,headers:h});
  return new Response(request.method==='HEAD'?null:object.body,{headers:h});
 }
 let body;
 if(key==='')body=renderIndex(data);
 else{const chapter=data.chapters.find(c=>key===chapterSlug(c.id)||key===`${chapterSlug(c.id)}/`);if(chapter)body=renderChapter(chapter,chapter.revision,undefined,true,data.chapters);}
 if(!body)return new Response('Not found',{status:404,headers});
 return new Response(request.method==='HEAD'?null:body,{headers:{...headers,'Content-Type':'text/html; charset=utf-8','Cache-Control':'private, no-cache'}});
 }catch(error){console.error('Review request failed',error?.name);return json({error:'The service is temporarily unavailable. Please retry.'},503);}
}};
