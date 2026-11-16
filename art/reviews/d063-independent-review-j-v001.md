# D063 landscape candidate visual review: stanzas 1–5

## Scope, method, and result

I independently reviewed the selected landscape candidates for D063 stanzas 1–5 against their frozen plan entries, series and character contracts, stanza content, and mapped intake references. Each candidate was verified by SHA-256 before inspection; I copied candidates and references into a scratch directory in my own worktree, viewed every candidate and reference at native resolution, then made and viewed focused crops of faces, hands, feet, torsos, cattle, and hill-contact areas. Producer candidates and intake files were not edited. The scratch copies and crops were deleted after review.

All five checksums matched the supplied expected values. All five images pass this checksum-bound visual review. I found no visible anatomy, face, hand/foot, clothing, text/signature, scene-fidelity, or explicit contract defect requiring a fix. The skin samples for stanzas 3–5 are lighter and grayer blue than stanza 2, but still read as blue in the full images; none plainly reads as a different color. No disclosed deviation is present in these five plan entries. This review does not confer art approval.

The review was performed on 2026-11-16 UTC. For each image, that is the real UTC review time; the finding is bound to its candidate checksum and the frozen contract hashes below.

## Frozen contract checksums

All expected hashes matched. These are the actual hashes of the files read:

| Contract file | SHA-256 |
|---|---|
| `data/d063-production/review-contract-j/art/plans/d063.json` | `e0f1e514325cfc9c1593a4861ec21035f2f532ad12298865cb34090460b5e126` |
| `data/d063-production/review-contract-j/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d063-production/review-contract-j/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `data/d063-production/review-contract-j/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `data/d063-production/review-contract-j/art/bible/characters/d063-indra/character.json` | `175d3e4a04c9b806896037023921e299eacf02a847c9e39403b70a5ecd9d6591` |
| `data/d063-production/review-contract-j/art/bible/characters/d063-deva-witnesses/character.json` | `1643bde726b340bfdef887517edc3504eb58e8fcd5291ee0cb2b05345d8c6785` |
| `data/d063-production/review-contract-j/art/bible/characters/varaha/character.json` | `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3` |

## Inspection evidence

Commands used to verify source bytes and dimensions:

```sh
sha256sum <five candidate paths> <seven frozen contract paths>
identify <five copied candidate PNGs> <five copied reference JPEGs>
convert <copied candidate> -crop <focused region> +repage <scratch crop PNG>
```

`sha256sum` returned the exact hashes listed below and in the frozen-contract table. `identify` reported candidate dimensions of 1672×941 (S001), 1671×941 (S002), and 1672×941 (S003–S005); each mapped source photo was opened from `intake/D063/001.jpg` through `005.jpg`. I viewed the full images and crops from `.d063-review-j-scratch/` using the image viewer. The reference mapping is established by plan `reference_paths` and `reference_guidance` for each stanza (plan lines 41–45, 82; 93–98, 134; 144–149, 185; 196–201, 237; 248–253, 289). The corresponding photo captions are `OneDrive/Pictures/Narayaneeyam Studio/intake/D063/photo-captions.txt#1–#5`; the chapter content also maps commentary sources to those captions (content lines 17–23, 27–34, 37–44, 47–54, 57–64).

The governing scene requirements are in the frozen plan: S001 lines 47–61; S002 99–113; S003 150–164; S004 202–216; S005 254–268. Krishna's youthful form contract is plan line 22 and character contract lines 5–14 and 46–63. Supporting-cast requirements are plan lines 23–24 and the gopas contract lines 15–28. The series style and prohibitions are series lines 5–6, 20–24, 34–48, and 51–64. The other frozen character contracts were read and hash-verified; Indra is not in these five scenes, devas are not yet in these scenes, and Varaha is not yet in these scenes.

## Candidate findings

### Stanza 1 — landscape v005

- **Candidate:** `artifacts/d063/s001/landscape/candidate-v005.png` (1672×941)
- **SHA-256:** `1d6077138dbfe08480b02c14d82e08a09c3078da7492cb7d6bbbf6f2156622c5`
- **Review time:** 2026-11-16T00:00:16Z
- **Anatomy:** Three separate adult cowherds stand below the storm. Each has a coherent head, torso, two attached arms, and two legs; their poses do not merge. Full-body crop `.d063-review-j-scratch/s001-people.png` shows their feet fully in frame and naturally planted. No malformed or duplicated person is visible.
- **Faces:** All three faces are distinct and legible at the focused view; their expressions look upward with concern. None is cut off.
- **Hands/feet:** The left figure's hand-to-brow pose is connected; the middle figure's two gesturing hands remain separate; the right figure's hand-to-chin pose is connected. Each depicted foot has a clear sole and separated toe marks; no extra or missing-looking extremity is apparent at the crop scale. The figures' extremities are inside the frame.
- **Clothing and cast:** Muted cream dhotis and maroon/ochre shawls are ordinary traditional cowherd clothing. No Krishna is shown, which the plan permits. The group is small and distinct.
- **Text/signature artifacts:** No readable text, caption, signature, logo, or watermark is visible in the clouds, ground, buildings, or corners.
- **Scene and caption fidelity:** Deep indigo-blue clouds occupy most of the upper field above a modest settlement; rain spreads over the land and three people look up. This matches the storm-over-Vraja cue in caption #1 and keeps the scene before hill-lifting. No Indra, shelter hill, or lightning strike appears. The intake reference has a dominant temple and dramatic lighting; neither was copied.
- **Character/deity contract:** No Krishna or deity appears. The figures are distinct, naturally proportioned supporting people. The deep-blue cloud field matches the explicit plan description.
- **Verdict: pass.**

