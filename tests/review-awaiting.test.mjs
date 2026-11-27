import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { parse as parseYaml } from 'yaml';
import { renderChapter, renderIndex } from '../review-site/views.mjs';
import { awaitingIds, awaitingChapter, validateAwaiting, referenceLabel } from '../review-site/awaiting.mjs';
import { latestBatch, withSelection, withUploadStep } from '../review-site/scripts/add-dasakam.mjs';
import { selectionFiles } from '../review-site/selections.mjs';

// A dasakam with content but no selected batch shows as awaiting-painting cards: reference photos,
// Commentary and stanza text, a plain "Awaiting painting" slot, and only Text issue.
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const migration = name => fs.readFile(new URL(`../review-site/migrations/${name}`, import.meta.url), 'utf8');

// A painted chapter (D001) and one awaiting painting (D015), as the build writes them.
const painted = {
  id: 1, revision: 'd001-rev-a', title: 'Dasakam 1', description: 'Fixture', representative: 'media/d001-s001-matte.webp',
  rows: [1, 2].map(n => ({ n, commentary: `Commentary ${n}`, images: [{ role: 'reference', key: `media/d001-s00${n}-reference.webp`, version: 'source' }, { role: 'matte', key: `media/d001-s00${n}-matte.webp`, version: 'v002' }] })),
};
const waiting = {
  id: 15, title: 'Dasakam 15', description: 'Fixture', awaiting: true, revision: 'd015-rev-a',
  rows: [
    { n: 1, title: '', commentary: 'Vena is crowned.', commentarySource: 'intake/D015/photo-captions.txt#1', sanskrit: 'वेन', transliteration: 'vena', images: [{ role: 'reference', label: 'reference', displayLabel: 'Original reference', version: 'source', key: 'media/d015-s001-reference-0123456789abcdef.webp' }] },
    { n: 2, title: '', commentary: '', commentarySource: '', sanskrit: 'पृथु', transliteration: '', images: [] },
  ],
};
const dataset = { revision: 'whole', assets: {}, chapters: [painted], awaiting: [waiting] };

async function workerFor(data) {
  const source = (await fs.readFile(new URL('../review-site/worker.mjs', import.meta.url), 'utf8'))
    .replace("import data from '../artifacts/review-site/data.json';", `const data=${JSON.stringify(data)};`)
    .replace("from './views.mjs'", `from '${new URL('../review-site/views.mjs', import.meta.url).href}'`);
  return import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
}
const worker = await workerFor(dataset);
async function db() {
  const database = new DatabaseSync(':memory:');
  for (const name of ['0001_feedback.sql', '0002_feedback_all_dasakams.sql', '0003_feedback_decisions.sql', '0004_signoffs.sql']) database.exec(await migration(name));
  return database;
}
function env(database) {
  return {
    NARAYANEEYAM_PASSPHRASE: 'fixture passphrase',
    DECISION_LIMIT: { limit: async () => ({ success: true }) },
    DB: { prepare: sql => { const statement = database.prepare(sql); return { all: async () => ({ results: statement.all() }), bind: (...args) => ({ run: async () => statement.run(...args), all: async () => ({ results: statement.all(...args) }) }) }; } },
  };
}
const post = (route, body, e, data = dataset) => worker[route](new Request(`https://gehariharan.com/narayaneeyam/api/${route}`, {
  method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://gehariharan.com' }, body: JSON.stringify(body),
}), e, data, new Date('2026-11-27T10:00:00.000Z'));
const decide = (decision, e, { daskam = 15, sloka = 1, revision = 'd015-rev-a', data } = {}) =>
  post('feedback', { daskam, sloka, revision, decision, reviewer: 'Fixture reviewer', website: '', ...(decision === 'approve' ? {} : { message: 'The second line is missing a word.' }) }, e, data);
