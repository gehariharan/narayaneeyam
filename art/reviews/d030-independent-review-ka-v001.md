# D030 landscape candidates: independent visual review

Review completed 2026-11-26 05:52 UTC. This is an independent exact-checksum review of the five selected landscape candidates against the frozen D030 plan and character contracts. Each verdict applies only to the candidate SHA-256 recorded below. The images remain unapproved; this report does not change `art/approved/` or confer approval.

## Method and hash binding

I opened every candidate at its native 1672 × 941 pixels and inspected focused crops of faces, limbs, hands, feet, crowded figures, attributes, clothing, ground, water/grass, and corners. Crops and scratch measurements were written only under this worktree's `.review-scratch/`; source candidates, intake photos, contracts, source text, and manifests were read-only.

I generated `.review-scratch/sha256-expected.txt` from the expected-path/hash pairs in the task brief and ran:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/sha256-expected.txt'
```

Every listed input returned `OK` on the initial check and again after inspection. This covered all five candidates, mapped reference photos 001–006, `content/sources/d030/reference-map.json`, `intake/D030/photo-captions.txt`, the final frozen plan, and all ten frozen character contracts. `identify -format '%f %wx%h\n'` reported 1672 × 941 for each candidate. The six present OneDrive reference copies also returned the same SHA-256 as their local intake counterparts.

### Contract/source hashes actually read

| File | SHA-256 |
|---|---|
| Frozen final plan `art/plans/d030.json` | `cfcd0c9832d39b39169a1e8037ccb17b05a23591a82693807e52b05d030b9804` |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d031-vamana/character.json` | `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229` |
| `art/bible/characters/d031-mahabali/character.json` | `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9` |
| `art/bible/characters/d031-shukracharya/character.json` | `c493d4cfa5d61cb35e6cf5b318819d563f98825038ba456fd5a47fb37658b3c8` |
| `art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |
| `art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/d030-aditi/character.json` | `94c8ed8be0a948ad2b58b754f06fe0f48ed06c9b39c8a75908b676cdb2cdc92a` |
| `art/bible/characters/d030-kashyapa/character.json` | `3a4bfe53bece23fc17b2a86fde28ce6e0923c61940b657f240fad89b556d281f` |
| `content/sources/d030/reference-map.json` | `22c4e7d2ae46cf32216e583957d6980ab342b15d66285c75f186190e150ff719` |
| `intake/D030/photo-captions.txt` | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` |

Plan line references below point into the frozen plan at `/home/gehariharan/firstmate-narayaneeyam-mate/data/d030-production/review-contract-k/art/plans/d030.json`. Relevant character clauses are: Bali and Shukra, anatomy and continuity, `d031-mahabali` lines 6–8 and `d031-shukracharya` lines 6–8; Aditi/Kashyapa, anatomy and clothing, their files lines 6–9; Vamana, anatomy, simple brahmachari dress, sacred thread, parasol/staff, lines 6–10; Vishnu, blue skin, four-arm modes, restrained matte style, lines 14–31; Devas, distinct adult witnesses, two arms and modest attire, lines 10–20.

### Skin sampling

I measured median per-pixel red-minus-blue values from skin-tone pixels in focused candidate crops (RGB channel filter used to exclude dark contours and non-skin hues). Measurements: stanza 1 Bali `116`; stanza 2 Aditi/Kashyapa `110`; stanza 3 Aditi `99`; stanza 4 Aditi `110`; stanza 5 Aditi/Kashyapa/Devas `103`. The measured skin reads as natural warm brown in each full image, not orange. For required divine blue, Vishnu in stanza 3 measured median blue-minus-red `61`; the stanza 4 infant measured `93`; stanza 5 Vamana measured `51`. Those samples read as deep muted indigo-blue.

## Individual candidate findings

### Stanza 1 — d030-s001, landscape candidate-v005


Review time (UTC): 2026-11-26 05:52:55
Candidate: `artifacts/d030/s001/landscape/candidate-v005.png`  
SHA-256: `4dc3bc9e449533c229ca22e21b120126e857888fe2e59f91258f5d5a07cfaec6`  
Plan: stanza 1 lines 43–81, especially `must_show` at 57–60 and composition at 61; mapped photo 001. The plan explicitly discloses that photo 001 is a split Bali/Shukra portrait collage without Indra/hidden Devas; that deviation is present in the reference, and I judged the candidate against the canonical scene as instructed.

