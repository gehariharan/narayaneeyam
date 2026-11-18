# D094 independent landscape review

**Review scope:** Five exact candidates, stanzas 3, 4, 6, 8 and 9. Each was inspected separately at native resolution and in focused enlargements. This is an independent visual review bound to the verified frozen plan and character-file bytes below. It does not approve any artwork; all five remain unapproved.

**Visual review time:** 2026-11-18T08:34:21Z (UTC; recorded after visual inspection). Source candidates and references were read-only. Crops and scratch images were written only beneath `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/`.

## Contract and source checksums

I generated `.review-scratch/expected.sha256` from the task's file/hash pairs and ran `sha256sum -c` against it. All 19 entries returned `OK`; there were no mismatches. The following are the actual SHA-256 values verified for the contract files read:

| File | SHA-256 |
|---|---|
| Frozen final plan `art/plans/d094.json` | `124a40cd8e415b2e672f894285d3a4ed89fffd212a815022fd53e1aef9cf7253` |
| Frozen series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Bhattathiri contract | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| Brahma contract | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Guruvayurappan contract | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| Krishna Vrindavan youth contract | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Gopikas contract | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Chapter reference map `content/sources/d094/reference-map.json` | `8642034f80398172e7e1a25c1c4d91606f7fe540d998c3f6665d6fcd7ffbefdb` |
| Captions `intake/D094/photo-captions.txt` | `8b040f7e5f008a9d3b3d826c93b05c5810f25cadf043ea0930de8a4cc970aacb` |

The reference map pairs caption labels and canonical stanza numbers for these entries and marks each supplied photo as story/context only (reference-map lines 30–33, 39–42, 57–60, 75–78, 84–87). Captions are at `photo-captions.txt` lines 11, 16, 26, 36 and 41. The chapter stanza records are at `content/daskams/d094.json` lines 37, 47, 67, 87 and 97. Relevant final-plan entries begin at `art/plans/d094.json` lines 130, 189, 304, 410 and 468. Character contract anchors: Bhattathiri skin/hair/face at `character.json` lines 15–27; Brahma four-head and anatomy rules at `character.json` lines 20–39; Guruvayurappan blue skin and crown/jewelry at `character.json` lines 18–31.

## Review method and evidence

Commands run included the programmatic hash-list generation and `sha256sum -c .review-scratch/expected.sha256`; `identify -format '%f %wx%h'` for native dimensions; and ImageMagick `magick … -crop … +repage <absolute scratch path>` for focused crops. I viewed each complete candidate and each mapped source photo. Skin samples were independently read as 11×11 pixel patches from the candidate with `magick … -crop 11x11+X+Y … txt:-`; I computed the per-channel median of the 121 RGB pixels and reported red-minus-blue (R-B). Sample coordinates below are upper-left pixel origins. Focus crops are in `.review-scratch/crops/` (including face/torso, Brahma head cluster, deity and medallion views); no source was modified.

## Candidate findings

### Stanza 3 — `candidate-v016.png`

**Candidate:** `artifacts/d094/s003/landscape/candidate-v016.png` — SHA-256 `6e6f9e036bec349a5ecdf13fd8f5e474e3ddc71d1066645ac4b3a6c71bc24c8b`; native 1672×941. **Reference:** `intake/D094/003.jpg` — SHA-256 `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`. **Visual review time:** 2026-11-18T08:34:21Z.

- **Anatomy:** Two figures only. Bhattathiri is kneeling; this is the plan-disclosed pose deviation. His visible arms connect naturally to his folded hands; Bhagwan has two attached arms. No duplicate or fused figure, malformed limb, or disproportion that reads as an error at full size.
- **Faces:** Both faces are coherent. Bhattathiri is older and clean-shaven, with a largely shaved scalp and a small nape tuft, not a trailing curl. Bhagwan is serene.
- **Hands and feet:** Bhattathiri’s joined prayer hands show five fingertip ends with overlapping thumbs. Bhagwan’s raised palm shows a thumb and four fingers; the lap hand is partly occluded naturally. Bhattathiri’s exposed foot shows five toes; the other is tucked. Bhagwan’s visible feet are intact, with no extra or missing digit apparent.
- **Clothing and cast:** Cream dhoti, sacred thread and restrained beads; the bare upper torso is ordinary traditional dress. Bhattathiri skin patches: cheek `(350,310)` RGB `(159,85,43)`, R-B 116; torso `(280,480)` `(168,90,48)`, R-B 120; arm `(250,490)` `(139,71,36)`, R-B 103; neck `(315,410)` `(146,76,38)`, R-B 108. The plan discloses a maximum R-B of 120, above its approximately 100–110 target and 115 guide. The measured deviation is present; his skin reads warm-brown, not orange. Bhagwan’s palms are blue continuously with his arms. The crown is low and restrained, with one peacock feather; the necklace, single garland, earrings and bands read as temple iconography rather than palace regalia.
- **Text/signature artifacts:** None visible in the corners, foliage, floor or other ground areas.
- **Scene and caption fidelity:** Two figures face each other in a grove; folded hands and the bowl, ritual vessel and discarded crown are present. The source photo’s embrace and luminous finish are not copied; surrender is retained as context. No extra narrative figures.
- **Character/deity contract:** Bhattathiri’s tuft and older identity are consistent. Bhagwan remains blue through both hands. Kneeling is the disclosed deviation and is not a defect.
- **Verdict: PASS** for this checksum.

