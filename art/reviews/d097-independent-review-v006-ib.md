# Independent D097 visual review: stanzas 6–10

## Scope and method

I independently reviewed five landscape candidates, each bound to the exact SHA-256 listed below and to the frozen plan and character-contract bytes in force. I viewed every complete candidate and mapped photo at native resolution, then enlarged focused crops for faces, hands, feet, and (for stanza 10) the cow and calf group. Crops and sampling scratch files were written only below `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/5/narayaneeyam/.review-scratch/`; originals were read-only. There were no image edits, approval-manifest changes, or artwork approvals.

The expected input checksums were assembled into `.review-scratch/input-checksums.sha256` by a Python script from the supplied candidate/reference/contract pairs, then checked with:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/5/narayaneeyam/.review-scratch/input-checksums.sha256'
```

All 26 entries returned `OK`: the five candidates; five mapped local photos; the two D001 rendering references; the two supplied character image references; the final plan; series and eight character contracts; the reference map; and photo captions. Candidate dimensions measured with `identify -format '%f %wx%h\n'` were 1672×941 (S006, S007, S009, S010) and 1671×941 (S008), all native landscape frames. Full-image and detail inspection used `view_image`; focused enlarged scratch crops used ImageMagick `convert -crop ... +repage -resize ... <absolute scratch output>`. Skin measurements used 11×11 skin-only pixel patches from the unmodified candidate files; channel medians were calculated from ImageMagick pixel output. These checks support visual findings and do not establish approval.

## Contract hashes actually read

The full resolved paths are under `/home/gehariharan/firstmate-narayaneeyam-mate/data/d097-production/review-contract-i/` unless noted.

| Contract or review input | SHA-256 |
|---|---|
| `art/plans/d097.json` | `305374da5647aa3e3ed8b59d289fb6cf27396f6d50013857e0ef0c240dda3dbf` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/markandeya/character.json` | `35ad1eeceb9a913642865171d8b0b8c82f8cbf0a774e8182761fcae0ee857e15` |
| `art/bible/characters/nara/character.json` | `d471169d678bac66c0dbbc738db053428631dd89457f8f21d2596965419be628` |
| `art/bible/characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/uma-d029/character.json` | `10a67fe2054d31325697e899df1f9905700e4145fed6acf4a9c8bb7ed10e8d03` |
| `content/sources/d097/reference-map.json` in the Narayaneeyam worktree | `ffce89dccf07e4e94f5a1d3bffb5d3fb0b57d286730e94f048ddcf690d4436ad` |
| `intake/D097/photo-captions.txt` in the Narayaneeyam worktree | `a3e81d036b428d227f27d59eda3ece2f24dd7dcaed033a5f28ad7a4fb94812fa` |

The series contract specifies matte mineral mural colors, shallow space, a full-bleed frame, and no text/watermarks (series.json lines 4–23, 34–49). The relevant character expectations include warm-brown human skin and natural anatomy for Mārkaṇḍeya and Nara (their character.json lines 5–21 and 5–23), deep indigo-blue two-armed infant Krishna in this story phase (infant-krishna/character.json lines 10–34), and deep-blue Guruvayurappan with tasteful crown and regal but simple sacred ornaments (guruvayurappan/character.json lines 18–37). Shiva's provisional contract calls out one head and two arms and cool blue-grey skin (shiva/character.json lines 11–21); its note scopes the refusal gesture to a separate stanza-7 refuge scene (line 9), so I did not impose that gesture on this D097 stanza-9 scene. Uma's contract calls for one proportionate two-armed figure, warm-brown skin, modest ochre jewelry, and a deep-maroon sari (uma-d029/character.json lines 5–12).

The chapter content was read for stanzas 6–10 to map each scene to its canonical-story commentary (content/daskams/d097.json lines 102–174). The final plan's scene requirements and selected versions are at `art/plans/d097.json` lines 268–510. The reference map identifies photos 006–010 and their specific correspondences at `content/sources/d097/reference-map.json` lines 28–65. All five reviewed stanzas have mapped photos; the map's no-reference list is only stanzas 3–5 (line 133). The supplied caption export has no descriptive caption for photos 006–010 (`intake/D097/photo-captions.txt`, corresponding headings). D001 S004/S008 were used only as rendering references, and the Guruvayurappan and infant-Krishna sheets only for identity, as the plan directs.