const cookie = async () => `narayaneeyam_unlock=${await worker.unlockToken('fixture passphrase', Math.floor(Date.now() / 1000) + 3600)}`;
// The page markup without its embedded client script (which names every state).
const markup = html => html.replace(/<script>[\s\S]*<\/script>/, '');
const tileOf = (html, id) => { const m = new RegExp(`<li><(a|div) class="tile" data-state="([a-z-]+)"[^>]*aria-label="([^"]*)"[^>]*><b>${id}</b><span>([^<]*)</span>`).exec(html); assert.ok(m, `missing tile ${id}`); return { tag: m[1], state: m[2], label: m[3], short: m[4] }; };

test('a dasakam with content and no selected batch is awaiting painting; selecting its batch switches it', () => {
  assert.deepEqual(awaitingIds([1, 15, 16, 50], [{ daskam_id: 1 }, { daskam_id: 16 }]), [15, 50]);
  assert.deepEqual(awaitingIds([1, 15, 16, 50], [{ daskam_id: 1 }, { daskam_id: 15 }, { daskam_id: 16 }]), [50]);
  // A selected batch without content is never "awaiting": it is a painted chapter (the build needs its content anyway).
  assert.deepEqual(awaitingIds([1], [{ daskam_id: 1 }, { daskam_id: 2 }]), []);
});

test('an awaiting card keeps the card order with an "Awaiting painting" slot and offers only Text issue', () => {
  const html = renderChapter(waiting, waiting.revision, '/narayaneeyam/', true, [painted, waiting]);
  assert.equal((html.match(/class="sloka"/g) || []).length, 2);
  assert.equal((html.match(/<div class="missing">Awaiting painting<\/div>/g) || []).length, 2);
  assert.ok(html.includes('<strong>Awaiting painting.</strong>'));
  // Card order: painting slot, reference photo, Commentary, stanza, then the decision.
  const card = html.slice(html.indexOf('id="s001"'), html.indexOf('id="s002"'));
  const at = text => { const i = card.indexOf(text); assert.ok(i >= 0, text); return i; };
  assert.ok(at('Awaiting painting</div>') < at('Reference photo</figcaption>'));
  assert.ok(at('Reference photo</figcaption>') < at('<span class="label">Commentary</span>'));
  assert.ok(at('<span class="label">Commentary</span>') < at('<span class="label">Stanza</span>'));
  assert.ok(at('<span class="label">Stanza</span>') < at('data-decide'));
  assert.ok(card.includes('src="/narayaneeyam/media/d015-s001-reference-0123456789abcdef.webp"'));
  // Desktop side-by-side: the placeholder holds the painting's place on the left; the reference
  // photo, text and decision are in the right-hand column.
  const left = card.slice(card.indexOf('<div class="card-art">'), card.indexOf('<div class="card-side">'));
  assert.ok(left.includes('Awaiting painting</div>') && !left.includes('Reference photo') && !left.includes('Commentary'));
  assert.ok(card.slice(card.indexOf('<div class="card-side">')).includes('Reference photo</figcaption>'));
  // Only Text issue; no painting decisions and no sign-off on a dasakam without paintings.
  assert.equal((html.match(/data-decision="text-issue"/g) || []).length, 2);
  for (const decision of ['approve', 'redraw', 'small-edit']) assert.ok(!html.includes(`data-decision="${decision}"`), decision);
  assert.ok(html.includes('Approve, Redraw and Small edit open once the painting is added.'));
  assert.equal((html.match(/data-decide data-awaiting/g) || []).length, 2);
  // A stanza with no commentary yet says so, and one with no mapped photo shows no reference.
  const second = html.slice(html.indexOf('id="s002"'));
  assert.ok(second.includes('<p class="text-missing">Commentary missing</p>'));
  assert.ok(!second.includes('Reference photo</figcaption>'));
  // The client shows "Awaiting painting" on the chip until a Text issue is saved.
  assert.ok(html.includes("s==='none'?(awaiting?'Awaiting painting':'Not reviewed')"));
  assert.ok(!markup(html).includes('data-signoff'));
  // Static preview: the same cards, without decisions.
  const preview = renderChapter(waiting, waiting.revision, './', false, [painted, waiting]);
  assert.equal((preview.match(/<div class="missing">Awaiting painting<\/div>/g) || []).length, 2);
  assert.ok(!preview.includes('data-decision="'));
});

