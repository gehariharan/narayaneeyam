import path from 'node:path';
import { validateSelections, validateBundle } from '../review-site/image-review.mjs';
import { validateAwaiting } from '../review-site/awaiting.mjs';
if (process.argv.slice(2).some(arg => !['--bundle', '--final'].includes(arg))) throw new Error('Usage: npm run art:review:validate -- [--bundle] [--final]');
const root = path.resolve(import.meta.dirname, '..');
const bundle = process.argv.includes('--bundle');
const options = { final: process.argv.includes('--final') };
const validation = bundle
  ? await validateBundle(root, path.join(root, 'artifacts/review-site'), options)
  : await validateSelections(root, undefined, options);
const historical = [...validation.results.values()].filter(item => item.status === 'historical').length;
// The bundle's awaiting-painting chapters carry only mapped reference-photo derivatives.
if (bundle) {
  const awaiting = await validateAwaiting(root, path.join(root, 'artifacts/review-site'));
  console.log(`Awaiting-painting chapters valid: ${awaiting.chapters} dasakams, ${awaiting.images} reference-photo derivatives.`);
}
console.log(`Image review evidence valid: ${validation.images.length} selected versions; ${historical} unchanged historical review images (not cleared); ${validation.images.length - historical} visually inspected new selections. Automated validation does not prove visual correctness.`);
