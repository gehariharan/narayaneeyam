# Independent visual review — Dasakam 30, stanzas 6–10

Review completed: 2026-11-26T05:55:58Z (UTC). Each verdict below applies only to the exact candidate SHA-256 listed. This is an independent visual review against the frozen plan, series bible, character contracts, mapped photo context, and source chapter content. The review does not approve artwork; every candidate remains unapproved.

## Integrity and inspection evidence

I generated a checksum list from the values in the task brief at `.review-scratch/hash-list.txt` and ran:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/.review-scratch/hash-list.txt'
```

All 23 listed files returned `OK`: five candidates, four mapped photo references, the final plan, series bible, ten character contracts, the reference map, and photo captions. I also ran `identify` on the candidates and the four mapped photos. All candidates are 1672×941; reference dimensions are 007.jpg 602×745, 008.jpg 217×258, 009.jpg 602×851, and 010.jpg 293×400.

I viewed each complete candidate at native resolution, its mapped reference where present, and enlarged detail crops saved only under this worktree’s `.review-scratch/` directory. The detail checks included heads/faces, torsos, each main figure’s visible extremities, the S8 group and Shukra’s shielding hand, S9’s water path and cupped hand, S10’s open waist hand and foot-water path, and image corners/ground/water for text or signature artifacts. The input candidates and reference photos were read-only; no project file or approval manifest was changed.

Plan and scene references: frozen `art/plans/d030.json` stanza entries at lines 255, 297, 336, 377, and 418 (scene details at lines 270–274, 309–313, 350–354, 391–395, and 430–435). Source content is `content/daskams/d030.json` stanzas 6–10; photo mapping and disclosed deviations are in `content/sources/d030/reference-map.json`. Series style rules are in `art/bible/series.json`. Character rules are in the files listed below.

## Hashes of contract and source files actually read

| File | SHA-256 |
|---|---|
| Final plan `art/plans/d030.json` | `cfcd0c9832d39b39169a1e8037ccb17b05a23591a82693807e52b05d030b9804` |
| Series `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `characters/d031-vamana/character.json` | `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229` |
| `characters/d031-mahabali/character.json` | `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9` |
| `characters/d031-shukracharya/character.json` | `c493d4cfa5d61cb35e6cf5b318819d563f98825038ba456fd5a47fb37658b3c8` |
| `characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |
| `characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `characters/d030-aditi/character.json` | `94c8ed8be0a948ad2b58b754f06fe0f48ed06c9b39c8a75908b676cdb2cdc92a` |
| `characters/d030-kashyapa/character.json` | `3a4bfe53bece23fc17b2a86fde28ce6e0923c61940b657f240fad89b556d281f` |
| Source `content/sources/d030/reference-map.json` | `22c4e7d2ae46cf32216e583957d6980ab342b15d66285c75f186190e150ff719` |
| Source `intake/D030/photo-captions.txt` | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` |

## Mapped photo checks

| Stanza | Photo | Verified SHA-256 | Mapping note |
|---|---|---|---|
| 6 | `intake/D030/007.jpg` | `8dd284dad7b70fe36b04e69d20890e86c2debbc3c25b9a47747f0290eb27e820` | The disclosed mismatch is present: the photo depicts a later Bali foot-washing welcome, not upanayana/departure. |
| 7 | `intake/D030/008.jpg` | `6b95ac01603df6944ba4e6c9be1021e7fa6730bda7bba0b7f123ba837fa115f3` | Walking Vamana with umbrella/staff; used only as scene context. |
| 8 | `intake/D030/009.jpg` | `85252dc63312ddeaeecb113739aeee817c7e3a1767f613de79593b142a50e7e3` | The disclosed mismatch is present: the photo shows the later cosmic stride, not the Narmada arrival and sages shielding their eyes. |
| 9 | `intake/D030/010.jpg` | `dee6e84340e99953e1ed1a76f10b579d1cf358a742dfa2f85a0db3306d8dce93` | The photo shows Bali welcoming Vamana but does not clearly show the required foot-washing/water-receiving action. |
| 10 | None | — | No photo or caption is mapped; the scene is canonical-only. |

## Candidate findings

### Stanza 6 — candidate-v015

Candidate: `artifacts/d030/s006/landscape/candidate-v015.png`  
SHA-256: `9f3e440d7869d3f001a0b1e3305890f7c245b76177e5adc5e2733b2d2bf83038`  
Review time: 2026-11-26T05:55:58Z  
Verdict: **pass**

- **Anatomy:** Vamana has one face, two attached arms and two connected legs. Brahma has four total heads with three front-visible faces and four attached arms/hands. The two other ascetics are distinct, connected figures; no extra or fused limb is visible.
- **Faces:** Faces are legible and not malformed or duplicated. Brahma’s three visible faces are distinct.
- **Hands/feet:** Vamana’s two bare feet are unobstructed; I count five toes on each. Brahma’s four hands separately hold the book, lotus, water pot, and initiation thread/cord; no malformed hand is visible. The other elders’ feet/hands are either posed or partly covered; no visible digit defect.
- **Clothing and cast:** The sacred thread, simple garments, deer skin, and ritual items are consistent with the initiation scene. Bare male torsos are ordinary traditional dress. Brahma’s visible head ornaments are plain, and the single bead strand is restrained.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including in the examined corners, ground, and fire area.
- **Scene and reference fidelity:** The scene shows initiation at a fire and Vamana departing with the implements. The mismatch disclosed for photo 007 is present in the reference; the candidate follows the plan rather than copying the later foot-washing image.
- **Character/deity contract and skin:** Brahma’s head/arm count and Vamana’s two-arm brahmachari form match their contracts. Two skin-only 10×10 patches on the human figures at candidate coordinates (130,480) and (1460,465) have median R−B values of **97** and **68** respectively. They read as natural warm brown. Vamana’s skin reads as deep blue.

### Stanza 7 — candidate-v012

Candidate: `artifacts/d030/s007/landscape/candidate-v012.png`  
SHA-256: `dc2d9d59656d53aae9df191d8c38885410d8578ba812342e9943a9eb995c99e2`  
Review time: 2026-11-26T05:55:58Z  
Verdict: **pass**

- **Anatomy:** Vamana is a single, naturally proportioned two-armed figure with connected limbs. No duplicate person or generation artifact is visible.
- **Faces:** One clear, proportionate face; no malformed or duplicated features.
- **Hands/feet:** The hands grip the staff and umbrella support without a visible defect. Both feet are fully visible; I count five separate toes on the planted foot and five on the lifted foot at native resolution.
- **Clothing and cast:** The simple wrap and sacred thread are modest. No crown or Krishna-only feather is present. The scene contains only Vamana.
- **Text/signature artifacts:** No text, signature, logo, or watermark is visible; the ground and corners show only the mural texture.
- **Scene and reference fidelity:** Vamana walks with umbrella and staff on a full-bleed path; small ground cracks suggest trembling. This is consistent with photo 008’s story/prop context and the plan. No unsupported rays or beams are present.
- **Character/deity contract and skin:** The two-arm Vamana contract is met. The skin is deep indigo-blue and reads as deity blue, not a different palette.

### Stanza 8 — candidate-v006

Candidate: `artifacts/d030/s008/landscape/candidate-v006.png`  
SHA-256: `5b0b48122742d48da1dc4cd4e1fbbf32c7e188188666942ce4bd434e5badaa26`  
Review time: 2026-11-26T05:55:58Z  
Verdict: **needs-fix**

- **Anatomy:** Vamana has two attached arms and two legs. Shukra and the other sages are separate figures with connected bodies; no duplicated or fused person is visible.
- **Faces:** Shukra’s elderly white hair and beard distinguish him from the sages. The faces are individually readable; I see no malformed face.
- **Hands/feet:** The main figures’ limbs are attached. Shukra’s brow-shielding hand shows four grouped fingers and a tucked thumb; the grouped fingers remain discernible in the enlarged crop. Other sages shield/narrow their eyes without a visible extra or missing digit. Vamana’s visible hands grip his props; his feet are partly outside the side crop but not malformed at the visible edge.
- **Clothing and cast:** Ascetic wraps, beads, topknots, and the horse/ritual setting fit the scene. Sages have visibly varied hair, garments, and poses rather than duplicated bodies. No exposed-skin or sexualized framing issue.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including over the river, ground, and corners.
- **Scene and reference fidelity:** The disclosed mismatch is present: photo 009 is the later cosmic Trivikrama stride. This candidate instead shows Vamana arriving by the river at a sacrificial hall, with sages shielding their eyes and a sacrificial horse/altar visible, as the plan requires.
- **Character/deity contract and skin:** Vamana is a two-armed, blue-skinned brahmachari, not the four-armed giant in the reference. However, the plan requires ordinary human figures, including the elders, to have natural muted warm-brown skin with skin-only patch R−B below 100. A skin-only 10×10 patch on Shukra’s exposed upper forearm at candidate coordinates (610,200) has median RGB (190, 98.5, 15.5), R−B **174.5**. In the full frame and enlarged crop this exposed skin reads copper/orange rather than natural warm brown. The large exposed arm makes the color deviation visible to a viewer; this is the needs-fix reason.

### Stanza 9 — candidate-v010

Candidate: `artifacts/d030/s009/landscape/candidate-v010.png`  
SHA-256: `3c608b19587ab3518231541ee0c1e8857f7fa7d65276d9e6a7bbaffdb419a6f1`  
Review time: 2026-11-26T05:55:58Z  
Verdict: **pass**

- **Anatomy:** Bali has one face and two attached arms; Vamana has one face, two arms, and two legs. No duplicate/fused people or malformed body is visible.
- **Faces:** Bali’s bowed face, Vamana’s serene face, and the distinct sages’ faces are legible and not malformed.
- **Hands/feet:** Both Vamana feet are visible in the basin; I count five toes on each. Bali’s raised cupped hand at his crown shows a thumb and four fingers; the stream overlays the palm but does not erase the visible digit outlines. The other hand controls the vessel. No visible malformed hand or foot.
- **Clothing and cast:** Bali wears royal clothing and a courtly crown; the ornament reads as royal attire allowed by his character contract, not a clear unsupported costume. The sages wear modest ascetic garments. No sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including on the water, ground, and corners.
- **Scene and reference fidelity:** The candidate shows Vamana’s feet being washed in a basin and water carried to Bali’s bowed crown. The reference photo 010 is only a welcome scene and does not clearly show this action; the candidate supplies the canonical foot-washing and receiving gesture required by the plan. The water path is visible from the feet to Bali’s cupped hand and over his head.
- **Character/deity contract and skin:** Bali’s human skin reads as dark warm brown, not orange/copper; Vamana is deep blue. Skin-only 10×10 patches at (1000,475) on Bali’s exposed upper arm/shoulder and (1080,300) on his raised arm have median R−B values **41** and **130**. The raised-arm patch is above the stanza’s <100 numeric target, but visually reads as dark warm brown in the full image rather than orange. The review gate’s visible-orange defect criterion is not met.

### Stanza 10 — candidate-v008

Candidate: `artifacts/d030/s010/landscape/candidate-v008.png`  
SHA-256: `39e9fd008121a117fe481170850bb7956df2ceb51a5282d82b7959a4d7ca3314`  
Review time: 2026-11-26T05:55:58Z  
Verdict: **pass**

- **Anatomy:** Vamana has one face, exactly two attached arms, and two connected legs in a coherent raised-foot pose. Bali and Shiva have natural connected limbs; no malformed or duplicated body is visible.
- **Faces:** The three faces are distinct and proportionate. Shiva’s face is calm; no malformed features.
- **Hands/feet:** Vamana’s open hand beside the waist shows a thumb and four fingers; his other hand grips the parasol staff. His raised and planted feet each show five toes. Bali’s hands are joined in prayer and Shiva’s hands rest together in his lap; neither shows a visible digit defect. Bali’s feet are covered by his kneeling clothing.
- **Clothing and cast:** Vamana wears modest brahmachari clothing. Bali is modestly dressed in royal garments. Shiva has restrained ascetic cloth and bead ornaments, with matted hair, crescent, and Ganga; no unsupported extra heads or arms.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible on the water, ground, or corners.
- **Scene and reference fidelity:** No reference photo or caption is mapped; this is accurately treated as a canonical-only scene. The stream visibly contacts Bali’s bowed head before continuing to Shiva’s hair. Shiva is prominent on the right and larger than the plan’s phrase “small distinct Shiva form” suggests, but remains a distinct secondary figure in the continuous composition. I record this scale difference as an observation; it does not meet the review gate’s listed needs-fix conditions.
- **Character/deity contract and skin:** Vamana is two-armed and blue; Shiva has one head, two attached arms, and muted blue-grey skin. Bali’s exposed torso patch at (820,550), 10×10 pixels, has median R−B **70.5** and reads as natural warm brown, not orange.

## Recommendation and captain-call inventory

Return stanza 8 candidate-v006 for a new version with Shukra and the elders’ exposed skin corrected to natural muted warm brown; do not overwrite this candidate. Candidates 6, 7, 9, and 10 pass this independent review for their exact checksums but remain unapproved pending the standing art-approval process. No approval manifest was changed.

Captain-call inventory raised by this review: **empty**. The pending captain art approval is the standing state and is not a decision raised by this review. No Lavish board is needed for this text-report-only task.
