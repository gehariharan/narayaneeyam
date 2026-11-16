# Dasakam 65 landscape visual review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates at their full native resolution, then enlarged focused crops from read-only copies under this task's `data/d065-review-c/scratch/` directory. I also opened the mapped intake photographs 001.jpg–005.jpg and read their captions. The plan maps stanza `n` to `intake/D065/00n.jpg`; content `commentary_source` points to caption `#n`. The final plan says the photos are for story/cast context and the canonical stanza and scene brief control when a photo differs. Accordingly, I judged the household scenes in stanzas 3–4 against the final plan and captions rather than the dance imagery in photos 003.jpg–004.jpg.

Review time recorded for each image: **2026-11-16 03:50:19 UTC**. Each verdict applies only to the exact candidate checksum below. No approval manifest or project file was changed. No generated image was created or edited.

### Contract bytes actually read

| Frozen contract | SHA-256 |
|---|---|
| `data/d065-production/review-contract-c/art/plans/d065.json` | `9a66d787a112eec042b41d5b86f7f682500ca9623a7e3dc629e8a47fb7c56860` |
| `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `.../characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `.../characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `.../characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

All five matched the brief's expected checksums. The `sha256sum` output also matched all five expected candidate checksums; native dimensions from `identify` were 1672×941 for every candidate.

### Evidence and contract references

- Hash and dimension checks: `sha256sum` on the five specified candidate paths and five frozen contract paths; `identify` on scratch copies of the candidates.
- Full-image review: opened each candidate and each mapped reference photo in the image viewer at original detail. Focused review used ImageMagick crops made from scratch copies (for example, `magick s001.png -crop 120x130+390+315 +repage -resize 300% ...` for the stanza 1 flute hand). Scratch crops were not made in producer `artifacts/` or `intake/`.
- Final plan entries and disclosed status: frozen plan stanza 1 at lines 33–86, stanza 2 at 88–141, stanza 3 at 143–192, stanza 4 at 194–243, and stanza 5 at 245–294. Candidate-status lines are 76, 131, 182, 233 and 284 respectively.
- Reference mapping and caption source: `content/daskams/d065.json` lines 16–25, 33–42, 50–59, 67–76, 84–93; `OneDrive/Pictures/Narayaneeyam Studio/intake/D065/photo-captions.txt` lines 1–24; mapped images are `intake/D065/001.jpg` through `005.jpg`.
- Series prohibitions and rendering: frozen `series.json` lines 4–24 and 34–64, including matte mural style, no text/signature/watermark, no cinematic beams, no metallic reflections and no distorted hands.
- Krishna contract: frozen `krishna-vrindavan-youth/character.json` lines 7–14, 47–63; gopika face, build, clothing and jewelry contract: frozen `gopikas/character.json` lines 16–28. Bhattathiri is not present in these five scenes.

For skin checks I copied each candidate into scratch and computed channel-wise medians over 10×10-pixel skin-only patches with ImageMagick raw RGB output and Python's median calculation. `B-R` means blue minus red; `R-B` means red minus blue. Coordinates below refer to the native 1672×941 candidate. These samples are observations, not a contract threshold; patch location and mural shading affect the value.

## Candidate findings

### Stanza 1 — v002 — `artifacts/d065/s001/landscape/candidate-v002.png`

- **Verified SHA-256:** `b8c929b36874141366fafd1e2ddf2c0eec3ffe548175ce6caae8b4cb63468824`
- **Anatomy:** One youthful Krishna with one face, two attached arms, and seated legs. The visible right foot is fully inside frame; its five toes are separately drawn. No detached, fused or elongated limbs.
- **Faces:** Krishna's youthful face is coherent and calm. The forehead is plain. One upright feather and one simple low gold band are visible; no tall tiered crown or infant proportions.
- **Hands/feet:** In the enlarged flute-hand crop (native region approximately x=390–510, y=315–445), the far hand shows four finger shapes above/around the flute and a thumb below; the count is legible in this crop. The near hand remains connected around the instrument. The visible foot has five toes. No malformed digits.
- **Clothing and cast:** Yellow dhoti and muted red-orange shawl; no other person is present. No exposed area beyond the ordinary traditional depiction in the plan.
- **Text/signature artifacts:** None found in the sky, river, ground, foliage or corners.
- **Scene and caption fidelity:** Full moon, wooded Yamuna edge, single flute-playing Krishna and restrained river band are present. The intake photo is a glossy, heavily ornamented Krishna scene; the candidate follows the final scene brief and youthful Krishna contract instead of copying those photo-only details.
- **Character/deity contract and color:** Deep matte blue skin; one simple band, one feather, plain forehead, ordinary two-arm/two-leg anatomy. Independent 10×10 patch medians: cheek (690,270) RGB (48,59,95), `B-R=47`; chest (550,500) RGB (34,39,57), `B-R=23`; upper arm (451,446) RGB (52,64,103), `B-R=51`. The cheek equals the plan's disclosed `B-R 47` face patch. The darker chest patch is shadowed.
- **Verdict: pass.** The plan's disclosed finger-count uncertainty was resolved by the enlarged crop; no other defect was visible.

