# D094 landscape candidate review

## Scope and method

I independently reviewed the five specified landscape candidates at native resolution and in enlarged, read-only crops. I compared each with the numbered intake photo, its mapped caption, the final frozen plan, and the relevant character/series contracts. The reference map assigns caption/photo N to stanza N; the plan entries are at `art/plans/d094.json` lines 30–77 (S1), 78–129 (S2), 130–186 (S3), 187–247 (S4), and 248–309 (S5). The source mapping is in `content/sources/d094/reference-map.json`; the matching supplied captions are `intake/D094/photo-captions.txt` sections `#1`–`#5`.

Native images and focused crops were viewed. Crop files were made with ImageMagick `convert -crop ... -resize 200%` under `.review-scratch/d094-review-zj/crops/`; inputs were not modified. For skin checks, I ran ImageMagick on skin-only 11×11 pixel patches and calculated channel medians in Python. Coordinates below are the patch's upper-left pixel in the candidate. `R-B` is median red minus median blue. Image dimensions: candidates are 1670–1672 × 941–942 px; mapped references are the local numbered JPGs.

The hash manifest was generated from the task's expected digest/path pairs, then checked with:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/.review-scratch/d094-review-zj/expected-sha256.txt'
```

All 19 entries printed `OK`: five candidate files, five mapped photos, the final plan, series bible, five character contracts, reference map, and caption file. Candidate verdicts below apply only to the stated SHA-256. No approval manifest was changed; all artwork remains unapproved.

### Contract and source hashes read

| File | SHA-256 |
|---|---|
| Frozen final plan `art/plans/d094.json` | `ff7dba81c5e6ac9ced7b6a086deed562ab274cdf08f4e3313b48978c4f48b1b5` |
| Frozen series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Bhattathiri `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| Brahma `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Guruvayurappan `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| Krishna Vrindavan youth `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Gopikas `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `content/sources/d094/reference-map.json` | `8642034f80398172e7e1a25c1c4d91606f7fe540d998c3f6665d6fcd7ffbefdb` |
| `intake/D094/photo-captions.txt` | `8b040f7e5f008a9d3b3d826c93b05c5810f25cadf043ea0930de8a4cc970aacb` |

Contract line references: series rendering/palette rules at `art/bible/series.json:4–57`; Bhattathiri face, skin, tuft, clothing and continuity markers at `art/bible/characters/bhattathiri/character.json:16–39`; Brahma's four-head/four-arm requirements at `art/bible/characters/brahma/character.json:20–46`; Guruvayurappan identity at `art/bible/characters/guruvayurappan/character.json:18–37`. The D094 plan's image-specific requirements and candidate paths are the line ranges given above.

## Candidate findings

### Stanza 1 — `candidate-v001.png`

- **Exact candidate SHA-256:** `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260`
- **Reference:** `intake/D094/001.jpg`, SHA-256 `10f05f5150d6abcc4766091f1cd1be881a78fd2f5cdeda2c8317b5f4d25fd190`
- **UTC review time:** 2026-11-18T05:55:51Z
- **Anatomy:** No people or creatures are depicted, consistent with the plan; human anatomy is not applicable.
- **Faces:** None.
- **Hands/feet:** None.
- **Clothing and cast:** No cast or clothing. Three separated log piles of visibly different sizes carry small, medium and larger flames.
- **Text/signature artifacts:** I saw no text, signature, logo, or watermark in the full image, corners, ground, or enlarged log/fire areas.
- **Scene and caption fidelity:** The abstract cosmic spiral supplies a continuous field; the distinct fires remain separate at the lower edge. This represents the supplied caption's all-pervading nature and varied flames without copying the photo's digital galaxy treatment or its staging.
- **Character/deity contract:** None applies; no separate person or deity is introduced.
- **Verdict: pass.**

### Stanza 2 — `candidate-v004.png`

