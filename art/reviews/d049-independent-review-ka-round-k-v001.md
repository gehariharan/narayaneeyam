# Independent exact-checksum visual review — D049 landscape S001–S005

## Scope and result

I independently inspected the five selected landscape candidates at native dimensions and enlarged crops, against the frozen D049 plan, the applicable character contracts, the pinned style/identity references, and each mapped numbered photo where applicable. The review is bound to the candidate SHA-256 values below and to the exact frozen plan and character-file hashes listed below.

**Verdicts:** S001 v006 pass; S002 v005 pass; S003 v020 pass; S004 v006 pass; S005 v006 needs-fix. The S001 foot has a tiny extra toe-like nub at the disclosed location, but it is not discernible in the native full frame; the brief’s explicit viewer-scale ruling is **pass**. S003’s adult skin samples are slightly above the plan’s approximate R−B guide, but both faces read as natural warm brown at full size; the required S003 ruling is **pass**, not uncertain. These are independent visual-review results only. Every candidate remains unapproved.

No project file, candidate, reference, or approval manifest was changed. Crop/enlargement scratch files are under `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/d049-ka/`, outside `artifacts/` and `intake/`.

## Hash and source verification

I generated `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/d049-ka/sha256-inputs.txt` programmatically from the task’s pinned paths and expected digests, then ran:

```sh
sha256sum -c /home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/d049-ka/sha256-inputs.txt
```

All 23 listed candidate, reference, frozen-contract, and source files returned `OK`; no mismatch occurred. `identify -format '%f %wx%h\n'` confirmed candidate native dimensions. `magick … -crop … +repage -resize …` created focused face, hand, foot, animal, and corner crops only in the scratch directory above. Native frames and enlarged crops were viewed separately for each candidate.

### Frozen plan and character-contract SHA-256 values actually read

| File | SHA-256 |
|---|---|
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d049-production/review-contract-k/art/plans/d049.json` | `e293892801f36d9aca4854b6da43944c7f6a8b3d9279f148285f043e7ddc4cff` |
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d049-production/review-contract-k/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `…/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `…/art/bible/characters/d072-balarama-vraja-youth/character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` |
| `…/art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `…/art/bible/characters/d049-upananda/character.json` | `4e6b1062a46c055ffab967c291a73a46e044034a1314ac2a6a468c8d4730b944` |
| `…/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `…/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `…/art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |

The abbreviated character paths in this table are under `/home/gehariharan/firstmate-narayaneeyam-mate/data/d049-production/review-contract-k/`.

### Other verified input hashes

| Input | SHA-256 |
|---|---|
| `artifacts/d001/s004/landscape/master.png` | `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d` |
| `artifacts/d001/s008/landscape/master.png` | `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995` |
| `artifacts/d044/references/nandagopan-yashoda-shared-source-D043-S009.jpg` | `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f` |
| `intake/D049/002.jpg` | `2cafe0b1cabbebfaf2f7f73341f3e09afb11cd5065ec006979dfd4682bcf9fde` |
| `artifacts/d067/references/krishna-vrindavan-youth/d066-s002-candidate-v004.png` | `295c2fd87aabb9dfd655b69cdb2811d5b26da2483ea914cebeff11bc2a837068` |
| `artifacts/d067/references/krishna-vrindavan-youth/d066-s010-candidate-v004.png` | `e39a40b594b26291fdff2638ebb70c4cb08a330573c0a20c9e775f48cd66c96f` |
| `intake/D049/005.jpg` | `ca64c273f43fce45c8e3d019e3c1a1021405530811cf44242f5064092dbf0583` |
| `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/content/sources/d049/reference-map.json` | `3bc189e23290e0875121b105973c3259f194bbd3953f6ce62f441d186c1239e4` |
| `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/intake/D049/photo-captions.txt` | `d068a39bc99bc27dd0929fcb357193e2033cce464d5e2a28f2b72d023de61865` |