### Stanza 2 — v002 — `artifacts/d065/s002/landscape/candidate-v002.png`

- **Verified SHA-256:** `71b3d4e52a6c069553cc93c77ab7ffc5391a884594e2a91aad79966045a3df12`
- **Anatomy:** Three distinct gopikas in the foreground and one small Krishna across the river. The women have natural connected arms and hands; their skirts continue past the bottom frame because they are seated, with no visible face or extremity severed at the border. Krishna's two arms are attached and the flute is held between his hands.
- **Faces:** The three gopika faces and hairstyles differ. Krishna's face is coherent but very small in the full mural. Enlarging it still does not support a confident check that his forehead is unmarked or that the gold headband is the required low single band.
- **Hands/feet:** Gopika hands show separate finger contours in prayer, resting and open-palm poses; no apparent fused or extra digits. Krishna's flute-hand digit count is too small to verify confidently. The foreground women are seated and their feet are outside the composition; no visible key extremity is cut by the frame.
- **Clothing and cast:** Three modestly covered women in distinct muted saris; no exposed body or sexualized pose. The necklaces, earrings and bangles read as ordinary village adornment in this scene, not palace finery. No duplicate people.
- **Text/signature artifacts:** The sound is represented by simple curved lines; no letters, notation, caption, signature, watermark or logo found, including sky, water and corners.
- **Scene and caption fidelity:** The women turn toward the single flute-playing Krishna across the river, matching the stanza 2 plan and caption. The mapped photo is a close view of Krishna alone; the plan and caption call for gopikas responding at a distance, which the candidate shows.
- **Character/deity contract and color:** Krishna appears as the youthful blue cowherd with yellow dhoti, red-orange shawl, dark hair, feather and a narrow gold band; the face is too small for a reliable forehead/headband confirmation. Independent 10×10 patch medians: Krishna cheek (1430,280) RGB (67,68,87), `B-R=20`; torso (1430,340) RGB (76,76,94), `B-R=18`, close to disclosed `B-R 22` and `18`. Gopika cheek samples at (270,285), (600,395), (940,330) give `R-B=125`, `48`, `63`, compared with disclosed `106`, `50`, `65`; the latter two are close and the first sample is a brighter cheek location. All read as warm brown mural pigment.
- **Verdict: uncertain.** No visible wrong marker is established, but the required plain-forehead and low-band checks on Krishna cannot be made confidently at the rendered size. This is the exact observability limitation disclosed in the plan. Under the instruction that uncertain is not pass, I cannot clear this candidate.

### Stanza 3 — v001 — `artifacts/d065/s003/landscape/candidate-v001.png`

- **Verified SHA-256:** `194cfaac3792db1afc59ea368fc072d413e44a397a0ce8c78efa037b04afa9c6`
- **Anatomy:** Three adult gopikas and one safely settled, fully wrapped infant. Arms, hands, legs and visible feet connect naturally. The visible adult feet are inside the frame; enlarged feet show five toe marks each where toes are visible. The infant is supported on a low cot and does not appear in danger. No duplicated or malformed person.
- **Faces:** Adult faces are distinct and proportionate; the infant face is calm and coherent. Hair and facial detail remain separable at enlarged view.
- **Hands/feet:** The caregiver's hand rests on the infant's wrap; another woman pauses at the covered meal vessel, and the third pauses at the grinding stone. Hand contours are connected, with no extra or fused digits seen. Feet are not cut off.
- **Clothing and cast:** All three women are fully clothed in simple muted saris. Infant is wrapped; no exposed or sexualized framing. Domestic roles are shown with dignity.
- **Text/signature artifacts:** The pale sound motif in the upper-right is a curved ornamental stroke, not readable writing. No text, signature, logo or watermark found in any corner, ground or foliage.
- **Scene and caption fidelity:** A mother leaves a safely settled infant, a meal is covered beside a serving vessel, and a grinding task is paused as the women move toward the forest. This follows the caption and plan. The mapped photo shows a moonlit dance, but the final scene brief explicitly calls for the home tasks and departure, so that visual difference is expected.
- **Character/deity contract and color:** Krishna is absent as required. The gopikas are distinct adults with natural two-arm anatomy and warm brown/ochre skin. The plan reports face patches `R-B 69`, `101`, `192` and infant `183`. My independent face-patch medians (two 10×10 patches each) are: gopika 1 at (410,265)/(415,290), `194`/`148`; gopika 2 at (925,255)/(930,280), `179`/`130`; gopika 3 at (1360,315)/(1375,340), `158`/`81`; infant at (75,590)/(80,610), `186`/`190`. These sampled face areas vary between lit and shaded regions; the infant samples are close to its disclosed value. The scene remains within the character contract's warm-brown mineral palette, with no explicit numerical skin threshold in the contract.
- **Verdict: pass.** No genuine defect was visible at full frame or in the reviewed crops.

