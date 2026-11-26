# D030 landscape candidate review: stanzas 6–10

## Scope and method

This is an independent exact-checksum visual review of five landscape candidates. I reviewed each source PNG at its native **1672×941** resolution and examined scratch-only detail crops for faces, hands, feet, torsos, crowded groups, the Ashvamedha horse, and frame corners/ground/water. Scratch crops and color samples are under `.review-scratch/d030-review-lb/` in the review worktree; no candidate, reference, contract, or project file was changed. The supplied candidate hashes were verified before inspection with `sha256sum -c` against `.review-scratch/d030-review-lb/expected.sha256`, generated programmatically from this brief. Every listed check returned `OK`.

I used the frozen final plan and frozen series/character files identified by the hashes below. The plan is bound byte-for-byte to every verdict. The local reference photos and the available OneDrive copies of photos 007–010 have matching hashes. The plan/reference-map disclosed deviations are present: photo 007 shows a later foot-washing scene rather than stanza 6’s initiation/departure; photo 009 shows the later cosmic stride rather than stanza 8’s Narmada approach; stanza 10 has no mapped photo or caption. These deviations are not defects in the candidates; each was judged against the canonical stanza and plan as instructed.

For required warm-brown skin checks, I sampled skin-only patches from the native images using ImageMagick crops and calculated the median R and B channels independently; the reported value is median R minus median B. Coordinates below are native-image pixel coordinates, with top-left as (0,0). The 9×9 or 13×13 sampling patches are scratch evidence only. Verdicts apply only to the candidate checksum named in each section. `pass` is an independent visual-review result, not artwork approval; all artwork remains unapproved.

## Verified hashes of contract and mapping files

Actual SHA-256 values (all matched the brief’s expected values):