- **Exact candidate SHA-256:** `bcae22a4383d09b83fd628d773225a09bff35a9a6c39a640f0a5e62f34f44498`
- **Reference:** `intake/D094/002.jpg`, SHA-256 `e5fd4c71ad556c15d4f8e5d4a8f6418c1298d2452e7da35467e2d0805018b39c`
- **UTC review time:** 2026-11-18T05:55:51Z
- **Anatomy:** Exactly two separate seated figures are present. Both have one head, two connected arms and two legs; limbs remain distinct. No malformed or duplicated person is visible.
- **Faces:** Guru's older, bearded face and disciple's younger face are separately formed and directed toward one another. No visible distortion.
- **Hands/feet:** Each figure has two hands. The guru's outward teaching hand is open and readable; the other rests on his lap. The disciple's hands rest separately on the knees. At enlargement, visible fingers are distinct and no extra/fused digits appear. Bare feet are in frame; the guru's foreground foot shows five toes, and the disciple's visible foot shows five. Other toe contours are partly obscured by crossed legs/cloth, with no malformed foot apparent.
- **Clothing and cast:** Two generic men in modest traditional drapes; their bare upper torsos are ordinary traditional dress. No additional person appears. Independently sampled skin patches are muted warm-brown: guru cheek (545,217) RGB median (150,76,38), R-B 112; guru torso (410,320) (153,77,39), R-B 114; disciple cheek (1280,215) (152,80,43), R-B 109; disciple torso (1295,315) (152,78,40), R-B 112. The skin reads brown, not orange.
- **Text/signature artifacts:** No text, signature, logo, or watermark found in full view or enlarged soil/edge areas.
- **Scene and caption fidelity:** The two crossed sticks visibly meet beneath the small knowledge fire. The separate low branch tangle burns to the side, with open clearing beyond. Guru's instructive gesture and disciple's attentive gaze carry the caption's relationship. The image uses the photo for context without copying its glossy rendering.
- **Character/deity contract:** The figures are generic, not recurring characters. No deity is depicted.
- **Verdict: pass.**

### Stanza 3 — `candidate-v015.png`

- **Exact candidate SHA-256:** `aaad921cdefb3b27d85c8e8c6b6ec1ce8150917b1b15b1c55ee90fe6413bb912`
- **Reference:** `intake/D094/003.jpg`, SHA-256 `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`
- **UTC review time:** 2026-11-18T05:55:51Z
- **Anatomy:** Two figures only. Bhattathiri kneels rather than sits; this is the plan-disclosed pose deviation and is not counted against the image. No fused or duplicated body is visible.
- **Faces:** Bhattathiri has an older, clean-shaven profile; Bhagwan's face is serene and blue. Both faces are intact and legible.
- **Hands/feet:** Bhattathiri's folded hands overlap naturally, with five visible fingertip ends and overlapping thumbs. His two visible feet each show five toes. Bhagwan's raised palm shows four fingers plus thumb; his knee hand shows four fingers, with the thumb occluded by the resting pose. Bhagwan's two visible feet each show five toes. No digit defect is visible.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and restrained beads; his bare upper torso is ordinary traditional dress. No added people. The small nape tuft is compact and sits close to the shaved scalp; it does not trail down the neck. Skin patches read warm-brown and meet the plan range: cheek (335,294) RGB median (149,80,40), R-B 109; torso (308,468) (204,152,117), R-B 87; upper arm (244,525) (146,76,39), R-B 107. Maximum among these samples is 109.
- **Text/signature artifacts:** No text or signature artifact is visible at corners, foliage, ground, or on the objects.
- **Scene and caption fidelity:** The prayerful devotee and Bhagwan convey surrender. The plain bowl, small vessel and discarded crown appear together at the far side; no doctor, king, sage, inset narrative, or extra group appears. The reference's embrace/glow is not copied.
- **Character/deity contract:** Bhattathiri's age, shaved scalp, small tuft and ash markings are consistent. Bhagwan is blue and calm. **Needs-fix:** the crown and chest ornaments are conspicuously palace-like and much denser than the more restrained Bhagwan presentation in stanza 4: at candidate pixels approximately x=985–1160, y=10–205 the tall tiered crown has repeated jeweled bands; approximately x=995–1270, y=300–580 has layered jeweled necklaces, large pendants, armlets and multiple garlands. This occupies the deity's main focal area and reads as royal regalia at full size, beyond the character contract's tasteful head ornament and simple-but-regal jewelry.
- **Verdict: needs-fix.** Reduce Bhagwan's crown and jewelry to restrained temple iconography; this finding is tied to the exact candidate hash above.

### Stanza 4 — `candidate-v028.png`

