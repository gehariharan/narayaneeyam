import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { validateSelections, validateBundle, reviewFor, reviewChecks, sha256 } from '../review-site/image-review.mjs';
import { loadSelections, selectedImages, selectionFiles } from '../review-site/selections.mjs';
import { renderChapter } from '../review-site/views.mjs';

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'narayaneeyam-image-review-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const write = async (file, data) => {
    await fs.mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await fs.writeFile(path.join(root, file), typeof data === 'string' ? data : JSON.stringify(data));
  };
  const bytes = Buffer.from('fixture raster bytes');
  const image = { chapter: 1, sloka: 1, role: 'matte', version: 'v002', file: 'artifacts/d001/s001/landscape/candidate-v002.png', sha256: sha256(bytes) };
  await fs.mkdir(path.dirname(path.join(root, image.file)), { recursive: true });
  await fs.writeFile(path.join(root, image.file), bytes);
  const row = { n: 1, matte: image, alternates: [] };
  const batch = { daskam_id: 1, rows: [row] };
  await write('art/reviews/historical-selection.json', { schema_version: 1, images: [] });
  await write('art/reviews/audit-index.json', { schema_version: 1, images: [], findings: [] });
  const contracts = [];
  for (const [file, data] of [
    ['art/plans/d001.json', { stanzas: [{ n: 1, characters: ['brahma'], scene_brief: 'Brahma with exactly four attached arms and three visible faces.' }] }],
    ['art/bible/series.json', { style: 'matte' }],
    ['art/bible/characters/brahma/character.json', { arms: 4, heads: 4, visible_faces: 3 }]
  ]) {
    await write(file, data);
    contracts.push({ path: file, sha256: sha256(await fs.readFile(path.join(root, file))) });
  }
  await write('art/reviews/fixture-report.md', 'Synthetic inspection evidence for validator tests only. No actual visual pass is claimed.');
  const review = { ...image, reviewer: 'fixture-reviewer', inspected_at: '2026-01-01T00:00:00Z', method: 'individual-native-resolution', outcome: 'pass', findings: [], anatomy_basis: 'Brahma has four distinct attached arms under the scene and character contract; this intentional deity form is not an ordinary human extra-limb defect.', contracts, evidence: [{ path: 'art/reviews/fixture-report.md', sha256: sha256(await fs.readFile(path.join(root, 'art/reviews/fixture-report.md'))) }], checks: Object.fromEntries(reviewChecks.map(check => [check, { status: 'pass', observations: `Synthetic ${check} observation; validator does not inspect pixels.` }])) };
  const save = reviews => write('art/reviews/visual-reviews.json', { schema_version: 1, reviews });
  await save([review]);
  // Populate the same batch files the actual publication consumer loads.
  for (const [i, file] of selectionFiles.entries()) await write(`art/batches/${file}`, i === 0 ? batch : { daskam_id: i + 2, rows: [] });
  const directory = path.join(root, 'bundle');
  const key = 'media/d001-s001-matte-test.webp';
  const derivative = 'synthetic WebP bytes';
  const validation = await validateSelections(root, [batch]);
  const state = reviewFor(validation, image);
  const data = { chapters: [{ id: 1, title: 'Dasakam 1', rows: [{ n: 1, images: [{ role: 'matte', version: image.version, key, inspectionStatus: state.status, inspectionLabel: state.label }] }] }], assets: { [key]: { sha256: sha256(derivative) } } };
  const provenance = [{ source: image.file, sourceHash: image.sha256, key }];
  const bundle = async () => {
    await write('bundle/data.json', data);
    await write('bundle/asset-provenance.json', provenance);
    await write(`bundle/${key}`, derivative);
  };
  await bundle();
  return { root, directory, write, image, row, batch, review, save, data, provenance, bundle, key };
}

