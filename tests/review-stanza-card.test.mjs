import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { renderChapter, isExcludedReference } from '../review-site/views.mjs';

// Two small chapters stand in for the ignored release bundle.
const image = (role, n, extra = {}) => ({ role, label: role, version: role === 'reference' ? 'source' : 'v002', key: `media/d001-s00${n}-${role}-${extra.tag || 'a'}.webp`, ...extra });
const d1 = {
  id: 1, revision: 'd001-rev-a', title: 'Dasakam 1', description: 'Fixture one', representative: 'media/d001-s001-matte-a.webp',
  reviewNotice: 'Unapproved candidates. Checksum 0123abcd in art/reviews/d001-review-v002.md.',
  rows: [
    {
      n: 1, title: 'Bhagavan in Vaikuntha', commentary: 'Fixture commentary one', commentarySource: 'intake/D001/photo-captions.txt#1',
      translation: '', sanskrit: 'सान्द्रानन्दावबोधात्मकम्', transliteration: 'sāndrānandāvabōdhātmakam',
      images: [
        image('reference', 1, { displayLabel: 'Original reference' }),
        image('matte', 1, { displayLabel: 'Landscape candidate v002', inspectionStatus: 'inspected', inspectionLabel: 'Visually inspected candidate — not art approval.' }),
        image('alternate', 1, { tag: 'b', displayLabel: 'Landscape candidate v001', inspectionStatus: 'inspected', inspectionLabel: 'Visually inspected candidate — not art approval.' }),
      ],
    },
    {
      n: 2, title: 'Wrong-scene photo', commentary: 'Fixture commentary two', commentarySource: 'intake/D001/photo-captions.txt#2',
      translation: 'Fixture translation two', sanskrit: '', transliteration: '  ',
      images: [
        image('reference', 2, { displayLabel: 'Mismatched context photo (excluded from scene derivation)', excluded: true }),
        image('matte', 2, { displayLabel: 'Landscape candidate v002', inspectionStatus: 'inspected', inspectionLabel: 'Visually inspected candidate — not art approval.' }),
      ],
    },
  ],
};
const d2 = structuredClone(d1);
Object.assign(d2, { id: 2, revision: 'd002-rev-a', title: 'Dasakam 2', reviewNotice: '' });

const sectionOf = (html, n) => html.slice(html.indexOf(`id="s00${n}"`), html.indexOf('</section>', html.indexOf(`id="s00${n}"`)));
const at = (html, needle) => { const i = html.indexOf(needle); assert.ok(i >= 0, `missing ${needle}`); return i; };

test('each stanza card runs painting, alternates, reference, commentary, then the stanza', () => {
  const card = sectionOf(renderChapter(d1), 1);
  const order = [
    'src="/narayaneeyam/media/d001-s001-matte-a.webp"',
    'src="/narayaneeyam/media/d001-s001-alternate-b.webp"',
    'src="/narayaneeyam/media/d001-s001-reference-a.webp"',
    '<span class="label">Commentary</span>',
    'Fixture commentary one',
    '<span class="label">Stanza</span>',
    'सान्द्रानन्दावबोधात्मकम्',
    'sāndrānandāvabōdhātmakam',
    'data-decision="approve"',
    '<summary>Studio details</summary>',
  ].map(needle => at(card, needle));
  assert.deepEqual(order, [...order].sort((a, b) => a - b));
  assert.ok(card.includes('<figcaption>Painting</figcaption>'));
  assert.ok(card.includes('<figcaption>Alternate painting</figcaption>'));
  assert.ok(card.includes('<figcaption>Reference photo</figcaption>'));
  // The painting opens full size; there is no "Meaning" label and no translation line.
  assert.ok(card.includes('<a data-zoom href="/narayaneeyam/media/d001-s001-matte-a.webp">'));
  assert.ok(!/meaning<\/span>|>Meaning</i.test(card));
  assert.ok(!card.includes('>Translation<'));
  assert.ok(!card.includes('text-missing'));
});

test('a translation is never shown on the card, even when one exists', () => {
  const card = sectionOf(renderChapter(d1), 2);
  assert.ok(at(card, '<span class="label">Commentary</span>') < at(card, '<span class="label">Stanza</span>'));
  assert.ok(!card.includes('Fixture translation two'));
  assert.ok(!/>Translation</i.test(card));
});

test('missing Sanskrit or transliteration shows a small text-missing note', () => {
  const card = sectionOf(renderChapter(d1), 2);
  assert.ok(card.includes('<p class="text-missing">Sanskrit text missing</p>'));
  assert.ok(card.includes('<p class="text-missing">Transliteration missing</p>'));
  assert.ok(!card.includes('class="sanskrit"'));
  assert.ok(!sectionOf(renderChapter(d1), 1).includes('text-missing'));
});

test('a reference the batch excluded as the wrong scene is not shown to the reviewer', () => {
  const html = renderChapter(d1);
  const card = sectionOf(html, 2);
  assert.ok(!card.includes('src="/narayaneeyam/media/d001-s002-reference-a.webp"'));
  assert.ok(!card.includes('<figure class="reference">'));
  assert.ok(card.includes('src="/narayaneeyam/media/d001-s002-matte-a.webp"'));
  assert.ok(isExcludedReference({ displayLabel: 'Mismatched context photo (excluded from scene derivation)' }));
  assert.ok(isExcludedReference({ label: 'Mismatched context photo (excluded from scene derivation; canonical scene controls)' }));
  assert.ok(!isExcludedReference({ displayLabel: 'Original reference', label: 'Original reference (caption/photo mismatch; canonical scene controls)' }));
  assert.ok(!isExcludedReference({ displayLabel: 'Broad context reference (environment only)' }));
});

