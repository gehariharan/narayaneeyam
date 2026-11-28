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
const historical = 'Historical review material — not cleared for final publication.';
const unauditedLabel = `${historical} Unreviewed: no commissioned visual audit covers this exact version.`;
const firstSentence = text => String(text || '').split(/(?<=\.)\s/)[0];
const livePublicationExceptions = [{
  selectionFile: 'd030-comparison-v017.json',
  plan_sha256: 'a09c8cfeea11a0e75df67ee527b8d5c08fa7da5e9600c57e73708e94a58f6041',
  revisionSelection: {
    file: 'artifacts/d030/s009/landscape/candidate-v014.png',
    version: 'v014',
    sha256: '289184b9cf0783a8deb35e00d5db4136af2e9e3789d2b39b4eaf2dbdac2c8c31'
  },
  chapter: 30,
  sloka: 6,
  role: 'matte',
  file: 'artifacts/d030/s006/landscape/candidate-v015.png',
  version: 'v015',
  sha256: '9f3e440d7869d3f001a0b1e3305890f7c245b76177e5adc5e2733b2d2bf83038'
}];
function publicationExceptionLabel(exception) {
  return `${historical} Captain-directed D030 S009-only revision retains the exact live S006 ${exception.version} candidate (SHA-256 ${exception.sha256}) per captain decision d030-s006-leave-as-is-s009-priority to leave S006 as is for now; whether Brahma should appear in S006 remains an open captain question; its latest independent review finds the central crown inset and plaque, so it remains not art-approved.`;
}
function auditLabel(audit, findings) {
  const notes = audit.finding_ids.map(id => {
    const finding = findings.get(id);
    if (!finding) throw new Error(`Unknown audit finding ${id}`);
    return `${finding.category}: ${firstSentence(finding.observed)}`;
  });
  return `${historical} Commissioned audit outcome for this exact version: ${audit.outcome}.${notes.length ? ` Findings: ${notes.join(' ')}` : ''}`;
}
const inspectedLabel = 'Visually inspected candidate — not art approval.';
function localPath(root, file) {
  if (!nonempty(file) || path.isAbsolute(file) || file.includes('\\') || file.split('/').includes('..')) throw new Error(`Invalid review path: ${file}`);
  return path.join(root, file);
}
async function readJson(root, file) { return JSON.parse(await fs.readFile(localPath(root, file), 'utf8')); }

// This validates recorded evidence and byte bindings. It cannot determine visual correctness.
export async function validateSelections(root, batches, options = {}) {
  batches ??= await loadSelections(root);
  const publicationExceptions = batches.flatMap(batch => (batch.publication_exceptions || []).map(exception => ({
    ...exception,
    selectionFile: batch.selectionFile,
    chapter: batch.daskam_id ?? batch.daskam,
    plan_sha256: batch.plan_sha256,
    revisionSelection: batch.rows.find(row => row.n === 9)?.matte
  })));
  return validateImages(root, selectedImages(batches), { ...options, publicationExceptions });
}

// Approval clears exact candidate bytes; its lead/alternate display role is irrelevant.
export async function validateApprovalCandidate(root, candidate) {
  const { reviews } = await readJson(root, 'art/reviews/visual-reviews.json');
  const exact = review => ['chapter', 'sloka', 'file', 'version', 'sha256'].every(key => review[key] === candidate[key]);
  const roles = ['matte', 'alternate'].filter(role => Array.isArray(reviews) && reviews.some(review => review.role === role && exact(review)));
  return validateImages(root, (roles.length ? roles : ['matte']).map(role => ({ ...candidate, role })), { final: true });
}

