import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import test from 'node:test';

const execFileAsync = promisify(execFile);
const root = process.cwd();

async function readJson(...segments) {
  return JSON.parse(await readFile(path.join(root, ...segments), 'utf8'));
}

test('S004 prompt construction includes Bhattathiri identity and character reference', async () => {
  const [series, content, plan, bhattathiri, guruvayurappan] = await Promise.all([
    readJson('art/bible/series.json'),
    readJson('content/daskams/d003.json'),
    readJson('art/plans/d003.json'),
    readJson('art/bible/characters/bhattathiri/character.json'),
    readJson('art/bible/characters/guruvayurappan/character.json'),
  ]);
  const s004 = plan.stanzas.find(({ n }) => n === 4);
  assert.ok(s004.characters.includes('bhattathiri'), 'S004 must bind its named observer to the character bible');

  const fixture = await mkdtemp(path.join(os.tmpdir(), 's004-prompt-'));
  try {
    const dirs = [
      'art/bible/characters/bhattathiri', 'art/bible/characters/guruvayurappan', 'art/plans', 'art/approved',
      'content/daskams', 'artifacts/characters/bhattathiri',
    ];
    await Promise.all(dirs.map((dir) => mkdir(path.join(fixture, dir), { recursive: true })));
    const s004Content = { ...content, stanzas: content.stanzas.filter(({ n }) => n === 4) };
    const s004Plan = { ...plan, stanzas: [s004] };
    const files = [
      ['art/bible/series.json', series],
      ['content/daskams/d003.json', s004Content],
      ['art/plans/d003.json', s004Plan],
      ['art/bible/characters/bhattathiri/character.json', bhattathiri],
      ['art/bible/characters/guruvayurappan/character.json', guruvayurappan],
    ];
    await Promise.all(files.map(([file, value]) => writeFile(path.join(fixture, file), JSON.stringify(value, null, 2))));
    await writeFile(path.join(fixture, bhattathiri.local_reference_paths[0]), 'reference fixture');

    const buildArgs = [path.join(root, 'scripts/build-prompt.mjs'), '--daskam=3', '--sloka=4', '--orientation=landscape'];
    await assert.rejects(execFileAsync(process.execPath, buildArgs, { cwd: fixture }), /ENOENT/);

    await writeFile(path.join(fixture, 'art/approved/d003.json'), JSON.stringify({ stanzas: [] }));
    await assert.rejects(execFileAsync(process.execPath, buildArgs, { cwd: fixture }), /No complete studio record for d003\/s004/);

    const missingMaster = { status: 'missing', master_path: null, preview_path: null, sha256: null };
    const syntheticApprovals = { stanzas: [{ n: 4, concept_id: 'd003-s004', landscape: missingMaster, portrait: missingMaster }] };
    await writeFile(path.join(fixture, 'art/approved/d003.json'), JSON.stringify(syntheticApprovals, null, 2));
    await execFileAsync(process.execPath, buildArgs, { cwd: fixture });

    const prompt = await readFile(path.join(fixture, 'artifacts/d003/s004/prompts/landscape-v001.md'), 'utf8');
    assert.match(prompt, /### Melpathur Narayana Bhattathiri \(bhattathiri\)/);
    assert.match(prompt, /clean-shaven cheeks and chin/);
    assert.match(prompt, /no beard or moustache/);
    assert.match(prompt, /artifacts\/characters\/bhattathiri\/character-sheet-candidate-v002\.png/);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});
