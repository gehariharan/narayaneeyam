# D064 landscape candidate review — stanzas 1–5

**Review time:** 2026-11-16T04:30:36Z (UTC).  
**Scope:** independent visual review of the five selected landscape candidates below, each bound to its verified SHA-256. No candidate, master, intake file, approval manifest, or producer file was changed. Candidate copies and all detail crops used for inspection were kept in this task worktree's `data/d064-review-f/scratch/` and removed after review.

## Method and evidence

I verified each selected candidate and each frozen contract file with `sha256sum` before inspection; all matched the expected digest. I inspected each full image at its native 1672×941 (stanza 4: 1671×941) resolution, then enlarged crops from task-local copies around faces, hands, feet, torsos, groups, animals, and the key scene action. Crops were produced with ImageMagick `magick ... -crop ... +repage` and, where useful, enlarged for inspection. I also opened the mapped intake reference photo for each stanza and read its corresponding caption. Skin readings below are medians from 15×15 patches on task-local copies, sampled with ImageMagick's median filter; coordinates are in the candidate's native pixel space. For ordinary human skin, the plan's target is red-minus-blue <120; for Krishna, blue-minus-red ≥40.

The reference mapping is plan `art/plans/d064.json` stanza entries and `content/daskams/d064.json` stanza records: stanza 1 → `intake/D064/001.jpg` and caption #1; stanza 2 → 002.jpg/#2; stanza 3 → 003.jpg/#3; stanza 4 → 004.jpg/#4; stanza 5 → 005.jpg/#5. The captions are in `intake/D064/photo-captions.txt` (caption headings at lines 1–24 in the OneDrive caption export). The plan's stanza entries begin at lines 57, 105, 153, 201, and 250; selected candidate/disclosure fields are at lines 92, 140, 188, 237, and 285. Chapter stanza records begin at lines 17, 27, 37, 47, and 57.

Inspection commands included `sha256sum` over all listed candidates and contracts; `file` on the candidate copies; `magick` to copy-free crop from task-local copies, inspect sample medians, and enlarge detail crops; and `date -u`. Visual review was direct inspection of the full images, mapped reference photos, and focused crops; filenames, reports, and test output were not used as substitutes for seeing the images.

## Contract-file SHA-256 values actually read

All actual values equal the expected values supplied for this review. The frozen contract root is `/home/gehariharan/firstmate-narayaneeyam-mate/data/d064-production/review-contract-f/`; character paths in the table are relative to its `art/bible/` directory.

| Frozen contract file | SHA-256 |
|---|---|
| `data/d064-production/review-contract-f/art/plans/d064.json` | `1bcd8df9f2a4be3d763d7270cc3bf2b7cb35eb4a334b3abb3eaff608ca0f3a4a` |
| `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `.../characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `.../characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `.../characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `.../characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `.../characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `.../characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `.../characters/d064-varuna/character.json` | `86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e` |
| `.../characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

The shared contract I applied includes the series' matte, opaque mural palette and no-text/no-texture-overlay rule (`series.json:34` and plan `d064.json:41`), warm human skin and indigo Krishna patch thresholds (plan `d064.json:41`), and Krishna's one-head/two-arm/two-leg form, smooth unmarked forehead, low band and single feather (`krishna-vrindavan-youth/character.json:8–15`, `d064.json:21`). Supporting-person rules are in the Nandagopan and gopas contracts; Indra, Surabhi, and Airavata rules are in their named character contracts. Varuna and Vishnu contracts were also read; neither figure is required in these five scenes.

## Candidate findings

### Stanza 1 — `candidate-v003.png`

