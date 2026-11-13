# D067 landscape candidate review: S006–S010

Reviewed independently against the final D067 plan and character contracts. This is a review of unapproved comparison candidates; it does not approve artwork or change the approval manifest.

**Review time:** 2026-11-13T23:09:02Z (UTC; inspection concluded)

## Exact bytes inspected

The supplied candidate checksums all matched before visual inspection. Each candidate is 1672 × 941 pixels. SHA-256:

| Stanza / version | Candidate | SHA-256 |
|---|---|---|
| S006 v003 | `artifacts/d067/s006/landscape/candidate-v003.png` | `b65678f6151d17a06c3ee43d37ea9478f79492323a69c7dc4401ba8270a2a6bf` |
| S007 v001 | `artifacts/d067/s007/landscape/candidate-v001.png` | `5dccb1e8cad9424c68b27c1fabc97d04b08bb8e0a79c6fbff821d91a0e85cd93` |
| S008 v003 | `artifacts/d067/s008/landscape/candidate-v003.png` | `f0a9904831ac7a65c46832811bcc95cecf09ee6ab4bbb8eb3553da158b04e01d` |
| S009 v003 | `artifacts/d067/s009/landscape/candidate-v003.png` | `4b105c6ba593e9693930a50b8cfc223039696b245e380b885a1fddda51cb1ce8` |
| S010 v002 | `artifacts/d067/s010/landscape/candidate-v002.png` | `a895b2d1eba69489b939cce48768648945f3b465444005cbd159708e84de5f41` |

SHA-256 values of the final plan and character files read:

