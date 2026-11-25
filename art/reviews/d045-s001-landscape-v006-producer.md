# D045 S001 landscape v006 producer visual review

- Outcome: needs-fix
- Inspected at (UTC): 2026-11-24T19:49:17Z
- Candidate SHA-256: `e043c9301cc864cc140ccd0292ef7f270803ecb1b33aa14ee46e8f21012cf800`
- Native dimensions: 1672x941 PNG
- Contracts: {"art/bible/characters/krishna-vraja-toddler/character.json": "9e920c251c4a39e982842eab09f3821299ba056898ba733e62bc63b3562040ad", "art/bible/characters/balarama/character.json": "8a02d67fd36a52f70d1a1a37cc6c91e65bfd87aa32105fa424d641bd6024d6c9"}
- Review method: native full image, enlarged crops of all visible hands and feet, and skin-only median patches.

## Findings

The candidate shows both crawling boys, with attached limbs and no duplicate bodies. Enlarged crops show five separate toe tips on each of the four visible feet. Krishna’s cheek patch (1360,410), 31x31, measures RGB (49,53,105), B−R 56, meeting the indigo threshold. Balarama’s cheek patch at (600,380) is (168,84,39), R−B 129; upper arm at (510,545) is (164,84,42), R−B 122; forearm at (550,610) is (165,66,23), R−B 142. The sampled skin remains orange-leaning and exceeds the approximate R−B 120 ceiling. Candidate v006 is retained and not selected.
