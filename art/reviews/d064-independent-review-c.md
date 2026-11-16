# D064 landscape candidate visual review — stanzas 1–5

**Review completed:** 2026-11-16T03:49:43Z (UTC). **Scope:** Independent visual inspection of the five selected landscape candidates at native resolution, bound to their exact checksums and the frozen final plan/character contracts below. This is visual clearance only; captain art approval remains pending and no approval manifest was changed.

## Method and evidence

I verified every candidate and frozen contract file with `sha256sum` before inspection; all values matched the brief. I copied the candidates into `.d064-review-scratch/` in this worktree, checked dimensions with `identify`, viewed each full image at native resolution, then viewed focused crops created from those copies using ImageMagick `magick -crop`. I viewed mapped reference photos `intake/D064/001.jpg`–`005.jpg` and compared them with the plan and chapter captions. Skin samples below are 15×15-pixel per-channel RGB medians computed from the scratch copies by exporting raw RGB with ImageMagick and taking the median with Python standard-library `statistics`. Coordinates are native candidate pixels. Scratch copies/crops are temporary and removed after saving the report.

Commands/evidence: `sha256sum <candidate and frozen contract paths>`; `identify <scratch candidate copies>`; `magick <scratch copy> -crop <WxH+X+Y> +repage <scratch crop>`; `magick <scratch copy> -crop 15x15+X+Y +repage -depth 8 rgb:-` plus Python median calculation; native-resolution `view_image` inspection of full candidates, detail crops and references. Mapped chapter commentary is at `content/daskams/d064.json` lines 21, 31, 41, 51 and 61. Plan scene/status entries are at `art/plans/d064.json` lines 57–92 (S1), 105–140 (S2), 153–188 (S3), 201–237 (S4) and 250–285 (S5). The palette thresholds/prohibitions are in the frozen plan at line 41. Character references include Krishna's skin/forehead/crown/anatomy at `krishna-vrindavan-youth/character.json` lines 8–13, Nandagopan at `nandagopan/character.json` lines 17–23, Gopas at `gopas/character.json` lines 16–22, Indra at `indra/character.json` line 13, Surabhi at `surabhi/character.json` line 13 and Airavata at `airavata/character.json` line 13.

I apply the brief's disclosed-deviation rule: deviations stated in candidate status are reported and do not alone turn an image into `needs-fix`; only a newly observed qualifying defect or a disclosed deviation clearly worse than stated would do so. Tiered crowns and layered painted ornament are observations, not failures. Fine mottling/patterned surface texture is visible on the mural fields and departs from the series palette's flat-field/no-texture-overlay preference; this style observation is outside the stated structural failure conditions. No readable writing, signature, logo, watermark, cinematic beam or signature-like mark was visible in the examined ground, grass, stream or corner regions.

## Frozen contract checksums

All actual values match the expected SHA-256 values in the brief.