test('studio jargon is folded into collapsed Studio details', () => {
  const html = renderChapter(d1);
  const visible = html.replace(/<details class="studio[^"]*">[\s\S]*?<\/details>/g, '');
  for (const jargon of ['Landscape candidate', 'not art approval', 'Checksum 0123abcd', 'art/reviews/', 'photo-captions.txt', 'media/d001-s001-matte-a.webp</code>']) {
    assert.ok(html.includes(jargon), `studio details keep ${jargon}`);
    assert.ok(!visible.includes(jargon), `${jargon} is visible outside Studio details`);
  }
  assert.ok(!/<details class="studio[^"]*" open/.test(html));
  assert.ok(!html.includes('class="review-notice"') || html.indexOf('class="review-notice"') > html.indexOf('<summary>Studio details</summary>'));
  assert.ok(!renderChapter(d2).includes('class="studio chapter-studio"'));
});

test('the decision note form carries the dasakam revision', () => {
  const card = sectionOf(renderChapter(d1, undefined, '/narayaneeyam/', true, [d1, d2]), 1);
  assert.ok(card.includes('<form data-feedback action="/narayaneeyam/api/feedback" hidden><input type="hidden" name="daskam" value="1"><input type="hidden" name="sloka" value="1"><input type="hidden" name="revision" value="d001-rev-a"><input type="hidden" name="decision" value="">'));
  assert.ok(!card.includes('name="name"'));
  assert.ok(!sectionOf(renderChapter(d1, undefined, './', false), 1).includes('data-feedback'));
});

test('the page keeps a phone-width layout', () => {
  const html = renderChapter(d1);
  assert.ok(html.includes('<meta name="viewport" content="width=device-width,initial-scale=1">'));
  assert.match(html, /@media\(max-width:650px\)\{[^}]*\}[^@]*\.references figure\{width:100%\}/);
});

// Load the review Worker with these chapters in place of the ignored release bundle.
const dataset = { revision: 'whole-dataset', assets: {}, chapters: [d1, d2] };
const source = (await fs.readFile(new URL('../review-site/worker.mjs', import.meta.url), 'utf8'))
  .replace("import data from '../artifacts/review-site/data.json';", `const data=${JSON.stringify(dataset)};`)
  .replace("from './views.mjs'", `from '${new URL('../review-site/views.mjs', import.meta.url).href}'`);
const { feedback } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
function makeEnv() {
  const writes = [];
  return { writes, FEEDBACK_LIMIT: { limit: async () => ({ success: true }) }, DB: { prepare: sql => ({ bind: (...args) => ({ run: async () => { writes.push({ sql, args }); } }) }) } };
}
const submit = (body, env, data = dataset) => feedback(new Request('https://gehariharan.com/narayaneeyam/api/feedback', {
  method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://gehariharan.com' },
  body: JSON.stringify({ sloka: 1, decision: 'redraw', reviewer: 'Fixture reviewer', message: 'Check the hand.', website: '', ...body }),
}), env, data);

test('feedback is accepted against its own dasakam revision and stores it', async () => {
  const env = makeEnv();
  assert.equal((await submit({ daskam: 1, revision: 'd001-rev-a' }, env)).status, 201);
  assert.equal((await submit({ daskam: 2, revision: 'd002-rev-a' }, env)).status, 201);
  assert.deepEqual(env.writes.map(w => w.args[7]), ['d001-rev-a', 'd002-rev-a']);
});

test('feedback with another dasakam revision, the dataset revision or a stale one is rejected', async () => {
  const env = makeEnv();
  for (const revision of ['d002-rev-a', 'whole-dataset', 'd001-rev-old', undefined]) {
    const response = await submit({ daskam: 1, revision }, env);
    assert.equal(response.status, 409);
    assert.equal((await response.json()).error, 'This review page has changed. Reload it before submitting.');
  }
  assert.equal(env.writes.length, 0);
});

test('republishing one dasakam leaves open forms on the others valid', async () => {
  const republished = structuredClone(dataset);
  republished.revision = 'whole-dataset-2';
  republished.chapters[1].revision = 'd002-rev-b';
  const env = makeEnv();
  assert.equal((await submit({ daskam: 1, revision: 'd001-rev-a' }, env, republished)).status, 201);
  assert.equal((await submit({ daskam: 2, revision: 'd002-rev-a' }, env, republished)).status, 409);
  assert.equal((await submit({ daskam: 2, revision: 'd002-rev-b' }, env, republished)).status, 201);
});

test('a chapter without its own revision accepts no feedback', async () => {
  const legacy = structuredClone(dataset);
  delete legacy.chapters[0].revision;
  const env = makeEnv();
  assert.equal((await submit({ daskam: 1 }, env, legacy)).status, 409);
  assert.equal((await submit({ daskam: 1, revision: 'whole-dataset' }, env, legacy)).status, 409);
  assert.equal(env.writes.length, 0);
});