test('valid evidence permits the selected version with documented deity anatomy', async t => {
  const f = await fixture(t);
  assert.equal((await validateBundle(f.root, f.directory)).images.length, 1);
  const html = renderChapter(f.data.chapters[0], 'fixture');
  assert.ok(html.includes('Visually inspected candidate'));
  assert.ok(html.includes('not art approval'));
});
test('missing review, reviewer, report, or rubric observation blocks publication', async t => {
  for (const mutate of [r => [], r => [{ ...r, reviewer: '' }], r => [{ ...r, evidence: [] }], r => [{ ...r, checks: { ...r.checks, faces: { status: 'pass', observations: '' } } }]]) {
    const f = await fixture(t);
    await f.save(mutate(f.review));
    await assert.rejects(validateBundle(f.root, f.directory), /Missing|Incomplete/);
  }
});
test('every selected alternate needs independent evidence, and cannot vanish from the bundle', async t => {
  const f = await fixture(t);
  const alternate = { ...f.image, role: 'alternate', version: 'v001', sha256: sha256('earlier bytes') };
  f.row.alternates.push(alternate);
  await f.write(`art/batches/${selectionFiles[0]}`, f.batch);
  await assert.rejects(validateBundle(f.root, f.directory), /Missing or stale visual inspection/);
  await f.save([f.review, { ...f.review, ...alternate }]);
  await assert.rejects(validateBundle(f.root, f.directory), /omits selected images or visible alternates/);
});
test('changing selected bytes or version invalidates prior review; stale bundle hashes fail', async t => {
  const f = await fixture(t);
  f.image.sha256 = sha256('revised bytes');
  await f.write(`art/batches/${selectionFiles[0]}`, f.batch);
  await assert.rejects(validateBundle(f.root, f.directory), /Missing or stale visual inspection/);
  f.image.sha256 = f.review.sha256;
  f.image.version = 'v003';
  await f.write(`art/batches/${selectionFiles[0]}`, f.batch);
  await assert.rejects(validateBundle(f.root, f.directory), /Missing or stale visual inspection/);
  f.image.version = f.review.version;
  await f.write(`art/batches/${selectionFiles[0]}`, f.batch);
  f.provenance[0].sourceHash = sha256('wrong source');
  await f.bundle();
  await assert.rejects(validateBundle(f.root, f.directory), /Stale bundled source/);
  f.provenance[0].sourceHash = f.image.sha256;
  await f.bundle();
  await f.write(`bundle/${f.key}`, 'changed derivative');
  await assert.rejects(validateBundle(f.root, f.directory), /Stale bundled derivative/);
});
test('defects and uncertainty block even a contradictory claimed pass', async t => {
  for (const outcome of ['needs-fix', 'uncertain', 'needs-human-review', 'pass']) {
    const f = await fixture(t);
    await f.save([{ ...f.review, outcome, findings: [{ id: 'F1', severity: 'low', status: 'uncertain', observed: 'Hand occluded; cannot verify attachment.' }] }]);
    await assert.rejects(validateBundle(f.root, f.directory), /Unresolved defects or uncertainty/);
  }
});
test('contract and report edits make evidence stale', async t => {
  const f = await fixture(t);
  await f.write('art/bible/characters/brahma/character.json', { arms: 4, clarification: 'changed contract' });
  await assert.rejects(validateBundle(f.root, f.directory), /stale contract/);
  const g = await fixture(t);
  await g.write('art/reviews/fixture-report.md', 'Changed inspection record');
  await assert.rejects(validateBundle(g.root, g.directory), /Stale inspection report/);
});
test('unchanged historical selections remain review material; revised hashes and new roles cannot inherit exemption', async t => {
  const f = await fixture(t);
  await f.write('art/reviews/historical-selection.json', { schema_version: 1, images: [f.image] });
  await f.save([]);
  const validation = await validateSelections(f.root, [f.batch]);
  const state = reviewFor(validation, f.image);
  assert.equal(state.status, 'historical');
  f.data.chapters[0].rows[0].images[0].inspectionStatus = state.status;
  f.data.chapters[0].rows[0].images[0].inspectionLabel = state.label;
  await f.bundle();
  await validateBundle(f.root, f.directory);
  assert.ok(renderChapter(f.data.chapters[0], 'fixture').includes('Historical review material'));
  f.image.sha256 = sha256('revised historical image');
  await assert.rejects(validateSelections(f.root, [f.batch]), /Missing or stale/);
  f.image.sha256 = f.review.sha256;
  f.row.alternates.push({ ...f.image, role: 'alternate' });
  await assert.rejects(validateSelections(f.root, [f.batch]), /Missing or stale/);
});
test('extra bundled selections and false clearance labels cannot pass the consumer', async t => {
  const f = await fixture(t);
  const image = f.data.chapters[0].rows[0].images[0];
  image.inspectionLabel = 'Approved';
  await f.bundle();
  await assert.rejects(validateBundle(f.root, f.directory), /bundled review label/);
  const g = await fixture(t);
  g.data.chapters[0].rows[0].images.push({ ...g.data.chapters[0].rows[0].images[0], version: 'unreviewed' });
  await g.bundle();
  await assert.rejects(validateBundle(g.root, g.directory), /Unexpected\/duplicate/);
});

