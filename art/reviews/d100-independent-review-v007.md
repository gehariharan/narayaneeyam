# D100 independent landscape candidate review

## Scope and result

I independently inspected the nine selected dasakam 100 landscape candidates for stanzas 1–6, 8, 9, and 10. I read the byte-frozen final plan and character contracts below, the chapter source, the numbered reference photos `001.jpg`–`006.jpg` and `008.jpg`–`010.jpg`, and their caption text. The plan maps photos and captions 001–011 one-to-one to stanzas 1–11; 7 and 11 are outside this review. I inspected each candidate at its native 1671/1672 × 941 resolution, then inspected focused crops in `/tmp/d100-review-k/` for the visible faces, hands, feet, torsos, groups, and stanza 5 curves.

All nine candidate checksums matched the requested values. Each verdict below applies only to its named checksum. All candidates remain **unapproved**; this report is an independent review and does not grant artwork approval. No project file or approval manifest was changed.

Review time recorded for each candidate: **2026-11-18T02:15:34Z** (UTC; completion of the focused inspection pass).

## Contract checksum evidence

The following actual SHA-256 values match the brief's expected values:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d100.json` (final frozen plan) | `4799f02c6f74f3686dbfbeb3a570d6fc622c6710961333f93c3362284a7e5483` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/narada/character.json` | `841aa373baad9230944390a5019523cea424d23fd3f96ef81b149e7aa4f98806` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `art/bible/characters/d100-upanishad-sundaris/character.json` | `b55c74bcb1725276b30eac416cfba9f45858459647a286ce5a2ca66481aac724` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |

## Inspection evidence and references

Commands used included:

- `sha256sum <each of the nine candidate paths> <each of the eight contract paths>` — every candidate and contract digest matched the expected checksum in the task brief.
- `identify -format '%f %wx%h %[colorspace]\\n' <each candidate>` — all are sRGB landscape files: eight are 1672×941 and stanza 5 is 1671×941.
- `magick <candidate> -crop ... +repage -resize ... <scratch crop>` and `view_image` — native-resolution close views were made for stanza 1's cast and raised hand; stanza 2–4 faces; stanza 5's flute hands and curves; stanza 6's chest; stanza 8's legs and toes; stanza 9's feet; stanza 10's soles and worshippers. Scratch views are under `/tmp/d100-review-k/`, not in the project.
- `magick <stanza 1 candidate> -crop 11x11+<x>+<y> +repage -depth 8 RGB:-` with per-channel medians calculated from the returned pixels — measurements below.

The relevant scene requirements are in final plan stanza entries at `art/plans/d100.json:29,68` (s001), `:78,114` (s002), `:124,159` (s003), `:169,204` (s004), `:214,249` (s005), `:259,294` (s006), `:349,384` (s008), `:394,429` (s009), and `:439,474` (s010). Their sourced chapter entries are at `content/daskams/d100.json:17,34,51,68,85,102,136,153,170`; numbered photo captions are under `intake/D100/photo-captions.txt` headings 001–006 and 008–010. The image style and no-text/no-watermark rules are in the series bible (`series.json:4-60`); youthful Krishna identity and anatomy are in `krishna-vrindavan-youth/character.json:5-61`; supporting-character contracts are in the named character files (Bhattathiri `:16-33`, Narada `:16-28`, sages `:12-22`, Upanishad women `:13-25`).

## Stanza-by-stanza findings

### Stanza 1 — `candidate-v012.png`

