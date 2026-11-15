# D035 landscape candidate visual review

Review completed at **2026-11-14T09:21:59Z**. I independently inspected the five selected landscape candidates at their native 1672×941 resolution and in enlarged scratch crops created from the read-only producer images under this task worktree (`review-scratch/`). I inspected the matching plan entries, frozen character contracts, supplied captioned references, and chapter stanza mappings. Findings below apply only to the exact candidate SHA-256 listed for each image. This review does not grant human art approval or change an approval manifest.

## Evidence and method

Initial integrity command: `sha256sum <frozen plan> <frozen series bible> <frozen character contracts> <five selected candidates>`. All values matched the expected values in the task brief. After inspection I reran `sha256sum` for all five candidate paths; all remained unchanged. `identify -format '%f %wx%h\\n' <five candidate paths>` reported 1672×941 for each.

For image inspection I opened each complete candidate at native resolution, then made focused crops from the source using ImageMagick `magick <candidate> -crop <region> +repage <review-scratch crop>` (and enlarged several details 2×). Crops are in this task worktree only; no candidate, intake image, producer file, or master was written or converted. I visually examined faces, hands, feet, bodies, crowded groups, scene edges, ground/water, and corners for anatomy, digit, text, and signature artifacts.

Reference mapping was checked against the plan and `content/daskams/d035.json`: stanza 6 maps to caption/photo 016; stanza 7 to 019; stanza 8 to 023–024; stanza 9 to 025–028, with 026 the direct earth-return cue; stanza 10 to 029. Caption text is at `intake/D035/photo-captions.txt` under those numbered headings. The plan's `reference_paths`, `reference_guidance`, `scene_brief`, and `selected_landscape.candidate_status` entries were read for every reviewed stanza.

### Frozen contract hashes read