| Read-only file | SHA-256 |
|---|---|
| Frozen final plan `art/plans/d030.json` | `e1ac0ddacae7cf89fc615c0aa01e8aaa31043f1dd316ef1dfe4fa2ef04c08fa3` |
| Frozen series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
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
| `content/sources/d030/reference-map.json` | `22c4e7d2ae46cf32216e583957d6980ab342b15d66285c75f186190e150ff719` |
| `intake/D030/photo-captions.txt` | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` |

The frozen plan sections reviewed are `art/plans/d030.json:255–443`; canonical stanza entries are `content/daskams/d030.json:67–114`. Relevant visual contracts include Vamana’s two-arm young brahmachari anatomy and props (`d031-vamana/character.json:6–10`), Bali’s ordinary two-arm anatomy and courtly identity (`d031-mahabali/character.json:6–8`), Shukra’s elderly ascetic identity (`d031-shukracharya/character.json:6–8`), sages’ distinct two-arm brown-pigment group (`sages/character.json:10–20`), Brahma’s four heads with three frontal faces and four attached arms (`brahma/character.json:22–38`), and Shiva’s single head/two-arm blue-grey form (`shiva/character.json:12–20`).

## Candidate findings

### Stanza 6 — `candidate-v015.png`

- **Version / verified checksum:** v015 — `9f3e440d7869d3f001a0b1e3305890f7c245b76177e5adc5e2733b2d2bf83038`
- **Review time:** 2026-11-26T06:19:21Z
- **Anatomy:** Kashyapa, Vamana, Brahma, and the two accompanying elders have connected, coherent bodies and no visible duplicate or fused person. Brahma’s four arms/hands are distinct and attached; the three visible faces/crowns follow the contract’s front view, with its fourth head specified to face away behind the central head. The background Ashvamedha horse has a coherent head, body, and four legs at the scale shown.
- **Faces:** Main faces are legible and distinct; Brahma’s three front-visible faces are not merged. No malformed face is visible.
- **Hands/feet:** Vamana’s prop-holding hands have coherent grips. Both fully visible Vamana feet show five distinct toes each. No malformed or visibly missing digit is apparent on the other clearly depicted hands; small details on the seated elders are too small to resolve at native scale and show no visible error.
- **Clothing and cast:** The scene includes the initiation, sacred thread, staff, prayer beads, deer skin, sacred fire, Kashyapa, Brahma, elders, and the distant Ashvamedha setting. Traditional bare male torsos are ordinary dress. Brahma’s low ochre crowns and single understated bead strand fit the scene plan; the other clothing is modest.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or suspicious mark is visible in the corners, ground, or other inspected areas.
- **Scene and reference fidelity:** The candidate follows the planned upanayana and departure scene. The disclosed mismatch is present in photo 007, which shows a later foot-washing scene; the candidate does not reproduce that action.
- **Character/deity contract:** Vamana is a single-faced, two-armed indigo-blue brahmachari with thread and staff. Ordinary human skin samples: left elder upper arm at (145,502), median RGB (180,117,83), R−B **97**; right elder upper arm at (1480,480), median RGB (179,116,83), R−B **96**. Both read as natural warm brown, not orange. Brahma’s rose-ochre skin and four-arm/three-front-face depiction are consistent with his contract.
- **Verdict: pass.**

### Stanza 7 — `candidate-v012.png`

- **Version / verified checksum:** v012 — `dc2d9d59656d53aae9df191d8c38885410d8578ba812342e9943a9eb995c99e2`
- **Review time:** 2026-11-26T06:19:21Z
- **Anatomy:** Vamana has one face, two attached arms, and two connected legs in a natural walking pose. No accidental duplicate, extra limb, or malformed feature is visible.
- **Faces:** Vamana’s face is coherent at detail scale, with no distortion.
- **Hands/feet:** Both hands grip their respective props with coherent fingers. The planted and lifted feet are fully shown; each has five distinct toe contours at native scale.
- **Clothing and cast:** Simple cream/ochre brahmachari cloth and sacred thread; no crown or peacock feather. No other person or creature is present.
- **Text/signature artifacts:** No text, signature, logo, watermark, or corner/ground artifact is visible.
- **Scene and reference fidelity:** The full-bleed path, umbrella, staff, and subtly cracked/trembling ground match the stanza plan. Photo 008 is the mapped walking Vamana/props reference and the candidate re-composes that context as a mural scene.
- **Character/deity contract:** Vamana’s two-arm anatomy, youthful form, modest dress, and deep muted indigo-blue skin are consistent with the character contract and scene plan.
- **Verdict: pass.**

### Stanza 8 — `candidate-v007.png`

- **Version / verified checksum:** v007 — `d8c79aa11ed100257227aa23553d5bce360adc67e51efd6918932cbf74bbd32b`
- **Review time:** 2026-11-26T06:19:21Z
- **Anatomy:** Vamana has one face, two attached arms, and two legs. Shukra and the three seated elders have coherent human proportions and visibly distinct bodies; no fused or duplicated sage is apparent.
- **Faces:** Vamana, Shukra, and the sages have distinct coherent faces. The age, hair, and beard differences distinguish the elders. No malformed face is visible.
- **Hands/feet:** Vamana’s feet each show five distinct toes. Shukra’s brow-shading hand and lower open gesture each show five digits at the enlarged view. The other sages’ hands and feet are small in the full image; at native scale their digits are not fully resolvable, and no visible limb or digit is malformed.
- **Clothing and cast:** Vamana wears simple brahmachari cloth and carries umbrella/staff. Shukra and the seated sages have modest ascetic cloth. No sexualized framing or exposed skin beyond ordinary traditional dress is present.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or suspicious mark is visible, including around the river and lower ground.
- **Scene and reference fidelity:** Narmada, the sacrificial hall/altar, arriving Vamana, and elders shielding or narrowing their eyes are depicted. The disclosed deviation is present in photo 009, which shows a later cosmic Trivikrama stride; the candidate correctly avoids its giant four-armed form and instead shows the planned approach scene.
- **Character/deity contract:** All exposed human skin reads as natural muted umber/chestnut brown rather than orange or copper. Skin-only median R−B samples (face/arm) are: Shukra (773,235)/(680,191): **79/80**; elder 1 (1007,370)/(1005,478): **49/82**; elder 2 (1292,398)/(1220,520): **83/75**; elder 3 (1510,403)/(1510,620): **80/83**. All are below 100. Vamana reads as deep indigo-blue with two arms; sage styling is not duplicated.
- **Verdict: pass.**

### Stanza 9 — `candidate-v010.png`

- **Version / verified checksum:** v010 — `3c608b19587ab3518231541ee0c1e8857f7fa7d65276d9e6a7bbaffdb419a6f1`
- **Review time:** 2026-11-26T06:19:21Z
- **Anatomy:** Bali and Vamana each have one face and ordinary connected limbs; the sages remain distinct. No duplicated person or malformed body is visible.
- **Faces:** Bali’s bowed face and Vamana’s calm face are coherent; the sages’ faces remain individually distinct.
- **Hands/feet:** The cupped hand at Bali’s crown shows one thumb and four separate fingers. The other hand supports the pouring vessel with a coherent grip. Vamana’s joined hands are not visibly malformed. His two visible feet each show five toes. Small sage extremities do not resolve fully at native scale and show no visible error.
- **Clothing and cast:** Bali’s crown and royal clothes are appropriate to the contracted Asura king; Vamana’s dress is modest brahmachari cloth. The sages are modestly clothed. No inappropriate exposure is present.
- **Text/signature artifacts:** No text, signature, logo, watermark, or ground/corner artifact is visible.
- **Scene and reference fidelity:** Bali washes Vamana’s feet at a basin; a visible stream arcs from the feet to Bali’s cupped hand at his crown and continues over his head. Photo 010’s canopy welcome is used as context; the candidate supplies the planned washing gesture that is not clear in the reference.
- **Character/deity contract:** Bali’s exposed skin reads as natural muted chestnut brown, not orange. Skin-only median R−B samples are face (1057,424): **60**, and visible arm (1110,300): **74**. Bali is a single-faced two-armed adult; Vamana is two-armed and indigo-blue.
- **Verdict: pass.**

### Stanza 10 — `candidate-v008.png`

- **Version / verified checksum:** v008 — `39e9fd008121a117fe481170850bb7956df2ceb51a5282d82b7959a4d7ca3314`
- **Review time:** 2026-11-26T06:19:21Z
- **Anatomy:** Vamana’s parasol arm and relaxed arm are both visible and attached from the shoulder through the wrist; the second arm is not hidden by the raised leg or cloth. Bali and Shiva have coherent connected bodies; Shiva is a distinct single-headed seated figure. No duplicate or fused figure is visible.
- **Faces:** Vamana, Bali, and Shiva have coherent, distinguishable faces. Shiva’s marks and crescent are clearly placed in his hair; no malformed features are visible.
- **Hands/feet:** Vamana’s relaxed open hand shows one thumb and four fingers. Both visible Vamana feet have five toes, including the raised foot. Bali’s joined hands and Shiva’s resting lap hands show no visible malformed digits; no other main-figure foot is exposed for a count.
- **Clothing and cast:** Vamana wears simple cream/ochre brahmachari cloth; Bali’s crown and clothing are courtly and modest; Shiva wears restrained ascetic cloth and ornaments. No sexualized framing or excessive exposure is visible.
- **Text/signature artifacts:** No text, signature, logo, watermark, or suspicious mark appears in the sky, river, ground, or corners.
- **Scene and reference fidelity:** The continuous water path visibly touches Vamana’s raised foot, Bali’s bowed head, and continues to Shiva’s matted hair. This is the disclosed canonical-only scene: no photo or caption is mapped for stanza 10.
- **Character/deity contract:** Bali’s skin reads as natural muted brown, not orange; face (710,551) and arm (760,637) median R−B samples are **74** and **71**. Vamana is deep indigo-blue and two-armed; Shiva is a distinct blue-grey, two-armed meditating form with Ganga in his hair.
- **Verdict: pass.**

## Commands and evidence record

- Generated the expected checksum manifest programmatically from the task brief and ran `sha256sum -c .review-scratch/d030-review-lb/expected.sha256`; all 23 candidate/reference/contract/mapping entries returned `OK`.
- Ran `identify` on all five candidate PNGs; each reported `PNG 1672x941`.
- Inspected all five native candidate images and local intake photos 007–010. The OneDrive files 007–010 were present and their SHA-256 values exactly matched the local reference photos and expected values above.
- Created detail crops only with `magick ... -crop ... +repage <absolute-scratch-path>` under `.review-scratch/d030-review-lb/`. No in-place image operation was run.

## Recommendation and captain-call inventory

All five exact-checksum candidates pass this independent visual review. Keep every asset unapproved; this report does not grant artwork approval. No unresolved captain decision was raised by this review. The pending captain art approval is the existing standing state, not a new call from this report. **Captain-call inventory for this review: empty.**
