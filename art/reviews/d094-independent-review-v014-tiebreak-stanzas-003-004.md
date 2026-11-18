# Daskam 94 independent visual review

Reviewed the two selected landscape candidates at native resolution and in enlarged crops against the byte-frozen final plan, the applicable character contracts, their mapped reference photos, and the supplied captions. I used the exact candidate and contract bytes listed below. I did not inspect any prior D094 review record or producer report. The results are independent visual findings only; they do not approve either artwork or change an approval manifest.

Review completed: **2026-11-18T06:04:35Z**.

## Verification and evidence

Generated `.review-scratch/d094-review-zl/expected.sha256` from the paths and expected digests in the task brief, then ran:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/d094-review-zl/expected.sha256'
```

All 14 entries returned `OK`: both candidates, both mapped reference photos, the final plan, series bible, five named character contracts, the reference map, and photo captions. Their actual hashes are recorded below. `identify -format '%f %wx%h %[colorspace]\n'` reported candidate dimensions of 1672x941 and 1670x942 pixels, both sRGB; reference dimensions were 832x1248 and 1024x1024 pixels. I opened each candidate and each mapped reference at full image size with `view_image`, then created and opened individual detail crops with ImageMagick `magick -crop` under the worktree scratch directory `.review-scratch/d094-review-zl/`. No crop or scratch file was written under `artifacts/` or `intake/`, and no input image was modified.

The skin samples below are 11x11 pixel skin-only patches. I used ImageMagick's per-channel median (`%[fx:median.r*255]`, etc.) and report rounded 8-bit RGB medians and red-minus-blue (R-B). Coordinates are crop upper-left origins in the full candidate image. The sampled points avoid ash marks, contours, and clothing.

### Exact source hashes

| File read | SHA-256 |
| --- | --- |
| Frozen final plan `data/d094-production/review-contract-ab/art/plans/d094.json` | `ff7dba81c5e6ac9ced7b6a086deed562ab274cdf08f4e3313b48978c4f48b1b5` |
| Frozen series bible `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Bhattathiri contract `.../characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| Brahma contract `.../characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Guruvayurappan contract `.../characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| Krishna Vrindavan youth contract `.../characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Gopikas contract `.../characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `content/sources/d094/reference-map.json` | `8642034f80398172e7e1a25c1c4d91606f7fe540d998c3f6665d6fcd7ffbefdb` |
| `intake/D094/photo-captions.txt` | `8b040f7e5f008a9d3b3d826c93b05c5810f25cadf043ea0930de8a4cc970aacb` |

The plan's Daskam 94 stanza entries are at lines 130–184 (stanza 3) and 187–250 (stanza 4); the required scene, skin, and ornament clauses are at lines 140–148 and 197–204. The reference map assigns stanza 3 to `intake/D094/003.jpg` and stanza 4 to `intake/D094/004.jpg` at lines 30–42. The corresponding caption entries are at `photo-captions.txt` lines 11–19. Canonical stanza Romanization and commentary are at `content/daskams/d094.json` lines 37–52.

Contract comparisons: the series style and matte palette are at `series.json` lines 5–6 and 21–48. Bhattathiri's warm medium-brown skin, shaved scalp/tuft, and simple dress are at `bhattathiri/character.json` lines 18–23. Guruvayurappan's tasteful, not oversized crown and simple but regal jewelry are at `guruvayurappan/character.json` lines 22–24. Brahma's four-head/arm anatomy and four attributes are at `brahma/character.json` lines 22 and 29–38.

## Stanza 3 — landscape v015

- **Candidate:** `artifacts/d094/s003/landscape/candidate-v015.png`
- **Verified SHA-256:** `aaad921cdefb3b27d85c8e8c6b6ec1ce8150917b1b15b1c55ee90fe6413bb912`
- **Reference:** `intake/D094/003.jpg`, verified SHA-256 `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`
- **Review time:** 2026-11-18T06:04:35Z
- **Anatomy:** The image contains the two required figures only, with no extra, fused, or detached limbs. Bhattathiri's kneeling pose is the plan-disclosed deviation. His compact nape tuft stays close to the scalp, with no trailing lock. Bhagwan's limbs remain attached and proportionate.
- **Faces:** Both faces are distinct and intact. Bhattathiri is older and clean-shaven, with the expected ash stripes and forehead mark. Bhagwan's face is calm and intact.
- **Hands and feet:** Bhattathiri's joined hands read as one folded pair; the overlapping thumbs and stacked fingers show no apparent extra digit. His two visible feet each show five toe tips. Bhagwan's raised hand shows four fingers and a thumb; the hand on the knee shows four fingers with the thumb naturally obscured. His visible feet show five toe tips each. No extremity is cut off by the image frame.
- **Clothing and cast:** Bhattathiri wears a cream dhoti and sacred thread, with exposed upper torso in ordinary traditional dress; that is not a defect. There are no other people. His sampled skin remains warm-brown: cheek at (320,318) median RGB (129,67,33), R-B 96; torso at (300,460) (153,82,43), R-B 110; upper arm at (245,520) (143,75,38), R-B 105; neck at (325,385) (152,83,44), R-B 108. These samples are within the stanza 3 plan's approximately 100–110 target and below its ~115 ceiling. The deity's blue skin, yellow dhoti, and red-orange shawl are consistent with the contract.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including the grass, ground, and corners.
- **Scene and caption fidelity:** The reference photo depicts an embrace; the generated scene uses it only as surrender context and follows the final plan's folded-hands refuge scene. One medicine bowl, one ritual vessel, and one discarded crown are present at the far edge. Open space and a temple grove keep the two figures the focus. The change to kneeling is disclosed in the plan and is not a defect.
- **Character/deity contract:** Bhattathiri's identity and clothing fit the character contract. Bhagwan has a peacock-feather crown and allowed sacred jewelry, but the crown and ornament visibly exceed the Guruvayurappan contract's tasteful crown and simple-regal jewelry: the tall stacked, gem-encrusted crown at approximately x=985–1160, y=12–190 and dense jeweled chest/arm regalia at approximately x=970–1290, y=280–600 read as palace-like finery. This is conspicuous in the full image, and is substantially more ornate than the restrained Bhagwan in stanza 4. The deviation is not disclosed by the stanza 3 plan. This is a needs-fix defect.
- **Verdict: NEEDS-FIX.** Reduce Bhagwan's clearly palace-like crown and dense regalia to fit his character contract. The exact affected pixel regions are cited above.

## Stanza 4 — landscape v028

- **Candidate:** `artifacts/d094/s004/landscape/candidate-v028.png`
- **Verified SHA-256:** `40c4c533b945886f10abf261c585c276b8324321f3a2de5ce20d69cec326a8c3`
- **Reference:** `intake/D094/004.jpg`, verified SHA-256 `1cd9c48899e45b86751a317a51d42b89bd1e3c670596479624dc6b9ca3c18dd3`
- **Review time:** 2026-11-18T06:04:35Z
- **Anatomy:** The image has Bhattathiri, one Brahma, and one Bhagwan; there are no duplicated or fused bodies and no detached limbs. Brahma has exactly four heads: three distinct faces facing forward/sideways and a fourth rear-facing head. All four arms and hands are separately attached. His lotus, beads, water pot, and blank palm-leaf scripture are separately held. The object grips partly obscure individual fingers, but the visible digit contours show no obvious malformed or extra digits. No head, hand, foot, or other key extremity is cut off by the frame.
- **Faces:** Bhattathiri's face is distinct, clean-shaven, and intact. Brahma's three visible faces are separate and not merged; the fourth head faces away as required. Bhagwan's face is intact.
- **Hands and feet:** Bhattathiri's folded hands have overlapping fingers and thumbs with no apparent extra digit. Bhagwan's raised and lowered hands each show four fingers and a thumb. His two feet each show five toe tips. Brahma's four distinct hands remain attached; the lotus, rosary, water pot, and scripture grips obscure some individual fingertips but do not show an evident count error.
- **Clothing and cast:** Bhattathiri's cream dhoti and sacred thread are ordinary traditional dress; the bare upper torso is not a defect. His skin deviation is disclosed in the final plan's stanza 4 candidate status (plan lines 237–240) as measured R-B 130–153 against the under-120 guide. I independently sampled it: cheek at (690,480) median RGB (205,110,58), R-B 147; second cheek at (680,465) (206,111,58), R-B 148; torso at (630,600) (206,108,56), R-B 150; upper arm at (615,650) (203,104,51), R-B 152. All four patches exceed the plan limit. In the full image the exposed skin reads distinctly orange-copper, not natural warm-brown. The face and torso look more saturated orange than Bhattathiri's warm-brown skin in stanza 3 (our sampled R-B values 96–110). This is a clearly visible contract/plan defect even though the numeric deviation was disclosed; the disclosed status does not make the visible orange acceptable.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including in the starfield, floor, or corners. The palm-leaf object is blank.
- **Scene and caption fidelity:** The mapped reference is a reclining cosmic Vishnu scene. The candidate follows the caption and plan instead: Brahma occupies a high cosmic plane, Bhattathiri prays toward a calm blue Bhagwan in a sheltered shrine, and the celestial and refuge areas are visually distinct. No punishment or hell scene appears. The figure arrangement and required elements are present.
- **Character/deity contract:** Brahma's four heads, four attached arms, attributes, modest low ochre crowns, and restrained ornaments comply with the scene and character contract. Bhagwan has a modest crown and restrained deity ornaments consistent with Guruvayurappan's simple-regal allowance. Bhattathiri's hair tuft is compact; his skin is the exception noted above and conflicts with the required warm-brown color.
- **Verdict: NEEDS-FIX.** Correct Bhattathiri's conspicuously orange-copper skin to warm-brown. The visible affected region is approximately x=575–740, y=420–690 in the full image, including face, torso, and upper arm.

## Recommendation and approval state

Both exact-checksum candidates need visual correction and a fresh independent review against the then-current plan and character bytes. The findings bind only to the two hashes above. This review does not approve either candidate; all artwork remains unapproved. I found no open captain decision arising from this review. The standing captain art-approval state is not a decision raised here, so my captain-call inventory for this review is empty.
