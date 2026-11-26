# D049 landscape candidate independent visual review

**Review type:** Independent visual review, bound to the exact candidate and final-plan bytes listed below.  
**Review completed:** 2026-11-26T07:45:48Z  
**Scope:** Selected landscape candidates for stanzas 1–5 of dasakam 49. Each image was opened at native resolution, then inspected in enlarged scratch crops for faces, hands, feet, and (where present) the wagon and cattle group. Crop and raw sampling files were written only under `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/.review-scratch/`; the source images were not edited. The scratch crops include `s001-group.png`, `s001-toe.png`, `s002-council.png`, `s003-family.png`, `s003-cattle.png`, `s004-figures.png`, `s004-cattle.png`, and `s005-krishna.png`.

## Integrity and evidence

I generated `.review-scratch/expected.sha256` programmatically from the supplied candidate, reference, plan, character, and metadata path/hash pairs, then ran:

```sh
sha256sum -c "$PWD/.review-scratch/expected.sha256"
```

Every listed file returned `OK`. This verified all five selected candidates, the two D001 rendering references, the D043 Nandagopan/Yashoda identity photo, the D049 photos 002 and 005, the two D066 Krishna identity references, all frozen contract files, `reference-map.json`, and `photo-captions.txt` before visual review. The checksums below are the actual SHA-256 values read and reviewed; they match the supplied expected values.

