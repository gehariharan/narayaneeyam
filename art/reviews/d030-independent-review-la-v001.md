# D030 landscape candidate review

## Scope and result

I independently reviewed the five selected landscape candidates against the byte-frozen final plan, the listed character contracts, the mapped reference photos, and the D030 reference map/captions. This is a visual review bound to each candidate checksum; it is not artwork approval. All reviewed artwork remains unapproved. The review found no viewer-noticeable defect under the supplied verdict standard, so all five images pass for their exact checksums.

The chapter plan and captions disclose that photo 001 is a split Bali/Shukra collage without the withdrawing Devas, and that photos 005 and 006 both map to stanza 5 even though 005 depicts the birth and 006 is closer to the celebration/Vamana scene. Those disclosed deviations are present. The candidates follow the planned canonical scenes rather than copying the mismatched photo content. References are contextual only.

## Verification and method

The expected hashes were assembled programmatically into `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/.review-scratch/d030-review-la/expected-sha256.txt`, then checked with:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/.review-scratch/d030-review-la/expected-sha256.txt'
```

Output: `OK` for every candidate, reference photo, contract, reference map, and caption file listed below. The six OneDrive reference counterparts were also present; their hashes were generated into `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/.review-scratch/d030-review-la/onedrive-reference-sha256.txt` and `sha256sum -c` returned `OK` for all six, matching the local references byte-for-byte. A mismatch would have stopped this review; none occurred. `identify` reported each candidate as 1672×941 PNG (16:9 landscape). I inspected every full candidate at native resolution, then inspected focused crops made with `magick ... -crop ... +repage` into the scratch directory named above. Crops were read-only derivatives; originals were never altered. I also inspected each mapped reference photo at full view. Skin medians below are from 20×20 pixel skin-only patches exported as raw RGB from the candidate, with channel medians calculated mechanically; coordinates use the candidate's native pixel grid. `R−B` is median red minus median blue.

### Contract and source hashes

All values below are the actual SHA-256 values checked and read; each matched its expected value.

| File | SHA-256 |
|---|---|
| Frozen plan `art/plans/d030.json` | `e1ac0ddacae7cf89fc615c0aa01e8aaa31043f1dd316ef1dfe4fa2ef04c08fa3` |
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

### Candidate and reference hashes

| Stanza | Candidate | SHA-256 | Mapped reference photo(s) and verified SHA-256 |
|---|---|---|---|
| 1 | `artifacts/d030/s001/landscape/candidate-v005.png` | `4dc3bc9e449533c229ca22e21b120126e857888fe2e59f91258f5d5a07cfaec6` | `001.jpg` `87b94e530a43a9d90d18cf80c44c70c640f22cbd627bcb4956d61954136d8738` |
| 2 | `artifacts/d030/s002/landscape/candidate-v003.png` | `4b79cc356df930cd6db7c80e5d3867dbef91a9da2fbf6234a7a3b1c3c2b331f4` | `002.jpg` `6404009da410ef2166fb1a47c4c0de25d83b6c3a765149f80166b164ac394f60` |
| 3 | `artifacts/d030/s003/landscape/candidate-v010.png` | `3fb731ba17749f6343fc67e861d2b0303a7984a33effca590ed172ce98307e8d` | `003.jpg` `82122c773e0c94ca6e33f1070675538037e8eca6464bdabe0ccadbf18fc1bf73` |
| 4 | `artifacts/d030/s004/landscape/candidate-v010.png` | `89f23fba2f960961586ebd2f3d5140fe061bee5dbb5f480edf0c5388c895d1f4` | `004.jpg` `e1704317f7a90685f9a6127f6ef8a67d2cb28e9e0b1a31d664d2b6dc2accf33c` |
| 5 | `artifacts/d030/s005/landscape/candidate-v019.png` | `17d49d60dc9e0b25db203ac49afe20b9ad50760cf406675d218bc58ae0f9d2f1` | `005.jpg` `e6a9c00a672c8379ee6a92e72fbb6e91d787483e4d7f4ca7ca4817e346670520`; `006.jpg` `967e36e6b52931328b4d031369ec53c713dd20a54bebb621987b3f5b63013b1c` |

## Image-specific findings

### Stanza 1 — candidate-v005

**Independent review time:** 2026-11-26T06:18:57Z. **Verdict: pass** for SHA-256 `4dc3bc9e449533c229ca22e21b120126e857888fe2e59f91258f5d5a07cfaec6` only.

- **Anatomy:** Bali, Shukra, and the three withdrawing Devas are distinct, connected figures with no visible extra, missing, or fused limbs. At native size and in the Bali/Shukra/Deva detail crops, faces and body proportions read cleanly.
- **Faces:** Bali's single face and crown are coherent; Shukra's aged face, white hair, and beard are distinct from Bali; the three Deva faces are individually separated. No malformed or duplicated person is visible.
- **Hands/feet:** Bali's two visible hands each show five digits; both unobstructed bare feet show five distinct toes (detail crop spans native image x=0–650, y=240–980). Shukra's ritual hand and joined hand show coherent digits, with the pointing hand's thumb and four fingers discernible. The small Devas' visible hands are consistent with ordinary five-digit gestures; their most distant details are too small for finer toe/finger resolution and show no visible error.
- **Clothing and cast:** Bali's courtly crown, bare upper torso, and royal garments are ordinary traditional depiction and consistent with the Bali contract. Shukra wears restrained ascetic drapery and beads. The three distinct retreating Devas fit the scene plan. Bare male torso is ordinary traditional dress.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or stray mark is visible in the sky, ground, grass, or corners. No separate border or glossy/metallic treatment is visible.
- **Scene and reference fidelity:** The broad court, continuous horizon, Bali and Shukra at one side, and three Devas withdrawing at the other are present. The plan/map disclose that photo 001 is a Bali/Shukra split collage and omits Indra and hidden Devas; that mismatch is present in the reference. The candidate follows the canonical planned scene rather than reproducing the collage.
- **Character/deity contract and skin:** Bali, Shukra, and Deva depictions match their ordinary one-face/two-arm contracts; no deity-form mismatch occurs. Skin-only 20×20 patches: Bali at (360,390) RGB median (174,103,57), R−B **117**; Shukra at (990,545) (178,104,59), **119**; Deva at (1400,400) (177,104,59), **118**. Each reads as natural warm brown to the viewer, not orange.

### Stanza 2 — candidate-v003

**Independent review time:** 2026-11-26T06:18:57Z. **Verdict: pass** for SHA-256 `4b79cc356df930cd6db7c80e5d3867dbef91a9da2fbf6234a7a3b1c3c2b331f4` only.

- **Anatomy:** Aditi and Kashyapa have connected, proportionate adult bodies and clearly separated limbs. Their seated poses, hands, and milk bowl are coherent; no malformed or duplicated person is visible.
- **Faces:** Aditi's single face is readable and concerned; Kashyapa's single bearded face is calm and distinct. No malformed features.
- **Hands/feet:** Aditi's joined hands are coherent; her one exposed foot shows five toes. Kashyapa's teaching gesture has one raised index, three curled fingers, and a thumb; the resting hand has four visible fingers with the thumb obscured naturally by pose. His feet are covered by his seated drapery. No visible digit error.
- **Clothing and cast:** Aditi's sari and veil are modest and consistent with her contract. Kashyapa's simple ascetic garment, topknot, and beads fit his contract. The bowl of milk and modest altar are present.
- **Text/signature artifacts:** No text, logo, watermark, signature, or stray mark appears in the full frame or corners. The matte mural treatment is consistent with the series.
- **Scene and reference fidelity:** Aditi and Kashyapa sit in a quiet riverside hermitage, with the milk offering and altar. Reference 002 aligns with their interaction; the image correctly adds the planned payovrata context rather than copying the photo literally.
- **Character/deity contract and skin:** Both characters have one face and ordinary two-arm anatomy. Skin patches: Aditi at (350,570) median RGB (174.5,108,57), R−B **117.5**; Kashyapa at (985,470) (237,182,115), **122**. Both read as natural warm brown, not orange. Kashyapa's sampled patch is two points above the plan's approximate below-120 guide, but the full image does not visibly read orange; this is not a viewer-noticeable defect under the stated verdict rule.

### Stanza 3 — candidate-v010

**Independent review time:** 2026-11-26T06:18:57Z. **Verdict: pass** for SHA-256 `3fb731ba17749f6343fc67e861d2b0303a7984a33effca590ed172ce98307e8d` only.

- **Anatomy:** Vishnu has exactly four attached arms and one face. The upper hands hold the discus and conch, a lower hand holds the mace, and the other lower hand gives the blessing. Aditi is a single, proportionate figure. No extra or fused limbs are visible.
- **Faces:** Vishnu's serene face is coherent; Aditi's face is distinct and attentive. No malformed or duplicate figures.
- **Hands/feet:** Vishnu's open blessing palm clearly shows a thumb and four fingers in the focused crop (native region x=700–1350, y=250–620). His other hands connect cleanly to their attributes. Both visible feet have five coherent toes each. Aditi's joined hands are formed cleanly; no visible digit defect.
- **Clothing and cast:** Aditi wears a modest sari and veil. Vishnu has one restrained neck ornament, simple diadem, earrings, cream/maroon drapery, and no peacock feather or Krishna-only mark. The ornament is restrained, with no heavy layered neck, arm, or waist jewelry.
- **Text/signature artifacts:** No writing, watermark, signature, or logo appears in the hermitage, floor, or corners. No added radiance or cinematic beams are present.
- **Scene and reference fidelity:** Aditi kneels before Vishnu in a simple hermitage; the mapped reference's ornate stage and radiant effects are not copied, as the plan directs.
- **Character/deity contract and skin:** Vishnu's indigo-blue mineral skin and four-arm form match the scene contract; his 20×20 torso patch at (600,350) has median RGB (35,61,96), blue-minus-red **61**. Aditi's skin patch at (1180,620) is (163,101,68), R−B **95**; she reads as natural muted brown, not orange.

### Stanza 4 — candidate-v010

**Independent review time:** 2026-11-26T06:18:57Z. **Verdict: pass** for SHA-256 `89f23fba2f960961586ebd2f3d5140fe061bee5dbb5f480edf0c5388c895d1f4` only.

- **Anatomy:** Aditi cradles one infant with one coherent face, exactly four attached arms, and two visible feet. Each arm connects to a hand holding one attribute: discus, conch, mace, or lotus. Kashyapa sits nearby with joined hands and connected anatomy. No duplicated baby or malformed body part is visible.
- **Faces:** Aditi, Kashyapa, and the infant each have one coherent face. Their expressions and facial features remain legible in the native image and birth detail crop.
- **Hands/feet:** The infant's two feet are visible and each shows five distinct toes. Aditi's supporting hand shows coherent separated fingers where not covered by the infant; her other arm supports the child naturally. Kashyapa's joined hands are connected and anatomically plausible. No visible digit error.
- **Clothing and cast:** Aditi's sari is modest. The infant wears one short neck strand, with no second or layered necklace; its other small ornaments do not obscure the neck. Kashyapa's simple ascetic dress and beads are consistent with his character contract.
- **Text/signature artifacts:** No text, signature, logo, watermark, or stray mark is visible in the room, floor, or corners. The frame has no cosmic effects or outer border.
- **Scene and reference fidelity:** The intimate hermitage birth is present, with Kashyapa nearby. Reference 004's cosmic devotional display is omitted in accordance with the plan's explicit recompose instruction.
- **Character/deity contract and skin:** The infant's exposed skin is deep muted indigo-blue; face patch at (570,395) median RGB (17,49,109), B−R **92**, and torso patch at (580,520) (17,51,113), **96**, both above the required 45. Aditi patch at (430,200) is (168,98,62), R−B **106**; Kashyapa patch at (1380,480) is (166,96,58), **108**. Both human figures read as warm brown, not orange. The infant has the contracted single face and four arms.

### Stanza 5 — candidate-v019

**Independent review time:** 2026-11-26T06:18:57Z. **Verdict: pass** for SHA-256 `17d49d60dc9e0b25db203ac49afe20b9ad50760cf406675d218bc58ae0f9d2f1` only.

- **Anatomy:** The scene contains one two-armed young Vamana and exactly two separate Devas. Aditi and Kashyapa are distinct, proportionate figures. Their poses and the Devas' flower baskets and gestures are connected; no malformed or duplicated figure is visible.
- **Faces:** Vamana has one clear face. The younger Deva is clean-shaven with a rounded low crown; the elder is visibly older, gray-bearded, and wears a taller plain crown. Their facial features and silhouettes are distinguishable. Aditi and Kashyapa have coherent faces.
- **Hands/feet:** Vamana's two visible hands hold the staff and parasol; both feet visibly have five toes. The younger Deva's open flower-scattering hand shows a thumb and four fingers in the enlarged hand crop. Basket-holding hands remain connected and plausible; the joined hands of Aditi and Kashyapa are clear. No digit error is visible.
- **Clothing and cast:** Aditi and Kashyapa wear modest traditional garments and restrained ornaments. The younger Deva has a low rounded matte-ochre crown and the elder a simple taller matte-ochre crown with an olive garment; neither has tiers, gems, medallions, or layered neck/chest jewelry. Vamana's brahmachari garment and sacred thread are present. The empty cradle, folded indigo infant cloth, and four separate attribute tokens (discus, conch, mace, lotus) are clearly visible. No baby or second Vamana is present.
- **Text/signature artifacts:** The full image and close views of ground, grass, and corners show no readable text, logo, watermark, signature, or generation mark. The source photos' embedded lettering is not carried into the candidate.
- **Scene and reference fidelity:** The image follows the planned continuous hermitage celebration. Both supplied photos are mismatched/context-only in the disclosed ways: 005 shows Aditi with the newborn and 006 shows youthful Vamana among celestial figures. The candidate depicts the stanza 5 celebration and transition using the planned empty cradle, cloth, and tokens rather than copying photo 005's birth scene or photo 006's digital/cosmic staging.
- **Character/deity contract and skin:** Vamana has the contracted two arms, parasol, staff, and indigo-blue skin; face patch at (740,190) median RGB (49,65,100), B−R **51**, and torso patch at (740,315) (49,65,99), **50**, both above the required 45. Warm-brown patches: Kashyapa (150,320) RGB (177,105,64), R−B **113**; Aditi (385,230) (176,104,63), **113**; younger Deva (1020,230) (179,106,64), **115**; elder Deva (1345,370) (177,104,63), **114**. All read as natural warm brown, not orange.

## Recommendation and inventory

Retain these exact five candidates as visually passed review inputs; the verdicts do not approve the art or authorize changes to `art/approved/`. No image-specific defect or unresolved question in this review requires a captain decision. Captain-call inventory for this review: **empty**. The standing pending art approval is unchanged and is not raised by this report.
