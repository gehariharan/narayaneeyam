# D036 stanza 9 landscape candidate review

## Scope and method

I independently reviewed the selected landscape candidate at its full native resolution and inspected enlarged crops of the central figures, hands, lower frame edge, chariot and horses, ground, and all four corners. I copied the source candidate into `/tmp/d036-review-c/candidate-v002.png` before making scratch crops; the producer file was never edited. I compared the scene with the final stanza 9 plan, its mapped reference photos, the chapter stanza commentary, the series bible, and the three character contracts named by the stanza plan.

The producer candidate and the scratch copy both hashed to `2b76fe4955bc194a541568b2d378542065ab520d6cb836c26dd8df0ad7d6b86f` before and after inspection. `identify` reported 1672×941, matching the final plan's native dimensions and landscape 16:9 orientation. The frozen plan and every supplied frozen bible/character checksum matched the expected values; actual values are listed below.

## Contract files read and actual SHA-256

| Contract | SHA-256 |
|---|---|
| Final plan `art/plans/d036.json` | `9643879a8f864e8131bca5dcff64aefa836da52c3ad1cba383d2ee813ddc3037` |
| Series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `characters/akruthavrana/character.json` | `438f4a4f8a4e6ec174840e367196c612bf6cbb55d12e0fdc6a5079d0c781e506` |
| `characters/dattatreya/character.json` | `13a559840423655f67e6f47f6a31e565bad559b22d14626ec6a8b5981cafe498` |
| `characters/dattatreya-consort/character.json` | `56ebc107bc605cfc1b966dd9d9cf5c77333994188e09eb35bbc941bbb139e0d4` |
| `characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `characters/jamadagni/character.json` | `6792aa8790488f1c84f17f90817571a6bf75f522c28ef8d338dd635d595347fb` |
| `characters/kamadhenu/character.json` | `df6f56e2642d37f6a4787219aeaf351ed6f94de321902e70e310a67f9a2e496a` |
| `characters/kartavirya-arjuna/character.json` | `27f3d43b7a3502707c10e5bf4124d5ad61f2129442af4778b9e7f176578d5471` |
| `characters/parashurama/character.json` | `7d42d4f6c759be7e24d7e5a8e3789149c86e1d505a7475ec34effa0912073648` |
| `characters/renuka/character.json` | `5fe40c84d319e6d59c99c52046e8fdbabcb575e9ce74bb4f2e556a063e2380ea` |
| `characters/sanatkumara/character.json` | `5ed32bc1fbab4599d13c1a54d58309c5a99b2b7cc8297fa9fbe933707e6e9966` |
| `characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |

## Candidate and review record

- **Stanza/concept:** 9 / `d036-s009`
- **Orientation/version:** landscape / `v002`
- **Candidate:** `artifacts/d036/s009/landscape/candidate-v002.png` in the producer worktree
- **Verified SHA-256:** `2b76fe4955bc194a541568b2d378542065ab520d6cb836c26dd8df0ad7d6b86f`
- **Review time:** `2026-11-14T07:33:09Z` (UTC)
- **Verdict:** **pass** for this exact checksum only. This independent visual review does not approve the art or update an approval manifest.

### Per-area findings

