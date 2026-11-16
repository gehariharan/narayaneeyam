# D063 landscape candidate review: stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates at native resolution (1671/1672 × 941), then inspected enlarged, locally cropped copies for faces, hands, feet, anatomy, the Govardhana contact points, the Varaha cameo, frame edges, corners, ground and water/sky texture. Source candidates, intake photographs, frozen contracts and approval data were read only. Crops and pixel samples were made from copies in this task worktree's `.scratch/d063-review/` directory and were removed after review.

I mapped S006–S010 to intake photos `006.jpg`–`010.jpg` using each plan entry's `reference_paths`, checked their supplied captions in `photo-captions.txt` against the corresponding commentary entries in `content/daskams/d063.json`, and compared each scene to the plan and applicable character contracts. Review was visual; no automated image classifier was used. Skin measurements below are channel-wise medians of 21×21 RGB patches sampled from my local copies at the stated native-image pixel coordinates. Values are integer RGB (0–255); coordinates identify the patch's upper-left pixel. A dash means the figure is too small or has no exposed skin from which a meaningful patch could be taken.

Commands used for integrity and dimensions included `sha256sum <candidate and frozen contract paths>`, `file <candidate paths>`, and ImageMagick `magick <local copy> -crop 21x21+x+y +repage -separate -format '%[fx:median*255] ' info:`. I also used `magick` to crop enlargements from local copies and `magick montage` to inspect the four frame corners for each candidate. All requested image and contract SHA-256 values matched exactly. The review time for the five image inspections was 2026-11-16 02:10–02:12 UTC.

## Contract file hashes