- **Exact candidate:** `artifacts/d064/s001/landscape/candidate-v003.png`
- **SHA-256:** `b80c9e1e7b0168006b2cd4d39b57ce26ea72b87e7ecaf294aa7782fefa957899` (verified)
- **Anatomy:** One youthful Krishna, Nandagopan, and three distinct supporting figures are present. No duplicated person, fused body, or additional limb is apparent. The hill spans the upper scene and visibly meets Krishna's raised palm from below.
- **Faces:** Faces are distinct and readable at native size. Nandagopan is mature and moustached. Krishna is youthful, with a smooth unmarked forehead and one low band with one upright peacock feather.
- **Hands/feet:** **Needs-fix defect:** Krishna's raised hand at native approximately **x=1020–1140, y=225–275** terminates in a broad flat, two-pronged silhouette against the hill. In the enlarged crop the palm/fingers do not resolve into the five separately shaped fingers expected of a hand; this is conspicuous at the scene's central contact point. The other visible hands have connected, separated finger shapes. Krishna's lower feet are partly cut by the bottom edge around y=941; the plan already discloses this crop. No other visible digit error was found.
- **Clothing and cast:** Cowherd garments are traditional cream/olive/maroon wraps. Bare upper torsos are ordinary traditional dress, not sexualized. Nandagopan's olive drape and head covering match his contract.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found in the sky, hill, ground, or corners. Fine mottled field texture is present, as disclosed.
- **Scene and caption fidelity:** The mapped caption's Govardhana action and question to Nanda are conveyed without a chart or a second Krishna. The hill/palm contact reads clearly, but the defective hand weakens the key action.
- **Character/deity contract and skin readings:** Krishna's sampled skin patches at (1290,350) and (1300,350) were RGB(36,44,97), Δblue-red=61, and RGB(35,43,95), Δ=60, both meeting the blue target. Nandagopan patches at (665,420) and (680,420) were RGB(181,91,26), Δred-blue=155, and RGB(179,90,26), Δ=153. Two gopa patches at (390,400) and (400,405) were RGB(190,97,31), Δ=159, and RGB(193,99,31), Δ=162. The warm-orange skin readings exceed the plan target but are disclosed. The plan also discloses that Nandagopan's feet are partly cropped and that fine mural-field texture is present. Its prompt-provenance note says the original v002 prompt/reference-argument bytes were overwritten, while the v002 native return and generation record survive and the current v004 prompt/argument are not the originals.
- **Verdict: NEEDS-FIX.** The raised hand's two-pronged silhouette is an undisclosed visible anatomy defect. The other listed deviations are disclosed and are not the reason for this verdict.

### Stanza 2 — `candidate-v003.png`

- **Exact candidate:** `artifacts/d064/s002/landscape/candidate-v003.png`
- **SHA-256:** `59b01c0ff2057165552f0ae820adab9aac3e75987560a1f8fe7377b4ff04ff26` (verified)
- **Anatomy:** Nandagopan, Krishna, and three distinct listeners form a coherent village gathering. Krishna's seated crossed-leg pose has two attached arms and two legs; no extra limb, fused body, or duplicate face found. All visible figures remain within the frame.
- **Faces:** Nanda is moustached and visibly older than the listeners; the listeners have varied faces. Krishna is youthful and has a smooth, unmarked forehead.
- **Hands/feet:** Enlarged crops show Nanda's speaking hand and the listeners' folded hands with connected wrists and separated fingers. Krishna's two visible hands and two feet each have five finger/toe separations where individually delineated; no fused or extra digit found.
- **Clothing and cast:** Nanda wears a cream head covering, cream dhoti and muted green drape; Krishna wears a yellow dhoti, red-orange shawl and low band with one feather. The group is simply dressed and visually distinct.
- **Text/signature artifacts:** No written prophecy, horoscope, signature, logo, or watermark visible. Mottled mural-field texture is present, as disclosed.
- **Scene and caption fidelity:** Nanda is speaking to the group while Krishna is present nearby. Garga is not shown as an extra sage, and there is no infant or duplicate Krishna. This corresponds to the mapped caption's remembered prophecy and growing respect.
- **Character/deity contract and skin readings:** Krishna patches at (540,310) and (540,320) were RGB(30,38,86), Δblue-red=56, and RGB(32,44,103), Δ=71, meeting the blue target. Nanda patches at (1220,280) and (1230,280) were RGB(198,108,35), Δred-blue=163, and RGB(197,105,33), Δ=164. Gopa patches at (720,270) and (730,270) were RGB(192,105,35), Δ=157, and RGB(194,106,37), Δ=157. The disclosed warm-orange human skin readings exceed the plan target. The plan also discloses fine field texture. Its prompt-provenance note says original v002 prompt/reference-argument bytes were overwritten; the v002 native return and generation record survive, and current v004 prompt/argument bytes are not the originals.
- **Verdict: PASS — disclosed deviations present.** No additional visible defect found.