test('the painted card is unchanged by the awaiting state', () => {
  const html = markup(renderChapter(painted, painted.revision, '/narayaneeyam/', true, [painted, waiting]));
  assert.ok(!html.includes('Awaiting painting') && !html.includes('data-awaiting'));
  for (const decision of ['approve', 'redraw', 'small-edit', 'text-issue']) assert.equal((html.match(new RegExp(`data-decision="${decision}"`, 'g')) || []).length, 2);
  assert.ok(html.includes('data-signoff'));
  // Its navigation links the awaiting dasakam too.
  assert.ok(html.includes('href="/narayaneeyam/d015"'));
});

test('progress tiles: awaiting painting is its own state, distinct from art not made yet', async () => {
  const live = await (await worker.default.fetch(new Request('https://gehariharan.com/narayaneeyam/', { headers: { cookie: await cookie() } }), env(await db()))).text();
  assert.deepEqual(tileOf(live, 15), { tag: 'a', state: 'awaiting', short: 'Awaiting', label: 'Dasakam 15: Awaiting painting' });
  assert.ok(live.includes('href="/narayaneeyam/d015"'));
  assert.deepEqual(tileOf(live, 1), { tag: 'a', state: 'ready', short: 'Ready', label: 'Dasakam 1: Ready for review' });
  assert.deepEqual(tileOf(live, 16), { tag: 'div', state: 'none', short: 'No art', label: 'Dasakam 16: Art not made yet' });
  assert.ok(live.includes('1 of 100 dasakams have paintings · 1 awaiting painting · 0 of 2 stanzas reviewed'));
  for (const legend of ['Art not made yet (98)', 'Awaiting painting (1)', 'Ready for review (1)']) assert.ok(live.includes(legend), legend);
  // Static preview and an unreadable database keep the awaiting state too.
  const preview = renderIndex(dataset, './', false);
  assert.deepEqual(tileOf(preview, 15), { tag: 'a', state: 'awaiting', short: 'Awaiting', label: 'Dasakam 15: Awaiting painting' });
  assert.ok(preview.includes('href="./d015.html"') && preview.includes('Awaiting painting (1)') && preview.includes('Painted (1)'));
  // A dataset from before this change (no awaiting list) still renders.
  assert.deepEqual(tileOf(renderIndex({ ...dataset, awaiting: undefined }, './', false), 15), { tag: 'div', state: 'none', short: 'No art', label: 'Dasakam 15: Art not made yet' });
});

test('the worker serves an awaiting page and accepts only Text issue on it', async () => {
  const database = await db(), e = env(database);
  const page = await worker.default.fetch(new Request('https://gehariharan.com/narayaneeyam/d015', { headers: { cookie: await cookie() } }), e);
  assert.equal(page.status, 200);
  assert.ok((await page.text()).includes('<strong>Awaiting painting.</strong>'));
  for (const decision of ['approve', 'redraw', 'small-edit']) {
    const response = await decide(decision, e);
    assert.equal(response.status, 400, decision);
    assert.match((await response.json()).error, /awaiting its painting/);
  }
  const saved = await decide('text-issue', e);
  assert.equal(saved.status, 201);
  const row = database.prepare('SELECT daskam,sloka,target,status,decision,image_versions,revision FROM feedback').get();
  assert.deepEqual({ ...row }, { daskam: 15, sloka: 1, target: 'text', status: 'open', decision: 'text-issue', image_versions: '[]', revision: 'd015-rev-a' });
  // A stale page is still refused, as on painted chapters.
  assert.equal((await decide('text-issue', e, { revision: 'old' })).status, 409);
  // The card reads its Text issue back; nothing can be signed off.
  const state = await (await worker.decisions(new Request('https://gehariharan.com/narayaneeyam/api/decisions?daskam=15'), e, dataset)).json();
  assert.deepEqual(state.decisions.map(d => [d.sloka, d.decision]), [[1, 'text-issue']]);
  assert.equal(state.allApproved, false);
  const signoff = await post('signoff', { daskam: 15, revision: 'd015-rev-a', reviewer: 'Fixture reviewer' }, e);
  assert.equal(signoff.status, 409);
  assert.match((await signoff.json()).error, /awaiting its paintings/);
});