| Frozen file read | SHA-256 |
|---|---|
| `data/d063-production/review-contract-r/art/plans/d063.json` | `f3a9a476d14a658193f064ebd5c78903b023e3e74161645e80f5074fae28f95c` |
| `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `.../art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `.../art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `.../art/bible/characters/d063-indra/character.json` | `175d3e4a04c9b806896037023921e299eacf02a847c9e39403b70a5ecd9d6591` |
| `.../art/bible/characters/d063-deva-witnesses/character.json` | `1643bde726b340bfdef887517edc3504eb58e8fcd5291ee0cb2b05345d8c6785` |
| `.../art/bible/characters/varaha/character.json` | `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3` |

The plan references below are line numbers in the frozen `art/plans/d063.json`; character and series references are line numbers in the named frozen contracts. Caption mappings are the stanza's `commentary_source` in `content/daskams/d063.json` and the matching numbered block in `intake/D063/photo-captions.txt`.

## S006 — stanza 6, landscape v004

- **Candidate:** `artifacts/d063/s006/landscape/candidate-v004.png`
- **Review time:** 2026-11-16 02:10–02:12 UTC
- **Verified SHA-256:** `9beef9afe1d37ee4d442f75a3f797a0fe42d67962b4d959d9f9dff63bf132a5b`
- **Evidence:** plan lines 290–339, especially must-show/avoid at 304–323 and disclosed status at 328; Krishna contract lines 8–13 and 54–66; gopa contract lines 14–28; caption/content stanza 6 (`commentary_source` at content line 72).
- **Anatomy and faces:** Krishna is one youthful figure with a single calm face, attached arms, and two legs. The two foreground cowherds have distinct faces and connected limbs; no fused or duplicated people are visible.
- **Hands and feet:** Krishna's raised left palm is pressed flat to the underside of the rock, with individual fingers not separately delineated; this is the plan's disclosed deviation. His other arm, both feet, and all visible cowherd hands and feet are inside the frame. The visible feet have distinct toes; no extra or missing limb is apparent.
- **Clothing and cast:** Krishna wears a yellow dhoti, muted red-orange shawl, low band and one upright feather; the gopas wear simple cream/olive/maroon traditional clothing. Cast size and conversation gesture fit the plan and caption.
- **Text/signature artifacts:** None found. Enlarged upper/lower corners and ground show only painted rock, soil and small stones; no text, signature or watermark.
- **Scene/caption and contract:** The stable hill, Krishna's continuous left-palm support, and two distinct cowherds looking up/conversing match S006. The pale vertical forehead mark around x=370–381, y=119–136 is present and contradicts the plain-forehead rule; it is explicitly disclosed in the plan. Krishna's skin reads muted slate blue-gray in the full image. My skin-only 21×21 medians are Krishna cheek (385,160): **(82,98,112)**; gopa 1 (1035,240): **(218,115,31)**; gopa 2 (1375,240): **(223,117,31)**. The cheek sample reflects the visible blue-gray rendering; the deviations in this candidate status are the flattened, undelineated supporting palm and forehead mark.
- **Verdict: pass — disclosed deviations present.** No additional actionable defect found.

## S007 — stanza 7, landscape v004

- **Candidate:** `artifacts/d063/s007/landscape/candidate-v004.png`
- **Review time:** 2026-11-16 02:10–02:12 UTC
- **Verified SHA-256:** `279cfa4a7865edf5ba0a4fb713b4d23935985d6dea837b989f7fbc62bd8a7930`
- **Evidence:** plan lines 341–388, especially must-show/avoid at 353–372 and disclosed status at 377; Indra contract lines 8–22; series contract lines 51–65; caption/content stanza 7 (`commentary_source` at content line 82).
- **Anatomy and faces:** One adult Indra has one mature scowling face, two attached arms and two bent legs. His long pointing arm connects to his torso; the open hand is intact. Both feet and the pointing hand are fully within the frame. The sheltered people/cattle remain distinct at this scale.
- **Hands and feet:** No extra or missing digits/limbs are visible in the enlarged hand and foot areas. Indra's face and hands are not cut off.
- **Clothing and cast:** Indra has cream/ochre garments and maroon drape, with no peacock feather. His crown at approximately x=1125–1285, y=0–160 is tall, oversized and visibly multi-tiered rather than the contract's small simple crown; the plan explicitly records this deviation. His crown ornament reaches the top frame edge. The crown is described here as an observed, disclosed deviation. The subordinate sheltered cast stays small and separate.
- **Text/signature artifacts:** None found in the four corners, rain, hill, or ground; no text, signature or watermark.
- **Scene/caption and contract:** Indra directs severe rain toward an intact Govardhana shelter, with the sheltered community below, matching plan and caption. The six sky/cloud patch measurements recorded in the plan support the stated blue storm palette; visually the storm reads deep blue without a purple cast. My skin-only median for Indra's forearm (935,160) is **(237,141,41)**. The faraway sheltered figures are too small for reliable skin sampling.
- **Verdict: pass — disclosed deviation present.** No additional actionable defect found.

## S008 — stanza 8, landscape v005

- **Candidate:** `artifacts/d063/s008/landscape/candidate-v005.png`
- **Review time:** 2026-11-16 02:10–02:12 UTC
- **Verified SHA-256:** `b44b191d9c21a159b29d576063fad6028c3253865e55cb28c9f3781aaeb59ea6`
- **Evidence:** plan lines 390–439, especially must-show/avoid at 404–423 and disclosed status at 428; Krishna contract lines 8–13 and 54–66; Indra contract lines 8–22; caption/content stanza 8 (`commentary_source` at content line 92).
- **Anatomy and faces:** Krishna is one youthful figure with a single face and two attached arms/legs. The retreating Indra is one small distinct running figure. The left cowherd remains fully inside the left margin with face, folded hands, clothing and a visible foot; the figure is not cut off. The cattle are coherent and distinct.
- **Hands and feet:** Krishna's raised palm lies over the brown rock face, with the hill's lower edge below the hand rather than contact from below. The thumb plus three separately delineated fingers (four digits) are visible. Both facts are explicitly disclosed in the plan. His other hand and both feet remain inside the frame. The fleeing Indra's extremities also remain inside the frame.
- **Clothing and cast:** Krishna has the yellow dhoti, red-orange shawl, low band and single upright feather. The cowherds are traditionally dressed and distinct. Indra has restrained celestial clothing and no feather.
- **Text/signature artifacts:** None found in corners, sky, ground or foliage; no text, signature or watermark.
- **Scene/caption and contract:** The shelter remains steady, spent clouds have cleared, and Indra flees at a distance as the caption describes. The pale vertical mark on Krishna's forehead is visible and violates the plain-forehead rule; it is disclosed. My 21×21 skin-only median for Krishna's upper torso (395,460) is **(92,111,129)**, a muted slate blue-gray reading. Indra is too small for a meaningful skin patch.
- **Verdict: pass — disclosed deviations present.** No additional actionable defect found.

## S009 — stanza 9, landscape v005

- **Candidate:** `artifacts/d063/s009/landscape/candidate-v005.png`
- **Review time:** 2026-11-16 02:10–02:12 UTC
- **Verified SHA-256:** `95f9086adb06f4e386bcb722ebee450579d6c98d23b1fe90e35f6938e98ceee0`
- **Evidence:** plan lines 441–489, especially must-show/avoid at 455–474 and status at 479; Krishna contract lines 8–13 and 54–66; gopa contract lines 14–28; caption/content stanza 9 (`commentary_source` at content line 102).
- **Anatomy and faces:** Krishna and both nearby cowherds have distinct, normally formed faces and connected limbs. The embrace reads clearly without fused arms or duplicated people. The adult cow and calf have separate coherent bodies and legs.
- **Hands and feet:** The embrace hand meets Krishna's side; Krishna's hanging hand is connected. The visible human fingers and toes are separately drawn without extra/missing digits. All figures' faces and key extremities remain inside the frame; cow and calf legs/hooves are intact.
- **Clothing and cast:** Krishna's yellow dhoti and muted red-orange shawl and the cowherds' simple traditional dress meet the cast contract. The two-person reunion remains small and distinct.
- **Text/signature artifacts:** None found in the four corners, exposed ground, hill or foliage; no text, signature or watermark.
- **Scene/caption and contract:** The hill is back on the ground behind the joyful reunion, while the cattle stand clear of it; the rain has stopped. This reads as the lowered-hill reunion described by the caption. No supporting hand remains on the hill. Skin-only medians: Krishna torso (720,325) **(92,120,147)**; embracing gopa face (535,160) **(240,132,29)**; second gopa face (900,205) **(240,130,30)**.
- **Verdict: pass.** No disclosed or undisclosed defect found.

## S010 — stanza 10, landscape v004

- **Candidate:** `artifacts/d063/s010/landscape/candidate-v004.png`
- **Review time:** 2026-11-16 02:10–02:12 UTC
- **Verified SHA-256:** `e6259fa45e8f83668446ffb49fbc95bc4dca5cc1a03ed0a73d83fd4cb68841cb`
- **Evidence:** plan lines 492–542, especially must-show/avoid at 507–526 and status at 532; Krishna contract lines 8–13 and 54–66; deva-witness contract lines 8–20; Varaha contract lines 8–28; series contract lines 51–65; caption/content stanza 10 (`commentary_source` at content line 112).
- **Anatomy and faces:** Krishna has one youthful face, two attached arms and two legs. The three praising devas have distinct faces, connected hands and coherent two-armed bodies. The small Varaha cameo has one recognizable boar head, coherent torso and four legs; the Earth rests on one tusk. No human arms or weapons are added to Varaha.
- **Hands and feet:** Krishna's open gesture and hand at his chest are attached and visibly five-digit stylized hands; the devas' folded hands are connected. Human feet are inside frame with separately drawn toes. Varaha's four legs and hooves are intact.
- **Clothing and cast:** Krishna wears the expected yellow dhoti, red-orange shawl, low band and feather. Layered necklaces and painted-ochre jewelry are visible on Krishna and the devas; they are ordinary mural ornamentation and do not contradict a prohibition. Deva clothing is restrained, and the group remains subordinate to Krishna. Varaha stays small and secondary.
- **Text/signature artifacts:** None found in the corners, sky, ground or foliage; no text, signature or watermark.
- **Scene/caption and contract:** The praise group centers the scene on Krishna, and the small earth-bearing Varaha vignette recalls the stanza without depicting Bhattathiri or duplicating Krishna. Skin-only medians: Krishna torso (890,385) **(82,109,133)**; deva 1 face (205,285) **(248,164,73)**; deva 2 face (390,335) **(208,130,34)**; deva 3 face (545,285) **(235,140,50)**. Varaha has fur rather than exposed skin, so no skin patch applies.
- **Verdict: pass.** No disclosed or undisclosed defect found.

## Recommendation and captain-call inventory

All five exact-checksum candidates pass this independent review under the disclosed-deviation rule. S006 retains its disclosed flat supporting palm and forehead mark; S007 retains its disclosed oversized multi-tiered crown; S008 retains its disclosed forehead mark and four-digit supporting hand whose palm lies on the rock face. The measurements and regions above bind those observations to the exact candidates. No new repair request or other captain decision is raised by this review. These passes are visual-review evidence only and do not grant art approval or update `art/approved/`; the standing art approval remains pending.

I attest that my captain-call inventory for this review is empty. The only pending captain matter is the standing art approval, not a decision raised by this review.
