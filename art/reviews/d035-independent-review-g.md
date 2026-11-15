# D035 landscape candidate review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates at their full 1672×941 resolution and in focused crops made from read-only copies under `.review-scratch-d035-g/` in my worktree. Crop inspection included faces, torsos, hands, feet, the S1 arrow/tree row, S2–S3 exchanges, S4 weapon contacts and sea figure, and S5 Garuda, brothers, limbs, and coils. The original candidate files, reference photos, frozen contracts, and approval manifest were not modified. I did not inspect any existing D035 review record or producer notes.

The selected candidate paths and checksums are the plan selections at `art/plans/d035.json:34–310`; scene elements and exclusions are in the corresponding stanza entries (`:34–85`, `:90–141`, `:146–198`, `:203–253`, `:258–310`). Stanza and caption mapping is also recorded in `content/daskams/d035.json:15–61`; reference captions are in `intake/D035/photo-captions.txt` at `#1`, `#2`, `#3`, `#4`, and `#5` (respectively the entries for `001.jpg`, `004.jpg`, `006.jpg`, `011.jpg`, and `013.jpg`). I visually inspected the mapped source photos `001.jpg`, `003.jpg`, `004.jpg`, `005.jpg`, `010.jpg`, `011.jpg`, `012.jpg`, and `015.jpg` from the read-only D035 intake directory. Plan paths map S1 to 001/003, S2 to 004/005, S3 to 006–010 (010 is the direct exchange reference), S4 to 011/012, and S5 to 013–015 (015 is the direct Garuda/naga reference).

Commands and inspection evidence: `sha256sum` was run on every selected candidate and every listed frozen contract before inspection; all matched the expected values below. `identify -format '%wx%h'` reported 1672×941 for each copied candidate. Candidate copies and detailed crop coordinates are recorded by the scratch names below. Crops were made with ImageMagick `magick <copy> -crop <geometry> +repage <crop>`; full images and all crops were opened for visual inspection. Plan and content line references above identify the requirements and stanza mapping used for each finding. The review time recorded per candidate is the actual UTC completion time for this review pass: **2026-11-14T06:01:23Z**.

## Frozen review contract SHA-256 values