The stored producer status strings in the plan were not used as findings; every verdict and image-specific observation below comes from my own inspection and measurements.

## Findings

### Stanza 6 — candidate v003

- **Candidate and exact binding:** `artifacts/d097/s006/landscape/candidate-v003.png`; SHA-256 `b65bddc1c4dc275b03f1a899a2d1663e4bed26682e9031cf77af0c032102031b`. Review time: **2026-11-25 23:33:57 UTC**.
- **Anatomy:** Three adult figures remain distinct and proportionate; no extra, missing, fused, or detached limbs are visible. The blue Lord has one head and two attached arms. The seated sage's crossed legs and the standing ascetics' limbs connect naturally.
- **Faces:** Nara, Nārāyaṇa, and Mārkaṇḍeya have coherent, distinct faces and readable expressions. No malformed or duplicated person is visible.
- **Hands/feet:** Both of the Lord's open hands show five digits each; Mārkaṇḍeya's open receiving hand shows five fingers, with his other hand in a joined gesture. Nara's hands are occupied at the staff and water pot. The exposed feet of Nara and Nārāyaṇa each show five toes; the sage's exposed foot shows five toes, with the other foot covered by the crossed pose. No visible digit is malformed.
- **Clothing and cast:** The three figures wear modest traditional ascetic/deity clothing. The two sages' exposed upper torsos are ordinary traditional dress. No extra person appears. Nārāyaṇa's crown, shawl, and jewelry are prominent but remain within the Guruvayurappan contract's tasteful sacred-ornament range; nothing reads as disallowed palace regalia.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or decorative outer border is visible, including at the corners and ground/water details.
- **Scene and reference fidelity:** The composition shows a riverside hermitage, the arriving blue divine figure and human companion, and the seated praying sage. It preserves photo 006's story context while recomposing into the planned mural. The map itself says the photograph does not name the visitors and labels their Nara/Nārāyaṇa identification medium-confidence (reference-map.json lines 28–33); that limitation is disclosed and present, and the image follows the written plan on the remaining scene details.
- **Character/deity contract and color:** Nara and Mārkaṇḍeya read as natural warm brown, not orange. Skin-only 11×11 medians: Nara cheek at (340,165), RGB (166,95,60), R−B **106**; Mārkaṇḍeya cheek at (1265,390), RGB (168,97,60), R−B **108**. Nārāyaṇa reads deep blue; cheek at (648,140), RGB (58,91,116), B−R **58**. The simple ochre/cream clothing and deep-blue divine skin fit the contracts.
- **Verdict: PASS** — for this exact checksum only. Artwork remains unapproved.

### Stanza 7 — candidate v005

- **Candidate and exact binding:** `artifacts/d097/s007/landscape/candidate-v005.png`; SHA-256 `12afc3e58701dd3effc5d68f882bcc5cf402d101726632fb99691a697f48acec`. Review time: **2026-11-25 23:33:57 UTC**.
- **Anatomy:** One mature sage and one two-armed infant are visible. Limbs attach naturally; neither figure is duplicated. The infant's raised foot reaches the mouth as required, visible in the enlarged infant crop. No malformed face or body is apparent.
- **Faces:** The sage's face remains clear despite the distance. The infant has rounded newborn proportions, a calm face, dark curls, and no forehead mark. The main figures are small in the wide composition, but visible details at that pixel scale are sound; miniature-scale details are not treated as defects.
- **Hands/feet:** Both sage palms are open and show five digits each. The infant's two hands meet around the raised foot and mouth; their fine digits overlap and are not separately countable, but no malformed or extra finger is visible. The infant's extended foot shows five toes; toes on the raised foot are partly hidden by the hands/mouth. The sage's lower body is naturally submerged, with no cut-off key extremity.
- **Clothing and cast:** The infant wears muted yellow cloth and a small feather cue; the sage wears a modest cream shoulder cloth. No exposed skin beyond ordinary traditional dress or sexualized framing appears. There is no second infant or adult Vishnu.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or border is visible. Close review of the lower water and corners found only wave and mural detail.
- **Scene and reference fidelity:** The full frame clearly presents the banyan leaf, infant and sage in a broad indigo deluge. It follows the mapped photo 007 while omitting that photo's dramatic light rays in keeping with the final plan. The toe-near-mouth action is present in the enlarged crop.
- **Character/deity contract and color:** The infant is deep indigo-blue rather than pale blue or neon; face patch at (1340,335), RGB (80,100,133), B−R **53**, and chest patch at (1365,390), RGB (83,103,140), B−R **57**. The sage cheek at (278,545) has RGB (156,96,65), R−B **91** and reads natural warm brown. The two-armed human-infant form, bare forehead, feather cue, and soft matte rendering match the contract.
- **Verdict: PASS** — for this exact checksum only. Artwork remains unapproved.