test('strict final clearance never exempts historical images', async t => {
  const f = await fixture(t);
  await f.write('art/reviews/historical-selection.json', { schema_version: 1, images: [f.image] });
  await f.save([]);
  await validateSelections(f.root, [f.batch]);
  await assert.rejects(validateSelections(f.root, [f.batch], { final: true }), /Missing or stale/);
  for (const outcome of ['needs-fix', 'uncertain', 'needs-human-review']) {
    await f.save([{ ...f.review, outcome }]);
    await assert.rejects(validateSelections(f.root, [f.batch], { final: true }), /Unresolved/);
  }
  await f.save([f.review]);
  assert.equal(reviewFor(await validateSelections(f.root, [f.batch], { final: true }), f.image).status, 'inspected');
  await fs.writeFile(path.join(f.root, f.image.file), 'revised historical bytes');
  await assert.rejects(validateSelections(f.root, [f.batch], { final: true }), /Selection checksum mismatch/);
  f.image.sha256 = sha256('revised historical bytes');
  await assert.rejects(validateSelections(f.root, [f.batch], { final: true }), /Missing or stale/);
});

test('art approval consumes strict clearance before writing a master or changing approval', async t => {
  const f = await fixture(t);
  const bytes = await sharp({ create: { width: 64, height: 36, channels: 3, background: '#b46c0c' } }).png().toBuffer();
  await fs.mkdir(path.dirname(path.join(f.root, f.image.file)), { recursive: true });
  await fs.writeFile(path.join(f.root, f.image.file), bytes);
  f.image.sha256 = f.review.sha256 = sha256(bytes);
  await f.write('art/reviews/historical-selection.json', { schema_version: 1, images: [f.image] });
  const original = { daskam_id: 1, stanzas: [{ n: 1, landscape: { status: 'planned' } }] };
  await f.write('art/approved/d001.json', original);
  await f.save([]);
  const run = promisify(execFile);
  const script = fileURLToPath(new URL('../scripts/approve-art.mjs', import.meta.url));
  const approve = () => run(process.execPath, [script, '--daskam=1', '--sloka=1', '--orientation=landscape', `--file=${f.image.file}`], { cwd: f.root });
  await assert.rejects(approve(), /Missing or stale visual inspection/);
  assert.deepEqual(JSON.parse(await fs.readFile(path.join(f.root, 'art/approved/d001.json'), 'utf8')), original);
  await assert.rejects(fs.access(path.join(f.root, 'artifacts/d001/s001/landscape/master-v001.png')));
  await f.save([f.review]);
  await approve();
  const approved = JSON.parse(await fs.readFile(path.join(f.root, 'art/approved/d001.json'), 'utf8'));
  assert.equal(approved.stanzas[0].landscape.status, 'approved');
  assert.equal(approved.stanzas[0].landscape.sha256, f.image.sha256);
  // The old review cannot authorize changed source bytes, even with the same filename/version.
  await fs.writeFile(path.join(f.root, f.image.file), await sharp(bytes).negate().png().toBuffer());
  await assert.rejects(approve(), /Missing or stale visual inspection/);
  await assert.rejects(fs.access(path.join(f.root, 'artifacts/d001/s001/landscape/master-v002.png')));
});