| Contract or source file | SHA-256 |
|---|---|
| Frozen final plan `art/plans/d049.json` | `6e6d7afd2f736b7ce4fa00aebc47ed0edd20f65386d9d799f6b38d68f1ed66b5` |
| Frozen series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Krishna youth `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Balarama youth `art/bible/characters/d072-balarama-vraja-youth/character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` |
| Nandagopan `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| Upananda `art/bible/characters/d049-upananda/character.json` | `4e6b1062a46c055ffab967c291a73a46e044034a1314ac2a6a468c8d4730b944` |
| Gopas `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| Gopikas `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Yashoda `art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `content/sources/d049/reference-map.json` | `3bc189e23290e0875121b105973c3259f194bbd3953f6ce62f441d186c1239e4` |
| `intake/D049/photo-captions.txt` | `d068a39bc99bc27dd0929fcb357193e2033cce464d5e2a28f2b72d023de61865` |

Other reviewed reference SHA-256 values were: D001 S004 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`; D001 S008 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`; D043 identity photo `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f`; D049 photo 002 `2cafe0b1cabbebfaf2f7f73341f3e09afb11cd5065ec006979dfd4682bcf9fde`; D049 photo 005 `ca64c273f43fce45c8e3d019e3c1a1021405530811cf44242f5064092dbf0583`; D066 S002 `295c2fd87aabb9dfd655b69cdb2811d5b26da2483ea914cebeff11bc2a837068`; D066 S010 `e39a40b594b26291fdff2638ebb70c4cb08a330573c0a20c9e775f48cd66c96f`.

The D049 photo copies for 002 and 005 in the OneDrive intake folder have the same SHA-256 values as the local intake photos. Plan mapping and scene briefs are in the frozen plan at lines 48–84 (S001), 97–133 (S002), 146–186 (S003), 199–237 (S004), and 250–287 (S005). The reference-map entries for photos 001–005 are at `content/sources/d049/reference-map.json:7–11`; the chapter stanza/commentary entries are at `content/daskams/d049.json:18–62`. The plan’s style and palette are checked against the series bible (`series.json:4–40`); character identity and anatomy were checked against the corresponding character `visual_bible` and `never` fields. Krishna’s plain forehead, low band, single feather, deep matte blue, and two-arm anatomy are specified at `krishna-vrindavan-youth/character.json:4–14`; Nandagopan’s identity/skin/clothing at `nandagopan/character.json:16–24`; Upananda at `d049-upananda/character.json:11–20`; and the supporting cast rules at the named gopa, gopika, and Yashoda character files.

For skin measurements I extracted each 13×13 patch from the read-only candidate using ImageMagick to an RGB scratch file and computed per-channel medians with Python `statistics.median`. Coordinates below are native-image pixel centers. These numeric checks supplement visual judgment: I report whether the patch and full image read as natural warm brown or orange, rather than treating a borderline value as a defect by itself.

## Candidate reviews

### S001 — v006 landscape

- **Candidate:** `artifacts/d049/s001/landscape/candidate-v006.png` — **SHA-256:** `d46cc87eae46a936ed70ad37be8f09473a9d7e44aa77ff97e64460e7375a0abf` — **1672×941**.
- **Review time:** 2026-11-26T07:45:48Z.
- **Anatomy:** Five distinct seated cowherd men have connected, ordinary limbs; the two background cows are coherent and separate. No duplicate person or fused body is visible.
- **Faces:** The five foreground faces are distinct, legible, and naturally formed at native size. Nandagopan reads as the central mature moustached cowherd with covered hair and olive cloth; no malformed face is visible.
- **Hands/feet:** The two prominent open conversational palms each show four fingers and a thumb. Other hands are folded, curled, or resting, with no extra or fused digit visible. The foreground visible foot has five clear toe forms and the separately disclosed toe-like nub near native **(1143,873)**. In the magnified crop it is a tiny sixth-toe-like speck, but at full native frame size it does not read as an extra toe to a viewer; I rule **pass** on the explicit full-image-noticeability threshold.
- **Clothing and cast:** Modest cream dhotis with muted olive, green, and maroon shawls/head cloths; the bare male torsos are ordinary traditional dress. Jewelry is simple painted ochre, not palace regalia. Cast matches Nandagopan and a small group of gopas; no Krishna is depicted.
- **Text/signature artifacts:** No readable or pseudo-text, caption, signature, watermark, or suspicious mark in the ground, foliage, frame edges, or corners.
- **Scene and reference fidelity:** Two separate grounded fallen trunks, settlement structures, and a concerned elders’ discussion are present. The disclosed D049 photo 001 mismatch is present: it depicts a flute-playing Krishna gathering rather than the elders’ relocation discussion, so it is not used as a scene reference. D001 images serve as style references and the D043 source photo as Nandagopan identity only. The candidate follows that separation.
- **Character/deity contract and skin:** No deity appears. The warm-brown 13×13 cheek medians are Nandagopan at **(761,411), RGB (162,89,36), R−B 126** and a gopa at **(462,376), RGB (163,89,35), R−B 128**. Both read as natural warm brown in the full image, not orange, despite being slightly above the approximate R−B <120 guide.
- **Verdict: PASS.** This verdict applies only to the candidate checksum above. The toe-like nub is disclosed and explicitly judged not noticeable at full-image size.

### S002 — v005 landscape

- **Candidate:** `artifacts/d049/s002/landscape/candidate-v005.png` — **SHA-256:** `0bdb29b9df3e43452eabf4ebc966421fbc0ba4e7def6fe3e014306cb12c709f8` — **1672×941**.
- **Review time:** 2026-11-26T07:45:48Z.
- **Anatomy:** Upananda’s extended arm joins cleanly at the shoulder and wrist; the seated listeners’ visible arms and hands are attached and proportionate. The group is distinct with no duplicate or fused body.
- **Faces:** Upananda’s grey-haired, bearded, thoughtful elder face is distinct from the moustached Nandagopan identity; the three listeners have different profiles and natural features. No malformed face is visible.
- **Hands/feet:** Upananda’s open westward gesture shows four fingers and a thumb. The other visible hands are resting or curled; no extra or fused digits are visible. Feet are covered or too obscured to count; there is no visible foot defect.
- **Clothing and cast:** Simple cream, olive and muted red cowherd garments; Upananda’s bare upper torso is ordinary traditional male dress. There is no royal or palace styling and no exposed-skin or sexualized issue.
- **Text/signature artifacts:** No text, pseudo-writing, signature, watermark, or suspicious ground/foliage mark is visible.
- **Scene and reference fidelity:** Upananda gestures toward a wooded stream valley while a small seated group listens, matching the plan. Photo 002 is broad environment context only and contains no council or Upananda; the candidate recomposes the scene rather than copying its waterfall/animal arrangement. D001 references guide the matte mural treatment.
- **Character/deity contract and skin:** No deity appears. 13×13 cheek medians: Upananda **(516,336), RGB (138,86,44), R−B 94**; left listener **(286,431), RGB (155,95,50), R−B 105**; middle listener **(1201,391), RGB (156,95,50), R−B 106**; right listener **(1446,411), RGB (111,64,30), R−B 81**. All read as warm brown rather than orange at full size and are within the approximate guide.
- **Verdict: PASS.** This verdict applies only to the candidate checksum above.

### S003 — v020 landscape

- **Candidate:** `artifacts/d049/s003/landscape/candidate-v020.png` — **SHA-256:** `714b5bbafd89fd5f21ebb877507322656d3a19ac7e74eac477d3a0de1bf95cd5` — **1672×941**.
- **Review time:** 2026-11-26T07:45:48Z.
- **Anatomy:** Yashoda and youthful Krishna sit together on the principal covered wagon; Nandagopan leads the caravan. Their limbs attach naturally. The two foreground oxen and cattle behind are distinguishable with coherent heads, bodies, and legs. The wagon wheels, axles, and harnesses read as connected traditional wooden equipment. Smaller caravan figures are too small at native size to resolve individual digits; nothing visibly wrong at that scale.
- **Faces:** Yashoda and Krishna have calm, legible youthful/maternal faces. Nandagopan is distinct from the crowd. The other small caravan faces are miniatures and not individually resolvable at native size; no visible malformed or repeated face is apparent.
- **Hands/feet:** Krishna’s two relaxed lap hands each show four fingers and a thumb; both visible feet show five toes. Yashoda’s two contact hands each expose four fingers while the thumbs are naturally obscured by the shoulder/chest contact. Nandagopan’s visible hand on the staff is proportionate. No extra or fused digits are visible.
- **Clothing and cast:** Yashoda wears a cream veil with maroon edging and a modest sari; Krishna wears the yellow dhoti and muted red-orange shawl. Nandagopan and the gopas wear simple cowherd garments. No palace finery or sexualized framing is visible.
- **Text/signature artifacts:** No readable text, signature, watermark, or pseudo-text appears. The source photo 003’s watermark is not carried into the candidate.
- **Scene and reference fidelity:** The covered-wagon migration, cattle, household goods, Nandagopan leading, and Yashoda with Krishna aboard the principal cart are present. The disclosed D049 photo 003 mismatch is present: the photo shows pastoral Krishna/cowherd figures but no wagon migration, and is excluded. D001 images guide style; the D066 pair guides Krishna identity only.
- **Character/deity contract and skin:** Krishna’s forehead is plain, with one low band and one upright peacock feather; his skin reads deep matte indigo. A 13×13 cheek patch at **(896,273)** has median **RGB (49,82,144), B−R 95**. Yashoda’s cheek at **(858,313)** is **RGB (125,66,8), R−B 117**; Nandagopan’s cheek at **(1411,306)** is **RGB (170,93,43), R−B 127**. Yashoda and Nandagopan read as natural warm brown, not orange; Nandagopan is slightly above the approximate guide but does not read orange at full size.
- **Verdict: PASS.** This verdict applies only to the candidate checksum above.

### S004 — v006 landscape

- **Candidate:** `artifacts/d049/s004/landscape/candidate-v006.png` — **SHA-256:** `7437a4ba7d8ec1d79fe2245804275d7559e1983ce29f3c3ddec9bc5d71ac1848` — **1670×942**.
- **Review time:** 2026-11-26T07:45:48Z.
- **Anatomy:** Krishna sits naturally in the covered wagon, speaking to three separated women; cattle, cart, and wheels form a coherent traveling scene. The yoked oxen overlap in depth but remain distinguishable, without a visible extra or fused limb. The women have connected ordinary arms and bodies.
- **Faces:** Krishna and all three women have clear, distinct faces and natural expressions. No malformed or duplicated person is visible.
- **Hands/feet:** Krishna’s open speaking hand shows four fingers and a thumb. His other hand rests over the cart rail with four visible fingertips; the thumb is obscured by the rail. The women’s pot, basket, and listening gestures show no extra/fused digit at the visible scale. Their feet are covered or outside the sari hems; no cropped key extremity is present.
- **Clothing and cast:** Krishna wears the contract yellow dhoti, muted red-orange shawl, low band, and single feather. The women wear modest village saris in muted olive, rose, and red with restrained jewelry. The bare male upper torso is ordinary traditional dress. No palace-like regalia appears.
- **Text/signature artifacts:** No sound glyphs, speech bubbles, music, letters, captions, signature, or watermark appear; inspected the full frame, ground, water, and corners.
- **Scene and reference fidelity:** Krishna speaks from the wagon (he is not playing a flute); three women listen as cattle and cart establish travel. The disclosed D049 photo 004 mismatch is present: it depicts people by/in water and does not establish this travel episode, so it is excluded. D001 images guide style and D066 images Krishna identity.
- **Character/deity contract and skin:** Krishna has a plain forehead and ordinary two-arm anatomy. His 13×13 cheek median at **(961,196)** is **RGB (72,98,143), B−R 71**, deep indigo blue. A gopika cheek at **(321,331)** is **RGB (169,95,47), R−B 122**; it reads as natural warm brown, not orange, at full size.
- **Verdict: PASS.** This verdict applies only to the candidate checksum above.

### S005 — v009 landscape

- **Candidate:** `artifacts/d049/s005/landscape/candidate-v009.png` — **SHA-256:** `22aa4c74071e87f531cc5714b756b21fd1e4dd4dd1bd6fcceec973e8e1498266` — **1672×941**.
- **Review time:** 2026-11-26T07:45:48Z.
- **Anatomy:** Krishna is a single youthful figure with two attached arms, two legs, and natural proportions. The cows and calf in the meadow remain distinct and coherent. No duplicate person or creature is visible.
- **Faces:** Krishna’s profile is well formed and readable; the eye, nose, mouth, and hairline have no visible malformed marks.
- **Hands/feet:** Krishna’s raised open hand shows four fingers and a thumb; his lowered hand shows four fingers and a thumb. Both visible feet show five toe forms. No extra or fused digits are visible.
- **Clothing and cast:** Yellow dhoti, muted red-orange shawl, a single low band and one upright peacock feather. His chest is bare in ordinary traditional dress. There are no additional people or palace ornaments.
- **Text/signature artifacts:** No text, watermark, signature, or suspicious marks are visible in the foliage, grass, water, or corners.
- **Scene and reference fidelity:** Flowering kunda-like trees and dense green grass dominate the grove, with Krishna visibly beholding them; there is no literal gem floor or glowing ray. Photo 005 is broad meadow/cow-calf context only and does not depict the flowering trees; the candidate adds the required grove rather than reproducing the near-square reference. D001 images guide style and D066 images Krishna identity.
- **Character/deity contract and skin:** Krishna’s forehead is smooth and unmarked, his face is youthful, and his blue skin reads as deep matte indigo. The simple band and single feather match the contract; no tall crown, duplicate, or extra limb is present.
- **Verdict: PASS.** This verdict applies only to the candidate checksum above.

## Recommendation and approval state

All five selected landscape candidates pass this independent visual review for their exact checksums and the frozen plan/character bytes listed above. The disclosed reference mismatches/context-only limits are present and have been judged according to the plan. No needs-fix region was found under the stated full-image noticeability standard. These findings do not approve any artwork: every candidate remains unapproved, and only explicit user approval may update the approval manifest or master checksums.

I completed the semantic captain-call inventory for this review: **empty**. The standing pending captain art approval is the existing approval state, not a new decision raised by this visual review.
