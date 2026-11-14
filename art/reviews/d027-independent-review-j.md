# D027 landscape candidate visual review: stanzas 1–6

## Review scope and method

I independently reviewed each selected landscape candidate at native resolution, then inspected focused crops of faces, hands, feet, creature anatomy, groups, and all four image corners. Crops were made from the producer candidates into this task worktree’s `.review-scratch/`; no candidate, intake file, contract, or approval manifest was changed. I also viewed the stanza-mapped source photos and read their supplied captions. The review time recorded for each completed image review is **2026-11-14T06:13:23Z**.

The plan’s `candidate_status` fields for stanzas 1–6 disclose no remaining visual deviation; they record unapproved candidates and prior producer inspection only. Reference mapping is plan `reference_paths` plus chapter commentary sources: stanza 1 → 003.jpg, 2 → 004.jpg, 3 → 005.jpg, 4 → 007.jpg, 5 → 008.jpg, 6 → 011.jpg. See the plan entries [d027.json:42–80, 92–132, 144–182, 194–233, 245–283, 295–332] and chapter content [d027.json:17–22, 27–32, 37–42, 47–52, 57–62, 67–72]. Captions are at [photo-captions.txt:9–12, 14–17, 19–22, 28–31, 33–36, 46–49].

Commands/evidence: I ran `sha256sum` over all six candidate files and all fifteen frozen contract files before inspection; every digest matched the expected digest below. `identify -format '%f %wx%h\n'` reported candidates at 1672×941 pixels, except stanza 4 at 1671×941. I viewed all six full candidates and six mapped reference photos with `view_image`, then generated focused scratch crops with ImageMagick `magick ... -crop ... +repage` and viewed those crops. Final candidate hashes were checked again after the inspection. No OCR or image-generation service was used.

## Frozen contract hashes (all expected values matched)

