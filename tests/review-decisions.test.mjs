import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { renderChapter } from '../review-site/views.mjs';

// Reviewer decisions run against the real D1 migrations in an in-memory SQLite database,
// so the table constraints are exercised along with the Worker's own validation.
const migration = name => fs.readFile(new URL(`../review-site/migrations/${name}`, import.meta.url), 'utf8');
const painting = (n, version = 'v002') => ({ role: 'matte', key: `media/d001/s00${n}-${version}.webp`, version });
const chapter = {
  id: 1, revision: 'd001-rev-a', title: 'Dasakam 1', description: 'Fixture', representative: 'media/d001/s001-v002.webp',
  rows: [1, 2, 3, 4].map(n => ({ n, commentary: `Commentary ${n}`, images: [{ role: 'reference', key: `media/d001/s00${n}-ref.webp`, version: 'source' }, painting(n)] })),
};
const other = { ...structuredClone(chapter), id: 2, revision: 'd002-rev-a', title: 'Dasakam 2' };
const dataset = { revision: 'whole', assets: {}, chapters: [chapter, other] };
const shown = n => JSON.stringify([{ role: 'matte', key: `media/d001/s00${n}-v002.webp`, version: 'v002' }]);

const source = (await fs.readFile(new URL('../review-site/worker.mjs', import.meta.url), 'utf8'))
  .replace("import data from '../artifacts/review-site/data.json';", `const data=${JSON.stringify(dataset)};`)
  .replace("from './views.mjs'", `from '${new URL('../review-site/views.mjs', import.meta.url).href}'`);
const { feedback, decisions } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));

// A database migrated from 0001 with two legacy rows: one on the painting shown today, one on an older version.
async function migratedDb() {
  const db = new DatabaseSync(':memory:');
  db.exec(await migration('0001_feedback.sql'));
  db.exec(await migration('0002_feedback_all_dasakams.sql'));
  const legacy = db.prepare("INSERT INTO feedback(id,created_at,daskam,sloka,target,category,message,revision,image_versions) VALUES(?,?,1,?,'generated','other',?,'old-rev',?)");
  legacy.run('legacy-current', '2026-10-01T09:00:00.000Z', 1, 'Krishna needs a flute.', shown(1));
  legacy.run('legacy-old', '2026-10-02T09:00:00.000Z', 2, 'About an earlier painting.', JSON.stringify([{ role: 'matte', key: 'media/d001/s002-v001.webp', version: 'v001' }]));
  db.exec(await migration('0003_feedback_decisions.sql'));
  return db;
}
function d1(db, { limited = false } = {}) {
  const env = {
    db, limits: 0,
    DECISION_LIMIT: { limit: async () => { env.limits++; return { success: !limited }; } },
    DB: { prepare: sql => { const statement = db.prepare(sql); return { bind: (...args) => ({ run: async () => statement.run(...args), all: async () => ({ results: statement.all(...args) }) }) }; } },
  };
  return env;
}
const count = db => db.prepare('SELECT count(*) AS n FROM feedback').get().n;
const post = (body, env, { data = dataset, now = new Date('2026-11-27T10:00:00.000Z'), origin = 'https://gehariharan.com', raw } = {}) => feedback(new Request('https://gehariharan.com/narayaneeyam/api/feedback', {
  method: 'POST', headers: { 'content-type': 'application/json', origin },
  body: raw ?? JSON.stringify({ daskam: 1, sloka: 1, revision: 'd001-rev-a', reviewer: 'Fixture reviewer', website: '', ...body }),
}), env, data, now);
const get = (query, env, { data = dataset, method = 'GET', headers = {} } = {}) => decisions(new Request(`https://gehariharan.com/narayaneeyam/api/decisions${query}`, { method, headers }), env, data);
const latest = async (env, data) => Object.fromEntries((await (await get('?daskam=1', env, { data })).json()).decisions.map(d => [d.sloka, d]));

test('migration 0003 keeps every existing row and marks it a legacy note', async () => {
  const db = await migratedDb();
  const rows = db.prepare('SELECT id,created_at,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status,decision FROM feedback ORDER BY id').all();
  assert.deepEqual(rows.map(r => ({ ...r })), [
    { id: 'legacy-current', created_at: '2026-10-01T09:00:00.000Z', daskam: 1, sloka: 1, target: 'generated', category: 'other', message: 'Krishna needs a flute.', reviewer_name: '', revision: 'old-rev', image_versions: shown(1), status: 'open', decision: 'note' },
    { id: 'legacy-old', created_at: '2026-10-02T09:00:00.000Z', daskam: 1, sloka: 2, target: 'generated', category: 'other', message: 'About an earlier painting.', reviewer_name: '', revision: 'old-rev', image_versions: JSON.stringify([{ role: 'matte', key: 'media/d001/s002-v001.webp', version: 'v001' }]), status: 'open', decision: 'note' },
  ]);
});

