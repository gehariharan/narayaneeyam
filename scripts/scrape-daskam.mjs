#!/usr/bin/env node
/**
 * Scrapes a daskam from vignanam.org + narayaneeyam-firststep.org and writes
 * a canonical content draft, provenance record, visual-plan skeleton, and
 * empty paired-art approval manifest for local review.
 *
 * Usage: node scripts/scrape-daskam.mjs --daskam=2
 */
import fs from 'node:fs/promises';
import path from 'node:path';

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Narayaneeyam/1.0)' } });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} for ${url}`);
  let html = await res.text();
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<\/p>/gi, '\n\n');
  html = html.replace(/<[^>]+>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  html = html.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  return html;
}

async function scrapeRoman(daskamNum) {
  const url = `https://vignanam.org/english/narayaniyam-dashaka-${daskamNum}.html`;
  let txt = await fetchText(url);
  const out = new Map();
  for (let n = 1; n <= 15; n++) {
    const markerRegex = new RegExp(`(.+?)\\s*॥\\s*${n}\\s*॥`, 's');
    const m = txt.match(markerRegex);
    if (!m) continue;
    const lines = m[0].split('\n').map(l => l.trim()).filter(Boolean);
    let markerIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (new RegExp(`॥\\s*${n}\\s*॥`).test(lines[i])) { markerIdx = i; break; }
    }
    if (markerIdx === -1) continue;
    let stanza = lines.slice(Math.max(0, markerIdx - 6), markerIdx + 1).join('\n').replace(/Cht/g, 'cht');
    out.set(n, stanza);
    txt = txt.split(`॥ ${n} ॥`).slice(1).join(`॥ ${n} ॥`);
  }
  return { map: out, url };
}

async function scrapeTranslation(daskamNum) {
  const url = `https://vignanam.org/meaning/english/narayaniyam-dashaka-${daskamNum}.html`;
  const txt = await fetchText(url);
  const out = new Map();
  for (const part of txt.split('ślōkaḥ').slice(1)) {
    const m = part.match(/॥\s*(\d{1,2})\s*॥/);
    if (!m) continue;
    const n = parseInt(m[1], 10);
    const tSplit = part.split('Translation');
    if (tSplit.length < 2) continue;
    let after = tSplit[1].split('ślōkaḥ')[0].split('Browse Related')[0]
      .replace(/\s+/g, ' ').trim().replace(/^[\s\-:]+|[\s\-:]+$/g, '');
    if (after) out.set(n, after);
  }
  return { map: out, url };
}

