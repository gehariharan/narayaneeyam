# D045 landscape candidates: independent exact-checksum review

Reviewed independently against the frozen D045 plan, series bible, cast contracts, canonical stanza content, reference map and supplied photos. Each candidate was inspected individually at native resolution and with focused crops stored only under this worktree's `.review-scratch/`. No project file, candidate, master or approval manifest was changed. This report records visual review only; it is not artwork approval.

## Contract and source-byte verification

The contract paths below were read. `sha256sum -c` reported `OK` for every expected path and digest. Their actual SHA-256 values therefore equal the frozen expected values:

| Read-only file | Actual SHA-256 |
|---|---|
| `data/d045-production/review-contract-f/art/plans/d045.json` (frozen final plan) | `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5` |
| `data/d045-production/review-contract-f/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d045-production/review-contract-f/art/bible/characters/balarama/character.json` | `8a02d67fd36a52f70d1a1a37cc6c91e65bfd87aa32105fa424d641bd6024d6c9` |
| `data/d045-production/review-contract-f/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `data/d045-production/review-contract-f/art/bible/characters/krishna-vraja-toddler/character.json` | `9e920c251c4a39e982842eab09f3821299ba056898ba733e62bc63b3562040ad` |
| `data/d045-production/review-contract-f/art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `data/d045-production/review-contract-f/art/bible/characters/rohini/character.json` | `a0f4fd173964c8d54aac106880fa086f676c27ecc433b19b68426abe94c10ea1` |
| `data/d045-production/review-contract-f/art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `data/d045-production/review-contract-f/art/bible/characters/vraja-boys/character.json` | `70cedf227d0ad65abc880fa42062a4aa38e8d2f9e08f21d14fee619e5914ee53` |
| `data/d045-production/review-contract-f/art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| Worktree `content/sources/d045/reference-map.json` | `03a2e454f3ac51d1d68a06bf61273088a8ec41fefca2021449c1b27ee43b67ac` |
| Worktree `intake/D045/photo-captions.txt` | `0b380daa4805518712b9e3a41adc75bd7421381a847b9b50845cddf809e77831` |

The six selected candidate files, six local numbered references, both D001 rendering references, and the source-map/caption files all verified `OK` against the brief-generated manifest. The same six numbered reference photos were present in OneDrive and independently verified `OK` against their expected digests. There were no checksum mismatches. The frozen plan binds the selected scenes and versions at [d045.json:45-347](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/plans/d045.json:45); the scene mappings and disclosed conflicts are at [reference-map.json:13-70](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/content/sources/d045/reference-map.json:13), with canonical stanza entries at [d045.json:17-72](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/content/daskams/d045.json:17). Character requirements used in the findings include toddler Krishna [character.json:16-34](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/characters/krishna-vraja-toddler/character.json:16), Balarama [character.json:16-31](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/characters/balarama/character.json:16), Yashoda [character.json:16-29](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/characters/yashoda/character.json:16), Rohini [character.json:16-27](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/characters/rohini/character.json:16), sages [character.json:12-20](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/characters/sages/character.json:12), and gopa boys [character.json:16-27](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/characters/vraja-boys/character.json:16). Series palette and presentation rules are in [series.json:4-51](/home/gehariharan/firstmate-narayaneeyam-mate/data/d045-production/review-contract-f/art/bible/series.json:4).

## How the review was performed

- Ran `sha256sum -c` on `.review-scratch/expected.sha256`, generated programmatically from the brief's expected values, then reran it after inspection. All 26 entries returned `OK` both times. Ran `sha256sum -c` on `.review-scratch/onedrive-reference.sha256`; all six entries returned `OK`.
- Opened each of the six candidate PNGs and its mapped photo individually at native resolution. Candidate dimensions from the plan and image headers are 1672x941 for stanzas 1, 2 and 5; 1671x941 for stanzas 3, 4 and 6.
- Made and viewed focused crops with ImageMagick `magick ... -crop ... +repage <absolute .review-scratch output>`; expanded detail views were also written only beneath `.review-scratch/`. No input was modified.
- Measured skin patches by extracting 17x17 RGB crops with ImageMagick and taking per-channel medians in Python. Coordinates below are in native candidate pixels. `R−B` is the measured median red minus blue. The approximate warm-brown guide is 120; visual reading is reported separately.
- Read the frozen JSON, `STUDIO.md`, chapter content, source map and captions. Used `nl -ba`/`rg` to locate plan, content, map and character lines. No existing D045 review record or report was read.

## Candidate findings

### Stanza 1 — `candidate-v007.png`