### Stanza 8 — candidate v011

- **Candidate and exact binding:** `artifacts/d097/s008/landscape/candidate-v011.png`; SHA-256 `3561b8936bf503b4bbd0e7a51854f54234c08ab6e989904cbea0255d2cc88fb9`. Review time: **2026-11-25 23:33:57 UTC**.
- **Anatomy:** One sage and one infant are depicted, without duplicated bodies. The sage is seated with connected arms and crossed legs. The infant's raised foot and two hands meet near the mouth; no malformed or extra limb is visible. The small city and mountain motifs inside the vision are landscape elements, not duplicated characters.
- **Faces:** The sage's face is coherent and directed toward the vision. The enlarged infant face has rounded infant features, clear eyes and mouth, dark curls, and a small feather; no face distortion or forehead mark is visible.
- **Hands/feet:** The sage's two open hands each show five digits. On the partly exposed sage foot, four toe separations are visible and the fifth is hidden by the robe/crossed-leg overlap; no malformed toe is visible, so this is an occlusion observation, not an uncertain finding. The infant's foot resting on the leaf shows five toe tips; its raised foot and both hands are partly overlapped at the mouth, with no visible digit defect.
- **Clothing and cast:** Mārkaṇḍeya's cream/ochre ascetic cloth and the infant's muted yellow wrap are modest. There is one infant only, and no extra people appear in the nested world motif.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or outer border appears. The tiny palace silhouettes contain no legible writing.
- **Scene and reference fidelity:** The composition nests the banyan-leaf infant and flood inside a curved opening over the sage's hermitage, with a miniature sequence of worlds visible within. This is a clear visual interpretation of the breath/world vision in the chapter and plan. Photo 008 is only a symbolic sage-and-cosmos reference and is mapped with medium confidence (reference-map.json lines 44–49); that disclosed limitation is present, and the candidate follows the written scene contract.
- **Character/deity contract and color:** The infant reads as deep blue; face patch (1380,230), RGB (34,80,138), B−R **104**. Mārkaṇḍeya cheek patch (460,382), RGB (153,108,80), R−B **73**, reads natural warm brown. No uncontracted ornament, inconsistent deity color, or glossy finish is visible.
- **Verdict: PASS** — for this exact checksum only. Artwork remains unapproved.

### Stanza 9 — candidate v014

