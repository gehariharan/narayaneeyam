# D064 landscape visual review: stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates at their full native 1672×941 resolution, then inspected focused native-resolution crops of faces, hands, feet, bodies, animal anatomy where present, water/ground, and image corners. The crops were created from the producer images into this task worktree’s `data/d064-review-l/scratch/`; producer images, intake photos, and manifests were not written. I viewed each mapped photo `intake/D064/006.jpg` through `010.jpg` alongside its candidate. The plan states that those numbered photos supply scene/cast reference only; D001 images are the rendering references (plan lines 41–42).

Commands and checks performed:

- A Python SHA-256 script compared every candidate and frozen contract to the exact expected checksum before inspection; all matched. Candidate checksums were recomputed after inspection and still match.
- `identify -format '%f %wx%h'` confirmed each candidate is 1672×941.
- `magick <candidate> -crop <geometry> +repage <task-scratch-file>` made read-only focused crops in this task’s scratch directory. I also used `view_image` on the full candidate, focused crops, and mapped intake photo.
- A Python script read ImageMagick `rgb:-` output from 15×15 crops and calculated per-channel medians for the listed skin-only patches. Coordinates are native candidate pixels. Comparisons use the plan’s ordinary-skin red-minus-blue (R−B) threshold under 120 and Krishna’s blue-minus-red (B−R) threshold of at least 40 (plan line 41).
- No candidate was edited, converted, or saved in the producer tree. No artwork was generated. Scratch crops were removed after the report was written.

## Frozen contract checksums

All actual SHA-256 values below equal the expected values in the task brief. The plan bytes are the final frozen plan reviewed here.

| Contract file | Actual SHA-256 |
|---|---|
| `art/plans/d064.json` | `ac7db323c849473d87882404504ee6e65cd1087aca3b85e1cb4952a284fad2d9` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `art/bible/characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `art/bible/characters/d064-varuna/character.json` | `86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e` |
| `art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

The relevant scene and continuity terms are in the frozen plan’s shared contracts (lines 21–42); Krishna’s face, skin, costume, forehead, crown, and limb rules are also in his character contract (lines 7–13, 48–60). The selected scene-specific contracts are Nandagopan (character file lines 16–33), gopas (lines 16–32), Varuna (lines 7–16), and Vishnu (lines 14–31). Indra, Surabhi, and Airavata are not cast in stanzas 6–10.

## Candidate reviews

### Stanza 6 — `candidate-v003.png`

- **Version / checksum:** v003; `4c6eaea136846f0d2f806360732a42289b9741024293ac1e267b889a7ce3ab24` (verified).
- **Review completed:** 2026-11-16T05:35:51Z.
- **Plan and reference:** `art/plans/d064.json` stanza 6, lines 298–342; mapped photo `intake/D064/006.jpg`; chapter caption `content/daskams/d064.json` lines 67–72 and `photo-captions.txt` lines 27–30.
- **Anatomy:** Krishna, Nandagopan, and the one distant attendant are separate, naturally connected figures. No extra, missing, fused, or duplicated bodies or limbs are visible. Krishna has one head, two arms, and two legs. The attendant is distinct from Nanda.
- **Faces:** Krishna’s face reads as youthful, not infant-like. Nanda has a mature moustached face and covered hair; neither face is malformed or cut off.
- **Hands / feet:** Both Krishna gesturing hands are connected. At approximately x=685–790,y=245–325 and x=565–695,y=410–490, each reads as a thumb plus three distinct fingertips/segments. This is the plan’s explicit disclosed deviation (line 332); I see no worse defect such as a detached or fused hand. The namaste hands and Nanda’s visible limbs are connected. All visible feet are fully inside the frame.
- **Clothing and cast:** Krishna wears the yellow dhoti, muted red-orange shawl, low band and single upright feather. His forehead is plain. Nanda wears cream and muted green with a headcloth and moustache; no royal crown or armor. One distant male attendant is included as allowed by the scene plan. Traditional dress is modest.
- **Text / signature artifacts:** None visible. I checked the upper-right detail, water, and ground; no readable text, signature, logo, or watermark.
- **Scene and caption fidelity:** The symbolic underwater court, aquatic motifs, Krishna’s arrival, and safely escorted Nanda communicate the rescue journey. The reference photo’s river action is recomposed into the plan’s calm underwater-city rescue; no kidnapping violence or cinematic beams appear.
- **Character / deity contract and disclosed measurements:** Krishna’s skin-only patches at (420,340) and (450,350) have medians RGB(36,49,98) and RGB(38,49,85), B−R 62 and 47: both meet the blue target. Nanda’s five patches at (965,205), (850,350), (870,390), (925,370), and (900,330) are RGB(203,114,45), (199,114,47), (199,108,39), (201,110,40), and (207,116,44), R−B 158, 152, 160, 161, and 163. These visibly warm-orange readings exceed the ordinary-skin threshold and are disclosed in the plan (line 332). Painted necklaces and armlets are prominent ordinary mural ornament. Fine surface patterning is visible in the water and mural fields, also disclosed in the plan; it does not form text or a signature.
- **Verdict: pass — disclosed deviation present.** The three-fingertip readings, Nanda orange-skin readings, and fine field patterning are present as disclosed; no additional qualifying defect found.