test('once a batch is selected the same dasakam is a normal painted chapter', async () => {
  const switched = { revision: 'whole', assets: {}, awaiting: [], chapters: [painted, { ...structuredClone(painted), id: 15, title: 'Dasakam 15', revision: 'd015-rev-b' }] };
  const e = env(await db());
  assert.equal((await decide('approve', e, { revision: 'd015-rev-b', data: switched })).status, 201);
  const html = markup(renderChapter(switched.chapters[1], 'd015-rev-b', '/narayaneeyam/', true, switched.chapters));
  assert.ok(!html.includes('Awaiting painting') && html.includes('data-decision="approve"') && html.includes('data-signoff'));
  assert.deepEqual(tileOf(renderIndex(switched, './', false), 15), { tag: 'a', state: 'painted', short: 'Painted', label: 'Dasakam 15: Painted' });
  const progress = await (await workerFor(switched)).reviewProgress(e, switched);
  assert.equal(progress[15].state, 'in-review');
});

// A fixture repository: content and a reference map for D015 and D016, one intake photo for D015.
async function fixtureRoot() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'awaiting-'));
  const photo = Buffer.from('fixture reference photo bytes');
  await fs.mkdir(path.join(root, 'content/daskams'), { recursive: true });
  await fs.mkdir(path.join(root, 'content/sources/d015'), { recursive: true });
  await fs.mkdir(path.join(root, 'intake/D015'), { recursive: true });
  await fs.writeFile(path.join(root, 'intake/D015/001.jpg'), photo);
  const stanza = (n, extra = {}) => ({ n, sanskrit: `श्लोक ${n}`, stanza_roman: `śloka ${n}`, commentary_en: `Commentary ${n}`, commentary_source: `intake/D015/photo-captions.txt#${n}`, ...extra });
  await fs.writeFile(path.join(root, 'content/daskams/d015.json'), JSON.stringify({ id: 'd015', description: 'Fixture 15', stanzas: [stanza(1), stanza(2, { commentary_en: '', commentary_source: '' })] }));
  await fs.writeFile(path.join(root, 'content/daskams/d016.json'), JSON.stringify({ id: 'd016', stanzas: [{ ...stanza(1), commentary_source: 'intake/D016/photo-captions.txt#1' }] }));
  await fs.writeFile(path.join(root, 'content/sources/d015/reference-map.json'), JSON.stringify({ schema_version: 1, references: [{ stanza: 1, path: 'intake/D015/001.jpg', sha256: sha(photo) }, { stanza: null, path: 'intake/D015/099.jpg', sha256: sha(photo) }] }));
  return { root, photo };
}
// The build's review-derivative path in miniature: a derivative file, its asset entry and provenance.
function deriver(root, dir) {
  const assets = {}, provenance = [];
  const asset = async (source, label) => {
    const data = await fs.readFile(path.join(root, source));
    const bytes = Buffer.concat([Buffer.from('webp:'), data]);
    const key = `media/${label}-${sha(bytes).slice(0, 16)}.webp`;
    await fs.mkdir(path.join(dir, 'media'), { recursive: true });
    await fs.writeFile(path.join(dir, key), bytes);
    assets[key] = { type: 'image/webp', bytes: bytes.length, sha256: sha(bytes) };
    provenance.push({ source, sourceHash: sha(data), key });
    return key;
  };
  return { asset, assets, provenance };
}
async function bundle(root, chapters, awaiting, { assets, provenance }, dir) {
  await fs.writeFile(path.join(dir, 'data.json'), JSON.stringify({ revision: 'x', chapters, awaiting, assets }));
  await fs.writeFile(path.join(dir, 'asset-provenance.json'), JSON.stringify(provenance));
}

