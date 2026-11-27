# Independent visual review — D030 stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates against the frozen final plan, the listed character contracts, the local references and their captions. Each candidate was viewed at native resolution (1672×941) and in focused, non-destructive detail crops saved under the reviewing worktree’s `.review-scratch/`. The reference photos were also viewed individually. The same six numbered photos are present in the specified OneDrive intake directory and each has the same SHA-256 as its local counterpart.

I read the exact frozen plan and character files listed below. The candidate/reference/source checks and all contract checks were put in one 25-entry list generated programmatically from the brief and verified with `sha256sum -c`; every entry returned `OK`. The first 13 entries are candidates, references, map and captions; the remaining 12 are the plan, series bible and character contracts. Candidate dimensions were checked with `identify`. Focused crops and patch medians were produced with ImageMagick in `.review-scratch/`; no source image was edited. I did not inspect existing review records or producer notes. No project source, candidate, master, or approval manifest was changed.

## Contract and source checksums

Actual SHA-256 values of the exact files read (all verified `OK` by the generated `sha256sum -c` list):

| File | SHA-256 |
|---|---|
| Frozen final `art/plans/d030.json` | `a09c8cfeea11a0e75df67ee527b8d5c08fa7da5e9600c57e73708e94a58f6041` |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
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
| `content/sources/d030/reference-map.json` | `623008011dbe4abf33efdfbbbe7772a5ce1b6a12fecbcf536a0aa66b8f66b79f` |
| `intake/D030/photo-captions.txt` | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` |

Relevant source locations: series style and palette rules are in `series.json:3–60`; plan stanzas are at `d030.json:43–79` (S001), `84–119` (S002), `124–159` (S003), `164–200` (S004), and `205–245` (S005). The mapped reference descriptions are at `reference-map.json:13–70`; corresponding supplied captions are at `photo-captions.txt:1–30`. Character constraints used include Vamana’s two-arm form and brahmachari items (`d031-vamana/character.json:5–10`), Bali and Shukra anatomy and continuity (`d031-mahabali/character.json:5–8`; `d031-shukracharya/character.json:5–8`), Vishnu’s muted indigo and scene-specific four-arm form (`d027-vishnu/character.json:13–31`), Devas’ warm-brown skin, modest crowns and two-arm anatomy (`devas/character.json:5–20`), and Aditi/Kashyapa continuity (`d030-aditi/character.json:5–9`; `d030-kashyapa/character.json:5–9`).

The reference-map-declared deviations are present: S001’s photo is a split Bali/Shukra collage without the withdrawing Devas; S004’s photo adds cosmic staging; S005 photo 005 shows Aditi holding a newborn rather than the celebration and transformation. Photo 006 is closer to the youthful Vamana context. Those deviations were treated as story context, and each candidate was judged against the canonical stanza and plan. S002’s photo aligns with Aditi’s appeal; S003’s supports the divine appearance but its stage and radiant effects are excluded from the plan.

## Image-specific findings

### Stanza 1 — `candidate-v005.png`

- **Candidate and binding:** `artifacts/d030/s001/landscape/candidate-v005.png`; SHA-256 `4dc3bc9e449533c229ca22e21b120126e857888fe2e59f91258f5d5a07cfaec6`; native size 1672×941. Reviewed **2026-11-26T09:09:47Z**. Bound to the frozen plan SHA-256 above and its S001 entry (`d030.json:43–79`). Reference: `intake/D030/001.jpg`, SHA-256 `87b94e530a43a9d90d18cf80c44c70c640f22cbd627bcb4956d61954136d8738`.
- **Anatomy:** Bali, Shukra and three withdrawing Devas are distinct, connected figures. Bali’s body and limbs are proportionate; no duplicate or fused person is visible. The three distant Devas are small; their finer digits are not resolvable at native size, which is an observation rather than a defect.
- **Faces:** Bali, Shukra and each Deva have distinct, coherent faces. No malformed or duplicate face is visible.
- **Hands and feet:** Bali’s two resting open hands each show five digits. Both required unobstructed bare feet show five separate toes each. Shukra’s prayer/rite gestures are not open palms; his hand at the fire is occupied with the rite. Devas’ joined hands and small feet have no visible error; the finer digits/toes are too small to resolve at native size.
- **Clothing and cast:** Bali’s royal crown and garments read as courtly; his bare upper torso is ordinary traditional dress. Shukra’s white hair and ascetic clothing distinguish him from Bali. Exactly three withdrawing Devas appear at the other side of the continuous horizon. No exposed skin beyond ordinary dress or sexualised framing.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or suspicious mark is visible in the ground, foliage, water, or corners. No outer border or glossy/metallic effect is visible.
- **Scene and reference fidelity:** The disclosed collage mismatch is present in the reference. The candidate composes the canonical court scene: Bali restored and ruling, Shukra performing the rite at the fire, and Devas withdrawing. It does not copy the split portrait collage or add graphic battle.
- **Character/deity contract and skin:** Bali has one face and ordinary two-arm/two-leg anatomy; Shukra is a distinct elder with restrained ascetic dress and grey/white hair; the Devas are distinct and two-armed. Skin-only patch medians (zero-based source pixel coordinates; RGB median; R−B): Bali torso `(425,420), 40×30`: `(149,83,47)`, **102**; Shukra cheek `(1020,430), 24×24`: `(178,104,60)`, **118**. Both read as muted warm brown, not orange. Bali’s crown is consistent with his royal contract; no excessive or unsupported regalia is visible.
- **Verdict: pass.**

### Stanza 2 — `candidate-v003.png`

- **Candidate and binding:** `artifacts/d030/s002/landscape/candidate-v003.png`; SHA-256 `4b79cc356df930cd6db7c80e5d3867dbef91a9da2fbf6234a7a3b1c3c2b331f4`; native size 1672×941. Reviewed **2026-11-26T09:09:55Z**. Bound to the frozen plan SHA-256 above and its S002 entry (`d030.json:84–119`). Reference: `intake/D030/002.jpg`, SHA-256 `6404009da410ef2166fb1a47c4c0de25d83b6c3a765149f80166b164ac394f60`.
- **Anatomy:** Aditi and Kashyapa each have one distinct face and connected adult limbs. Their seated postures are coherent; covered legs/feet are not a defect. The bowl, altar and vessels remain visibly separate and connected to the scene.
- **Faces:** Both faces are distinct, legible and proportionate; neither is malformed or duplicated.
- **Hands and feet:** Aditi’s palms are joined in prayer. Kashyapa’s raised teaching gesture has one extended index finger; his resting open hand on his knee shows five digits. Aditi’s exposed foot is small in the seated pose and its toes are not fully resolvable at native size; no toe anomaly is visible.
- **Clothing and cast:** Aditi wears a modest sari and veil with restrained jewelry. Kashyapa wears simple ascetic garments and a grey topknot/beard. The scene has only the two intended people; no inappropriate exposure or sexualised framing.
- **Text/signature artifacts:** No readable text, signature, logo, watermark, or ground/corner artifact is visible. The Vishnu-marked modest altar and lamps are ordinary iconography. No outer border or glossy/metallic effect is visible.
- **Scene and reference fidelity:** The photo aligns with Aditi approaching Kashyapa. The candidate shows the canonical appeal and instruction in a quiet hermitage, with milk bowl and modest altar. Its devotional staging does not introduce a conflicting action.
- **Character/deity contract and skin:** Aditi and Kashyapa each have one face, two attached arms and natural proportions; their skin reads as warm brown. Skin-only patch medians: Aditi forearm `(405,435), 24×24`: RGB `(233,183,124)`, R−B **109**; Kashyapa raised forearm `(750,310), 24×24`: RGB `(163,104,56)`, R−B **107**. Neither reads orange. Kashyapa’s teaching gesture is clear and his ascetic clothing is restrained.
- **Verdict: pass.**

### Stanza 3 — `candidate-v010.png`

- **Candidate and binding:** `artifacts/d030/s003/landscape/candidate-v010.png`; SHA-256 `3fb731ba17749f6343fc67e861d2b0303a7984a33effca590ed172ce98307e8d`; native size 1672×941. Reviewed **2026-11-26T09:10:03Z**. Bound to the frozen plan SHA-256 above and its S003 entry (`d030.json:124–159`). Reference: `intake/D030/003.jpg`, SHA-256 `82122c773e0c94ca6e33f1070675538037e8eca6464bdabe0ccadbf18fc1bf73`.
- **Anatomy:** Vishnu has one head and exactly four attached arms, all separated clearly from the torso; Aditi has ordinary connected limbs. No fused limbs, duplicated people or malformed anatomy are visible. Vishnu’s feet remain visible within the frame.
- **Faces:** Vishnu’s face is coherent and serene; Aditi’s face is clear and directed toward him. No malformed or duplicated faces are visible.
- **Hands and feet:** Vishnu’s open lower blessing palm clearly shows a thumb and four fingers. The other three hands hold the discus, conch and mace. His visible feet each show five toes. Aditi’s hands are joined in prayer; her lower limbs are naturally covered by her sari.
- **Clothing and cast:** Aditi’s sari and veil are modest. Vishnu wears cream and maroon cloth with a simple head band/crown, one modest neck ornament and restrained wrist bands. No peacock feather or Krishna-only adornment appears.
- **Text/signature artifacts:** No readable text or symbols, signature, logo, watermark, or suspicious mark is visible. The image has no outer border, ray/beam effect, glossy shading or metallic reflection.
- **Scene and reference fidelity:** The photo supports the divine appearance, and its ornate stage/radiance are not repeated. The candidate shows Vishnu appearing in the simple hermitage before kneeling Aditi, with no written symbols.
- **Character/deity contract and skin:** Vishnu is deep muted indigo-blue, matte, one-faced and four-armed as required; his three attributes and blessing hand are assigned correctly. Aditi skin-only face patch `(1200,350), 24×24`: RGB `(160,99,67)`, R−B **93**. It reads chestnut/warm brown, not orange, within the plan’s R−B target. Vishnu’s restrained ornament remains within the contract.
- **Verdict: pass.**

### Stanza 4 — `candidate-v010.png`

- **Candidate and binding:** `artifacts/d030/s004/landscape/candidate-v010.png`; SHA-256 `89f23fba2f960961586ebd2f3d5140fe061bee5dbb5f480edf0c5388c895d1f4`; native size 1672×941. Reviewed **2026-11-26T09:10:15Z**. Bound to the frozen plan SHA-256 above and its S004 entry (`d030.json:164–200`). Reference: `intake/D030/004.jpg`, SHA-256 `e1704317f7a90685f9a6127f6ef8a67d2cb28e9e0b1a31d664d2b6dc2accf33c`.
- **Anatomy:** Aditi cradles one infant with one coherent face, four attached arms, two legs and two feet. Kashyapa is a separate seated adult with connected limbs. No duplicate infant, fused body, malformed face, or frame-cut key extremity is visible.
- **Faces:** Aditi, Kashyapa and the infant each have one coherent, distinct face. The infant face reads clearly as a child; no duplicate features are visible.
- **Hands and feet:** The infant’s two feet each show five toes. Aditi’s visible supporting open hand shows five digits; her other supporting hand remains naturally engaged with the child. Kashyapa’s hands are joined in prayer; no malformed digit is visible on the hands.
- **Clothing and cast:** Aditi’s sari and veil are modest; Kashyapa’s cream/ochre ascetic clothing and grey topknot/beard distinguish him. The infant’s single short neck strand is clearly visible and is not overlapped by another necklace. No sexualised framing or inappropriate exposure appears.
- **Text/signature artifacts:** No text, signature, logo, watermark, or suspicious marks appear. The hermitage framing is part of the scene, not an outer border; no glossy, metallic or cosmic light effect appears.
- **Scene and reference fidelity:** The disclosed reference adds cosmic staging. The candidate keeps the birth intimate in a hermitage, with Aditi cradling the child and Kashyapa nearby.
- **Character/deity contract and skin:** The infant has one face, exactly four attached arms, two feet and one short neck strand. Face patch `(570,350), 24×24` and torso patch `(590,475), 24×24` both have median RGB `(16,50,112)`, blue-minus-red **96**, above the required 45. The blue reads as deep muted indigo. Aditi arm patch `(245,475), 24×24`: RGB `(157,50,40)`, R−B **117**; Kashyapa hand/arm patch `(1195,400), 24×24`: RGB `(170,101,63)`, R−B **107**. Both read as natural warm brown, not orange. The infant has exactly one modest short neck strand.
- **Verdict: pass.**

### Stanza 5 — `candidate-v019.png`

- **Candidate and binding:** `artifacts/d030/s005/landscape/candidate-v019.png`; SHA-256 `17d49d60dc9e0b25db203ac49afe20b9ad50760cf406675d218bc58ae0f9d2f1`; native size 1672×941. Reviewed **2026-11-26T09:10:48Z**. Bound to the frozen plan SHA-256 above and its S005 entry (`d030.json:205–245`). References: `intake/D030/005.jpg`, SHA-256 `e6a9c00a672c8379ee6a92e72fbb6e91d787483e4d7f4ca7ca4817e346670520`; and `intake/D030/006.jpg`, SHA-256 `967e36e6b52931328b4d031369ec53c713dd20a54bebb621987b3f5b63013b1c`.
- **Anatomy:** Exactly one two-armed young Vamana, Aditi, Kashyapa and two distinct Devas appear. Vamana’s arms attach naturally while holding staff and parasol. The adults’ bodies and limbs are coherent; no extra, missing, fused or duplicate people are visible. The two Devas differ in age, beard, hair, crown, clothing and pose.
- **Faces:** Vamana, Aditi, Kashyapa and both Devas have distinct coherent faces. The younger Deva is clean-shaven; the elder has a grey beard. No malformed or duplicate face is visible.
- **Hands and feet:** The younger Deva’s open flower-scattering hand shows a thumb and four fingers. Aditi’s and Kashyapa’s hands are joined in praise; the Devas’ other hands hold flower bowls. Vamana’s two visible feet each show five toes; Aditi’s and Kashyapa’s visible feet have five toes each. Smaller peripheral Deva feet are not fully resolvable at native scale; no visible toe/limb error is present.
- **Clothing and cast:** Vamana wears simple saffron/cream brahmachari clothing, sacred thread, parasol and staff, with no peacock feather or Krishna-only mark. Aditi is modestly dressed; Kashyapa’s clothing is ascetic. Exactly two Devas are present: a younger clean-shaven figure with a low rounded plain crown and a grey-bearded elder in olive with a taller plain crown. Layered neck/chest ornament and elaborate jeweled crowns are absent. No inappropriate exposure or sexualised framing appears.
- **Text/signature artifacts:** No readable text, logo, signature, watermark, or corner/ground artifact is visible. No outer border, gloss, metallic shine or cinematic ray effect appears.
- **Scene and reference fidelity:** The disclosed photo 005 mismatch is present: it depicts Aditi holding the newborn, not the stanza 5 celebration. Photo 006 is closer to the youthful Vamana context, but carries letterboxing, a logo and digital staging that the candidate does not reproduce. The candidate follows the canonical celebration and transformation: parents praise with joined hands; two Devas shower flowers; one young Vamana stands with staff and parasol. The empty cradle, folded indigo infant cloth and four separate attribute tokens (discus, conch, mace, lotus) are visible; there is no second Vamana or baby.
- **Character/deity contract and skin:** Vamana has one face, two attached arms and deep muted indigo-blue skin. Face patch `(1100,200), 24×24`: RGB `(174,160,103)`, R−B **71** for the young Deva; elder face patch `(1480,220), 24×24`: RGB `(146,116,94)`, R−B **52**. Both Devas read as warm brown/ochre rather than orange. Aditi forearm patch `(400,360), 24×24`: RGB `(179,107,65)`, R−B **114**; Kashyapa torso patch `(145,300), 24×24`: RGB `(172,103,62)`, R−B **110**. Those patches read as warm brown, not orange. Vamana torso patch `(750,300), 24×24`: RGB `(48,64,98)`, blue-minus-red **50**, meeting the plan’s minimum 45 and reading deep muted indigo. Exactly one Vamana is present and his two-arm anatomy matches the contract.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All five exact candidate checksums pass this independent visual review against the listed frozen plan and character bytes. Keep the review bound to those exact checksums. This review does not approve artwork or update `art/approved/`; all five candidates remain unapproved. The reference-map deviations noted above are disclosed and present; S005 was judged on the plan’s canonical scene as instructed.

Captain-call inventory raised by this review: **empty**. The pending captain art approval remains the standing state and is not a decision raised by this review. No additional captain decision is needed to report these findings.