- **Anatomy:** Bali and Shukra each have one face, two arms, and connected adult proportions. Three distinct withdrawing Devas are present. No duplicated or fused body, extra/missing limb, or malformed creature is visible.
- **Faces:** Bali's face is clear and distinct; Shukra is visibly an elderly ascetic with white hair/beard; the three Deva faces remain separate. No malformed face.
- **Hands/feet:** Bali's two resting hands each show five digits. Both required bare feet are unobstructed; I count five toes on each. Shukra's raised prayer hand shows five fingers; his ritual hand holds the implement naturally. The Devas' retreating limbs and feet look connected and proportionate at the displayed scale.
- **Clothing and cast:** Bali's courtly crown and royal garments fit his contract; his exposed torso is ordinary traditional male dress. Shukra's restrained ascetic robes and beads fit his contract. The Devas are distinct and modestly dressed. No sexualized framing or exposed skin beyond ordinary dress.
- **Text/signature artifacts:** No readable text, caption, signature, logo, watermark, or suspicious mark in the ground, foliage, or corners.
- **Scene/reference fidelity:** The broad court, Bali, Shukra's ritual fire, continuous land horizon, and three withdrawing Devas follow the plan. The reference's split portraits are context only; the candidate does not copy their collage layout.
- **Character/deity contract:** Bali and Shukra retain their specified single-face, ordinary anatomy and identity cues; generic Devas have two arms. Skin sample R−B median is `116`, visibly brown. Matte mineral palette and dark contours are consistent with the series.
- **Verdict: pass.**

### Stanza 2 — d030-s002, landscape candidate-v003


Review time (UTC): 2026-11-26 05:52:55
Candidate: `artifacts/d030/s002/landscape/candidate-v003.png`  
SHA-256: `4b79cc356df930cd6db7c80e5d3867dbef91a9da2fbf6234a7a3b1c3c2b331f4`  
Plan: stanza 2 lines 84–121, especially `must_show` at 97–100 and composition at 101; mapped photo 002 aligns with Aditi approaching Kashyapa.

- **Anatomy:** Aditi and Kashyapa each have one face and two connected arms. Their seated poses are coherent; no fused or duplicated person or extra limb is visible.
- **Faces:** Aditi's serious, intent expression reads as a request for help; Kashyapa's face is calm and benevolent. Neither face is malformed.
- **Hands/feet:** Aditi's joined hands show five fingers on each hand, with natural contact. Her visible bare foot shows five toes; her other foot is covered by her seated sari. Kashyapa's teaching hand has five digits (index raised, remaining fingers curled); his resting hand has five. His crossed feet are covered by his seated garments. The milk bowl is separate and connected to the altar arrangement.
- **Clothing and cast:** Aditi's sari and veil are modest with restrained jewelry. Kashyapa's simple cream/ochre ascetic garments, grey hair, and beads fit his contract. Only the two intended people appear.
- **Text/signature artifacts:** No text, signature, logo, watermark, or ground/corner mark is visible.
- **Scene/reference fidelity:** Quiet hermitage, Aditi's appeal, Kashyapa's instruction, milk bowl, and altar are all present. The photo's approach composition is followed only as scene context; the canonical twelve-day payovrata remains the subject.
- **Character/deity contract:** Both human figures retain warm muted brown skin: sampled R−B median `110`, read as brown rather than orange. Clothing, age cues, and matte mural rendering fit the Aditi/Kashyapa and series contracts.
- **Verdict: pass.**

### Stanza 3 — d030-s003, landscape candidate-v010


Review time (UTC): 2026-11-26 05:52:55
Candidate: `artifacts/d030/s003/landscape/candidate-v010.png`  
SHA-256: `3fb731ba17749f6343fc67e861d2b0303a7984a33effca590ed172ce98307e8d`  
Plan: stanza 3 lines 124–161, especially `must_show` at 137–140 and composition at 141; mapped photo 003 supports the divine appearance but its ornate stage/radiance is expressly not rendering guidance.

- **Anatomy:** Vishnu has one face and exactly four attached arms; the two upper arms and two lower arms are individually traceable to the torso. Aditi has one face, two arms, and a coherent kneeling pose. No duplicates, fusions, or malformed bodies are visible.
- **Faces:** Vishnu's face is serene and proportionate; Aditi's attentive face is distinct. No malformed facial features.
- **Hands/feet:** Vishnu's lower blessing palm has a thumb and four fingers (five digits total), clearly visible; his other three hands hold the discus, conch, and mace. His two blue feet are visible and naturally formed; toe detail is small but no wrong digit is visible at native scale. Aditi's joined prayer hands show five fingers per hand; her feet are covered by her sari.
- **Clothing and cast:** Aditi wears a modest sari and veil with restrained ornaments. Vishnu wears cream/maroon/ochre cloth, a simple headband/diadem, one modest neck ornament, and simple wrist bands; no peacock feather or Krishna-only adornment. Only the planned two figures appear.
- **Text/signature artifacts:** No lettering, caption, signature, watermark, or mark is visible in the blank wall, plants, floor, or corners.
- **Scene/reference fidelity:** The image shows Vishnu appearing before Aditi in a simple hermitage, with the blessing gesture and all three attributes legible. The reference's ornate stage and radiant effects are absent, as required.
- **Character/deity contract:** Vishnu's matte deep indigo-blue skin has a measured blue-minus-red median of `61`, clearly blue; his arm count and attributes match the scene-specific contract. Aditi's sampled R−B median is `99`, and her skin reads as warm brown, not orange. Ornament remains restrained.
- **Verdict: pass.**

### Stanza 4 — d030-s004, landscape candidate-v010


