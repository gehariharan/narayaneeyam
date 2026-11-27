// Studio command: pull reviewer notes, sign-offs and captain confirmations from the review
// site's D1 database into the committed, append-only work lists art/feedback/dNNN.json.
//
//   npm run review:pull                          read D1 (read-only SELECTs through wrangler)
//   npm run review:pull -- --from=export.json    use a saved export {"feedback":[...],"signoffs":[...]}
//   npm run review:pull -- --daskam=49           only one dasakam
//   npm run review:mark -- --daskam=49 --note=<id> --status=being-fixed
//   npm run review:mark -- --daskam=49 --note=<id> --status=fixed --fix=text
//
// The site never writes these files and never writes art/approved. A pulled captain
// confirmation lists the exact files and checksums for the studio's own art:approve step.
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import { NEXT, NOTE_TYPES, appendLog, lastStatus, noteById, notesOf, readLog } from '../review-site/feedback-log.mjs';

const run = promisify(execFile);
const pad = n => String(n).padStart(3, '0');
export const FEEDBACK_SQL = 'SELECT id,created_at,daskam,sloka,decision,message,reviewer_name,revision,image_versions,status FROM feedback ORDER BY created_at, rowid';
export const SIGNOFFS_SQL = 'SELECT id,created_at,daskam,kind,reviewer_name,revision,stanzas,signoff_id FROM signoffs ORDER BY created_at, rowid';

// `wrangler d1 execute --json` prints one {results, success} object per statement.
export function parseWranglerJson(stdout) {
  const parsed = JSON.parse(stdout);
  const batches = Array.isArray(parsed) ? parsed : [parsed];
  if (batches.some(batch => !batch || batch.success === false || !Array.isArray(batch.results))) throw new Error('wrangler d1 execute did not return results');
  return batches.flatMap(batch => batch.results);
}

// Read-only: two SELECTs through the studio's own wrangler login or CLOUDFLARE_API_TOKEN.
export async function readD1(root) {
  const select = async sql => parseWranglerJson((await run('npx', ['wrangler', 'd1', 'execute', 'narayaneeyam-feedback', '--remote', '--config', 'review-site/wrangler.jsonc', '--json', '--command', sql], { cwd: root, maxBuffer: 256 * 1024 * 1024 })).stdout);
  return { feedback: await select(FEEDBACK_SQL), signoffs: await select(SIGNOFFS_SQL) };
}

