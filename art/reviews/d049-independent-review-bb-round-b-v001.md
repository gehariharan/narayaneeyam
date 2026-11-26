# D049 landscape candidate review: stanzas 6–10

## Scope and method

I independently reviewed each selected landscape candidate against the frozen final scene plan, the applicable character contracts, the mapped reference photo where one is used, the D001 rendering references, and the two Krishna identity references. I read `STUDIO.md`, the frozen plan and bible files, `content/daskams/d049.json`, `content/sources/d049/reference-map.json`, and `intake/D049/photo-captions.txt`. I did not read any prior review record, review report, producer note file, or review/status/evidence file.

I verified the expected checksums with `sha256sum -c` against a manifest generated in this worktree's `.review-scratch/d049-review-checksums.sha256`; all 25 listed files returned `OK`. I viewed all five candidates separately at full resolution, then made focused face, hand/foot, figure, and corner crops with ImageMagick into `.review-scratch/` in this worktree and inspected those crops. The crop and enlargement commands always wrote to that scratch directory; the candidates and references remained read-only. I also inspected local photos 006–010. All five corresponding OneDrive photos have the same SHA-256 as their local copies, so those exact photo bytes were reviewed.

Skin samples below are 12×12-pixel skin-only cheek or torso patches. I used ImageMagick channel medians; `R-B` is the red median minus blue median. For Krishna, `B-R` is reported as a check against the plan's minimum blue contrast. I considered the guide approximate and also judged the visible color in the full image.

## Exact inputs and checksum binding

### Frozen contract files actually read

