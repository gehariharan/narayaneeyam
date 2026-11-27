import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { renderChapter, renderIndex, stanzaState } from '../review-site/views.mjs';
import { appendLog, readLog, rowFix, statusOf } from '../review-site/feedback-log.mjs';
import { markNote, parseWranglerJson, pullFeedback } from '../scripts/review-feedback.mjs';

// Step 4 of the review loop: notes come back as tracked fixes, the reviewer signs a dasakam off,
// and the captain confirms it with a separate key. The Worker runs against the real D1
// migrations in an in-memory SQLite database.
const migration = name => fs.readFile(new URL(`../review-site/migrations/${name}`, import.meta.url), 'utf8');
const painting = (n, version) => ({ role: 'matte', key: `media/d001-s00${n}-matte-${version}.webp`, version });
const shown = (n, version) => JSON.stringify([painting(n, version)]);
// S1 was redrawn as v002 to answer note n1 (made on v001); S2's text was corrected for note t1; S3 is untouched.
const chapter = {
  id: 1, revision: 'd001-rev-b', title: 'Dasakam 1', description: 'Fixture', representative: 'media/d001-s001-matte-v002.webp',
  rows: [
    { n: 1, commentary: 'One', images: [painting(1, 'v002')], fix: { notes: ['n1'], kind: 'image', version: 'v002', previous: { key: 'media/d001-s001-previous-v001.webp', version: 'v001' } } },
    { n: 2, commentary: 'Two', images: [painting(2, 'v001')], fix: { notes: ['t1'], kind: 'text', version: 'v001' } },
    { n: 3, commentary: 'Three', images: [painting(3, 'v001')] },
  ],
};
const dataset = { revision: 'whole', assets: {}, chapters: [chapter] };
const source = (await fs.readFile(new URL('../review-site/worker.mjs', import.meta.url), 'utf8'))
  .replace("import data from '../artifacts/review-site/data.json';", `const data=${JSON.stringify(dataset)};`)
  .replace("from './views.mjs'", `from '${new URL('../review-site/views.mjs', import.meta.url).href}'`);
const worker = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const { decisions, signoff, confirm, captainKey, reviewProgress, unlockToken, captainToken } = worker;