async function readJsonIfPresent(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

// Every image version the batches record for one stanza, with the batch that records it.
async function batchIndex(root) {
  const dir = path.join(root, 'art/batches');
  const files = (await fs.readdir(dir)).filter(name => /^d\d{3}-.*\.json$/.test(name)).sort();
  const index = new Map();
  for (const name of files) {
    let batch;
    try { batch = JSON.parse(await fs.readFile(path.join(dir, name), 'utf8')); } catch { continue; }
    const daskam = batch?.daskam_id ?? batch?.daskam ?? Number(name.slice(1, 4));
    if (!Array.isArray(batch?.rows)) continue;
    for (const row of batch.rows) {
      if (!Number.isInteger(row?.n)) continue;
      for (const item of [row.matte, ...(Array.isArray(row.alternates) ? row.alternates : [])]) {
        if (!item || typeof item.version !== 'string' || typeof item.file !== 'string' || typeof item.sha256 !== 'string') continue;
        const key = `${daskam}:${row.n}`;
        if (!index.has(key)) index.set(key, []);
        index.get(key).push({ batch: `art/batches/${name}`, item });
      }
    }
  }
  return index;
}

// The exact file and checksum behind each painting a decision was made on. The build's provenance
// maps the served key to its source exactly; otherwise the version is looked up in the batches.
function resolver(index, provenance) {
  const byKey = new Map((provenance || []).map(item => [item.key, item]));
  return (daskam, sloka, imageVersions) => {
    let shown;
    try { shown = typeof imageVersions === 'string' ? JSON.parse(imageVersions) : imageVersions; } catch { shown = []; }
    if (!Array.isArray(shown)) shown = [];
    return shown.filter(image => image && typeof image === 'object').map(({ role = null, key = null, version = null }) => {
      const out = { role, version, key };
      const exact = key && byKey.get(key);
      if (exact) return { ...out, file: exact.source, sha256: exact.sourceHash };
      const hits = (index.get(`${daskam}:${sloka}`) || []).filter(hit => hit.item.version === version);
      const checksums = [...new Set(hits.map(hit => hit.item.sha256))];
      if (checksums.length === 1) return { ...out, file: hits[0].item.file, sha256: checksums[0] };
      return { ...out, file: null, sha256: null, unresolved: checksums.length ? 'ambiguous batch entries' : 'no batch entry' };
    });
  };
}

const versionsOf = imageVersions => {
  try { const shown = JSON.parse(imageVersions); return Array.isArray(shown) ? shown : []; } catch { return []; }
};

// Pull an export into the work lists. Returns what changed and the art:approve steps a new
// captain confirmation asks the studio to run.
export async function pullFeedback(root, exportData, { now = new Date(), daskam = null } = {}) {
  const at = now.toISOString();
  const feedback = Array.isArray(exportData?.feedback) ? exportData.feedback : [];
  const signoffs = Array.isArray(exportData?.signoffs) ? exportData.signoffs : [];
  const index = await batchIndex(root);
  const resolve = resolver(index, await readJsonIfPresent(path.join(root, 'artifacts/review-site/asset-provenance.json')));
  // Dasakams with new D1 rows, and every existing work list (a batch may have answered one of its notes).
  let logged = [];
  try { logged = (await fs.readdir(path.join(root, 'art/feedback'))).map(name => /^d(\d{3})\.json$/.exec(name)).filter(Boolean).map(m => Number(m[1])); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const chapters = [...new Set([...feedback, ...signoffs].map(row => row.daskam).concat(logged))]
    .filter(id => Number.isInteger(id) && id >= 1 && id <= 100 && (daskam === null || id === daskam)).sort((a, b) => a - b);
  const report = { changed: [], added: {}, approvals: [], warnings: [] };
  for (const id of chapters) {
    const log = await readLog(root, id);
    const start = log.entries.length;
    const seen = new Set(log.entries.map(entry => entry.id).filter(Boolean));
    const rows = feedback.filter(row => row.daskam === id);
    const add = entry => { log.entries.push(entry); if (entry.id) seen.add(entry.id); };

    // A new painting whose batch entry answers a note marks that note fixed in that version.
    const imageFixes = () => {
      for (const note of notesOf(log)) {
        if (!['open', 'being-fixed'].includes(lastStatus(log, note.id).status)) continue;
        const hit = (index.get(`${id}:${note.stanza}`) || []).find(h => Array.isArray(h.item.answers_notes) && h.item.answers_notes.includes(note.id));
        if (hit) add({ kind: 'status', note: note.id, status: 'fixed', fix: 'image', version: hit.item.version, file: hit.item.file, sha256: hit.item.sha256, batch: hit.batch, at, by: 'studio' });
      }
    };
    imageFixes();
    // New reviewer requests (and legacy notes) become open notes; asking again on a fix links back to it.
    for (const row of rows) {
      if (!NOTE_TYPES.includes(row.decision) || seen.has(row.id)) continue;
      const shown = versionsOf(row.image_versions).filter(image => image?.role === 'matte').map(image => image.version);
      const reopens = notesOf(log).filter(note => note.stanza === row.sloka).filter(note => {
        const last = lastStatus(log, note.id);
        return last.status === 'fixed' && (last.fix === 'image' ? shown.includes(last.version) : row.created_at > last.at);
      }).map(note => note.id);
      const images = resolve(id, row.sloka, row.image_versions);
      for (const image of images) if (image.unresolved) report.warnings.push(`D${pad(id)} S${pad(row.sloka)} note ${row.id}: ${image.version} checksum unresolved (${image.unresolved})`);
      add({ kind: 'note', id: row.id, stanza: row.sloka, type: row.decision, note: row.message, reviewer: row.reviewer_name, at: row.created_at, revision: row.revision, images, status: 'open', pulled_at: at, ...(reopens.length ? { reopens } : {}) });
    }
    imageFixes();
    // The reviewer approving what a fix shows confirms the note.
    for (const note of notesOf(log)) {
      const last = lastStatus(log, note.id);
      if (last.status !== 'fixed') continue;
      const approval = rows.find(row => row.decision === 'approve' && row.sloka === note.stanza
        && (last.fix === 'image' ? versionsOf(row.image_versions).some(image => image?.role === 'matte' && image.version === last.version) : row.created_at > last.at));
      if (approval) add({ kind: 'status', note: note.id, status: 'confirmed', decision: approval.id, reviewer: approval.reviewer_name, at: approval.created_at, pulled_at: at });
    }
    // Sign-offs and captain confirmations, each with the exact paintings it covered.
    const snapshot = stanzas => {
      let parsed;
      try { parsed = JSON.parse(stanzas); } catch { parsed = []; }
      return (Array.isArray(parsed) ? parsed : []).map(s => ({ stanza: s.sloka, decision: s.decision, images: resolve(id, s.sloka, s.image_versions) }));
    };
    for (const row of signoffs.filter(r => r.daskam === id && r.kind === 'signoff' && !seen.has(r.id))) {
      add({ kind: 'signoff', id: row.id, at: row.created_at, reviewer: row.reviewer_name, revision: row.revision, stanzas: snapshot(row.stanzas), pulled_at: at });
    }
    for (const row of signoffs.filter(r => r.daskam === id && r.kind === 'confirm' && !seen.has(r.id))) {
      const stanzas = snapshot(row.stanzas);
      add({ kind: 'captain-confirmed', id: row.id, at: row.created_at, by: row.reviewer_name, signoff: row.signoff_id, revision: row.revision, stanzas, pulled_at: at });
      for (const stanza of stanzas) for (const image of stanza.images.filter(i => i.role === 'matte')) {
        report.approvals.push({ daskam: id, sloka: stanza.stanza, version: image.version, file: image.file, sha256: image.sha256, confirmation: row.id });
      }
    }
    if (await appendLog(root, id, log)) { report.changed.push(id); report.added[id] = log.entries.length - start; }
  }
  return report;
}

// The studio records work on a note: being-fixed, or fixed for a text-only correction.
// A redrawn painting is recorded through its batch entry's answers_notes instead, so the fix
// is bound to that exact version and checksum.
export async function markNote(root, { daskam, note, status, fix = null, by = 'studio', now = new Date() }) {
  const log = await readLog(root, daskam);
  const entry = noteById(log, note);
  if (!entry) throw new Error(`No note ${note} in art/feedback/d${pad(daskam)}.json`);
  if (!['being-fixed', 'fixed'].includes(status)) throw new Error('Status must be being-fixed or fixed (confirmed comes from the reviewer approving the fix).');
  if (status === 'fixed' && fix !== 'text') throw new Error('Mark only a text-only fix here (--fix=text). A new painting answers a note through its batch entry: "answers_notes": ["<note id>"].');
  if (status !== 'fixed' && fix) throw new Error('--fix applies only to --status=fixed');
  const from = lastStatus(log, note).status;
  if (!NEXT[from]?.includes(status)) throw new Error(`Note ${note} is ${from}; it cannot move to ${status}.`);
  log.entries.push({ kind: 'status', note, status, ...(fix ? { fix } : {}), at: now.toISOString(), by });
  await appendLog(root, daskam, log);
  return log.entries.at(-1);
}

async function checksumOf(file) {
  try { return createHash('sha256').update(await fs.readFile(file)).digest('hex'); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function main(argv) {
  const [command, ...rest] = argv;
  const args = Object.fromEntries(rest.map(arg => { const m = arg.match(/^--([^=]+)=(.*)$/); return m ? [m[1], m[2]] : [arg.replace(/^--/, ''), true]; }));
  const root = process.cwd();
  const daskam = args.daskam === undefined ? null : Number(args.daskam);
  if (daskam !== null && (!Number.isInteger(daskam) || daskam < 1 || daskam > 100)) throw new Error('--daskam must be 1 to 100');
  if (command === 'pull') {
    const exportData = args.from ? JSON.parse(await fs.readFile(path.resolve(String(args.from)), 'utf8')) : await readD1(root);
    const report = await pullFeedback(root, exportData, { daskam });
    for (const warning of report.warnings) console.warn(`Warning: ${warning}`);
    console.log(report.changed.length ? `Updated ${report.changed.map(id => `art/feedback/d${pad(id)}.json (+${report.added[id]})`).join(', ')}.` : 'No new notes, fixes, sign-offs or confirmations.');
    if (report.approvals.length) {
      console.log('\nCaptain confirmed. Check each checksum, then record final approval with the studio\'s art:approve step:');
      for (const a of report.approvals) {
        const actual = a.file ? await checksumOf(path.join(root, a.file)) : null;
        const check = !a.sha256 ? 'CHECKSUM UNRESOLVED' : actual === null ? 'file not in this checkout' : actual === a.sha256 ? 'checksum ok' : 'CHECKSUM MISMATCH - do not approve';
        console.log(`  D${pad(a.daskam)} S${pad(a.sloka)} ${a.version} sha256 ${a.sha256 ?? '-'} (${check})\n    npm run art:approve -- --daskam=${a.daskam} --sloka=${a.sloka} --orientation=landscape --file=${a.file ?? '<unresolved>'}`);
      }
    }
    return;
  }
  if (command === 'mark') {
    if (daskam === null || typeof args.note !== 'string' || typeof args.status !== 'string') throw new Error('Usage: npm run review:mark -- --daskam=N --note=<id> --status=being-fixed|fixed [--fix=text] [--by=name]');
    const entry = await markNote(root, { daskam, note: args.note, status: args.status, fix: typeof args.fix === 'string' ? args.fix : null, by: typeof args.by === 'string' ? args.by : 'studio' });
    console.log(`Note ${entry.note} is now ${entry.status}${entry.fix ? ` (${entry.fix})` : ''} in art/feedback/d${pad(daskam)}.json.`);
    return;
  }
  throw new Error('Usage: node scripts/review-feedback.mjs pull [--from=export.json] [--daskam=N] | mark --daskam=N --note=<id> --status=being-fixed|fixed [--fix=text]');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
}