The first seven paths above are relative to `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/`. The numbered photos 001–005 in its `intake/D049/` and `/home/gehariharan/OneDrive/Pictures/Narayaneeyam Studio/intake/D049/` were present and byte-identical by SHA-256. The reference-map lines 7–11 assign 001 to an unresolved conflict, 002 and 005 to broad context, and 003–004 to unresolved conflicts. The source captions are preserved verbatim and were not treated as photo captions (`content/sources/d049/reference-map.json:4-5`; `intake/D049/photo-captions.txt:1-32`).

## Evidence and contracts

The frozen plan entries are `art/plans/d049.json:48-96` (S001), `:97-145` (S002), `:146-194` (S003), `:199-245` (S004), and `:250-296` (S005). The individual candidate version/path/hash pins are respectively at lines 82–84, 131–133, 184–186, 235–237, and 285–287. Scene and reference instructions are at lines 54–79, 103–128, 155–181, 207–232, and 258–282. The plan’s palette and continuity constraints are at lines 35–42.

Character constraints checked include Krishna’s youth, matte indigo skin, costume, plain forehead, single low band and feather, and ordinary two-arm/two-leg anatomy (`krishna-vrindavan-youth/character.json:6-18,54-66`); Nandagopan’s mature moustached face and cream/olive cowherd clothing (`nandagopan/character.json:16-33`); Upananda’s distinct elder identity, warm brown skin and simple cowherd dress (`d049-upananda/character.json:11-25`); varied distinct gopas (`gopas/character.json:15-29`); gopikas’ distinct faces, warm brown pigments and modest village saris (`gopikas/character.json:16-28`); and Yashoda’s maternal face, warm medium-brown skin, veil/sari palette and ordinary anatomy (`yashoda/character.json:15-28`). These abbreviated paths are under the frozen contract directory listed above. The series skin/style rules are in `art/bible/series.json` (verified SHA above); the plan gives the operative specific palette at lines 35–42.

For stanza text and stanza-to-photo mapping I read the asset-bearing checkout’s `content/daskams/d049.json:18-67` and `content/sources/d049/reference-map.json:4-19`. The active `/3` worktree has no ignored `content/daskams/d049.json`; all needed D049 sources were read from the explicitly named `/4` path. The visual review did not read any existing D049 review record or report.

## Candidate findings

Each exact-byte native-frame review was completed at the UTC time listed in its candidate section. Findings refer only to that candidate checksum. Skin patches were 13×13 native-pixel samples read from the candidate with ImageMagick; medians are RGB and R−B (or B−R for Krishna) as stated.

### S001 — v006 — `d46cc87eae46a936ed70ad37be8f09473a9d7e44aa77ff97e64460e7375a0abf`

Native size: 1672×941. Review time: **2026-11-26 06:55:46 UTC**. Plan entry: `art/plans/d049.json:48-96`; native foot and hand details: `.review-scratch/d049-ka/s001-feet-focus.png`, `s001-foot-6x.png`, `s001-hand-left-6x.png`, `s001-hand-right-6x.png`, and `s001-faces-group-focus.png`.

