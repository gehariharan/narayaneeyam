# D047 landscape candidate review

This is an independent, read-only visual review of the three requested landscape candidates. The verdicts bind only to the exact candidate SHA-256 values below. I inspected each image at native resolution, compared it with its mapped intake photo and caption, and inspected focused enlargements of faces, hands, feet, bodies and scene props. ImageMagick crops and scratch files were written only under `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/.review-scratch/`; source candidates and references were not modified. No existing review records were consulted. No approval is granted or implied; all artwork remains unapproved.

## Verification and evidence

`sha256sum -c .review-scratch/expected-sha256.txt` returned `OK` for all three candidates, their mapped reference photos, all frozen contracts, the reference map and photo captions. The dimensions reported by `identify` agree with the final plan: stanza 2 1671×941, stanza 4 1672×941, stanza 6 1670×941.

Actual SHA-256 values of the frozen contracts read:

- Final plan `art/plans/d047.json`: `a369da723f9cc09166855574af00e0059123151ef1cfd820e6703ec53444dedf`
- Series bible `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Krishna character `art/bible/characters/krishna-vrindavan-youth/character.json`: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- Yashoda character `art/bible/characters/yashoda/character.json`: `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`
- Gopikas character `art/bible/characters/gopikas/character.json`: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`
- Monkeys character `art/bible/characters/monkeys/character.json`: `902a357279ad316974426d4de863014fd037a750135b9385f654fdf771ea4481`
- Devas character `art/bible/characters/devas/character.json`: `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138`

Additional verified files:

- `content/sources/d047/reference-map.json`: `e2b351145c7e03746da82b00c73f3bfa6131345df49edc6a76092e7fd69bf5e2`
- `intake/D047/photo-captions.txt`: `b5c8bc79d2642672ad20fd7d1fedbffe3f2852480105e29bdddb1def1801a4ba`

The plan maps stanzas 2, 4 and 6 to photos 002, 004 and 006 respectively ([plan entries](/home/gehariharan/firstmate-narayaneeyam-mate/data/d047-production/review-contract-c/art/plans/d047.json:98), [reference map entries](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/content/sources/d047/reference-map.json:23), [caption headings](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/intake/D047/photo-captions.txt:6), [chapter content](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/content/daskams/d047.json:27)). The mapped references are the checksum-verified `intake/D047/002.jpg`, `004.jpg` and `006.jpg`.

For close inspection I used `magick <read-only-input> -crop <region> +repage -resize ... <absolute-scratch-output>` and viewed each original full image plus enlarged crops. Crop filenames and source-image pixel regions:

- S002: `s002-face-feed.png` (360,100; 700×400), `s002-reaching-hand.png` (1160,280; 250×220), `s002-hands-torso.png` (470,330; 450×270), `s002-feet.png` (520,620; 450×290), `s002-yashoda-foot.png` (700,820; 300×110).
- S004: `s004-face.png` (180,60; 600×350), `s004-forehead-detail.png` (540,95; 180×180), `s004-hands.png` (300,180; 560×420), `s004-reaching-hand.png` (740,475; 240×190), `s004-spill.png` (550,570; 800×370).
- S006: `s006-faces-torso.png` (470,120; 650×520), `s006-hands-rope.png` (700,480; 430×280), `s006-toes.png` (800,700; 310×220), `s006-gopikas.png` (0,0; 450×720), and `s006-yashoda-arm.png` (450,440; 450×220).

Skin measurements are medians from 31×31 pixel skin-only patches sampled in the original PNG with ImageMagick output parsed using Python's standard library. The plan's red-minus-blue guide is approximate; verdicts below also state the visual read at full image size.

## Stanza 2 — v014

- **Reviewed:** 2026-11-18 04:43:11 UTC
- **Candidate:** `artifacts/d047/s002/landscape/candidate-v014.png` — **SHA-256:** `2b6fe0332990096e77fa7ee045cd0f0cac249c6c0c2616625870d92a2102c262`
- **Reference:** `intake/D047/002.jpg` — **SHA-256:** `8bcc8c1cbf5d660c7a43ca328f20c0d5d096939d0e3cc09347e1277401cff925`
- **Anatomy:** Yashoda and Krishna are one coherent pair with connected limbs and ordinary child/adult proportions. No extra, fused or duplicated body is visible.
- **Faces:** Both faces are intact and legible. Krishna's forehead is plain; the low band and upright feather match the chapter form contract. No malformed facial features are apparent.
- **Hands/feet:** Yashoda's reaching hand shows a thumb and four fingers; her supporting hand shows a thumb and four fingers. Krishna's open hand shows a thumb and four fingers. Krishna's visible foot and Yashoda's visible foot each show five toes. No fused or missing digits are visible.
- **Clothing and cast:** Yashoda's cream/rose sari and veil are modest and within her palette. Krishna wears muted yellow cloth and a red-orange shawl. No other cast members appear.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible, including around the hearth, floor and corners.
- **Scene and caption fidelity:** The image clearly shows Krishna feeding at Yashoda's lap while she turns and reaches toward the overflowing milk over the lit cooking fire. This supplies the previously missing required lap-feeding action and the interruption; the mother and child are not duplicated. It matches the mapped photo/caption and the stanza-2 scene brief ([plan](/home/gehariharan/firstmate-narayaneeyam-mate/data/d047-production/review-contract-c/art/plans/d047.json:98), [caption](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/intake/D047/photo-captions.txt:6)).
- **Character/deity contract and skin:** Krishna reads as deep matte blue with a plain forehead and ordinary child anatomy. Yashoda's skin-only medians were cheek at (920,210) RGB 188,103,58, **R−B 130**; forearm at (1080,420) RGB 189,103,58, **R−B 131**; reaching palm at (1280,400) RGB 189,103,58, **R−B 131**. These values are 10–11 above the plan's approximate 120 guide and confirm the plan-disclosed deviation. At full native size her skin reads as warm medium-brown/terracotta, not saturated orange. No skin defect is visible.
- **Verdict: PASS.**

