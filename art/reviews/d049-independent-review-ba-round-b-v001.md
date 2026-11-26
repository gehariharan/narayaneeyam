# D049 independent landscape review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates at native resolution and in detail crops of the people, faces, hands, feet, and other focal details. I checked the candidates against the frozen final plan, all seven character contracts named by that plan, the series bible, and the plan’s designated visual references. The source images and contracts were read-only. Crops were written only to `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/.review-scratch/crops/`.

The frozen contract root is `/home/gehariharan/firstmate-narayaneeyam-mate/data/d049-production/review-contract-b/`; the listed `art/...` contract paths are relative to it. The review is bound to these exact plan and character bytes: every expected hash below matched with `sha256sum -c`. The plan’s own candidate paths, versions, and checksums appear at `art/plans/d049.json:77–87`, `:126–136`, `:179–189`, `:230–240`, and `:279–289`. The plan says the candidates remain unapproved (`art/plans/d049.json:43`); this review does not approve any artwork or change an approval manifest.

The numbered photos were checked against the plan and `content/sources/d049/reference-map.json:7–11`. Photo 002 supports only woodland and stream context for stanza 2; photo 005 supports only broad meadow/pastoral context for stanza 5. The disclosed mismatches are present: photo 001 shows a flute-playing Krishna gathering rather than worried elders; photo 003 shows pastoral figures and cattle without a wagon migration; and photo 004 is a waterside scene rather than travel. Those photos are excluded as scene references, and each candidate is judged on its other plan requirements. The workspace copies of photos 001–005 matched their OneDrive counterparts byte for byte.

### Exact contract and source hashes read

