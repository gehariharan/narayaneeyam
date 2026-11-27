import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { renderIndex } from '../review-site/views.mjs';

// The 100-tile index reads progress from the real D1 migrations in an in-memory SQLite database.
const migration = name => fs.readFile(new URL(`../review-site/migrations/${name}`, import.meta.url), 'utf8');
const key = (id, n, version) => `media/d00${id}/s00${n}-${version}.webp`;
const shownAs = (id, n, version = 'v002') => JSON.stringify([{ role: 'matte', key: key(id, n, version), version }]);
const chapter = (id, stanzas = 4) => ({
  id, revision: `d00${id}-rev`, title: `Dasakam ${id}`, description: 'Fixture', representative: key(id, 1, 'v002'),
  rows: Array.from({ length: stanzas }, (_, i) => ({ n: i + 1, commentary: `Commentary ${i + 1}`, images: [{ role: 'reference', key: key(id, i + 1, 'ref'), version: 'source' }, { role: 'matte', key: key(id, i + 1, 'v002'), version: 'v002' }] })),
});
// Dasakam 7 has no chapter: its art is not made yet.
const dataset = { revision: 'whole', assets: {}, chapters: [1, 2, 3, 4, 5, 6, 8].map(id => chapter(id)) };

const source = (await fs.readFile(new URL('../review-site/worker.mjs', import.meta.url), 'utf8'))
  .replace("import data from '../artifacts/review-site/data.json';", `const data=${JSON.stringify(dataset)};`)
  .replace("from './views.mjs'", `from '${new URL('../review-site/views.mjs', import.meta.url).href}'`);
const worker = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const { reviewProgress, unlockToken } = worker;

let seq = 0;
function record(db, id, n, decision, { at, version = 'v002', status } = {}) {
  seq++;
  const message = decision === 'approve' ? '' : 'Fixture note.';
  db.prepare("INSERT INTO feedback(id,created_at,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status,decision) VALUES(?,?,?,?,'generated','other',?,?,'rev',?,?,?)")
    .run(`r${seq}`, at || `2026-11-27T10:00:${String(seq).padStart(2, '0')}.000Z`, id, n, message, decision === 'note' ? '' : 'Srividhya', shownAs(id, n, version), status || (decision === 'approve' ? 'closed' : 'open'), decision);
}
async function fixtureDb() {
  const db = new DatabaseSync(':memory:');
  for (const name of ['0001_feedback.sql', '0002_feedback_all_dasakams.sql', '0003_feedback_decisions.sql']) db.exec(await migration(name));
  // D001: nothing decided. A legacy note on the current painting is not a decision.
  record(db, 1, 1, 'note');
  // D002: two of four stanzas approved.
  record(db, 2, 1, 'approve'); record(db, 2, 2, 'approve');
  // D003: three approved and one redraw still open.
  for (const n of [1, 2, 3]) record(db, 3, n, 'approve');
  record(db, 3, 4, 'redraw');
  // D004: every stanza approved; an earlier redraw on stanza 1 was superseded by the approval.
  record(db, 4, 1, 'redraw', { at: '2026-11-20T10:00:00.000Z' });
  for (const n of [1, 2, 3, 4]) record(db, 4, n, 'approve');
  // D005: every stanza approved, but on an earlier painting version; the version shown now is undecided.
  for (const n of [1, 2, 3, 4]) record(db, 5, n, 'approve', { version: 'v001' });
  // D006: a redraw on the old version does not hold the new painting back; one approval on the new one.
  record(db, 6, 1, 'redraw', { version: 'v001' }); record(db, 6, 1, 'approve');
  // D008: a small edit and a text issue open, plus a closed request on the same painting (undecided until the reviewer looks again).
  record(db, 8, 1, 'small-edit'); record(db, 8, 2, 'text-issue'); record(db, 8, 3, 'redraw', { status: 'closed' }); record(db, 8, 4, 'approve');
  return db;
}
function d1(db, { fail = false } = {}) {
  const env = {
    queries: [],
    NARAYANEEYAM_PASSPHRASE: 'fixture passphrase',
    DB: { prepare: sql => { env.queries.push(sql); if (fail) throw new Error('D1 down'); const statement = db.prepare(sql); return { all: async () => ({ results: statement.all() }), bind: (...args) => ({ all: async () => ({ results: statement.all(...args) }) }) }; } },
  };
  return env;
}
const cookie = async () => `narayaneeyam_unlock=${await unlockToken('fixture passphrase', Math.floor(Date.now() / 1000) + 3600)}`;
const index = async (env, headers = {}) => worker.default.fetch(new Request('https://gehariharan.com/narayaneeyam/', { headers }), env);
const tileOf = (html, id) => { const m = new RegExp(`<li><(a|div) class="tile" data-state="([a-z-]+)"[^>]*aria-label="([^"]*)"[^>]*><b>${id}</b><span>([^<]*)</span>`).exec(html); assert.ok(m, `missing tile ${id}`); return { tag: m[1], state: m[2], label: m[3], short: m[4] }; };

test('progress counts only the latest decision on the painting shown now', async () => {
  const progress = await reviewProgress(d1(await fixtureDb()), dataset);
  assert.deepEqual(progress, {
    1: { total: 4, decided: 0, approved: 0, waiting: 0, state: 'ready' },
    2: { total: 4, decided: 2, approved: 2, waiting: 0, state: 'in-review' },
    3: { total: 4, decided: 4, approved: 3, waiting: 1, state: 'waiting' },
    4: { total: 4, decided: 4, approved: 4, waiting: 0, state: 'reviewed' },
    5: { total: 4, decided: 0, approved: 0, waiting: 0, state: 'ready' },
    6: { total: 4, decided: 1, approved: 1, waiting: 0, state: 'in-review' },
    8: { total: 4, decided: 3, approved: 1, waiting: 2, state: 'waiting' },
  });
});