test('each decision type is saved with the reviewer, the exact painting shown and the dasakam revision, then returned', async () => {
  const env = d1(await migratedDb());
  const cases = [
    { sloka: 1, decision: 'approve' },
    { sloka: 2, decision: 'redraw', message: '  Draw Krishna holding the flute.  ' },
    { sloka: 3, decision: 'small-edit', message: 'Soften the sky.' },
    { sloka: 4, decision: 'text-issue', message: 'The transliteration is missing a line.' },
  ];
  for (const c of cases) {
    const response = await post(c, env);
    assert.equal(response.status, 201, c.decision);
    const saved = await response.json();
    assert.equal(saved.decision, c.decision);
    assert.equal(saved.reviewer, 'Fixture reviewer');
    assert.equal(saved.at, '2026-11-27T10:00:00.000Z');
  }
  const stored = Object.fromEntries(env.db.prepare("SELECT * FROM feedback WHERE decision<>'note'").all().map(r => [r.decision, r]));
  for (const c of cases) {
    const row = stored[c.decision];
    assert.equal(row.daskam, 1);
    assert.equal(row.sloka, c.sloka);
    assert.equal(row.reviewer_name, 'Fixture reviewer');
    assert.equal(row.revision, 'd001-rev-a');
    assert.equal(row.image_versions, shown(c.sloka), 'the painting shown, never the reference photo');
    assert.equal(row.created_at, '2026-11-27T10:00:00.000Z');
    assert.equal(row.message, c.message?.trim() ?? '');
  }
  assert.equal(stored.approve.status, 'closed', 'an approval is not studio work');
  for (const decision of ['redraw', 'small-edit', 'text-issue']) assert.equal(stored[decision].status, 'open');
  assert.equal(stored['text-issue'].target, 'text');
  assert.equal(stored.redraw.target, 'generated');

  const response = await get('?daskam=1', env);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  const body = await response.json();
  assert.equal(body.revision, 'd001-rev-a');
  assert.deepEqual(body.decisions.map(d => [d.sloka, d.decision, d.reviewer, d.note, d.legacy]), [
    [1, 'approve', 'Fixture reviewer', '', false],
    [2, 'redraw', 'Fixture reviewer', 'Draw Krishna holding the flute.', false],
    [3, 'small-edit', 'Fixture reviewer', 'Soften the sky.', false],
    [4, 'text-issue', 'Fixture reviewer', 'The transliteration is missing a line.', false],
  ]);
  // Another dasakam's decisions are its own.
  assert.deepEqual((await (await get('?daskam=2', env)).json()).decisions, []);
});

test('the card shows the latest decision for the painting currently shown', async () => {
  const env = d1(await migratedDb());
  assert.equal((await post({ decision: 'redraw', message: 'Wrong colour.' }, env, { now: new Date('2026-11-27T10:00:00.000Z') })).status, 201);
  assert.equal((await post({ decision: 'approve' }, env, { now: new Date('2026-11-27T11:00:00.000Z') })).status, 201);
  assert.equal((await latest(env))[1].decision, 'approve');

  // After the studio republishes stanza 1 as v003, decisions on v002 stay stored but no longer apply.
  const republished = structuredClone(dataset);
  republished.chapters[0].revision = 'd001-rev-b';
  republished.chapters[0].rows[0].images[1] = painting(1, 'v003');
  assert.equal((await latest(env, republished))[1], undefined);
  assert.equal(count(env.db), 4);
  assert.equal((await post({ decision: 'small-edit', message: 'Nearly there.' }, env, { data: republished })).status, 409, 'the open v002 page must reload first');
  assert.equal((await post({ decision: 'small-edit', message: 'Nearly there.', revision: 'd001-rev-b' }, env, { data: republished })).status, 201);
  assert.equal((await latest(env, republished))[1].decision, 'small-edit');
  assert.equal((await latest(env))[1].decision, 'approve');
});