| File | SHA-256 |
|---|---|
| Frozen final `art/plans/d049.json` | `062c8131e17b021e6ca991eb59efe8897f4f8905d84381083e0b243f0e821195` |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Frozen `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Frozen `art/bible/characters/d072-balarama-vraja-youth/character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` |
| Frozen `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| Frozen `art/bible/characters/d049-upananda/character.json` | `4e6b1062a46c055ffab967c291a73a46e044034a1314ac2a6a468c8d4730b944` |
| Frozen `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| Frozen `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Frozen `art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `content/sources/d049/reference-map.json` | `3bc189e23290e0875121b105973c3259f194bbd3953f6ce62f441d186c1239e4` |
| `intake/D049/photo-captions.txt` | `d068a39bc99bc27dd0929fcb357193e2033cce464d5e2a28f2b72d023de61865` |

The Krishna contract requires deep matte blue skin, a plain forehead, one low gold band and one upright feather, and ordinary two-arm/two-leg anatomy (`art/bible/characters/krishna-vrindavan-youth/character.json:7–14, 47–63`). The series palette calls for deep indigo-blue for Krishna and warm human skin with red-minus-blue under about 120 (`art/plans/d049.json:35–42`). The Nandagopan, Upananda, gopa, gopika, and Yashoda contracts were also checked; for example, Nandagopan’s mature face, moustache and simple cream/olive clothing are specified at `art/bible/characters/nandagopan/character.json:17–28`, and Upananda’s warm-brown skin and simple cowherd dress at `art/bible/characters/d049-upananda/character.json:12–18`.

### Verification and inspection record

- Generated `.review-scratch/sha256-check.txt` from the task’s candidate, reference, contract, and source-file/hash entries, then ran `sha256sum -c` against it: all 23 entries returned `OK`.
- Ran `magick identify` on the five selected candidates; dimensions match the frozen plan: 1671×941, 1672×941, 1669×942, 1670×942, and 1672×941 respectively.
- Read each complete candidate with `view_image`, then enlarged focused crops using `magick … -crop … -resize 200%` with absolute output paths under the scratch directory. I examined facial features, visible limbs, animal/cart anatomy, edges, and corners, including grass, ground, and water for text or signature artifacts.
- Skin samples were taken from 13×13 pixel skin-only patches using ImageMagick pixel enumeration and per-channel medians in Python. R-B means median red minus median blue; B-R means median blue minus median red. The measurements below are independent observations, not copied candidate notes.
- Each review was completed at **2026-11-25 22:08:18 UTC**. Verdicts apply only to the candidate checksum listed in that stanza.

## Stanza 1 — v004

**Candidate:** `artifacts/d049/s001/landscape/candidate-v004.png`  
**SHA-256:** `3766dd1a99920b791a1ec98f3546da226289fc7ea81f1710cef83d1379abdd0b`  
**Dimensions:** 1671×941  
**Plan reference:** `art/plans/d049.json:48–87`; stanza source context is `content/daskams/d049.json:18–25`.

- **Anatomy:** Five distinct seated men have connected, ordinary adult proportions. The two horizontal fallen trunks read as separate grounded trees. No fused people, malformed limbs, or conspicuous anatomy defect is visible.
- **Faces:** The five faces are distinct and legible at full size and in the enlarged group crop. Nandagopan is identifiable by his moustache and cream head cloth; no duplicate person or malformed face is apparent.
- **Hands and feet:** Both prominent open gesturing palms show a thumb and four fingers (five digits each). Other hands are closed or resting, with no extra digit visible. The two crossed feet exposed at lower center each show three visible toe contours; the remaining toes are hidden by the overlap. Other seated feet are concealed by dhotis.
- **Clothing and cast:** The men wear ordinary dhotis and shawls; bare male upper torsos are normal traditional dress. No sexualized framing or palace-like regalia. Nandagopan’s face, moustache, head covering, cream dhoti, and olive cloth follow his contract. No Krishna appears, as required.
- **Text/signature artifacts:** None seen in the full image, corners, ground, or tree/foliage details.
- **Scene and reference fidelity:** The settlement and two separate fallen trunks support the deliberation scene. Photo 001’s disclosed mismatch is present: it depicts a Krishna gathering, not elders deciding to leave. It is excluded. D001 images supply the matte mural treatment; the D043 image supplies Nandagopan identity cues only.
- **Character/deity contract:** Skin-only medians: Nandagopan RGB (155, 81, 35), R-B 120; one gopa RGB (138, 58, 24), R-B 114. Both read as natural warm brown in this mural, not saturated orange. The Nandagopan measurement is at the approximate guide boundary. No deity is depicted.

**Verdict: pass.** The disclosed photo mismatch is present and excluded; no other failing defect is visible.

## Stanza 2 — v004

**Candidate:** `artifacts/d049/s002/landscape/candidate-v004.png`  
**SHA-256:** `ec6175f50ae7686d8ce666258334006a76db13244013f16824bbb854f471435d`  
**Dimensions:** 1672×941  
**Plan reference:** `art/plans/d049.json:97–136`; stanza source context is `content/daskams/d049.json:28–35`.

- **Anatomy:** Upananda’s seated torso and extended arm are connected and proportionate. The three listeners are separate figures. The extended arm terminates in a clear hand; no limb or finger error is visible.
- **Faces:** Upananda’s age lines, gray hair, and beard distinguish him from moustached Nandagopan. The listeners have distinct, readable faces; none is duplicated or malformed.
- **Hands and feet:** Upananda’s open westward gesture shows a thumb plus four fingers (five digits). His resting lap hand has four clearly separated fingers, with the thumb naturally hidden by its angle. Upananda’s feet are concealed by his seated dhoti. Other partly visible feet belong to listeners and are overlapped by the hems; no malformed or extra toe contour is visible.
- **Clothing and cast:** The elder wears a simple olive shawl and cream dhoti, with a bare upper torso in ordinary traditional dress. There is no crown, armor, court costume, or Krishna apparition. The small listening group is appropriately distinct and secondary.
- **Text/signature artifacts:** None seen, including along the water, ground, and corners.
- **Scene and reference fidelity:** Upananda addresses seated cowherds beside a wooded stream, matching the scene brief. Photo 002 is a broad woodland/stream cue only; it contains no council, and the candidate does not copy its literal landscape composition. The D001 references support the mural rendering.
- **Character/deity contract:** Upananda’s 13×13 skin-only median is RGB (161, 91, 41), R-B 120. His skin reads warm brown with ochre shading, not saturated orange. His gray-haired, white-bearded appearance is a distinct elder depiction, not a duplicate or confusion with Nandagopan. No deity is depicted.

**Verdict: pass.** Photo 002’s broad-only role is honored; no viewer-noticeable defect is visible.

## Stanza 3 — v011

**Candidate:** `artifacts/d049/s003/landscape/candidate-v011.png`  
**SHA-256:** `3a506a9ad68f1960b1e7a118ce85903c0239c3d5afffd01ddf1b9c928531c44c`  
**Dimensions:** 1669×942  
**Plan reference:** `art/plans/d049.json:146–189`; stanza source context is `content/daskams/d049.json:38–45`.

- **Anatomy:** The principal covered wagon, wheel, axle, and harness read as connected and plausible. Yashoda and Krishna sit together; their arms meet the bodies naturally. Cattle legs overlap in a busy herd, but I see no full-image fused or malformed animal that reads as a defect. Tiny background figures and hooves are below reliable digit-resolution at native size; this is an observation, not a defect.
- **Faces:** Yashoda and youthful Krishna have readable, distinct faces. Nandagopan and the supporting people are differentiated; no duplicated or malformed face is visible in the caravan.
- **Hands and feet:** Krishna’s two relaxed hands rest on his lap; four fingers are visible on each, while the thumbs are partly occluded by the pose. No wrong digit is visible. Both exposed Krishna feet show five toes each. Yashoda’s hands are partly hidden by the embrace and torso overlap; no visible digit error.
- **Clothing and cast:** The covered caravan carries household goods and travels with cattle. Yashoda wears a modest sari and Krishna a yellow dhoti with muted orange shawl. Krishna has a plain forehead, one low band and one feather. Nandagopan leads the procession. No sexualized framing or palace regalia.
- **Text/signature artifacts:** None seen in the wagon, road, sky, animals, or corners.
- **Scene and reference fidelity:** The diagonal caravan, goods, cattle, and central Yashoda–Krishna pair fulfill the stanza plan. Photo 003’s disclosed mismatch is present: it shows pastoral people and cattle without a wagon migration. It is excluded. The D001 pair guides style, and D066 S002/S010 guide Krishna identity only.
- **Character/deity contract:** Krishna chest skin median RGB (80, 90, 125), B-R 45; it is matte blue and meets the stated B-R guide. Yashoda RGB (165, 91, 40), R-B 125; Nandagopan RGB (167, 91, 41), R-B 126. The latter two are slightly above the approximate warm-brown guide but read as warm brown with mural ochre, not as saturated orange. Krishna’s hair, age, forehead, feather/band, clothing, and ordinary two-arm/two-leg form conform.

**Verdict: pass.** The disclosed photo mismatch is present and excluded; no visible anatomy or contract defect warrants a failure.

## Stanza 4 — v005

**Candidate:** `artifacts/d049/s004/landscape/candidate-v005.png`  
**SHA-256:** `974f84ebe2cca8733d90ca406c12ed9cb0e6ee36e40b2c8e3e0927d33b5e7415`  
**Dimensions:** 1670×942  
**Plan reference:** `art/plans/d049.json:199–240`; stanza source context is `content/daskams/d049.json:48–55`.

- **Anatomy:** Krishna’s two arms are attached and proportionate. The moving cart, wheel, oxen, and visible legs are readable; no visibly fused person or creature is present. The foreground women’s draped skirts naturally continue beyond the lower frame edge; no face or key extremity is awkwardly severed.
- **Faces:** Krishna and the three women have distinct, legible faces and attentive expressions. No malformed or accidentally duplicated person is apparent.
- **Hands and feet:** Krishna’s extended open gesture shows a thumb plus four fingers (five digits). His resting hand lies over the cart rail with fingers partly covered by the rail; no wrong digit is visible. The women’s hands hold a pot, basket, or rest near the face; none is an open palm with a visible digit defect. Krishna’s feet are concealed by the cart; the women’s skirts cover their feet at the bottom edge.
- **Clothing and cast:** The women wear modest village saris and restrained jewelry; the pot and flower basket are ordinary travel goods. Krishna’s yellow dhoti, orange shawl, plain forehead, low band, and single feather are visible. No flute or sound glyph appears.
- **Text/signature artifacts:** None seen in the sky, cart, road, water, foliage, or corners.
- **Scene and reference fidelity:** Krishna speaks from the moving wagon as women travel beside it, with oxen and wheels supplying the journey context. Photo 004’s disclosed mismatch is present: it is a waterside gathering and does not show this episode. It is excluded. The D001 pair is used for style and D066 S002/S010 for Krishna identity.
- **Character/deity contract:** Krishna chest skin median RGB (68, 99, 151), B-R 83. The skin is matte blue and remains in the blue family. Gopika skin medians are RGB (167, 91, 42), R-B 125 and RGB (167, 92, 44), R-B 123; both read as warm brown rather than saturated orange. Krishna’s plain forehead, low band, feather, and ordinary anatomy conform.

**Verdict: pass.** The disclosed photo mismatch is present and excluded; no visible defect crosses the review threshold.

## Stanza 5 — v003

**Candidate:** `artifacts/d049/s005/landscape/candidate-v003.png`  
**SHA-256:** `0785e8f7b982b17a600d42d4c3451daccae34c021c8b9a6f302b4f4df8301085`  
**Dimensions:** 1672×941  
**Plan reference:** `art/plans/d049.json:250–289`; stanza source context is `content/daskams/d049.json:58–65`.

- **Anatomy:** Krishna has one face, two connected arms and two legs with ordinary youthful proportions. The raised open hand shows a thumb plus four fingers (five digits); the hanging hand also shows five digits. Both visible feet show five toes each. No malformed face, extra limb, duplicate person, or anatomy defect is visible.
- **Faces:** Krishna’s youthful face is legible and calm; the forehead is plain. No duplicated or malformed face.
- **Hands and feet:** As counted above, each visible hand has five digits and each visible foot has five toes. The digits are distinct at native resolution and in the enlarged body crop.
- **Clothing and cast:** The yellow dhoti and muted red-orange shawl fit the contract; bare male upper torso is ordinary traditional dress. The neck carries a bright yellow ornamental collar not specified by the plan or Krishna contract. At native image coordinates approximately **x=376–501, y=271–318**, it forms a conspicuous separate arc around the bare neck, rather than a garment seam. A viewer sees it immediately as an added neck ornament. This is the needs-fix defect.
- **Text/signature artifacts:** None seen in the meadow, ground, water, flowers, trees, or corners.
- **Scene and reference fidelity:** Krishna beholds a lush meadow with flowering trees; the green grass and white blossoms are clear and no literal jewels or luminous rays are present. Photo 005 is broad pastoral context only and lacks specific flowering kunda detail; the candidate adds flowering trees as required. D001 guides mural rendering; D066 S002/S010 guide identity.
- **Character/deity contract:** A 13×13 skin-only chest patch at native coordinate (420, 380) has median RGB (66, 114, 161), B-R 95. It reads as blue, though lighter/brighter than the deep matte blue in the identity references; the hue remains in the blue family. The low band and single upright feather are present, and the forehead is plain. The separate yellow neck collar is not disclosed by the Krishna contract (`krishna-vrindavan-youth/character.json:8–13`, `:47–63`) and is not required by this stanza plan (`art/plans/d049.json:258–267`).

**Verdict: needs-fix.** Remove the unauthorized yellow neck ornament in a new candidate version. The current candidate remains unapproved; do not alter or overwrite its bytes.

## Recommendation and captain-call inventory

Recommend exact-checksum pass for S001 v004, S002 v004, S003 v011, and S004 v005. Recommend a new S005 version without the neck collar; S005 v003 needs-fix. No image is approved, and this review does not update `art/approved/`.

I inventoried this report and the reviewed visual surface for unresolved choices that require the captain. **The inventory is empty.** The standing pending art-approval state is not a decision raised by this independent review; the S005 correction is an evidence-backed production fix recommendation, not a captain choice.