- **Anatomy:** In the native full image and the enlarged central/edge crops, Renuka, Jamadagni, and Parashurama each read as one distinct person with ordinary two-arm anatomy. No extra, missing, fused, or detached limbs, malformed body joins, or duplicate people are visible. The two harnessed horses remain distinct, with one head each and legs attached to their bodies; no obvious fused or extra horse limbs. Jamadagni's lower body continues beyond the bottom edge; his feet are below the frame and cannot be inspected. Renuka's lower sari/hip area runs off the bottom edge and its draped fabric also meets the left edge (native image approximately x=0–560, y=500–941). This is mural-edge cropping of lower-body areas, not a cut face, hand, or torso, and is not counted as a failure under this review's stated edge rule.
- **Faces:** Renuka's bowed face, Jamadagni's closed-eyed face, and Parashurama's turned face are fully inside the frame and visually coherent in enlarged crops. No malformed or repeated face is apparent. Each central figure's head is separated from the others.
- **Hands/feet:** All six hands are inside the frame. The close crops show distinct fingers rather than extra or fused digits: Renuka's cloth-held hand has four visible fingers with the thumb obscured by the cloth; her other hand rests near Jamadagni's shoulder, with fingertips separated and the thumb partly occluded. Parashurama's shoulder hand and hand on his raised knee show separated fingers, with thumbs partly obscured by their angles. Jamadagni's two resting hands show separated fingers and plausible thumb placement against his chest/drape. No toe detail is visible: Jamadagni's feet continue off the bottom edge, and Renuka's feet are covered by the sari. No hand or other key extremity is cut off.
- **Clothing and cast:** Renuka wears a modest red sari and blouse; Jamadagni wears cream/ochre cloth; Parashurama wears an ochre/cream wrap with a red shoulder cloth. Their visible torsos are conventionally covered in traditional mural attire. The cast matches the plan: grieving Renuka, reclining Jamadagni, and Parashurama beside him. No extra person is present. The image includes necklaces, earrings, armlets, and bangles as ordinary painted iconography; Parashurama has no crown. The chariot, bow, quiver/arrows, and one axe are present. No deity appears in this stanza scene, so no deity head/arm count applies.
- **Text/signature artifacts:** I checked the ground and foliage and enlarged all four corners. No readable text, caption, logo, signature, or watermark is visible. The small repeated marks on cloth, chariot, quiver, and axe are ornamental painted motifs, not legible lettering. No separate decorative outer border is present.
- **Scene and caption fidelity:** Plan stanza 9 maps to `intake/D036/016.jpg` and `017.jpg` (plan lines 501–504); their actual hashes match the plan's recorded reference hashes. Photo 016 shows the armed Haihaya sons, while photo 017 supplies the grieving/deceased Jamadagni pose. The chapter caption at `photo-captions.txt` lines 72–73 describes the sons' attack, Renuka's grief, and Rama obtaining the chariot and weapons. The candidate shows Renuka grieving, Jamadagni after the attack without wounds or blood, and Parashurama kneeling beside him while turned toward the waiting chariot and weapons. It omits the sons, consistent with the final plan's explicit “after the Haihaya sons have left” scene. The chariot team, bow/quiver, and axe make the next action legible. The grief is solemn and non-graphic.
- **Character/deity contract:** Parashurama has long dark tied hair and beard, sacred thread, ordinary two-arm anatomy, and no crown, gore, or detached weapon; his axe and bow/quiver are called for here. Jamadagni has white hair/beard, sacred thread, cream cloth, and no weapon or graphic wound. Renuka has dark hair, muted red clothing, ordinary proportions, and a grieving expression without injury or duplication. These match their explicit continuity and prohibition lines. No deity is shown.

### Edge assessment

On the 1672×941 native frame, the sage's draped lower body reaches the bottom edge roughly across x=500–1160; his feet themselves lie below the frame. Renuka's lower draped body reaches the bottom edge across roughly x=0–570, with sari fabric also touching the left edge around y=500–940. Her face, both hands, and visible torso remain inside. Jamadagni's face, both hands, and torso remain inside. Parashurama's face, both hands, and torso remain inside. The edge therefore truncates lower bodies/feet only; no face, hand, or required scene element is cut off or missing. The crop is observable, but it does not meet the specified needs-fix threshold.

## Evidence and commands

Integrity verification ran `sha256sum` over the producer candidate and each of the 13 frozen contract paths listed above. The additional exact commands used for the copy, dimensions, final candidate/reference hashes, and bottom-edge crop were:

```sh
cp '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d036/s009/landscape/candidate-v002.png' '/tmp/d036-review-c/candidate-v002.png'
identify '/tmp/d036-review-c/candidate-v002.png'
sha256sum '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d036/s009/landscape/candidate-v002.png' '/tmp/d036-review-c/candidate-v002.png'
sha256sum '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/intake/D036/016.jpg' '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/intake/D036/017.jpg'
magick '/tmp/d036-review-c/candidate-v002.png' -crop 1672x300+0+641 +repage -resize 3344x600 '/tmp/d036-review-c/bottom-edge.png'
```

`identify` output: `PNG 1672x941`, 8-bit sRGB. The producer and scratch candidate hashes were identical both before and after inspection. The reference hashes were `ab60a7ca20fbade96fc76d80c33f93b128db170b2f9efe0544a8066fa2761398` (016.jpg) and `4ee8f71d7f055d7e25b05ef7ab33e72a41a4690509f7bc2233ba5af72a35dd01` (017.jpg), matching plan lines 546–549. Other `magick` crops were saved under `/tmp/d036-review-c/` for the focal group, hands, chariot, ground, and each corner. Full and cropped images were visually inspected with `view_image`.

Relevant source locations:

- Final scene, mapped references, required composition, candidate version/hash/dimensions: frozen plan lines 493–548, especially 501–540.
- Series rendering and artifact constraints: frozen series bible lines 4–24, 34–64.
- Character continuity/prohibitions: Parashurama lines 12–16; Jamadagni lines 12–16; Renuka lines 12–16.
- Sanskrit stanza/commentary and caption provenance: chapter content lines 150–158.
- Mapped photo captions: `intake/D036/photo-captions.txt` lines 72–78.

## Recommendation and captain-call inventory

Recommend retaining this candidate as visually passed for checksum `2b76fe4955bc194a541568b2d378542065ab520d6cb836c26dd8df0ad7d6b86f`. Human art approval remains separate and pending; this review raises no captain decision. My captain-call inventory for this review is empty.