- **Anatomy:** The foreground people have connected, ordinary seated anatomy and distinct bodies. No duplicated person or malformed face/limb is visible. The two fallen trunks are separate and grounded; the background cattle are secondary and show no conspicuous error.
- **Faces:** The five foreground men have distinguishable hair, facial hair, head cloths and expressions. Nandagopan is the central moustached elder; no Krishna appears, as required.
- **Hands/feet:** Both visible gesturing hands show a thumb and four fingers. The joined hands at lower left are a closed prayer pose; other fingers are covered or too small to resolve. The prominent bare foot at native `(1135–1150, 866–878)` has five clear toe forms and a separate approximately 5–6 px nub near `(1143,873)`. The enlarged crop makes the nub visible; at native full-frame size it does not read as an extra toe or other mark a viewer would notice. The other partly covered foot is too small to count and has no visible error.
- **Clothing and cast:** Cream dhotis and muted red/olive shawls/head cloths fit the cowherd group. Flat ochre bead/arm ornaments are visible, but there is no crown, armor or palace-like regalia. Skin medians: Nandagopan RGB `(160,88,36)`, R−B **124**; two gopa cheek patches `(160,87,34)`, **126**, and `(154,86,36)`, **118**. In the full image all read as natural warm brown, not orange.
- **Text/signature artifacts:** None visible. Enlarged top/bottom corners and ground crops show no letters, signature, watermark or pseudo-text.
- **Scene/reference fidelity:** The worried elders confer by the village; two fallen trunks are prominent. As disclosed by the plan and reference map, photo 001 is a mismatch (flute-playing Krishna and seated group) and is excluded; that disclosed deviation is present. The candidate follows the stanza instead, with D001 used for mural rendering and the D043 source used only for Nandagopan’s adult identity.
- **Character/deity contract:** Nandagopan’s moustache, warm brown skin, cream head cloth/dhoti and olive clothing align with his contract. No deity depiction is required. The opaque mineral palette has no visible gloss, beams, border or metallic highlight treatment.
- **Verdict: PASS.** The sole toe-like nub is not noticeable in the native full image, as required by the explicit S001 ruling.

### S002 — v005 — `0bdb29b9df3e43452eabf4ebc966421fbc0ba4e7def6fe3e014306cb12c709f8`

Native size: 1672×941. Review time: **2026-11-26 06:55:53 UTC**. Plan entry: `art/plans/d049.json:97-145`; detail crops: `.review-scratch/d049-ka/s002-faces-hand-group.png`, `s002-gesture-hand.png`, and `s002-upananda-face-sampling.png`.

- **Anatomy:** Upananda’s extended arm joins the shoulder and wrist naturally. The three seated listeners have attached limbs and separate bodies; no duplicated or fused person is visible. Feet are covered or too small at native size to resolve digits; no visible defect.
- **Faces:** Upananda has a distinct, thoughtful older face and silvered hair/beard. The listeners’ moustaches, hair and face shapes differ; none is a duplicate.
- **Hands/feet:** Upananda’s pointing palm shows one thumb and four separate fingers. Listener hands rest on knees or are closed; their digits are not presented open for counting. No main foot is large enough to resolve toes at native size.
- **Clothing and cast:** Upananda wears a simple olive drape with a cream dhoti; his bare upper torso is ordinary traditional male dress. The three listeners wear simple cream dhotis with muted olive/red cloth. No sexualized framing or court dress. Skin medians: Upananda cheek RGB `(151,91,44)`, R−B **107**; chest `(150,90,44)`, **106**; listener cheeks `(152,93,48)`, **104**, and `(158,97,51)`, **107**. They read as muted warm brown, not orange.
- **Text/signature artifacts:** None visible. Corner and cloth/ground crops show no text, signature or watermark.
- **Scene/reference fidelity:** A small council listens in a wooded clearing; Upananda gestures toward a visible stream and opening through the forest. Photo 002 is broad landscape context only and contains no council; the candidate uses the woodland/stream context without copying its waterfall or wildlife. No Krishna apparition or palace assembly appears.
- **Character/deity contract:** The silver hair is natural age variation on a visually distinct cowherd elder, not ascetic or royal styling. Warm brown skin, ordinary proportions and simple dress meet the D049 Upananda and gopa contracts. No deity depiction is required.
- **Verdict: PASS.**

### S003 — v020 — `714b5bbafd89fd5f21ebb877507322656d3a19ac7e74eac477d3a0de1bf95cd5`

Native size: 1672×941. Review time: **2026-11-26 06:55:59 UTC**. Plan entry: `art/plans/d049.json:146-194`; detail crops: `.review-scratch/d049-ka/s003-family-focus.png`, `s003-nanda-face-hand.png`, `s003-krishna-hands-feet.png`, `s003-feet-5x.png`, and `s003-corner-sheet.png`.