test('a later decision on the current painting replaces the earlier one', async () => {
  const db = await fixtureDb();
  record(db, 3, 4, 'approve');
  const progress = await reviewProgress(d1(db), dataset);
  assert.equal(progress[3].state, 'reviewed');
  record(db, 4, 2, 'small-edit');
  assert.equal((await reviewProgress(d1(db), dataset))[4].state, 'waiting');
});

test('a request closed on the same painting leaves its stanza undecided, not reviewed', async () => {
  const db = await fixtureDb();
  record(db, 2, 3, 'approve'); record(db, 2, 4, 'text-issue', { status: 'closed' });
  assert.deepEqual((await reviewProgress(d1(db), dataset))[2], { total: 4, decided: 3, approved: 3, waiting: 0, state: 'in-review' });
  const html = await (await index(d1(db), { cookie: await cookie() })).text();
  assert.deepEqual(tileOf(html, 2), { tag: 'a', state: 'in-review', short: '3/4', label: 'Dasakam 2: In review, 3 of 4 stanzas decided' });
});

test('the unlocked index shows 100 numbered tiles with state, counts and a legend, from one query', async () => {
  const env = d1(await fixtureDb());
  const response = await index(env, { cookie: await cookie() });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'private, no-cache');
  assert.equal(env.queries.length, 1, 'one database query for the whole page');
  const html = await response.text();
  assert.equal((html.match(/class="tile"/g) || []).length, 100);
  const expected = {
    1: ['ready', 'Ready', 'Dasakam 1: Ready for review'],
    2: ['in-review', '2/4', 'Dasakam 2: In review, 2 of 4 stanzas decided'],
    3: ['waiting', 'Fixes', 'Dasakam 3: Waiting for fixes, 1 of 4 stanzas waiting'],
    4: ['reviewed', 'Reviewed', 'Dasakam 4: Reviewed - awaiting captain confirmation'],
    5: ['ready', 'Ready', 'Dasakam 5: Ready for review'],
    6: ['in-review', '1/4', 'Dasakam 6: In review, 1 of 4 stanzas decided'],
    8: ['waiting', 'Fixes', 'Dasakam 8: Waiting for fixes, 2 of 4 stanzas waiting'],
  };
  for (const [id, [state, short, label]] of Object.entries(expected)) {
    assert.deepEqual(tileOf(html, id), { tag: 'a', state, short, label }, `D00${id}`);
    assert.ok(html.includes(`href="/narayaneeyam/d00${id}"`));
  }
  for (const id of [7, 9, 50, 100]) assert.deepEqual(tileOf(html, id), { tag: 'div', state: 'none', short: 'No art', label: `Dasakam ${id}: Art not made yet` });
  assert.ok(!html.includes('href="/narayaneeyam/d007"'));
  // 0+2+4+4+0+1+3 stanzas decided on the paintings shown now.
  assert.ok(html.includes('7 of 100 dasakams have paintings · 14 of 28 stanzas reviewed'));
  for (const legend of ['Art not made yet (93)', 'Ready for review (2)', 'In review (2)', 'Waiting for fixes (2)', 'Reviewed - awaiting captain confirmation (1)']) assert.ok(html.includes(legend), legend);
  // The old picture cards and the header's chapter list are gone: each painted chapter is one tile link.
  assert.ok(!html.includes('class="card"') && !html.includes('<nav>'));
  for (const id of [1, 2, 3, 4, 5, 6, 8]) assert.equal(html.split(`href="/narayaneeyam/d00${id}"`).length - 1, 1);
});

test('the index is locked: no tiles, no progress and no database query without the passphrase', async () => {
  const env = d1(await fixtureDb());
  for (const headers of [{}, { cookie: 'narayaneeyam_unlock=forged' }]) {
    const response = await index(env, headers);
    assert.equal(response.status, 401);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    const html = await response.text();
    assert.ok(html.includes('This site is locked.'));
    assert.ok(!html.includes('class="tile"') && !html.includes('stanzas reviewed'));
  }
  assert.equal(env.queries.length, 0);
});

test('the index still links every chapter when progress cannot be read', async () => {
  const response = await index(d1(new DatabaseSync(':memory:'), { fail: true }), { cookie: await cookie() });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.deepEqual(tileOf(html, 2), { tag: 'a', state: 'painted', short: 'Painted', label: 'Dasakam 2: Painted' });
  assert.deepEqual(tileOf(html, 7), { tag: 'div', state: 'none', short: 'No art', label: 'Dasakam 7: Art not made yet' });
  assert.ok(html.includes('7 of 100 dasakams have paintings · 28 stanzas'));
  assert.ok(html.includes('Review progress is unavailable right now.'));
});

test('the static preview index links local chapter files and makes no progress claim', () => {
  const html = renderIndex(dataset, './', false);
  assert.equal((html.match(/class="tile"/g) || []).length, 100);
  assert.deepEqual(tileOf(html, 4), { tag: 'a', state: 'painted', short: 'Painted', label: 'Dasakam 4: Painted' });
  assert.ok(html.includes('href="./d004.html"'));
  assert.ok(html.includes('Review progress shows on the live review site.'));
  assert.ok(!html.includes('stanzas reviewed'));
});
