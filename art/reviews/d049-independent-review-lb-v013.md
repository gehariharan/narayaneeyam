# D049 landscape candidate review (stanzas 6–10)

## Scope and method

I independently reviewed each supplied landscape candidate at native size, then enlarged focused crops of faces, hands, feet, group interactions, and (for stanza 10) calves. I compared each frame with its stanza’s final plan entry, the applicable character contracts, the D001 style references, the D066 Krishna identity references, and the mapped D049 photo where the plan permits one. Scratch crops and color patches were written only under the reviewer worktree’s `.review-scratch/`; the candidate and reference files were not modified.

This is an independent exact-checksum review, not producer observation and not artwork approval. Each verdict applies only to the candidate SHA-256 below. No candidate is approved.

Input verification used programmatically assembled checksum lists and `sha256sum -c`. All 24 listed entries returned `OK`: five candidates, four D001/D066 reference images, four numbered source photos, the reference map, captions, and nine frozen plan/series/character files. Candidate dimensions were confirmed with `identify`; ImageMagick native-resolution crops were enlarged 2×–6× for focused inspection. Color samples below are 13×13 skin-only patches, with channel medians shown as RGB and red-minus-blue (R-B) or blue-minus-red (B-R).

## Frozen contract and source-file hashes

All actual SHA-256 values matched the expected values supplied in the brief; the listed values are the bytes read for this review.

| File | SHA-256 |
|---|---|
| Frozen final plan `data/d049-production/review-contract-l/art/plans/d049.json` | `6e6d7afd2f736b7ce4fa00aebc47ed0edd20f65386d9d799f6b38d68f1ed66b5` |
| Frozen series bible `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Krishna youth `.../characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Balarama youth `.../characters/d072-balarama-vraja-youth/character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` |
| Nandagopan `.../characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| Upananda `.../characters/d049-upananda/character.json` | `4e6b1062a46c055ffab967c291a73a46e044034a1314ac2a6a468c8d4730b944` |
| Gopas `.../characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| Gopikas `.../characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Yashoda `.../characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `content/sources/d049/reference-map.json` | `3bc189e23290e0875121b105973c3259f194bbd3953f6ce62f441d186c1239e4` |
| `intake/D049/photo-captions.txt` | `d068a39bc99bc27dd0929fcb357193e2033cce464d5e2a28f2b72d023de61865` |

The four repeatedly used reference hashes also verified: D001 S004 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`, D001 S008 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`, D066 S002 `295c2fd87aabb9dfd655b69cdb2811d5b26da2483ea914cebeff11bc2a837068`, and D066 S010 `e39a40b594b26291fdff2638ebb70c4cb08a330573c0a20c9e775f48cd66c96f`.

The plan’s stanza entries and candidate identities are at `plans/d049.json:300–347` (S006), `:351–396` (S007), `:400–446` (S008), `:450–496` (S009), and `:500–548` (S010). The mapped photo decisions are at `content/sources/d049/reference-map.json:12–16`; the preserved source commentary for these stanzas is at `intake/D049/photo-captions.txt:17–30`, and sourced chapter stanza entries are at `content/daskams/d049.json:68–117`.

## Image findings

### Stanza 6 — v012

- Candidate: `artifacts/d049/s006/landscape/candidate-v012.png`; native size 1670×942; SHA-256 `cb0f0411c113a95c29fc7250a880dbad2b461c8afab0831c17f5ea6a0868ab1b`.
- Review time: 2026-11-26T07:42:19Z.
- Anatomy: Krishna and the three foreground boys have connected, ordinary two-arm/two-leg anatomy and plausible walking poses. The distant household figures and animals are too small for digit counting, and nothing visible at that scale is malformed. No duplicate person or fused body seen.
- Faces: Krishna’s face is youthful, readable, and distinct from the three boys; the boys’ faces are also distinguishable. No malformed face or accidental duplicate.
- Hands/feet: Krishna’s raised open hand shows one thumb and four fingers. His lowered relaxed hand shows four separated fingers and a thumb; both visible feet show five toe forms each. The green-clothed boy’s open chest-level gesture shows thumb plus four fingers. No excess or fused digits seen.
- Clothing and cast: Simple dhotis and shawls; the boys’ bare male torsos are ordinary traditional dress. The group is Krishna with boys, without a flute or gopi foreground. No sexualized framing or palace regalia.
- Text/signature artifacts: None seen on the vegetation, ground, house surfaces, or frame corners; no text, signature, logo, or watermark.
- Scene and reference fidelity: The candidate shows a settled village, homes, resting residents, and Krishna walking with boys toward flowering woodland, as required. The plan explicitly excludes photo 006 because it is a composite-looking flute/gopi foreground with carts; that disclosed mismatch is present in the mapped source and was not used as a scene reference. I judged the candidate against the plan and the other style/identity anchors.
- Character/deity contract: Krishna has deep blue skin, dark curly hair, yellow dhoti, muted orange-red shawl, a plain forehead, one low band, and one feather. Three skin-only gopa cheek samples measured RGB `(178,107,59)` R-B 119, `(181,111,64)` R-B 117, and `(186,115,65)` R-B 121. They read as natural warm brown, not orange. No undisclosed character mark or ornament seen.
- **Verdict: pass.**

