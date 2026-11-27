// Dasakams awaiting painting: content (content/daskams/dNNN.json) but no selected batch yet.
// They show as stanza cards with the reference photos, Commentary and stanza text, and a plain
// "Awaiting painting" slot where the painting will go, so text review can start before the art.
// Gaps in that content (no commentary, no reference photo, unchecked or cut-off commentary) are
// shown plainly on the card; the vetted-commentary check applies once the dasakam is painted.
// Adding the dasakam's batch to selections.mjs switches it to the normal painted chapter.
//
// Their reference photos go through the same review-derivative path as painted chapters (a
// WebP derivative recorded in asset-provenance.json); raw intake never reaches the site.
// validateAwaiting checks those derivatives in the exact bundle, alongside image-review.mjs's
// validateBundle for the painted chapters, without needing raw assets.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { loadSelections } from './selections.mjs';
import { readLog, rowFix } from './feedback-log.mjs';

const pad = n => String(n).padStart(3, '0');
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const hash = value => typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);

async function readJsonIfPresent(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

// Every dasakam with a content file, ascending.
export async function contentDasakams(root) {
  const names = await fs.readdir(path.join(root, 'content/daskams'));
  return names.map(name => /^d(\d{3})\.json$/.exec(name)).filter(Boolean).map(m => Number(m[1])).filter(id => id >= 1 && id <= 100).sort((a, b) => a - b);
}

// The dasakams awaiting painting: content without a selected batch.
export function awaitingIds(contentIds, batches) {
  const painted = new Set(batches.map(batch => batch.daskam_id));
  return contentIds.filter(id => !painted.has(id));
}

// The reference photos mapped to each stanza, from content/sources/dNNN/reference-map.json:
// a "references" or "images" list of { stanza, path, sha256 }. Entries without a stanza are
// unmapped extras and stay out. Only that dasakam's own intake photos are accepted.
export async function referenceMap(root, id) {
  const file = `content/sources/d${pad(id)}/reference-map.json`;
  const map = new Map();
  const source = await readJsonIfPresent(path.join(root, file));
  if (!source) return map;
  const entries = Array.isArray(source.references) ? source.references : Array.isArray(source.images) ? source.images : null;
  if (!entries) throw new Error(`${file} has no "references" or "images" list of { stanza, path, sha256 }`);
  const intake = new RegExp(`^intake/D${pad(id)}/[A-Za-z0-9._-]+$`);
  for (const entry of entries) {
    if (!Number.isInteger(entry?.stanza)) continue;
    if (typeof entry.path !== 'string' || !intake.test(entry.path) || !hash(entry.sha256)) throw new Error(`${file}: stanza ${entry.stanza} needs an intake/D${pad(id)}/ path and a SHA-256`);
    const list = map.get(entry.stanza) || [];
    if (list.some(item => item.file === entry.path)) throw new Error(`${file}: ${entry.path} is mapped twice to stanza ${entry.stanza}`);
    list.push({ file: entry.path, sha256: entry.sha256 });
    map.set(entry.stanza, list);
  }
  return map;
}

// Commentary is shown only from an allowlisted source: a Facebook photo-caption file or the
// user-supplied commentary file. Painted chapters require it on every stanza.
const vettedSource = (source, daskam) => new RegExp(`^(?:intake/D${pad(daskam)}/photo-captions\\.txt|content/sources/d${pad(daskam)}/(?:photo-captions\\.txt|COMMENTRY\\.txt))#\\d+$`).test(source || '');
export function vettedCommentary(stanza, daskam) {
  const chapter = pad(daskam);
  if (!vettedSource(stanza.commentary_source, daskam)) throw new Error(`Unvetted commentary source for D${chapter} S${pad(stanza.n)}: ${stanza.commentary_source || '(missing)'}`);
  if (!stanza.commentary_en) throw new Error(`Missing vetted commentary text for D${chapter} S${pad(stanza.n)}`);
  return stanza.commentary_en;
}
// An awaiting card shows whatever commentary there is yet: none ("Commentary not yet available"),
// text from a source not yet checked against the allowlist, or text the source flags as cut off
// (content/sources/dNNN/source.json commentary_cleanup["N"] containing "facebook-truncated").
function awaitingCommentary(stanza, daskam, cleanup) {
  const commentary = stanza.commentary_en || '';
  if (!commentary) return { commentary, commentaryTruncated: false, commentaryUnchecked: false };
  const flags = cleanup?.[String(stanza.n)];
  return { commentary, commentaryTruncated: Array.isArray(flags) && flags.includes('facebook-truncated'), commentaryUnchecked: !vettedSource(stanza.commentary_source, daskam) };
}

export const chapterRevision = chapter => crypto.createHash('sha256').update(JSON.stringify(chapter)).digest('hex').slice(0, 16);
export const referenceLabel = (id, n, index, total) => `d${pad(id)}-s${pad(n)}-reference${total > 1 ? `-${index + 1}` : ''}`;

// One awaiting chapter. asset(source, label) makes the review derivative and returns its media key.
export async function awaitingChapter(root, id, { asset }) {
  const d = `d${pad(id)}`;
  const content = JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`), 'utf8'));
  if (!Array.isArray(content.stanzas) || !content.stanzas.length) throw new Error(`content/daskams/${d}.json has no stanzas`);
  const plan = await readJsonIfPresent(path.join(root, `art/plans/${d}.json`));
  const references = await referenceMap(root, id);
  const cleanup = (await readJsonIfPresent(path.join(root, `content/sources/${d}/source.json`)))?.commentary_cleanup;
  const stanzas = new Set(content.stanzas.map(stanza => stanza.n));
  for (const n of references.keys()) if (!stanzas.has(n)) throw new Error(`content/sources/${d}/reference-map.json maps stanza ${n}, which ${d} does not have`);
  const log = await readLog(root, id);
  const chapter = { id, title: `Dasakam ${id}`, description: content.description || '', awaiting: true, rows: [] };
  for (const stanza of content.stanzas) {
    const n = stanza.n;
    if (!Number.isInteger(n) || n < 1) throw new Error(`content/daskams/${d}.json has an invalid stanza number`);
    const mapped = references.get(n) || [];
    const images = [];
    for (const [index, item] of mapped.entries()) {
      if (sha256(await fs.readFile(path.join(root, item.file))) !== item.sha256) throw new Error(`Reference checksum mismatch for ${d} S${pad(n)}: ${item.file}`);
      images.push({ role: 'reference', label: 'reference', displayLabel: 'Original reference', version: 'source', key: await asset(item.file, referenceLabel(id, n, index, mapped.length)) });
    }
    // Text fixes answer notes on an awaiting card too; there is no painting to redraw yet.
    const answered = rowFix(log, id, n, null);
    const fix = answered && { notes: answered.notes, kind: 'text', version: null };
    chapter.rows.push({ n, title: plan?.stanzas?.find(x => x.n === n)?.alt || '', ...awaitingCommentary(stanza, id, cleanup), commentarySource: stanza.commentary_source || '', sanskrit: stanza.sanskrit || '', transliteration: stanza.stanza_roman || '', editorialStatus: stanza.review_status || 'needs-review', images, ...(fix ? { fix } : {}) });
  }
  chapter.revision = chapterRevision(chapter);
  return chapter;
}

// Checks the exact bundle's awaiting chapters: exactly the content dasakams without a selected
// batch, every stanza of each, only reference photos, each the mapped intake photo's derivative.
export async function validateAwaiting(root, directory, { batches } = {}) {
  batches ??= await loadSelections(root);
  const data = JSON.parse(await fs.readFile(path.join(directory, 'data.json'), 'utf8'));
  const provenance = JSON.parse(await fs.readFile(path.join(directory, 'asset-provenance.json'), 'utf8'));
  const awaiting = data.awaiting ?? [];
  if (!Array.isArray(awaiting)) throw new Error('Invalid awaiting-painting chapters');
  const expected = awaitingIds(await contentDasakams(root), batches);
  const ids = awaiting.map(chapter => chapter.id);
  if (JSON.stringify(ids) !== JSON.stringify(expected)) throw new Error(`Awaiting-painting chapters ${JSON.stringify(ids)} do not match the dasakams with content and no selected batch ${JSON.stringify(expected)}`);
  const painted = new Set(data.chapters.map(chapter => chapter.id));
  let images = 0;
  for (const chapter of awaiting) {
    const d = `d${pad(chapter.id)}`;
    if (painted.has(chapter.id)) throw new Error(`${d} is both painted and awaiting painting`);
    if (chapter.awaiting !== true || typeof chapter.revision !== 'string' || !/^[a-f0-9]{16}$/.test(chapter.revision)) throw new Error(`Invalid awaiting-painting chapter ${d}`);
    const content = JSON.parse(await fs.readFile(path.join(root, `content/daskams/${d}.json`), 'utf8'));
    if (JSON.stringify(chapter.rows.map(row => row.n)) !== JSON.stringify(content.stanzas.map(stanza => stanza.n))) throw new Error(`Awaiting-painting ${d} does not show every stanza of its content`);
    const references = await referenceMap(root, chapter.id);
    for (const row of chapter.rows) {
      const mapped = references.get(row.n) || [];
      if (row.images.length !== mapped.length) throw new Error(`Awaiting-painting ${d} S${pad(row.n)} shows ${row.images.length} reference photos; its map has ${mapped.length}`);
      for (const [index, image] of row.images.entries()) {
        const where = `${d} S${pad(row.n)} reference ${index + 1}`;
        if (image.role !== 'reference') throw new Error(`Awaiting-painting ${where} is a ${image.role}, not a reference photo`);
        if (typeof image.key !== 'string' || !image.key.startsWith(`media/${referenceLabel(chapter.id, row.n, index, mapped.length)}-`) || !/^media\/[a-z0-9-]+\.webp$/.test(image.key)) throw new Error(`Invalid media key for awaiting-painting ${where}: ${image.key}`);
        const matches = provenance.filter(item => item.key === image.key);
        if (matches.length !== 1 || matches[0].source !== mapped[index].file || matches[0].sourceHash !== mapped[index].sha256) throw new Error(`Stale bundled source: awaiting-painting ${where}`);
        const bytes = await fs.readFile(path.join(directory, image.key));
        if (sha256(bytes) !== data.assets[image.key]?.sha256) throw new Error(`Stale bundled derivative: awaiting-painting ${where}`);
        images++;
      }
    }
  }
  return { chapters: awaiting.length, images };
}