- **Anatomy:** The central Yashoda and Krishna are connected and proportionate, each with one face, two arms and two legs. Nandagopan leads with a staff. Wagon frames, wheels, axles, cattle and harnesses remain visibly distinct. The many background travelers are miniature at native size; their digits are not resolvable and no visible-scale fused or malformed figure stands out.
- **Faces:** Yashoda’s face is calm and maternal; Krishna is youthful with a separate face; Nandagopan has his contracted moustache and mature proportions. The foreground faces are distinct. No malformed or duplicated foreground person is visible.
- **Hands/feet:** On Krishna, the relaxed hand over his lap shows four fingers and a thumb; the rail hand shows four fingers, with the thumb obscured by the cart rail. Yashoda’s contact hand shows four fingertips; her thumb is concealed by the contact pose. Krishna’s left foot crop shows five toe forms. On the other foot four separate toe tips are clear in the enlargement; a fifth is not individually distinguishable in the angled, overlapping pose. At native size the toes are too small to read as an abnormal four-toed foot, and no viewer-visible digit defect appears.
- **Clothing and cast:** Yashoda’s cream veil with maroon edging and muted sari, Krishna’s yellow dhoti and red-orange shawl, and Nandagopan’s cream/olive clothing fit the contracts. Skin medians: Yashoda cheek RGB `(170,94,44)`, R−B **126**; Nandagopan cheek `(167,92,44)`, **123**. Krishna cheek RGB `(48,79,140)`, B−R **92**. At native full size the adult skin reads as natural warm brown, not orange, despite being a little above the plan’s approximate R−B 120 guide; Krishna reads as deep indigo blue.
- **Text/signature artifacts:** None visible. Enlarged lower corners, road, river and wagon details show no text, signature or watermark.
- **Scene/reference fidelity:** A diagonal caravan of covered wagons leaves Gokula; Nandagopan leads and Yashoda and Krishna sit together on the central wagon among cattle and household goods. Photo 003 shows pastoral figures but no wagon migration; this plan-disclosed mismatch is present and the photo is excluded. D001 guides rendering and D066 S002/S010 guide Krishna identity only.
- **Character/deity contract:** Krishna has youthful proportions, deep matte blue skin, long dark curls, yellow dhoti, muted red-orange shawl, one low band and one upright feather, and a plain forehead. No extra limbs, mark or neck ornament is visible. Yashoda and Nandagopan match their face, palette and clothing contracts.
- **Verdict: PASS.** This is the explicit S003 full-size skin judgment; it is not uncertain.

### S004 — v006 — `7437a4ba7d8ec1d79fe2245804275d7559e1983ce29f3c3ddec9bc5d71ac1848`

Native size: 1670×942. Review time: **2026-11-26 06:56:06 UTC**. Plan entry: `art/plans/d049.json:199-245`; detail crops: `.review-scratch/d049-ka/s004-krishna-face-hands.png`, `s004-cattle-limbs.png`, `s004-women-sampling.png`, `s004-two-hands.png`, and `s004-corner-sheet.png`.

- **Anatomy:** Krishna’s two arms attach naturally; the extended arm and hanging arm have normal proportions. The two yoked cattle have distinct heads, attached bodies and visible leg/hoof groupings; the overlaps are from their side-by-side pose, not a fused animal. The three women are distinct and connected. No prominent anatomy error or duplicate is visible.
- **Faces:** Krishna’s youthful face is intact. Three women have distinct faces and hair/veil details; no malformed face is visible.
- **Hands/feet:** Krishna’s speaking palm shows one thumb and four separate fingers. His hand hanging over the cart rail shows four fingertips, with the thumb hidden behind the rail. Women’s hands hold a pot/basket or rest near the body; they are partially overlapped and show no visible extra digit. Krishna’s feet are not exposed; the women’s feet are cropped/covered naturally.
- **Clothing and cast:** Krishna’s yellow dhoti, red-orange shawl and bare upper torso are ordinary traditional dress, with no neck ornament. Women wear modest muted saris and restrained jewelry; no exposed skin beyond ordinary dress or sexualized framing. Three gopika cheek samples: RGB `(170,94,44)`, R−B **126**; `(171,94,47)`, **124**; `(170,93,44)`, **126**. They read as natural warm brown rather than orange.
- **Text/signature artifacts:** None visible. Corner, ground, grove and water crops show no writing, signature or watermark.
- **Scene/reference fidelity:** Krishna speaks from a moving covered wagon to women traveling alongside; cart wheels and cattle establish the road scene. He is not playing a flute and there are no sound glyphs. Photo 004 is the disclosed waterside mismatch and is excluded; that deviation is present. D001 guides mural style and D066 S002/S010 guide Krishna identity only.
- **Character/deity contract:** Krishna’s face, matte deep blue skin, plain forehead, low band and single feather match the youthful Vraja contract. Blue samples: open palm RGB `(86,108,152)`, B−R **66**; cheek `(75,102,149)`, **74**; chest `(77,103,152)`, **75**. All exceed the plan’s minimum B−R 40 and read as deep matte blue. No extra arms, crown or mark is visible. The gopikas match the warm brown, distinct-face and modest-village-dress contract.
- **Verdict: PASS.**