- **Candidate and exact binding:** `artifacts/d097/s009/landscape/candidate-v014.png`; SHA-256 `b1583ff43f497dfe34784c3cd7d1cfc38d5b8427aaffce99b64fc4c6c7697586`. Review time: **2026-11-25 23:33:57 UTC**.
- **Anatomy:** Shiva has one head and two attached arms; Uma and Mārkaṇḍeya each have one head, two attached arms, and two legs. The three people are separate, with no fused or duplicated body. Shiva's other arm ends in the open hand beside Uma; its five fingers are visible. The trident is held by the other hand, not an extra arm.
- **Faces:** Shiva's serene face, Uma's composed face, and Mārkaṇḍeya's reverent face are coherent and distinct. The small traditional forehead details are visible; no distorted or duplicated face appears.
- **Hands/feet:** Shiva's open hand shows five fingers; his other hand grips the trident. Uma's hands are joined at her waist; the sage's hands are joined in reverence. At the feet, Shiva's two visible feet and Uma's two visible feet each show five toes; the sage's exposed foot shows five toes, with his other foot covered by the seated pose. No visible digit is malformed.
- **Clothing and cast:** Uma wears a modest deep-maroon sari with cream edging and restrained ochre ornaments. Shiva's bare male upper torso is ordinary ascetic dress; the sage wears a cream shoulder cloth and dhoti. The small flower-and-lingam offering is a permitted scene cue. No second Vishnu or additional person is present.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or border is visible. Close checks of the dark ground, hut, and lower corners found no artifacts.
- **Scene and reference fidelity:** The hermitage visit by Shiva and Gaurī, with Mārkaṇḍeya and a small offering, matches the plan and mapped photo 009. The reference map notes that photo 009 also contains a separate devotional Shiva panel (reference-map.json lines 52–57); that extra panel is not reproduced, consistent with the plan's instruction to show one Shiva and no second Vishnu. The image is judged against the specified visit scene.
- **Character/deity contract and color:** Shiva reads muted cool blue-grey with the expected ash stripes and crescent. Uma is warm brown in a maroon sari. Skin-only 11×11 medians: Uma cheek at (573,190), RGB (158,93,51), R−B **107**; Mārkaṇḍeya cheek at (1270,395), RGB (146,82,44), R−B **102**; Mārkaṇḍeya upper arm at (1265,535), RGB (152,86,45), R−B **107**. Both human figures read warm brown rather than orange. The visible shoulder-touching open hand is not the stanza-7 refusal cue; the Shiva character note scopes that cue to a different scene (shiva/character.json line 9), while the D097 stanza-9 plan governs this depiction.
- **Verdict: PASS** — for this exact checksum only. Artwork remains unapproved.

### Stanza 10 — candidate v002

- **Candidate and exact binding:** `artifacts/d097/s010/landscape/candidate-v002.png`; SHA-256 `b7e9b36225f3dab11b4afdedf9447f47d71c1adddd634363b93413ab9a576ded`. Review time: **2026-11-25 23:33:57 UTC**.
- **Anatomy:** One blue Lord is seated in a natural two-armed posture. The clasped hands are connected and proportionate. No legs or feet are exposed for toe counting. The cow-and-calf group was enlarged: both adult cows have coherent heads and attached legs, and both recumbent calves remain distinct; no extra or fused animal is apparent. The smallest hoof and digit details are below reliable resolution and are observations under the miniature rule, not defects.
- **Faces:** The Lord's face is calm and symmetrical. The animal faces are simple but coherent at their rendered size. No malformed or duplicated person or creature is visible.
- **Hands/feet:** The Lord's hands are clasped in his lap rather than open, so individual digits are partly overlapped; no extra finger is visible. His feet are covered by the dhoti. No open hand or exposed foot needs a digit count.
- **Clothing and cast:** The Lord wears a yellow dhoti, red-orange shawl, peacock-feather crown, and painted ochre ornaments; these match Guruvayurappan's identity and do not read as excessive palace regalia. Cows provide the pastoral cue beneath/around the Lord. All figures are modestly dressed; no other human figure appears.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or separate outer border is visible. The shrine forms and foliage contain no legible writing.
- **Scene and reference fidelity:** The upper divine abode and three lower realm bands form the planned hierarchy; the Vaikuṇṭha figure is visually distinct above them. The mapped photo 010 is a schematic hierarchy reference with medium-confidence correspondence (reference-map.json lines 60–65); the candidate retains its worlds-above/below structure while using the plan's restrained mural symbolism. No disclosed no-reference condition applies.
- **Character/deity contract and color:** The Lord's face patch at (824,155), RGB (38,66,86), B−R **48**, reads deep blue, not gray or black. The crown, face, shawl, dhoti, and painted ochre jewelry align with the Guruvayurappan contract. Series palette and matte rendering remain consistent.
- **Verdict: PASS** — for this exact checksum only. Artwork remains unapproved.

## Recommendation and captain-call inventory

Keep all five exact candidate versions unapproved pending the separate human artwork approval process. This independent review found no visible defect meeting the supplied needs-fix or uncertain threshold, so I recommend no candidate revision from this review. The image-review verdicts do not approve artwork and do not update `art/approved/d097.json`.

The captain-call inventory raised by this review is empty. The standing pending human art approval is not a decision raised by this review. No Lavish board was requested by the task; this text report is the requested deliverable.
