# D067 landscape visual review: stanzas 6–10

Reviewed each selected landscape candidate independently against the final scene plan, its mapped reference photo and caption, the stanza text, and the character contracts. This is exact-checksum visual evidence only; it does not approve artwork. All five expected candidate hashes matched before inspection. Each image was opened full-frame at its native 1672 × 941 resolution and checked in focused crops for faces, gestures, Krishna where present, and lower-body details. The mapped photos were also opened at native resolution. Review time (UTC): **2026-11-13T20:54:49Z**.

## Contract bytes inspected

| File | SHA-256 |
|---|---|
| `art/plans/d067.json` | `6ff4cd9fa26ba00046e239844fd632d3bcb2fb12b16f92898b8b821adf625ed2` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/d067-krishna-youth/character.json` | `6f4194313a1a8354df14013d9d380c45ef605b8d66b208d1b1ab9bd61d54ea4c` |
| `art/bible/characters/d067-rasa.json` | `b9c56f77258d88bec7a3d9908f6aee385c4acaec737660a62f1887ce002c2d3d` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/d067-radha/character.json` | `b3a0003ed8c1c1977b393ef7c7abe5f010acff254f9395a889231935570f35d6` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `STUDIO.md` | `beed2022bba0be635e50318d390076eb197e8f9511239cecc72d706fe5d60de0` |
| `content/daskams/d067.json` | `75615a4242afa04e2ff9975f832e3ddf79f3a7418d567f2106edaec03528d2cb` |

The plan’s stanza entries and scene requirements are at `art/plans/d067.json:282-314` (6), `:324-357` (7), `:367-399` (8), `:409-441` (9), and `:451-483` (10). Stanza text is at `content/daskams/d067.json:67-113`. The accepted reference mapping is `data/d067-production/accepted-readiness.json:90-149`; verbatim captions are `intake/D067/photo-captions.txt:26-49`.

## Inspection evidence

Commands used to establish bytes and dimensions:

```sh
sha256sum <the five candidate paths> <plan and character contract paths>
identify -format '%f %wx%h\\n' <the five candidate paths>
```

All candidates matched the expected hashes listed below; `identify` reported 1672 × 941 for every candidate. I used `view_image` on each full candidate and mapped photo at original resolution. Focused crops were made with ImageMagick `magick <candidate> -crop ... +repage` into `.review-scratch/` in the disposable worktree and opened with `view_image`; the scratch directory was removed after inspection. Close views included the stanza 6 thought-image, stanza 7 flute mime and Radha, stanza 9 Krishna’s forehead and body, and stanza 10 Krishna’s face/crown and the hand contact. I checked corners and ground/foliage for unintended marks as well as the main figures.

## Candidate findings

### Stanza 6 — `candidate-v002.png`

Candidate: `artifacts/d067/s006/landscape/candidate-v002.png`  
Mapped photo: `intake/D067/006.jpg` (SHA-256 `8e12951ef5a129c382587821a0e1d35baf7bbb6b5286f6293db91318e46b89d5`)  
Verified candidate SHA-256: `f410fa443fc956108c7db2474501fa3d2b0ee984a7dae3d1dee8f8ede24b2133`  
Review time: **2026-11-13T20:54:49Z**

- **Anatomy:** Six adult women sit separately; no duplicated body, fused torso, detached limb, or impossible joint is apparent. Seated lower limbs are mostly covered by saris.
- **Faces:** The foreground speaker and five listeners have coherent features; the listeners’ worried or pained expressions read distinctly. The small Krishna face in the thought image is legible and not malformed.
- **Hands/feet:** The speaker’s raised palm clearly shows four fingers and a thumb; her chest hand and other folded hands are partly occluded, but show no extra digit or detached wrist. Feet are covered by seated drapery, so toes are not exposed for counting; no foot anomaly is visible.
- **Clothing and adult cast:** All six women read as adult and are fully covered in opaque saris and blouses. No sexualized framing.
- **Text/signature artifacts:** No readable text, caption, logo, signature, or watermark found, including along the water, grass, and corners.
- **Scene and caption fidelity:** The central speaker gestures toward one small blue Krishna framed in a cream thought-like aura; the other women look distressed. This matches the inward vision described by caption #6 and the nonphysical, separated thought-image specified in the plan. The reference photo’s imagined Krishna motif is retained as context, not copied pose-for-pose.
- **Krishna continuity:** The imagined figure is deep blue, youthful in face, dark-haired, with one upright feather and a low gold band. Close inspection shows a plain forehead with no mark. As a thought image, this is the plan’s one explicitly permitted imagined Krishna.
- **Verdict: pass.**

