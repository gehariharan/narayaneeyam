# D064 landscape candidate review: stanzas 6–10

**Review type:** independent, read-only visual review, bound to exact candidate checksums and the frozen contract bytes below. No candidate, intake image, or approval manifest was changed. This review grants no art approval.

**UTC inspection time:** 2026-11-16T04:30:14Z for each candidate.

## Method and evidence

I opened each full-resolution candidate and inspected focused crops made from private copies under data/d064-review-g/scratch/. The originals remain in the producer worktree. I examined faces, hands, feet, clothing, group separation, deity anatomy, and all four image corners. Scratch copies and crops were deleted after inspection.

Commands and results:

- sha256sum on the five candidate paths and ten frozen contract paths: every result matched the task brief’s expected SHA-256; full values are below.
- identify on each candidate: PNG, 1672×941, sRGB.
- jq on the frozen plan: read mapped scene plans and selected versions. Plan stanza entries are at art/plans/d064.json:298 (S6), :345 (S7), :394 (S8), :442 (S9), :489 (S10). Shared continuity and palette constraints are at d064.json:21–22,41.
- cat on content/daskams/d064.json and intake/D064/photo-captions.txt: stanza references map to photos 006.jpg–010.jpg (content file lines 67,77,87,97,107).
- cp, convert -crop, and view_image: inspected full images and enlarged crops. convert operated only on scratch copies, never producer or intake paths.
- Skin readings below are channel-wise medians of 15×15-pixel patches sampled from scratch copies using ImageMagick pixel output and a median calculation. Series targets are ordinary skin R−B < 120 and Krishna/Vishnu blue skin B−R ≥ 40 (plan line 41).

No prior D064 review record, producer report, or producer-task status/evidence was read. I read the candidate_status fields in the frozen plan as directed, including S6 digit/skin disclosures and S8 prompt-provenance note. Prompt history does not alter these exact-image findings.

### Frozen contract hashes actually read

| Contract file | SHA-256 |
|---|---|
| art/plans/d064.json | 1bcd8df9f2a4be3d763d7270cc3bf2b7cb35eb4a334b3abb3eaff608ca0f3a4a |
| art/bible/series.json | cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa |
| art/bible/characters/krishna-vrindavan-youth/character.json | bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d |
| art/bible/characters/nandagopan/character.json | 56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36 |
| art/bible/characters/gopas/character.json | 06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0 |
| art/bible/characters/indra/character.json | 1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195 |
| art/bible/characters/surabhi/character.json | 86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2 |
| art/bible/characters/airavata/character.json | 4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524 |
| art/bible/characters/d064-varuna/character.json | 86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e |
| art/bible/characters/d027-vishnu/character.json | 65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24 |

## Candidate findings

### Stanza 6 — candidate-v003.png

**Candidate:** artifacts/d064/s006/landscape/candidate-v003.png  
**SHA-256:** 4c6eaea136846f0d2f806360732a42289b9741024293ac1e267b889a7ce3ab24  
**Verdict:** **pass — disclosed deviations present**

- **Anatomy:** Krishna is one youthful figure with one face, two connected arms, and two legs. Nandagopan and the accompanying gopa are distinct, connected figures. No fused or duplicated people.
- **Faces:** Krishna and Nanda have legible, proportionate faces. Nanda has a moustache and covered dark hair.
- **Hands/feet:** Focus crops of Krishna’s open palms (native regions approximately x=685–790,y=245–325 and x=565–695,y=410–490) show a thumb and three separately delineated fingertips on each hand. This is the disclosed S6 hand-reading/digit concern in the frozen plan; I see no worse defect. Nanda’s joined hands are connected. Krishna’s and Nanda’s feet are fully in frame.
- **Clothing and cast:** Krishna wears a yellow dhoti, red-orange shawl, low band and one upright peacock feather; Nanda wears cream and muted green with a head cloth. The figures are modestly dressed.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full image or inspected corners.
- **Scene/caption fidelity:** An underwater court and aquatic motifs stage Krishna arriving to retrieve Nanda. Nanda is safely accompanied; no violence is shown. This follows the S6 plan and caption for intake/D064/006.jpg.
- **Character/deity contract:** Krishna patches at (420,340) and (450,350) are RGB(36,49,98) and RGB(38,49,85), B−R 62 and 47, meeting the blue target. Nanda patches at (965,205) and (850,350) are RGB(203,114,45) and RGB(199,114,47), R−B 158 and 152. These read orange and exceed the warm-brown target; the S6 plan discloses Nanda’s skin deviation. Krishna has conspicuous painted necklaces and armlets, ordinary mural ornament. Fine patterned surface variation is visible against the flat-field/no-texture-overlay preference; this is a style observation, not a qualifying structural defect for this verdict.

