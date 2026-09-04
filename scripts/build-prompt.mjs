import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const args = Object.fromEntries(process.argv.slice(2).map((arg) => {
  const match = arg.match(/^--([^=]+)=(.+)$/);
  return match ? [match[1], match[2]] : [arg.replace(/^--/, ''), true];
}));
const daskamId = Number(args.daskam);
const stanzaNumber = Number(args.sloka ?? args.stanza);
const orientation = args.orientation;
if (!Number.isInteger(daskamId) || !Number.isInteger(stanzaNumber) || !['landscape', 'portrait'].includes(orientation)) {
  console.error('Usage: npm run prompt:build -- --daskam=1 --sloka=1 --orientation=landscape|portrait');
  process.exit(1);
}

const root = process.cwd();
const daskamSlug = `d${String(daskamId).padStart(3, '0')}`;
const stanzaSlug = `s${String(stanzaNumber).padStart(3, '0')}`;
const readJson = async (...segments) => JSON.parse(await readFile(path.join(root, ...segments), 'utf8'));
const [series, content, plan, approvals] = await Promise.all([
  readJson('art', 'bible', 'series.json'),
  readJson('content', 'daskams', `${daskamSlug}.json`),
  readJson('art', 'plans', `${daskamSlug}.json`),
  readJson('art', 'approved', `${daskamSlug}.json`),
]);
const stanza = content.stanzas.find((item) => item.n === stanzaNumber);
const visual = plan.stanzas.find((item) => item.n === stanzaNumber);
const approval = approvals.stanzas.find((item) => item.n === stanzaNumber);
if (!stanza || !visual || !approval) throw new Error(`No complete studio record for ${daskamSlug}/${stanzaSlug}`);

const characterBibles = await Promise.all((visual.characters ?? []).map((id) => readJson('art', 'bible', 'characters', id, 'character.json')));
const companion = orientation === 'landscape' ? approval.portrait : approval.landscape;
const references = new Set(characterBibles.flatMap((character) => character.local_reference_paths ?? []));
if (companion?.master_path && companion.status !== 'missing') references.add(companion.master_path);
const refList = [...references];

const outputDir = path.join(root, 'artifacts', daskamSlug, stanzaSlug, 'prompts');
await mkdir(outputDir, { recursive: true });
const prior = await readdir(outputDir).catch(() => []);
const versions = prior
  .map((name) => name.match(new RegExp(`^${orientation}-v(\\d{3})\\.md$`)))
  .filter(Boolean)
  .map((match) => Number(match[1]));
const version = Math.max(0, ...versions) + 1;
const outputPath = path.join(outputDir, `${orientation}-v${String(version).padStart(3, '0')}.md`);
const spec = visual.orientations[orientation];

const prompt = `# ImageGen production prompt

Create one ${orientation} illustration at a native ${spec.aspect_ratio} aspect ratio, at the highest available resolution. This is the ${orientation} member of concept ${visual.concept_id}.

## Series identity

${series.style.description}

## Concept to explain

Stanza ${stanza.n} translation: ${stanza.translation_en}

Editorial commentary: ${stanza.commentary_en}

Visual mode: ${visual.scene_brief.mode ?? 'devotional teaching illustration'}
Must show:
${visual.scene_brief.must_show.map((item) => `- ${item}`).join('\n')}

Composition: ${visual.scene_brief.composition ?? ''}
Orientation-specific direction: ${spec.composition_override}
Intended use: ${spec.composition_role}
Tone: ${visual.scene_brief.tone ?? ''}

## Character continuity

${characterBibles.map((character) => `### ${character.display} (${character.id})\n${JSON.stringify(character.visual_bible, null, 2)}\nDepiction: ${character.depiction_rules.notes}\nNever: ${character.never.join('; ')}`).join('\n\n')}

## Hard constraints

- This must be a genuine ${spec.aspect_ratio} recomposition, not a crop or mechanical extension of its companion.
- Preserve the same story moment, character identity, palette, iconography, and emotional tone across both orientations.
- ${[...(series.global_avoid ?? []), ...(visual.scene_brief.avoid ?? [])].join('\n- ')}
- Keep important faces, hands, feet, crowns, and narrative symbols inside safe margins.
- No written Sanskrit or English: communicate entirely through imagery.

## Reference images to attach in Codex ImageGen

${refList.length ? refList.map((item) => `- ${item}`).join('\n') : '- No approved local reference yet; establish continuity before batch production.'}

Reference images guide character identity, palette, and material language. Do not copy their framing. Recompose specifically for ${orientation} ${spec.aspect_ratio}.
`;

await writeFile(outputPath, prompt, { encoding: 'utf8', flag: 'wx' });
console.log(path.relative(root, outputPath));