test('historical labels disclose the exact-version audit outcome and findings, or read as unreviewed', async t => {
  const f = await fixture(t);
  await f.write('art/reviews/historical-selection.json', { schema_version: 1, images: [f.image] });
  await f.save([]);
  const audit = { chapter: 1, sloka: 1, role: 'lead', version: f.image.version, sha256: f.image.sha256, outcome: 'needs-fix', finding_ids: ['F1'] };
  const finding = { id: 'F1', category: 'character-anatomy-contract', observed: 'Brahma shows only two visible arms. Further detail.' };
  await f.write('art/reviews/audit-index.json', { schema_version: 1, images: [audit], findings: [finding] });
  const state = reviewFor(await validateSelections(f.root, [f.batch]), f.image);
  assert.equal(state.status, 'historical');
  assert.match(state.label, /not cleared for final publication.*outcome for this exact version: needs-fix\. Findings: character-anatomy-contract: Brahma shows only two visible arms\.$/);
  const image = f.data.chapters[0].rows[0].images[0];
  await f.bundle();
  await assert.rejects(validateBundle(f.root, f.directory), /bundled review label/);
  Object.assign(image, { inspectionStatus: state.status, inspectionLabel: state.label });
  await f.bundle();
  await validateBundle(f.root, f.directory);
  assert.ok(renderChapter(f.data.chapters[0], 'fixture').includes('needs-fix. Findings: character-anatomy-contract: Brahma shows only two visible arms.'));
  for (const stale of [{ sha256: sha256('other bytes') }, { version: 'v001' }, { role: 'alternate' }]) {
    await f.write('art/reviews/audit-index.json', { schema_version: 1, images: [{ ...audit, ...stale }], findings: [finding] });
    assert.match(reviewFor(await validateSelections(f.root, [f.batch]), f.image).label, /Unreviewed: no commissioned visual audit/);
  }
  await f.write('art/reviews/audit-index.json', { schema_version: 1, images: [audit], findings: [] });
  await assert.rejects(validateSelections(f.root, [f.batch]), /Unknown audit finding F1/);
  await f.write('art/reviews/audit-index.json', { schema_version: 1, images: [audit], findings: [finding] });
  await assert.rejects(validateSelections(f.root, [f.batch], { final: true }), /Missing or stale/);
});

test('repository historical labels match the preserved audits', async () => {
  const root = fileURLToPath(new URL('..', import.meta.url));
  const batches = await loadSelections(root);
  const validation = await validateSelections(root, batches);
  const label = (chapter, sloka, role = 'matte') => reviewFor(validation, selectedImages(batches).find(image => image.chapter === chapter && image.sloka === sloka && image.role === role)).label;
  assert.match(label(4, 12), /needs-fix\. Findings: character-anatomy-contract:/);
  assert.match(label(5, 7), /needs-fix\. Findings: composition-style:/);
  assert.match(label(3, 1), /uncertain\. Findings: possible-same-person-duplication:/);
  assert.match(label(1, 1), /outcome for this exact version: pass\.$/);
  assert.match(label(38, 1), /Unreviewed/);
  assert.match(label(96, 1), /Unreviewed/);
  const labels = [...validation.results.values()].map(item => item.label);
  assert.equal(labels.filter(text => /Unreviewed/.test(text)).length, 20);
  assert.ok(labels.every(text => text.includes('not cleared for final publication')));
});

test('art approval accepts a passing exact review recorded for a visible alternate, and any failing exact review blocks', async t => {
  const f = await fixture(t);
  const bytes = await sharp({ create: { width: 64, height: 36, channels: 3, background: '#b46c0c' } }).png().toBuffer();
  await fs.writeFile(path.join(f.root, f.image.file), bytes);
  f.image.sha256 = f.review.sha256 = sha256(bytes);
  await f.write('art/approved/d001.json', { daskam_id: 1, stanzas: [{ n: 1, landscape: { status: 'planned' } }] });
  const alternate = { ...f.review, role: 'alternate' };
  const run = promisify(execFile);
  const script = fileURLToPath(new URL('../scripts/approve-art.mjs', import.meta.url));
  const approve = () => run(process.execPath, [script, '--daskam=1', '--sloka=1', '--orientation=landscape', `--file=${f.image.file}`], { cwd: f.root });
  await f.save([{ ...alternate, outcome: 'needs-fix' }]);
  await assert.rejects(approve(), /Unresolved defects or uncertainty/);
  await f.save([f.review, { ...alternate, outcome: 'uncertain' }]);
  await assert.rejects(approve(), /Unresolved defects or uncertainty/);
  await f.save([{ ...alternate, version: 'v001' }]);
  await assert.rejects(approve(), /Missing or stale visual inspection/);
  await f.save([alternate]);
  await approve();
  const approved = JSON.parse(await fs.readFile(path.join(f.root, 'art/approved/d001.json'), 'utf8'));
  assert.equal(approved.stanzas[0].landscape.status, 'approved');
  assert.equal(approved.stanzas[0].landscape.sha256, sha256(bytes));
});
