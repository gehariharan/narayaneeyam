# D099 landscape visual review: stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates against the byte-frozen final plan, frozen series and character contracts, mapped intake photos 006.jpg–010.jpg, and the captions mapped to D099 stanzas 6–10. The review is bound to the exact candidate checksums below and the contract checksums in the next section. Every candidate checksum and every supplied expected contract checksum matched before inspection.

I opened each complete candidate at native resolution, then made and inspected focused crops in `.review-scratch/` for faces, hands, feet, bodies, the cosmic head and feet rows, crowded figures, and image corners. `identify` reported native sizes from 1670×941 to 1672×942. The crop operation used ImageMagick `magick … -crop WxH+X+Y +repage`; measured skin patches used `magick … -crop 32x32+X+Y +repage -format '%[fx:median.r],%[fx:median.g],%[fx:median.b]' info:`. I inspected the complete mapped photos at native resolution too. No report, review record, producer note, or prior review evidence was consulted.

Reference/caption mapping is from the final plan’s `reference_mapping` and each stanza’s `reference_paths`/`reference_guidance` (plan lines 309–564); source caption labels #6–#10 map to photos 006.jpg–010.jpg (`photo-captions.txt`, headings at lines 26, 31, 36, 41, 46). The matching D099 stanza and commentary-source entries are at `content/daskams/d099.json` lines 101–176. Scene requirements and candidate disclosures are in the final plan lines 321–564. The inspected character rules include Guruvayurappan’s skin and crop/finger requirements (`guruvayurappan/character.json` lines 19–36), Bhattathiri’s face, skin, hair, clothing and continuity markers (`bhattathiri/character.json` lines 17–30), D099 universal-form anatomy/prohibitions (`d099-vishvarupa/character.json` lines 5–22), and the worldly-people group contract (`d099-worldly-people/character.json` lines 6–20). The global matte mural and no-text rules are in `series.json` lines 3–48.

## Frozen contract checksums actually read

