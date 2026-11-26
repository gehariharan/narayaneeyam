# D097 independent landscape candidate review — stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates against the frozen D097 plan, the named character contracts, each mapped intake photo, the series references, and the applicable character references. This review binds each verdict to both the candidate SHA-256 and the frozen plan SHA-256 below. Review completion time for each candidate: **2026-11-26T02:39:55Z**.

I generated a checksum list programmatically from the expected entries in the task brief and ran `sha256sum -c /tmp/d097-review-mb.sha256`. **All 26 entries returned `OK`**: the five candidates, five mapped photos, four comparison/character reference images, the frozen plan, series bible, eight character contracts, `reference-map.json`, and `photo-captions.txt`. The map-listed OneDrive copies of photos 006–010 are present and each has the same SHA-256 as its intake counterpart. `identify` reported 1672×941 for candidates 006, 007, 009 and 010, and 1671×941 for candidate 008.

I viewed each candidate full-frame at native pixel dimensions and inspected enlarged crops of faces, extremities, torsos, and crowded/overlapping areas. Crop outputs were written only under `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/.review-scratch/`, checked to be outside `artifacts/` and `intake/`; inputs were not modified. The crops included `s006-sage-face-hands.png`, `s006-nara-head-lower-limb.png`, `s006-narayana-detail.png`, `s006-feet.png`, `s006-lord-hands.png`, `s007-sage.png`, `s007-infant.png`, `s007-infant-extremities.png`, `s008-sage.png`, `s008-infant.png`, `s008-sage-feet.png`, `s009-shiva-gauri.png`, `s009-sage.png`, `s009-feet.png`, `s009-shiva-hands.png`, `s010-lord.png`, and `s010-hands.png`. `convert -crop … +repage -resize … <absolute-scratch-output>` made these crops. Skin samples were 11×11 pixel patches read from the source candidate with ImageMagick and their per-channel medians calculated with Python `statistics.median`; coordinates below are source-image top-left coordinates.

## Contract and source hashes actually read

