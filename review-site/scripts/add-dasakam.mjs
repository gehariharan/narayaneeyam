// Adds one newly painted dasakam to the review site: the local part, in one step.
//
//   npm run review:add-dasakam -- --daskam=15
//   npm run review:add-dasakam -- --daskam=15 --batch=d015-comparison-v002.json
//
// 1. Selects the dasakam's batch in review-site/selections.mjs (by default its highest
//    art/batches/dNNN-comparison-vNNN.json; a newer batch replaces the one already selected).
// 2. Adds the dasakam's chapter-scoped R2 upload step to .github/workflows/deploy-review.yml.
// 3. Builds the review site and runs the existing checks: the build's selection and bundle
//    validation, review-site/scripts/test.mjs, and `npm run art:review:validate -- --bundle`.
//    If any fails, both edits are undone and nothing is left selected.
// With its batch selected, the dasakam's awaiting-painting cards become the normal painted cards.
// Committing, shipping, packaging and deploying stay manual (review-site/README.md).
// It needs an asset-bearing checkout (intake and artifacts), like the build itself.
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const pad = n => String(n).padStart(3, '0');
const SELECTIONS = 'review-site/selections.mjs';
const WORKFLOW = '.github/workflows/deploy-review.yml';
const WORKFLOW_ANCHOR = '      - name: Apply review D1 migrations\n';

// The highest-versioned comparison batch for a dasakam among the art/batches file names.
export function latestBatch(names, id) {
  const pattern = new RegExp(`^d${pad(id)}-comparison-v(\\d{3,})\\.json$`);
  const found = names.map(name => [name, pattern.exec(name)]).filter(([, m]) => m).sort((a, b) => Number(b[1][1]) - Number(a[1][1]));
  return found[0]?.[0] ?? null;
}

// selections.mjs with `file` selected for its dasakam: replaces that dasakam's entry, or inserts
// it in dasakam order. Returns the source unchanged if it is already selected.
export function withSelection(source, file) {
  const match = /export const selectionFiles = \[([\s\S]*?)\];/.exec(source);
  if (!match) throw new Error(`${SELECTIONS} has no selectionFiles list`);
  if (match[1].replace(/'[^'\\\n]+'/g, '').replace(/[\s,]/g, '')) throw new Error(`${SELECTIONS} selectionFiles holds something other than quoted file names`);
  const named = /^d(\d{3})-[A-Za-z0-9._-]+\.json$/.exec(file);
  if (!named) throw new Error(`Not a batch file name: ${file}`);
  const id = Number(named[1]);
  const entries = [...match[1].matchAll(/'([^'\\\n]+)'/g)].map(m => m[1]);
  const same = entries.filter(entry => entry.startsWith(`d${pad(id)}-`));
  if (same.length > 1) throw new Error(`${SELECTIONS} selects more than one batch for D${pad(id)}`);
  if (same[0] === file) return source;
  let list;
  if (same.length) list = match[1].replace(`'${same[0]}'`, `'${file}'`);
  else {
    const next = entries.find(entry => Number(entry.slice(1, 4)) > id);
    list = next ? match[1].replace(`'${next}'`, `'${file}', '${next}'`) : match[1].replace(/'([^'\\\n]+)'(\s*)$/, `'$1', '${file}'$2`);
  }
  return source.replace(match[0], `export const selectionFiles = [${list}];`);
}

// The deploy workflow with a chapter-scoped R2 upload step for the dasakam, before the D1 migrations.
export function withUploadStep(workflow, id) {
  if (new RegExp(`node review-site/scripts/upload\\.mjs --daskam=${id}\\s*$`, 'm').test(workflow)) return workflow;
  if (workflow.split(WORKFLOW_ANCHOR).length !== 2) throw new Error(`${WORKFLOW} has no single "Apply review D1 migrations" step`);
  return workflow.replace(WORKFLOW_ANCHOR, `      - name: Upload D${pad(id)} review candidates to R2\n        run: node review-site/scripts/upload.mjs --daskam=${id}\n\n${WORKFLOW_ANCHOR}`);
}