const PASSPHRASE = 'fixture passphrase', CAPTAIN = 'fixture captain key';
let seq = 0;
function record(db, n, decision, version, { at, id } = {}) {
  seq++;
  db.prepare("INSERT INTO feedback(id,created_at,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status,decision) VALUES(?,?,1,?,'generated','other',?,'Srividhya','rev',?,?,?)")
    .run(id || `r${seq}`, at || `2026-11-28T10:00:${String(seq).padStart(2, '0')}.000Z`, n, decision === 'approve' ? '' : 'Fixture note.', shown(n, version), decision === 'approve' ? 'closed' : 'open', decision);
}
async function fixtureDb() {
  const db = new DatabaseSync(':memory:');
  for (const name of ['0001_feedback.sql', '0002_feedback_all_dasakams.sql', '0003_feedback_decisions.sql', '0004_signoffs.sql']) db.exec(await migration(name));
  // n1 asked for a redraw of S1 v001; t1 reported a text issue on S2 (whose painting is unchanged).
  record(db, 1, 'redraw', 'v001', { id: 'n1', at: '2026-11-27T09:00:00.000Z' });
  record(db, 2, 'text-issue', 'v001', { id: 't1', at: '2026-11-27T09:01:00.000Z' });
  return db;
}
function makeEnv(db, { captain = CAPTAIN } = {}) {
  const env = {
    NARAYANEEYAM_PASSPHRASE: PASSPHRASE, limits: [],
    FEEDBACK_LIMIT: { limit: async ({ key }) => { env.limits.push(key); return { success: true }; } },
    DECISION_LIMIT: { limit: async () => ({ success: true }) },
    DB: { prepare: sql => { const statement = db.prepare(sql); return { all: async () => ({ results: statement.all() }), bind: (...args) => ({ run: async () => statement.run(...args), all: async () => ({ results: statement.all(...args) }) }) }; } },
  };
  if (captain) env.CAPTAIN_CONFIRM_KEY = captain;
  return env;
}
const ORIGIN = 'https://gehariharan.com';
const post = (route, body, { cookie = '', origin = ORIGIN } = {}) => new Request(`${ORIGIN}/narayaneeyam/api/${route}`, { method: 'POST', headers: { 'content-type': 'application/json', origin, ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
const state = async env => (await decisions(new Request(`${ORIGIN}/narayaneeyam/api/decisions?daskam=1`), env, dataset)).json();
const progress = async env => (await reviewProgress(env, dataset))[1];
const captainCookie = async (key = CAPTAIN) => `narayaneeyam_captain=${await captainToken(key, Math.floor(Date.now() / 1000) + 3600)}`;
const approveAll = db => { record(db, 1, 'approve', 'v002'); record(db, 2, 'approve', 'v001'); record(db, 3, 'approve', 'v001'); };
const signoffBody = { daskam: 1, revision: chapter.revision, reviewer: 'Srividhya' };

test('stanza state: a fix shows Fixed, re-check until the reviewer decides again on what is shown now', () => {
  const imageFix = { notes: ['n1'] };
  assert.equal(stanzaState(null, undefined), 'none');
  assert.equal(stanzaState(null, { id: 'a', decision: 'approve' }), 'approve');
  assert.equal(stanzaState(null, { id: 'n1', decision: 'redraw' }), 'redraw');
  // A new painting answering the note has no decision on it yet.
  assert.equal(stanzaState(imageFix, undefined), 'fixed');
  // A text-only fix keeps the painting, so the note itself is still the latest decision.
  assert.equal(stanzaState({ notes: ['t1'] }, { id: 't1', decision: 'text-issue' }), 'fixed');
  // The reviewer then approves, or asks again.
  assert.equal(stanzaState(imageFix, { id: 'a2', decision: 'approve' }), 'approve');
  assert.equal(stanzaState(imageFix, { id: 'n2', decision: 'small-edit' }), 'small-edit');
});

test('the card API returns the fixed notes, and the board shows Fixed, re-check', async () => {
  const env = makeEnv(await fixtureDb());
  const body = await state(env);
  assert.deepEqual(body.decisions.map(d => [d.sloka, d.id]), [[2, 't1']], 'S1 v002 has no decision yet; S2 still shows its note');
  assert.deepEqual(Object.keys(body.fixes), ['1', '2']);
  assert.deepEqual(body.fixes[1].map(n => [n.id, n.decision, n.note, n.reviewer]), [['n1', 'redraw', 'Fixture note.', 'Srividhya']]);
  assert.equal(body.fixes[2][0].id, 't1');
  assert.deepEqual([body.approved, body.total, body.allApproved, body.signoff, body.confirmation], [0, 3, false, null, null]);
  assert.deepEqual(await progress(env), { total: 3, decided: 0, approved: 0, waiting: 0, fixed: 2, state: 'fixed' });
  const html = renderIndex(dataset, '/narayaneeyam/', true, { 1: await progress(env) });
  assert.ok(html.includes('aria-label="Dasakam 1: Fixed, re-check, 2 of 3 stanzas to re-check"'));
  assert.ok(html.includes('<span>Re-check</span>'));
  assert.ok(html.includes('Fixed, re-check (1)'));
});

test('state transitions: approve a fix, ask again, approve every stanza', async () => {
  const db = await fixtureDb(), env = makeEnv(db);
  record(db, 1, 'approve', 'v002');
  assert.deepEqual(await progress(env), { total: 3, decided: 1, approved: 1, waiting: 0, fixed: 1, state: 'fixed' });
  record(db, 2, 'text-issue', 'v001');
  assert.deepEqual(await progress(env), { total: 3, decided: 2, approved: 1, waiting: 1, fixed: 0, state: 'waiting' }, 'asking again on the text fix is a new request');
  record(db, 2, 'approve', 'v001'); record(db, 3, 'approve', 'v001');
  assert.deepEqual(await progress(env), { total: 3, decided: 3, approved: 3, waiting: 0, fixed: 0, state: 'reviewed' });
  const body = await state(env);
  assert.deepEqual([body.approved, body.allApproved], [3, true]);
});

test('sign-off opens only when every stanza is approved on its current painting, and stays current only while that holds', async () => {
  const db = await fixtureDb(), env = makeEnv(db);
  const early = await signoff(post('signoff', signoffBody), env, dataset);
  assert.equal(early.status, 409);
  assert.match((await early.json()).error, /Every stanza must be approved/);
  // An approval on the earlier S1 painting does not count.
  record(db, 1, 'approve', 'v001'); record(db, 2, 'approve', 'v001'); record(db, 3, 'approve', 'v001');
  assert.equal((await signoff(post('signoff', signoffBody), env, dataset)).status, 409);
  record(db, 1, 'approve', 'v002');
  const signed = await signoff(post('signoff', signoffBody), env, dataset, new Date('2026-11-28T12:00:00.000Z'));
  assert.equal(signed.status, 201);
  const { id } = await signed.json();
  const row = db.prepare('SELECT * FROM signoffs').get();
  assert.deepEqual([row.id, row.kind, row.reviewer_name, row.created_at, row.revision, row.signoff_id], [id, 'signoff', 'Srividhya', '2026-11-28T12:00:00.000Z', chapter.revision, null]);
  assert.deepEqual(JSON.parse(row.stanzas).map(s => [s.sloka, JSON.parse(s.image_versions)[0].version]), [[1, 'v002'], [2, 'v001'], [3, 'v001']]);
  assert.deepEqual((await state(env)).signoff, { id, reviewer: 'Srividhya', at: '2026-11-28T12:00:00.000Z' });
  assert.equal((await progress(env)).state, 'signed-off');
  // Pressing it again returns the same sign-off instead of a second one.
  const again = await signoff(post('signoff', signoffBody), env, dataset);
  assert.equal(again.status, 200);
  assert.equal((await again.json()).id, id);
  assert.equal(db.prepare('SELECT count(*) AS n FROM signoffs').get().n, 1);
  // A later request on any stanza reopens the dasakam.
  record(db, 3, 'small-edit', 'v001');
  assert.equal((await state(env)).signoff, null);
  assert.equal((await progress(env)).state, 'waiting');
  // Stale page, unknown dasakam, missing name and cross-site posts are refused.
  assert.equal((await signoff(post('signoff', { ...signoffBody, revision: 'old' }), env, dataset)).status, 409);
  assert.equal((await signoff(post('signoff', { ...signoffBody, daskam: 2 }), env, dataset)).status, 400);
  assert.equal((await signoff(post('signoff', { ...signoffBody, reviewer: ' ' }), env, dataset)).status, 400);
  assert.equal((await signoff(post('signoff', signoffBody, { origin: 'https://evil.example' }), env, dataset)).status, 403);
});

test('captain confirmation is closed when CAPTAIN_CONFIRM_KEY is missing', async () => {
  const db = await fixtureDb(), env = makeEnv(db, { captain: null });
  approveAll(db);
  const { id } = await (await signoff(post('signoff', signoffBody), env, dataset)).json();
  for (const response of [
    await confirm(post('confirm', { ...signoffBody, signoff: id }, { cookie: await captainCookie() }), env, dataset),
    await captainKey(post('captain-key', { key: CAPTAIN }), env),
    await captainKey(post('captain-key', { key: '' }), env),
  ]) {
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { error: 'Captain confirmation is closed: no captain key is set for this site.', closed: true });
  }
  assert.equal(db.prepare("SELECT count(*) AS n FROM signoffs WHERE kind='confirm'").get().n, 0);
  assert.equal((await progress(env)).state, 'signed-off');
});

test('the captain key is entered once, remembered in a signed cookie, and confirms the current sign-off with one click', async () => {
  const db = await fixtureDb(), env = makeEnv(db);
  approveAll(db);
  const { id } = await (await signoff(post('signoff', signoffBody), env, dataset)).json();
  const confirmBody = { ...signoffBody, reviewer: 'Captain', signoff: id };
  // Without the captain cookie the page is asked for the key; the passphrase cookie is not a captain cookie.
  const unlockCookie = `narayaneeyam_unlock=${await unlockToken(PASSPHRASE, Math.floor(Date.now() / 1000) + 3600)}`;
  for (const cookie of ['', unlockCookie, `narayaneeyam_captain=${(await unlockToken(PASSPHRASE, Math.floor(Date.now() / 1000) + 3600))}`, await captainCookie('rotated key')]) {
    const response = await confirm(post('confirm', confirmBody, { cookie }), env, dataset);
    assert.equal(response.status, 401);
    assert.equal((await response.json()).needKey, true);
  }
  // A wrong key is refused and rate limited per IP under its own key.
  const wrong = await captainKey(post('captain-key', { key: 'guess' }), env);
  assert.equal(wrong.status, 403);
  assert.equal(wrong.headers.get('set-cookie'), null);
  assert.deepEqual(env.limits, ['captain:local']);
  const saved = await captainKey(post('captain-key', { key: CAPTAIN }), env);
  assert.equal(saved.status, 200);
  const setCookie = saved.headers.get('set-cookie');
  assert.match(setCookie, /^narayaneeyam_captain=\d+\.[A-Za-z0-9_-]{43}; Max-Age=7776000; Path=\/narayaneeyam; HttpOnly; Secure; SameSite=Strict$/);
  assert.ok(!setCookie.includes(CAPTAIN));
  const cookie = setCookie.split(';')[0];
  // A confirmation names the current sign-off.
  assert.equal((await confirm(post('confirm', { ...confirmBody, signoff: 'other' }, { cookie }), env, dataset)).status, 409);
  const confirmed = await confirm(post('confirm', confirmBody, { cookie }), env, dataset, new Date('2026-11-28T13:00:00.000Z'));
  assert.equal(confirmed.status, 201);
  const row = db.prepare("SELECT * FROM signoffs WHERE kind='confirm'").get();
  assert.deepEqual([row.reviewer_name, row.signoff_id, row.created_at], ['Captain', id, '2026-11-28T13:00:00.000Z']);
  assert.equal(row.stanzas, db.prepare("SELECT stanzas FROM signoffs WHERE kind='signoff'").get().stanzas);
  assert.deepEqual((await state(env)).confirmation, { id: row.id, reviewer: 'Captain', at: '2026-11-28T13:00:00.000Z' });
  assert.equal((await progress(env)).state, 'confirmed');
  assert.equal((await confirm(post('confirm', confirmBody, { cookie }), env, dataset)).status, 200, 'a second click returns the same confirmation');
  assert.equal(db.prepare("SELECT count(*) AS n FROM signoffs WHERE kind='confirm'").get().n, 1);
  // A redrawn stanza reopens the dasakam; the old confirmation no longer counts.
  record(db, 2, 'redraw', 'v001');
  assert.deepEqual([(await state(env)).signoff, (await state(env)).confirmation], [null, null]);
  assert.equal((await confirm(post('confirm', confirmBody, { cookie }), env, dataset)).status, 409);
});

test('sign-off, confirm and the captain key stay behind the passphrase lock', async () => {
  const db = await fixtureDb(), env = makeEnv(db);
  approveAll(db);
  for (const route of ['signoff', 'confirm', 'captain-key']) {
    const locked = await worker.default.fetch(post(route, { ...signoffBody, key: CAPTAIN }), env);
    assert.equal(locked.status, 401);
    assert.equal(await locked.text(), '');
    assert.equal(locked.headers.get('set-cookie'), null);
    const unlock = `narayaneeyam_unlock=${await unlockToken(PASSPHRASE, Math.floor(Date.now() / 1000) + 3600)}`;
    assert.equal((await worker.default.fetch(new Request(`${ORIGIN}/narayaneeyam/api/${route}`, { headers: { cookie: unlock } }), env)).status, 405);
  }
  assert.equal(db.prepare('SELECT count(*) AS n FROM signoffs').get().n, 0);
});

test('the card shows a before/after toggle for a redrawn painting and the sign-off panel at the end', () => {
  const html = renderChapter(chapter, chapter.revision, '/narayaneeyam/', true, [chapter]);
  assert.ok(html.includes('data-fix="{&quot;notes&quot;:[&quot;n1&quot;],&quot;kind&quot;:&quot;image&quot;,&quot;version&quot;:&quot;v002&quot;}"'));
  assert.ok(html.includes('data-fix="{&quot;notes&quot;:[&quot;t1&quot;],&quot;kind&quot;:&quot;text&quot;,&quot;version&quot;:&quot;v001&quot;}"'));
  assert.equal((html.match(/data-fix=/g) || []).length, 2);
  assert.ok(html.includes('<figure class="matte" data-after>'));
  assert.ok(html.includes('<figure class="matte before" data-before hidden><a data-zoom href="/narayaneeyam/media/d001-s001-previous-v001.webp">'));
  assert.ok(html.includes('data-compare aria-pressed="false" data-show-before="Show before (v001)" data-show-after="Show after (v002)">Show before (v001)</button>'));
  assert.equal((html.match(/data-compare aria-pressed/g) || []).length, 1, 'only the redrawn painting has a before/after toggle');
  assert.ok(html.includes("fixed:'Fixed, re-check'"));
  const panel = html.match(/<section class="signoff"[\s\S]*?<\/section>/)[0];
  assert.ok(panel.includes('data-signoff-url="/narayaneeyam/api/signoff" data-confirm-url="/narayaneeyam/api/confirm" data-key-url="/narayaneeyam/api/captain-key"'));
  assert.ok(panel.includes('<button type="button" data-signoff-button disabled>Sign off this dasakam</button>'));
  assert.ok(panel.includes('<button type="button" data-confirm-button hidden>Confirm approval</button>'));
  assert.ok(panel.includes('<form data-captain-key hidden>'));
  assert.ok(html.indexOf('<section class="signoff"') > html.lastIndexOf('class="sloka"'));
  new Function(html.match(/<script>([\s\S]*)<\/script>/)[1]);
  const preview = renderChapter(chapter, chapter.revision, './', false, [chapter]);
  assert.ok(!preview.includes('<section class="signoff"') && !preview.includes('data-fix="'));
  assert.ok(preview.includes('data-compare aria-pressed'), 'the static preview keeps the before/after toggle');
});

// ---- The studio pull command and the committed work list -------------------------------

const sha = c => c.repeat(64);
async function studio() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'review-feedback-'));
  await fs.mkdir(path.join(root, 'art/batches'), { recursive: true });
  const batch = (name, rows) => fs.writeFile(path.join(root, 'art/batches', name), JSON.stringify({ daskam_id: 1, rows }));
  await batch('d001-comparison-v001.json', [1, 2, 3].map(n => ({ n, matte: { file: `artifacts/d001/s00${n}/landscape/candidate-v001.png`, version: 'v001', sha256: sha(String(n)) } })));
  return { root, batch };
}
const fb = (id, n, decision, version, at, extra = {}) => ({ id, created_at: at, daskam: 1, sloka: n, decision, message: decision === 'approve' ? '' : `Note ${id}`, reviewer_name: 'Srividhya', revision: 'rev', image_versions: shown(n, version), status: decision === 'approve' ? 'closed' : 'open', ...extra });
const NOW = new Date('2026-11-29T08:00:00.000Z');
const logText = root => fs.readFile(path.join(root, 'art/feedback/d001.json'), 'utf8');