async function validateImages(root, images, { final = false, publicationExceptions = [] } = {}) {
  const frozen = await readJson(root, 'art/reviews/historical-selection.json');
  const records = await readJson(root, 'art/reviews/visual-reviews.json');
  const audits = await readJson(root, 'art/reviews/audit-index.json');
  if (frozen.schema_version !== 1 || !Array.isArray(frozen.images) || records.schema_version !== 1 || !Array.isArray(records.reviews) || audits.schema_version !== 1 || !Array.isArray(audits.images) || !Array.isArray(audits.findings)) throw new Error('Invalid image review collection');
  const legacy = new Set(frozen.images.map(identity));
  const auditFindings = new Map(audits.findings.map(finding => [finding.id, finding]));
  const audited = new Map(audits.images.map(audit => [identity({ ...audit, role: audit.role === 'lead' ? 'matte' : audit.role, file: null }), audit]));
  const reviews = new Map();
  for (const review of records.reviews) {
    const key = identity(review);
    if (reviews.has(key)) throw new Error(`Duplicate review: ${slot(review)}`);
    reviews.set(key, review);
  }
  const results = new Map(), seen = new Set();
  for (const image of images) {
    const key = identity(image), where = slot(image);
    if (!Number.isInteger(image.chapter) || image.chapter < 1 || !Number.isInteger(image.sloka) || image.sloka < 1 || !nonempty(image.version) || !hash(image.sha256)) throw new Error(`Invalid selected image: ${where}`);
    localPath(root, image.file);
    if (seen.has(where)) throw new Error(`Duplicate selected image: ${where}`);
    seen.add(where);
    const exception = !final && publicationExceptions.find(item => {
      const allowed = livePublicationExceptions.find(known => known.selectionFile === item.selectionFile);
      return allowed && item.plan_sha256 === allowed.plan_sha256
        && ['file', 'version', 'sha256'].every(key => item.revisionSelection?.[key] === allowed.revisionSelection[key])
        && ['chapter', 'sloka', 'role', 'file', 'version', 'sha256'].every(key => item[key] === allowed[key])
        && ['chapter', 'sloka', 'role', 'file', 'version', 'sha256'].every(key => image[key] === allowed[key]);
    });
    if (exception) {
      results.set(key, { status: 'historical', label: publicationExceptionLabel(exception) });
      continue;
    }
    if (!final && legacy.has(key)) {
      const audit = audited.get(identity({ ...image, file: null }));
      results.set(key, { status: 'historical', label: audit ? auditLabel(audit, auditFindings) : unauditedLabel });
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
    const seriesRef = plan.series_bible_ref;
    if (seriesRef !== undefined && (typeof seriesRef !== 'string' || !/^art\/bible\/series-amendment-v\d{3}\.json$/.test(seriesRef))) throw new Error(`Invalid versioned series amendment reference: ${where}`);
    if (seriesRef) {
      const amendment = await readJson(root, seriesRef);
      if (amendment.id !== path.basename(seriesRef, '.json')) throw new Error(`Series amendment id does not match ${seriesRef}: ${where}`);
    }
    const characterBindings = plan.character_bible_bindings ?? {};
    if (!characterBindings || typeof characterBindings !== 'object' || Array.isArray(characterBindings)) throw new Error(`Invalid versioned character contract bindings: ${where}`);
    for (const [id, file] of Object.entries(characterBindings)) {
      if (!/^art\/bible\/characters\/[a-z0-9-]+\/character-v\d{3}\.json$/.test(file)) throw new Error(`Invalid versioned character contract reference for ${id}: ${where}`);
      const character = await readJson(root, file);
      if (character.id !== id) throw new Error(`Character contract ${file} does not identify ${id}: ${where}`);
    }
    if (!Array.isArray(review.contracts)) throw new Error(`Missing scene/character contracts: ${where}`);
    const plannedCharacterRefs = plan.character_bible_refs;
    const characterFiles = (Array.isArray(plannedCharacterRefs)
      ? plannedCharacterRefs
      : (scene.characters || []).map(id => characterBindings[id] ?? `art/bible/characters/${id}/character.json`))
      .concat((scene.characters || []).map(id => characterBindings[id]).filter(Boolean));
    if (plannedCharacterRefs !== undefined && (!Array.isArray(plannedCharacterRefs) || plannedCharacterRefs.some(file => !nonempty(file) || !file.startsWith('art/bible/characters/')))) throw new Error(`Invalid planned character contract references: ${where}`);
    const required = ['art/bible/series.json', ...(seriesRef ? [seriesRef] : []), planPath, ...new Set(characterFiles)];
    for (const file of required) {
      if (!review.contracts.some(item => item.path === file)) throw new Error(`Missing or stale contract ${file}: ${where}`);
    }
    const contractPaths = new Set();
    for (const binding of review.contracts) {
      if (contractPaths.has(binding.path) || !hash(binding.sha256) || sha256(await fs.readFile(localPath(root, binding.path))) !== binding.sha256) throw new Error(`Missing or stale contract ${binding.path}: ${where}`);
      contractPaths.add(binding.path);
    }
    // A plan may bind a chapter-scoped contract that covers several scene characters.
    // Require each cast member to be covered by a bound direct sheet or such an aggregate.
    for (const id of scene.characters || []) {
      if (characterBindings[id] && characterFiles.includes(characterBindings[id])) continue;
      const direct = `art/bible/characters/${id}/character.json`;
      if (characterFiles.includes(direct)) continue;
      let covered = false;
      for (const file of characterFiles) {
        if (!/^art\/bible\/characters\/d\d{3}\/scene-contracts\.json$/.test(file)) continue;
        const aggregate = await readJson(root, file);
        if (aggregate.chapter === `D${String(image.chapter).padStart(3, '0')}` && aggregate.characters && Object.hasOwn(aggregate.characters, id)) covered = true;
      }
      if (!covered) throw new Error(`Missing planned character contract for ${id}: ${where}`);
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
  return { images, results };
}
export function reviewFor(validation, image) { return validation.results.get(identity(image)); }

// Runs against the exact upload/release bundle, without needing raw assets in CI.
export async function validateBundle(root, directory, options = {}) {
  const batches = await loadSelections(root);
  const validation = await validateSelections(root, batches, options);
  const data = JSON.parse(await fs.readFile(path.join(directory, 'data.json'), 'utf8'));
  const provenance = JSON.parse(await fs.readFile(path.join(directory, 'asset-provenance.json'), 'utf8'));
  const references = batches.flatMap(batch => batch.rows.flatMap(row => (row.references || (row.reference ? [row.reference] : [])).map(item => ({ ...item, chapter: batch.daskam_id, sloka: row.n, role: 'reference' }))));
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