async function scrapeSanskrit(daskamNum) {
  const url = `https://narayaneeyam-firststep.org/dashaka${daskamNum}`;
  const out = new Map();
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Narayaneeyam/1.0)' } });
    if (!res.ok) return out;
    let html = await res.text();
    html = html.replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n\n').replace(/<[^>]+>/g, '');
    for (let n = 1; n <= 15; n++) {
      const pattern = new RegExp(`([\\s\\S]*?)॥\\s*${n}\\s*॥`, 's');
      const m = html.match(pattern);
      if (!m) continue;
      const lines = m[0].split('\n').map(l => l.trim()).filter(Boolean);
      let markerIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (new RegExp(`॥\\s*${n}\\s*॥`).test(lines[i])) { markerIdx = i; break; }
      }
      if (markerIdx === -1) continue;
      const devLines = lines.slice(Math.max(0, markerIdx - 6), markerIdx + 1)
        .filter(l => /[ऀ-ॿ]/.test(l));
      if (devLines.length > 0) out.set(n, devLines.join('\n'));
      html = html.split(`॥ ${n} ॥`).slice(1).join(`॥ ${n} ॥`);
    }
  } catch {}
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const daskamArg = args.find(a => a.startsWith('--daskam='))?.split('=')[1];
  const force = args.includes('--force');
  const daskamNum = daskamArg ? Number(daskamArg) : null;
  if (!daskamNum || isNaN(daskamNum)) {
    console.error('Usage: node scripts/scrape-daskam.mjs --daskam=N [--force]');
    process.exit(1);
  }

  const slug = `d${String(daskamNum).padStart(3, '0')}`;
  const outputs = {
    content: path.resolve(`content/daskams/${slug}.json`),
    provenance: path.resolve(`content/sources/${slug}/provenance.json`),
    plan: path.resolve(`art/plans/${slug}.json`),
    approval: path.resolve(`art/approved/${slug}.json`),
  };

  if (!force) {
    for (const output of Object.values(outputs)) {
      try {
        await fs.access(output);
        console.error(`Refusing to overwrite existing ${output}. Use --force only after reviewing it.`);
        process.exit(1);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
  }

  console.log(`Scraping daskam ${daskamNum}...`);
  const [{ map: roman, url: romanUrl }, { map: trans, url: transUrl }, sanskrit] = await Promise.all([
    scrapeRoman(daskamNum).catch(e => { console.warn('roman failed:', e.message); return { map: new Map(), url: '' }; }),
    scrapeTranslation(daskamNum).catch(e => { console.warn('translation failed:', e.message); return { map: new Map(), url: '' }; }),
    scrapeSanskrit(daskamNum).catch(e => { console.warn('sanskrit failed:', e.message); return new Map(); }),
  ]);

  const allNums = new Set([...roman.keys(), ...trans.keys(), ...sanskrit.keys()]);
  const maxN = allNums.size > 0 ? Math.max(...allNums) : 10;

  const stanzas = [];
  for (let n = 1; n <= maxN; n++) {
    stanzas.push({
      n,
      sanskrit: sanskrit.get(n) || '',
      gloss_en: [],
      meaning_en: '',
      commentary_en: '',
      translation_en: trans.get(n) || '',
      translation_source: trans.has(n) ? transUrl : '',
      stanza_roman: roman.get(n) || '',
      stanza_roman_source: roman.has(n) ? romanUrl : '',
      tamil: { meaning_ta: '', commentary_ta: '' },
      review_status: 'needs-review',
    });
  }

  const data = {
    schema_version: 1,
    id: daskamNum,
    slug,
    title: `Daskam ${daskamNum}`,
    description: '',
    editorial_status: 'needs-review',
    source: { sanskrit_english: `https://narayaneeyam-firststep.org/dashaka${daskamNum}` },
    stanzas,
  };
  const orientations = {
    landscape: {
      aspect_ratio: '16:9',
      composition_role: 'desktop, web, presentation, or book spread',
      composition_override: 'Recompose for a wide frame; preserve full figures and safe margins.',
    },
    portrait: {
      aspect_ratio: '4:5',
      composition_role: 'mobile, downloadable page, cover, or portrait book page',
      composition_override: 'Recompose vertically; do not crop or mechanically extend the landscape image.',
    },
  };
  const plan = {
    schema_version: 1,
    daskam_id: daskamNum,
    slug,
    review_status: 'needs-review',
    continuity: { anchor_character: 'guruvayurappan', recurring_witness: null, locations: [], notes: '' },
    stanzas: stanzas.map(({ n }) => ({
      n,
      concept_id: `${slug}-s${String(n).padStart(3, '0')}`,
      review_status: 'needs-review',
      characters: ['guruvayurappan'],
      scene_brief: { mode: '', must_show: [], composition: '', tone: '', avoid: [] },
      alt: `Narayaneeyam Daskam ${daskamNum}, stanza ${n}`,
      orientations,
    })),
  };
  const approval = {
    schema_version: 1,
    daskam_id: daskamNum,
    updated_at: new Date().toISOString(),
    stanzas: plan.stanzas.map(({ n, concept_id, alt }) => ({
      n,
      concept_id,
      alt,
      landscape: { status: 'missing', master_path: null, preview_path: null, sha256: null },
      portrait: { status: 'missing', master_path: null, preview_path: null, sha256: null },
    })),
  };
  const provenance = {
    schema_version: 1,
    daskam_id: daskamNum,
    retrieved_at: new Date().toISOString(),
    status: 'automated-import-needs-human-verification',
    sources: [
      { role: 'sanskrit', url: `https://narayaneeyam-firststep.org/dashaka${daskamNum}` },
      { role: 'romanization', url: romanUrl },
      { role: 'translation', url: transUrl },
    ],
  };

  for (const [kind, output] of Object.entries(outputs)) {
    await fs.mkdir(path.dirname(output), { recursive: true });
    const value = kind === 'content' ? data : kind === 'provenance' ? provenance : kind === 'plan' ? plan : approval;
    await fs.writeFile(output, JSON.stringify(value, null, 2) + '\n', 'utf-8');
    console.log(`Wrote ${output}`);
  }
  console.log(`Slokas with roman: ${roman.size}, translation: ${trans.size}, sanskrit: ${sanskrit.size}`);
  console.log(`\nNext: verify source text, edit commentary, and plan the whole daskam before building image prompts.`);
}

main().catch(e => { console.error(e); process.exit(1); });