test('awaiting chapters are built from content with checked reference-photo derivatives', async () => {
  const { root } = await fixtureRoot();
  const dir = path.join(root, 'artifacts/review-site'), made = deriver(root, dir);
  const d15 = await awaitingChapter(root, 15, made);
  assert.equal(d15.awaiting, true);
  assert.match(d15.revision, /^[a-f0-9]{16}$/);
  assert.deepEqual(d15.rows.map(r => [r.n, r.commentary, r.sanskrit, r.transliteration, r.images.length]), [[1, 'Commentary 1', 'श्लोक 1', 'śloka 1', 1], [2, '', 'श्लोक 2', 'śloka 2', 0]]);
  assert.equal(d15.rows[0].images[0].role, 'reference');
  assert.ok(d15.rows[0].images[0].key.startsWith(`media/${referenceLabel(15, 1, 0, 1)}-`));
  // Only the mapped photo became a derivative; the unmapped extra and raw intake did not.
  assert.deepEqual(made.provenance.map(p => p.source), ['intake/D015/001.jpg']);
  const d16 = await awaitingChapter(root, 16, made);
  await bundle(root, [], [d15, d16], made, dir);
  assert.deepEqual(await validateAwaiting(root, dir, { batches: [] }), { chapters: 2, images: 1 });
  // Selecting D015's batch moves it out of the awaiting list: a bundle still showing it awaiting is stale.
  await assert.rejects(validateAwaiting(root, dir, { batches: [{ daskam_id: 15 }] }), /do not match the dasakams with content and no selected batch/);
  // A dasakam with content left out of the bundle is refused.
  await bundle(root, [], [d15], made, dir);
  await assert.rejects(validateAwaiting(root, dir, { batches: [] }), /do not match/);
});

test('awaiting validation refuses paintings, stale sources, stale derivatives and unvetted text', async () => {
  const { root } = await fixtureRoot();
  const dir = path.join(root, 'artifacts/review-site'), made = deriver(root, dir);
  const d15 = await awaitingChapter(root, 15, made), d16 = await awaitingChapter(root, 16, made);
  const check = async (mutate, pattern) => {
    const a = structuredClone(d15), m = structuredClone({ assets: made.assets, provenance: made.provenance });
    mutate(a, m);
    await bundle(root, [], [a, d16], m, dir);
    await assert.rejects(validateAwaiting(root, dir, { batches: [] }), pattern);
  };
  await check(a => { a.rows[0].images[0].role = 'matte'; }, /is a matte, not a reference photo/);
  await check((a, m) => { m.provenance[0].sourceHash = '0'.repeat(64); }, /Stale bundled source/);
  await check((a, m) => { m.assets[a.rows[0].images[0].key].sha256 = '0'.repeat(64); }, /Stale bundled derivative/);
  await check(a => { a.rows[0].images = []; }, /shows 0 reference photos; its map has 1/);
  await check(a => { a.rows.pop(); }, /does not show every stanza/);
  // The build refuses a changed intake photo and commentary from a source outside the allowlist.
  await fs.writeFile(path.join(root, 'intake/D015/001.jpg'), 'changed');
  await assert.rejects(awaitingChapter(root, 15, made), /Reference checksum mismatch/);
  await fs.writeFile(path.join(root, 'content/daskams/d016.json'), JSON.stringify({ stanzas: [{ n: 1, commentary_en: 'From somewhere else', commentary_source: 'https://example.com/post' }] }));
  await assert.rejects(awaitingChapter(root, 16, made), /Unvetted commentary source/);
  // A reference map may only point at the dasakam's own intake photos.
  await fs.writeFile(path.join(root, 'content/sources/d015/reference-map.json'), JSON.stringify({ references: [{ stanza: 1, path: 'artifacts/d015/master.png', sha256: '0'.repeat(64) }] }));
  await assert.rejects(awaitingChapter(root, 15, made), /needs an intake\/D015\/ path/);
});