### Stanza 7 — v016

- Candidate: `artifacts/d049/s007/landscape/candidate-v016.png`; native size 1672×941; SHA-256 `76933748a79958bba5ef74cc3ac5712fcb7768c9966361dfe10e23f953d4daae`.
- Review time: 2026-11-26T07:42:19Z.
- Anatomy: Krishna is seated with connected limbs and ordinary proportions. Swans have coherent necks, bodies, wings, and bills; no malformed or duplicate creature/person seen.
- Faces: Krishna’s profile is clean and youthful, with a plain forehead and bare ear; no malformed features.
- Hands/feet: The river-facing open palm shows thumb plus four fingers. The hand resting on the raised knee has four visible fingers, with the thumb occluded naturally by the knee. The forward foot shows five distinct toes. No wrong digit form seen.
- Clothing and cast: Yellow dhoti and muted red-orange shawl; one visible figure only. Dress is modest and traditional.
- Text/signature artifacts: None seen in water, shoreline, foliage, or corners.
- Scene and reference fidelity: The river winds through the landscape with open lotus blossoms and two swans; no literal face is formed in the water. Photo 007 is a clear thematic Yamuna/swans/lotus match; the candidate recomposes those elements as a landscape rather than copying the vertical sunset composition.
- Character/deity contract: Krishna’s cheek sample measured RGB `(87,125,179)`, B-R 92. It reads blue and not as a different deity color; the single feather and low band are present, with no forehead mark or extra limb.
- **Verdict: pass.**

### Stanza 8 — v010

- Candidate: `artifacts/d049/s008/landscape/candidate-v010.png`; native size 1672×941; SHA-256 `65b48267213e6adf18a7487b981aef631921cca9af21d68aa872ab7abc33e773`.
- Review time: 2026-11-26T07:42:19Z.
- Anatomy: Krishna has ordinary connected limbs and seated proportions. The three peacocks have coherent heads, beaks, bodies, legs, and tails; no malformed or duplicate figure/creature seen.
- Faces: Krishna’s face is intact, youthful, and unmarked; no malformed features.
- Hands/feet: Both open hands show one thumb plus four separate fingers. Both visible feet show five toe forms. No missing, fused, or extra digits seen.
- Clothing and cast: Yellow dhoti and muted orange-red shawl, bare male torso, simple low band and one feather. No other person is present; dress is ordinary and modest.
- Text/signature artifacts: None seen on the mountain, water, grass, or corners.
- Scene and reference fidelity: The high ridges, mineral-colored flat bands, river, and peacocks fulfill the Govardhana plan. The candidate does not show hill-lifting, storm shelter, beams, or visibly emitted gem light. Photo 008 is a clear thematic mountain/peacock match; the vertical luminous source is recomposed in native landscape format.
- Character/deity contract: Krishna’s cheek sample measured RGB `(59,77,107)`, B-R 48. Skin reads deep indigo-blue, not orange or another deity color. Forehead is plain, and the single feather/low band are present.
- **Verdict: pass.**

### Stanza 9 — v009

