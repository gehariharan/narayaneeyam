import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { chapterSlug } from '../views.mjs';

// The review site is locked behind a shared passphrase that CI never holds, so this
// post-deploy check verifies anonymously that every release route is closed.
const defaultBase = 'https://gehariharan.com/narayaneeyam';
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fetchVerified(base, path, init, verify, retryDelayMs) {
  let last;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const response = await fetch(`${base}${path}`, { redirect: 'manual', cache: 'no-store', ...init });
    last = { status: response.status, error: undefined };
    try {
      verify(response, await response.text());
      return;
    } catch (error) {
      if (!(error instanceof assert.AssertionError)) throw error;
      last.error = error;
    }
    await pause(attempt * retryDelayMs);
  }
  throw new Error(`Live lock verification did not converge for ${init.method || 'GET'} ${path}: HTTP ${last?.status}${last?.error ? ` (${last.error.message})` : ''}`);
}

function verifyLockedHeaders(response, label) {
  assert.ok(response.status === 401, `${label} is not locked`);
  assert.ok(response.headers.get('set-cookie') === null, `${label} sets a cookie while locked`);
  assert.match(response.headers.get('cache-control') || '', /no-store/, `${label} is cacheable while locked`);
  assert.match(response.headers.get('x-robots-tag') || '', /noindex/, `${label} lacks X-Robots-Tag noindex`);
}

function verifyLockedPage(response, html, label, data) {
  verifyLockedHeaders(response, label);
  assert.ok(html.includes('This site is locked.'), `${label} does not show the lock page`);
  assert.ok(html.includes('content="noindex,nofollow"'), `${label} lock page is indexable`);
  assert.ok(!html.includes('class="sloka"') && !html.includes('data-feedback'), `${label} leaks chapter content`);
  assert.ok(!Object.keys(data.assets || {}).some(key => html.includes(key)), `${label} leaks a media path`);
}

function verifyLockedEmpty(response, body, label) {
  verifyLockedHeaders(response, label);
  assert.ok(body === '', `${label} returns content while locked`);
}

export async function verifyLivePages(data, {
  base = defaultBase,
  retryDelayMs = 5000,
} = {}) {
  assert.ok(Array.isArray(data?.chapters) && data.chapters.length > 0, 'Release data has no chapters');
  const chapters = data.chapters;
  const mediaKey = Object.keys(data.assets || {})[0];
  assert.ok(mediaKey, 'Release data has no media');
  for (const path of ['/', ...chapters.map(chapter => `/${chapterSlug(chapter.id)}`)]) {
    await fetchVerified(base, path, {}, (response, html) => verifyLockedPage(response, html, path, data), retryDelayMs);
  }
  await fetchVerified(base, `/${mediaKey}`, {}, (response, body) => verifyLockedEmpty(response, body, `/${mediaKey}`), retryDelayMs);
  const origin = new URL(base).origin;
  const chapter = chapters.at(-1);
  const body = JSON.stringify({ daskam: chapter.id, sloka: chapter.rows[0]?.n, message: 'Deployment lock verification.', revision: data.revision, website: '' });
  await fetchVerified(base, '/api/feedback', { method: 'POST', headers: { 'content-type': 'application/json', origin }, body }, (response, text) => verifyLockedEmpty(response, text, 'POST /api/feedback'), retryDelayMs);

  console.log(`Verified live lock: index, ${chapters.length} chapter pages, a media path and feedback all return the locked 401 response.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const data = JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/data.json', import.meta.url), 'utf8'));
  await verifyLivePages(data);
}