| File | SHA-256 read |
|---|---|
| `data/d049-production/review-contract-b/art/plans/d049.json` | `062c8131e17b021e6ca991eb59efe8897f4f8905d84381083e0b243f0e821195` |
| `data/d049-production/review-contract-b/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d049-production/review-contract-b/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `data/d049-production/review-contract-b/art/bible/characters/d072-balarama-vraja-youth/character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` |
| `data/d049-production/review-contract-b/art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `data/d049-production/review-contract-b/art/bible/characters/d049-upananda/character.json` | `4e6b1062a46c055ffab967c291a73a46e044034a1314ac2a6a468c8d4730b944` |
| `data/d049-production/review-contract-b/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `data/d049-production/review-contract-b/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `data/d049-production/review-contract-b/art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |

### Other checked source files and visual references

| File | SHA-256 |
|---|---|
| `content/sources/d049/reference-map.json` | `3bc189e23290e0875121b105973c3259f194bbd3953f6ce62f441d186c1239e4` |
| `intake/D049/photo-captions.txt` | `d068a39bc99bc27dd0929fcb357193e2033cce464d5e2a28f2b72d023de61865` |
| `artifacts/d001/s004/landscape/master.png` | `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d` |
| `artifacts/d001/s008/landscape/master.png` | `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995` |
| `artifacts/d067/references/krishna-vrindavan-youth/d066-s002-candidate-v004.png` | `295c2fd87aabb9dfd655b69cdb2811d5b26da2483ea914cebeff11bc2a837068` |
| `artifacts/d067/references/krishna-vrindavan-youth/d066-s010-candidate-v004.png` | `e39a40b594b26291fdff2638ebb70c4cb08a330573c0a20c9e775f48cd66c96f` |
| `intake/D049/006.jpg` | `b8c3fdd37966db4c76ab6127f2ffe1a00cc859175ef7f6397aa88359f196626f` |
| `intake/D049/007.jpg` | `552b0aef63e47b82e587e9fd5393460c3f4d6db27fe207c9b6890b89b90c97d7` |
| `intake/D049/008.jpg` | `45f6f811e64dca53c897c8e85c276423c6bcc19f95d832bec8a1f7f8bd173f63` |
| `intake/D049/009.jpg` | `f7ee0cfa9facd959abfd7c10f6c8962bd02217a193d443cd6dccd9e83a5d816d` |
| `intake/D049/010.jpg` | `f7d1720645a05cd1a4e879908ad322d196bbe3c6f7a9f35e720d5da3400ecc53` |

### Candidate identity

| Stanza / version | Candidate | Dimensions | Verified SHA-256 | Independent verdict |
|---|---|---:|---|---|
| 6 / v007 | `artifacts/d049/s006/landscape/candidate-v007.png` | 1670×942 | `d7fdd3c21f45b38205e7ac2d35af7f993f6c70bac91b8af6727acf30c6e153c5` | **needs-fix** |
| 7 / v011 | `artifacts/d049/s007/landscape/candidate-v011.png` | 1672×941 | `52aa97af366ef1f5bc34af9e3c1e8edc416382207bf89f4b34830f21e0087401` | **needs-fix** |
| 8 / v004 | `artifacts/d049/s008/landscape/candidate-v004.png` | 1672×941 | `a5f923c62e72fc9d96a0c17cc97c96621a1dbb62253e7bbca51bb29c170b1225` | **pass** |
| 9 / v008 | `artifacts/d049/s009/landscape/candidate-v008.png` | 1670×942 | `303f69e0fd3c1467bd456664c7aaed504687029b93ddfcbca9f4258a9cec4219` | **pass** |
| 10 / v013 | `artifacts/d049/s010/landscape/candidate-v013.png` | 1672×941 | `d675b58ee58ccff7ec6703b5694590726bf67af25c78e873cdb9b8709c0d6223` | **needs-fix** |

## Per-candidate findings

### Stanza 6 — v007 — needs-fix

- **Review time (UTC):** 2026-11-25T22:18:14Z

- **Anatomy:** Krishna has one face, two connected arms, and two legs. The three foreground gopas are separate people with connected limbs; I saw no fused bodies, duplicate people, malformed faces, extra limbs, or malformed calves. Krishna's two visible feet each show five toes.
- **Faces:** Krishna and the boys have legible, distinct faces. A pale curved vertical mark is visible on Krishna's forehead, approximately within native pixels `x=951–960, y=220–230`. It contradicts the plain smooth forehead required by the Krishna contract and is discernible in the full image.
- **Hands/feet:** Krishna's raised open hand shows five digits. His lowered relaxed hand shows four separated fingers; the thumb turns inward and is not fully exposed. Both feet show five toes. No visible digit is malformed.
- **Clothing and cast:** Krishna's yellow dhoti, muted red-orange shawl, dark curls, low band and single feather fit the contract. The foreground gopas wear simple village cloth, but each of three visible gopas has an undisclosed gold hoop earring: approximately `x=319–334, y=381–402`; `x=441–456, y=286–307`; and `x=659–676, y=319–342`. The earrings stand out against the faces at full size; the gopas contract specifies simple cowherd clothing and does not disclose jewelry.
- **Text/signature artifacts:** None seen. I checked the roof/leaf corners and ground corners closely; no readable or pseudo-text, signature, logo, or watermark is present.
- **Scene and reference fidelity:** The final plan calls for settled homes and Krishna exploring with boys. The candidate shows homes, a settled community, Krishna and boys surveying the grove. The disclosed mismatch for photo 006 is present: that photo is the composite flute/gopi-and-cart scene identified by the map and is excluded, as the plan requires. The candidate does not reproduce that mismatch.
- **Character/deity contract:** Krishna's skin-only patch median is RGB `(62,94,128)`, `B-R=66`, consistent with deep blue. A gopa cheek patch is `(173,94,43)`, `R-B=130`; this is about 10 above the approximate guide but reads as warm medium brown with a terracotta cast, not saturated orange. The plain-forehead mark and the three gold hoops are the contract violations.
- **Verdict:** **needs-fix**, bound to the candidate SHA above. Remove the forehead mark and the undisclosed hoops in a new version.

### Stanza 7 — v011 — needs-fix

- **Review time (UTC):** 2026-11-25T22:18:14Z

- **Anatomy:** Krishna is a single youthful figure with ordinary attached limbs and no visible anatomy defect or duplication.
- **Faces:** His face is calm and legible. A small gold earring/stud is visible on the near earlobe at approximately `x=331–335, y=367–371`. The contrasting gold spot can be distinguished at full resolution; the character contract limits his head adornment to a low band and one feather and does not disclose an earring.
- **Hands/feet:** The open hand planted on the bank shows five digits. On the hand resting over his raised knee, four fingers are visible and the thumb is obscured by the pose. The exposed foot shows five toes; the other foot is covered by the dhoti. These are normal pose occlusions, not malformed digits.
- **Clothing and cast:** Yellow dhoti, muted red-orange shawl, dark curls, plain forehead, low band and one upright feather otherwise fit the Krishna contract. No other person is depicted.
- **Text/signature artifacts:** None seen in the image, water, ground, or checked corners. Painted water bands are ordinary river texture; no letter-like mark, signature, or watermark is present.
- **Scene and reference fidelity:** Photo 007's clear water, swans and lotus blossoms are carried into a newly composed landscape. The winding river and open lotus blossoms express the plan's comparison without a literal face in the water. The calm seated pose and forward foot match the plan.
- **Character/deity contract:** Krishna's skin-only patch median is RGB `(75,102,128)`, `B-R=53`; the blue reads as blue, not a different skin color. There is no required warm-brown human cast in this scene. The small earring is the sole visible contract defect.
- **Verdict:** **needs-fix**, bound to the candidate SHA above. Remove the earring in a new version.

### Stanza 8 — v004 — pass

- **Review time (UTC):** 2026-11-25T22:18:14Z

- **Anatomy:** Krishna has one face, two attached arms, and two legs, with natural proportions. His two visible feet each show five toes. No malformed anatomy or accidental duplication is visible. The three peacocks each have one head, a coherent body, two legs and a distinct tail.
- **Faces:** Krishna's face is intact and readable, with a plain forehead. No additional face or head ornament is visible.
- **Hands/feet:** The hand resting on the rock shows five digits. The relaxed hanging hand shows four separated fingers, with the thumb turned inward; it is not an open palm. Both visible feet show five toes. No malformed hand or toe is visible.
- **Clothing and cast:** Krishna wears the yellow dhoti and muted red-orange shawl, with the low band and one upright feather. No extra figure or unplanned ornament is visible.
- **Text/signature artifacts:** None seen. The rock and vegetation corners have no text, signature, logo, or watermark.
- **Scene and reference fidelity:** The high Govardhana ridges and several peacocks answer the plan and the mountain/peacock reference photo 008. Mineral color is shown as opaque painted bands; I see no glowing gems, rays, storm, or later hill-lifting episode.
- **Character/deity contract:** Krishna's skin-only patch median is RGB `(83,111,136)`, `B-R=53`, retaining the required blue family. No warm-brown human sample is applicable. Clothing, headwear and anatomy fit the contract.
- **Verdict:** **pass**, bound to the candidate SHA above. This is an independent visual-review pass only; it does not approve the artwork.

### Stanza 9 — v008 — pass

- **Review time (UTC):** 2026-11-25T22:18:14Z

- **Anatomy:** Krishna and the three gopa boys are distinct, naturally proportioned figures with connected limbs. No malformed face, fused person, duplicate, or extra limb is visible. The peripheral left figure enters the mural edge naturally; no key feature of Krishna is cut off.
- **Faces:** Faces are distinct and readable. Krishna has a plain forehead, low band and one feather; I see no earring or other undisclosed mark.
- **Hands/feet:** Krishna's extended open hand shows five digits. His lowered relaxed hand shows four separated fingers; its thumb is turned inward. The gopa making a palm-up gesture shows five digits. Krishna's two exposed feet show five toes each. The clearly exposed gopa feet show five toes; one peripheral foot runs close to the left edge without a malformed cutoff.
- **Clothing and cast:** Krishna wears the contracted yellow dhoti and muted red-orange shawl. The boys wear simple dhotis and muted shawls; their faces and hairstyles are distinct. No woman is added or identified, matching the plan's restriction on the unidentified woman in photo 009.
- **Text/signature artifacts:** None seen in water, the sandy bank, vegetation, or corners. The river's painted wave lines are not text. No signature or watermark is present.
- **Scene and reference fidelity:** The winding Yamuna follows the forest edge with Krishna and boys walking alongside it. Photo 009 is used thematically for Krishna and water; its woman is not reused or named. The candidate follows the scene plan.
- **Character/deity contract:** Krishna patch median RGB `(62,98,158)`, `B-R=96`. Gopa cheek medians are `(167,99,46)`, `R-B=121`; `(176,105,51)`, `R-B=125`; and `(128,72,41)`, `R-B=87`. The brighter patches are slightly over the approximate guide, but the full image reads as warm brown with an orange tint, not saturated orange. No color defect is visible.
- **Verdict:** **pass**, bound to the candidate SHA above. This is an independent visual-review pass only; it does not approve the artwork.

### Stanza 10 — v013 — needs-fix

- **Review time (UTC):** 2026-11-25T22:18:14Z

- **Anatomy:** Krishna, youthful Balarama, the boys and the calves are distinct and connected. Krishna and Balarama each have two arms and two legs; no fused people, duplicated boys, malformed faces, or malformed calves are visible. Krishna's two visible feet and Balarama's two visible feet each show five toes.
- **Faces:** Both brothers have clear, youthful, distinct faces. Krishna's forehead is plain. A tiny gold stud is visible on Krishna's near earlobe around `x=772–776, y=311–315`; it is extra ornament beyond the contracted band and feather and is visible against the blue ear at full resolution.
- **Hands/feet:** Krishna's hand resting on the calf shows five digits. His lowered hand has four separated fingers; the thumb is turned inward. Balarama's staff hand is closed around the staff; his other relaxed hand has four visible fingers with the thumb turned in. The visible feet of both brothers each show five toes. The other human and calf limbs look connected and proportionate.
- **Clothing and cast:** Krishna's dress is consistent. Balarama is a warm-brown youth, with simple cloth and a modest white-flower/green-leaf garland. His dhoti, however, is white/cream over approximately `x=360–555, y=430–760` instead of the required cool blue. The cream upper drape is allowed; the prominent white dhoti is a clear color departure from both the plan and Balarama contract. The bare male upper torso is ordinary traditional dress and is not a defect. Several calves are individually distinct as required.
- **Text/signature artifacts:** None seen in the grass, trunks, or any checked corner. No text, signature, logo, or watermark is present.
- **Scene and reference fidelity:** Krishna, distinct youthful Balarama, boys and several calves appear in a wooded pasture, matching the plan and the cast in photo 010. The candidate separates the calves more clearly than the reference. No adult-cattle management or milking is shown.
- **Character/deity contract:** Krishna patch median RGB `(73,105,146)`, `B-R=73`. Balarama cheek median `(184,122,67)`, `R-B=117`; a gopa cheek median `(185,124,73)`, `R-B=112`. Both human patches read as natural warm brown. Balarama's age, complexion and ordinary anatomy fit; the white dhoti and Krishna's extra earring do not.
- **Verdict:** **needs-fix**, bound to the candidate SHA above. Remove Krishna's stud and use the contracted cool-blue dhoti for Balarama in a new version.

## Evidence commands and source locations

Commands used included:

- `sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/.review-scratch/d049-review-checksums.sha256'` — every candidate, mapped photo, listed visual reference, source-map/caption file, and frozen contract file returned `OK`.
- `identify -format '%f %wx%h %[colorspace]\n' <candidate paths>` — dimensions recorded above; each candidate is sRGB.
- `magick <read-only source> -crop <region> +repage -filter point -resize <enlargement> '<absolute .review-scratch output>'` — focused crops for faces, hands, feet, and ornaments. Four-corner crops for each candidate were written to `.review-scratch/d049-sNNN-corners.png` and inspected. No input image was edited.
- `magick <image> -crop '12x12+x+y' +repage -channel RGB -separate +channel -format '%[fx:median]\n' info:` — channel medians reported above.
- A read-only SHA comparison of local and OneDrive `intake/D049/006.jpg` through `010.jpg` returned `same=True` for all five.

