# D049 landscape candidate review

Independent visual review of the five selected D049 landscape candidates, bound to the exact plan and character-contract bytes listed below. I opened each full image at native dimensions, made and inspected focused enlargements under this worktree's `.review-scratch/crops/`, and compared the available stanza photos plus D001 style and D066 Krishna identity references. The photos, candidates, contract files, and approval data were not changed. No art approval is given or implied.

## Hash verification and contract bytes

I generated `.review-scratch/sha256-review-inputs.txt` programmatically from the brief's expected path/hash pairs, then ran `sha256sum -c` on that manifest. All 24 listed inputs printed `OK` (5 candidates, 4 chapter photos, 4 shared style/identity references, 2 local source files, and 9 frozen contract files); exit status was 0. The command was run from Python as `subprocess.run(['sha256sum', '-c', manifest])`. Candidate and chapter-photo hashes are repeated in their findings below.

| Contract/source file read | SHA-256 |
|---|---|
| Frozen `art/plans/d049.json` | `e293892801f36d9aca4854b6da43944c7f6a8b3d9279f148285f043e7ddc4cff` |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Frozen `characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Frozen `characters/d072-balarama-vraja-youth/character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` |
| Frozen `characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| Frozen `characters/d049-upananda/character.json` | `4e6b1062a46c055ffab967c291a73a46e044034a1314ac2a6a468c8d4730b944` |
| Frozen `characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| Frozen `characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Frozen `characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `content/sources/d049/reference-map.json` | `3bc189e23290e0875121b105973c3259f194bbd3953f6ce62f441d186c1239e4` |
| `intake/D049/photo-captions.txt` | `d068a39bc99bc27dd0929fcb357193e2033cce464d5e2a28f2b72d023de61865` |

The `magick identify` output was `1670x942` (S006), `1672x941` (S007), `1672x941` (S008), `1670x942` (S009), and `1672x941` (S010). Focused crops were made with `magick INPUT -crop WxH+X+Y +repage -filter point -resize 200% SCRATCH_OUTPUT`; each output path was checked to be in this worktree's `.review-scratch/`, outside `artifacts/` and `intake/`. Relevant crop coordinates are recorded with findings. No in-place image operation was used.

The final plan's entries are at `art/plans/d049.json` lines 300–348 (S006), 351–397 (S007), 400–447 (S008), 450–497 (S009), and 500–549 (S010). The reference mappings are `content/sources/d049/reference-map.json` lines 12–16. Krishna's youth, blue-skin, costume, plain-forehead, one-feather and ordinary-anatomy rules are in `characters/krishna-vrindavan-youth/character.json` lines 5–14; Balarama's stage, warm light-brown skin and blue clothing rules are in `characters/d072-balarama-vraja-youth/character.json` lines 13–26; the gopa group rules are in `characters/gopas/character.json` lines 15–27. The series style contract is in `art/bible/series.json` lines 4–24 and 26–64. Relevant D001 rendering references and both D066 identity references were visually opened.

## Individual findings

### Stanza 6 — `candidate-v012.png`

- **Version / checksum:** v012; `cb0f0411c113a95c29fc7250a880dbad2b461c8afab0831c17f5ea6a0868ab1b` (verified).
- **Review time:** 2026-11-26 06:42:01 UTC.
- **Anatomy:** Three distinct foreground boys and Krishna have connected shoulders, arms, legs and feet with no duplicate or fused person. No malformed body or face is apparent at native scale or in the `.review-scratch/crops/s006/figures.png` enlargement.
- **Faces:** Four foreground faces are individually legible and normally formed; Krishna reads as a youthful figure. No stray facial marks or duplicate face is visible.
- **Hands / feet:** Krishna's raised open hand in crop `s006/krishna-face-hand.png` shows one thumb and four fingers. His relaxed lower hand shows separated digits without a visible extra or fused digit. The boys' gesture hand is distinct; the other hands grip straps/staff. The visible foreground bare feet have five toe forms apiece; no main extremity is cut off.
- **Clothing and cast:** Simple dhotis and shawls, with ordinary bare male upper torsos; no sexualized framing, exposed skin beyond ordinary dress, or palace-style regalia. The small background community is secondary and not visibly cloned.
- **Text / signature artifacts:** None seen in the full frame, corners, ground or vegetation.
- **Scene and reference fidelity:** The stanza-6 photo (006.jpg, `b8c3fdd37966db4c76ab6127f2ffe1a00cc859175ef7f6397aa88359f196626f`) is the disclosed composite-looking flute/gopi-and-cart mismatch; that deviation is present. The candidate appropriately follows the plan instead: new homes, resting people, and Krishna walking with boys toward the forest. It does not reproduce the photo's flute/gopi foreground.
- **Character / deity contract:** Krishna has one youthful face, two arms and two legs, deep blue skin, yellow dhoti, muted red-orange shawl, a low band and one upright peacock feather; forehead is plain and ears are unadorned. Two 13×13 skin-only gopa patches measured median RGB `(185,114,64)`, R−B `121`, and `(179,109,59)`, R−B `120`. They read as warm brown, not orange. The rendering has more saturated foliage and finer texture than the D001 matte reference, but I see no metallic ornament or clear glossy highlight that meets the stated defect threshold.
- **Verdict: pass.**

### Stanza 7 — `candidate-v016.png`

- **Version / checksum:** v016; `76933748a79958bba5ef74cc3ac5712fcb7768c9966361dfe10e23f953d4daae` (verified).
- **Review time:** 2026-11-26 06:42:01 UTC.
- **Anatomy:** Krishna's seated body and limbs attach naturally; no duplicate person or distorted body is visible. The swans have coherent necks, wings and bodies at native scale and in the focused crop.
- **Faces:** Krishna's face is legible and youthful, with no malformed features.
- **Hands / feet:** The open palm shows a thumb plus four separate fingers. The hand resting across the knee shows four visible fingers, with the thumb naturally occluded by the pose. The forward foot has five toes. No visibly wrong digits or cut-off main extremity.
- **Clothing and cast:** Yellow dhoti and muted red-orange shawl; bare upper torso is ordinary traditional male dress. No added people, sexualized framing or excessive regalia.
- **Text / signature artifacts:** None visible, including in the sky, water, plants or corners.
- **Scene and reference fidelity:** Photo 007 (`552b0aef63e47b82e587e9fd5393460c3f4d6db27fe207c9b6890b89b90c97d7`) is a thematic match for water, swans and lotuses. The candidate independently recomposes the vertical photo into a native landscape and includes a winding river, swans, lotus blossoms and seated Krishna. No literal human face is formed in the river.
- **Character / deity contract:** One youthful Krishna, deep matte blue, smooth unmarked forehead, low band and one feather; costume and ordinary two-arm anatomy comply. Skin-only samples are not applicable to the warm-brown requirement for this figure. Compared with D001 the candidate is more brightly colored and finely modeled, but no clearly glossy or metallic effect or contract-breaking ornament is visible.
- **Verdict: pass.**

### Stanza 8 — `candidate-v007.png`

- **Version / checksum:** v007; `1bf9c8e368e741f8fc3a31a447f7d3ebd50a945d821fe183bc54ac566f780030` (verified).
- **Review time:** 2026-11-26 06:42:01 UTC.
- **Anatomy:** Krishna's body, both arms and both legs attach naturally; no duplicated or malformed person. Peacocks have coherent bodies, legs and heads in the native frame and enlarged crop.
- **Faces:** Krishna's youthful face is well formed; no stray forehead mark.
- **Hands / feet:** **Defect:** Krishna's hand placed on the rock has only three separately visible fingers plus a thumb (four digits total). The native-pixel region is approximately `x=95–175, y=542–585`; the enlargement is `.review-scratch/crops/s008/rock-hand.png`. This is a prominent hand on the main figure and the missing fifth digit is visible at native size and unmistakable enlarged. His hanging hand shows five digit forms. Both visible feet show five toes each.
- **Clothing and cast:** Ordinary yellow dhoti and red-orange shawl, bare upper torso in traditional male dress. No sexualized framing or palace-like ornaments.
- **Text / signature artifacts:** None visible in the full frame, corners, rock or foliage.
- **Scene and reference fidelity:** Photo 008 (`45f6f811e64dca53c897c8e85c276423c6bcc19f95d832bec8a1f7f8bd173f63`) is a mountain-and-peacock thematic match. The candidate shows high mineral-colored ridges, three peacocks and Krishna observing the mountain; it does not depict the later hill-lifting episode, beams, storm, sheltering crowd or border.
- **Character / deity contract:** Youthful single-faced, two-armed deep-blue Krishna with low band, single feather, bare forehead and contracted clothing. Skin color is not a warm-brown requirement here. No wrong ornament or deity depiction seen. There is richer modeled texture than the D001 style reference, but it does not change the digit finding.
- **Verdict: needs-fix.** The four-digit hand is a visible anatomy defect; this checksum does not pass.

### Stanza 9 — `candidate-v009.png`

- **Version / checksum:** v009; `0085b476c49f53a1285b58c3ac2aa40cc5f592a32e94c75c3b9d13d403fe1474` (verified).
- **Review time:** 2026-11-26 06:42:01 UTC.
- **Anatomy:** Krishna and three boys remain separate, with connected limbs and no visible fusion, duplicate person or malformed face. The river is not rendered as a body or face.
- **Faces:** All four foreground faces are readable and distinct at native size; no malformed face or accidental repeat seen.
- **Hands / feet:** Krishna's extended open hand shows a thumb and four fingers; his relaxed hand shows five separated digit forms. The gesturing boy's palm shows a thumb and four fingers; other visible hands are gripping cloth or relaxed with no visible extra/fused digit. Krishna's two visible feet each show five toes; the foreground boys' visible feet show five toe forms each. No main face or extremity is cut off.
- **Clothing and cast:** Simple village dhotis and shawls, ordinary bare male upper torsos. No woman has been added or identified as a canonical character; no sexualized framing or palace costume.
- **Text / signature artifacts:** None seen in the full frame, water, path, foliage or corners.
- **Scene and reference fidelity:** Photo 009 (`f7ee0cfa9facd959abfd7c10f6c8962bd02217a193d443cd6dccd9e83a5d816d`) thematically shows Krishna, water and a woman, but the plan says that woman is not a named identity and should not be carried into this scene. That limitation is respected: the candidate shows Krishna and distinct boys by a curved Yamuna and no woman. The forest-edge path and looping river follow the stanza plan.
- **Character / deity contract:** Krishna is youthful, blue, with unmarked forehead, low band and one feather, yellow dhoti and red-orange shawl. Three 13×13 gopa cheek samples measured median RGB `(150,91,48)`, R−B `102`; `(155,94,51)`, R−B `104`; and `(160,94,49)`, R−B `111`. They read as warm brown rather than orange. No crown, mark or extra limb.
- **Verdict: pass.**

### Stanza 10 — `candidate-v018.png`

- **Version / checksum:** v018; `38cdf575aa6ac167b71e244eedbe4514d743fda2959625a5ca253f513e101d76` (verified).
- **Review time:** 2026-11-26 06:42:01 UTC.
- **Anatomy:** Krishna, Balarama and the boys are distinct with connected limbs; I see no duplicate human, fused boy, malformed face or extra limb. The four calves are distinguishable; the central lowered head belongs to a single calf body, not a fused second animal.
- **Faces:** Krishna, Balarama and the visible boys have coherent distinct faces at native scale and in crops.
- **Hands / feet:** Krishna's hand resting on a calf shows four fingers over the back; the thumb is occluded by contact. His relaxed hand has separated digits with no visible anomaly. Balarama's hand holding the staff is closed around it; his other relaxed hand is connected and shows no extra or fused digit. The other boys' hands are occupied holding a staff or grass. Krishna's two visible feet and Balarama's two visible feet each show five toe forms. Calf legs and hooves are distinct; no cut-off main extremity.
- **Clothing and cast:** Krishna wears yellow with red-orange shawl; Balarama is a distinct youth in a blue dhoti and restrained cream upper cloth, not blue-skinned or toddler-sized. Boys wear simple dhotis/shawls; bare male upper torsos are ordinary traditional dress. No sexualized framing, heavy jewelry or palace regalia.
- **Text / signature artifacts:** None visible in sky, grass, ground, trees or corners.
- **Scene and reference fidelity:** Photo 010 (`f7d1720645a05cd1a4e879908ad322d196bbe3c6f7a9f35e720d5da3400ecc53`) supports the pastoral grouping but does not separate its calves clearly. The candidate is a native landscape recomposition with Krishna, a distinct youthful Balarama, boys and several individually readable calves, matching the plan.
- **Character / deity contract:** Krishna's deep blue skin, smooth plain forehead, single low band/feather, yellow dhoti and two-arm anatomy comply. Balarama is warm light-brown, dark-haired, youthful and blue-clad, with ordinary two-arm anatomy. A 13×13 skin-only Balarama cheek sample measured median RGB `(202,132,68)`, R−B `134`; torso patch `(201,131,71)`, R−B `130`. A gopa cheek patch measured `(194,129,70)`, R−B `124`. These exceed the approximate R−B <120 guide; at full size the figures read warm light-brown/tan and warm brown respectively, not distinctly orange. No prohibited ornament or blue-skin transfer is visible.
- **Verdict: pass.**

## Recommendation and inventory

The independent visual result is pass for S006 v012, S007 v016, S009 v009 and S010 v018; needs-fix for S008 v007 due to the four-digit main-figure hand. Keep each result bound only to its verified checksum. The pending captain art approval remains the standing state; this review raises no captain decision. No candidate or master was approved, and no approval manifest was edited.

Captain-call inventory: empty. This review found actionable image feedback but no unresolved choice that belongs to the captain. Per the completion gate, the empty inventory is attested with `FM_HOME='/home/gehariharan/firstmate-narayaneeyam-mate' bash '/home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh' complete 'd049-review-kb' --none`.
