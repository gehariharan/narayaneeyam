import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { chapterSlug, escapeHtml } from '../views.mjs';

const defaultBase = 'https://gehariharan.com/narayaneeyam';
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fetchVerified(base, path, verify, fetchImpl, retryDelayMs) {
  let last;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const response = await fetchImpl(`${base}${path}`, { redirect: 'follow', cache: 'no-store' });
    last = { status: response.status, text: await response.text(), error: undefined };
    if (last.status === 200) {
      try {
        verify(last.text);
        return;
      } catch (error) {
        if (!(error instanceof assert.AssertionError)) throw error;
        last.error = error;
      }
    }
    await pause(attempt * retryDelayMs);
  }
  throw new Error(`Live verification did not converge for ${path}: HTTP ${last?.status}${last?.error ? ` (${last.error.message})` : ''}`);
}

function verifyIndex(html, chapters) {
  for (const chapter of chapters) assert.ok(html.includes(`/narayaneeyam/${chapterSlug(chapter.id)}`), `Live index is missing ${chapterSlug(chapter.id)}`);
}

function verifyChapter(html, chapter) {
  const id = chapterSlug(chapter.id);
  assert.ok(html.includes(`<h1>${escapeHtml(chapter.title)}</h1>`), `${id} page title does not match the release data`);
  assert.ok(html.includes('Traditional matte mural') || html.includes('Landscape candidate'), `${id} has no selected mural candidate`);
  assert.ok(!html.includes('Detailed painting'), `${id} includes a detailed painting label`);
  assert.ok(!html.includes('Glossy mural'), `${id} includes a glossy mural label`);

  const sections = [...html.matchAll(/<section class="sloka" id="s(\d{3})">([\s\S]*?)<\/section>/g)];
  assert.deepEqual(sections.map(match => Number(match[1])), chapter.rows.map(row => row.n), `${id} sloka rows do not match the release data`);
  assert.equal((html.match(/<figure>/g) || []).length, chapter.rows.reduce((count, row) => count + row.images.length, 0), `${id} image count does not match the release data`);
  assert.equal((html.match(/<form data-feedback action="\/narayaneeyam\/api\/feedback">/g) || []).length, chapter.rows.length, `${id} feedback forms do not match the release rows`);

  for (const [index, row] of chapter.rows.entries()) {
    const [, actualNumber, section] = sections[index];
    const number = String(row.n).padStart(3, '0');
    assert.equal(actualNumber, number, `${id} row order differs from the release data`);
    assert.ok(section.includes(`<h2>Sloka ${number}`), `${id} row ${number} is mapped to the wrong sloka heading`);
    assert.ok(section.includes(`name="daskam" value="${chapter.id}"`) && section.includes(`name="sloka" value="${row.n}"`), `${id} feedback stanza mapping differs for sloka ${number}`);

    const figures = [...section.matchAll(/<figure>([\s\S]*?)<\/figure>/g)].map(match => match[1]);
    assert.equal(figures.length, row.images.length, `${id} sloka ${number} image count differs from the release data`);
    for (const image of row.images) {
      const label = image.displayLabel || ({ reference: 'Reference', matte: 'Traditional matte mural' }[image.role] || image.label);
      const displayedVersion = label.match(/Landscape candidate (v\d+)/)?.[1];
      if (displayedVersion) assert.equal(image.version, displayedVersion, `${id} sloka ${number} pinned version disagrees with its displayed label`);
      const figure = figures.find(candidate => candidate.includes(`<figcaption>${label}`));
      assert.ok(figure, `${id} sloka ${number} is missing selected ${image.role} version ${image.version}`);
      if (image.key) assert.ok(figure.includes(`href="/narayaneeyam/${image.key}"`) && figure.includes(`src="/narayaneeyam/${image.key}"`), `${id} sloka ${number} ${image.role} does not use selected asset ${image.key}`);
    }
  }

  if (chapter.id === 5) assert.ok(html.includes('transliteration and English translation are not yet available'));
  if (chapter.id === 6) {
    assert.ok(html.includes('All artwork is unapproved landscape candidate material'));
    assert.ok(html.includes('S007 v002 adds the omitted Adharma/back mapping'));
  }
  if (chapter.id === 7) assert.ok(html.includes('All artwork is unapproved landscape candidate material'));
}

export async function verifyLivePages(data, {
  base = process.env.NARAYANEEYAM_REVIEW_BASE_URL || defaultBase,
  fetchImpl = fetch,
  retryDelayMs = 5000,
} = {}) {
  assert.ok(Array.isArray(data?.chapters) && data.chapters.length > 0, 'Release data has no chapters');
  const chapters = data.chapters;
  await fetchVerified(base, '/', html => verifyIndex(html, chapters), fetchImpl, retryDelayMs);
  for (const chapter of chapters) await fetchVerified(base, `/${chapterSlug(chapter.id)}`, html => verifyChapter(html, chapter), fetchImpl, retryDelayMs);

  console.log(`Verified live: ${chapters.length} chapters, ${chapters.reduce((n, c) => n + c.rows.length, 0)} release-mapped rows, selected image versions and feedback forms.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const data = JSON.parse(await fs.readFile(new URL('../../artifacts/review-site/data.json', import.meta.url), 'utf8'));
  await verifyLivePages(data);
}