### Stanza 4 — `candidate-v034.png`

**Candidate:** `artifacts/d094/s004/landscape/candidate-v034.png` — SHA-256 `52b31e684bb753649e16055a690d8ff852ffa6e6fee80cbbad308e5459c9c548`; native 1670×942. **Reference:** `intake/D094/004.jpg` — SHA-256 `1cd9c48899e45b86751a317a51d42b89bd1e3c670596479624dc6b9ca3c18dd3`. **Visual review time:** 2026-11-18T08:34:21Z.

- **Anatomy:** Brahma has exactly four heads: left-facing profile, front-facing central face, the rear-facing back of the head, and right-facing profile. He has four distinct attached arms and the four required attributes. Bhattathiri and the single Bhagwan each have two attached arms. No extra or fused figure.
- **Faces:** Brahma’s three visible faces are distinct and legible; the fourth head faces away. Bhattathiri and Bhagwan’s faces are intact; Bhattathiri is clean-shaven with a small tuft.
- **Hands and feet:** Attribute grips partially hide Brahma’s finger separations; no malformed or extra digit is visible. Bhagwan’s two hands each show thumb plus four fingers, and both palms are blue against blue arms. Bhattathiri’s joined hands are intact. Visible deity toes are present; no missing or extra digit stands out.
- **Clothing and cast:** Brahma wears four low, plain ochre crowns, cream/saffron clothing, sacred thread and minimal jewelry. Bhattathiri’s bare upper torso is ordinary traditional dress. Independent 11×11 skin medians: cheek `(710,455)` RGB `(149,73,50)`, R-B 99; torso `(685,540)` `(160,78,44)`, R-B 116. The plan discloses a prior sampled range through R-B 122, so the above-guide deviation is disclosed; these independent patches remain below 120 and his skin reads warm-brown, not orange. Bhagwan’s ornaments are conventional temple iconography and not more palace-like than the more ornamented depictions in stanzas 6 and 8.
- **Text/signature artifacts:** None visible in the sky, ground, corners or scene.
- **Scene and caption fidelity:** The scene places Brahma in the exposed cosmic realm, Bhattathiri praying below, and one calm Bhagwan in a sheltered shrine. It uses the caption’s fear/refuge context; it does not repeat the source image’s reclining pose or crowded ornamented composition. No hell or invented punishment appears.
- **Character/deity contract:** Brahma’s head and arm count, rear-facing head, attributes, modest crowns and restrained adornment meet the contract. Bhagwan is blue-handed. Bhattathiri’s skin reads warm-brown.
- **Verdict: PASS** for this checksum.

### Stanza 6 — `candidate-v014.png`

**Candidate:** `artifacts/d094/s006/landscape/candidate-v014.png` — SHA-256 `448cb1440eed6f1814c0a38818f94a25498c1b541248eb74667b3980f87750f4`; native 1672×941. **Reference:** `intake/D094/006.jpg` — SHA-256 `5364ee0c217509f0d0d8abd0c504cba22b86dfde92e64c3642f4df42e2ed0770`. **Visual review time:** 2026-11-18T08:34:21Z.

- **Anatomy:** One Bhattathiri and one two-armed Bhagwan; limbs are distinct and attached. No duplicate people or fused bodies.
- **Faces:** Both faces are intact and calm; Bhattathiri retains the older clean-shaven identity and small tuft.
- **Hands and feet:** Bhagwan’s raised hand shows a thumb and four fingers, and the lowered hand has distinct digits; both are blue from wrist through palm and fingers. Bhattathiri’s folded hands are intact. The visible feet are connected and show no extra or missing toes; the deity’s toes and Bhattathiri’s exposed foot are visible at full size.
- **Clothing and cast:** Ordinary cream traditional dress; bare upper torso is an observation only. Bhattathiri 11×11 samples: cheek `(430,300)` RGB `(167,93,50)`, R-B 117; torso `(370,430)` `(172,95,53)`, R-B 119; torso `(380,470)` `(183,105,60)`, R-B 123. That last patch is slightly above the below-120 plan guide; the skin reads warm-brown rather than orange. Bhagwan’s hands are blue, matching his blue arms.
- **Text/signature artifacts:** None visible in corners, foliage, ground, or on the blank palm-leaf manuscript.
- **Scene and caption fidelity:** The palm-leaf teaching, clear water vessel, and calm devotional exchange are present. The source photo supplies prayer context only; its woman, staging and dark glossy treatment are not repeated.
- **Character/deity contract:** Bhagwan’s two hands remain blue; Bhattathiri’s face, tuft and dress follow his contract.
- **Verdict: PASS** for this checksum.

