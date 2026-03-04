#!/usr/bin/env python3
"""Import romanized sloka text (IAST-like) from Vignanam English page.

Source: https://vignanam.org/english/narayaniyam-dashaka-1.html
Writes `stanza_roman` for slokas 1-10.
"""

import json
import re
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
OUT = REPO / 'src' / 'content' / 'daskam01.json'
URL = 'https://vignanam.org/english/narayaniyam-dashaka-1.html'


def fetch_text(url: str) -> str:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    html = data.decode('utf-8', errors='ignore')
    html = re.sub(r'<br\s*/?>', '\n', html, flags=re.I)
    html = re.sub(r'</p>', '\n\n', html, flags=re.I)
    html = re.sub(r'<[^>]+>', '', html)
    # collapse excessive blank lines
    html = re.sub(r'\n{3,}', '\n\n', html)
    return html


def parse_stanzas(txt: str) -> dict[int, str]:
    out = {}
    # Find all blocks that end with "॥ n ॥"
    for n in range(1, 11):
        m = re.search(rf"(.+?)\s*॥\s*{n}\s*॥", txt, flags=re.S)
        if not m:
            continue
        block = m.group(0)
        # take last ~6 lines before marker by splitting into lines and taking until marker line
        lines = [ln.strip() for ln in block.splitlines() if ln.strip()]
        # find the line containing the marker
        marker_i = None
        for i, ln in enumerate(lines):
            if re.search(rf"॥\s*{n}\s*॥", ln):
                marker_i = i
                break
        if marker_i is None:
            continue
        stanza_lines = lines[max(0, marker_i-6):marker_i+1]
        stanza = "\n".join(stanza_lines)
        # clean weird characters
        stanza = stanza.replace('Cht', 'cht')
        out[n] = stanza
        # remove this part so next search doesn't match earlier
        txt = txt.split(f"॥ {n} ॥", 1)[-1]
    return out


def main():
    txt = fetch_text(URL)
    st = parse_stanzas(txt)
    d = json.loads(OUT.read_text(encoding='utf-8'))
    for s in d['stanzas']:
        n = s['n']
        if n in st:
            s['stanza_roman'] = st[n]
            s.setdefault('stanza_roman_source', URL)
    OUT.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('Imported roman stanzas:', sorted(st.keys()))


if __name__ == '__main__':
    main()