- Candidate: `artifacts/d049/s009/landscape/candidate-v009.png`; native size 1670×942; SHA-256 `0085b476c49f53a1285b58c3ac2aa40cc5f592a32e94c75c3b9d13d403fe1474`.
- Review time: 2026-11-26T07:42:19Z.
- Anatomy: Krishna and three gopa boys have connected ordinary anatomy and distinct poses. No fused bodies, malformed faces, or duplicate people seen.
- Faces: Krishna’s youthful face is intact and distinct. Each boy has a separate, readable face; none is a copied duplicate.
- Hands/feet: Krishna’s river-facing open hand shows one thumb plus four fingers; his lowered relaxed hand shows four separated fingers and a thumb. Both visible feet show five toe forms. The green-clothed gopa’s open gesture shows thumb plus four fingers; the other boys’ hands are closed around their garments. No digit errors seen.
- Clothing and cast: Simple traditional dhotis and shawls, including bare male torsos; all are modest. The plan’s few boys are present; the candidate does not invent or identify a woman as Yamuna.
- Text/signature artifacts: None seen along the path, river, grass, or corners.
- Scene and reference fidelity: Krishna and boys walk along a forest edge beside a strongly curved Yamuna. Photo 009 is a thematic Krishna/water/Yamuna encounter match; the candidate uses the river’s shape as personification without adding the source photo’s woman as a character.
- Character/deity contract: Three gopa cheek samples measured RGB `(159,94,49)` R-B 110, `(158,95,51)` R-B 107, and `(159,93,48)` R-B 111. All read natural warm brown, not orange. Krishna’s cheek patch measured `(58,97,164)`, B-R 106; his forehead is plain, with the low band and single feather. No undisclosed mark or ornament seen.
- **Verdict: pass.**

### Stanza 10 — v018

- Candidate: `artifacts/d049/s010/landscape/candidate-v018.png`; native size 1672×941; SHA-256 `38cdf575aa6ac167b71e244eedbe4514d743fda2959625a5ca253f513e101d76`.
- Review time: 2026-11-26T07:42:19Z.
- Anatomy: Krishna, Balarama, the boys, and the visible calves have connected, ordinary limb arrangements. The calf group contains at least four distinct animals; overlap does not create a fused or malformed animal. No duplicate person or malformed face seen.
- Faces: Krishna and Balarama have distinct youthful faces; the three boys are distinguishable. Krishna’s face is unmarked. No malformed face seen.
- Hands/feet: Krishna’s hand on the calf shows thumb plus four fingers; his lowered hand shows four fingers with the thumb turned inward. Balarama holds his staff with closed hands. Krishna’s two visible feet each show five toe forms. Balarama’s forward foot shows five distinct toe forms; the rear foot is foreshortened, with some toes overlapping naturally and no visible wrong digit. No extra or fused digits seen.
- Clothing and cast: Krishna wears yellow with an orange-red shawl. Balarama is a distinct taller youth in a simple blue dhoti and cream upper cloth, with warm-brown skin; he is not blue-skinned or toddler-sized. The gopas wear simple traditional wraps; bare male torsos are ordinary dress. No sexualized framing or palace regalia.
- Text/signature artifacts: None seen in grass, on animal bodies, or at the image corners.
- Scene and reference fidelity: Krishna, Balarama, boys, wooded pasture, and distinct calves are present. The scene shows herding rather than milking or adult cattle management. Photo 010 is a clear thematic Krishna/Balarama/cowherd/woodland match; its calves are indistinct, while the candidate makes several calves separate as the plan requires.
- Character/deity contract: Krishna’s cheek measured RGB `(80,116,159)`, B-R 79 (deep blue). Balarama measured `(199,128,68)`, R-B 131; three gopa cheek samples measured `(199,131,68)` R-B 131, `(195,128,67)` R-B 128, and `(199,136,78)` R-B 121. These skin patches read as warm brown, not orange. Balarama’s blue garment, youthful build, and distinct face conform; Krishna’s low band, single feather, and plain forehead conform. No undisclosed mark or ornament seen.
- **Verdict: pass.**

## Recommendation and inventory

All five candidates pass the specified visible-defect gate. The documented stanza 6 reference mismatch is respected; the other four candidates follow their mapped thematic scene references. Retain these exact versions for consideration, but keep them unapproved until the captain’s separate art-approval decision. No captain decision was raised by this review; my captain-call inventory is empty.

## Evidence commands

- Generated SHA-256 lists in reviewer scratch and ran `sha256sum -c` on the candidate/reference/source list and frozen contract list; all entries returned `OK`.
- Read the frozen plan, series bible, seven character contracts, `reference-map.json`, `photo-captions.txt`, and `content/daskams/d049.json`; plan/source line references are given above.
- Inspected full candidates and mapped photos using the local image viewer. Created enlarged crops with `magick <read-only-input> -crop ... +repage -resize ... <absolute .review-scratch output>`; inspected faces, hands, feet, cast, animals, ground, water, and corners.
- Measured 13×13 patches with `magick <scratch-patch> -format '%[fx:median.r*255],%[fx:median.g*255],%[fx:median.b*255]' info:`; values and R-B/B-R arithmetic are recorded per image.
- Confirmed candidate dimensions with `identify -format '%f %wx%h'`.
- Captured review timestamp with `date -u '+%Y-%m-%dT%H:%M:%SZ'`.