Relevant source locations: final plan stanza entries begin at `art/plans/d049.json:300` (S006), `:351` (S007), `:400` (S008), `:450` (S009), and `:500` (S010). Chapter stanza entries begin at `content/daskams/d049.json:68`, `:78`, `:88`, `:98`, and `:108`. The mapping and photo dispositions are at `content/sources/d049/reference-map.json:12–16`. The series palette and deity color rules are in `art/bible/series.json:22,45`; Krishna's skin, forehead, headwear and anatomy are at `art/bible/characters/krishna-vrindavan-youth/character.json:8,11–13,48–49`; Balarama's skin and clothing are at `art/bible/characters/d072-balarama-vraja-youth/character.json:16,19–20`; and gopa skin/clothing rules are at `art/bible/characters/gopas/character.json:18,21`.

## Conclusion

Two candidates pass independent visual review (S008 v004 and S009 v008); three need a new version with the specific fixes above (S006 v007, S007 v011, S010 v013). No verdict applies to another checksum. No artwork is approved, and I did not change an approval manifest or project source file. Recommendation: keep all five candidates unapproved; address the three listed needs-fix findings, then obtain fresh exact-checksum visual reviews for the new versions.

Captain-call inventory for this review: **empty**. These findings are actionable review results and raise no unresolved captain choice; the existing pending captain art approval remains a standing state, not a decision made here.

Review close-out time recorded in UTC for these five exact-checksum judgements: **2026-11-25T22:18:14Z**.
