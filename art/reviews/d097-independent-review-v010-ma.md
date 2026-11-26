# D097 independent landscape candidate review

## Scope and method

I independently reviewed the five selected landscape candidates at native 1672×941 resolution and in enlarged, locally cropped detail views. All verdicts below bind only to the exact candidate SHA-256 shown. I checked anatomy, visible faces and extremities, modest dress, text/signature artifacts, plan scene fidelity, mapped photo context where applicable, and the relevant character contracts. Skin-only 11×11-pixel patches were sampled with ImageMagick and their channel medians calculated from the pixel values; coordinates are candidate-native pixels, origin at the upper left. The crops and scratch outputs are under the reviewer worktree at `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/6/narayaneeyam/.review-scratch/`; no input image was altered.

The candidate, supplied reference, approved Guruvayurappan sheet, frozen plan/series/character contracts, reference map, and captions were checked with `sha256sum -c` against a manifest generated programmatically from the task brief. Every listed item returned `OK`. The relevant OneDrive copies of photos 001 and 002 have the same SHA-256 as the local references. Candidate dimensions are 1672×941 (landscape). Full-frame views were checked for text, signatures, logos, watermarks, frame-edge cuts, and obvious generation defects. No readable text, signature, logo, or watermark was seen in any candidate.

The stanza/photo mapping follows `content/sources/d097/reference-map.json`: photo 001 maps to stanza 1 (lines 10–17); photo 002 maps to stanza 2 (lines 19–25). The plan explicitly discloses no mapped photo for stanzas 3–5 (plan lines 26 and stanza entries at 148–152, 195–200, and 244–248). That disclosed no-reference status is present for those three reviews; they were judged against the written plan and contracts, and against D001 masters only for rendering style. The D097 plan states the series palette and prohibition on an outer border/text at lines 31–32; the selected-scene requirements are cited below.

## Contract and provenance checksums

The values below are the actual files read and match the brief’s expected SHA-256 values:

| File | SHA-256 |
|---|---|
| Frozen final plan `art/plans/d097.json` | `d034006eb1e0cc41d6988e60886b96abc70327ad3e7e015abd56f36fd79b34b2` |
| Frozen series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Markandeya contract | `35ad1eeceb9a913642865171d8b0b8c82f8cbf0a774e8182761fcae0ee857e15` |
| Nara contract | `d471169d678bac66c0dbbc738db053428631dd89457f8f21d2596965419be628` |
| Infant Krishna contract | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| Guruvayurappan contract | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| Indra contract | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| Apsaras contract | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| Shiva contract | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| Uma / Pārvatī contract | `10a67fe2054d31325697e899df1f9905700e4145fed6acf4a9c8bb7ed10e8d03` |
| `content/sources/d097/reference-map.json` | `ffce89dccf07e4e94f5a1d3bffb5d3fb0b57d286730e94f048ddcf690d4436ad` |
| `intake/D097/photo-captions.txt` | `a3e81d036b428d227f27d59eda3ece2f24dd7dcaed033a5f28ad7a4fb94812fa` |

The scene-specific plan evidence is `art/plans/d097.json`: stanza 1 at lines 41–52, stanza 2 at 88–99, stanza 3 at 133–145, stanza 4 at 180–191, and stanza 5 at 229–240. Character evidence is `markandeya/character.json` lines 5–25, `guruvayurappan/character.json` lines 18–37, `indra/character.json` lines 10–20, and `apsaras/character.json` lines 10–20. Series rendering and border rules are `series.json` lines 4–23.

## Candidate findings

Review completion time for each exact-checksum verdict: **2026-11-26T02:40:49Z**.

### Stanza 1 — `candidate-v001.png`

- **Candidate SHA-256:** `e30b096e9b766cd0398d294776a0dcfc589898d67a82ef589b277ef4c7872505`
- **Anatomy:** No people or creatures are present, as required. No anatomical issue.
- **Faces:** No faces are present.
- **Hands/feet:** None are present.
- **Clothing and cast:** No cast or clothing is present; no exposed-skin issue.
- **Text/signature artifacts:** No text, signature, logo, watermark, or border enclosing the frame. The top-corner scrollwork is mural decoration, not an outer frame.
- **Scene and reference fidelity:** The large upper lotus above water, moving middle band, heavy dark earth band, and separate small lotus at the transition communicate the three zones. Photo 001 is the mapped labelled triguna diagram (reference-map lines 12–17); the candidate omits its readable labels and deity portraits. The D001 rendering references support its matte mural treatment. The two lotuses serve the separately described lotus-above-water and small-transition-lotus roles in plan lines 41–43.
- **Character/deity contract:** No character or deity is depicted.
- **Verdict: `pass`** — no viewer-noticeable defect found at full size or in corner/detail views. This verdict does not approve the artwork.