- **Version and binding:** v007; SHA-256 `8ab7fb4a0457e8f40d0d2978cd313ae5ec2473108bbcc1d78467d8117aa32db2`; plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`. Review time: 2026-11-26T02:10:28Z.
- **Anatomy:** Both crawling toddlers have connected limbs and distinct bodies; no duplication, fusion, or malformed joints.
- **Faces:** Both faces are clear and natural for the childlike mural style. Krishna's forehead is bare.
- **Hands/feet:** All four visible hands have five digits each; all four visible feet have five toes each. Anklets are attached and legible.
- **Clothing and cast:** The two boys are distinct infant/toddler-scale figures in simple pale cloth and small ornaments. Their exposed upper bodies are ordinary child dress; no sexualised framing.
- **Text/signature artifacts:** No text, signature, watermark, or overlay visible in the sky, courtyard floor, foliage, or corners.
- **Scene/reference fidelity:** The two boys crawl briskly on hands and knees in a household courtyard. Photo 001 broadly matches the crawling-twin episode; its ornate style is not copied.
- **Character/deity contract:** Balarama skin-only patch at (570,380): median RGB (146,74,48), `R−B=98`; reads as natural warm brown, not orange. Krishna face patch at (1300,400): median RGB (45,50,104), `B−R=59`, a matte deep indigo-blue. No crown, forehead mark, or extra limbs.
- **Verdict: pass.**

### Stanza 2 — `candidate-v004.png`

- **Version and binding:** v004; SHA-256 `cb611b459b16a7d4795095b50fdf699729ef148a1636442a01014e865dae4fee`; plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`. Review time: 2026-11-26T02:10:28Z.
- **Anatomy:** The seated brothers are distinct and proportionate; no fused limbs or duplicate features.
- **Faces:** Both smiling faces are well formed, with small new teeth visible and loose curls crossing the forehead area; Krishna's forehead remains bare.
- **Hands/feet:** Each of the four visible hands has five digits. All four visible feet show five toes; armlets sit at the wrists as the plan calls for.
- **Clothing and cast:** Simple cream cloth and modest gold-painted small ornaments; no exposure beyond ordinary child dress.
- **Text/signature artifacts:** No readable text, signature, watermark, or overlay in the full image or corners.
- **Scene/reference fidelity:** The side-by-side smiling twins and visible lotus feet match stanza 2. Photo 002 is a strong episode match for the twin-child smile; the candidate does not reproduce its source rendering style.
- **Character/deity contract:** Balarama cheek patch at (500,200): median RGB (89,38,12), `R−B=77`; reads as naturally deep warm brown, not orange. Krishna face patch at (1030,220): median RGB (48,52,114), `B−R=66`, matte indigo-blue. Both are young children, not royal figures.
- **Verdict: pass.**

### Stanza 3 — `candidate-v012.png`

- **Version and binding:** v012; SHA-256 `d3aa1c1ff9166ec9293b14a36f44a548ca85e0e13100b837d66fdf047bbbad5f`; plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`. Review time: 2026-11-26T02:10:28Z.
- **Anatomy:** Both running twins are fully visible with connected arms and legs. Three distant followers remain separate figures; their small size makes fine digits unresolvable, with no visible defect at that scale.
- **Faces:** The main boys' faces are clear and turned back toward the followers; no malformed or duplicate faces. Krishna has a bare forehead.
- **Hands/feet:** Each of the four visible main-character hands has five digits; each of the four visible feet has five toes.
- **Clothing and cast:** Simple cream and yellow child wraps; all figures remain distinct and modestly dressed.
- **Text/signature artifacts:** No text, signature, watermark, or overlay visible in the foliage, path, ground, or corners.
- **Scene/reference fidelity:** The image clearly depicts the plan's run-away/look-back moment and does not depict mud or maternal lifting. The disclosed reference deviation is present: mapped photo 003 shows the stanza-4 mud-cleaning episode despite its stanza-3 number/caption. I judged this candidate on its planned stanza-3 scene and all other criteria.
- **Character/deity contract:** Balarama cheek patch at (720,260): median RGB (184,104,56), `R−B=128`, slightly above the approximate 120 guide; on visual inspection it reads as warm sienna brown, not saturated orange. Krishna face patch at (1240,250): median RGB (45,49,119), `B−R=74`, matte indigo-blue. Their ages, plain child cloth and ordinary two-arm anatomy fit contract.
- **Verdict: pass.**

### Stanza 4 — `candidate-v018.png`

- **Version and binding:** v018; SHA-256 `67ae49667d9e66e9be39832bfff1d5408012de145b49f85ded74f1bb61474959`; plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`. Review time: 2026-11-26T02:10:28Z.
- **Anatomy:** Two children, two adult mothers and three sages are present as separate bodies. The mothers' arms connect naturally while holding the children; no extra or fused limbs are visible. The upper-register sages are small; fine digits are not resolvable at that scale and no visible defect appears.
- **Faces:** Both mothers and the two children have readable, well-formed faces. The three sages are individually distinguishable; Krishna's forehead is bare.
- **Hands/feet:** Countable visible adult and child hands have five digits. The children's visible muddy feet each show five toes; mud does not conceal a visible digit error.
- **Clothing and cast:** Both children are modestly clothed; mud is confined to limbs and clothing as planned. The two mothers wear distinct cream/saffron and rose/olive village dress; their jewelry is decorative but does not read as palace regalia. Sages wear simple ascetic cloth.
- **Text/signature artifacts:** No text, signature, watermark, or overlay visible in the sky, ground, or corners.
- **Scene/reference fidelity:** The candidate depicts the muddy twins being lifted and embraced by two distinct mothers, with worshipping sages above. The disclosed reference deviations are present: photo 003 is the numbered/captioned stanza-3 item whose visual is mud-cleaning, and photo 004 depicts nursing, not stanza 4. I judged the candidate against the stanza-4 plan and all other criteria.
- **Character/deity contract:** Yashoda patch at (335,310): median RGB (183,110,69), `R−B=114`; Rohini patch at (1310,320): median RGB (189,117,75), `R−B=114`. Both read as natural medium brown, not orange. Krishna cheek patch at (560,370): median RGB (85,110,236), `B−R=151`; visibly blue, matte and distinct from the brown cast. The children remain two-armed infant/toddlers; mothers are visually distinct and not merged.
- **Verdict: pass.**