| Contract | SHA-256 |
|---|---|
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d067-final-plan-v4/d067.json` | `3baa6c3688517f3be1ba44a7ec3c53f5797148acee5782fc72858600da22212b` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/d067-krishna-youth/character.json` | `6f4194313a1a8354df14013d9d380c45ef605b8d66b208d1b1ab9bd61d54ea4c` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/d067-rasa.json` | `b9c56f77258d88bec7a3d9908f6aee385c4acaec737660a62f1887ce002c2d3d` |
| `art/bible/characters/d067-radha/character.json` | `b3a0003ed8c1c1977b393ef7c7abe5f010acff254f9395a889231935570f35d6` |

The two expected hashes in the brief (final plan and shared Krishna contract) matched. The chapter Krishna, gopika, rasa, and Radha files above were read because they are named by the plan/cast. The Krishna continuity check follows the shared character contract: plain smooth forehead, one low gold band and one upright peacock feather, ordinary two-arm/two-leg anatomy (character file lines 7–14 and 47–50). The gopika and Radha checks follow their adult, distinct, natural-proportion, village-dress rules (gopikas lines 16–28; D067 contracts lines 12–21).

## Method and evidence

I first ran `sha256sum` over all five supplied candidates and the final plan/expected shared Krishna contract; the values matched the requested checksums. I also hashed the other named character files listed above. I inspected each candidate and mapped source photo at full native resolution using `view_image`, then inspected self-made enlarged crops of faces, Krishna’s forehead where visible, hands, groupings, and extremities. Crop files were temporary under the current worktree’s `.review-scratch/` and are not part of this report or deliverable. `identify` reported each selected candidate at 1672 × 941. No old D067 review report, review record, producer note, or pre-existing inspection crop was used.

The stanza/photo mapping is S006→`intake/D067/006.jpg`, S007→`007.jpg`, S008→`008.jpg`, S009→`009.jpg`, S010→`010.jpg`, confirmed in `accepted-readiness.json` under `per_stanza_references` and captions #6–#10 in `photo-captions.txt` (caption lines 28–53). Caption meaning and stanza text were checked against `content/daskams/d067.json` lines 67–111. The final scene and candidate-status entries are in final plan lines 282–481, including each stanza’s `must_show`, reference path, and landscape candidate status.

## Findings by candidate

### S006 v003 — `pass`

- **Anatomy:** Five distinct adult women plus one small imagined Krishna image. The women have ordinary seated proportions, attached arms, and no duplicated/fused bodies. Krishna is a single nonphysical thought-image, not a second physical figure.
- **Faces:** The women have distinct readable faces and expressions; the speaking woman looks upward toward the image, while companions show grief or attention. Krishna’s small face is coherent at enlargement.
- **Hands / feet:** The speaker’s chest hand and raised open hand are separate and naturally attached; visible open-hand digits resolve as five. The companions’ folded hands and the other visible hands show no clear extra or missing digits. Feet are covered by their seated saris, not cut off.
- **Clothing / adult cast:** All five women read as adults and are fully covered in opaque saris and blouses. Jewelry is village-scale. No sexualized framing.
- **Text / signature artifacts:** None seen in the grass, river, sky, or corners.
- **Scene / caption fidelity:** The central speaker presents an inward sight of Krishna and the seated companions look distressed. The blue figure sits in one cream thought-like aura near her gaze. The aura and head-and-shoulders figure remain small relative to the women and do not dominate the composition. The Yamuna night setting supports caption #6.
- **Krishna continuity:** The enlarged thought-image forehead shows no pale mark. He is deep blue, youthful, with one low band and one upright feather; no tall crown. His torso is framed by the vision, so legs are not depicted. This complies with the stanza-6 imagined-vision exception.

### S007 v001 — `needs-fix`

- **Anatomy:** The visible group has distinct bodies and naturally attached limbs. No malformed or duplicated person is apparent. Peripheral figures and limbs at the mural edges are not key extremities cut off.
- **Faces:** Faces are legible and distinct. Radha at the right is visibly sorrowful and separate from the active group.
- **Hands / feet:** The flute-miming gopika has two attached hands placed at the flute; the other visible open, raised, and folded hands show no obvious extra or missing digits at enlargement. Radha’s hands rest across her knees and both feet are visible; neither face nor key extremity is cut off.
- **Clothing / adult cast:** The women are adult and fully clothed in opaque village saris and blouses; no sexualized framing. **Defect:** Radha’s neck at approximately x=1415–1475, y=465–555 pixels has several long pearl strands stacked over a close necklace. This is visibly heavier, layered regalia than the simple village necklaces in S006, S008, S009, and S010, and conflicts with the gopika contract’s no-heavy-jewelry rule. It remains noticeable in the full image as a bright multi-strand necklace on the seated focal figure.
- **Text / signature artifacts:** None seen in the grass, river, foliage, or corners.
- **Scene / caption fidelity:** Several women mime Krishna’s gestures; the green-clad seated woman plays a flute, while Radha sits apart at the riverbank with a sorrowful expression. Krishna is absent, as required. The reference photo and caption #7 supply the search/Radha context; the final plan specifies imitation followed by finding Radha. The scene is clear, but simplify Radha’s necklace to ordinary village jewelry before selection.
- **Krishna continuity:** No Krishna appears, as required. No physical duplicate is depicted; the flute player is a gopika imitating his gesture.

### S008 v003 — `pass`

- **Anatomy:** The women form a distinct seated group with natural torso and arm proportions; no fused or duplicated bodies. Covered seated legs are consistent with the poses.
- **Faces:** Distinct faces are visible across the group, looking upward, singing, or lamenting. No malformed face seen in the enlarged left and right group crops.
- **Hands / feet:** Visible open and prayer hands show no clear extra/missing digits; the central open palm has five discernible fingers. Most feet are covered by saris in seated poses rather than cropped by the frame.
- **Clothing / adult cast:** The group reads as adult women in fully opaque saris and blouses, with simple necklaces and earrings. No exposed body or sexualized framing.
- **Text / signature artifacts:** None seen in the ground, shoreline, sky, foliage, or corners.
- **Scene / caption fidelity:** The women sit together at the Yamuna bank, singing/lamenting under a deepening dusk sky with a low setting sun and quiet river. Krishna is absent. This matches the stanza plan’s return to the bank after the late search and the caption #8.
- **Krishna continuity:** No Krishna is shown; absence is required by the scene.

### S009 v003 — `pass`

- **Anatomy:** One physical youthful Krishna stands among distinct adult gopikas. Enlarged crops show two arms attached to Krishna’s shoulders and two legs ending in feet; no duplicate Krishna, fused body, or malformed person.
- **Faces:** Krishna has a calm, gentle smile; the women turn toward him with relief and attentive expressions. Faces remain coherent in enlarged crops.
- **Hands / feet:** Krishna’s open hand has five discernible fingers; his other hand hangs naturally. Both feet are fully inside the frame and show five toes apiece. Visible gopika prayer/open hands show no obvious extra or missing digits.
- **Clothing / adult cast:** The women are adults in opaque village saris and blouses. Jewelry remains ordinary village scale, without stacked palace-like adornment. Krishna’s necklaces, armlet, belt, and earring are ordinary Krishna iconography. No sexualized framing.
- **Text / signature artifacts:** None seen in ground, river, sky, foliage, or corners.
- **Scene / caption fidelity:** A single Krishna reappears in the moonlit riverside clearing while the women face him with relief. The full image conveys the stanza’s return and caption #9’s merciful reappearance.
- **Krishna continuity:** **The disclosed faint forehead mark is present.** In the enlarged forehead crop, a faint narrow vertical mark is visible between the brows and band. The low gold band and single upright feather otherwise match the contract; no raised crown is visible. The plan discloses this narrow deviation for S009. No additional or larger continuity deviation is seen.

### S010 v002 — `pass`

- **Anatomy:** One physical youthful Krishna stands with a distinct group of adult women. The enlarged central crop shows two attached arms, hands, legs, and feet with ordinary proportions. No duplicated or fused figures.
- **Faces:** Krishna’s face is coherent and smiling; the women’s distinct faces show tears and joyful attention. No malformed faces seen in the full image or face crops.
- **Hands / feet:** Krishna’s hand over his chest and his open hand are separate and attached; the visible digits show no clear extra or missing fingers. The women’s folded and raised hands show no obvious digit defects. Exposed feet along the bottom edge are fully inside the image and show toes; none is cut off.
- **Clothing / adult cast:** All women are adult and fully clothed in opaque village garments. Their necklaces and bangles are simple and do not reach S007 Radha’s stacked level. No sexualized framing.
- **Text / signature artifacts:** None seen in ground, foliage, or corners.
- **Scene / caption fidelity:** A smiling Krishna stands before the reunited gopikas, who respond with grateful gestures and visible happy tears. The group scene is consistent with caption #10 and the plan’s joyful reunion.
- **Krishna continuity:** **Both disclosed deviations are present:** the enlarged forehead crop shows a clear pale yellow U-shaped mark, and the headwear has a raised central ornament above the gold band. The single upright feather remains present. These are the narrow forehead-mark and raised-crown deviations disclosed for S010 in the final plan. No additional continuity deviation is seen.

## Recommendation

Keep S006, S008, S009, and S010 eligible for the next editorial step on these exact checksums. Do not select S007 v001 without reducing Radha’s stacked pearl jewelry to the modest village scale used elsewhere. These are independent visual findings only; the images remain unapproved until the human art approval step.

## Reproduction commands

Commands used for byte and size verification included:

```sh
sha256sum <the five candidate paths> <final plan path> <the named character paths>
identify -format '%f %wx%h\n' <each selected candidate path>
```

Focused self-made enlargement crops were produced with ImageMagick `magick <candidate> -crop <region> +repage -resize <scale> <worktree-scratch-path>` and opened with `view_image`. Relevant final-plan line references: S006 282–322, S007 324–365, S008 367–407, S009 409–449, and S010 451–491. Source stanza text/commentary is at `content/daskams/d067.json` lines 67–111; caption labels and commentary are at `photo-captions.txt` lines 28–53. Reference mapping and supplied reference paths are recorded in `/home/gehariharan/firstmate-images/data/d067-production/accepted-readiness.json` under `per_stanza_references`.