- Candidate: `artifacts/d100/s001/landscape/candidate-v012.png`
- SHA-256: `fde9800a3a194c92a8ff41d27b4c1e3459483707ad677cec7236a0f4d1741b07`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: Krishna is seated on the lotus with both arms attached. The raised palm at approximately x=595–657, y=280–451 has four upright fingers and one thumb; the relaxed hand on the knee is attached and its visible fingers are distinct. I saw no fused or duplicated people in the surrounding group.
- Faces: Krishna has one complete, serene youthful face. Bhattathiri is clean-shaven with a shaved scalp, tuft, and ash stripes. Narada and both sages have distinct faces; the three women have distinct faces, not repeated copies. No face is cut off.
- Hands/feet: The raised hand has five digits. The relaxed hand's visible digits remain separately countable; the three women's prayer hands are joined in a recognizable prayer gesture. Krishna's visible feet are attached and inside the image. No clear missing or extra digit is visible at this scale.
- Clothing and cast: The foreground Bhattathiri wears modest cream cloth and prayer beads. Narada has a veena; two distinct sages and three fully clothed women form the middle-distance attendant group. The women are not exposing skin beyond ordinary traditional dress. The plan's disclosed skin-color deviation is present: I measured 11×11 skin-only patch medians (RGB; R−B) at Bhattathiri forehead/cheek `(170,475)` = `(221,121,44); 177`; Narada `(390,170)` = `(173,94,46); 127`; sage A `(1220,155)` = `(209,114,40); 169`; sage B `(1500,155)` = `(160,90,36); 124`; woman A `(1115,430)` = `(124,61,29); 95`; woman B `(1330,430)` = `(190,101,43); 147`; woman C `(1540,430)` = `(200,109,43); 157`. Krishna cheek `(790,300)` = `(49,106,166); B−R 117`. Patch values vary with placement. In the full image the human skin reads warm brown through burnt-orange mineral pigment, especially the sages; it is visibly warmer than the plan's approximate R−B 120 target, but the disclosed sample deviation does not present as an anatomy, cast-identity, or modesty defect to me.
- Text/signature artifacts: No readable text, signature, watermark, or logo found in the image, including the visible corners, ground, and water.
- Scene and caption fidelity: The blue-lily setting, seated first darshan, praying Bhattathiri, Narada, sages, and women as personified Upanishads are all present. Compared with photo/caption 001, the candidate preserves the cast and first-vision idea while using the required matte series treatment and composition.
- Character/deity contract: Krishna has one face, two arms, deep matte blue skin, curls, a single upright feather and low band, yellow dhoti, and muted red-orange drape. Bhattathiri is clean-shaven and has the expected tuft and sacred-ash marks; Narada is distinct and carries a veena; sages and women are distinct and modestly dressed. The women read brown to orange-brown, and the disclosed high R−B samples are recorded above.
- Verdict: **pass**.

### Stanza 2 — `candidate-v003.png`

- Candidate: `artifacts/d100/s002/landscape/candidate-v003.png`
- SHA-256: `e2a58f53fbfd0acb63d2cce5d9b4a0f9288d8be7d8c02a864add1bb1d5b1db3d`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: A complete single head and shoulders fill the frame; no detached or doubled features.
- Faces: The youthful face is complete, calm, and unmarked. Hairline, eyes, nose, mouth, and chin are all inside the frame.
- Hands/feet: None are in view or required by this head-and-shoulders composition; no cut-off key extremity is present.
- Clothing and cast: The visible yellow and muted red-orange garments are modest. Only Krishna is depicted, consistent with the plan's focused study.
- Text/signature artifacts: None visible, including in the landscape margins.
- Scene and caption fidelity: The dark curls, single peacock feather, broad bare forehead, and flower garland correspond to caption/photo 002; no forehead paste/tilak is visible, as required by the final plan and continuity contract.
- Character/deity contract: One youthful Krishna, low band rather than a tall crown, plain forehead, matte blue skin, and long curls. No palace crown, extra character, or unapproved forehead mark.
- Verdict: **pass**.

### Stanza 3 — `candidate-v002.png`

- Candidate: `artifacts/d100/s003/landscape/candidate-v002.png`
- SHA-256: `af02cf81ba642c9c234ede7149ebd0283e679099bab8484e2263fcdf670cf250`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: The complete face and hairline stay inside frame; facial features are connected and normally placed.
- Faces: Both eyes, brows, nose, and mouth are complete. The gaze reads calm and compassionate, without malformed or duplicated features.
- Hands/feet: Not shown or required in this eye study; no key extremity is cut off.
- Clothing and cast: Only Krishna's head and shoulders are present; no exposed-body concern.
- Text/signature artifacts: None visible in the image or corners.
- Scene and caption fidelity: The large lotus-shaped eyes and brows respond directly to caption/photo 003's eye-focused scene.
- Character/deity contract: Youthful Krishna's one face, matte blue skin, curls, low band and single upright feather are consistent; his forehead remains unmarked.
- Verdict: **pass**.

### Stanza 4 — `candidate-v002.png`