### Stanza 8 — `candidate-v010.png`

**Candidate:** `artifacts/d094/s008/landscape/candidate-v010.png` — SHA-256 `721c9ae7a70c7d600f385991a314cccf59410420317f12e24b7c653ab8ccd2ac`; native 1672×941. **Reference:** `intake/D094/008.jpg` — SHA-256 `640d12c6e29e3b9d273c725216576a36db3a84b86a55e43622e3145ecbe3dd30`. **Visual review time:** 2026-11-18T08:34:21Z.

- **Anatomy:** One Bhattathiri and one two-armed Bhagwan; no duplicate or fused people. The separate footprint pairs are symbolic motifs, not extra bodies.
- **Faces:** Both faces are clear and undistorted; Bhattathiri is older, clean-shaven and has the small tuft.
- **Hands and feet:** Both open deity hands show thumb plus four fingers and are deep blue through palms and fingers, continuous with the arms. Bhattathiri’s two open hands show five digits each. His two feet and Bhagwan’s two feet show five toes each. No limb is cut off by the frame.
- **Clothing and cast:** Cream Kerala clothing and sacred thread are modest; the bare upper torso is ordinary traditional dress. Bhattathiri samples: cheek `(350,310)` RGB `(173,107,73)`, R-B 100; torso `(330,450)` `(178,100,62)`, R-B 116; arm `(300,500)` `(150,77,43)`, R-B 107. They read warm-brown. Bhagwan’s hands are blue against his arms. The crown and ornaments are visibly elaborate, but match the same temple-iconographic level seen in stanza 6 and do not read as palace regalia beyond it.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible, including near the lower motifs or corners.
- **Scene and caption fidelity:** Bhattathiri worships one Bhagwan; offerings and a resting veena are present, with three separate pairs of devotee footprints along the lower edge. The source photo’s gathering is treated as context; no unidentified faces or branded source marks are copied.
- **Character/deity contract:** Two-armed blue Bhagwan and older Bhattathiri appear consistent with their contracts.
- **Verdict: PASS** for this checksum.

### Stanza 9 — `candidate-v010.png`

**Candidate:** `artifacts/d094/s009/landscape/candidate-v010.png` — SHA-256 `f7ce21157b66f0e1a5c2095687cd93e878096a9ea5d2d4886e9d2587da8a4451`; native 1670×942. **Reference:** `intake/D094/009.jpg` — SHA-256 `d7acddd47035fdecc39904ce757cb0d1d920dbc879d19ddaab6110eb2af41401`. **Visual review time:** 2026-11-18T08:34:21Z.

- **Anatomy:** Bhattathiri’s sweeping pose has two attached arms and two feet. The right-side shrine reads as a modest wall medallion, not an oversized shrine. Its deity has exactly four distinct attached arms and one head; no duplicate deity.
- **Faces:** Bhattathiri’s face and the small deity face are intact at their displayed size.
- **Hands and feet:** The deity’s four blue hands correspond to one chakra, conch, lotus and mace; all are blue continuously with the arms. Attribute grips and the small medallion make some individual finger separations too small to resolve at full size, with no visible extra or malformed digit. Bhattathiri’s hanging hand shows five digits and both feet show five toes. Deity toes are too small to count at full size; no missing-toe defect is visible.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and modest beads. Skin samples: cheek `(421,153)` RGB `(170,85,50)`, R-B 120; torso `(390,285)` `(180,93,58)`, R-B 122; arm `(500,400)` `(171,85,53)`, R-B 118. The plan discloses its own maximum R-B 129 above the below-120 guide; that deviation is present in the plan, while these independent samples max at 122. Skin reads warm-brown, not orange. The small deity has a low ochre crown, one modest necklace and one garland; hand color is blue.
- **Text/signature artifacts:** None visible on the floor, shrine, wall, corners or broom area.
- **Scene and caption fidelity:** The sweeping broom, flower scatter, small offering, sun and lamp are present. The shrine deity is a single four-armed presence with the required four attributes; no second deity appears in the sun or flame. The source reference’s four-armed iconography is used as context without copying its portrait scale or finish.
- **Character/deity contract:** The shrine remains a small medallion; four blue arms and restrained ornaments meet the stanza-specific contract. Tiny extremities are recorded as unresolvable observations rather than defects, per the review standard.
- **Verdict: PASS** for this checksum.

## Recommendation and inventory

No genuine full-image defect requiring a needs-fix verdict was visible in these five checksummed candidates. The sampled warm-brown skin is natural by eye, including the disclosed slight above-guide measurements. Keep the exact versions eligible for later human consideration; **none is approved by this review**. The standing captain art-approval state remains pending and this review raises no new captain decision.

Captain-call inventory for this review: **empty**. The required command `FM_HOME=/home/gehariharan/firstmate-narayaneeyam-mate bash /home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh complete d094-review-zs --none` returned `complete: d094-review-zs captain-call inventory reviewed`. No visual board is applicable because this task requires a text report and explicitly disallows a board.