### Stanza 7 — `candidate-v003.png`

- **Version / checksum:** v003; `8c82889d5052bff2353682e42db7b1ac8a275696fe3088fafd5d5688e3cc83a4` (verified).
- **Review completed:** 2026-11-16T05:35:51Z.
- **Plan and reference:** `art/plans/d064.json` stanza 7, lines 345–390; mapped photo `intake/D064/007.jpg`; chapter caption `content/daskams/d064.json` lines 77–82 and `photo-captions.txt` lines 32–35.
- **Anatomy:** Varuna, Krishna, and Nanda are three distinct people with connected limbs. Varuna has one head and two arms, not four. No cloned or fused bodies are visible. Varuna’s paired namaste hands are joined naturally; Krishna’s open hand and lowered hand are attached; Nanda’s contact hand rests on Krishna’s arm.
- **Faces:** All three faces are legible and proportionate at native size. Krishna is youthful; Nanda is mature and moustached; Varuna’s face is composed and respectful. No face is clipped.
- **Hands / feet:** Focused crops show ordinary attached digits and no extra or fused hands. Krishna’s visible feet and both of Varuna’s feet, plus Nanda’s feet, remain inside the frame; toes are simple mural contours, without a conspicuous digit defect.
- **Clothing and cast:** Cream and muted olive/green identify Nanda; Krishna wears yellow and muted red-orange with a plain forehead and low feather band. Varuna wears water-toned clothing and a painted crown. All clothing is modest and the cast matches the plan. Varuna’s conspicuous painted crown ornament at about x=380–525,y=215–345 is ordinary temple-mural iconography, as recorded in the plan (line 381), not a contract violation.
- **Text / signature artifacts:** No readable text, caption, signature, logo, or watermark appears in inspected corners, ground, or water.
- **Scene and caption fidelity:** Varuna’s respectful apology, Krishna beside Nanda, and the threshold with distant Gokula make the safe return readable. There is no second Krishna or Nanda to depict the later narration, as the plan prohibits.
- **Character / deity contract and disclosed measurements:** Krishna skin-only patches (925,260) and (930,350) are RGB(32,43,92) and RGB(36,56,119), B−R 60 and 83. Nanda patches (1180,220) and (1260,440) are RGB(197,102,40) and RGB(153,77,18), R−B 157 and 135. Varuna patches (470,345) and (465,390) are RGB(141,86,40) and RGB(184,102,43), R−B 101 and 141. Nanda’s and Varuna’s orange readings above threshold are disclosed in the plan (line 381). The crown is heavily ornamented but painted, consistent with the allowed iconography. Fine patterned surface variation is visible, also disclosed there.
- **Verdict: pass — disclosed deviation present.** The measured orange skin and fine patterning are present as disclosed; no unreported structural, anatomy, or text defect found.

### Stanza 8 — `candidate-v004.png`