test('legacy feedback shows as a note on the painting it was about', async () => {
  const env = d1(await migratedDb());
  const before = await latest(env);
  assert.deepEqual({ ...before[1] }, { id: 'legacy-current', sloka: 1, decision: 'note', reviewer: '', note: 'Krishna needs a flute.', at: '2026-10-01T09:00:00.000Z', status: 'open', legacy: true });
  assert.equal(before[2], undefined, 'a legacy note on an older painting is not shown');
  assert.equal((await post({ decision: 'approve' }, env)).status, 201);
  assert.equal((await latest(env))[1].decision, 'approve');
});

test('invalid decisions are refused and nothing is stored', async () => {
  const env = d1(await migratedDb());
  const refusals = [
    [{ decision: undefined, message: 'Old page without decisions.' }, 409, 'This review page has changed. Reload it before submitting.'],
    [{ decision: 'approve', revision: 'd001-rev-old' }, 409, 'This review page has changed. Reload it before submitting.'],
    [{ decision: 'approve', revision: 'd002-rev-a' }, 409, 'This review page has changed. Reload it before submitting.'],
    [{ decision: 'approved' }, 400, 'Choose Approve, Redraw, Small edit or Text issue.'],
    [{ decision: 'note', message: 'Legacy type is not a choice.' }, 400, 'Choose Approve, Redraw, Small edit or Text issue.'],
    [{ decision: 'approve', reviewer: '' }, 400, 'Enter your name (up to 60 characters) before deciding.'],
    [{ decision: 'approve', reviewer: '   ' }, 400, 'Enter your name (up to 60 characters) before deciding.'],
    [{ decision: 'approve', reviewer: undefined }, 400, 'Enter your name (up to 60 characters) before deciding.'],
    [{ decision: 'approve', reviewer: 42 }, 400, 'Enter your name (up to 60 characters) before deciding.'],
    [{ decision: 'approve', reviewer: 'x'.repeat(61) }, 400, 'Enter your name (up to 60 characters) before deciding.'],
    [{ decision: 'approve', reviewer: 'Name\nInjected' }, 400, 'Enter your name (up to 60 characters) before deciding.'],
    [{ decision: 'approve', message: 'Looks good.' }, 400, 'Approve does not take a note.'],
    [{ decision: 'redraw' }, 400, 'Enter a note between 3 and 2,000 characters.'],
    [{ decision: 'redraw', message: '  ab  ' }, 400, 'Enter a note between 3 and 2,000 characters.'],
    [{ decision: 'small-edit', message: 'x'.repeat(2001) }, 400, 'Enter a note between 3 and 2,000 characters.'],
    [{ decision: 'text-issue', message: ['array'] }, 400, 'Enter a note between 3 and 2,000 characters.'],
    [{ decision: 'approve', website: 'spam' }, 400, 'Unable to accept this submission.'],
    [{ decision: 'approve', sloka: 5 }, 400, 'Unknown sloka.'],
    [{ decision: 'approve', daskam: 3 }, 400, 'Unknown sloka.'],
  ];
  for (const [body, status, error] of refusals) {
    const response = await post(body, env);
    assert.equal(response.status, status, JSON.stringify(body).slice(0, 80));
    assert.equal((await response.json()).error, error);
  }
  assert.equal((await post({ decision: 'approve' }, env, { origin: 'https://evil.example' })).status, 403);
  assert.equal((await post({}, env, { raw: JSON.stringify({ daskam: 1, sloka: 1, decision: 'redraw', reviewer: 'R', message: 'x'.repeat(9000) }) })).status, 413);
  assert.equal((await post({}, env, { raw: '{not json' })).status, 400);
  assert.equal((await post({ decision: 'approve' }, d1(env.db, { limited: true }))).status, 429);
  assert.equal(count(env.db), 2, 'only the two legacy rows remain');
  // The database refuses the same shapes even if a request bypassed the Worker.
  const insert = env.db.prepare("INSERT INTO feedback(id,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,decision) VALUES(?,1,1,'generated','other',?,?,'r','[]',?)");
  for (const [message, reviewer, decision] of [['Looks good.', 'R', 'approve'], ['', 'R', 'redraw'], ['ok', 'R', 'small-edit'], ['', '', 'approve'], ['Fine.', 'R', 'maybe'], ['', 'x'.repeat(61), 'approve']]) {
    assert.throws(() => insert.run(crypto.randomUUID(), message, reviewer, decision), /CHECK constraint failed/, `${decision}/${message}/${reviewer.length}`);
  }
  insert.run('db-approve', '', 'R', 'approve');
  insert.run('db-legacy-shape', 'A plain note.', '', 'note');
});