| Contract | SHA-256 |
|---|---|
| Final plan `art/plans/d099.json` | `e7623dea804845c086fa49aa16e995a473205a83a880a6cc9b9ca5e0d202e255` |
| Series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Adishesha `art/bible/characters/adishesha/character.json` | `d5c14279a218432cf99035e86436523e156167af06563c7890a3ae5954f5790c` |
| Bhattathiri `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| D031 Vamana `art/bible/characters/d031-vamana/character.json` | `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229` |
| D099 poets/devotees `art/bible/characters/d099-poets-devotees/character.json` | `8b21f06911ed9a7b40171c93d5d3c3b6c3ca998b0a0134e59c7d17b5d6eac4ad` |
| D099 Vishvarupa `art/bible/characters/d099-vishvarupa/character.json` | `29741fba4d439b84e0a0231addd62c6dc42f42e83383789c63f5a4bcd06b2dcd` |
| D099 worldly people `art/bible/characters/d099-worldly-people/character.json` | `180f80af38a6c1dec1769d396e65359094112ded6f107428537d77ccf53e1179` |
| Guruvayurappan `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| Sages `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |

## Image findings

### Stanza 6 — `candidate-v003.png`

- **Candidate:** `artifacts/d099/s006/landscape/candidate-v003.png`; SHA-256 `f831e373e3194b9e2c48cf30e6fc57027557bfc721d60c65975b6672afdbcd68`; native size 1672×941.
- **Review time:** 2026-11-17T08:11:26Z.
- **Anatomy:** One reclining Narayana with one coherent face and torso; both arms connect naturally. The supporting arm/hand is occluded behind his head, not clipped by the frame. Adishesha’s coils are continuous and support the body; seven distinct cobra hoods are attached in a symmetric fan. No fused, duplicated, or malformed figure was visible.
- **Faces:** Narayana’s face and all seven hood faces are distinct and coherent in the enlarged upper-left crop (source pixels x=30–570, y=100–540).
- **Hands/feet:** The visible open hand in the enlarged crop (x=480–1100, y=400–680) has one thumb and four fingers. Both feet remain within frame; the enlarged feet crop (x=1010–1590, y=520–820) shows five toe forms on each. The support hand is naturally occluded by the head as described above.
- **Clothing and cast:** Opaque traditional yellow/orange drapery covers the body. There is no ordinary human figure. Crown, jewelry and serpent ornament are ornate temple iconography; no explicit prohibition is contradicted.
- **Text/signature artifacts:** None seen at native size or in the enlarged water/ground and corner crops; no legible marks, signature, logo, or watermark.
- **Scene and caption fidelity:** The deep cosmic water, reclining deity, navel-connected stem, eight-petal lotus and central ochre Meru-like core are present. Photo/caption #6 shows the same reclining-water/lotus cue with an additional creator figure; the plan correctly omits that extra figure. The candidate follows the plan’s single-deity scene.
- **Character/deity contract:** Seven attached Adishesha hoods, a connected couch body and calm posture meet the scene-specific contract; Narayana has no extra arms or malformed anatomy. The main extended hand and both feet are fully in-frame. No defect at the stated review threshold.
- **Verdict: pass.**

### Stanza 7 — `candidate-v007.png`

- **Candidate:** `artifacts/d099/s007/landscape/candidate-v007.png`; SHA-256 `b94ae27ace6e68f598d68be66b96b00c9b60ae04cfd1bb2fe0d7ba2d47a376d7`; native size 1670×941.
- **Review time:** 2026-11-17T08:11:26Z.
- **Anatomy:** Three distinct ordinary adults (a seated coin counter, a seated garland maker, and a standing fruit carrier), Bhattathiri, and one Guruvayurappan murti are separately readable. Each has one coherent face and two attached arms. No duplicate or fused people, extra limbs, or malformed anatomy was visible.
- **Faces:** Enlarged views show distinct faces for the three ordinary figures and Bhattathiri; the murti has one serene face. No malformed face or clone-like duplicate was apparent.
- **Hands/feet:** The carrier’s basket-support hands are attached and anatomically coherent; the garland maker’s hands meet the flowers naturally; Bhattathiri’s raised hand is attached and open with a thumb and four fingers; the murti’s raised open hand shows a thumb and four fingers. Enlarged lower-group crops show the ordinary figures’ visible feet in-frame, with five toe forms per foot; the murti’s two feet also show five toes each. No key extremity is cut off.
- **Clothing and cast:** The seated man’s bare upper torso is ordinary traditional dress with an opaque dhoti; the woman wears a sari and blouse, and the other figures wear traditional garments. No exposed skin beyond ordinary traditional dress and no sexualized framing. The deity has an elaborate crown and layered ornaments, ordinary iconography under the review rule.
- **Text/signature artifacts:** No readable text, signature, logo or watermark in grass, floor, or corners.
- **Scene and caption fidelity:** The ordinary figures attend to material or daily activities, Bhattathiri gestures toward a quiet Vishnu presence, and chest-level lotus/flame-like heart motifs signify the indwelling divine without showing a floating deity. This preserves photo/caption #7’s material-concern/inner-presence contrast while omitting its modern objects. The image contains no literal phone, car, or money pile from the reference.
- **Character/deity contract:** The small group is dignified and distinct; Bhattathiri retains his older, clean-shaven, ash-marked appearance and cream dhoti. The measured disclosed palette deviations are present: my 32×32 medians were carrier (182,94,37), seated fruit maker (179,92,37), garland maker (181,94,38), and Bhattathiri (170,88,36), all warmer than the approximate R−B=120 target; the murti cheek was (64,78,95), B−R=31, below the deep-blue target. These observations are no worse than the plan’s disclosed deviations (plan line 406). No structural or anatomy defect accompanied them.
- **Verdict: pass — disclosed deviation present.**

### Stanza 8 — `candidate-v003.png`

- **Candidate:** `artifacts/d099/s008/landscape/candidate-v003.png`; SHA-256 `6b347933ccbc66cac4d02ba4e7d0b143f6d484fe9a0df3578b4e212e52093a45`; native size 1672×941.
- **Review time:** 2026-11-17T08:11:26Z.
- **Anatomy:** One connected cosmic body fills the frame. The enlarged upper-body crop (x=520–1140, y=0–570) shows a coherent torso, one central face, two attached arms and naturally overlapping joined hands. Ordered tiers of smaller heads and eyes read as symbolic plurality, not extra full bodies or random limbs.
- **Faces:** The central face and visible tiered profile faces are distinct and coherent at the enlarged crop; no severed, floating, fused, or malformed head was seen. The outermost profiles remain inside the frame.
- **Hands/feet:** The central joined hands overlap naturally; no extra or fused digit is visible. The complete lower row of repeated feet is inside the frame; enlarged sections show five toe marks per visible foot. No figure is clipped at an edge.
- **Clothing and cast:** The single cosmic form wears a continuous ochre garment; no second cast member is introduced. The heart-lotus is centered on the chest.
- **Text/signature artifacts:** None seen in ground, corners, or the detailed field texture.
- **Scene and caption fidelity:** The candidate shows the universal form, central heart-lotus and repeated feet, matching stanza/caption #8. Relative to photo #8, it uses ordered tiers and omits the photo’s weapons, flames, rays, and separate meditating person, as the plan directs.
- **Character/deity contract:** One connected central cosmic body, one central face, symbolic tiers, no duplicate complete body, no tangled limbs, and no weapons. The central skin reads slate/deep blue in the enlarged crop; no anatomy or structural prohibition is violated. The facial tiers remain within the composition.
- **Verdict: pass.**

### Stanza 9 — `candidate-v006.png`

- **Candidate:** `artifacts/d099/s009/landscape/candidate-v006.png`; SHA-256 `7d5701b18eb91aa3223d6fa2b31517659346e0fd27c91e2c9a7ed7f4314554c6`; native size 1670×942.
- **Review time:** 2026-11-17T08:11:26Z.
- **Anatomy:** Bhattathiri is a distinct kneeling devotee. The universal form has one connected body, one coherent face, and no accidental duplicate full body or fused anatomy. The three compact bands are symbolic worlds, not a second physical Vishnu.
- **Faces:** Bhattathiri and the central Vishvarupa face are intact and coherent. Small figures inside the world bands have distinct, readable heads at their scale; no malformed face was visible.
- **Hands/feet:** Bhattathiri’s hands join naturally in prayer. The universal form’s visible open palm (enlarged crop x=460–1120, y=280–610) shows one thumb and four fingers. Bhattathiri’s visible lower-left foot (enlarged crop x=0–520, y=420–920) is fully inside the frame and shows five toes. No key face or extremity is cut off.
- **Clothing and cast:** Bhattathiri wears a cream dhoti and modest prayer beads; the cosmic figure is clothed in ochre. No inappropriate exposure or sexualized framing. The world bands contain symbolic worshippers, animals and landscape; I did not see a second physical Vishnu.
- **Text/signature artifacts:** No text, signature, logo, or watermark in the cosmic field, water, ground, or corners.
- **Scene and caption fidelity:** Three lower-world bands and a broader, calm upper cosmic expanse are legible; the devotee bows at lower left. The candidate follows caption #9’s three-world/transcendence cue and does not copy photo #9’s collage or light rays.
- **Character/deity contract:** The central universal form remains one connected body with one face; visible open hand count is five digits. Measured disclosed palette patches were Bhattathiri (151,75,25), R−B=126, and Vishvarupa (67,72,68), B−R=1. The latter visibly reads slate gray-blue rather than deep blue, as disclosed in plan line 510; neither measured shift is worse than the plan’s disclosure. No structural defect accompanied the color deviation.
- **Verdict: pass — disclosed deviation present.**

### Stanza 10 — `candidate-v006.png`

- **Candidate:** `artifacts/d099/s010/landscape/candidate-v006.png`; SHA-256 `c658d7ae540b54b4b711afbd4903a3439fecc87c73d12eb15724115d3b01e1d4`; native size 1671×941.
- **Review time:** 2026-11-17T08:11:26Z.
- **Anatomy:** Bhattathiri and one Guruvayurappan murti are distinct, fully present figures with coherent faces and attached limbs. The murti has one face, two arms, and two legs; no malformed or duplicated person was visible.
- **Faces:** Enlarged crops show Bhattathiri’s lined, clean-shaven face with ash markings and the murti’s intact serene face. The peacock-feather crown is fully inside the frame.
- **Hands/feet:** Bhattathiri’s flower-offering hand is attached and naturally arranged around the flowers. The murti’s two open hands show five digits each; both feet show five toes each. Bhattathiri’s visible rear foot is fully inside the lower-left edge and shows five toes. No extremity is cut off.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and restrained beads; the murti wears yellow with a red/orange shawl. Both are modestly clothed. The murti’s layered jewelry is elaborate, ordinary temple iconography.
- **Text/signature artifacts:** No readable marks, signature, logo or watermark in waves, ground, or corners.
- **Scene and caption fidelity:** Flowers are offered before a single murti; repeated shallow wave forms around it convey the nectar-like blissful form. This keeps the temple-murti cue from photo/caption #10 and omits its woman/panel collage.
- **Character/deity contract:** Guruvayurappan’s face, feather crown, two arms, hands and feet satisfy the explicit contract. My measured 32×32 Bhattathiri cheek patch was (189,106,56), R−B=133, warm and more orange than the approximate 120 target; Guruvayurappan’s cheek was (105,133,148), B−R=43, deep blue. These match the plan’s disclosed Bhattathiri color deviation and blue murti observation (plan line 564); no anatomy or structural issue is present.
- **Verdict: pass — disclosed deviation present.**

## Evidence and recommendation

Checksum verification used `sha256sum` on all five candidate paths and all nine frozen contract paths. Every actual hash matched the expected hash in the task brief; the exact values are recorded above. Native dimensions were checked with `identify -format '%f %wx%h\n' <candidate paths>`. Full-frame and crop views were opened with the local image viewer after using ImageMagick `magick` crops. Disclosed palette measurements were independently taken with 32×32 ImageMagick median patches at the coordinates named in the plan’s candidate status. Relevant final-plan scene/candidate line anchors are 321/350 (S006), 376/406 (S007), 428/457 (S008), 481/510 (S009), and 534/564 (S010); mapped caption headings are in the supplied photo-captions file at lines 26–46.

Recommendation: these five exact-checksum landscape candidates pass this independent visual review, with the stated disclosed palette deviations on S007, S009 and S010. This is visual clearance only; all candidates remain unapproved and no approval manifest was changed. The review raises no captain decision; the standing art approval remains pending.