- Candidate: `artifacts/d100/s004/landscape/candidate-v002.png`
- SHA-256: `7a7bb59ac3700ccec4e1acf2df5ec6e59d8ce0de5f374b453e6843a80c8af6a0`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: The full head and chin are inside frame. Nose, teeth, mouth, and both ears remain connected and readable.
- Faces: One complete face with a modest smile; the green cheek accents are on the cheeks and do not obscure eyes or other features.
- Hands/feet: Not shown or required in this face study; no key extremity is cut off.
- Clothing and cast: Only Krishna's head and shoulders are visible; no exposed-body concern. The flowered low band and fish-shaped earrings are painted ochre ornaments, not metallic renderings.
- Text/signature artifacts: None visible, including at the edges.
- Scene and caption fidelity: Both makara-style earrings, green/emerald cheek accents, red lips, teeth, and smile correspond to caption/photo 004.
- Character/deity contract: The low band and feather remain consistent with the youthful form; the forehead is plain. The band has a central floral ornament, but I do not read it as a tall or palace-like crown beyond the repeated headband treatment in the selected scenes.
- Verdict: **pass**.

### Stanza 5 — `candidate-v010.png`

- Candidate: `artifacts/d100/s005/landscape/candidate-v010.png`
- SHA-256: `f3c50d9c46e2996699b0c079fdd5e573d0f1e953fb76056a8c99832882190d0c`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: Krishna has two attached arms and hands, one flute, and one complete face. No duplication or fused limbs found.
- Faces: Krishna's face and plain forehead are complete. Bhattathiri has one distinct face, ash stripes, and a shaved scalp/tuft.
- Hands/feet: In the enlarged crop, both flute hands are attached; the left-side hand shows four fingers over the flute and a thumb beneath it, and the right-side hand shows four fingers with the thumb separately visible around the flute. The flute contacts the lips. Bhattathiri's lower-left foot is concealed under the cream dhoti, as disclosed in the plan; cloth reaches the lower frame edge, with no foot visibly cut by the edge.
- Clothing and cast: Krishna's dhoti and shawl and Bhattathiri's cream dhoti are modest. The image contains no accidental extra person.
- Text/signature artifacts: No readable text, signature, or watermark found, including in the ground, water, or corners.
- Scene and caption fidelity: The flute, bangles, devotional Bhattathiri, and musical setting fit caption/photo 005. The paired halo-side curves are solid painted ochre and cream, separated into tapered wave-like strokes on both sides of the halo. Enlarged crops make them read as stylized musical/sound ornament to me, not beams or light rays: they have no glow or shaft, and their stacked wave contour relates to the flute music. This is acceptable against the plan's request for painted musical curves and its avoidance of cinematic beams/rays.
- Character/deity contract: One youthful Krishna with a single feather and low band, plain forehead, two arms and matte blue skin; Bhattathiri's clean-shaven face and sacred marks are present. The curves do not add a character mark or crown-like regalia.
- Verdict: **pass**.

### Stanza 6 — `candidate-v002.png`

- Candidate: `artifacts/d100/s006/landscape/candidate-v002.png`
- SHA-256: `c3099e06adb9ac76f412904af3c97ce65fed9e41327820f45c58ba6b2b8ef3de`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: The head-through-waist figure has two connected shoulders and arms. The arms continue naturally to the lower image edge; no malformed joint or fused body is apparent.
- Faces: One complete youthful face, with both eyes, nose, mouth, ears, and hair inside the frame.
- Hands/feet: Hands and feet are outside this torso-focused composition and are not required. The visible arms are attached at the shoulders and are not severed at a joint.
- Clothing and cast: Krishna's shawl and dhoti are modest. Flower garland, necklaces, arm ornaments, and bees are visible; the jewelry is more ornate than the simple identity band but the chest jewelry is specifically required by this stanza and remains painted rather than reflective metallic gold.
- Text/signature artifacts: None visible in the background, ground, water, or corners.
- Scene and caption fidelity: The red-tinted neck, central Kaustubha-like jewel, Srivatsa mark, pearl/gem necklaces, forest flowers, and distinct bees correspond to caption/photo 006. Photo 006 is used for chest and bee context; the candidate follows the matte series treatment.
- Character/deity contract: The single face, blue skin, curls, low feathered band, two arms, and youthful form are consistent. The ornaments are chest-specific and do not become a tall crown or extra limb.
- Verdict: **pass**.

### Stanza 8 — `candidate-v003.png`