### Stanza 7 — candidate-v003.png

**Candidate:** artifacts/d064/s007/landscape/candidate-v003.png  
**SHA-256:** 8c82889d5052bff2353682e42db7b1ac8a275696fe3088fafd5d5688e3cc83a4  
**Verdict:** **pass — disclosed deviations present**

- **Anatomy:** Varuna is one figure with one face and two attached arms; Krishna and Nanda are distinct, connected two-armed figures. No duplicated sequential figures or fused bodies.
- **Faces:** All three faces are legible. Nanda is moustached and wears a cream head cloth. Varuna’s bowed expression reads as respectful.
- **Hands/feet:** Varuna’s palms meet in prayer and remain connected to his arms. Krishna’s open hand has distinct separated digits; his other hand hangs naturally. Nanda’s hand rests on Krishna’s shoulder with a connected arm. Visible feet are intact and inside the frame.
- **Clothing and cast:** Krishna wears the expected cowherd colors, low band, one feather, and plain forehead. Nanda wears cream and muted green. Varuna wears muted water-court colors. Varuna’s gold crown is visibly ornamented (approximately x=380–525,y=215–345); I record that fact but do not treat ornament level alone as a defect.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full image or inspected corners.
- **Scene/caption fidelity:** Varuna welcomes Krishna with Nanda beside them. A threshold and small distant Gokula scene imply their return without duplicating Krishna or Nanda. This fits S7 and intake/D064/007.jpg.
- **Character/deity contract:** Krishna patches at (925,220) and (950,235) are RGB(47,62,123) and RGB(34,52,105), B−R 76 and 71. Nanda patches at (1180,220) and (1195,220) are RGB(197,102,40) and RGB(195,102,43), R−B 157 and 152. Varuna patches at (445,420) and (455,425) are RGB(180,102,43) and RGB(152,86,8), R−B 137 and 144. Nanda and Varuna orange skin readings exceed the warm-brown target and are disclosed in the S7 plan. Varuna remains two-armed and has no unsupported weapon. Fine patterned surface variation is a style observation.

### Stanza 8 — candidate-v004.png

**Candidate:** artifacts/d064/s008/landscape/candidate-v004.png  
**SHA-256:** 9f53fe5496687f69bdd479d3159d1eb49b9f60569088a1cc5b2ae142b03591c7  
**Verdict:** **needs-fix**

- **Anatomy:** The earthly group contains one youthful Krishna and four distinct gopas; the separate Vaikuntha figure is not a second cowherd Krishna. Gopa faces and silhouettes remain distinct. No fused people.
- **Faces:** Krishna and the four foreground gopas have legible faces. Separate Vishnu has one face. The multi-headed serpent canopy is distinct from Vishnu’s head.
- **Hands/feet:** **Undisclosed digit defect:** Krishna’s viewer-right, upward open hand (native region approximately x=655–750,y=275–325) shows a thumb and three distinct extended fingertips; a fourth finger is absent. The enlarged crop makes the undercount visible, and this prominent gesture is readable in the full scene. Other visible hands and feet are connected and inside the frame.
- **Clothing and cast:** Krishna wears yellow and muted red-orange with a low band, one upright feather, and a plain forehead. Gopas wear simple cream/olive/maroon wraps; bare torsos are traditional dress, not excessive exposure. Vishnu’s crown and layered painted ornaments are elaborate; this is recorded as ordinary iconographic ornament.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full image or inspected corners.
- **Scene/caption fidelity:** Foreground gopas look toward Vaikuntha while Krishna presents the vision. Separate Vishnu has one head, four arms, and four attributes (discus, conch, mace, lotus), as S8 requires. This corresponds to intake/D064/008.jpg.
- **Character/deity contract:** Krishna patches at (410,230) and (420,240) are RGB(43,54,100) and RGB(47,62,112), B−R 57 and 65. Vishnu patches at (1265,220) and (1270,230) are RGB(40,53,90) and RGB(58,70,113), B−R 50 and 55. Four gopa patches at (260,400), (130,450), (215,420), and (625,440) are RGB(252,190,86), RGB(211,117,37), RGB(252,188,81), and RGB(253,190,77), R−B 166, 174, 171, and 176. These exceed the warm-brown target; disclosed in the S8 plan. Fine patterned surface variation is a style observation.

