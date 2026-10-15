import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { loadSelections, selectedImages } from './selections.mjs';

export const reviewChecks = ['limbs_hands_feet', 'attachment_proportions', 'faces', 'duplication_fusion', 'text_artifacts', 'scene_style_continuity'];
export const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const hash = value => typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
const identity = image => JSON.stringify([image.chapter, image.sloka, image.role, image.file, image.version, image.sha256]);
const slot = image => `${image.chapter}/${image.sloka}/${image.role}/${image.version}`;
const historicalLabel = 'Historical review material — not cleared for final publication; known findings or inspection limits may remain.';
const inspectedLabel = 'Visually inspected candidate — not art approval.';
function localPath(root, file) {
  if (!nonempty(file) || path.isAbsolute(file) || file.includes('\\') || file.split('/').includes('..')) throw new Error(`Invalid review path: ${file}`);
  return path.join(root, file);
}
async function readJson(root, file) { return JSON.parse(await fs.readFile(localPath(root, file), 'utf8')); }

// This validates recorded evidence and byte bindings. It cannot determine visual correctness.
export async function validateSelections(root, batches, { final = false } = {}) {
  batches ??= await loadSelections(root);
  const historical = await readJson(root, 'art/reviews/historical-selection.json');
  const records = await readJson(root, 'art/reviews/visual-reviews.json');
  if (historical.schema_version !== 1 || !Array.isArray(historical.images) || records.schema_version !== 1 || !Array.isArray(records.reviews)) throw new Error('Invalid image review collection');
  const legacy = new Set(historical.images.map(identity));
  const reviews = new Map();
  for (const review of records.reviews) {
    const key = identity(review);
    if (reviews.has(key)) throw new Error(`Duplicate review: ${slot(review)}`);
    reviews.set(key, review);
  }
  const results = new Map(), seen = new Set();
  for (const image of selectedImages(batches)) {
    const key = identity(image), where = slot(image);
    if (!Number.isInteger(image.chapter) || image.chapter < 1 || !Number.isInteger(image.sloka) || image.sloka < 1 || !nonempty(image.version) || !hash(image.sha256)) throw new Error(`Invalid selected image: ${where}`);
    localPath(root, image.file);
    if (seen.has(where)) throw new Error(`Duplicate selected image: ${where}`);
    seen.add(where);
    if (!final && legacy.has(key)) {
      results.set(key, { status: 'historical', label: historicalLabel });
      continue;
    }
    if (final && sha256(await fs.readFile(localPath(root, image.file))) !== image.sha256) throw new Error(`Selection checksum mismatch for final clearance: ${where}`);
    const review = reviews.get(key);
    if (!review) throw new Error(`Missing or stale visual inspection: ${where} ${image.file}`);
    if (review.outcome !== 'pass' || !Array.isArray(review.findings) || review.findings.length) throw new Error(`Unresolved defects or uncertainty: ${where}`);
    if (!nonempty(review.reviewer) || !nonempty(review.inspected_at) || !Number.isFinite(Date.parse(review.inspected_at)) || Date.parse(review.inspected_at) > Date.now() || review.method !== 'individual-native-resolution' || !nonempty(review.anatomy_basis)) throw new Error(`Missing reviewer/inspection evidence: ${where}`);
    for (const check of reviewChecks) {
      if (review.checks?.[check]?.status !== 'pass' || !nonempty(review.checks[check].observations)) throw new Error(`Incomplete visual rubric ${check}: ${where}`);
    }
    const planPath = `art/plans/d${String(image.chapter).padStart(3, '0')}.json`;
    const plan = await readJson(root, planPath);
    const scene = plan.stanzas.find(stanza => stanza.n === image.sloka);
    if (!scene) throw new Error(`Missing scene contract: ${where}`);
    const required = ['art/bible/series.json', planPath, ...(scene.characters || []).map(id => `art/bible/characters/${id}/character.json`)];
    if (!Array.isArray(review.contracts)) throw new Error(`Missing scene/character contracts: ${where}`);
    for (const file of required) {
      if (!review.contracts.some(item => item.path === file)) throw new Error(`Missing or stale contract ${file}: ${where}`);
    }
    const contractPaths = new Set();
    for (const binding of review.contracts) {
      if (contractPaths.has(binding.path) || !hash(binding.sha256) || sha256(await fs.readFile(localPath(root, binding.path))) !== binding.sha256) throw new Error(`Missing or stale contract ${binding.path}: ${where}`);
      contractPaths.add(binding.path);
    }
    // A separately committed report records actual viewing, close views, and remaining limits.
    if (!Array.isArray(review.evidence) || !review.evidence.length) throw new Error(`Missing inspection report: ${where}`);
    for (const evidence of review.evidence) {
      if (!evidence.path?.startsWith('art/reviews/') || !evidence.path.endsWith('.md') || !hash(evidence.sha256)) throw new Error(`Invalid inspection report: ${where}`);
      const bytes = await fs.readFile(localPath(root, evidence.path));
      if (!bytes.length || sha256(bytes) !== evidence.sha256) throw new Error(`Stale inspection report: ${where}`);
    }
    results.set(key, { status: 'inspected', label: inspectedLabel });
  }
  return { images: selectedImages(batches), results };
}
export function reviewFor(validation, image) { return validation.results.get(identity(image)); }

// Runs against the exact upload/release bundle, without needing raw assets in CI.
export async function validateBundle(root, directory, options = {}) {
  const batches = await loadSelections(root);
  const validation = await validateSelections(root, batches, options);
  const data = JSON.parse(await fs.readFile(path.join(directory, 'data.json'), 'utf8'));
  const provenance = JSON.parse(await fs.readFile(path.join(directory, 'asset-provenance.json'), 'utf8'));
  const references = batches.flatMap(batch => batch.rows.filter(row => row.reference).map(row => ({ ...row.reference, chapter: batch.daskam_id, sloka: row.n, role: 'reference' })));
  const expected = new Map([...validation.images, ...references].map(image => [slot(image), image]));
  const seen = new Set();
  for (const chapter of data.chapters) for (const row of chapter.rows) for (const image of row.images) {
    const where = slot({ chapter: chapter.id, sloka: row.n, ...image });
    const selected = expected.get(where);
    if (!selected || seen.has(where)) throw new Error(`Unexpected/duplicate bundled selection: ${where}`);
    seen.add(where);
    const matches = provenance.filter(item => item.key === image.key);
    if (matches.length !== 1 || matches[0].source !== selected.file || matches[0].sourceHash !== selected.sha256) throw new Error(`Stale bundled source: ${where}`);
    if (!/^media\/[a-z0-9-]+\.webp$/.test(image.key)) throw new Error(`Invalid media key: ${image.key}`);
    const bytes = await fs.readFile(path.join(directory, image.key));
    if (sha256(bytes) !== data.assets[image.key]?.sha256) throw new Error(`Stale bundled derivative: ${where}`);
    if (image.role === 'reference') continue;
    const review = reviewFor(validation, selected);
    if (image.inspectionStatus !== review.status || image.inspectionLabel !== review.label) throw new Error(`Missing/stale bundled review label: ${where}`);
  }
  if (seen.size !== expected.size) throw new Error('Bundle omits selected images or visible alternates');
  return validation;
}