### Stanza 4 — v002 — `artifacts/d065/s004/landscape/candidate-v002.png`

- **Verified SHA-256:** `a7b87a5be5b9de79343adbe7737dbc7ce56d6be4c7da79484a109ec136570f1f`
- **Anatomy:** Three separate gopikas with ordinary adult proportions and attached arms. The moving figures' visible feet are within the frame; no extra, missing or fused limbs. The center figure's arms reach naturally to her hair.
- **Faces:** Three distinguishable faces, with no duplicated person or malformed feature. None is Krishna; the plan says not to include him in this scene.
- **Hands/feet:** Left and right women's hands hang or carry the ornaments with distinct finger contours. The center woman's two hands are at a hair flower/clasp; their contours remain separate. Visible feet and toes have natural outlines; no clipped face or extremity.
- **Clothing and cast:** All three wear opaque, fully covering saris and blouses. The middle gopika is completing a hair ornament, while the right gopika carries a pearl strand and circular ornaments; the left gopika is already simply adorned. Jewelry is prominent enough to show the unfinished task but does not read as palace finery or heavy jewelry prohibited by the group contract. No sensual posing.
- **Text/signature artifacts:** None found in the sky, forest, path, ground or corners.
- **Scene and caption fidelity:** The group is approaching through the forest; one is adorned and another carries ornaments while fixing her hair. This matches the plan and caption. The photo instead shows Krishna with dancers; the plan deliberately omits him here.
- **Character/deity contract and color:** No Krishna or Bhattathiri. The three gopikas have distinct hairstyles and warm-brown skin. The plan gives face-patch medians `R-B 99`, `100`, `100`. My paired 10×10 face-patch medians are left gopika at (360,250)/(370,270): `94`/`106`; center at (800,250)/(805,255): `104`/`104`; right at (1180,260)/(1190,280): `109`/`112`. These are close to the disclosed values and read as warm brown mineral pigment.
- **Verdict: pass.** The declared incomplete hair/jewelry details are present as intended; no undisclosed defect was visible.

### Stanza 5 — v002 — `artifacts/d065/s005/landscape/candidate-v002.png`

- **Verified SHA-256:** `c1b8f691c7c60ad2784a02d38b59200739cf8564b21001c0864dda8e1e371850`
- **Anatomy:** One gopika with two attached arms, two legs and natural proportions. Hands are connected; both visible feet remain inside the full frame and show five toe contours each. No malformed or duplicated person.
- **Faces:** One coherent profile, with a calm expression. The small forehead dot is on a gopika, not Krishna, and is not prohibited by her contract.
- **Hands/feet:** Enlarged hand crops show separate fingers and attached wrists. The lower frame contains the full feet; no key extremity is cut off.
- **Clothing and cast:** Opaque blouse and wrapped sari cover the figure in ordinary traditional dress; no sexualized framing. The single woman is the required cast.
- **Text/signature artifacts:** None found in sky, water, path, foliage or corners.
- **Scene and caption fidelity:** The gopika hurries through the wooded river setting, but the required jewelry exchange is not depicted: the broad U-shaped white ornament remains at the neck/chest (approximately native x=760–930, y=150–280), and the pearl strand remains at the hip/waist (approximately x=640–875, y=410–525). Thus the image reads as an ordinary necklace plus waist strand, not the necklace/waistband exchange in the stanza and plan. This is the deviation explicitly disclosed in the frozen plan for selected v002.
- **Character/deity contract and color:** No Krishna. Gopika has warm-brown skin, dark hair and modest clothing. Independent face patches at (805,90)/(810,110) give `R-B=106`/`106`, close to the disclosed `104`; an exposed-hand patch at (542,498) gives `R-B=118`. No contract prohibition is violated beyond the disclosed scene deviation.
- **Verdict: pass — disclosed deviation present.** The reversed jewelry placement is clearly present and is the only defect; the plan states v002 has this same known limitation and no further repair is authorized. Per the disclosed-deviation rule, it is recorded as present and does not receive a new needs-fix verdict here.

## Recommendation and captain-call inventory

This is exact-checksum visual evidence only and grants no artwork approval. Keep the dasakam unapproved. Stanza 2 remains uncertain because the small Krishna does not permit confident confirmation of two explicit continuity details. Stanza 5's jewelry exchange remains visually absent as disclosed. The remaining three reviewed images pass this review.

I inspected the report and the reviewed inventory and found no new unresolved captain choice raised by this review. The standing captain art approval is not a new inventory item for this review. **Captain-call inventory: empty.**