## Stanza 4 — v007

- **Reviewed:** 2026-11-18 04:43:11 UTC
- **Candidate:** `artifacts/d047/s004/landscape/candidate-v007.png` — **SHA-256:** `146b8da014550f36c71719205f90b83b2b994f802973d468b373200993c5bd31`
- **Reference:** `intake/D047/004.jpg` — **SHA-256:** `24d6ce760d1af4e94fb235cac6ac74beeb0933b11df8db2d53c01f466c080652`
- **Anatomy:** Yashoda is a single, naturally proportioned figure. Both arms connect normally; there is no duplicate person or detached limb.
- **Faces:** Her face is intact and expressive. **No pale forehead mark remains** in the enlarged forehead view; the forehead is plain.
- **Hands/feet:** Both visible hands show a thumb and four fingers. Her feet are fully covered by the sari, so toes are not visible or countable; nothing is cut off by the frame.
- **Clothing and cast:** The cream, rose and ochre sari/veil fit the contract. Her necklace, earrings and bangles read as modest traditional adornment rather than palace regalia. She is the only person, consistent with the plan's focus on Yashoda.
- **Text/signature artifacts:** No readable text, signature, logo or watermark appears in the wall, floor, spilled curd or corners.
- **Scene and caption fidelity:** Yashoda has returned to the broken pot; shards and curd are spread clearly across the floor. Krishna is absent, as the final plan requests. The scene matches photo 004 and caption 4 ([plan](/home/gehariharan/firstmate-narayaneeyam-mate/data/d047-production/review-contract-c/art/plans/d047.json:198), [caption](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/intake/D047/photo-captions.txt:17)).
- **Character/deity contract and skin:** Yashoda's veiled dark hair, gentle face and sari palette fit the character contract. Skin-only medians: cheek at (625,210) RGB 167,91,46, **R−B 121**; upper arm at (400,380) RGB 165,90,45, **R−B 120**; raised palm at (492,290) RGB 167,92,47, **R−B 120**; reaching forearm at (830,550) RGB 163,88,45, **R−B 118**. The image reads as warm brown, not orange.
- **Verdict: PASS.**

## Stanza 6 — v018

- **Reviewed:** 2026-11-18 04:43:11 UTC
- **Candidate:** `artifacts/d047/s006/landscape/candidate-v018.png` — **SHA-256:** `2e29203169ecc0a24104fd0254af63d32d5d5162d3f7a9f7127f5d5134c7ae85`
- **Reference:** `intake/D047/006.jpg` — **SHA-256:** `892743168a1c7b71f0798ca9c28e147f10048415a9284d588e0cb72ba9aed797`
- **Anatomy:** Yashoda holds Krishna against her torso; Krishna's two arms and legs connect naturally. Yashoda's rope-gripping and supporting arms are attached. Two distinct gopikas watch behind them; no fused or duplicated people are visible.
- **Faces:** Yashoda, Krishna and both gopikas have intact, distinct faces. Krishna's forehead is plain. The headband and single peacock feather follow the Krishna contract.
- **Hands/feet:** Krishna's left and right feet each show five toes in the native detail view. Yashoda's supporting hand shows a thumb and four fingers; her rope-gripping hand wraps the cord, with some digits naturally occluded and no visible extra or malformed digit. The gopikas' small, overlapping prayer hands are not separately countable at native resolution; nothing visibly wrong at that scale.
- **Clothing and cast:** Yashoda wears a cream sari with muted olive; Krishna wears yellow cloth and a muted red-orange shawl. The two women wear distinct, modest village saris and remain behind Yashoda at a respectful distance. Yashoda has a small cream flower beside her ear, which reads as ordinary modest hair adornment; it is not a forehead mark or palace ornament.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible in the floor, window, wall, mortar or corners.
- **Scene and caption fidelity:** Yashoda is holding Krishna and preparing a simple rope around his waist; the cord visibly continues toward the mortar, and her friends watch. This matches the mapped photo/caption and final scene brief ([plan](/home/gehariharan/firstmate-narayaneeyam-mate/data/d047-production/review-contract-c/art/plans/d047.json:301), [caption](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/intake/D047/photo-captions.txt:27)).
- **Character/deity contract and skin:** Krishna is deep matte blue, with ordinary child anatomy and the disclosed simple headwear. Yashoda and both gopikas read as warm brown, not orange. Skin-only medians: Yashoda cheek at (780,250) RGB 177,110,75, **R−B 102**; Yashoda forearm at (600,580) RGB 177,108,72, **R−B 105**; gopika 1 upper arm at (100,350) RGB 179,113,76, **R−B 103**; gopika 2 cheek at (330,150) RGB 175,109,75, **R−B 100**. The final-plan note discloses a measured warm-brown deviation; my measured patches and full-size visual check show no orange-skin defect.
- **Verdict: PASS.**

## Recommendation and inventory

All three exact-checksum candidates pass this independent visual review. Preserve their unapproved status; this report does not approve artwork or alter any approval manifest. No unresolved captain decision was raised by this review. The pending captain art approval remains the standing state and was not raised or changed here. Empty captain-call inventory attested with `FM_HOME=/home/gehariharan/firstmate-narayaneeyam-mate bash /home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh complete d047-review-f --none`; output: `complete: d047-review-f captain-call inventory reviewed` (exit 0).