test('review:add-dasakam selects the batch in dasakam order and adds its upload step once', () => {
  assert.equal(latestBatch(['d015-comparison-v001.json', 'd015-comparison-v012.json', 'd015-comparison-v002.json', 'd016-comparison-v099.json', 'd015-candidate-versions-v020.json'], 15), 'd015-comparison-v012.json');
  assert.equal(latestBatch(['d016-comparison-v001.json'], 15), null);
  const source = "import fs from 'node:fs/promises';\nexport const selectionFiles = [\n  'd001-comparison-v001.json', 'd014-comparison-v001.json', 'd027-comparison-v001.json', 'd100-comparison-v001.json'\n];\nexport async function loadSelections() {}\n";
  const list = text => /selectionFiles = \[([\s\S]*?)\];/.exec(text)[1].match(/'[^']+'/g).map(s => s.slice(1, -1));
  assert.deepEqual(list(withSelection(source, 'd015-comparison-v002.json')), ['d001-comparison-v001.json', 'd014-comparison-v001.json', 'd015-comparison-v002.json', 'd027-comparison-v001.json', 'd100-comparison-v001.json']);
  assert.deepEqual(list(withSelection(source, 'd014-comparison-v003.json')), ['d001-comparison-v001.json', 'd014-comparison-v003.json', 'd027-comparison-v001.json', 'd100-comparison-v001.json']);
  const appended = withSelection(source.replace(", 'd100-comparison-v001.json'", ''), 'd093-comparison-v001.json');
  assert.deepEqual(list(appended), ['d001-comparison-v001.json', 'd014-comparison-v001.json', 'd027-comparison-v001.json', 'd093-comparison-v001.json']);
  assert.ok(appended.endsWith("'d093-comparison-v001.json'\n];\nexport async function loadSelections() {}\n"));
  assert.equal(withSelection(source, 'd027-comparison-v001.json'), source);
  assert.throws(() => withSelection(source.replace("'d001-comparison-v001.json'", "`d001`"), 'd015-comparison-v001.json'), /something other than quoted file names/);
  assert.throws(() => withSelection(source, '../d015.json'), /Not a batch file name/);
  const workflow = "      - name: Upload D100 review candidates to R2\n        run: node review-site/scripts/upload.mjs --daskam=100\n\n      - name: Apply review D1 migrations\n        run: npx wrangler d1 migrations apply\n";
  const added = withUploadStep(workflow, 15);
  assert.ok(added.includes('      - name: Upload D015 review candidates to R2\n        run: node review-site/scripts/upload.mjs --daskam=15\n\n      - name: Apply review D1 migrations\n'));
  assert.equal(withUploadStep(added, 15), added);
  assert.equal(withUploadStep(workflow, 100), workflow);
  // --daskam=1 is not the --daskam=100 step.
  assert.ok(withUploadStep(workflow, 1).includes('upload.mjs --daskam=1\n'));
});

test('the real selections list, workflow and package script accept the add-dasakam edits', async () => {
  const selections = await fs.readFile(new URL('../review-site/selections.mjs', import.meta.url), 'utf8');
  const workflow = await fs.readFile(new URL('../.github/workflows/deploy-review.yml', import.meta.url), 'utf8');
  const deploySteps = text => Object.values(parseYaml(text).jobs).flatMap(job => job.steps ?? []);
  const runsBeforeMigrations = (text, run) => {
    const steps = deploySteps(text);
    const at = steps.findIndex(step => step.run === run);
    const migrations = steps.findIndex(step => step.name === 'Apply review D1 migrations');
    return at !== -1 && migrations !== -1 && at < migrations;
  };
  const upload = id => `node review-site/scripts/upload.mjs --daskam=${id}`;
  const runs = new Set(deploySteps(workflow).map(step => step.run));
  const id = Array.from({ length: 100 }, (_, i) => i + 1)
    .find(n => !runs.has(upload(n)) && !selectionFiles.some(name => name.startsWith(`d${String(n).padStart(3, '0')}-`)));
  assert.ok(runsBeforeMigrations(workflow, 'node review-site/scripts/upload.mjs --awaiting'));
  if (id !== undefined) {
    const batch = `d${String(id).padStart(3, '0')}-comparison-v001.json`;
    assert.notEqual(withSelection(selections, batch), selections);
    assert.ok(runsBeforeMigrations(withUploadStep(workflow, id), upload(id)));
  }
  const pkg = JSON.parse(await fs.readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(pkg.scripts['review:add-dasakam'], 'node review-site/scripts/add-dasakam.mjs');
});