Review time (UTC): 2026-11-26 05:52:55
Candidate: `artifacts/d030/s004/landscape/candidate-v010.png`  
SHA-256: `89f23fba2f960961586ebd2f3d5140fe061bee5dbb5f480edf0c5388c895d1f4`  
Plan: stanza 4 lines 164–202, especially `must_show` at 178–181 and composition at 182; mapped photo 004 contains a cosmic devotional composition, which the plan says to recompose without.

- **Anatomy:** Aditi, Kashyapa, and the newborn each have one face. The infant has exactly four attached arms, one coherent torso, and two legs/feet. Aditi cradles the child with connected arms; Kashyapa is a separate kneeling figure. No duplication or fusion is visible.
- **Faces:** Aditi's face is calm and maternal; Kashyapa's face is distinct and prayerful; the infant's face is coherent at its small scale. No malformed face.
- **Hands/feet:** Aditi's supporting hands have natural five-digit shapes where visible; Kashyapa's joined prayer hands show five fingers on each hand. The infant's four hands hold the attributes without a visible extra or missing digit. The infant's toes are too small to resolve reliably at native size; this is a scale observation, not a defect, and no malformed foot is visible. Aditi's feet are covered.
- **Clothing and cast:** Aditi's modest sari, veil, and restrained ornaments fit her contract; Kashyapa's cream/ochre ascetic clothing and hair/beard fit his. The infant has one simple short neck strand; no second or overlapping necklace is present. No sexualized framing.
- **Text/signature artifacts:** No text, signature, logo, watermark, or suspicious mark appears in the room, floor, window, or corners.
- **Scene/reference fidelity:** Intimate hermitage birth with Aditi holding the newborn and Kashyapa nearby. The reference's cosmic staging and radiant effects are removed. The four attributes remain legible and do not obscure the scene.
- **Character/deity contract:** Infant blue sample has median blue-minus-red `93`, visibly deep muted indigo-blue; Aditi's warm skin R−B median is `110`, visibly brown and not orange. The infant's single face, four arms, two feet, and single neck strand match the plan and D027 Vishnu contract for this manifestation.
- **Verdict: pass.**

### Stanza 5 — d030-s005, landscape candidate-v019


Review time (UTC): 2026-11-26 05:52:55
Candidate: `artifacts/d030/s005/landscape/candidate-v019.png`  
SHA-256: `17d49d60dc9e0b25db203ac49afe20b9ad50760cf406675d218bc58ae0f9d2f1`  
Plan: stanza 5 lines 205–253, especially `must_show` at 221–230 and composition at 232; mapped photos are 005 and 006. The disclosed mismatch is present: photo 005 depicts Aditi holding the newborn rather than the celebration, while 006 suggests youthful Vamana among celestial figures but includes unsupported digital/celestial staging. The candidate follows the canonical stanza, not the mismatched birth image or the photo's bars/logo/staging.

- **Anatomy:** Aditi and Kashyapa each have one face and two connected arms; exactly one two-armed Vamana stands between them and the two distinct Devas. All figures have coherent adult/youthful proportions. No duplicated Lord, fused people, or malformed body is visible.
- **Faces:** Aditi, Kashyapa, young clean-shaven Deva, older grey-bearded Deva, and Vamana are individually legible. The two Deva faces, hair, crowns, clothing, and poses are distinct. No malformed or duplicated face.
- **Hands/feet:** The young Deva's open flower-scattering hand has one thumb plus four fingers. Aditi's and Kashyapa's joined hands show five fingers on each hand. Vamana's two hands remain attached while holding parasol and staff. Both Vamana feet are visible with five toes each; the visible Aditi and Kashyapa feet and the Devas' feet are connected, with five toes on each foot where the toe contours resolve at native scale. No digit error is visible.
- **Clothing and cast:** Aditi's sari and Kashyapa's simple ascetic clothing are modest. The young Deva has a plain low rounded crown; the older Deva has a plain taller ochre crown and olive garment. Neither has layered neck/chest regalia. Vamana's saffron/cream brahmachari clothing and sacred thread, with parasol and staff, fit his contract. The empty cradle, folded indigo cloth, and separate discus, conch, mace, and lotus tokens are present.
- **Text/signature artifacts:** No text, signature, logo, watermark, or suspicious marks are visible in the ground, vegetation, or corners.
- **Scene/reference fidelity:** The continuous hermitage scene includes Aditi and Kashyapa praising with joined hands, exactly two Devas showering flowers, one young Vamana, the empty cradle, folded indigo cloth, and all four attribute tokens. The photo mismatch is disclosed above; the image correctly depicts the planned stanza-5 transition.
- **Character/deity contract:** The two Devas are distinct adult witnesses with two arms and modest attire. Vamana has one face, two arms, youthful proportions, and deep blue skin; measured blue-minus-red median is `51`, visibly indigo-blue. Human skin R−B median is `103`, read as warm brown rather than orange. The scene uses the matte mural treatment and simple Vamana dress.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All five exact candidate versions pass this independent visual review. Keep them unapproved pending the separate human art-approval step; no approval manifest was read or changed. This review raises no captain decision. The pending captain art approval is the standing state and is not a decision raised by this review. My captain-call inventory for this review is empty.
