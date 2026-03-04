#!/usr/bin/env python3
"""Import per-sloka English Translation from Vignanam meaning page into daskam01.json.

Source: https://vignanam.org/meaning/english/narayaniyam-dashaka-1.html

Writes `translation_en` for slokas 1-10.
"""

import json
import re
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
OUT = REPO / 'src' / 'content' / 'daskam01.json'
URL = 'https://vignanam.org/meaning/english/narayaniyam-dashaka-1.html'


def fetch_text(url: str) -> str:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    html = data.decode('utf-8', errors='ignore')
    # naive html->text
    html = re.sub(r'<br\s*/?>', '\n', html, flags=re.I)
    html = re.sub(r'</p>', '\n\n', html, flags=re.I)
    html = re.sub(r'<[^>]+>', '', html)
    return html


def parse_translations(txt: str) -> dict[int, str]:
    # Split into blocks by "ślōkaḥ" marker
    parts = txt.split('ślōkaḥ')
    out = {}
    for part in parts[1:]:
        # find sloka number marker like "॥ 4 ॥" or "॥4॥"
        m = re.search(r'॥\s*([0-9]{1,2})\s*॥', part)
        if not m:
            continue
        n = int(m.group(1))
        # translation section starts at 'Translation'
        t = part.split('Translation', 1)
        if len(t) < 2:
            continue
        after = t[1]
        # take until next 'ślōkaḥ' or 'Meaning' of next (already split), so just trim and stop at 'ślōkaḥ' if present
        # remove 'Meaning' if appears again (shouldn't)
        after = after.split('ślōkaḥ', 1)[0]
        # stop at page footer
        after = after.split('Browse Related', 1)[0]
        after = after.split('Browse Related Categories', 1)[0]
        # collapse whitespace
        after = re.sub(r'\s+', ' ', after).strip(' -:\n\t')
        if after:
            out[n] = after
    return out


def main():
    txt = fetch_text(URL)
    trans = parse_translations(txt)
    d = json.loads(OUT.read_text(encoding='utf-8'))
    for s in d['stanzas']:
        n = s['n']
        if n in trans:
            s['translation_en'] = trans[n]
            s.setdefault('translation_source', URL)
    OUT.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('Imported translations for slokas:', sorted(trans.keys()))


if __name__ == '__main__':
    main()
