# D064 landscape candidate review: stanzas 6–10

**Review completed:** 2026-11-16T04:51:04Z (UTC)  
**Scope:** Independent, read-only visual review of the five selected landscape candidates against their exact checksums, the frozen plan, character contracts, mapped reference photos and their captions. This is visual clearance only; captain art approval remains pending and is not granted here.

## Integrity and review method

All five candidates and all nine frozen contract files matched the expected SHA-256 values before inspection. I copied the candidate files and mapped intake photos to this task's `data/d064-review-j/scratch/`, checked full images at their native 1672×941 resolution, then inspected enlarged crops made only from those scratch copies. No producer artifact, intake file, approval manifest or project source file was changed. I generated or edited no images.

For color checks I sampled 15×15-pixel patches from scratch copies and computed the median of each RGB channel. The series target is ordinary human skin R−B <120 and youthful Krishna B−R ≥40. Coordinates below are native-image top-left patch coordinates. Medians and thresholds are evidence about color only; the disclosed deviations are not treated as defects under the supplied review rule.

Contract-file hashes actually read:

| Frozen file | SHA-256 |
|---|---|
| `art/plans/d064.json` | `aa68b67a7d0d8502517f66b6a9afff650ce5fd6b947663a5ec85bb0ab0b37b1fc` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `art/bible/characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `art/bible/characters/d064-varuna/character.json` | `86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e` |
| `art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

The selected candidate path, version, verified hash and mapped photo are listed for each image. Plan line references below identify the stanza and its `candidate_status` disclosures: frozen plan lines 298–332 (S006), 345–381 (S007), 394–429 (S008), 442–476 (S009), and 489–522 (S010). The scene/cast mapping is also recorded in `content/daskams/d064.json` lines 67–112 and `photo-captions.txt` sections `## 006.jpg` through `## 010.jpg` (lines 27–50). The series palette and rendering contract is in `series.json` lines 34 onward; Krishna's identity/anatomy/headwear contract is in `krishna-vrindavan-youth/character.json` lines 8–14 and 54–62. Varuna's anatomy and crown are in `d064-varuna/character.json` lines 8–16; Vaikuntha Vishnu's one-head/four-arm contract is in `d027-vishnu/character.json` lines 13–31.

Commands/evidence used: `sha256sum` on the five candidate paths and nine frozen contract paths; `identify` on each scratch candidate (all `PNG 1672x941`); `magick` copies/crops and enlarged views from scratch copies; a Python standard-library loop invoking `magick -crop 15x15+x+y -depth 8 txt:-` to calculate per-channel medians. Full-image native views and detail crops included faces, torsos, hands, feet, crowded groups, frame edges, and text/signature-prone ground, water and corners. The exact sampled medians are recorded below.

## S006 — Varuna's underwater realm