test('parseWranglerJson reads the d1 execute --json output and refuses a failed statement', () => {
  assert.deepEqual(parseWranglerJson(JSON.stringify([{ results: [{ id: 'a' }], success: true, meta: {} }])), [{ id: 'a' }]);
  assert.throws(() => parseWranglerJson(JSON.stringify([{ success: false, results: [] }])), /did not return results/);
});

test('pull appends new notes with the exact painting checksum, and never deletes or rewrites earlier entries', async () => {
  const { root } = await studio();
  const first = { feedback: [fb('n1', 1, 'redraw', 'v001', '2026-11-27T09:00:00.000Z'), fb('a3', 3, 'approve', 'v001', '2026-11-27T09:02:00.000Z'), { ...fb('legacy', 2, 'note', 'v001', '2026-10-01T09:00:00.000Z'), reviewer_name: '' }], signoffs: [] };
  const report = await pullFeedback(root, first, { now: NOW });
  assert.deepEqual([report.changed, report.added, report.warnings], [[1], { 1: 2 }, []]);
  const log = await readLog(root, 1);
  assert.deepEqual(log.entries.map(e => [e.kind, e.id, e.type, e.status]), [['note', 'n1', 'redraw', 'open'], ['note', 'legacy', 'note', 'open']], 'approvals are not work; notes keep D1 order');
  assert.deepEqual(log.entries[0], {
    kind: 'note', id: 'n1', stanza: 1, type: 'redraw', note: 'Note n1', reviewer: 'Srividhya', at: '2026-11-27T09:00:00.000Z', revision: 'rev',
    images: [{ role: 'matte', version: 'v001', key: 'media/d001-s001-matte-v001.webp', file: 'artifacts/d001/s001/landscape/candidate-v001.png', sha256: sha('1') }],
    status: 'open', pulled_at: NOW.toISOString(),
  });
  const before = await logText(root);
  // Pulling the same export again changes nothing, byte for byte.
  assert.deepEqual((await pullFeedback(root, first, { now: new Date('2026-11-30T00:00:00.000Z') })).changed, []);
  assert.equal(await logText(root), before);
  // Rows gone from D1 stay in the work list; new rows are appended after the existing ones.
  await pullFeedback(root, { feedback: [fb('n2', 3, 'small-edit', 'v001', '2026-11-28T09:00:00.000Z')] }, { now: NOW });
  const after = await readLog(root, 1);
  assert.deepEqual(after.entries.map(e => e.id), ['n1', 'legacy', 'n2']);
  assert.deepEqual(after.entries.slice(0, 2), log.entries);
  // The writer refuses a log whose earlier entries were edited, reordered or dropped.
  for (const tampered of [{ ...after, entries: [{ ...after.entries[0], note: 'edited' }, ...after.entries.slice(1)] }, { ...after, entries: after.entries.slice(1) }, { ...after, entries: [after.entries[1], after.entries[0], after.entries[2]] }]) {
    await assert.rejects(appendLog(root, 1, tampered), /Refusing to rewrite earlier entries/);
  }
  // An unresolvable painting version is recorded as such, with a warning, not guessed.
  const odd = await pullFeedback(root, { feedback: [fb('n3', 2, 'redraw', 'v009', '2026-11-28T10:00:00.000Z')] }, { now: NOW });
  assert.match(odd.warnings[0], /D001 S002 note n3: v009 checksum unresolved \(no batch entry\)/);
  assert.deepEqual((await readLog(root, 1)).entries.at(-1).images[0], { role: 'matte', version: 'v009', key: 'media/d001-s002-matte-v009.webp', file: null, sha256: null, unresolved: 'no batch entry' });
  await fs.rm(root, { recursive: true });
});