These are the actual hashes observed for all files named by the task; each matched its expected hash.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d035.json` | `6ef5dafa2a003a3b0b1577998097f74fe9ee589b460c2bbe2fe293f9c195d169` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/bhudevi/character.json` | `c69ac694c3897172daa395100ea353b0a2c163827003134ab46a00dff533778a` |
| `art/bible/characters/garuda/character.json` | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/hanuman/character.json` | `f9293002bf7389ea3bee583a5cd2c4f4d5b20642ae44a6590ce0c614e244b8a9` |
| `art/bible/characters/kusha/character.json` | `3a1f6781869fa91d1efb597bb78a5108562b3228b5a4cf7eda65fa7b4b62740d` |
| `art/bible/characters/lakshmana/character.json` | `51f7a4f47deb0affa85d261ab4e60fcd39d733f80dd6724a739f033a6f20ae54` |
| `art/bible/characters/lava/character.json` | `80b3be7571d3e3944183e7826701a81ce3c7fb2bb19c2a364d8d957689ba4411` |
| `art/bible/characters/rama/character.json` | `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063` |
| `art/bible/characters/ravana/character.json` | `ceaa16294638cc27a87055292ca04cab6ced934ff03b2e1f486452321019ca5c` |
| `art/bible/characters/samudra-raja/character.json` | `7a98b2c763af44f43f2fe4be3b590f41b5df8cc91048137bec6685890d862d0b` |
| `art/bible/characters/sita/character.json` | `90c9f8b261e2515b3df07df1c2f08fc0e75482b60ac75d0ab006e44f72b361f6` |
| `art/bible/characters/sugriva/character.json` | `5e907c9dc2ed7624f792bb70918ae02bb0d9a54ba381268c6d09e9397ee51a23` |
| `art/bible/characters/valmiki/character.json` | `5b77ee80de484ac50a883da4e83605c266214cfb6c4c6cb2fc4deaece69fb4ae` |
| `art/bible/characters/vibhishana/character.json` | `f6843ce13ff7e3c3c15b88a59c332a1a972462e1932a7959921e4bfe8cc517ff` |

## Candidate findings

### Stanza 1 — `d035-s001`, landscape v002

- **Reviewed:** 2026-11-14T06:01:23Z
- **Candidate:** `artifacts/d035/s001/landscape/candidate-v002.png`
- **Verified SHA-256:** `45d49fa251270e61b293c911e64894bb8629d0c474815d962cfb4079caa7a7ee`
- **Anatomy:** Full frame and crops `s001-rama.png`, `s001-witnesses.png`, and `s001-arrow_trees.png` show three separate, connected bodies with plausible proportions; no fused or duplicate figure is visible.
- **Faces:** Rama’s calm face and the two distinct simian witness faces are intact and readable. No malformed face or accidental duplicate person is visible.
- **Hands/feet:** Rama’s drawing hand and bow hand remain attached; the witnesses’ joined hands are distinct. Rama’s feet and the vanaras’ bent legs and feet are inside frame; toes are visibly separated in the enlarged crops without an obvious extra or missing digit.
- **Clothing and cast:** Rama wears modest ochre/cream forest dress and has muted blue skin, dark tied hair, and no peacock feather. Sugriva is distinct in royal cloth and a crown; Hanuman is distinct, simian, and has one attached tail. Traditional ornaments are visible on the vanara figures, without an explicit contract conflict.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including the ground and image corners.
- **Scene and caption fidelity:** Seven distinct shala trunks form one row. One continuous arrow passes through all seven. Rama, Sugriva, and Hanuman occupy one quiet forest scene, isolating the demonstration from the other episodes in the supplied caption.
- **Character/deity contract:** Rama has two connected arms and legs, a bow, muted blue skin, and no peacock feather; Sugriva and Hanuman each show two arms and legs and one attached tail. No structural prohibition is violated.
- **Verdict: pass.**

### Stanza 2 — `d035-s002`, landscape v002

- **Reviewed:** 2026-11-14T06:01:23Z
- **Candidate:** `artifacts/d035/s002/landscape/candidate-v002.png`
- **Verified SHA-256:** `ead2bcc293016e961d99a1ce6fb95775dc4cb7da17a4384133f6305d479c4368`
- **Anatomy:** The full frame and `s002-faces_handoff.png`, `s002-search_party.png`, and `s002-feet.png` show connected figures with plausible proportions. The three background searchers are distinct small figures, not duplicated bodies.
- **Faces:** Rama, Hanuman, Lakshmana, and Sugriva are individually discernible; no malformed or cut-off face is visible. The three background vanara faces remain legible at their scale.
- **Hands/feet:** In `s002-ring_hands.png`, Rama’s attached hand places a single ring at Hanuman’s open palm; neither hand floats. Other visible hands and feet remain attached and within frame, with no noticeable digit error at crop scale.
- **Clothing and cast:** The foreground figures wear modest traditional garments. Rama is blue-skinned and dressed in ochre; Hanuman has a simian face and attached tail; Lakshmana and Sugriva remain separate figures. A small, orderly vanara party follows on the path. Traditional head and arm ornaments are visible and do not violate an explicit prohibition.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark appears in the image, ground, or corners.
- **Scene and caption fidelity:** The image isolates the signet-ring handoff from the search-party caption. The ring is the sole ring and visibly rests at the contact between Rama’s fingers and Hanuman’s palm; the party waits behind on a forest route.
- **Character/deity contract:** Rama, Hanuman, Lakshmana, and Sugriva have no visible extra or missing limbs; Hanuman’s face is simian and his tail is attached. No structural prohibition is violated.
- **Verdict: pass.**

### Stanza 3 — `d035-s003`, landscape v001

- **Reviewed:** 2026-11-14T06:01:23Z
- **Candidate:** `artifacts/d035/s003/landscape/candidate-v001.png`
- **Verified SHA-256:** `889a2ff831e2ed5243ba35b4e4f53ade30be6f1addf8f53bde94b4ec7abb5468`
- **Anatomy:** Full frame and crops `s003-faces_exchange.png`, `s003-ring_hands.png`, `s003-jewel_hands.png`, and `s003-legs_feet.png` show two connected figures with no fused limbs or duplicate people.
- **Faces:** Sita’s serene adult face and Hanuman’s recognizable simian face are intact and distinct.
- **Hands/feet:** All four arms connect to the two figures. The upper exchange shows the ring meeting Sita’s hand; the lower exchange shows Sita’s hand at the hair jewel and Hanuman’s palm beneath it. Both objects and both hand contacts are visible. Knees, feet, and toes are inside the frame; no obvious digit error appears in the crops.
- **Clothing and cast:** Sita is modestly dressed in a covered cream sari with restrained jewelry. Hanuman wears traditional cloth and ornaments; his single tail is continuous and attached at the lower back. No other person is present.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible in the foliage, ground, or corners.
- **Scene and caption fidelity:** One ashoka garden moment presents both exchanges in a continuous shaded scene. It does not merge the other stanza-3 events shown in references 006–009; reference 010 is the direct exchange cue.
- **Character/deity contract:** Sita has two arms and legs and a distinct face. Hanuman has two arms and legs, a simian face, and one attached tail; no extra arms or duplicated character is visible. His ornate tiered crown and layered necklaces are ordinary temple-mural iconography and are not prohibited by the contract.
- **Verdict: pass.**

### Stanza 4 — `d035-s004`, landscape v004

- **Reviewed:** 2026-11-14T06:01:23Z
- **Candidate:** `artifacts/d035/s004/landscape/candidate-v004.png`
- **Verified SHA-256:** `2dc85305ca5f0b777c3f1cddf59ae1f880241ae0871caeb6c6462354aa2320e1`
- **Anatomy:** The full image and crops `s004-faces_weapon.png`, `s004-samudra.png`, `s004-vibhishana.png`, and `s004-feet_bow.png` show distinct connected figures. Rama and Vibhishana stand on shore; Samudra Raja emerges naturally from water. No malformed or duplicated foreground figure is visible.
- **Faces:** Rama, clean-shaven Vibhishana, and Samudra Raja have readable, distinct faces; the small vanara group behind Vibhishana is not fused with him.
- **Hands/feet:** Rama holds the bow in one hand and the continuous arrow in the other; the small flame is at the arrow tip. Vibhishana’s joined hands and Samudra Raja’s joined hands remain connected. Shore figures’ feet and toes are inside the frame; no obvious digit error appears in the focused crops.
- **Clothing and cast:** All figures are traditionally and modestly dressed. Rama has muted blue skin; Vibhishana is distinct from Rama and has no extra heads or arms; Samudra Raja has a tiered crown and layered ornaments. The crown and jewelry are factual observations of ordinary mural iconography, with no explicit prohibition in the scene contract.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible in the sand, water, sky, or corners.
- **Scene and caption fidelity:** A continuous horizontal shore contains Rama’s restrained fire arrow, Vibhishana at his side, and the sea king rising respectfully. The small contained flame is not destructive, and the ocean does not engulf the shore figures. This combines the two mapped cues (011 and 012) as the plan specifies.
- **Character/deity contract:** Rama’s bow and arrow are connected to his hands and his body has two arms; Vibhishana has two arms and legs and a benevolent clean-shaven face; Samudra Raja has two connected arms and emerges from the water. No structural prohibition is violated.
- **Verdict: pass.**

### Stanza 5 — `d035-s005`, landscape v003

- **Reviewed:** 2026-11-14T06:01:23Z
- **Candidate:** `artifacts/d035/s005/landscape/candidate-v003.png`
- **Verified SHA-256:** `18ef1817e344e6ec908e2e100ca02e24e7dfabd3a702ec47cc56a141ea93c5d0`
- **Anatomy:** Full frame and crops `s005-garuda_upper.png`, `s005-brothers.png`, `s005-limbs_coils.png`, and `s005-faces.png` show connected bodies and Garuda with two attached wings. Rama’s limbs are connected. Lakshmana’s absent second arm and the naga coils lying beside or behind the brothers are the disclosed deviations described below; no additional anatomy defect is visible.
- **Faces:** Rama and Lakshmana each have one intact, readable face. Garuda has a single hooked-beak bird face; the three background vanara allies are distinct and not cloned.
- **Hands/feet:** Garuda’s two taloned feet are attached and visible. Rama’s hands and feet are attached and inside the frame. Lakshmana has one visible connected arm and hand; the absent arm is not obscured by coils. Both brothers’ feet and toes are visible without an additional obvious digit defect.
- **Clothing and cast:** The brothers wear traditional, modest battle clothing without graphic injury. Garuda is depicted as a large bird with feathered body, two wings, and two taloned feet; the character contract permits the bird form. Three vanara allies observe from behind without crowding.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark appears in the sky, ground, or corners.
- **Scene and caption fidelity:** Garuda descends over the two brothers in the battle scene as in direct reference 015. The coils are present but lie beside or behind the figures rather than visibly binding their torsos or limbs. This is the exact deviation disclosed at `art/plans/d035.json:310`: Lakshmana’s second arm is absent, and the visible coils do not read as binding the brothers.
- **Character/deity contract:** Garuda has exactly two visible attached wings and no extra wings or arms. Rama has two visible connected arms. Lakshmana has only one visible connected arm, contrary to the ordinary two-arm anatomy contract, but this is disclosed in the plan. No other contract violation is visible.
- **Verdict: pass. disclosed deviation present.** Under the task’s disclosed-deviation rule, this verdict passes only because the missing Lakshmana arm and non-binding coils are disclosed; no separate undisclosed defect was observed.

## Summary and completion inventory

Verdicts apply only to the exact candidate checksums above. Stanzas 1–4 pass without an observed defect. Stanza 5 passes under the required disclosed-deviation rule; its plan disclosure must remain visible alongside that verdict. This review does not grant human art approval and does not alter the approval manifest. The existing pending captain art approval is the standing state, not a decision raised by this review. I found no unresolved captain call from this review; captain-call inventory: **empty**.