### Stanza 2 — landscape v005

- **Candidate:** `artifacts/d063/s002/landscape/candidate-v005.png` (1671×941)
- **SHA-256:** `788d68712e9b9f769692d45a5f4b7dd3d11308c69bc52d19226fb53b63ddc4b6`
- **Review time:** 2026-11-16T00:00:16Z
- **Anatomy:** Krishna stands with two attached arms and two legs. Three adult cowherds are separate and proportionate. The two cattle at the far left, two at the right, and the partially visible brown animal at lower right remain distinct animals with coherent bodies and legs; no person/animal fusion or duplicate is visible.
- **Faces:** Krishna has a calm, youthful face; the three pleading cowherds have distinct faces and varied ages. Their faces are not clipped.
- **Hands/feet:** Focus crops `.d063-review-j-scratch/s002-hand-a.png` and `s002-hand-b.png` show five digits on each of Krishna's two hands, with the open hand extended toward the group and the other held against his chest; the wrists connect continuously to the arms. The cowherds' joined/praying and gesturing hands are attached. Krishna's two feet and the visible cowherd feet are inside frame; toe separations are drawn without an extra digit or malformed foot.
- **Clothing and cast:** Krishna wears a yellow dhoti, muted red-orange shawl, one low band and one upright feather. His earrings, bracelets, and small ochre ornament are visible, but no tiered crown is present. Cowherds wear simple muted dhotis and shawls. Clothing is traditional and modest.
- **Text/signature artifacts:** No text, signature, logo, or watermark is visible, including in the puddles, ground, rain field, or corners.
- **Scene and caption fidelity:** Diagonal rain and hail stones surround a small group of cowherds and cattle. Krishna gestures reassuringly; no hill is raised yet. This matches caption #2 and the plan. Compared with the intake reference's shelter tableau, this appropriately shows the earlier appeal-and-reassurance moment.
- **Character/deity contract:** Krishna's forehead is bare, his face is youthful, hair is dark and curly, and his anatomy is ordinary and two-armed. A skin-only 24×24 px torso patch at candidate coordinates x=1190–1213, y=385–408 has RGB channel medians **(50, 79, 125)**. The patch is blue skin only, away from the necklace and clothing. It reads as deep matte blue in the full image.
- **Verdict: pass.**

### Stanza 3 — landscape v005

- **Candidate:** `artifacts/d063/s003/landscape/candidate-v005.png` (1672×941)
- **SHA-256:** `0911c42506adf52b0488ed9d9c354ba7c7261aea925ddfba7d2391ca7662b3d0`
- **Review time:** 2026-11-16T00:00:16Z
- **Anatomy:** Krishna has one youthful face, one torso, two attached arms, and two legs. Both hands visibly meet the underside/base of the slightly lifted hill; neither is detached. The two witnesses are separate, with ordinary proportions. The hill, figures, and limbs do not fuse.
- **Faces:** Krishna's face is smiling and youthful; both witnesses have distinct faces. No face is cropped or malformed.
- **Hands/feet:** Focus crops `s003-hand-a.png` and `s003-hand-b.png` show four separated fingers on each visible supporting hand; the palm surfaces meet the hill, with the remaining digit naturally turned/occluded by the contact angle. The contact and wrists are continuous. Krishna's feet are fully inside the frame and show separate toe marks; the witnesses' feet are also visible. No extra digits or malformed extremity is apparent.
- **Clothing and cast:** Yellow dhoti, muted red-orange shawl, low headband and one upright peacock feather match the youthful cowherd contract. The two witnesses wear simple traditional muted garments. Their small group is not cloned.
- **Text/signature artifacts:** No text, signature, logo, or watermark appears in the hill, earth, vegetation, sky, or corners.
- **Scene and caption fidelity:** Krishna is visibly raising the hill at its base with both arms while two cowherds witness the initial action. The hill is not floating free. This matches caption #3 and the plan's uprooting scene, without changing to the later shelter tableau.
- **Character/deity contract:** Krishna's forehead is smooth and unmarked; his hair, clothing, feather, face, and two-arm anatomy match the contract. A skin-only 24×24 px torso patch at x=755–778, y=460–483 has RGB medians **(90, 109, 121)**. The patch is blue skin, without garment or ornament. The skin is lighter and grayer than S002 but reads as muted blue, not a different color.
- **Verdict: pass.**