- Candidate: `artifacts/d100/s008/landscape/candidate-v003.png`
- SHA-256: `23193fab518c2ebed9e70e119343c77b715628e2bf8b8b5749c3288ac89c5674`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: Krishna's seated lower body is continuous. Both knees, ankles, and feet connect naturally; no fused legs or duplicated body parts are apparent.
- Faces: The face is visible and complete, with no malformed or duplicated feature.
- Hands/feet: Both hands rest on the knees, with four fingers and a thumb distinguishable on each. Enlarged foot crop shows five toes on each foot; the toes are attached and separately outlined. Neither ankle nor foot is cut off by the frame.
- Clothing and cast: Opaque yellow cloth covers both thighs. Bare torso and arms use ordinary devotional dress; the framing is not sexualized. Krishna is the only figure.
- Text/signature artifacts: None visible, including near the cloth, floor, foliage, or frame corners.
- Scene and caption fidelity: The crossed seated pose, covered thighs, knees, and tapered ankles match the caption/photo 008 subject. The reference photograph is used for subject context; the plan governs the matte rendering.
- Character/deity contract: One youthful Krishna with blue skin, curls, plain forehead, single feather/low band, two arms and legs. No extra limb or palace-like crown.
- Verdict: **pass**.

### Stanza 9 — `candidate-v005.png`

- Candidate: `artifacts/d100/s009/landscape/candidate-v005.png`
- SHA-256: `d4f98d515d2535a25e0e4bbe234ed12670ad5ec429ebcefd56c2e8da4aca5663`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: Krishna's two ankles and feet are complete, naturally attached, and fully inside the frame. The tortoise has one recognizable head and shell; the small worshippers are separate figures.
- Faces: Krishna's face is complete in profile. The three worshipper faces are distinct and not visibly malformed or duplicated.
- Hands/feet: The enlarged view shows five separated red-tipped toes on each foot and two anklets. Krishna's raised open hand has four fingers and a thumb; his other hand rests on his knee with its visible digits distinct. Worshippers' folded hands read as prayer gestures.
- Clothing and cast: Krishna's yellow cloth and red-orange shawl are modest. The three worshippers wear cream/maroon traditional garments. Peripheral cloth/limbs meet the mural edge naturally; no central key extremity is cut off.
- Text/signature artifacts: None visible in the water, ground, foliage, or corners.
- Scene and caption fidelity: The anklets, red nail tips, distinct Kurma supporting a mountain, and three worshippers orient toward Krishna's feet, matching caption/photo 009 and the plan.
- Character/deity contract: Krishna remains a one-faced, two-armed, youthful blue form with plain forehead and low band/single feather. The tortoise is an intentional scene creature, not a duplicate or malformed human figure.
- Verdict: **pass**.

### Stanza 10 — `candidate-v006.png`

- Candidate: `artifacts/d100/s010/landscape/candidate-v006.png`
- SHA-256: `9728b4b7c51573d8cd7a7c359d039872cfd89e237d26bfdff459fd14eaaa46ee`
- Review time: 2026-11-18T02:15:34Z
- Anatomy: Krishna reclines with two connected arms and complete attached legs/feet. Four distinct worshippers are in the right group; their bodies and prayer poses remain separate.
- Faces: Krishna has one complete face. The four worshippers have distinct, legible faces; none is malformed or accidentally repeated.
- Hands/feet: Both soles are complete and inside frame. Enlarged crop shows exactly five toes on each foot. The hand on the knee has a thumb plus four visible fingers; the other hand is bent beside the hair/ear. Small worshippers' prayer hands are recognizable paired hands.
- Clothing and cast: Krishna's yellow cloth and red-orange drape are modest. The worshippers wear traditional cream cloth and prayer beads. Natural body crop at the lower-right mural edge affects only peripheral cloth/feet, not a face or key extremity.
- Text/signature artifacts: No readable text, signature, watermark, or logo found, including water, ground, or corners. The pink heart-shaped lotus motif is a picture symbol required by the plan, not text.
- Scene and caption fidelity: Two prominent soles, small yogis, water/mountain setting, and the heart-shaped motif convey the prayer for the Lord's feet to rest in Bhattathiri's heart, consistent with caption/photo 010.
- Character/deity contract: One youthful Krishna, single upright feather and low band, plain forehead, two arms, matte blue skin; four distinct worshippers. The visible gold is flat painted ochre, with no reflective metallic treatment.
- Verdict: **pass**.

## Recommendation and captain-call inventory

All nine exact-checksum candidates pass the stated visual review threshold. Stanza 1's disclosed elevated skin-only R−B samples are present and measured above; the full-image appearance is recorded separately from those measurements. The stanza 5 paired curves read as musical ornament and are acceptable against the final plan. No defect or unresolved product choice from this review requires a captain decision. This review does not approve any artwork; all nine candidates remain unapproved.

Captain-call inventory for this review: **empty**.