test('a note moves open -> being fixed -> fixed in vNNN -> confirmed, each step appended', async () => {
  const { root, batch } = await studio();
  await pullFeedback(root, { feedback: [fb('n1', 1, 'redraw', 'v001', '2026-11-27T09:00:00.000Z')] }, { now: NOW });
  assert.equal(statusOf(await readLog(root, 1), 'n1'), 'open');
  await markNote(root, { daskam: 1, note: 'n1', status: 'being-fixed', by: 'studio', now: NOW });
  assert.equal(statusOf(await readLog(root, 1), 'n1'), 'being-fixed');
  // Image fixes are bound to a batch entry, not marked by hand.
  await assert.rejects(markNote(root, { daskam: 1, note: 'n1', status: 'fixed', now: NOW }), /answers_notes/);
  await assert.rejects(markNote(root, { daskam: 1, note: 'n1', status: 'confirmed', now: NOW }), /being-fixed or fixed/);
  await assert.rejects(markNote(root, { daskam: 1, note: 'missing', status: 'being-fixed', now: NOW }), /No note missing/);
  // The new S1 painting v002 records that it answers note n1.
  await batch('d001-comparison-v002.json', [{ n: 1, matte: { file: 'artifacts/d001/s001/landscape/candidate-v002.png', version: 'v002', sha256: sha('a'), answers_notes: ['n1'] } }, ...[2, 3].map(n => ({ n, matte: { file: `artifacts/d001/s00${n}/landscape/candidate-v001.png`, version: 'v001', sha256: sha(String(n)) } }))]);
  await pullFeedback(root, { feedback: [] }, { now: NOW });
  let log = await readLog(root, 1);
  assert.deepEqual(log.entries.at(-1), { kind: 'status', note: 'n1', status: 'fixed', fix: 'image', version: 'v002', file: 'artifacts/d001/s001/landscape/candidate-v002.png', sha256: sha('a'), batch: 'art/batches/d001-comparison-v002.json', at: NOW.toISOString(), by: 'studio' });
  // The build shows S1 as fixed with v001 as the before painting.
  assert.deepEqual(rowFix(log, 1, 1, { version: 'v002', answers_notes: ['n1'] }), { notes: ['n1'], kind: 'image', version: 'v002', previous: { file: 'artifacts/d001/s001/landscape/candidate-v001.png', sha256: sha('1'), version: 'v001' } });
  // An approval of the old painting does not confirm the fix; an approval of v002 does.
  await pullFeedback(root, { feedback: [fb('n1', 1, 'redraw', 'v001', '2026-11-27T09:00:00.000Z'), fb('old', 1, 'approve', 'v001', '2026-11-27T08:00:00.000Z')] }, { now: NOW });
  assert.equal(statusOf(await readLog(root, 1), 'n1'), 'fixed');
  await pullFeedback(root, { feedback: [fb('ok', 1, 'approve', 'v002', '2026-11-29T09:00:00.000Z')] }, { now: NOW });
  log = await readLog(root, 1);
  assert.deepEqual(log.entries.at(-1), { kind: 'status', note: 'n1', status: 'confirmed', decision: 'ok', reviewer: 'Srividhya', at: '2026-11-29T09:00:00.000Z', pulled_at: NOW.toISOString() });
  assert.deepEqual(log.entries.filter(e => e.note === 'n1').map(e => e.status), ['being-fixed', 'fixed', 'confirmed']);
  // Confirmed notes no longer show as fixes on the card.
  assert.equal(rowFix(log, 1, 1, { version: 'v002', answers_notes: ['n1'] }), null);
  await assert.rejects(markNote(root, { daskam: 1, note: 'n1', status: 'being-fixed', now: NOW }), /n1 is confirmed/);
  // A batch cannot answer a note that is not on that stanza.
  assert.throws(() => rowFix(log, 1, 2, { version: 'v001', answers_notes: ['n1'] }), /not on D001 S002/);
  assert.throws(() => rowFix(log, 1, 1, { version: 'v002', answers_notes: 'n1' }), /list of note ids/);
  await fs.rm(root, { recursive: true });
});

