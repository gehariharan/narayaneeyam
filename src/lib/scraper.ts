/**
 * JS port of Python scraping scripts for vignanam.org
 * Scrapes romanized text, translations, and Sanskrit for a given daskam number.
 */

interface ScrapedStanza {
  n: number;
  sanskrit: string;
  stanza_roman: string;
  stanza_roman_source: string;
  translation_en: string;
  translation_source: string;
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Narayaneeyam/1.0)' },
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} for ${url}`);
  let html = await res.text();
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<\/p>/gi, '\n\n');
  html = html.replace(/<[^>]+>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  // Decode HTML entities
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  html = html.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
  html = html.replace(/<!--[\s\S]*?-->/g, ''); // strip HTML comments
  return html;
}

/** Scrape romanized (IAST) stanza text from vignanam.org English page */
export async function scrapeRoman(daskamNum: number): Promise<Map<number, string>> {
  const url = `https://vignanam.org/english/narayaniyam-dashaka-${daskamNum}.html`;
  let txt = await fetchText(url);
  const out = new Map<number, string>();

  for (let n = 1; n <= 15; n++) {
    const markerRegex = new RegExp(`(.+?)\\s*॥\\s*${n}\\s*॥`, 's');
    const m = txt.match(markerRegex);
    if (!m) continue;

    const block = m[0];
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);

    // Find line with marker
    let markerIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (new RegExp(`॥\\s*${n}\\s*॥`).test(lines[i])) {
        markerIdx = i;
        break;
      }
    }
    if (markerIdx === -1) continue;

    const stanzaLines = lines.slice(Math.max(0, markerIdx - 6), markerIdx + 1);
    let stanza = stanzaLines.join('\n');
    stanza = stanza.replace(/Cht/g, 'cht');
    out.set(n, stanza);

    // Remove matched part so next search doesn't re-match
    txt = txt.split(`॥ ${n} ॥`).slice(1).join(`॥ ${n} ॥`);
  }

  return out;
}

/** Scrape English translations from vignanam.org meaning page */
export async function scrapeTranslation(daskamNum: number): Promise<Map<number, string>> {
  const url = `https://vignanam.org/meaning/english/narayaniyam-dashaka-${daskamNum}.html`;
  const txt = await fetchText(url);
  const out = new Map<number, string>();

  const parts = txt.split('ślōkaḥ');
  for (const part of parts.slice(1)) {
    const m = part.match(/॥\s*(\d{1,2})\s*॥/);
    if (!m) continue;
    const n = parseInt(m[1], 10);

    const tSplit = part.split('Translation');
    if (tSplit.length < 2) continue;

    let after = tSplit[1];
    after = after.split('ślōkaḥ')[0];
    after = after.split('Browse Related')[0];
    after = after.replace(/\s+/g, ' ').trim().replace(/^[\s\-:]+|[\s\-:]+$/g, '');

    if (after) out.set(n, after);
  }

  return out;
}

/** Scrape Sanskrit (Devanagari) from narayaneeyam-firststep.org */
export async function scrapeSanskrit(daskamNum: number): Promise<Map<number, string>> {
  const url = `https://narayaneeyam-firststep.org/dashaka${daskamNum}`;
  const out = new Map<number, string>();

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Narayaneeyam/1.0)' },
    });
    if (!res.ok) return out;
    let html = await res.text();

    // Extract Devanagari blocks — they typically appear between ॥ markers
    html = html.replace(/<br\s*\/?>/gi, '\n');
    html = html.replace(/<\/p>/gi, '\n\n');
    html = html.replace(/<[^>]+>/g, '');

    for (let n = 1; n <= 15; n++) {
      const pattern = new RegExp(`([\\s\\S]*?)॥\\s*${n}\\s*॥`, 's');
      const m = html.match(pattern);
      if (!m) continue;

      const block = m[0];
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);

      let markerIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (new RegExp(`॥\\s*${n}\\s*॥`).test(lines[i])) {
          markerIdx = i;
          break;
        }
      }
      if (markerIdx === -1) continue;

      // Take Devanagari lines (contains Unicode range \u0900-\u097F)
      const devLines = lines.slice(Math.max(0, markerIdx - 6), markerIdx + 1)
        .filter(l => /[\u0900-\u097F]/.test(l));

      if (devLines.length > 0) {
        out.set(n, devLines.join('\n'));
      }

      html = html.split(`॥ ${n} ॥`).slice(1).join(`॥ ${n} ॥`);
    }
  } catch {
    // Sanskrit scraping is best-effort
  }

  return out;
}

/** Scrape all sources for a daskam and return pre-populated stanza skeletons */
export async function scrapeAll(daskamNum: number): Promise<ScrapedStanza[]> {
  const romanUrl = `https://vignanam.org/english/narayaniyam-dashaka-${daskamNum}.html`;
  const transUrl = `https://vignanam.org/meaning/english/narayaniyam-dashaka-${daskamNum}.html`;

  // Run scrapes in parallel, gracefully handle failures
  const [romanMap, transMap, sanskritMap] = await Promise.all([
    scrapeRoman(daskamNum).catch(() => new Map<number, string>()),
    scrapeTranslation(daskamNum).catch(() => new Map<number, string>()),
    scrapeSanskrit(daskamNum).catch(() => new Map<number, string>()),
  ]);

  // Determine how many slokas — use max across all sources, default 10
  const allNums = new Set([...romanMap.keys(), ...transMap.keys(), ...sanskritMap.keys()]);
  const maxN = allNums.size > 0 ? Math.max(...allNums) : 10;

  const stanzas: ScrapedStanza[] = [];
  for (let n = 1; n <= maxN; n++) {
    stanzas.push({
      n,
      sanskrit: sanskritMap.get(n) || '',
      stanza_roman: romanMap.get(n) || '',
      stanza_roman_source: romanMap.has(n) ? romanUrl : '',
      translation_en: transMap.get(n) || '',
      translation_source: transMap.has(n) ? transUrl : '',
    });
  }

  return stanzas;
}