### Stanza 2 — `candidate-v015.png`

- **Candidate SHA-256:** `89dd9fa07756b63556406ad75cbefae0ba089ab2873fffcb9b24b120c4c95860`
- **Anatomy:** The two worshippers remain separate, with attached, proportionate limbs. Camel, cow, deer, monkey, peacock, birds, and swan have coherent visible bodies and limbs; no duplicated or fused creature was visible.
- **Faces:** Both human faces and the central blue shrine figure have coherent features at enlarged size. The repeated small blue visages on animals and people are intentional motifs, not duplicate people. Their tiny scale does not make otherwise visible anatomy defective.
- **Hands/feet:** Both worshippers’ hands are joined in prayer; no malformed digits are visible. Visible exposed feet show five toe tips each. No open main-figure hand is present to count.
- **Clothing and cast:** The two adults wear ordinary modest traditional dhotis and shoulder cloths; bare male upper torsos are ordinary dress. Cast remains nonjudgmental and balanced. The repeated divine motifs appear across the different beings as the plan requests.
- **Text/signature artifacts:** No text, signature, logo, watermark, or decorative frame. The small motifs are pictorial faces, not lettering.
- **Scene and reference fidelity:** The scene has a grove, centered shrine, water pot, staff, several offerings and animal tracks, as required by plan lines 88–90. Photo 002 is the mapped story-context image of a worker among beings carrying repeated divine visages (reference-map lines 19–25); the candidate reinterprets that motif in the planned mural scene instead of copying the photo’s style or pose. The D001 references are followed for matte rendering.
- **Character/deity contract:** Guruvayurappan is a single youthful deep-blue figure with dark hair, feathered head ornament, yellow dhoti, red-orange shawl, and two attached arms. Skin-only 11×11 median samples: left cheek at (300,490) RGB (146,84,42), R−B **104**; left shoulder (255,555) RGB (143,85,44), R−B **99**; right cheek (1365,480) RGB (141,80,39), R−B **102**; right shoulder (1380,560) RGB (140,81,41), R−B **99**. Both worshippers’ sampled skin reads natural muted warm brown, not orange.
- **Verdict: `pass`** — no viewer-noticeable defect found. This verdict does not approve the artwork.

### Stanza 3 — `candidate-v002.png`

- **Candidate SHA-256:** `f577047b32285be8cdfe51ca57d3f1ae4ecfd7df8aad5fffd85f07b4d41c9b37`
- **Anatomy:** No people or creatures are depicted; no anatomical issue.
- **Faces:** None are depicted.
- **Hands/feet:** None are depicted.
- **Clothing and cast:** No cast or clothing is present.
- **Text/signature artifacts:** No text, signature, logo, watermark, or enclosing border. The sky scrollwork and foliage are scene painting.
- **Scene and reference fidelity:** No mapped source photo exists for stanza 3; this disclosed deviation is present, so the scene was checked against plan lines 133–145. The winding path crosses a layered landscape toward a quiet river and horizon; the shrine is unlit. D001 style references are used only as rendering anchors. No invented figure, doctrinal diagram, rays, or readable symbol appears.
- **Character/deity contract:** No character or deity is depicted.
- **Verdict: `pass`** — no viewer-noticeable defect found in the full frame or cropped shrine/path views. This verdict does not approve the artwork.

### Stanza 4 — `candidate-v020.png`