All hashes below matched the expected contract hashes in the task brief.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d035.json` | `cfeb90c60b41dabb0d4a890fa4cfefa11037b1ea302d138901b65b38a9081979` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/d035-bhudevi-earth-presence/character.json` | `3da96070c892943c6e61b40f9cb6568f0a5421a39ffc88af62468c5f38d863d6` |
| `art/bible/characters/d035-ravana-final-battle/character.json` | `3e943e2c79006bf5805879f3a397209511e7cf7769a7a426ef8f3d92e41210c0` |
| `art/bible/characters/garuda/character.json` | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/hanuman/character.json` | `f9293002bf7389ea3bee583a5cd2c4f4d5b20642ae44a6590ce0c614e244b8a9` |
| `art/bible/characters/kusha/character.json` | `3a1f6781869fa91d1efb597bb78a5108562b3228b5a4cf7eda65fa7b4b62740d` |
| `art/bible/characters/lakshmana/character.json` | `51f7a4f47deb0affa85d261ab4e60fcd39d733f80dd6724a739f033a6f20ae54` |
| `art/bible/characters/lava/character.json` | `80b3be7571d3e3944183e7826701a81ce3c7fb2bb19c2a364d8d957689ba4411` |
| `art/bible/characters/rama/character.json` | `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063` |
| `art/bible/characters/samudra-raja/character.json` | `7a98b2c763af44f43f2fe4be3b590f41b5df8cc91048137bec6685890d862d0b` |
| `art/bible/characters/sita/character.json` | `90c9f8b261e2515b3df07df1c2f08fc0e75482b60ac75d0ab006e44f72b361f6` |
| `art/bible/characters/sugriva/character.json` | `5e907c9dc2ed7624f792bb70918ae02bb0d9a54ba381268c6d09e9397ee51a23` |
| `art/bible/characters/valmiki/character.json` | `5b77ee80de484ac50a883da4e83605c266214cfb6c4c6cb2fc4deaece69fb4ae` |
| `art/bible/characters/vibhishana/character.json` | `f6843ce13ff7e3c3c15b88a59c332a1a972462e1932a7959921e4bfe8cc517ff` |

## Candidate findings

### Stanza 6 — landscape candidate v003

**File:** `artifacts/d035/s006/landscape/candidate-v003.png`  
**SHA-256:** `c4a540b30243ec26a3d1bd1ef331caea1374395512f65fab65c85f04ad47bc2c`  
**Review time:** 2026-11-14T09:21:59Z  
**Plan/content evidence:** frozen plan stanza entry at lines 314–361; its `candidate_status` at line 310. Chapter content maps stanza 6 to caption 016 at lines 65–71. Direct reference: `intake/D035/016.jpg`.

- **Anatomy:** Rama and the reclining Lakshmana have coherent, connected bodies. The disclosed absence of Lakshmana’s second arm is present: only his near arm is visible, extending along his torso; the other arm is absent, not hidden by the naga coils. Hanuman has two arms, two legs, and one continuous tail attached at his lower back. His raised arms connect to the palms supporting the single mountain. No duplicate Lakshmana or malformed face is visible.
- **Faces:** Rama’s calm blue face, Lakshmana’s closed-eyed face, and Hanuman’s simian face are distinct and legible. Background allies are distinct small figures.
- **Hands/feet:** Enlarged crops show both of Hanuman’s palms supporting the mountain, and his two separated feet with toes drawn; Rama’s visible hands connect to the support pose. No additional or fused digits are apparent at this resolution. Lakshmana’s absent second arm is the disclosed deviation above.
- **Clothing and cast:** Traditional covered dhotis and wraps; no exposed or sexualized framing. Cast is Rama, one Lakshmana, Hanuman, and a few distinct allies, consistent with the plan.
- **Text/signature artifacts:** None seen in sky, water, ground, foliage, or corners.
- **Scene and caption fidelity:** The herb-covered mountain is carried overhead by Hanuman; Rama remains with unconscious Lakshmana. This matches the stanza-6 caption’s healing episode and the plan. The separate Indrajit combat event is not added.
- **Character/deity contract:** Hanuman’s simian face, two arms, two legs, and attached tail match his contract. Rama is blue-skinned with a composed youthful face and no peacock feather. No prohibited anatomy or attributes seen.
- **Verdict: pass.** Disclosed deviation present.

### Stanza 7 — landscape candidate v004

**File:** `artifacts/d035/s007/landscape/candidate-v004.png`  
**SHA-256:** `4441723dd0f9b99c51fb9e33525bf1fc4d552fbea63e2f3739b5a49322278da7`  
**Review time:** 2026-11-14T09:21:59Z  
**Plan/content evidence:** frozen plan stanza entry at lines 370–417, including the explicit ten-head/two-arm construction; chapter content maps stanza 7 to caption 019 at lines 75–81. Direct reference: `intake/D035/019.jpg`.

- **Anatomy:** Rama’s two arms operate the bow and arrow. Ravana has one coherent torso, two arms, and two legs. Enlarged head inspection shows exactly ten attached heads in a crown-like row; none is detached or severed. No accidental duplicated body is visible.
- **Faces:** Rama’s face is composed and readable. Ravana’s ten faces are individually outlined with distinct contours; no malformed face stands out. Background warriors remain separate figures.
- **Hands/feet:** Rama’s bow hand and drawing hand connect to his arms; Ravana’s two hands are separate, open, and show ordinary finger forms. His feet and Rama’s feet remain within frame. No extra or fused digits are apparent.
- **Clothing and cast:** Both principal figures are conventionally clothed. The battle attire and crowns are ordinary mural iconography. Background fighters are present without an accidental duplicate of either principal figure.
- **Text/signature artifacts:** None seen in the open background, ground, or corners.
- **Scene and caption fidelity:** Rama aims one continuous arrow toward Ravana in a single Lanka battle scene, following the plan’s isolation of the battle from the fire trial and return. The supplied caption names the battle; no contradictory episode is inserted.
- **Character/deity contract:** Ravana’s ten attached heads, one body, two arms, and two legs meet the D035 S007-specific contract. Rama has two arms, blue skin, and no peacock feather. Ornamentation is visible on Ravana’s crowns and necklaces, consistent with ordinary royal iconography and not prohibited.
- **Verdict: pass.**

### Stanza 8 — landscape candidate v001

**File:** `artifacts/d035/s008/landscape/candidate-v001.png`  
**SHA-256:** `18c05547df6cb0c1baf5d14e8f923d5f98b541c7c27452a5070143418ed1a472`  
**Review time:** 2026-11-14T09:21:59Z  
**Plan/content evidence:** frozen plan stanza entry at lines 427–473; chapter content maps stanza 8 to caption 023 at lines 85–91. Direct references: `intake/D035/023.jpg` and `024.jpg`.

- **Anatomy:** Sita sits with two distinct swaddled infants. Their heads and visible arms are separate, with natural infant proportions; the twins do not appear cloned or fused. Valmiki’s seated body and limbs are connected. The full family group remains inside the frame.
- **Faces:** Sita’s face is calm and clear; the two infants have separate faces and hair contours. Valmiki’s elderly face and full white beard are distinct. The small deer is a separate background animal with coherent visible anatomy.
- **Hands/feet:** Sita’s two hands rest separately around the infants; the visible infant arms and hands connect to their bodies. Valmiki’s visible hands and feet are coherent. No extra or fused digits are apparent in enlarged crops.
- **Clothing and cast:** Sita is modestly covered in a sari; both infants are swaddled. Valmiki wears ascetic garments and has no crown or royal ornaments. The cast is Sita, Valmiki, and exactly two children; Rama and a crowd are absent as required.
- **Text/signature artifacts:** None seen in the thatch, mat, foliage, ground, or corners.
- **Scene and caption fidelity:** The hermitage shelter, seated Sita, sage, and newborn twins match the planned quiet forest-hermitage moment and the supplied stanza-8 caption’s birth/exile portion. The coronation panel from the broader caption is not fused into this scene.
- **Character/deity contract:** Valmiki is elderly, white-haired and bearded, in plain ascetic clothing. Lava and Kusha appear as two age-matched infants with natural proportions. Sita’s modest adult depiction is consistent with the contract.
- **Verdict: pass.**

### Stanza 9 — landscape candidate v005

**File:** `artifacts/d035/s009/landscape/candidate-v005.png`  
**SHA-256:** `3c55e0688c9fdf9cc492b3e4d9761bf0502616c4abfe35befcdcddf1aed5ffe5`  
**Review time:** 2026-11-14T09:21:59Z  
**Plan/content evidence:** frozen plan stanza entry at lines 483–539; its disclosed `candidate_status` at line 540. Chapter content maps stanza 9 to caption 025 at lines 95–101. Reference set includes `intake/D035/026.jpg` as the direct earth-return cue.

- **Anatomy:** Sita’s prayer pose and descending body remain connected. Bhudevi supports her at shoulder and waist; Bhudevi’s two arms connect to her body. Rama, Valmiki, and two distinct boys are present in the gathering. No floating or duplicated Sita, fused figures, or extra limbs are apparent. **Disclosed deviation present:** the opening ground is a deep, hard-edged angular trench rather than the natural supported cradle in the plan; this is visible across the lower center of the image. It matches the plan’s disclosed deviation.
- **Faces:** Sita and Bhudevi have separate, calm faces; Rama, Valmiki, and both boys are distinguishable. No malformed or duplicated face is apparent.
- **Hands/feet:** Sita’s joined hands connect naturally at her chest. Bhudevi’s supporting hands are distinct and attached. Both boys’ hands and feet are visible and coherent; the nearby figures’ visible extremities are connected. No extra or fused digits are apparent.
- **Clothing and cast:** Sita and Bhudevi wear modest saris; the boys wear traditional clothing. Valmiki is white-bearded and Rama is visibly blue. Cast matches the plan’s six identities; no extra panel or duplicate goddess is visible.
- **Text/signature artifacts:** None seen in the foliage, trench/ground, or corners.
- **Scene and caption fidelity:** Sita returns to Earth before Rama, the twins, Valmiki, and Bhudevi in a single solemn clearing, corresponding to the mapped earth-return episode. The later Sarayu departure is not inserted. The trench shape is the disclosed deviation stated above.
- **Character/deity contract:** Bhudevi is a distinct earth presence with two arms and earth-toned clothing; she is not Varaha or a duplicate Sita. Valmiki remains bearded and Rama remains a two-armed blue figure. The ground opening’s shape conflicts with the planned cradle, but is specifically disclosed.
- **Verdict: pass.** Disclosed deviation present.

### Stanza 10 — landscape candidate v003

**File:** `artifacts/d035/s010/landscape/candidate-v003.png`  
**SHA-256:** `631530f2f0073627644913845bf02008a5657c80cd50e9d8f9c07ab21679d175`  
**Review time:** 2026-11-14T09:21:59Z  
**Plan/content evidence:** frozen plan stanza entry at lines 544–592; chapter content maps stanza 10 to caption 029 at lines 105–111. Direct story cue: `intake/D035/029.jpg`.

- **Anatomy:** Bhattathiri kneels with two connected arms and a joined-hands prayer pose. Guruvayurappan stands with exactly two arms, one raised in blessing and one resting; both feet are visible on the pedestal. No fused bodies, duplicated figures, or malformed anatomy is apparent.
- **Faces:** Bhattathiri’s lined, clean-shaven older face is readable. The deity has a youthful, serene face; neither face is malformed.
- **Hands/feet:** Enlarged inspection shows Bhattathiri’s hands joined, the deity’s blessing palm with five visible digits, and the other hand relaxed with visible separated digits. The deity’s two feet are fully inside frame; toes are separately drawn with no obvious extra or fused digit. Bhattathiri’s visible foot is connected and within the frame.
- **Clothing and cast:** Bhattathiri wears a cream dhoti and restrained beads, with no beard, moustache, crown, or ornate jewelry. Guruvayurappan wears a yellow dhoti, red/orange shawl, peacock-feather crown, and layered painted ornaments; these are ordinary temple-mural iconography. The oil lamp stands between the two figures. No exposed or sexualized framing.
- **Text/signature artifacts:** None seen in the shrine architecture, floor, or corners.
- **Scene and caption fidelity:** A single temple-shrine exchange shows the older devotee praying before the deity for relief, with an oil lamp between them. It follows the supplied stanza-10 cue. The architecture is one continuous shrine setting rather than multiple panels or a separate outer frame.
- **Character/deity contract:** The clean-shaven older Bhattathiri matches his identity markers. Guruvayurappan has deep blue skin, youthful features, peacock feather, yellow dhoti, red/orange shawl, and the plan-required two-armed blessing/resting pose; no weapon is present. Crown and layered jewelry are visible but not prohibited.
- **Verdict: pass.**

## Recommendation and captain-call inventory

The exact-checksum independent visual review clears all five candidates under the task’s disclosed-deviation rule. Stanza 6’s absent Lakshmana arm and stanza 9’s angular trench are visibly present and already disclosed in the final plan; I found no additional defect requiring a new captain decision. The pending captain art approval remains the standing state. My captain-call inventory from this review is empty.

No project file, candidate, source photo, or approval manifest was changed. No image was generated or edited. The report is the only file written outside this worktree.