### S005 — v006 — `a0dcd4215567a19873b3b9a8bfc9e09d506d58c755f0fb783ed687e5bc0d3b46`

Native size: 1671×941. Review time: **2026-11-26 06:56:14 UTC**. Plan entry: `art/plans/d049.json:250-296`; detail crops: `.review-scratch/d049-ka/s005-krishna-detail.png`, `s005-feet-focus.png`, `s005-raised-hand.png`, `s005-lowered-hand.png`, and `s005-corner-sheet.png`.

- **Anatomy:** Krishna has ordinary connected two-arm/two-leg anatomy. The cow and calf in the meadow are small secondary figures; at native size their small details are not resolvable, but neither shows a visible malformed or fused body. No duplicate person is present.
- **Faces:** Krishna’s profile is intact and youthful; no malformed feature is visible.
- **Hands/feet:** The raised open hand shows one thumb and four fingers. The lowered hand at native `(270–325, 575–635)` shows only three separated downward fingertip ends plus the separate thumb, four visible digits total. The 6× crop (`s005-lowered-hand-6x-full.png`) confirms the fourth finger is absent rather than hidden by the pose. This hand is exposed and large enough in the full frame for a viewer to notice the missing digit. Both visible feet show five toe forms in the enlarged crop; no extra or fused digit is visible.
- **Clothing and cast:** Krishna wears the contract’s yellow dhoti and muted red-orange shawl, with a bare upper torso in ordinary traditional dress. Blue samples: cheek RGB `(47,68,110)`, B−R **63**; chest `(36,57,97)`, **61**. His skin reads deep matte indigo blue, not purple or teal.
- **Text/signature artifacts:** None visible. Enlarged corners and foreground grass/rock crops show no text, signature or watermark.
- **Scene/reference fidelity:** Krishna beholds a dense green meadow framed by flowering trees; the grass is emerald-like without literal jewels or emitted light. Photo 005 supports only broad meadow/cow-calf context and lacks flowering kunda detail; the candidate adds the planned flowering grove. D001 guides style and D066 S002/S010 guide Krishna identity.
- **Character/deity contract:** Youthful Krishna has a plain forehead, a single upright feather on a low band, dark curls, no neck ornament, ordinary anatomy and the contracted costume. The skin sample exceeds the blue-minus-red minimum of 40; no deity-specific anatomy exception is invoked.
- **Verdict: NEEDS-FIX.** The missing fourth finger on Krishna’s exposed lowered hand is a visible anatomy/digit defect in this exact candidate.

## Recommendation and captain-call inventory

Four exact candidate versions pass this independent visual review; S005 v006 needs-fix for the visible hand defect. All five remain **unapproved**. Preserve these conclusions only for the recorded hashes; any changed plan or candidate requires a fresh exact-checksum review. The report raises no new captain decision: the pending explicit art approval remains the standing state, not a decision created by this review. My captain-call inventory for this review is empty.
