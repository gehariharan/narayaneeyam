import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

import { readFile } from 'node:fs/promises';

const style = JSON.parse(await readFile(new URL('../src/content/style.json', import.meta.url), 'utf-8'));
const characters = JSON.parse(await readFile(new URL('../src/content/characters.json', import.meta.url), 'utf-8'));

function characterBible(ids=[]) {
  const parts=[];
  for (const id of ids) {
    const c = characters.characters[id];
    if (!c) continue;
    const vb=c.visual_bible;
    parts.push(`${c.display}: ${vb.face}; ${vb.skin}; ${vb.hair}; ${vb.crown}; ${vb.clothing}; ${vb.jewelry}; ${vb.aura}. Rules: ${c.depiction_rules.notes}. Never: ${c.never.join('; ')}.`);
  }
  return parts.join('\n');
}

function promptForStanza(s) {
  const n = s.n;
  const commentary = s.commentary_en;
  const characterIds = s.characters || ['krishna'];
  const styleText = style.style_bible.description;
  const negatives = style.negative.map(x=>`- ${x}`).join('\n');

  const brief = s.scene_brief;
  const briefText = brief ? [
    `Scene brief mode: ${brief.mode || ''}`,
    brief.must_show ? `Must show: ${brief.must_show.join('; ')}` : '',
    brief.composition ? `Composition: ${brief.composition}` : '',
    brief.tone ? `Tone: ${brief.tone}` : '',
    brief.avoid ? `Avoid: ${brief.avoid.join('; ')}` : ''
  ].filter(Boolean).join('\n') : '';

  const base = `${styleText}\n${characterBible(characterIds)}\n${briefText}\nNarration/context (do not depict as text): Narayaneeyam Daskam 1, Sloka ${n}: ${commentary}`;
  return `${base}\nHard constraints:\n${negatives}`;
}

async function main() {
  if (!process.env.OPENAI_API_KEY) throw new Error('Missing OPENAI_API_KEY in environment');

  const args = new Set(process.argv.slice(2));
  const only = [...args].find(a=>a.startsWith('--only='))?.split('=')[1];
  const onlyN = only ? Number(only) : null;
  const force = args.has('--force');
  const variantsArg = [...args].find(a=>a.startsWith('--variants='))?.split('=')[1];
  const variants = variantsArg ? Math.max(1, Number(variantsArg)) : 1;

  const contentPath = path.resolve('src/content/daskam01.json');
  const outDir = path.resolve('public/images');
  await fs.mkdir(outDir, { recursive: true });

  const d = JSON.parse(await fs.readFile(contentPath, 'utf-8'));
  for (const s of d.stanzas) {
    if (onlyN && s.n !== onlyN) continue;

    const baseName = `d01-s${String(s.n).padStart(2,'0')}`;
    const outNames = variants === 1
      ? [`${baseName}.png`]
      : Array.from({length: variants}, (_,i)=>`${baseName}-${String(i+1).padStart(2,'0')}.png`);

    for (const outName of outNames) {
      const outPath = path.join(outDir, outName);
      if (!force) {
        try { await fs.access(outPath); console.log('SKIP', outName); continue; } catch {}
      }

      const prompt = promptForStanza(s);
      console.log('GEN', outName);

      const res = await client.images.generate({
        model: 'gpt-image-1',
        prompt,
        size: '1536x1024'
      });

      const b64 = res.data?.[0]?.b64_json;
      if (!b64) throw new Error('No image returned');

      const buf = Buffer.from(b64, 'base64');
      const tmpPng = outPath + '.tmp.png';
      await fs.writeFile(tmpPng, buf);
      const { execFile } = await import('node:child_process');
      const { promisify } = await import('node:util');
      const execFileAsync = promisify(execFile);
      await execFileAsync('ffmpeg', [
        '-y',
        '-i', tmpPng,
        '-vf', 'crop=1536:864:(in_w-1536)/2:(in_h-864)/2',
        outPath
      ]);
      await fs.unlink(tmpPng);
      console.log('WROTE', outPath);
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