- **Version / checksum:** v004; `9f53fe5496687f69bdd479d3159d1eb49b9f60569088a1cc5b2ae142b03591c7` (verified).
- **Review completed:** 2026-11-16T05:35:51Z.
- **Plan and reference:** `art/plans/d064.json` stanza 8, lines 394–438; mapped photo `intake/D064/008.jpg`; chapter caption `content/daskams/d064.json` lines 87–92 and `photo-captions.txt` lines 37–40.
- **Anatomy:** Krishna is a single two-armed cowherd. The separate Vishnu is a single-headed four-armed deity with four distinct attached arms; the attributes are held in those four hands. The several serpent hoods belong to Shesha’s canopy, not extra deity heads. Gopas are individually distinct and not fused or duplicated. Seated figures and their lower legs continue beyond the lower mural edge; this is a peripheral seated-group crop, with faces and visible hand extremities inside the frame.
- **Faces:** Krishna is youthful, with plain forehead and no mark. Vishnu has one composed face. Gopa faces are individually discernible; no malformed or frame-cut face is visible.
- **Hands / feet:** Krishna’s viewer-right raised palm at approximately x=655–750,y=275–325 reads as a thumb plus three distinct fingertips; the fourth finger is absent, matching the explicit plan disclosure (line 429). The hand remains attached and is not worse than described. Vishnu’s four hands are separately attached and correctly correspond to four arms. The gopa’s hands are attached; a ground-resting hand near x=220–430,y=770–930 is fully inside the frame. The seated lower legs/feet at the bottom edge are naturally occluded or cropped with the figures; no face or key visible extremity is cut by the frame.
- **Clothing and cast:** Krishna’s yellow dhoti, muted red-orange shawl, low band, feather and plain forehead follow his contract. Gopas wear modest cream, olive, and maroon cowherd dress; bare upper torsos are ordinary traditional male dress. Vishnu’s tiered crown and layered ornaments are elaborate painted temple-mural ornament, not metallic shine or a Krishna crown violation.
- **Text / signature artifacts:** No text, caption, signature, logo, or watermark visible in the checked top-right, lower corners, ground, or palace field.
- **Scene and caption fidelity:** Gopas face Krishna as he reveals Vaikuntha; the distinct four-armed Vishnu appears within the revealed realm, not as a second Krishna body. The composition accords with the scene plan and the mapped reference’s Vishnu-on-Shesha identity.
- **Character / deity contract and disclosed measurements:** Krishna patches (390,300) and (380,400) are RGB(37,51,90) and RGB(38,56,101), B−R 53 and 63. Vishnu patches (1300,180) and (1285,220) are RGB(56,64,107) and RGB(56,70,115), B−R 51 and 59. Gopa skin patches (260,400), (130,450), (925,540), and (810,640) are RGB(252,190,86), (211,117,37), (253,194,99), and (199,108,35), R−B 166, 174, 154, and 164. These warm-orange readings exceed the threshold and are disclosed in the plan (line 429). Fine patterned fields and Vishnu’s elaborate painted crown/ornaments are likewise disclosed. The provenance note is present: the plan records that the original v002 prompt/reference-argument bytes were overwritten, gives the original prompt hash, and notes that the native v002 return image and generation record survive while current v005 prompt/argument files are not originals (line 429). This affects prompt provenance, not the visible candidate or this checksum-bound review.
- **Verdict: pass — disclosed deviation present.** The three-fingertip hand, orange skin patches, fine patterning, elaborate Vishnu ornament, and prompt-provenance note are present as described. No additional qualifying defect found.

### Stanza 9 — `candidate-v003.png`