### Stanza 4 — landscape v005

- **Candidate:** `artifacts/d063/s004/landscape/candidate-v005.png` (1672×941)
- **SHA-256:** `241b44b31e29d115795037a31be2228bcc4fdcbfc6250c29f0103a4f24266a91`
- **Review time:** 2026-11-16T00:00:16Z
- **Anatomy:** Krishna has one face, two attached arms, two legs and one raised supporting hand. The hill underside visibly meets the palm. The seated cowherds, standing woman, cow, and calf are distinct; the animals have coherent heads and legs. No clone, fusion, or malformed body is visible.
- **Faces:** Krishna and the three human companions have clear distinct faces. The calf and cow heads are distinct and complete. No face is cut by the frame.
- **Hands/feet:** The enlarged raised-hand crop shows a thumb and four fingers (five total) with a continuous palm-to-hill contact. Krishna's lowered hand remains attached to his arm. The praying hands and the seated figures' resting hands are separate and naturally connected. Krishna's feet are fully inside frame with separated toe marks; the seated figures' visible feet are intact.
- **Clothing and cast:** Krishna wears the expected yellow dhoti, muted red-orange shawl and simple band/feather. His ochre earrings, armlets and bracelets are visible as ordinary painted temple-mural ornament, not reflective metal. Cowherds and woman wear modest cream, olive, and maroon traditional clothing. Cattle and calf are present as required.
- **Text/signature artifacts:** No text, signature, logo, or watermark is visible on the hill, sandy floor, rain, or corners.
- **Scene and caption fidelity:** A broad hill shelters the community on dry ochre ground while rain falls beyond the shelter. The raised palm meets the underside. No cinematic rays or flooded shelter interior are visible. This follows caption #4 and the plan; it avoids the source image's dramatic lighting and glossy finish.
- **Character/deity contract:** Krishna's forehead is plain, and his youthful two-arm form is intact. A skin-only 24×24 px torso patch at x=755–778, y=455–478 has RGB medians **(65, 87, 105)**. It is blue skin with no garment or ornament in the patch. In the full image it reads as muted blue, slightly gray compared with S002, not as a different color.
- **Verdict: pass.**

### Stanza 5 — landscape v006

- **Candidate:** `artifacts/d063/s005/landscape/candidate-v006.png` (1672×941)
- **SHA-256:** `89ef5c63912e6972356947eb64e830c662be33cba1a094d9dd9f6823d31ec054`
- **Review time:** 2026-11-16T00:00:16Z
- **Anatomy:** Krishna has one face, one torso, two attached arms and two legs. His raised left arm meets the hill, and his right arm reaches separately to the cow. The cowherds and cow are distinct and proportionate; the cow's four legs and hooves are coherent. No fused or duplicated person or creature is apparent.
- **Faces:** Krishna, both cowherds, and the cow have complete, distinct faces. Krishna is youthful and smiling; no face is clipped or malformed.
- **Hands/feet:** The raised-hand crop shows a thumb and four fingers (five total) with clear margin to the top frame and uninterrupted contact at the hill. The right hand is connected to its arm and rests on the cow's head with separated fingers; its thumb is partly hidden by the animal's head at the natural contact point. Cowherd hands rest on knees or gesture and remain attached. Krishna's two feet and the cowherds' feet are inside frame with separate toe marks; no extra/missing-looking toe or malformed foot is visible. Cow hooves are separated and intact.
- **Clothing and cast:** Krishna wears yellow dhoti, muted red-orange shawl, low band, and one feather. Several ochre necklaces, armlets, earrings, and bracelets are visible; this is ordinary temple-mural iconography and does not contradict a contract prohibition. His clothing is traditional and modest. The two companions wear muted traditional dhotis and shawls.
- **Text/signature artifacts:** No text, signature, logo, or watermark is present in the hill texture, floor, rain, or corners.
- **Scene and caption fidelity:** Under the raised hill, Krishna converses with two cowherds while gently touching the nearby cow's head. His left palm supports the hill and the right arm performs the cow interaction, clearly separated as required by stanza #5 and its plan. The group appears calm and sheltered.
- **Character/deity contract:** Krishna's forehead is plain; his headwear is one low band with one upright feather, and his anatomy is two-armed. A skin-only 24×24 px torso patch at x=635–658, y=350–373 has RGB medians **(94, 116, 134)**. It is blue skin only. This is the lightest and grayest of the sampled blue patches but reads as blue in the full candidate, so it does not meet the review rule for a plainly different skin color.
- **Verdict: pass.**

## Recommendation and inventory attestation

These five exact candidate versions are visually clear for their stated scenes and contracts. Keep their review evidence tied to the checksums above; this review does not update `art/approved/d063.json`, approve artwork, or establish clearance for another version. The review found no additional question requiring a captain decision. The pending captain art approval is the standing state and is not a decision raised by this review. My captain-call inventory for this review is empty.