### Stanza 3 — `candidate-v004.png`

- **Exact candidate:** `artifacts/d064/s003/landscape/candidate-v004.png`
- **SHA-256:** `8fef60deb7b7f3c908606ba16ae0f5c741b2619e3f3e84a907bd0473eab28cba` (verified)
- **Anatomy:** Krishna stands with two attached arms and two legs. Indra is one coherent, single-headed adult with two attached arms, bowing with his crown at Krishna's foot. Surabhi is a single cow with one head, two horns, four attached legs and one tail. Indra's lower body continues off the left edge; his face, crown, and joined hands remain fully inside the frame. No extra/fused limbs or duplicate figures found.
- **Faces:** Krishna's face is serene and youthful; forehead is plain, and the low headband carries one feather. Indra's face is visible at the bow and distinct from Krishna. Surabhi's bovine face is coherent.
- **Hands/feet:** Indra's two joined hands meet Krishna's foot naturally; Krishna's two feet remain intact with toe separations visible. The hands show separated finger shapes; no extra or missing digit was apparent in the enlarged crop.
- **Clothing and cast:** Krishna's yellow dhoti and muted red-orange wrap match contract. Indra wears ochre/celestial clothing and a painted crown; his crown and jewelry are fairly elaborate in the mural rendering, which is ordinary iconography and not a contract violation. Surabhi is separate from Krishna and not fused with Indra.
- **Text/signature artifacts:** No text, signature, logo, or watermark found. Fine mural-field mottling is present, as disclosed.
- **Scene and caption fidelity:** The mapped caption's humbled Indra, his bow, and the divine cow are all represented. The crown-to-foot contact is visible and no thunderbolt is added.
- **Character/deity contract and skin readings:** Krishna patches at (1200,220) and (1200,300) were RGB(26,46,112), Δblue-red=86, and RGB(29,49,115), Δ=86, meeting the blue target. Indra face patches at (967,677) and (980,670) were RGB(204,100,5), Δred-blue=199, and RGB(231,124,5), Δ=226; the exposed arm patch at (1000,560) was RGB(194,115,26), Δ=168. The orange face is disclosed as above target; the plan also discloses the fine field texture.
- **Verdict: PASS — disclosed deviations present.** No additional visible defect found.

### Stanza 4 — `candidate-v004.png`

- **Exact candidate:** `artifacts/d064/s004/landscape/candidate-v004.png`
- **SHA-256:** `d51975bd4e0c7929d13607a56568457663a8a7a22fa81197e8e7bf51df4fb086` (verified)
- **Anatomy:** Krishna has one face, two arms and two legs. Indra is a distinct single-headed, two-armed figure. Surabhi is a coherent four-legged cow with two horns, a visible udder and one tail. Airavata has one elephant head and connected trunk, four legs, and exactly four distinct tusks in two pairs. The elephant's peripheral body meets the right edge, while its face, trunk and tusks are intact; the plan discloses the edge placement.
- **Faces:** Krishna's forehead is plain and smooth, with the low band and one upright peacock feather. Indra's face is readable and not duplicated. Surabhi and Airavata retain distinct cow and elephant anatomy.
- **Hands/feet:** Krishna's hands are joined in his lap; Indra holds the ritual vessel with two connected hands and separated fingers. Krishna's feet, Surabhi's hooves, and Airavata's four feet are connected and visible. No extra, fused, or visibly missing digits found.
- **Clothing and cast:** Krishna wears the required yellow and muted red-orange garments. Indra wears painted ochre crown and layered necklaces; this is ordinary temple iconography, with no explicit prohibition against the ornamentation. The animals are separated and not fused.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found. Fine mural-field texture is present, as disclosed.
- **Scene and caption fidelity:** Surabhi's milk visibly originates at her udder, but the stream falls to the ground at approximately **x=150–300, y=540–820** and does not join Krishna's abhisheka. This is the plan's disclosed stream deviation. Airavata's Ganga water visibly flows from the trunk toward Krishna, and Indra performs a separate offering. The source and recipient for the elephant's stream read clearly.
- **Character/deity contract and skin readings:** Krishna patches at (810,550) and (820,550) were RGB(29,37,74), Δblue-red=45, and RGB(34,43,79), Δ=45, meeting the blue target. Indra patches at (1180,405) and (1190,410) were RGB(193,108,43), Δred-blue=150, and RGB(212,115,8), Δ=204. The orange face is disclosed as above target; the plan also discloses the ground-falling milk stream and texture. Four tusks were independently visible in two pairs, correcting the plan's earlier mistaken producer observation; the current candidate-status entry records the corrected count.
- **Verdict: PASS — disclosed deviations present.** The milk stream and Indra skin readings are disclosed; no additional visible defect found.