test('the decisions endpoint reads one bundled dasakam with GET only, from this site', async () => {
  const env = d1(await migratedDb());
  for (const query of ['', '?daskam=', '?daskam=9', '?daskam=1.0', '?daskam=01x', '?daskam=-1', '?daskam=1000']) {
    assert.equal((await get(query, env)).status, 404, query);
  }
  assert.equal((await get('?daskam=001', env)).status, 200);
  const head = await get('?daskam=1', env, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  for (const method of ['POST', 'PUT', 'DELETE']) assert.equal((await get('?daskam=1', env, { method })).status, 405);
  assert.equal((await get('?daskam=1', env, { headers: { 'sec-fetch-site': 'cross-site' } })).status, 403);
  assert.equal((await get('?daskam=1', env, { headers: { 'sec-fetch-site': 'same-origin' } })).status, 200);
  assert.equal(env.limits, 0, 'reading decisions does not use the submission rate limit');
});

const cardOf = (html, n) => html.slice(html.indexOf(`id="s00${n}"`), html.indexOf('</section>', html.indexOf(`id="s00${n}"`)));

test('each live stanza card has a status chip, four decision buttons and a hidden note box', () => {
  const html = renderChapter(chapter, undefined, '/narayaneeyam/', true, [chapter]);
  const card = cardOf(html, 2);
  assert.match(card, /<span class="chip" data-chip data-state="loading" title="Reviewer decision, not final approval">Checking…<\/span>/);
  const buttons = [...card.matchAll(/<button type="button" data-decision="([a-z-]+)"[^>]*>([^<]+)<\/button>/g)].map(m => [m[1], m[2]]);
  assert.deepEqual(buttons, [['approve', 'Approve'], ['redraw', 'Redraw'], ['small-edit', 'Small edit'], ['text-issue', 'Text issue']]);
  assert.match(card, /data-decision="approve" title="Reviewer decision, not final approval"/);
  assert.match(card, /<form data-feedback action="\/narayaneeyam\/api\/feedback" hidden>/);
  assert.match(card, /<textarea id="note-s002" name="message" required minlength="3" maxlength="2000"><\/textarea>/);
  // The chip and buttons sit after the stanza text and before Studio details.
  assert.ok(card.indexOf('Commentary 2') < card.indexOf('data-chip'));
  assert.ok(card.indexOf('data-decision="text-issue"') < card.indexOf('<summary>Studio details</summary>'));
  const studio = card.slice(card.indexOf('<details class="studio">'));
  assert.ok(studio.includes('Approve is a reviewer decision, not final approval.'));
});

test('the reviewer name box sits above the stanzas and no reviewer name is built into the page', () => {
  const html = renderChapter(chapter, undefined, '/narayaneeyam/', true, [chapter]);
  assert.match(html, /<section class="reviewer" data-reviewer data-decisions="\/narayaneeyam\/api\/decisions\?daskam=1" data-revision="d001-rev-a">/);
  assert.match(html, /<input id="reviewer-name" name="reviewer" maxlength="60" autocomplete="name" required>/);
  assert.ok(html.indexOf('data-reviewer') < html.indexOf('class="sloka"'));
  assert.ok(!/srividhya/i.test(html), 'the rendered page names a reviewer');
});

test('the deployed limits allow sixty decisions a minute per IP and keep ten unlock attempts', async () => {
  const config = JSON.parse(await fs.readFile(new URL('../review-site/wrangler.jsonc', import.meta.url), 'utf8'));
  const limits = Object.fromEntries(config.ratelimits.map(r => [r.name, r]));
  assert.deepEqual(limits.DECISION_LIMIT.simple, { limit: 60, period: 60 });
  assert.deepEqual(limits.FEEDBACK_LIMIT.simple, { limit: 10, period: 60 });
  assert.notEqual(limits.DECISION_LIMIT.namespace_id, limits.FEEDBACK_LIMIT.namespace_id);
});

test('the static preview has no decision controls', () => {
  const preview = renderChapter(chapter, undefined, './', false);
  const markup = preview.replace(/<script>[\s\S]*<\/script>/, '').replace(/<style>[\s\S]*<\/style>/, '');
  for (const live of ['data-decide', 'data-reviewer', 'data-decision', 'reviewer decision']) assert.ok(!markup.includes(live), live);
});