function parse(argv) {
  const args = {};
  for (const arg of argv) {
    const m = /^--([a-z-]+)=(.+)$/.exec(arg);
    if (!m || !['daskam', 'batch'].includes(m[1])) throw new Error('Usage: npm run review:add-dasakam -- --daskam=N [--batch=dNNN-comparison-vNNN.json]');
    args[m[1]] = m[2];
  }
  const id = Number(args.daskam);
  if (!/^\d{1,3}$/.test(args.daskam || '') || id < 1 || id > 100) throw new Error('--daskam must be 1 to 100');
  return { id, batch: args.batch ?? null };
}

async function main() {
  const root = path.resolve(import.meta.dirname, '../..');
  const { id, batch: requested } = parse(process.argv.slice(2));
  const d = `d${pad(id)}`;
  await fs.access(path.join(root, `content/daskams/${d}.json`)).catch(() => { throw new Error(`No content/daskams/${d}.json: the dasakam needs its content first`); });
  const file = requested ?? latestBatch(await fs.readdir(path.join(root, 'art/batches')), id);
  if (!file) throw new Error(`No art/batches/${d}-comparison-vNNN.json; pass --batch=<file>`);
  if (path.basename(file) !== file || !file.startsWith(`${d}-`)) throw new Error(`--batch must be a ${d}-… file name in art/batches`);
  const batch = JSON.parse(await fs.readFile(path.join(root, 'art/batches', file), 'utf8'));
  if ((batch.daskam_id ?? batch.daskam) !== id || !Array.isArray(batch.rows) || !batch.rows.length) throw new Error(`art/batches/${file} is not a batch of rows for D${pad(id)}`);

  const originals = { [SELECTIONS]: await fs.readFile(path.join(root, SELECTIONS), 'utf8'), [WORKFLOW]: await fs.readFile(path.join(root, WORKFLOW), 'utf8') };
  const updated = { [SELECTIONS]: withSelection(originals[SELECTIONS], file), [WORKFLOW]: withUploadStep(originals[WORKFLOW], id) };
  for (const [name, text] of Object.entries(updated)) if (text !== originals[name]) await fs.writeFile(path.join(root, name), text);
  console.log(`${SELECTIONS}: ${updated[SELECTIONS] === originals[SELECTIONS] ? 'already selects' : 'now selects'} ${file}`);
  console.log(`${WORKFLOW}: ${updated[WORKFLOW] === originals[WORKFLOW] ? 'already uploads' : 'now uploads'} ${d} review derivatives`);

  const steps = [['review-site/scripts/build.mjs'], ['review-site/scripts/test.mjs'], ['scripts/validate-image-reviews.mjs', '--bundle']];
  for (const step of steps) {
    console.log(`\n$ node ${step.join(' ')}`);
    const result = spawnSync(process.execPath, step, { cwd: root, stdio: 'inherit' });
    if (result.status !== 0) {
      for (const [name, text] of Object.entries(originals)) await fs.writeFile(path.join(root, name), text);
      throw new Error(`node ${step.join(' ')} failed; ${SELECTIONS} and ${WORKFLOW} are restored. Fix the batch or its review evidence, then run this again.`);
    }
  }
  console.log(`\nD${pad(id)} is ready to ship with ${file}. Next (review-site/README.md, "Add a newly painted dasakam"):
  1. Commit ${SELECTIONS} and ${WORKFLOW} with the batch and its review evidence, and ship them through no-mistakes.
  2. On the landed commit, in an asset-bearing checkout: node review-site/scripts/build.mjs && node review-site/scripts/test.mjs && node review-site/scripts/package-release.mjs
  3. Release that bundle and dispatch the deploy workflow (gh release create review-bundle-<sha> …; gh workflow run deploy-review.yml --ref review-bundle-<sha>).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { await main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