| File | SHA-256 |
|---|---|
| Frozen final plan `data/d097-production/review-contract-m/art/plans/d097.json` | `d034006eb1e0cc41d6988e60886b96abc70327ad3e7e015abd56f36fd79b34b2` |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `characters/markandeya/character.json` | `35ad1eeceb9a913642865171d8b0b8c82f8cbf0a774e8182761fcae0ee857e15` |
| `characters/nara/character.json` | `d471169d678bac66c0dbbc738db053428631dd89457f8f21d2596965419be628` |
| `characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `characters/uma-d029/character.json` | `10a67fe2054d31325697e899df1f9905700e4145fed6acf4a9c8bb7ed10e8d03` |
| `content/sources/d097/reference-map.json` | `ffce89dccf07e4e94f5a1d3bffb5d3fb0b57d286730e94f048ddcf690d4436ad` |
| `intake/D097/photo-captions.txt` | `a3e81d036b428d227f27d59eda3ece2f24dd7dcaed033a5f28ad7a4fb94812fa` |

The series requires matte mineral mural treatment, full-bleed framing, and no text/watermarks (series bible lines 3–6, 21–22, 51–55). The applicable plan clauses and version pins are D097 S006 lines 268–308, S007 lines 318–357, S008 lines 367–406, S009 lines 416–455, and S010 lines 465–503. The photo mapping and its confidence/deviation notes are in `content/sources/d097/reference-map.json` lines 28–65; all mapped photo caption entries say “No photo caption in export” (`intake/D097/photo-captions.txt` lines 21–39).

## Candidate findings

### Stanza 6 — `candidate-v003.png`

- **Identity:** `artifacts/d097/s006/landscape/candidate-v003.png`; version **v003**; verified SHA-256 `b65bddc1c4dc275b03f1a899a2d1663e4bed26682e9031cf77af0c032102031b`. Plan: S006, lines 268–308. Mapped photo: `intake/D097/006.jpg`, SHA-256 `6d8865a98136b828ebd0f7a8f32768e8eb12d13ea04062abda8b1f7a77a66de5`; map lines 28–33 describe it as a blue divine ascetic and companion before a seated sage, with medium-confidence identification.
- **Anatomy:** Three distinct, attached, adult figures with one head and two arms each; no duplicate, fusion, malformed face, or cut-off key feature. The Nara and Mārkaṇḍeya bare upper torsos are ordinary ascetic dress. Their body proportions and faces remain coherent at full frame and enlarged crops.
- **Faces:** Nara, Nārāyaṇa, and Mārkaṇḍeya have distinct, legible faces; no distortion visible.
- **Hands/feet:** Both Nārāyaṇa open palms show one thumb and four fingers each. Mārkaṇḍeya’s outward open palm shows thumb plus four fingers; the other hand is held vertically in a composed gesture. Nara’s two visible feet each show five toes; Nārāyaṇa’s two feet each show five toes; Mārkaṇḍeya’s exposed foot shows five separated toes, with the other leg folded under cloth.
- **Clothing and cast:** Nara wears plain cream/ochre cloth; Mārkaṇḍeya wears simple ascetic cloth. Bare male upper torsos are ordinary traditional dress. The three required figures are present and clearly separated.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo was visible, including at the image corners, ground, and water.
- **Scene and reference fidelity:** The riverside hermitage, seated sage, and two arriving ascetics correspond to mapped photo 006 and the written scene. The photo map notes that its figures are not named; the candidate’s interpretation is consistent with the stanza and plan. Matte, full-bleed mural rendering; no separate border.
- **Character/deity contract:** Nara and Mārkaṇḍeya read as natural warm brown: 11×11 medians at Nara’s upper arm (x=270,y=270) RGB **(167,97,61), R−B 106**, and Mārkaṇḍeya’s forearm (x=1110,y=600) RGB **(168,97,61), R−B 107**. Both read warm brown, not orange. Nārāyaṇa reads deep blue; the face patch is visibly blue and consistent with the Guruvayurappan identity. The peacock-feather crown and regalia are within the Guruvayurappan contract’s tasteful, simple-but-regal allowance (character contract lines 18–25, 32–34); they do not read as disallowed palace costume. No extra marks or ornaments conflict with the cast contracts.
- **Verdict: PASS** for this exact candidate checksum and the frozen plan checksum above. No art approval is conferred.

### Stanza 7 — `candidate-v009.png`

- **Identity:** `artifacts/d097/s007/landscape/candidate-v009.png`; version **v009**; verified SHA-256 `c098741058685419143d44ea96b6702b8f1d9578e46e914bc82818e5529a33c3`. Plan: S007, lines 318–357. Mapped photo: `intake/D097/007.jpg`, SHA-256 `e91f990aa90b888994cf5079c3858599acae74cf45ee0b4f359709344bbe989b`; map lines 36–41 identify the infant on a banyan leaf in floodwater with a reaching sage.
- **Anatomy:** One mature sage and one two-armed infant. Their limbs connect naturally; no duplicate person, extra limb, fused body, malformed face, or clipped key extremity is visible. The infant’s raised foot reaches the mouth as required. Its contact toes are partly obscured where the hands and mouth meet; no malformed digit is visible there, and the other extended foot shows five clear toe tips. This is an occlusion observation, not an uncertain or defective finding.
- **Faces:** Both faces are calm and legible at enlarged scale. The infant reads as an infant, not an adult or miniature adult.
- **Hands/feet:** Each of Mārkaṇḍeya’s two open hands shows five fingers. The infant’s hands are closed around the raised foot and are not open palms; no extra or visibly malformed digits. The extended infant foot has five toes; the raised contact-foot toe cluster cannot be individually separated because of the hand/mouth overlap. Sage feet are submerged and not visible.
- **Clothing and cast:** The sage’s plain cream ascetic cloth and the infant’s muted yellow cloth and small feather are modest and contract-consistent. Only the required sage and infant appear.
- **Text/signature artifacts:** No text, signature, watermark, or logo appears, including over water, leaf, sky, or corners.
- **Scene and reference fidelity:** Deep indigo flood and clouded sky, banyan leaf, blue infant, and distant humbled sage closely match the mapped reference and stanza. The image does not copy the photo’s glossy rendering or rays. Full-bleed matte mural treatment.
- **Character/deity contract:** Mārkaṇḍeya cheek sample (x=300,y=545) RGB **(129,69,40), R−B 89**, reads warm brown, not orange. Infant skin sample (x=1340,y=250) RGB **(21,54,100), B−R 79**; it reads deep muted indigo, not pale, gray, or neon. The infant has two arms and a bare forehead, as required for this scene. Hair curls and feather match the stated identity.
- **Verdict: PASS** for this exact candidate checksum and the frozen plan checksum above. No art approval is conferred.

### Stanza 8 — `candidate-v011.png`

- **Identity:** `artifacts/d097/s008/landscape/candidate-v011.png`; version **v011**; verified SHA-256 `3561b8936bf503b4bbd0e7a51854f54234c08ab6e989904cbea0255d2cc88fb9`. Plan: S008, lines 367–406. Mapped photo: `intake/D097/008.jpg`, SHA-256 `f7e5dfe0a118799bfaf9761c2950799798b2515c23bcc2dd8af0ee8f227430c3`; map lines 44–49 describe the photo as an ascetic gesturing toward planetary cosmology and call it a medium-confidence symbolic match.
- **Anatomy:** One sage and one infant Krishna, with no duplicated body or additional Krishna. The sage’s two arms connect to his torso; the infant has two arms and infant proportions. No malformed face, detached limb, or key feature cut by the frame.
- **Faces:** Sage and infant faces are distinct and readable. The infant looks calm and infant-like.
- **Hands/feet:** Each of the sage’s two open hands shows five fingers. The infant holds a raised foot; the other foot is extended with five toe tips visible. The sage’s exposed foot shows four clear toe separations, with the fifth toe hidden naturally beneath robe/crossed-leg overlap; no misshapen toe is visible. This is an occlusion observation, not a defect.
- **Clothing and cast:** Sage wears modest cream ascetic cloth with no ornate jewelry. Infant wears yellow cloth and a small feather; no sexualized or over-adorned treatment. The single visible sage is not a duplicate: the nested opening uses worlds, not a second sage or infant.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo appears, including over water and ground.
- **Scene and reference fidelity:** The ashram, banyan-leaf infant vision, and nested curved opening with miniature worlds form a clear single composition. The supplied photo is symbolic rather than a literal depiction of the infant’s breath; this disclosed medium-confidence mapping is present. The image depicts the worlds motif and returns the sage to the quiet hermitage context without copying the photo’s planetary graphic. Matte, full-bleed frame.
- **Character/deity contract:** Sage cheek sample (x=470,y=415) RGB **(142,99,72), R−B 70**, reads warm brown, not orange. Infant cheek sample (x=1400,y=235) RGB **(38,102,179), B−R 141**; the face reads deep blue rather than pale or neon. Infant curls, feather, two-arm form, and yellow cloth align with the contract.
- **Verdict: PASS** for this exact candidate checksum and the frozen plan checksum above. No art approval is conferred.

### Stanza 9 — `candidate-v014.png`

- **Identity:** `artifacts/d097/s009/landscape/candidate-v014.png`; version **v014**; verified SHA-256 `b1583ff43f497dfe34784c3cd7d1cfc38d5b8427aaffce99b64fc4c6c7697586`. Plan: S009, lines 416–455. Mapped photo: `intake/D097/009.jpg`, SHA-256 `2c3586b16aea12650d6b7f49b9b537ad5a1e935935e6d92a1a8a1cb8a7613df0`; map lines 52–57 note that the source also contains a separate Shiva devotional panel.
- **Anatomy:** Shiva is one natural adult figure with one head and two attached arms; Gaurī and Mārkaṇḍeya are each single, distinct figures with attached limbs. No malformed or duplicated person, fused body, or cropped face/extremity is visible.
- **Faces:** All three faces are coherent at enlarged scale; Shiva’s three ash lines and crescent are distinct from facial distortion.
- **Hands/feet:** Shiva’s open hand shows a thumb and four fingers. His other hand grips the trident. Gaurī’s hands are joined at her waist; Mārkaṇḍeya’s are in namaste. Shiva’s two exposed feet, Gaurī’s two exposed feet, and Mārkaṇḍeya’s visible foot each show five toes; the sage’s other leg is folded under cloth.
- **Clothing and cast:** Shiva wears restrained ascetic cloth and beads; Gaurī wears a modest deep-maroon sari with cream accents and modest ochre jewelry; Mārkaṇḍeya wears plain ascetic cloth. Bare male torso is ordinary traditional dress. Gaurī’s small bindi and Shiva’s trident are ordinary iconography, not disallowed ornament. Three required figures are present; no second Vishnu is added.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo appears, including among the foliage and ground.
- **Scene and reference fidelity:** The hermitage visit by Shiva and Gaurī to the sage is clear, with a restrained offering that suggests Shiva’s devotion. The mapped reference contains an additional separate Shiva devotional panel; that disclosed collage difference is present in the reference and the candidate appropriately represents only the visit scene. The candidate does not copy the source’s split panel, mountain backdrop, or glossy style.
- **Character/deity contract:** Gaurī cheek sample (x=560,y=190) RGB **(127,77,42), R−B 85** and Mārkaṇḍeya cheek sample (x=1280,y=410) RGB **(158,91,49), R−B 109** read natural warm brown, not orange. Shiva is muted cool blue-grey, not warm brown or a different deity palette. His one head, two arms, ash marks, crescent and ascetic cloth match the scene contract; Gaurī has a single two-armed figure and her required sari.
- **Verdict: PASS** for this exact candidate checksum and the frozen plan checksum above. No art approval is conferred.

### Stanza 10 — `candidate-v002.png`

- **Identity:** `artifacts/d097/s010/landscape/candidate-v002.png`; version **v002**; verified SHA-256 `b7e9b36225f3dab11b4afdedf9447f47d71c1adddd634363b93413ab9a576ded`. Plan: S010, lines 465–503. Mapped photo: `intake/D097/010.jpg`, SHA-256 `7233d0825008d21a91392d312cebae4b6bc881034885ee06b889f8205c214e16`; map lines 60–65 describe it as a schematic world hierarchy with medium confidence.
- **Anatomy:** One calm blue Lord with one head, two attached arms, and connected hands; proportions remain coherent at full frame and crop. No accidental duplicate, extra limb, malformed face, or clipped head/hand.
- **Faces:** The Lord’s face is centered, serene and undistorted. Small surrounding cattle are secondary decorative figures, not duplicated deities.
- **Hands/feet:** The Lord’s folded hands are joined naturally at the lap; no open palm. Feet are fully covered by the dhoti, so no toes are exposed or malformed. No hands or feet are cropped.
- **Clothing and cast:** Yellow dhoti, red-orange shawl, tasteful crown/peacock feather and sacred jewelry remain within the Guruvayurappan contract. Pastoral cattle support the required cowherd cue. There is no extraneous human cast.
- **Text/signature artifacts:** No text, captions, signature, watermark, or logo appears, including in the patterned cloud field and corners.
- **Scene and reference fidelity:** Three differentiated realm bands rise below Vaikuṇṭha; the upper realm contains the blue two-armed Lord and pastoral cue. This interprets the mapped schematic rather than copying its mountain-centered infographic or label-like details. No rays or labels are present. The candidate is full-bleed; cloud motifs are part of the painted background, not a separate outer border.
- **Character/deity contract:** Lord cheek sample (x=820,y=80) RGB **(39,63,82), B−R 43**; the face reads deep blue, not gray or black. Two-armed form, calm expression, peacock-feather crown, yellow cloth, red-orange shawl and warm radiance match the Guruvayurappan contract.
- **Verdict: PASS** for this exact candidate checksum and the frozen plan checksum above. No art approval is conferred.

## Recommendation and captain-call inventory

These five exact landscape candidate versions pass the independent visual review against the frozen plan and the specified contracts. The mapped-photo deviations described above are factual context and did not reveal a candidate defect. Keep all artwork **unapproved**; only explicit user approval may update the approval manifest. This review raises no new captain decision. The pending captain art approval is the existing standing state, not an item in this review’s inventory. **Captain-call inventory for this review: empty.**
