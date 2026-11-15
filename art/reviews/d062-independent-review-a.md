# D062 landscape candidate visual review: stanzas 1–5

Review completed: 2026-11-15T21:36:11Z. This is an independent read-only review of the five selected landscape candidate files. Each file was SHA-256 checked before visual inspection and reviewed at native 1672×941 resolution, then in enlarged detail crops made from read-only copies under this task worktree's `.review-scratch/`. No source image, intake image, candidate, master, or approval manifest was changed. The crop scratch directory was removed after inspection.

## Integrity and review basis

All frozen contract hashes matched the expected values. These are the actual SHA-256 values of the bytes read:

| Frozen file | SHA-256 |
|---|---|
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/plans/d062.json` | `4088821d71b641d05dec7e06ea288f9a650dd5e194d871315637b487bef039d5` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/bible/characters/brahmins/character.json` | `ee6f618e0dd1b82fae4f7ab0a37abdee5cf6edb7a0544410a55e5fbc996f7b07` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/bible/characters/indra-d062/character.json` | `b10cd5848afde589706caf73e4699d0bf3659f8d74f63d614e3a14541c54604d` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |

Reference mapping was verified against the final plan and chapter commentary: stanza 1 → `intake/D062/001.jpg`, stanza 2 → `002.jpg`, stanza 3 → `003.jpg`, stanza 4 → `004.jpg`, and stanza 5 → `005.jpg`. The mappings and scene constraints are in the frozen plan at stanza entries beginning lines 32, 83, 136, 186, and 238; stanza 5's exactly-two-Brahmin requirement and its permitted integrated mountain face are at lines 250–269. The corresponding commentary-source links are in `content/daskams/d062.json` lines 17–62, and the five captions are in `intake/D062/photo-captions.txt` lines 1–24. Krishna's plain forehead, one low band and one feather, blue skin, clothing, and two-arm/two-leg form are specified in the frozen youth contract; series-wide text and rendering prohibitions are in the frozen series bible.

Commands used for integrity, dimensions, and inspection included:

- `sha256sum <seven frozen contract files> <five selected candidate files>`; all twelve digests matched the brief's expected hashes.
- `identify <five scratch copies>`; each reported `PNG 1672x941`.
- `magick <scratch copy> -crop ... +repage -resize ... <scratch crop>`; focused crops covered faces, torso/limbs, hands/feet, the stanza 5 elder group and hill face. Crops were inspected visually and removed after review.
- For Krishna skin medians, each patch below was a 12×12 crop from the candidate copy. The enlarged patches were checked visually to contain only blue skin pigment, with no facial feature, jewelry, garment, or background. The per-channel RGB medians were computed from the 144 native pixels in each patch.

## Candidate findings

### Stanza 1 — v002

- **Candidate:** `artifacts/d062/s001/landscape/candidate-v002.png`
- **SHA-256:** `adb606b19051c06fede27137a60f73d7ad45d85208a88a3906f47ce3df82eec3`
- **Review time:** 2026-11-15T21:36:11Z
- **Anatomy:** Krishna is a single youthful, two-armed figure with two attached legs. The standing pose and the visible gopa bodies read as connected and proportionate. No extra, fused, or missing limbs or duplicated people are apparent. Peripheral villagers run naturally off the left edge.
- **Faces:** Krishna and the visible cowherds have distinct, legible faces. Nanda is the mature, moustached man in cream and olive. No malformed or duplicated face is apparent.
- **Hands/feet:** Krishna's open hand and hand at his chest are separate and attached; the visible hand shapes resolve as five digits each. The gopa's pressed palms and Nanda's folded arms are coherent; the lowered gopa hand has five visible digits. Both Krishna feet are fully inside frame with five toes rendered on each at this scale; no extremity is cut off.
- **Clothing and cast:** Krishna wears a yellow dhoti, muted red-orange shawl, one low band and one upright feather; his forehead is plain. The cowherds wear traditional cream, olive and maroon wraps. Multiple necklaces and arm ornaments are visible as ordinary painted devotional iconography. Ritual pots, fruit, grain, flowers, and leaves establish the preparations.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including the foreground ground and corners. No separate outer border or cinematic beam is visible.
- **Scene and caption fidelity:** The scene depicts Krishna addressing Nanda and a small group amid offerings. It matches the mapped 001 caption and stanza plan. The mapped photo is used for story/cast context; the mural composition is independently recomposed.
- **Character/deity contract:** Krishna's skin is deep matte blue and reads as blue throughout. Skin-only sample at native `(1045,350)`, 12×12 px: median RGB `(96,103,105)`. The face is youthful, forehead unmarked, and headwear is one low gold band plus one upright feather. Nanda has the required moustache, mature appearance, cream dhoti and muted olive upper cloth. No other deity appears.
- **Verdict: pass.** Exact-checksum scope only.

### Stanza 2 — v004

- **Candidate:** `artifacts/d062/s002/landscape/candidate-v004.png`
- **SHA-256:** `39acb864d346a7f68f8069007e6c6b4aa0e7540ec94d40883008e282127cbc52`
- **Review time:** 2026-11-15T21:36:11Z
- **Anatomy:** Krishna is seated with a coherent two-arm, two-leg pose; Nanda and the supporting villagers have natural attached limbs. The cattle have coherent heads, four legs and tails; no duplicated or malformed animal is apparent.
- **Faces:** Krishna's calm youthful face and Nanda's moustached mature face are distinct and readable. Supporting faces are varied; no malformed or repeated person is apparent.
- **Hands/feet:** Nanda gestures with two attached hands, each with five visible digits. Krishna's hand at his chin and resting hand are coherent; the chin-side hand has five visible digits and the resting hand is mostly obscured by the pose. Visible feet/legs are not cut off at the frame. Cow legs and hooves are separated and readable.
- **Clothing and cast:** The cream dhoti and muted olive cloth identify Nanda; Krishna wears a yellow dhoti, muted red-orange shawl, low band and one feather. His forehead is plain. Several necklaces and arm ornaments are visible as ordinary temple-mural iconography. A small distinct group, cattle, pasture, village homes, and water are present.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible, including water, ground and corners. No separate border or cinematic light effect is visible.
- **Scene and caption fidelity:** Nanda explains the yearly sacrifice to Krishna in a calm pasture with cattle and water. The mapped 002 caption's rain dependence and the plan's settled, non-storm scene are conveyed. The reference photo's Indra image is not repeated, consistent with the plan's explicit instruction that Indra, rain, clouds, lightning and storm attack are absent in stanza 2.
- **Character/deity contract:** Krishna reads as deep matte blue. Skin-only sample at native `(990,470)`, 12×12 px: median RGB `(89,106,116)`. His youthful face, unmarked forehead, low band, single feather, yellow dhoti and muted red-orange shawl match the contract. Nanda's moustache and cream/olive cowherd clothing match his contract. Indra is not depicted, as required.
- **Verdict: pass.** Exact-checksum scope only.

### Stanza 3 — v002

- **Candidate:** `artifacts/d062/s003/landscape/candidate-v002.png`
- **SHA-256:** `d696b7e055798cd4ba04d896ab53c229610b5c08e0ba91b632d0c9a6cd6aaff5`
- **Review time:** 2026-11-15T21:36:11Z
- **Anatomy:** Krishna stands with one face, two attached arms and two legs. The gathered cowherds and seated cattle have coherent visible anatomy; no extra or fused limbs or accidental duplicate person/animal is apparent. A few peripheral figures are naturally close to the left edge but their visible extremities remain within the frame or continue naturally off it.
- **Faces:** Krishna's youthful face is clear; the gopas' faces are varied and readable. No malformed face or cloned person is apparent.
- **Hands/feet:** Krishna's chest-level hand and extended pointing/indicating hand each resolve as five digits; both are attached. The visible feet are inside the frame and show five toes each. Gopa prayer and gesture hands are coherent; some digits are naturally obscured by overlap.
- **Clothing and cast:** Krishna's yellow dhoti and red-orange shawl, low band and upright peacock feather are present. He has multiple painted necklaces and arm ornaments, ordinary iconography. Cowherds wear muted traditional wraps; the cattle show coherent ears, horns and legs. The forest, stream and pasture are present.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible in the sky, ground, stream or corners. No border or cinematic beam/volumetric lighting is apparent.
- **Scene and caption fidelity:** Krishna addresses the gopas at a forest edge and indicates the trees; the stream, pasture and trees correspond to the mapped 003 caption and plan. The mapped photo's mountain-lifting episode is not imported into this earlier stanza.
- **Character/deity contract:** Krishna's forehead is plain and smooth; the low band carries one upright feather, with no tall crown. Skin-only sample at native `(1080,250)`, 12×12 px: median RGB `(98,114,120)`. It reads as deep matte blue throughout, not a different skin color. No second physical Krishna appears.
- **Verdict: pass.** Exact-checksum scope only.

### Stanza 4 — v002

- **Candidate:** `artifacts/d062/s004/landscape/candidate-v002.png`
- **SHA-256:** `1c7dd84388a42de1a9cb2c42f3c5a40661d6abff71ad65a49fd532c598157bce`
- **Review time:** 2026-11-15T21:36:11Z
- **Anatomy:** Krishna has one face, two attached arms and two legs. The cowherds, Brahmin elders, and cattle show coherent connected anatomy; no fused or duplicated figure is apparent. The seated elders' lower limbs are partly concealed by natural crossed-leg poses and cloth folds.
- **Faces:** Krishna and the distinct gathered men have readable faces. The two elder priests at right have distinct elder appearances. No face is malformed or cut off by the image frame.
- **Hands/feet:** Krishna's raised and offering gestures each have five visible digits and connect to the arms. The elders' raised blessing and offering hands are connected; their other hands are partly hidden by cloth or pose. Cowherd prayer hands are coherent. Krishna's visible feet and the cow hooves are inside the frame.
- **Clothing and cast:** Krishna's yellow dhoti and muted red-orange shawl are present; the forehead is plain and his low band and feather are visible. He wears multiple necklaces/garlands and painted armlets, an observation of ordinary devotional iconography. Brahmin elders wear cream wraps, sacred marks/threads and simple upper cloths; the gopas are in muted village clothing. Cattle graze below.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible in the sky, ground, or corners. A flat pale circular halo is behind Krishna's head; it is a static iconographic disc, not a beam or volumetric light effect. No outer frame is present.
- **Scene and caption fidelity:** Krishna gestures toward Govardhana, with water, grazing cattle and distinct elders present, matching the mapped 004 caption and the plan's hill/water/livelihood scene.
- **Character/deity contract:** Krishna reads as deep matte blue. Skin-only sample at native `(425,425)`, 12×12 px: median RGB `(94,105,104)`. Face, plain forehead, one low band, one feather and ordinary two-arm/two-leg form match the chapter contract. Supporting figures are distinct and ordinarily proportioned; no Indra appears.
- **Verdict: pass.** Exact-checksum scope only.

### Stanza 5 — v002

- **Candidate:** `artifacts/d062/s005/landscape/candidate-v002.png`
- **SHA-256:** `df32e27b7e25a799b1ad6e79b37e90d3562e1cad66234b4a9684231678be6db0`
- **Review time:** 2026-11-15T21:36:11Z
- **Anatomy:** Krishna has one face, two attached arms and two legs, with no separate second bodily Krishna. The cowherds, three seated elders and circumambulating figures have coherent visible anatomy. No malformed or fused body is apparent. The hill is an inanimate mountain form with an integrated face.
- **Faces:** Krishna, the cowherds, and the seated elders have readable, distinct faces. In the right-hand seated group, three separate men are visible: a white-bearded elder raising one palm, a bald/shaved elder, and a second white-bearded elder. This is a countable extra elder, not an ambiguous face or a hidden limb.
- **Hands/feet:** Krishna's two offering hands are attached and each visibly has five digits; visible feet show five toes each and are not cut off. The three seated elders' visible hands are connected to their arms; the raised palm resolves as five digits. The walkers on the right path have separate legs and feet; no hand or foot defect is apparent.
- **Clothing and cast:** Krishna wears the required yellow dhoti, muted red-orange shawl, plain forehead, low band and one feather. He has painted necklaces/garland and arm ornaments as ordinary iconography. Cowherds are distinct and wear simple village wraps; the elders wear cream wraps and priestly marks. **A third seated Brahmin elder is present** in the group at approximately native x=1010–1660, y=380–740. The final plan requires exactly two visibly distinct Brahmin elders (frozen plan lines 250–258); this third figure is not disclosed by the candidate status and is visible at full-image scale.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible in the ground, hill, vegetation, or corners. No border or cinematic lighting effect is present.
- **Scene and caption fidelity:** The offering arrangement, reverence toward Brahmins, Govardhana, and a circumambulation path are present and align with the mapped 005 caption. The hill bears a face integrated into its slope. **Disclosed deviation present:** this hill-face symbol is expressly permitted in the final plan and reference guidance (lines 250, 253, 269); it is integrated into the mountain and is not a separate body. This disclosed condition is not the reason for the verdict.
- **Character/deity contract:** Krishna reads as deep matte blue. Skin-only sample at native `(390,390)`, 12×12 px: median RGB `(96,104,109)`. The blue is consistent with the contract. Krishna's single face, two arms, plain forehead and low band/feather match the youth contract. However, three seated Brahmin elders conflict with the stanza-specific exactly-two requirement.
- **Verdict: needs-fix.** The extra seated Brahmin is a genuine, readily visible structural count defect not disclosed in the plan's candidate status. The disclosed integrated hill face is present and permitted.

## Recommendation and completion inventory

Recommend replacing or revising only stanza 5's selected landscape candidate to show exactly two distinct Brahmin elders, then obtaining a fresh exact-checksum review for that new image. Stanzas 1–4 pass this review. All results apply only to the five listed checksums; none confers human art approval or changes the approval manifest. The pending captain art approval is the standing state; this review raises no new captain decision. Captain-call inventory for this review: empty.

## Evidence files and references

- Frozen plan: `/home/gehariharan/firstmate-narayaneeyam-mate/data/d062-production/review-contract-a/art/plans/d062.json` (stanza mappings/constraints cited above).
- Frozen series and character contracts: the seven paths and byte hashes in the integrity table.
- Chapter scene commentary: `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/content/daskams/d062.json` lines 17–62.
- Caption source: `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/intake/D062/photo-captions.txt` lines 1–24; mapped reference photos are `intake/D062/001.jpg` through `005.jpg`.
- Candidate files were inspected read-only in `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d062/s001..s005/landscape/`; their exact versions and checksums appear in the findings above.