| Frozen contract file | Actual SHA-256 |
|---|---|
| `data/d064-production/review-contract-c/art/plans/d064.json` | `d03ce7e66c81bf722313a6cba29d3f877b58141bd33cbe4a759151cc3e45a215` |
| `data/d064-production/review-contract-c/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d064-production/review-contract-c/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `data/d064-production/review-contract-c/art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `data/d064-production/review-contract-c/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `data/d064-production/review-contract-c/art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `data/d064-production/review-contract-c/art/bible/characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `data/d064-production/review-contract-c/art/bible/characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `data/d064-production/review-contract-c/art/bible/characters/d064-varuna/character.json` | `86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e` |
| `data/d064-production/review-contract-c/art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

## Candidate findings

### Stanza 1 — landscape `v003`

**Candidate:** `artifacts/d064/s001/landscape/candidate-v003.png`  
**SHA-256:** `b80c9e1e7b0168006b2cd4d39b57ce26ea72b87e7ecaf294aa7782fefa957899` · **Dimensions:** 1672×941 · **Review time:** 2026-11-16T03:49:43Z

- **Anatomy:** One youthful Krishna, Nandagopan and two gopas are distinct; visible cattle are coherent. No duplicated/fused person or cow.
- **Faces:** Krishna is youthful with one face; Nanda is moustached and mature; gopa faces are distinct. No malformed face or forehead mark.
- **Hands/feet:** Krishna's supporting hand at native x=1020–1140, y=225–275 touches the hill underside but ends in a broad flat, two-pronged silhouette; five fingers are not separately delineated. The plan's S1 `candidate_status` (line 92) describes this as an undisclosed visible hand defect. Krishna's lower feet are partly cut by the bottom edge around x=1170–1400, y=910–940, also disclosed there. Other visible gopa gestures and Nanda's chin hand show no additional conspicuous digit/connection error.
- **Clothing and cast:** Krishna wears yellow dhoti, muted red-orange shawl, low band and one upright feather; forehead is plain. Nanda's cream/olive clothing and headcloth fit his contract. Traditional dress; no sexualized framing.
- **Text/signature artifacts:** None seen, including ground, grass and corners.
- **Scene/caption fidelity:** Hill spans the upper scene and rests on Krishna's palm from below; villagers and cattle shelter beneath, and one gopa gestures toward Nanda. Maps to photo `001.jpg` and the birth/horoscope question in the caption/content; no written chart.
- **Character/deity contract and skin samples:** Krishna patches RGB(32,38,82) at (1300,390) and RGB(31,41,95) at (1105,335), blue-minus-red 50 and 64 (target ≥40). Nanda patches RGB(179,90,25) at (665,420) and RGB(184,92,27) at (700,500), red-minus-blue 154 and 157. Gopa face patches RGB(233,163,84) at (110,400) and RGB(188,98,30) at (405,400), red-minus-blue 149 and 158. These warm-orange readings are present alongside the disclosed producer Nanda sample RGB(181,91,26), red-minus-blue 155. Hand silhouette and lower-foot crop are disclosed. No wrong head/arm count, duplicate Krishna, tall crown or forehead mark.
- **Verdict: pass — disclosed deviations present.** Both the hand silhouette and foot crop are described in the plan status; no additional qualifying defect found.

### Stanza 2 — landscape `v003`

**Candidate:** `artifacts/d064/s002/landscape/candidate-v003.png`  
**SHA-256:** `59b01c0ff2057165552f0ae820adab9aac3e75987560a1f8fe7377b4ff04ff26` · **Dimensions:** 1672×941 · **Review time:** 2026-11-16T03:49:43Z

- **Anatomy:** Krishna sits naturally with two attached arms and legs. Nanda and listeners are separate, proportionate bodies. The partial figure at the left mural edge is peripheral and runs naturally off-frame. No cloned face, fused torso or duplicate Krishna.
- **Faces:** Krishna's face is youthful and distinct; Nanda's moustache/headcloth identify him; listener faces are varied. No infant Krishna, ghostly Garga or malformed face.
- **Hands/feet:** Nanda's speaking gesture, listeners' folded hands and Krishna's hands near his crossed legs show no conspicuous extra, missing, detached or fused digits in the enlarged crop. Krishna's feet remain in frame; no key extremity is cut off.
- **Clothing and cast:** Nanda wears cream/olive headcloth and dhoti; listeners wear muted clothes; Krishna wears yellow/red-orange cowherd dress. No exposed skin beyond ordinary traditional dress.
- **Text/signature artifacts:** No written prophecy, horoscope, signature or watermark in the vegetation or corners.
- **Scene/caption fidelity:** Nanda addresses an attentive small group while Krishna sits nearby as himself. Maps to photo `002.jpg` and its Garga-prophecy caption without an extra sage or written text.
- **Character/deity contract and skin samples:** Krishna patches RGB(35,47,102) at (490,370) and RGB(31,47,108) at (510,370), blue-minus-red 67 and 77 (target ≥40). Nanda face/forearm patches RGB(199,108,34) at (1220,280) and RGB(181,104,36) at (1100,320), red-minus-blue 165 and 145. Gopa patches RGB(197,107,36) at (710,275) and RGB(238,179,105) at (130,400), red-minus-blue 161 and 133. The orange readings exceed the warm-brown target and align with the disclosed Nanda/gopa samples (163 and 157) in S2 status at plan line 140. Krishna's low band, single feather and plain forehead are correct.
- **Verdict: pass — disclosed deviation present.** Warm-skin readings are disclosed; no additional qualifying defect found.

### Stanza 3 — landscape `v004`

**Candidate:** `artifacts/d064/s003/landscape/candidate-v004.png`  
**SHA-256:** `8fef60deb7b7f3c908606ba16ae0f5c741b2619e3f3e84a907bd0473eab28cba` · **Dimensions:** 1672×941 · **Review time:** 2026-11-16T03:49:43Z

- **Anatomy:** Krishna stands with two arms/two legs. Indra is one connected adult with two arms. Surabhi is one coherent four-legged cow with one bovine head and two horns. No extra limbs, duplicate bodies or fused figures.
- **Faces:** Krishna's face is youthful; Indra's bowed face is intact; Surabhi has one ordinary bovine face. No malformed/duplicated face.
- **Hands/feet:** Indra's bow and hand at Krishna's foot are connected; no extra/fused digits apparent in the enlarged crop. Krishna's two feet are inside frame, with five toes visible on each. No clipped key extremity.
- **Clothing and cast:** Krishna wears yellow dhoti, muted shawl, low band and single feather. Indra wears a painted ochre, visibly tiered/ornamented crown; this is ordinary temple-mural ornament, noted rather than failed. His dress remains traditional and muted; Surabhi has no human face or wings.
- **Text/signature artifacts:** None seen on earth, foliage or corners.
- **Scene/caption fidelity:** Indra's crown touches Krishna's feet while Surabhi stands nearby, matching photo `003.jpg` and caption. No thunderbolt or second Krishna.
- **Character/deity contract and skin samples:** Krishna patches RGB(31,50,113) at (1175,175) and RGB(27,47,112) at (1165,300), blue-minus-red 82 and 85 (target ≥40). Indra face patch at (967,677) is RGB(161,69,6), red-minus-blue 155; darker exposed arm patch at (900,650) is RGB(59,37,20), red-minus-blue 39. The face is visibly copper-orange, in line with the deviation disclosed in S3 plan status at line 188 (producer crop sample RGB(204,100,5), red-minus-blue 199). My 15×15 median at the same center differs from the earlier crop measurement, but both exceed the plan's <120 target. Krishna has plain forehead and no tall crown.
- **Verdict: pass — disclosed deviation present.** Indra's warm/copper skin is disclosed; no additional qualifying defect found.

### Stanza 4 — landscape `v004`

**Candidate:** `artifacts/d064/s004/landscape/candidate-v004.png`  
**SHA-256:** `d51975bd4e0c7929d13607a56568457663a8a7a22fa81197e8e7bf51df4fb086` · **Dimensions:** 1671×941 · **Review time:** 2026-11-16T03:49:43Z

- **Anatomy:** Krishna sits with two arms/two legs; Indra has one head/two arms. Surabhi has one head, two horns, four legs and visible udder. Airavata has one elephant head/trunk, four legs and four distinct tusks rooted in two pairs. Its peripheral body meets the right frame edge; face, trunk, tusks and legs remain intact, a natural edge placement rather than clipped key extremity.
- **Faces:** Krishna, Indra, cow and elephant each have one intact face. No fused/duplicated people or animals.
- **Hands/feet:** Krishna's clasped lap hands have no conspicuous extra/fused fingers; Indra's hands hold the offering vessel without apparent detached digits. Animal legs/hooves are distinct. No human extremity is cut off.
- **Clothing and cast:** Krishna's low feather band, plain forehead, yellow dhoti and red-orange shawl are consistent. Indra wears a painted, ornate tiered crown, noted as ordinary iconography; cream/saffron attire is traditional. The animals' painted ornaments do not alter their anatomy.
- **Text/signature artifacts:** None on ground, foliage, water streams or corners.
- **Scene/caption fidelity:** Maps to photo `004.jpg`. Ganga water flows from Airavata's trunk onto Krishna; Indra separately offers water. Surabhi's milk clearly comes from the udder but falls to the ground instead of clearly joining Krishna's abhisheka. This deviation is disclosed in S4 plan status at line 237. Cow and elephant are distinct, not fused.
- **Character/deity contract and skin samples:** Krishna patches RGB(44,50,92) at (800,500) and RGB(42,50,93) at (820,510), blue-minus-red 48 and 51 (target ≥40). Indra face/forearm patches RGB(196,110,45) at (1180,405) and RGB(125,93,27) at (1100,390), red-minus-blue 151 and 98. Face reading is above target and aligns with disclosed producer face sample RGB(193,108,43), red-minus-blue 150 at line 237. Krishna has one head/two arms; Airavata's four-tusk convention is met.
- **Verdict: pass — disclosed deviations present.** The milk stream ending at ground and warm Indra face are disclosed; no additional qualifying defect found.

### Stanza 5 — landscape `v003`

**Candidate:** `artifacts/d064/s005/landscape/candidate-v003.png`  
**SHA-256:** `99ce80ac763736678343ecfff8b838c8e6308e89b650a8feac90843780ac9445` · **Dimensions:** 1672×941 · **Review time:** 2026-11-16T03:49:43Z

- **Anatomy:** Krishna, Nandagopan and two foreground gopas are distinct and naturally proportioned. Cows and calf have coherent varied poses; no duplicated cattle body or cloned villager. No face/body/key extremity is cut off.
- **Faces:** Krishna has one youthful face; Nanda's moustached face is distinct from the two gopas, whose faces differ. No malformed face or duplicate Krishna.
- **Hands/feet:** Krishna's hand rests on the cow and the other gestures toward Nanda; both attach naturally. Nanda's joined hands and gopas' chest/gesture hands show no obvious extra/fused digits in the crop. Feet remain in frame; visible toe outlines are natural and no key extremity is clipped.
- **Clothing and cast:** Cream, olive and maroon traditional dhotis/shawls; Krishna's yellow dhoti, red-orange shawl, low band and single feather with plain forehead. The small gardening/farming figure at left is an ordinarily dressed background villager consistent with village life. No sexualized framing.
- **Text/signature artifacts:** None in homes, fields, grass, ground or corners.
- **Scene/caption fidelity:** Broad village, cultivated fields, homes, cattle and grateful cowherds convey Gokula's prosperity with Krishna as modest focal figure. Maps to photo `005.jpg` and caption; no palace or treasure replaces the village.
- **Character/deity contract and skin samples:** Krishna patches RGB(42,60,105) at (490,350) and RGB(40,57,101) at (500,390), blue-minus-red 63 and 61 (target ≥40). Nanda face/arm patches RGB(192,106,33) at (880,300) and RGB(200,110,33) at (820,430), red-minus-blue 159 and 167. Gopa patches RGB(198,112,35) at (1150,300), RGB(149,85,24) at (1140,450), RGB(241,168,69) at (1340,350) and RGB(133,68,28) at (1380,470), red-minus-blue 163, 125, 172 and 105. Orange face readings are present alongside disclosed Nanda readings 165/159/167 and gopa readings 163/165 in S5 plan status at line 285. Krishna's blue readings meet target.
- **Verdict: pass — disclosed deviation present.** Warm-skin readings are disclosed; no additional qualifying defect found.

## Recommendation and captain-call inventory

All five checksum-bound landscape candidates pass this independent visual review under the stated disclosed-deviation rule. Preserve this report with the exact candidates and contract bytes above; any changed candidate or plan/character contract requires fresh checksum-bound review. This report does not confer human art approval. Captain art approval remains pending as the standing state; this review raises no new captain decision. **Captain-call inventory for this review: empty.**