- **Candidate:** `artifacts/d064/s006/landscape/candidate-v003.png`, v003; SHA-256 `4c6eaea136846f0d2f806360732a42289b9741024293ac1e267b889a7ce3ab24` (verified).
- **Reference:** `intake/D064/006.jpg`; caption #6. Plan entry: lines 298–332.
- **Anatomy:** Krishna, Nandagopan and the additional male attendant are distinct, connected figures. Krishna has one youthful face, two arms and two legs; no extra or fused body parts. Nanda and the attendant have natural proportions and connected limbs. No malformed or duplicated face is apparent.
- **Faces:** Krishna's face is calm and youthful, not infant-like; Nanda has the mature moustached face and headcloth. The attendant is separately recognizable.
- **Hands/feet:** Krishna's two open gesturing hands at approximately native x=685–790,y=245–325 and x=565–695,y=410–490 each visibly read as a thumb plus three distinct fingertips/segments. This is the plan's disclosed deviation; neither hand is missing or fused, and I saw no worse hand defect. Nanda's joined hands are connected and naturally posed. All three figures' feet are inside the frame; no cropped face or key extremity.
- **Clothing and cast:** Krishna wears the yellow dhoti, muted red-orange shawl, low band and one upright feather; forehead is plain. Nanda wears cream and olive/green with a cream headcloth. The attendant wears muted traditional clothing. Painted necklaces and armlets are conspicuous ordinary mural ornament. Nanda's exposed skin reads orange; measured patches: (850,350) RGB(199,114,47), R−B 152; (870,390) RGB(199,108,39), R−B 160; (960,205) RGB(202,113,44), R−B 158. These exceed the warm-brown threshold and are disclosed. Krishna patches: (420,340) RGB(36,49,98), B−R 62; (450,350) RGB(38,49,85), B−R 47; (430,170) RGB(40,53,105), B−R 65; all meet the blue target.
- **Text/signature artifacts:** No readable text, signature, logo or watermark found, including in water, ground and corners. Fine patterned mural-field variation is visible; this is disclosed.
- **Scene and caption fidelity:** A calm underwater palace, aquatic plants and fish frame Krishna arriving to find Nanda safely escorted. It communicates the rescue journey without violence or drowning and follows the mapped photo/caption's Varuna-realm episode.
- **Character/deity contract:** Krishna's forehead/headwear, two-arm cowherd form and blue pigment comply. Nanda's face/clothing cues are present. The extra man is distinct and does not introduce an unsupported deity form.
- **Verdict:** **pass — disclosed deviations present** (three-fingertip reading in both open hands, Nanda's orange skin readings, and field patterning).

## S007 — Varuna's apology and return

- **Candidate:** `artifacts/d064/s007/landscape/candidate-v003.png`, v003; SHA-256 `8c82889d5052bff2353682e42db7b1ac8a275696fe3088fafd5d5688e3cc83a4` (verified).
- **Reference:** `intake/D064/007.jpg`; caption #7. Plan entry: lines 345–381.
- **Anatomy:** One Varuna kneels with one head and two attached arms; Krishna and Nanda are separate, with no sequential duplicate. The distant village/cows suggest Gokula. No clones, fused limbs or malformed bodies found.
- **Faces:** Varuna's bowed face, Krishna's youthful face and Nanda's moustached face are distinct and intact.
- **Hands/feet:** Varuna's joined hands are connected; Krishna's extended hand and lowered hand are attached; Nanda's hand resting on Krishna's shoulder is connected. Their feet/lower limbs remain inside the frame. Digit crops show no extra, missing or fused digits beyond ordinary stylized contouring.
- **Clothing and cast:** Krishna's yellow dhoti, red-orange shawl, blue skin, plain forehead and low feather band are visible. Nanda wears cream and olive/green. Varuna wears water-court garments and a painted ochre crown with visible decorative bands and a raised central ornament (about x=380–525,y=215–345); this is a factual iconographic observation, not a structural violation. Nanda's and Varuna's skin read orange, as disclosed: Nanda (1180,220) RGB(197,102,40), R−B 157; (1190,420) RGB(195,100,41), R−B 154. Varuna (445,420) RGB(180,102,43), R−B 137; (430,405) RGB(188,106,47), R−B 141. Krishna samples (920,280) RGB(39,56,108), B−R 69; (930,335) RGB(38,58,117), B−R 79; (950,320) RGB(39,58,112), B−R 73.
- **Text/signature artifacts:** No readable text, signature, logo or watermark found. Fine patterned surface variation is visible and disclosed.
- **Scene and caption fidelity:** Varuna's respectful greeting, Krishna's safe return with Nanda and the distant village path fit the stanza and reference caption. No separate narration scene or duplicated Krishna/Nanda is inserted.
- **Character/deity contract:** Varuna remains one calm, two-armed water deity with no weapon or extra attendant. Krishna and Nanda follow their contracts. Varuna's painted crown is ornamented but remains a single crown on one head; no prohibited extra headwear or limb count appears.
- **Verdict:** **pass — disclosed deviations present** (orange skin readings and field patterning).

## S008 — Vaikuntha revealed to the cowherds

- **Candidate:** `artifacts/d064/s008/landscape/candidate-v004.png`, v004; SHA-256 `9f53fe5496687f69bdd479d3159d1eb49b9f60569088a1cc5b2ae142b03591c7` (verified).
- **Reference:** `intake/D064/008.jpg`; caption #8. Plan entry: lines 394–429.
- **Anatomy:** Krishna is one two-armed cowherd figure; four gopas have distinct faces and connected upper bodies. The foreground gopas are seated, with some lower legs/feet continuing beyond the lower mural edge; their faces and gesturing hands are inside the frame, and the crop reads as a natural foreground group rather than a missing/fused limb. The separate Vaikuntha Vishnu has one head and four attached arms. The multi-headed serpent canopy is separate from Vishnu's body. No duplicate Krishna, clone, malformed face or fused body found.
- **Faces:** Krishna remains youthful with a plain forehead; the gopas' faces are distinct. Vishnu's face is separate and mature.
- **Hands/feet:** Krishna's raised hand at approximately x=655–750,y=275–325 has a thumb plus three distinct fingertips; the fourth finger is absent, exactly as disclosed. His other hand remains attached at his side. Gopa prayer/open hands are separated and natural. Vishnu's four hands hold four distinct attributes (discus, conch, mace, lotus); attribute grips partly obscure individual fingers but do not fuse or multiply arms. No face or key hand is cut off.
- **Clothing and cast:** Krishna's low gold band, single upright peacock feather, yellow dhoti and red-orange shawl are present; there is no forehead mark. Gopas wear traditional muted cowherd clothing. Human gopa skin patches are warm orange and disclosed: (260,400) RGB(252,190,86), R−B 166; (130,450) RGB(211,117,37), R−B 174; (165,515) RGB(251,193,108), R−B 143; (600,490) RGB(250,185,102), R−B 148; (880,575) RGB(213,121,42), R−B 171. All exceed the under-120 target. Krishna samples (370,420) RGB(31,43,80), B−R 49; (420,340) RGB(33,49,94), B−R 61. Vishnu samples (1275,190) RGB(79,79,122), B−R 43; (1290,205) RGB(44,56,99), B−R 55. Both blue figures meet the target. Vishnu's tiered crown and layered ornament are elaborate ordinary temple iconography.
- **Text/signature artifacts:** No readable text, signature, logo or watermark found. Cloud forms and the bright matte Vaikuntha field contain no cinematic beams or volumetric rays. Fine patterned surface variation is visible and disclosed.
- **Scene and caption fidelity:** Krishna and a small earthly group face the revealed abode. The scene maps to the supplied photo/caption; the heavenly Vishnu is clearly separated from Krishna rather than attached as a second body.
- **Character/deity contract:** Krishna's one head/two arms and the separate Vishnu's one head/four arms with traditional attributes comply. Serpent canopy does not create extra Vishnu heads. The hand and human-skin readings are disclosed.
- **Verdict:** **pass — disclosed deviations present** (Krishna's three-fingertip hand, gopa orange skin readings and field patterning). The lower-leg/feet continuation at the bottom edge is a natural seated foreground crop and was recorded as an observation, not as a disclosed defect.

## S009 — The cowherds return from the ocean of bliss

- **Candidate:** `artifacts/d064/s009/landscape/candidate-v003.png`, v003; SHA-256 `ffa5e99f6d60be12ecbab0a987c4e16604ff3123a77ca78c71a0e5bab420f2c0` (verified).
- **Reference:** `intake/D064/009.jpg`; caption #9. Plan entry: lines 442–476.
- **Anatomy:** One Krishna reaches with two attached arms to guide one gopa ashore. Four distinct gopas remain immersed; their visible heads, torsos and arms are separate and connected. Water intentionally obscures their lower bodies. No duplicate, distress, fused body, detached limb or malformed face found.
- **Faces:** All visible faces are individually formed and expressive; no clone or accidental duplicate is apparent.
- **Hands/feet:** Krishna's two hands connect naturally to his arms and the rescued gopa's hands. The gopas' visible raised/prayer hands have separated digits; water-obscured extremities are part of the planned immersion. Krishna's two feet are fully inside the frame. No critical face or extremity is cut off.
- **Clothing and cast:** Krishna has the required blue skin, curly hair, plain forehead, low band/feather, yellow dhoti and red-orange shawl. The gopas wear ordinary traditional cloth; bare upper bodies are non-sexualized traditional dress. Several gopa skin patches: (150,480) RGB(188,100,34), R−B 154; (155,500) RGB(199,105,36), R−B 163; (250,315) RGB(181,100,37), R−B 144; (400,480) RGB(172,114,91), R−B 81; (760,520) RGB(99,50,23), R−B 76; (780,470) RGB(170,86,27), R−B 143. The orange readings above target are disclosed; the other measured patches are under 120. Krishna samples (1190,260) RGB(27,48,101), B−R 74; (1280,320) RGB(26,45,97), B−R 71.
- **Text/signature artifacts:** No readable text, signature, logo or watermark found in water, ground, foliage or corners. Fine field patterning is visible and disclosed.
- **Scene and caption fidelity:** The broad, calm ocean is symbolic and matte. Krishna is visibly bringing the front gopa to shore while the group remains immersed; no drowning, panic or photoreal water is depicted. This matches the mapped reference and stanza.
- **Character/deity contract:** Krishna's one face/two-arm form and blue pigment comply; the gopa group is distinct and naturally proportioned. Disclosed warm-orange skin variance is present.
- **Verdict:** **pass — disclosed deviations present** (some gopa orange skin readings and field patterning).

## S010 — Closing praise of Krishna's cowherd form

- **Candidate:** `artifacts/d064/s010/landscape/candidate-v003.png`, v003; SHA-256 `236eab79f888585aa0101954d8867eba1952dd2c6cd6ab97bdedffcd4fed2c66` (verified).
- **Reference:** `intake/D064/010.jpg`; caption #10. Plan entry: lines 489–522.
- **Anatomy:** Krishna has one face, two attached arms and two legs. The seated pose is coherent; the nearby cow and calf have natural bovine bodies. No second Krishna, malformed face or fused limb found.
- **Faces:** Krishna's serene face is youthful, with a plain smooth forehead and no mark.
- **Hands/feet:** Raised viewer-right hand at approximately x=860–1005,y=280–370 shows a thumb plus three distinct fingertips, the fourth finger absent as disclosed. The other hand rests naturally on the flute. The visible foot and folded-leg pose remain fully inside the frame; no extremity is cut off. No other extra/missing/fused digits found in the enlarged hand and foot crops.
- **Clothing and cast:** Krishna wears the required yellow dhoti and muted red-orange shawl, with a single low band and upright feather. His blue skin samples are (550,240) RGB(52,66,121), B−R 69; (560,270) RGB(59,69,101), B−R 42; (900,330) RGB(44,54,103), B−R 59. No ordinary human skin sample is applicable. He holds a flute, consistent with the mapped cowherd reference; no other person is introduced.
- **Text/signature artifacts:** No readable text, signature, logo or watermark found, including on grass, ground, water and corners. Fine surface patterning is visible and disclosed.
- **Scene and caption fidelity:** The calm pastoral scene, cattle, flute and restrained Vaikuntha motif align with the reference photo and closing-praise plan. The pale cloud vision is matte and has no cinematic beams.
- **Character/deity contract:** Krishna's youth, one face/two arms, blue pigment, plain forehead and low feather band comply. The open-hand digit reading is the disclosed deviation.
- **Verdict:** **pass — disclosed deviation present** (raised hand's three-fingertip reading and field patterning).

## Review disposition and completion inventory

All five selected landscape candidates pass this independent visual gate for their exact listed checksums. The pass does not grant captain art approval; the frozen plan continues to say that approval is pending. I found no new unresolved question requiring a captain decision, so my captain-call inventory is empty; the pending art approval is the existing standing state, not a decision raised by this review.

### Scratch evidence and file references

The copied candidates, copied intake photos, enlarged native-coordinate crops and color-patch calculations were made under this task's `data/d064-review-j/scratch/` and removed after review. The only retained deliverable is this report. For evidence locations in the reviewed source, see the frozen plan and character-contract line references in the integrity section above; the selected images themselves are the exact-hash files listed per stanza.
