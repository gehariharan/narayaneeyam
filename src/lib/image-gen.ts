/**
 * Shared image generation logic extracted from scripts/generate-images.mjs.
 * Used by both the CLI script and the admin API endpoint.
 */
import sharp from 'sharp';
import { put } from '@vercel/blob';

// Import content files at runtime (these are static JSON)
import styleData from '../content/style.json';
import charactersData from '../content/characters.json';

interface CharacterVisualBible {
  face: string;
  skin: string;
  hair: string;
  crown: string;
  clothing: string;
  jewelry: string;
  aura: string;
}

interface CharacterEntry {
  id: string;
  display: string;
  depiction_rules: { notes: string };
  visual_bible: CharacterVisualBible;
  never: string[];
}

interface SceneBrief {
  mode?: string;
  must_show?: string[];
  composition?: string;
  tone?: string;
  avoid?: string[];
}

interface StanzaLike {
  n: number;
  commentary_en: string;
  characters?: string[];
  scene_brief?: SceneBrief;
}

/** Build character visual description for prompt */
export function characterBible(ids: string[] = []): string {
  const chars = (charactersData as any).characters as Record<string, CharacterEntry>;
  const parts: string[] = [];
  for (const id of ids) {
    const c = chars[id];
    if (!c) continue;
    const vb = c.visual_bible;
    parts.push(
      `${c.display}: ${vb.face}; ${vb.skin}; ${vb.hair}; ${vb.crown}; ${vb.clothing}; ${vb.jewelry}; ${vb.aura}. Rules: ${c.depiction_rules.notes}. Never: ${c.never.join('; ')}.`
    );
  }
  return parts.join('\n');
}

/** Compose DALL-E prompt from style + characters + scene brief */
export function promptForStanza(s: StanzaLike, daskamId: number): string {
  const style = styleData as any;
  const styleText = style.style_bible.description;
  const negatives = (style.negative as string[]).map((x: string) => `- ${x}`).join('\n');
  const characterIds = s.characters || ['krishna'];

  const brief: SceneBrief = s.scene_brief || {
    mode: 'teaching-illustration',
    must_show: ['A clear symbolic teaching illustration matching the sloka meaning'],
    composition: '16:9; simple; central focus; no readable text',
    tone: 'serene, devotional',
    avoid: ['readable text', 'modern logos'],
  };
  const briefText = brief
    ? [
        `Scene brief mode: ${brief.mode || ''}`,
        brief.must_show ? `Must show: ${brief.must_show.join('; ')}` : '',
        brief.composition ? `Composition: ${brief.composition}` : '',
        brief.tone ? `Tone: ${brief.tone}` : '',
        brief.avoid ? `Avoid: ${brief.avoid.join('; ')}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    : '';

  const base = `${styleText}\n${characterBible(characterIds)}\n${briefText}\nNarration/context (do not depict as text): Narayaneeyam Daskam ${daskamId}, Sloka ${s.n}: ${s.commentary_en}`;
  return `${base}\nHard constraints:\n${negatives}`;
}

/** Crop image to 16:9 and create WebP variant using sharp */
export async function processImage(pngBuffer: Buffer): Promise<{ masterPng: Buffer; webWebp: Buffer }> {
  // Crop to 16:9 from center (1536x864 from 1536x1024)
  const metadata = await sharp(pngBuffer).metadata();
  const w = metadata.width || 1536;
  const h = metadata.height || 1024;
  const targetH = Math.round((w * 9) / 16);
  const top = Math.round((h - targetH) / 2);

  const masterPng = await sharp(pngBuffer)
    .extract({ left: 0, top: Math.max(0, top), width: w, height: Math.min(targetH, h) })
    .png()
    .toBuffer();

  const webWebp = await sharp(masterPng)
    .resize(1280, 720, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toBuffer();

  return { masterPng, webWebp };
}

/** Upload processed images to Vercel Blob */
export async function uploadToBlob(
  daskamId: number,
  slokaNum: number,
  masterPng: Buffer,
  webWebp: Buffer
): Promise<{ masterUrl: string; webUrl: string }> {
  const token = import.meta.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN || '';
  const prefix = `daskam-${String(daskamId).padStart(2, '0')}`;
  const baseName = `d${String(daskamId).padStart(2, '0')}-s${String(slokaNum).padStart(2, '0')}`;

  const [masterResult, webResult] = await Promise.all([
    put(`${prefix}/masters/${baseName}.png`, masterPng, {
      access: 'public',
      contentType: 'image/png',
      addRandomSuffix: false,
      allowOverwrite: true,
      token,
    }),
    put(`${prefix}/web/${baseName}.webp`, webWebp, {
      access: 'public',
      contentType: 'image/webp',
      addRandomSuffix: false,
      allowOverwrite: true,
      token,
    }),
  ]);

  return { masterUrl: masterResult.url, webUrl: webResult.url };
}