- **Candidate SHA-256:** `be2e787946f28c7e5d598c052cf179d66b3eaa24ac48d154e79ebdab4099457f`
- **Anatomy:** The boy, four separate attendant figures, and fleeing shadow are distinct; no fused or duplicated person or detached limb is visible. The Lord’s two arms and two feet are attached and proportionate.
- **Faces:** The boy, Lord, and attendants have coherent faces. The shadow is intentionally featureless.
- **Hands/feet:** The Lord’s two open hands each show five digits; both visible feet show five toes. The rightmost attendant’s raised hand is attached and coherent. The child’s joined prayer hands show no visible digit error.
- **Clothing and cast:** The child and attendants wear modest traditional garments. The child is visibly young and devotional. The Lord’s blue skin, feather crown, yellow dhoti, red-orange drape, and painted ornaments fit the Guruvayurappan identity. Bare male torsos are ordinary traditional dress. No sexualized framing.
- **Text/signature artifacts:** No text, signature, logo, watermark, or separate frame. The temple arch is part of the setting.
- **Scene and reference fidelity:** No mapped photo exists for stanza 4; that disclosed deviation is present, so the scene was judged from plan lines 180–191. The child, offering, Lord’s feet, several attendant presences, and departing dark shadow are shown. The two D001 works are rendering references; the Guruvayurappan sheet is an identity reference only, not copied for pose or framing.
- **Character/deity contract:** The Lord remains deep blue and the child is a single warm-brown child devotee. I sampled five skin-only 11×11 patches: attendant 1 at (775,320) RGB (166,95,48), R−B **118**; attendant 2 (928,320) RGB (158,90,45), R−B **113**; attendant 3 (1088,318) RGB (158,92,47), R−B **111**; child (717,548) RGB (158,91,46), R−B **112**. These read warm brown. The rightmost attendant’s face/upper neck patch centered at (1270,318) is RGB (160,73,9), R−B **151**; it visibly reads orange-red and is markedly more orange than the other faces at full-frame viewing size. This violates plan line 190’s natural warm-brown/not-orange requirement. **Needs-fix region:** approximately x=1245–1280, y=292–344; the orange face/neck is visible against the other attendants and a viewer would notice it.
- **Verdict: `needs-fix`** — correct the rightmost attendant’s visibly orange skin, then obtain a fresh exact-checksum review. This verdict does not approve the artwork.

### Stanza 5 — `candidate-v008.png`

- **Candidate SHA-256:** `b1118099868e4d99654489783c0022cb88c3802e59c5af593dbb30481d0146bc`
- **Anatomy:** Mārkaṇḍeya’s head, shoulders, and two arms are coherent; his lap hands are hidden by cloth, and both feet are concealed by the dhoti. Indra has two attached arms. The two apsaras are distinct with two attached arms each; no malformed or duplicated person is visible.
- **Faces:** The sage, Indra, and both apsaras have coherent faces. No tiny feature is judged defective by inference.
- **Hands/feet:** Indra’s extended open hand shows five fingers; his other hand holds the parasol. Apsaras’ hands hold a garland and flower bowl without visible digit errors. Feet are concealed under garments; there is no visible cropped foot or toe error.
- **Clothing and cast:** The sage’s bare upper torso with a simple shoulder drape is ordinary traditional dress; both apsaras wear modest cream/rose saris, and the scene is not sexualized. Indra wears a dhoti and saffron drape. His small tiered ochre crown, painted ochre ornament, and parasol read as conventional matte deva iconography, not clearly palace-like regalia. The sage is dominant; Indra and the two apsaras remain secondary.
- **Text/signature artifacts:** No text, signature, logo, watermark, or outer border.
- **Scene and reference fidelity:** No mapped photo exists for stanza 5; that disclosed deviation is present, so the scene was judged from plan lines 229–240. The mature meditating sage is on the Pushpabhadrā riverbank; Indra’s small party, two distinct apsaras, and the curling wind motif are across the clearing. D001 references are rendering anchors only.
- **Character/deity contract:** Mārkaṇḍeya has mature ascetic hair and beard, simple cloth, and natural warm-brown skin. Indra and apsaras retain warm-brown skin, modest dress, and the contracted human anatomy. Skin-only 11×11 medians: Mārkaṇḍeya cheek at (350,330) RGB (161,87,44), R−B **117**; Indra cheek (1285,220) RGB (149,86,46), R−B **103**; left apsara cheek (1030,245) RGB (163,95,52), R−B **111**; right apsara cheek (1495,240) RGB (166,95,53), R−B **113**. These sampled patches read natural warm brown, not orange.
- **Verdict: `pass`** — no viewer-noticeable defect found. This verdict does not approve the artwork.

## Evidence commands and inventory

The checksum lists were generated programmatically and checked with `sha256sum -c /tmp/d097-review-images.sha256` and `sha256sum -c /tmp/d097-review-contracts.sha256`; every candidate, specified reference, character sheet, frozen contract, reference map, and captions entry returned `OK`. I used `identify -format '%f %wx%h\n'` for image dimensions; `convert ... -crop ... +repage <absolute scratch path>` for focused crops; `view_image` for the full images and crops; and a Python/ImageMagick pixel-enumeration script to calculate the reported RGB channel medians. No existing D097 review records or reports were read. No project source or approval manifest was changed, and no artwork is approved by this review.

Captain-call inventory for this review: **empty**. The standing pending captain art approval is not a new decision raised by this independent review. Recommendation: repair stanza 4’s orange rightmost-attendant skin and submit that new image version for a new checksum-bound review; keep all five images unapproved unless and until the authorized approval process is completed.