test('a text-only fix is marked by the studio, shows without a new painting, and asking again links back', async () => {
  const { root } = await studio();
  await pullFeedback(root, { feedback: [fb('t1', 2, 'text-issue', 'v001', '2026-11-27T09:00:00.000Z')] }, { now: NOW });
  await assert.rejects(markNote(root, { daskam: 1, note: 't1', status: 'being-fixed', fix: 'text', now: NOW }), /only to --status=fixed/);
  await markNote(root, { daskam: 1, note: 't1', status: 'fixed', fix: 'text', by: 'studio', now: NOW });
  let log = await readLog(root, 1);
  assert.deepEqual(rowFix(log, 1, 2, { version: 'v001' }), { notes: ['t1'], kind: 'text', version: 'v001', previous: null });
  assert.equal(rowFix(log, 1, 1, { version: 'v001' }), null);
  // The reviewer asks again after the fix: a new open note that reopens t1.
  await pullFeedback(root, { feedback: [fb('t2', 2, 'text-issue', 'v001', '2026-11-29T10:00:00.000Z')] }, { now: NOW });
  log = await readLog(root, 1);
  assert.deepEqual([log.entries.at(-1).id, log.entries.at(-1).status, log.entries.at(-1).reopens], ['t2', 'open', ['t1']]);
  // An approval after the fix confirms it.
  await pullFeedback(root, { feedback: [fb('ok', 2, 'approve', 'v001', '2026-11-29T11:00:00.000Z')] }, { now: NOW });
  assert.equal(statusOf(await readLog(root, 1), 't1'), 'confirmed');
  await fs.rm(root, { recursive: true });
});