### Stanza 5 — `candidate-v009.png`

- **Version and binding:** v009; SHA-256 `5f4c72b555b8974501fa4651630add684c70a2bdef549741a63077c5d6766935`; plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`. Review time: 2026-11-26T02:10:28Z.
- **Anatomy:** Yashoda holds one child securely on her lap. Her arms and the child's arm are connected and proportionate; no duplicate limbs or malformed joints.
- **Faces:** Yashoda's and Krishna's faces are clearly formed and smiling toward each other; no duplicate features. Krishna has short curls and a bare forehead.
- **Hands/feet:** Krishna's visible open hand has five digits; both visible Yashoda hands have five digits each. The child's feet are hidden by the wrap and lap, so no foot count is claimed.
- **Clothing and cast:** Yashoda's cream/saffron sari and modest jewelry fit her contract. Krishna is fully covered in simple yellow cloth; there is no exposed skin beyond ordinary dress or sexualised framing.
- **Text/signature artifacts:** No text, signature, watermark, or overlay visible in the wall, courtyard, foliage, or corners.
- **Scene/reference fidelity:** The lap-held child pauses and smiles at Yashoda in the feeding/nursing scene. The disclosed near-duplicate reference condition is present: photos 004 and 005 are near-duplicate nursing images; photo 005 is the stanza-5 anchor, while photo 004 is not separate stanza-4 coverage.
- **Character/deity contract:** Yashoda cheek patch at (850,210): median RGB (120,69,40), `R−B=80`; reads as natural warm brown, not orange. Krishna remains a single small indigo-blue toddler with two arms and simple cloth. No crown, tilak, royal costume, or palace jewelry.
- **Verdict: pass.**

### Stanza 6 — `candidate-v004.png`

- **Version and binding:** v004; SHA-256 `46a7cb9d9355cd860cfb270e65c01ef13a3e3226e203ba6fa5cfad858b9e029e`; plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`. Review time: 2026-11-26T02:10:28Z.
- **Anatomy:** Krishna and three distinct gopa boys run together. Their torso/arm connections and proportions are natural; the hand restraining Krishna's arm is attached to the boy, not an extra Krishna limb. Calves, cat and parrot have coherent visible anatomy. A peripheral boy runs naturally through the left mural edge.
- **Faces:** The four child faces are individually formed, with no accidental duplication. Krishna's forehead is bare.
- **Hands/feet:** Krishna's raised open hand and the waving boy's open hand each show five digits; visible main-character feet show five toes. Other hands are closed or gripping, with no visible digit defect.
- **Clothing and cast:** Krishna wears simple yellow child cloth and anklets. The boys' bare upper torsos are ordinary traditional dress; their muted wraps and small beads are modest. No palace costume or exposed skin beyond ordinary dress.
- **Text/signature artifacts:** No readable text, signature, watermark, or overlay in the sky, houses, foliage, ground, or corners.
- **Scene/reference fidelity:** Village houses, chasing Krishna, gopa boys restraining him, parrot, cat and calves match the scene plan. The disclosed reference limitation is present: photo 006 is broad pastoral context only and does not depict the chase, boys or pets. The candidate follows the plan rather than copying the photo's watermark or “No.4” overlay.
- **Character/deity contract:** Three boy skin-only patches: (165,245) median RGB (192,122,76), `R−B=116`; (320,245) RGB (190,119,75), `R−B=115`; (585,285) RGB (89,62,36), `R−B=53`. They read as natural warm-brown shades, not orange. Krishna remains the single indigo-blue toddler, with ordinary two-armed anatomy and no forehead mark.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All six exact candidate versions pass this independent visual review against the frozen plan and character bytes. Keep every image unapproved; only explicit user approval can update the approval manifest. The disclosed source-photo conflicts and weak-reference conditions above remain accurately stated. This review raises no unresolved question requiring the captain; the pending captain art approval remains the standing state, not a call created by this review. Empty captain-call inventory attested through the required completion command.