### Stanza 7 — `candidate-v001.png`

Candidate: `artifacts/d067/s007/landscape/candidate-v001.png`  
Mapped photo: `intake/D067/007.jpg` (SHA-256 `22a6267ae124f7e5c4c7c218c2886876871b8922d9ea4787e00fd5ae9c5c7dfc`)  
Verified candidate SHA-256: `5dccb1e8cad9424c68b27c1fabc97d04b08bb8e0a79c6fbff821d91a0e85cd93`  
Review time: **2026-11-13T20:54:49Z**

- **Anatomy:** The group’s eight women occupy separate poses; I see no accidental duplicates, fused bodies, or extra limbs. Radha sits apart at the right.
- **Faces:** The standing and seated women have distinct, readable faces. Radha’s lowered, closed-eye expression reads sorrowful; the miming woman’s relaxed expression is not confused with a physical Krishna.
- **Hands/feet:** The clearly raised mime hands each show four fingers and a thumb. The flute player has two hands on the flute; the instrument partly covers their fingers, and no third arm is present. Visible feet at the hems show ordinary separated toe marks (five where fully exposed); most lower legs are naturally covered by saris.
- **Clothing and adult cast:** The group and Radha read as adult women in opaque village clothing. Radha is visually distinct from the group and fully clothed; no sexualized contact or framing.
- **Text/signature artifacts:** No readable text, caption, logo, signature, or watermark found in foliage, ground, or corners.
- **Scene and caption fidelity:** The women mime Krishna’s gestures, including one flute mime, while finding a sorrowful Radha seated apart on the Yamuna bank. Krishna is absent; the flute is held by a gopika and does not create a second Krishna. This follows the plan and caption #7’s imitation-then-Radha sequence. The broad search scene in the reference is used as context, not copied literally.
- **Krishna continuity:** No physical or imagined Krishna appears, as required. The flute player is visibly one of the women, not a duplicated deity.
- **Verdict: pass.**

### Stanza 8 — `candidate-v003.png`

Candidate: `artifacts/d067/s008/landscape/candidate-v003.png`  
Mapped photo: `intake/D067/008.jpg` (SHA-256 `b5a1cf96a159119cc1581c6165be54a5aee395106fe5069ead96493b9439321d`)  
Verified candidate SHA-256: `f0a9904831ac7a65c46832811bcc95cecf09ee6ab4bbb8eb3553da158b04e01d`  
Review time: **2026-11-13T20:54:49Z**

- **Anatomy:** Five women sit in a loose group without visible fusion, duplication, or extra limbs. The seated poses and draped lower bodies are coherent.
- **Faces:** The women’s open-mouth singing and lowered, grieving expressions are distinct and anatomically readable.
- **Hands/feet:** The speaker’s raised palm and the hand over her chest each show four fingers and a thumb; prayer hands overlap, so their digits cannot all be counted separately. Most feet are hidden by sari folds; no malformed foot is visible.
- **Clothing and adult cast:** All five figures read as adults in opaque saris and blouses; exposed arms are ordinary garment styling, with no nudity or sexualized framing.
- **Text/signature artifacts:** No readable text, caption, logo, signature, or watermark found in the sky, river, ground, or corners.
- **Scene and caption fidelity:** The women gather by the river, lamenting and singing as the sun sets. The open river and low sun make the late-evening return legible, in line with caption #8 and the plan. The reference photo’s night search/circle is context; this candidate moves the action to the planned riverbank lament.
- **Krishna continuity:** Krishna is absent, as required for this stanza. No deity figure or stray blue figure appears.
- **Verdict: pass.**

### Stanza 9 — `candidate-v002.png`

Candidate: `artifacts/d067/s009/landscape/candidate-v002.png`  
Mapped photo: `intake/D067/009.jpg` (SHA-256 `d2d487041b4fc3470855de9e75f5eea4590060071159bae135d51ad05e076c8d`)  
Verified candidate SHA-256: `3df0c1cfbd7ec8849418a7468ad4e05827d8962295b0e5b99ca185613e5387d6`  
Review time: **2026-11-13T20:54:49Z**

