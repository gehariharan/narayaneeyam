import { createHash } from 'node:crypto';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const root = process.cwd();
const strict = process.argv.includes('--strict');
const onlyArg = process.argv.find((arg) => arg.startsWith('--daskam='));
const only = onlyArg ? Number(onlyArg.split('=')[1]) : null;
const errors = [];
const warnings = [];
const incomplete = [];

const readJson = async (file) => JSON.parse(await readFile(file, 'utf8'));
const exists = async (file) => stat(file).then(() => true, () => false);
const sha256 = async (file) => createHash('sha256').update(await readFile(file)).digest('hex');
const label = (id, n) => `D${String(id).padStart(3, '0')} S${String(n).padStart(3, '0')}`;

let files = [];
try {
  files = (await readdir(path.join(root, 'content', 'daskams')))
    .filter((name) => /^d\d{3}\.json$/.test(name))
    .sort();
} catch (error) {
  errors.push(`Cannot read content/daskams: ${error.message}`);
}

for (const fileName of files) {
  const contentPath = path.join(root, 'content', 'daskams', fileName);
  let content;
  try {
    content = await readJson(contentPath);
  } catch (error) {
    errors.push(`${fileName}: invalid JSON (${error.message})`);
    continue;
  }
  if (only && content.id !== only) continue;

  const slug = `d${String(content.id).padStart(3, '0')}`;
  const planPath = path.join(root, 'art', 'plans', `${slug}.json`);
  const approvalPath = path.join(root, 'art', 'approved', `${slug}.json`);
  const provenancePath = path.join(root, 'content', 'sources', slug, 'provenance.json');

  if (!Number.isInteger(content.id) || !Array.isArray(content.stanzas)) {
    errors.push(`${fileName}: requires numeric id and stanzas array`);
    continue;
  }
  if (!(await exists(provenancePath))) warnings.push(`${slug}: source provenance is missing`);

  let plan;
  let approval;
  try { plan = await readJson(planPath); } catch { errors.push(`${slug}: missing or invalid art plan`); }
  try { approval = await readJson(approvalPath); } catch { errors.push(`${slug}: missing or invalid approval manifest`); }
  if (!plan || !approval) continue;

  const planByStanza = new Map(plan.stanzas?.map((item) => [item.n, item]) ?? []);
  const approvalByStanza = new Map(approval.stanzas?.map((item) => [item.n, item]) ?? []);

  for (const stanza of content.stanzas) {
    const itemLabel = label(content.id, stanza.n);
    const visual = planByStanza.get(stanza.n);
    const approved = approvalByStanza.get(stanza.n);

    for (const field of ['sanskrit', 'stanza_roman', 'translation_en', 'commentary_en']) {
      if (!stanza[field]?.trim()) warnings.push(`${itemLabel}: ${field} is empty`);
      if (stanza[field]?.includes('\uFFFD')) errors.push(`${itemLabel}: ${field} contains replacement characters`);
    }
    if (stanza.review_status !== 'approved') incomplete.push(`${itemLabel}: editorial review is ${stanza.review_status ?? 'unset'}`);
    if (!visual) { errors.push(`${itemLabel}: visual plan is missing`); continue; }
    if (!approved) { errors.push(`${itemLabel}: approval record is missing`); continue; }
    if (visual.concept_id !== approved.concept_id) errors.push(`${itemLabel}: concept_id differs between plan and approval`);
    if (/^Daskam \d+/.test(visual.alt ?? '')) warnings.push(`${itemLabel}: alt text is still generic`);
    if (!visual.scene_brief?.must_show?.length) errors.push(`${itemLabel}: scene brief has no must_show requirements`);
    if (visual.scene_brief?.must_show?.some((item) => /matching the (sloka|stanza) meaning/i.test(item))) {
      warnings.push(`${itemLabel}: scene brief is still generic`);
    }

    for (const [orientation, expectedRatio] of [['landscape', 16 / 9], ['portrait', 4 / 5]]) {
      const spec = visual.orientations?.[orientation];
      const asset = approved[orientation];
      if (!spec) errors.push(`${itemLabel}: ${orientation} composition plan is missing`);
      if (!asset || asset.status === 'missing' || asset.status === 'planned') {
        incomplete.push(`${itemLabel}: ${orientation} artwork is missing`);
        continue;
      }
      if (!asset.master_path) { errors.push(`${itemLabel}: ${orientation} is approved without master_path`); continue; }
      const master = path.resolve(root, asset.master_path);
      if (!(await exists(master))) { errors.push(`${itemLabel}: master not found at ${asset.master_path}`); continue; }

      const actualHash = await sha256(master);
      if (asset.sha256 !== actualHash) errors.push(`${itemLabel}: ${orientation} SHA-256 does not match`);
      try {
        const meta = await sharp(master).metadata();
        const ratio = meta.width / meta.height;
        if (Math.abs(ratio - expectedRatio) > 0.035) errors.push(`${itemLabel}: ${orientation} has ${meta.width}x${meta.height}, not ${spec.aspect_ratio}`);
        if (Math.max(meta.width, meta.height) < 3000) warnings.push(`${itemLabel}: ${orientation} master ${meta.width}x${meta.height} needs print-resolution review`);
      } catch (error) {
        errors.push(`${itemLabel}: ${orientation} master is unreadable (${error.message})`);
      }
      if (asset.preview_path) {
        const preview = path.join(root, 'public', asset.preview_path.replace(/^\//, ''));
        if (!(await exists(preview))) warnings.push(`${itemLabel}: preview derivative is missing`);
      }
    }
    if (approved.landscape?.sha256 && approved.landscape.sha256 === approved.portrait?.sha256) {
      errors.push(`${itemLabel}: landscape and portrait point to the same image instead of separate compositions`);
    }
  }

  for (const planned of plan.stanzas ?? []) {
    if (!content.stanzas.some((stanza) => stanza.n === planned.n)) errors.push(`${label(content.id, planned.n)}: plan has no matching content stanza`);
  }
}

console.log(`Studio validation: ${files.length} content file(s)`);
for (const message of errors) console.error(`ERROR      ${message}`);
for (const message of warnings) console.warn(`WARNING    ${message}`);
for (const message of incomplete) console.log(`INCOMPLETE ${message}`);
console.log(`Summary: ${errors.length} error(s), ${warnings.length} warning(s), ${incomplete.length} incomplete item(s)`);

if (errors.length || (strict && incomplete.length)) process.exitCode = 1;