- **Version / checksum:** v003; `ffa5e99f6d60be12ecbab0a987c4e16604ff3123a77ca78c71a0e5bab420f2c0` (verified).
- **Review completed:** 2026-11-16T05:35:51Z.
- **Plan and reference:** `art/plans/d064.json` stanza 9, lines 442–485; mapped photo `intake/D064/009.jpg`; chapter caption `content/daskams/d064.json` lines 97–102 and `photo-captions.txt` lines 42–45.
- **Anatomy:** Krishna and the four visibly distinct gopas have natural proportions and connected limbs. Water intentionally obscures the gopas’ lower bodies; no limb visibly terminates in a fused or detached part. Krishna’s two arms meet the gopa he is drawing from the water. The raised gopa hand at approximately x=615–715,y=365–465 has a thumb and four separated fingers in the enlarged crop.
- **Faces:** Krishna’s and the gopas’ faces are distinct, readable, and not cut off. No duplicate person or malformed face is visible.
- **Hands / feet:** The hand-to-hand rescue contact is connected in the crop around x=880–1270,y=385–635. Visible hand digits are not malformed. Feet are hidden by the water rather than cut by the frame; no key extremity is clipped.
- **Clothing and cast:** The gopas wear simple dhotis and shawls; bare torsos are ordinary traditional male dress. Krishna wears his contracted yellow dhoti and muted red-orange shawl, low band and feather; his forehead is plain. The cast is a small varied group, not clones.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark in the inspected water, ground, corners, or sky.
- **Scene and caption fidelity:** The broad patterned ocean of bliss, immersed gopas, Krishna bringing one back, and distant Gokula/cattle communicate the plan’s return from the blissful ocean. The mapped reference photo supplies the scene theme; the candidate follows the plan’s specified cast and narrative.
- **Character / deity contract and disclosed measurements:** Krishna patches (1170,260) and (1250,400) are RGB(27,46,100) and RGB(25,42,91), B−R 73 and 66. Gopa patches (150,480), (400,480), (760,520), and (195,520) are RGB(188,100,34), (172,114,91), (99,50,23), and (201,108,39), R−B 154, 81, 76, and 162. The two R−B readings above 120 are warm-orange departures, explicitly measured and disclosed in the plan (line 476); the other sampled patches meet the threshold. The fine field patterning is present as disclosed.
- **Verdict: pass — disclosed deviation present.** The two orange-skin samples and fine field patterning are disclosed; no additional qualifying anatomy, text, scene, or contract defect found.

### Stanza 10 — `candidate-v003.png`

- **Version / checksum:** v003; `236eab79f888585aa0101954d8867eba1952dd2c6cd6ab97bdedffcd4fed2c66` (verified).
- **Review completed:** 2026-11-16T05:35:51Z.
- **Plan and reference:** `art/plans/d064.json` stanza 10, lines 489–531; mapped photo `intake/D064/010.jpg`; chapter caption `content/daskams/d064.json` lines 107–112 and `photo-captions.txt` lines 47–50.
- **Anatomy:** Krishna appears once, seated in a natural cowherd pose with two attached arms and legs. The visible cow and calf each have coherent bovine heads, bodies, legs, and tails; the distant cattle are small but not duplicated malformed figures. No fused or detached parts are visible.
- **Faces:** Krishna’s face is serene and youthful, not infant-like; his forehead is plain and smooth. Cattle faces are coherent. No face is cut off.
- **Hands / feet:** The raised viewer-right hand at approximately x=860–1005,y=280–370 reads as a thumb plus three distinct fingertips; the fourth is absent, exactly as disclosed in the plan (line 522). The hand is attached and no worse defect is visible. The flute-holding hand is attached and wrapped naturally around the flute. One exposed blue foot near x=710–840,y=875–934 remains inside with only a narrow lower margin; the other foot is covered by the seated drapery rather than visibly cut off. This matches the plan’s disclosed near-edge feet observation (line 522).
- **Clothing and cast:** Krishna wears the contracted yellow dhoti and muted red-orange shawl, low band and single upright feather; no forehead mark or tall crown. Clothing is modest. Cattle and calf are appropriate supporting figures.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark in the inspected grass, riverbank, palace, or corners.
- **Scene and caption fidelity:** Krishna as cowherd, cattle, flute, and the visible Vaikuntha palace communicate the closing praise and the contrast between cowherd form and divine abode. This is consistent with the mapped photo’s Krishna-with-cattle scene and the stanza plan.
- **Character / deity contract and disclosed measurements:** Krishna patches (540,235) and (580,430) are RGB(51,63,114) and RGB(34,51,104), B−R 63 and 70. No ordinary human figure is present for a warm-brown sample. The three-fingertip hand, narrow near-edge foot margin, and fine patterned surface variation are all disclosed in the plan (line 522). Ornament on Krishna is prominent painted mural jewelry, without violating the plain-forehead or low-band requirements.
- **Verdict: pass — disclosed deviation present.** The hand reading, near-edge foot margin, and fine patterning are as disclosed; no additional qualifying defect found.

## Recommendation and review boundary

All five candidates pass this visual review for their exact listed checksums, with the stated disclosed deviations present. They are suitable for the unapproved reference-versus-candidate comparison. This report does not approve artwork, assign masters, or alter the pending captain art approval. The report itself raises no unresolved captain choice; the captain-call inventory is empty for this review.