| File | SHA-256 |
|---|---|
| `art/plans/d027.json` | `2872dc21fb5b78fcae48cb2806273f2cac50cadb4ecbbf6d728e85bceb5550ce` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d027-cast-contract.json` | `6c16be532562c27aa755057f52a9a91ed96b1b38120e817431a3ebac409a84ba` |
| `art/bible/characters/durvasa/character.json` | `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab` |
| `art/bible/characters/indra/character.json` | `79673700165a403b64babad8f47e11218b06911b64eb1686ff1a1f8a14bf5831` |
| `art/bible/characters/airavata/character.json` | `8f1a1ed0b879d49c6467f12b271d7633a6e2055c97bc5b3ba516c747f53a8496` |
| `art/bible/characters/vishnu/character.json` | `b12934f8ab07bf3378b90ea256a6074a771d5edb22b9d36565d44bdb41441111` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373c3dd2389` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/devas/character.json` | `549a36458ed305cd2fa0f1f7c41c087bae53bbe7ac44ee425ab2654d6a901a1a` |
| `art/bible/characters/garuda/character.json` | `8f8418c3fbaf8857bcdc8912fa80e47dbdfac66cc156cd20ed87e7eba8d0ecce` |
| `art/bible/characters/asuras/character.json` | `0bbc62b39d78299add49f9e3e1d26f969a4ca79de4cdc6698e3c53c8e7c6d96d` |
| `art/bible/characters/vasuki/character.json` | `4e2745074230f7cf5317609857a7aaa0d84085e02e1ed491bda5ff1ada830fc1` |
| `art/bible/characters/kurma/character.json` | `e672aae1d68282614afb4ab5c73ab86d1f62c736a1b30a9d9eb51f8647926094` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

## Per-image findings

### Stanza 1 — `candidate-v005.png`

- **Review time:** 2026-11-14T06:13:23Z
- **Candidate:** `artifacts/d027/s001/landscape/candidate-v005.png`
- **SHA-256:** `b86c10e1cdbb07f49f5d2e9aa22f0cbe588fd1e64e06893366fee5a4b97b36fa` (verified before and after inspection)
- **Anatomy:** One Durvasa, one Indra, and one elephant are present. The two men each show one head, two attached arms, and two legs. Airavata has one head, one trunk, and four legs; its four feet stay in frame. No fused or duplicated person or creature.
- **Faces:** Durvasa’s lined face and strong brows read as angry; Indra’s face is single and proportionate; the elephant has one readable eye and head. No malformed facial features.
- **Hands/feet:** Durvasa’s raised open hand shows five distinct digits; his garland hand and Indra’s two garland-gripping hands are partly occluded by flowers but remain attached and do not merge. Bare human feet show separated toes. The elephant’s feet show stylized toenail divisions, with the forward foot visibly pressing the fallen flowers; no extra or missing leg is apparent.
- **Clothing and cast:** Durvasa wears cream ascetic cloth and restrained beads; Indra wears cream/saffron drapery, a crown, and layered jewelry. This ornament is visible at the head, neck, wrists, and waist and is ordinary iconography, with no contract prohibition. Dress is modest. No extra cast member.
- **Text/signature artifacts:** None seen in the image, floor texture, or four corners; no signature or watermark.
- **Scene and caption fidelity:** The flower garland runs from Durvasa to Indra and onto the floor under Airavata’s forefoot. Durvasa’s raised hand conveys the curse without written words or violence. The arrangement is consistent with the 003.jpg caption and required scene [plan:59–67; caption:9–12].
- **Character/deity contract:** Durvasa’s one-head/two-arm form and Airavata’s single elephant form match their contracts [durvasa/character.json:20–21; airavata/character.json:18–27].
- **Verdict: pass.**

### Stanza 2 — `candidate-v002.png`

- **Review time:** 2026-11-14T06:13:23Z
- **Candidate:** `artifacts/d027/s002/landscape/candidate-v002.png`
- **SHA-256:** `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933` (verified before and after inspection)
- **Anatomy:** A small group of petitioners approaches Vishnu. Shiva is one two-armed ascetic; Indra is visibly bowed and subdued. Brahma has four distinct arms, all attached. Vishnu has four attached arms. No duplicated or fused bodies.
- **Faces:** Brahma shows three distinct front-facing faces with the fourth head turned behind; Shiva and Indra each show one face. The other devas have distinct, readable faces. Vishnu’s calm face is intact.
- **Hands/feet:** Brahma’s four hands are distinct: scripture, lotus, water pot, and beads. Vishnu’s four hands separately hold discus and conch, with one blessing hand and one lotus hand; the palms and digits are visibly formed. The petitioners’ joined hands and feet are individually readable in the crop; no extra, missing, or fused digits are apparent.
- **Clothing and cast:** Devas wear cream/saffron/olive garments, with restrained crowns on leaders; Shiva wears ascetic cloth and beads. Vishnu has a tiered crown and multiple necklaces, visible at head and chest; this is ordinary temple-mural ornamentation and no explicit prohibition applies. Clothing is modest; the small group has varied faces and garments.
- **Text/signature artifacts:** None seen on garments, floor, lotus bases, or at any corner; scripture appears as a closed blank bundle, not readable text. No signature or watermark.
- **Scene and caption fidelity:** The weakened Indra, Shiva, Brahma, devas, and Vishnu are all in one petition scene, consistent with caption 004 and the scene brief [plan:111–127; caption:14–17].
- **Character/deity contract:** Brahma visibly meets the exact four-head/four-arm rule [series.json:28; d027-cast-contract.json:5; brahma/character.json:18–37]. Vishnu’s four-arm form and Shiva’s single ascetic presence fit the stanza plan [plan:116–119].
- **Verdict: pass.**

### Stanza 3 — `candidate-v004.png`

- **Review time:** 2026-11-14T06:13:23Z
- **Candidate:** `artifacts/d027/s003/landscape/candidate-v004.png`
- **SHA-256:** `cf50a18e92e8117b01b1457fc3d7b7ffdef27806d7067485e7cca852455fd4fe` (verified before and after inspection)
- **Anatomy:** One Vishnu and a small distinct group of devas are present. Vishnu has four attached arms, two legs, and a natural seated posture. The listeners’ torsos and limbs remain separate and attached. No extra or missing limbs or duplicated figures.
- **Faces:** Vishnu’s face is proportionate and attentive. The devas’ faces are distinct, with no malformed or cloned faces.
- **Hands/feet:** Vishnu’s conch, discus, mace, and open teaching gesture each occupy a separate hand; all four hands are attached and legible. His visible foot has separated toes. The listeners’ joined or open hands and visible feet show no conspicuous digit errors in the enlarged crops.
- **Clothing and cast:** Vishnu wears cream/ochre and maroon garments with crown, peacock feather, garland, and layered necklaces; these are visible at head and chest and constitute ordinary deity iconography. The devas wear modest cream/saffron/olive clothing with restrained ornaments. No unplanned character appears.
- **Text/signature artifacts:** None seen in the ocean, ground, foliage, or corners. No signature or watermark; no written instruction or nectar.
- **Scene and caption fidelity:** Vishnu gestures toward the simple ocean-and-Mandara motif while the devas listen in one assembly. This matches the scene brief and caption 005 [plan:161–175; caption:19–22].
- **Character/deity contract:** Vishnu is deep blue and four-armed, with no extra limb or duplicate; Brahma is optional and absent [plan:28–34, 161–175; vishnu/character.json:18–29].
- **Verdict: pass.**

### Stanza 4 — `candidate-v003.png`

- **Review time:** 2026-11-14T06:13:23Z
- **Candidate:** `artifacts/d027/s004/landscape/candidate-v003.png`
- **SHA-256:** `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b` (verified before and after inspection)
- **Anatomy:** Garuda is one coherent bird with one head, two attached wings, and two taloned legs. Vishnu has four attached arms. Devas and asuras on each side are distinct two-armed, two-legged people; the visible carriers’ limbs remain attached. No duplicate figure, mountain, or mount.
- **Faces:** Vishnu and Garuda each have one intact face/head. The small groups’ faces are distinct and proportionate; no malformed or cloned faces.
- **Hands/feet:** Vishnu’s four hands separately hold the discus, conch, mace, and lotus; the two Garuda talons visibly connect to the mountain. The carriers’ open and joined hands are separate, and their feet remain inside the frame. No conspicuous extra, fused, or missing digits in the detail crops.
- **Clothing and cast:** Vishnu’s crown, jewelry, cream/ochre clothing, and maroon drape are ornate at head and torso; the level of ornament is ordinary deity iconography. Devas wear cream/saffron, asuras muted maroon/ochre, all modestly. No other cast member is duplicated.
- **Text/signature artifacts:** None seen in the water, mountain, background, or four corners; no signature or watermark.
- **Scene and caption fidelity:** The two groups flank the fallen Mandara; Vishnu rides Garuda above it, with Garuda’s talons contacting the mountain over the ocean. This reads as the recovery/lifting described by caption 007 and the plan [plan:212–226; caption:28–31].
- **Character/deity contract:** Garuda’s two wings and two legs and Vishnu’s four arms meet the explicit scene structure [plan:215–224; garuda/character.json:18–26; vishnu/character.json:18–29].
- **Verdict: pass.**

### Stanza 5 — `candidate-v005.png`

- **Review time:** 2026-11-14T06:13:23Z
- **Candidate:** `artifacts/d027/s005/landscape/candidate-v005.png`
- **SHA-256:** `0404915ea1fe49078b8f36fbc0e8834377745e6031495c786602030527e9d371` (verified before and after inspection)
- **Anatomy:** Four distinct humanoid pullers are visible, two on each side. Each has one head, two attached arms, and two legs; no fused bodies or cloned faces. Vasuki has one head and one continuous body coiled around Mandara, with a tapering tail end.
- **Faces:** The two asuras have distinct faces; no malformed or duplicated features. Vasuki has a single coherent serpent head and one eye on the visible side.
- **Hands/feet:** The asuras’ four hands are around the head/neck end; the devas’ four hands grip the opposite tail end. Hands are attached and show normal grasping shapes; the visible bare feet have separately outlined toes. No extra arms or digit defects apparent in the crops.
- **Clothing and cast:** The asuras wear muted maroon/olive wraps with bare torsos, and devas wear cream/saffron with restrained crowns; both are ordinary modest traditional dress. Groups remain distinct by side and color.
- **Text/signature artifacts:** None seen in ocean, ground, mountain, or any corner; no signature or watermark.
- **Scene and caption fidelity:** Mandara is the central pivot in the ocean; Vasuki’s single head is on the asura side and its tail end on the deva side, visibly wrapped around the mountain. This matches caption 008 and the plan [plan:262–276; caption:33–36].
- **Character/deity contract:** Vasuki’s one head, continuous rope body, and tapering tail are consistent with the contract; no Adishesha couch/canopy form [vasuki/character.json:18–27]. The small two-sided groups follow their natural humanoid contracts [devas/character.json:18–28; asuras/character.json:18–28].
- **Verdict: pass.**

### Stanza 6 — `candidate-v003.png`

- **Review time:** 2026-11-14T06:13:23Z
- **Candidate:** `artifacts/d027/s006/landscape/candidate-v003.png`
- **SHA-256:** `eb78c032e714e303f44adf48554bdec389d02374af5d749a1c58044b5b4935a7` (verified before and after inspection)
- **Anatomy:** Kurma is fully tortoise, with one head, one shell, four attached legs, and a short tapered tail. No human torso or arms, extra head, or extra leg. Mandara sits directly on the shell. Three distressed devas are visible at the waterline.
- **Faces:** Kurma’s single face/head is coherent. The three devas have distinct faces and natural expressions; no malformed or duplicated face.
- **Hands/feet:** The devas’ visible hands are attached and individually shaped. All four tortoise feet are present; their clawed toes are distinct at this mural scale (three to five toe/claw divisions visible depending on angle/overlap), with no extra or fused foot. No human extremities appear on Kurma.
- **Clothing and cast:** The devas wear modest cream/saffron clothing and restrained crowns. Kurma’s body is rendered in muted earth/olive tones; no unrelated cast member.
- **Text/signature artifacts:** None seen in water, mountain, or corners; no signature or watermark.
- **Scene and caption fidelity:** The mountain’s base settles onto Kurma’s broad shell below the waterline, while distressed devas watch above the water. This agrees with caption 011 and the plan [plan:311–323; caption:46–49].
- **Character/deity contract:** The complete tortoise form and direct shell support satisfy the stanza-specific prohibition against half-human anatomy and extra limbs [plan:311–319; kurma/character.json:18–26; series.json:30–34].
- **Verdict: pass.**

## Recommendation and inventory

All six exact-checksum images pass this independent visual review. The review does not confer human art approval; the candidates remain unapproved as their plan status states. I found no new unresolved choice for the captain. Captain-call inventory raised by this review: **empty**; the pending captain art approval is the standing state and is not a decision raised by this review.