test('a pulled sign-off and captain confirmation record the exact paintings and list the art:approve steps', async () => {
  const { root } = await studio();
  const stanzas = JSON.stringify([1, 2, 3].map(n => ({ sloka: n, decision: `a${n}`, image_versions: shown(n, 'v001') })));
  const signoffs = [
    { id: 's1', created_at: '2026-11-29T12:00:00.000Z', daskam: 1, kind: 'signoff', reviewer_name: 'Srividhya', revision: 'rev', stanzas, signoff_id: null },
    { id: 'c1', created_at: '2026-11-29T13:00:00.000Z', daskam: 1, kind: 'confirm', reviewer_name: 'Captain', revision: 'rev', stanzas, signoff_id: 's1' },
  ];
  const report = await pullFeedback(root, { feedback: [], signoffs }, { now: NOW });
  const log = await readLog(root, 1);
  assert.deepEqual(log.entries.map(e => [e.kind, e.id]), [['signoff', 's1'], ['captain-confirmed', 'c1']]);
  const confirmed = log.entries[1];
  assert.deepEqual([confirmed.by, confirmed.signoff, confirmed.at], ['Captain', 's1', '2026-11-29T13:00:00.000Z']);
  assert.deepEqual(confirmed.stanzas[0], { stanza: 1, decision: 'a1', images: [{ role: 'matte', version: 'v001', key: 'media/d001-s001-matte-v001.webp', file: 'artifacts/d001/s001/landscape/candidate-v001.png', sha256: sha('1') }] });
  assert.deepEqual(report.approvals.map(a => [a.daskam, a.sloka, a.version, a.file, a.sha256, a.confirmation]), [1, 2, 3].map(n => [1, n, 'v001', `artifacts/d001/s00${n}/landscape/candidate-v001.png`, sha(String(n)), 'c1']));
  // The pull never touches art/approved.
  await assert.rejects(fs.access(path.join(root, 'art/approved')));
  assert.deepEqual((await pullFeedback(root, { feedback: [], signoffs }, { now: NOW })).approvals, [], 'an already pulled confirmation is not listed again');
  await fs.rm(root, { recursive: true });
});