- **Exact candidate SHA-256:** `40c4c533b945886f10abf261c585c276b8324321f3a2de5ce20d69cec326a8c3`
- **Reference:** `intake/D094/004.jpg`, SHA-256 `1cd9c48899e45b86751a317a51d42b89bd1e3c670596479624dc6b9ca3c18dd3`
- **UTC review time:** 2026-11-18T05:55:51Z
- **Anatomy:** No fused or duplicated bodies. Brahma has exactly four distinct heads, three faces visible and the rear head facing away, and four visibly attached arms, matching the deity contract. His hands each hold a separate attribute: lotus, rosary, pot, and blank palm-leaf book. Grips partly obscure individual digits; no extra or malformed digit is visible. Bhattathiri's prayer hands join naturally. The dhoti covers his feet.
- **Faces:** Brahma's three visible faces are distinct, with no merged features. Bhattathiri's face is intact and clean-shaven. Bhagwan's face is calm and undistorted.
- **Hands/feet:** Bhagwan's two attached hands each show four fingers and a thumb. Both feet are inside the frame and each shows five toe tips; I do not see the overlap ambiguity disclosed in the plan status. Bhattathiri's joined hands are visible; his feet are covered.
- **Clothing and cast:** Brahma's four crowns are plain ochre with no jewel bands; his sacred thread and ornaments remain restrained. Bhattathiri is modestly dressed. His skin misses the plan's numeric and visual target: independent 11×11 medians are cheek (675,478) RGB (207,109,55), R-B 152; torso (638,586) (205,107,56), R-B 149; arm (620,625) (170,81,38), R-B 132. The disclosed deviation is present; the face and torso look saturated copper-orange at full view, not natural warm-brown.
- **Text/signature artifacts:** No text, signature, logo, or watermark found in the full image or enlarged corners and cosmic ground.
- **Scene and caption fidelity:** Brahma occupies an exposed celestial field, with Bhattathiri praying toward a sheltered blue Bhagwan. The cosmic/refuge contrast reads clearly and does not reproduce the reclining, ornament-heavy source-photo scene. Brahma's expression reads calm to mildly pensive; I do not see a clear fear signal, although his required creator depiction and the spatial contrast are present.
- **Character/deity contract:** Brahma meets the four-head/four-arm anatomy contract; the plain crowns and modest ornamentation match the scene-specific rules. Bhattathiri's nape shows a short curled tuft attached close to the scalp, not a long strand down the shoulder. **Needs-fix:** Bhattathiri's exposed skin at face, torso and upper arm (approximately x=610–735, y=430–680) visibly reads orange/copper and the sampled R-B values are 132–152, above the plan's <120 requirement. The hue is prominent on the central praying figure and is noticeable at full image size.
- **Verdict: needs-fix.** Rebalance Bhattathiri's exposed skin toward warm-brown below R-B 120; this finding is tied to the exact candidate hash above.

### Stanza 5 — `candidate-v017.png`

- **Exact candidate SHA-256:** `889cedf92b0bb17a54b66abf8178dc69e120486559e2e5b95e3c2b2e783dc268`
- **Reference:** `intake/D094/005.jpg`, SHA-256 `32720af189874958820a308efaa8a34677825830742422e5192d1845240e8864`
- **UTC review time:** 2026-11-18T05:55:51Z
- **Anatomy:** One reclining figure, no duplicate. Two distinct shoulder-to-hand paths are visible: one arm bends to support the head; the other extends along the body to the thigh. The legs and feet remain separate and connected.
- **Faces:** One calm face; the forehead is plain, without a mark. The hair is gathered in a bun, not devotional ornamentation.
- **Hands/feet:** Head-supporting hand shows four clear fingers; its thumb is partly occluded at the head contact as disclosed. The separate thigh hand shows four fingers and a thumb. Each foot shows five toes. No missing or fused digit is apparent.
- **Clothing and cast:** The plain opaque warm-cream wrap fully covers the chest and is visually separate from both arms. No devotional ornaments or exposed chest. Skin samples show the disclosed numeric deviation: cheek (240,405) RGB median (150,71,30), R-B 120; upper-torso/shoulder skin (395,448) (163,78,31), R-B 132; arm (500,450) (167,82,32), R-B 135. The plan's below-120 guide is exceeded in two visible patches; by eye the exposed skin remains dark warm-brown, not orange.
- **Text/signature artifacts:** No text or signature visible in the leaves, ground, corners, or focal area.
- **Scene and caption fidelity:** A single tree trunk visibly joins the dark dream branch with fruit to the open waking branch and lotus-like flower. The image does not separate liberation into a second place and does not reproduce the reference chart's labels or busy staging.
- **Character/deity contract:** The figure is generic, not a recurring deity. The plan's modest dress, uncovered forehead, and no-ornament requirements are met. The disclosed head-support thumb occlusion is not a defect.
- **Verdict: pass.** The measured color deviation is disclosed, but the skin reads natural warm-brown and no viewer-noticeable defect from the review criteria is present.

## Recommendation and inventory

Keep all five candidates unapproved. Request a new version for S3 with less palace-like Guruvayurappan regalia and for S4 with Bhattathiri's skin corrected to warm-brown under the plan's R-B threshold. The S3 kneeling pose is disclosed and acceptable. S5's above-guide skin samples are also disclosed; they read warm-brown, and the explicit chest, plain-forehead, no-ornament, two-arm-path and digit checks pass. The review raises no captain decision: the standing art approval remains pending and is not an inventory item created by this review. Captain-call inventory attested empty through the required completion command.

Completion-gate evidence: ran `FM_HOME='/home/gehariharan/firstmate-narayaneeyam-mate' bash '/home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh' complete 'd094-review-zj' --none`; output was `complete: d094-review-zj captain-call inventory reviewed`.