### Stanza 5 — `candidate-v003.png`

- **Exact candidate:** `artifacts/d064/s005/landscape/candidate-v003.png`
- **SHA-256:** `99ce80ac763736678343ecfff8b838c8e6308e89b650a8feac90843780ac9445` (verified)
- **Anatomy:** Krishna, Nandagopan and distinct cowherds have connected limbs and natural proportions. Their visible hands show separated fingers; the enlarged lower crop shows five toe separations on visible feet where delineated. The scene includes healthy cattle with coherent heads, legs and hooves; no duplicated person or visibly cloned/fused animal found.
- **Faces:** Krishna is youthful; Nanda is mature and moustached; other figures have distinct faces. Krishna's forehead is plain, and his low band has one feather.
- **Hands/feet:** Krishna's two hands are connected, with one resting on a cow's head and the other gesturing; the contact reads as a hand resting on the animal, not a fused limb. Cowherd hands and visible feet show no extra or malformed digits. All key faces and extremities remain inside the frame.
- **Clothing and cast:** Krishna's yellow dhoti and red-orange shawl match his contract. Nanda wears muted green and cream with a head covering; the other villagers wear simple cream/maroon wraps. A small background agricultural worker is present, but does not crowd or duplicate the focal group.
- **Text/signature artifacts:** No text, logo, signature, or watermark found in the ground, vegetation, sky, buildings, or corners. Fine patterned mural texture is present, as disclosed.
- **Scene and caption fidelity:** Gokula is shown as a cultivated village with maintained homes, pasture, cattle and grateful villagers; no palace or literal treasure heaps replace the village. This matches the mapped caption's prosperity grounded in Gokula.
- **Character/deity contract and skin readings:** Krishna patches at (510,450) and (520,450) were RGB(38,54,98), Δblue-red=60, and RGB(39,57,102), Δ=63, meeting the blue target. Nandagopan patches at (880,300) and (870,305) were RGB(200,110,35), Δred-blue=165, and RGB(204,113,37), Δ=167. Gopa patches at (1150,300) and (1180,270) were RGB(200,111,36), Δ=164, and RGB(93,56,31), Δ=62. These sampled values match the plan's disclosed warm-orange readings (including the darker gopa sample); the plan also discloses fine field texture.
- **Verdict: PASS — disclosed deviations present.** No additional visible defect found.

## Recommendation and captain-call inventory

Treat stanza 1 v003 as **needs-fix** and make a new candidate version with a clearly separated five-finger supporting hand; do not reuse this checksum as cleared art. Stanzas 2–5 pass this independent image review only for their listed exact checksums, with the disclosed deviations recorded above. These verdicts are not art approval and do not update `art/approved/`.

The captain-call inventory raised by this review is empty. The chapter's pending captain art approval is the standing state; this review creates no additional captain decision.
