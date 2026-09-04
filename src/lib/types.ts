export interface GlossEntry {
  sa: string;
  en: string;
}

export interface SceneBrief {
  mode?: string;
  must_show?: string[];
  composition?: string;
  tone?: string;
  avoid?: string[];
}

export interface StanzaImage {
  alt: string;
  landscape: { src: string };
  portrait?: { src: string };
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
  review_status?: string;
}

export interface DaskamData {
  schema_version?: number;
  id: number;
  slug?: string;
  title: string;
  description: string;
  editorial_status?: string;
  source: { sanskrit_english: string };
  stanzas: Stanza[];
}
