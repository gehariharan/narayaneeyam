# Dasakam 63 landscape candidate review (stanzas 6–10)

## Scope and method

This is an independent visual review of the five exact landscape candidate files listed below. I verified all five candidate SHA-256 values and all seven frozen contract SHA-256 values before inspection; every value matched the task brief. I viewed each full candidate at native resolution (the files are 1671/1672 × 941 px), then inspected enlarged crops made from scratch copies under this task worktree. The producer candidates, intake photographs, frozen contracts and approval manifest were not modified. Scratch copies and crops were deleted after review.

I mapped stanzas to `intake/D063/006.jpg` through `010.jpg` using the plan `reference_paths` and the chapter captions in `content/daskams/d063.json` lines 71–112; the matching caption entries are `photo-captions.txt` lines 30–54. I compared each image to its own caption and plan entry, plus the applicable frozen character contracts. Full reference photos were viewed individually; their composition/finish was treated as story context only as the plan directs.

Review inspection completed: **2026-11-16T00:06:36Z** (UTC). Each verdict below applies only to the named image checksum.

## Frozen contract SHA-256 values actually read

| File | SHA-256 |
|---|---|
| `art/plans/d063.json` | `e0f1e514325cfc9c1593a4861ec21035f2f532ad12298865cb34090460b5e126` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/d063-indra/character.json` | `175d3e4a04c9b806896037023921e299eacf02a847c9e39403b70a5ecd9d6591` |
| `art/bible/characters/d063-deva-witnesses/character.json` | `1643bde726b340bfdef887517edc3504eb58e8fcd5291ee0cb2b05345d8c6785` |
| `art/bible/characters/varaha/character.json` | `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3` |

## Verification and evidence trail

Commands run included:

- `sha256sum` on the five candidate files and seven frozen contract files. All outputs matched the expected hashes in the task brief (reproduced per image and contract above/below).
- `magick identify -format '%f %wx%h %[channels]\\n' <candidate paths>`: all five are RGB landscape images, 1671/1672 × 941 px.
- `magick <scratch-copy> -crop <WxH+X+Y> +repage -resize 200% <scratch-crop>` (and 150%/600% for focused anatomy/skin views), followed by individual viewing of each crop. Crops covered faces, torsos, the supporting hand, other hands, feet, crowded figures and the Varaha cameo. The original candidates remained untouched.
- Skin medians were computed from 24×24 pixel patches after visually confirming the patches contained Krishna's skin alone. Boxes are native image pixel coordinates `(x,y,width,height)`, RGB order: S006 torso `(360,365,24,24)` median `(89,104,116)`; S008 torso `(400,390,24,24)` median `(99,118,134)`; S009 cheek `(770,210,24,24)` median `(140,165,188)`; S010 upper torso `(820,345,16,16)` median `(82,109,134)`. In each full image Krishna reads as blue; the sampled patches and the visible skin as a whole do not plainly read as a different color from the required matte blue. The S010 upper-torso patch is clear blue skin between the neck and shoulder; the skin-only cheek crop was not used for the reported median.

Relevant frozen references: D063 plan S006–S010 entries at lines 293–545; series style/palette and global prohibitions at `series.json` lines 5–6, 20–24, 34–64; Krishna contract at `character.json` lines 6–14 and 46–50; gopa contract lines 10–25; Indra contract lines 10–25; deva contract lines 10–19; Varaha shared identity/anatomy lines 19–34. Caption/story mappings are in `content/daskams/d063.json` lines 71–112 and `photo-captions.txt` lines 30–54.

## Image findings

### Stanza 6 — v004

- **Candidate:** `artifacts/d063/s006/landscape/candidate-v004.png`
- **Verified SHA-256:** `9beef9afe1d37ee4d442f75a3f797a0fe42d67962b4d959d9f9dff63bf132a5b`
- **Reviewed:** 2026-11-16T00:06:36Z
- **Anatomy:** Krishna is one youthful figure with one face, two attached arms, two legs and no duplicated body. The two foreground cowherds are distinct. No fused people or malformed torso/limbs are visible.
- **Faces:** Krishna's calm face and the two cowherds' faces are intact and inside frame; no malformed or cloned face is apparent.
- **Hands/feet:** Krishna's free lowered hand has five visible digits. The supporting left palm visibly meets the underside of the hill at approximately x=510–635, y=80–145; individual fingers are not separately delineated. This is the plan's disclosed deviation (plan lines 327–332), not an additional defect. At enlarged view Krishna's two feet show five toe marks apiece; the cowherds' feet are naturally partly overlapped by their poses/dhotis, with no visible extra or fused digit.
- **Clothing and cast:** Yellow dhoti, muted red-orange shawl, low band with one upright peacock feather; both cowherds wear ordinary muted dhotis/shawls. No exposed or sexualized framing.
- **Text/signature artifacts:** None seen in the corners, ground or image field.
- **Scene and caption fidelity:** The two cowherds look toward and discuss Krishna holding the broad, stable hill; this matches caption #6 and plan S006 (plan lines 300–340). No panic or wobbling hill.
- **Character/deity contract:** Krishna reads as a serene youth in matte blue, with the expected clothing, hair and headwear. The supporting hand's flat contact is the disclosed condition above. No other contract violation is visible.
- **Verdict: PASS — disclosed deviation present.**

### Stanza 7 — v004

- **Candidate:** `artifacts/d063/s007/landscape/candidate-v004.png`
- **Verified SHA-256:** `279cfa4a7865edf5ba0a4fb713b4d23935985d6dea837b989f7fbc62bd8a7930`
- **Reviewed:** 2026-11-16T00:06:36Z
- **Anatomy:** One Indra is shown with one head, two attached arms and two legs. The extended and bent arms connect naturally; both airborne legs and feet are present. No duplicate or fused figure is visible. The small sheltered group remains coherent.
- **Faces:** Indra has one distinct adult face with a contemptuous expression. Small shelter figures are not individually detailed at full-frame scale, but no malformed or duplicated face stands out.
- **Hands/feet:** The extended hand has a clear palm and five visible digit forms; the other hand is clenched. The enlarged feet show separated toe marks (four clearly resolved on the rear foot and five on the forward foot); neither is fused or visibly malformed.
- **Clothing and cast:** Cream/ochre garments and maroon sash are traditional. Indra wears a prominent tiered ochre crown and layered jewelry around the head/neck/arms (native region approximately x=1120–1320, y=0–370); this is an ornamentation observation, not a violation. No peacock feather. Shelter figures remain modestly dressed.
- **Text/signature artifacts:** None seen, including corners and ground.
- **Scene and caption fidelity:** A single Indra directs heavy rain from the storm sky toward an intact hill shelter at lower left, consistent with caption #7 and plan S007 (plan lines 354–390). The storm sky is a large deep-indigo field; it reads blue rather than purple and suits this storm scene. Rain does not strike exposed people.
- **Character/deity contract:** Indra is distinct from Krishna, has warm mural skin, one head/two arms, and no peacock feather. No explicit structural prohibition is violated.
- **Verdict: PASS.**

### Stanza 8 — v005

- **Candidate:** `artifacts/d063/s008/landscape/candidate-v005.png`
- **Verified SHA-256:** `b44b191d9c21a159b29d576063fad6028c3253865e55cb28c9f3781aaeb59ea6`
- **Reviewed:** 2026-11-16T00:06:36Z
- **Anatomy:** Krishna remains still under the hill, with two attached arms and two legs. One Indra runs in the distance with one head, two arms and two legs. A cowherd is partly cut at the extreme left edge (approximately x=0–45, y=500–650); this is disclosed in plan S008 line 431. No malformed or fused body is visible.
- **Faces:** Krishna's face is intact and serene; Indra's small profile remains distinct. No duplicate face/person is apparent.
- **Hands/feet:** The supporting left hand contacts the rock. At approximately x=545–700, y=150–205 it shows one thumb and three separately delineated fingers (four digits visible), exactly as disclosed in plan line 431. Krishna's free hand and feet remain attached and unmalformed. Indra's running hands/feet are coherent at enlarged view; small toes are stylized but no extra/fused digit is visible.
- **Clothing and cast:** Krishna has yellow dhoti, red-orange shawl and expected headwear. A pale vertical forehead mark is clearly visible at approximately x=405–435, y=170–205, contrary to the Krishna contract; it is explicitly disclosed in plan line 431. Indra's cream/ochre/maroon clothing and small crown are ordinary. The edge cowherd is a peripheral figure, not a second or malformed person.
- **Text/signature artifacts:** None seen in image field, ground or corners.
- **Scene and caption fidelity:** The sky has cleared, Krishna stays still under Govardhana, and a distinct Indra flees to the right; the scene matches caption #8 and plan S008 (plan lines 405–441). No lightning or continuing downpour.
- **Character/deity contract:** The forehead mark conflicts with the plain-forehead rule, and the hand/edge conditions are present, but all three are explicitly disclosed by the final plan. No additional contract violation is visible. The skin reads matte blue (sample median above).
- **Verdict: PASS — disclosed deviation present.**

### Stanza 9 — v005

- **Candidate:** `artifacts/d063/s009/landscape/candidate-v005.png`
- **Verified SHA-256:** `95f9086adb06f4e386bcb722ebee450579d6c98d23b1fe90e35f6938e98ceee0`
- **Reviewed:** 2026-11-16T00:06:36Z
- **Anatomy:** Krishna and the two embracing cowherds are separate figures with connected limbs; the cow and calf have distinct, coherent heads and bodies and four legs each. No duplicated or fused people/animals are visible.
- **Faces:** Krishna, the two gopas and both cattle faces are intact; no malformed or cloned face is apparent.
- **Hands/feet:** The embracing hands meet Krishna's upper arm/body naturally; Krishna's arms hang separately and both hands are attached. At enlarged view, visible hands and feet have ordinary separated digit outlines; limbs obscured by garments or another body remain naturally occluded. No extra or fused digit is visible.
- **Clothing and cast:** Cowherd shawls/dhotis are simple muted green, maroon and cream. Bare torsos are ordinary traditional dress; no sexualized framing. Cow and calf remain distinct and inside frame.
- **Text/signature artifacts:** None seen in the image field, corners, ground or hill.
- **Scene and caption fidelity:** Rain has stopped; the group and cattle are outside the shelter, the reunion is joyful, and the hill rests on the ground behind/right of them with Krishna's hands no longer supporting it. This matches caption #9 and plan S009 (plan lines 457–493). No floating unsupported hill or ongoing rain.
- **Character/deity contract:** Krishna is single, youthful, matte blue, in expected clothing and peacock-feather band. His skin reads blue (sampled cheek median above). No contract issue is visible.
- **Verdict: PASS.**

### Stanza 10 — v004

- **Candidate:** `artifacts/d063/s010/landscape/candidate-v004.png`
- **Verified SHA-256:** `e6259fa45e8f83668446ffb49fbc95bc4dca5cc1a03ed0a73d83fd4cb68841cb`
- **Reviewed:** 2026-11-16T00:06:36Z
- **Anatomy:** Krishna is one youthful two-armed figure. Three distinct devas have one head and two attached arms each; their legs and feet remain inside frame. Varaha is a coherent boar with one boar head, torso and four legs; no human arms or weapon are present. The earth globe touches the raised tusk.
- **Faces:** Krishna and all three devas have intact, distinct faces. Varaha has an unmistakable elongated boar snout, tusk and upright ears. No duplicate or malformed face is visible.
- **Hands/feet:** Krishna's open hand and chest hand are both connected; the devas' joined prayer hands are attached and legible. At enlarged scale the devas' feet are small and toes are simplified, without a visibly malformed outline. Varaha's four feet are separately connected to its legs. No extra or fused digits are visible.
- **Clothing and cast:** Krishna wears the expected yellow dhoti, muted red-orange shawl and single feather band. The devas wear traditional cream/ochre/maroon garments with prominent tiered crowns and layered ochre jewelry (left group approximately x=120–625, y=180–520); this is normal mural ornamentation and not prohibited by the scene contract. The Varaha cameo is small and secondary as required. Bhattathiri is absent.
- **Text/signature artifacts:** No writing, signature, logo or watermark seen in the field, ground or corners.
- **Scene and caption fidelity:** The small group praises Krishna, while the boar vignette bears Earth on its tusk, matching caption #10 and plan S010 (plan lines 509–545). No extra Krishna, border or written caption is present.
- **Character/deity contract:** Krishna remains a single two-armed youth. Devas are distinct and coherent. Varaha remains unmistakably boar-shaped with coherent animal anatomy and earth-pigment rendering. No contract violation is visible.
- **Verdict: PASS.**

## Recommendation and captain-call inventory

All five exact-checksum images pass the independent visual gate; S006 and S008 have only the deviations disclosed by their final plan entries. Retain these as selected candidates pending the separate explicit art approval; this review grants no approval and changes no manifest. I found no new unresolved question for the captain, so the review's captain-call inventory is empty. The already-pending captain art approval is the standing state, not a decision raised by this review.
