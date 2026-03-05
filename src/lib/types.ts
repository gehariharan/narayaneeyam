export interface GlossEntry {
  sa: string;
  en: string;
}

export interface SceneBrief {
  mode: string;
  must_show: string[];
  composition: string;
  tone: string;
  avoid: string[];
}

export interface StanzaImage {
  alt: string;
  src: string;
}

export interface Tamil {
  meaning_ta: string;
  commentary_ta: string;
}

export interface Stanza {
  n: number;
  sanskrit: string;
  gloss_en: GlossEntry[];
  meaning_en: string;
  commentary_en: string;
  translation_en: string;
  translation_source?: string;
  stanza_roman: string;
  stanza_roman_source?: string;
  image: StanzaImage;
  tamil: Tamil;
  characters: string[];
  scene_brief: SceneBrief;
}

export interface DaskamData {
  id: number;
  title: string;
  source: { sanskrit_english: string };
  stanzas: Stanza[];
}

export interface DaskamIndexEntry {
  id: number;
  title: string;
  description: string;
  status: 'draft' | 'published';
  slokaCount: number;
  updatedAt: string;
}

export interface DaskamIndex {
  version: number;
  daskams: DaskamIndexEntry[];
}