### Stanza 9 — candidate-v003.png

**Candidate:** artifacts/d064/s009/landscape/candidate-v003.png  
**SHA-256:** ffa5e99f6d60be12ecbab0a987c4e16604ff3123a77ca78c71a0e5bab420f2c0  
**Verdict:** **pass — disclosed deviations present**

- **Anatomy:** Krishna raises one gopa from the water. Four visible gopas have distinct faces and connected bodies; no duplicated or fused figures. Water obscures lower legs as the scene requires, without distress or drowning cues.
- **Faces:** All four gopa faces and Krishna’s face are visible and legible.
- **Hands/feet:** The raised gopa’s open hand shows four separated fingers and a thumb. Krishna’s two grasping hands connect to his arms and the gopa’s arms; overlap hides some digits but no extra or detached parts are visible. Krishna’s feet are fully in frame. The left peripheral gopa’s arm runs naturally off the left mural edge.
- **Clothing and cast:** Krishna wears the expected cowherd colors and low feather band. Gopas’ bare upper bodies with shoulder cloths are ordinary traditional dress.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full image or inspected corners.
- **Scene/caption fidelity:** The broad symbolic ocean, immersed gopas, and Krishna guiding one gopa toward shore make the S9 liberation-and-return scene readable and correspond to intake/D064/009.jpg.
- **Character/deity contract:** Krishna patches at (1135,205) and (1180,340) are RGB(33,54,110) and RGB(28,48,98), B−R 77 and 70. Gopa patches at (150,480), (400,480), (760,520), and (180,485) are RGB(188,100,34), RGB(172,114,91), RGB(99,50,23), and RGB(195,103,35), R−B 154, 81, 76, and 160. The orange readings exceed target while the latter two are below it, consistent with disclosed S9 palette findings. Fine patterning is a style observation.

### Stanza 10 — candidate-v003.png

**Candidate:** artifacts/d064/s010/landscape/candidate-v003.png  
**SHA-256:** 236eab79f888585aa0101954d8867eba1952dd2c6cd6ab97bdedffcd4fed2c66  
**Verdict:** **needs-fix**

- **Anatomy:** Krishna is one serene seated youthful figure with one face and two connected arms and legs. Nearby cows are coherent, distinct animals; no fused or duplicated figures.
- **Faces:** Krishna’s face is legible and youthful, with a plain forehead and no mark. No other human face appears.
- **Hands/feet:** **Undisclosed digit defect:** Krishna’s raised viewer-right open hand (native region approximately x=860–1005,y=280–370) has a thumb and three distinct extended fingertips; the fourth finger is absent. This is visible in the focused crop and full-image gesture. The hand resting on the flute is curled around the prop, with digits partly occluded. Both feet and toes are fully inside the image, with a narrow but visible lower-edge margin.
- **Clothing and cast:** Krishna wears a yellow dhoti, muted red-orange wrap, one low gold band, and one upright peacock feather. A flute lies across his lap. Cows are coherent and traditionally ornamented.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full image or inspected corners.
- **Scene/caption fidelity:** Quiet Vraja, Vaikuntha opening, and cowherd Krishna convey the closing praise. The plan excludes Bhattathiri, and none appears. The flute and cows are familiar cowherd iconography, not a contradictory event.
- **Character/deity contract:** No ordinary human skin sample applies. Krishna’s low band, single feather, plain forehead, blue skin, two arms, and full figure match the S10 contract. Fine patterned surface variation is a style observation.

## Recommendation and inventory

Repair the two undisclosed digit defects in S8 and S10, then obtain a new exact-checksum review for those revised candidates. S6, S7, and S9 pass with the disclosed deviations stated above. These are visual-review findings only; captain art approval remains pending and is not a decision raised by this review.

Captain-call inventory for this review: **empty**. The pending art approval is the existing standing state, not a new captain call.

## Final integrity check

The five candidate SHA-256 values were rechecked after inspection and still match the values above. Scratch crops and copies were removed. This report is the only review deliverable.