- **Anatomy:** One physical Krishna stands before six distinct women. Krishna has two attached arms and two legs; no fused or duplicated person is visible. The gopikas’ seated and standing figures remain separate.
- **Faces:** Krishna has a clear, gently smiling face. The women turn toward him with readable expressions of surprise and relief; no malformed face is evident.
- **Hands/feet:** Krishna’s raised palm shows four fingers and a thumb; the lowered hand has five separated digits. His forward foot shows five toe marks; the side-on foot partly occludes its smaller toes but has no extra or fused toe shape. The gopikas’ prayer and open-palm gestures are connected; some feet are hidden under cloth.
- **Clothing and adult cast:** All six gopikas read as adults, fully clothed in opaque village saris and blouses. Krishna wears a dhoti and upper cloth. Contact is not sexualized.
- **Text/signature artifacts:** No readable text, caption, logo, signature, or watermark found on the riverbank, foliage, or corners.
- **Scene and caption fidelity:** The single smiling Krishna reappears in a moonlit clearing; the women face him with surprise and relief. This matches the plan and caption #9. The reference photo supplies the reappearance-with-gopikas context; the candidate recomposes the scene.
- **Krishna continuity:** Deep-blue youthful Krishna has dark curly hair, a low gold band, and one upright feather. **A clear vertical forehead mark is present** on the close view, despite the final plan’s instruction for a plain forehead with no mark (`art/plans/d067.json:433`). This deviation is not disclosed by this stanza’s `candidate_status` (`:439-441`) and violates the shared character contract. This is the defect driving the verdict.
- **Verdict: needs-fix.** Regenerate this candidate to remove the forehead mark while retaining the scene.

### Stanza 10 — `candidate-v002.png`

Candidate: `artifacts/d067/s010/landscape/candidate-v002.png`  
Mapped photo: `intake/D067/010.jpg` (SHA-256 `f09e60f36862affb3ad6456b6002fea88262a7c23811bb836b0e71c64fc28446`)  
Verified candidate SHA-256: `a895b2d1eba69489b939cce48768648945f3b465444005cbd159708e84de5f41`  
Review time: **2026-11-13T20:54:49Z**

- **Anatomy:** A single two-armed, two-legged Krishna stands amid a distinct group of adult women. The greeting hand contact is connected and gentle; I see no fused bodies, extra limbs, or duplicated people.
- **Faces:** Krishna’s smiling face and the women’s tearful, relieved expressions are coherent. Close view shows no malformed face.
- **Hands/feet:** Krishna’s chest hand and the woman’s greeting hand remain distinct; where visible, each shows four fingers and a thumb without a fused palm. Several women’s prayer hands and hands to chest are connected, though overlapping prayer digits cannot all be counted separately. Lower limbs are mostly covered; visible feet at the hems have ordinary outlines.
- **Clothing and adult cast:** The gopikas read as adults, fully clothed in opaque saris and blouses. Their devotional gestures and contact with Krishna remain nonsexual.
- **Text/signature artifacts:** No readable text, caption, logo, signature, or watermark found in the sky, ground, foliage, or corners.
- **Scene and caption fidelity:** The women respond joyfully to Krishna’s return with tears, prayer, and grateful gestures. This matches the plan and caption #10; the composition is a new reunion scene rather than a copy of the reference pose.
- **Krishna continuity:** Deep-blue youthful Krishna has one upright peacock feather, dark curly hair, and the expected yellow dhoti/red-orange cloth. **The forehead mark and raised flower-like crown ornament are present**, exactly the narrow forehead-mark and raised-crown deviations disclosed in this stanza’s plan status (`art/plans/d067.json:481-483`). The forehead mark conflicts with the shared plain-forehead identity contract, but no additional Krishna-continuity deviation was found. Judged under the plan’s explicit disclosed-deviation instruction, the disclosed difference is limited to those features.
- **Verdict: pass.** This pass records the disclosed deviations and is not an art approval.

## Summary and recommendation

Four candidates pass this review under their exact hashes, including S010 only with its plan-disclosed forehead-mark and raised-crown deviations stated above. S009 needs-fix because its undisclosed forehead mark conflicts with the final plan. Regenerate S009 and conduct a fresh exact-checksum review against the same final contract before treating it as cleared. No approval manifest or project file was changed.
