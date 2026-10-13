import assert from 'node:assert/strict';

const base = 'https://gehariharan.com/narayaneeyam';
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fetchText(path) {
  let last;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const response = await fetch(`${base}${path}`, { redirect: 'follow' });
    last = { status: response.status, text: await response.text() };
    if (last.status === 200 && last.text.includes('/narayaneeyam/d004')) return last.text;
    await pause(attempt * 5000);
  }
  throw new Error(`Live verification did not converge for ${path}: HTTP ${last?.status}`);
}

const index = await fetchText('/');
for (const id of ['d001', 'd002', 'd003', 'd004', 'd005', 'd006', 'd038', 'd096']) assert.ok(index.includes(`/narayaneeyam/${id}`));

for (const id of ['d001', 'd002', 'd003', 'd004', 'd005', 'd006', 'd038', 'd096']) {
  const html = await fetchText(`/${id}`);
  assert.ok(html.includes('Traditional matte mural') || ['d005', 'd006'].includes(id) && html.includes('Landscape candidate'));
  assert.ok(!html.includes('Detailed painting'));
  assert.ok(!html.includes('Glossy mural'));
  assert.equal((html.match(/<figure>/g) || []).length, id === 'd004' ? 30 : id === 'd005' ? 23 : id === 'd006' ? 23 : 20);
  if (id === 'd005') assert.ok(html.includes('transliteration and English translation are not yet available'));
  if (id === 'd006') assert.ok(html.includes('All artwork is unapproved landscape candidate material'));
}

console.log('Verified live: eight chapters including D005 and D006 candidate reviews and D004 fifteen-row comparison.');
