# D054 independent visual review

## Scope and method

I independently reviewed the five selected landscape candidates against the byte-exact frozen final plan, the series and character contracts, stanza content, the numbered reference photos and captions. I viewed each 1672 × 941 image at full frame, then inspected enlarged crops of faces, hands, feet, bodies, groups, creatures and image corners. Crop and enlargement files were written only under this worktree's `.review-scratch/d054-review-ba/`; no candidate or reference was edited. No source or approval manifest was changed. These checks are independent reviews, not producer observations or artwork approvals. All artwork remains unapproved.

The expected hashes were generated programmatically from the task's path/hash list and checked with `sha256sum -c -`; every listed candidate, reference, metadata file and contract file returned `OK`. The five source references and the matching five OneDrive copies were also hashed; each OneDrive copy has the same SHA-256 as its source reference. The frozen plan and every frozen character/series file had the expected SHA-256 before reading. Plan stanza anchors: `art/plans/d054.json:153`, `:233`, `:273`, `:312`, `:353`; mapping and photo caption anchors: `content/sources/d054/reference-map.json:9`, `:16`, `:36`, `:46`, `:56`, `:66`; `intake/D054/photo-captions.txt:5`, `:19`, `:26`, `:33`, `:40`. Chapter stanza entries are at `content/daskams/d054.json:17`, `:37`, `:47`, `:57`, `:67`.

## Exact contract bytes reviewed

All values below are actual SHA-256 values of the files read; each matched its expected value.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d054.json` (frozen final plan) | `2ca7d710b06874c0fc8558b6d4dd92f4f027b5d9a4d06ae5746be15906cb79e4` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/d054-cattle/character.json` | `deca33ca2cad0cfe51fd1ed7edd87ac7a960e5a89cf108465875b731fe43acc5` |
| `art/bible/characters/d054-kaliya/character.json` | `825f0dfc8758c79f6f1bb4a71e51bd78a6a2987cea15899f276c997442896d9f` |
| `art/bible/characters/d054-saubhari/character.json` | `be064191b42755329932b785aca466b18479b53a0c0646ac01c64faa68b5bb8e` |
| `art/bible/characters/garuda/character.json` | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |

Additional required source metadata hashes (also matched): `content/sources/d054/reference-map.json` — `cc4fb8ce78c9a188736655f66a244a8235b75e54b31b1872fefa218daad86bec`; `intake/D054/photo-captions.txt` — `53db276f41ef496705bd0b5b1de133ee52481dac797dbb45b0c23f4bebe29490`.

## Per-candidate findings

Review times below are UTC. A verdict applies only to the listed candidate checksum.

### Stanza 1 — `candidate-v005.png`

- **Version and checksum:** `v005`; `c77af5c098349fa39bb03f747ea410a72236f34660761a86a726aae50fbb8a7f` (verified).
- **Review time:** 2026-11-26T23:11:32Z.
- **Anatomy:** Saubhari sits cross-legged below the waterline with a coherent torso and two attached arms. Garuda has two attached wings, two arms and two legs; the shoal fish have separate bodies and fins. I saw no extra, missing, fused or detached limbs or duplicated figures. Saubhari's tucked feet are mostly concealed by the crossed pose and dhoti; no visible defect. Garuda's two open clawed hands each show a thumb and four long digits; each foot shows three forward talons and a rear talon. They read as intentional bird anatomy.
- **Faces:** Saubhari's calm profile, beard and gathered dark hair are legible and consistent with the sage contract (`d054-saubhari/character.json:10–18`). Garuda has a single eagle face and hooked beak. Neither face is malformed or duplicated.
- **Hands/feet:** Saubhari's hands rest together in his lap; individual fingers overlap in the meditation pose, with no visibly wrong digit. Garuda's hand/foot counts are noted above; none appears fused or malformed at native size.
- **Clothing and cast:** Saubhari's cream waist wrap and bare upper torso are ordinary ascetic dress. Garuda's ochre wrap is modest. The fish shoal is a small supporting group.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen in the river, ground, foliage or corners.
- **Scene and reference fidelity:** The plan's disclosed deviation is present: reference photo `001.jpg` is a split collage of underwater penance and Garuda taking a fish, the latter being the following stanza's action. The candidate correctly recomposes one continuous surface/underwater view, with Saubhari seeing Garuda overhead and fish nearby; it does not copy the split layout. The essential stanza-1 plan is present.
- **Character/deity contract:** Saubhari's measured skin-only chest patch at source pixels `(365,620)–(408,663)` has median RGB `(158,92,37)`, red-minus-blue `121`. At this near-threshold reading, the skin looks warm russet-brown rather than clearly orange in the full image. Garuda's feathered torso patch `(920,250)–(963,293)` has median RGB `(131,54,11)`, red-minus-blue `120`; the visible feather fields read as warm brown/ochre. Series treatment is matte mural with no outer frame or glossy gold.
- **Verdict: pass.**

### Stanza 3 — `candidate-v005.png`

- **Version and checksum:** `v005`; `5640b63dccb05c6b4d7a85d99d24e103bd9272fc455ece675ccf267b3d31f981` (verified).
- **Review time:** 2026-11-26T23:11:32Z.
- **Anatomy:** Garuda's two wings are attached and distinct; the two arms and two bird legs connect to one body. Each open clawed hand shows a thumb and four visible digits; each foot has three forward talons and a rear talon. Kaliya has a continuous body entering the river and a single neck region supporting six distinct hoods. No human limbs, detached body, extra wing or fused creature is visible.
- **Faces:** Garuda has one hooked-beak eagle face. Kaliya's six faces are intentional serpent hoods under its contract, not duplicate people or malformed heads; all are distinct and legible.
- **Hands/feet:** Garuda's visible open hands and feet have the counts above, with connected joints and natural avian talons. Kaliya has no hands or feet.
- **Clothing and cast:** Garuda's simple ochre cloth is modest. The small ritual offering sits on the bank; no extra person is present. Garuda’s eagle face, warm-brown/ochre feather fields and attached wings follow `garuda/character.json:5–8`; Kaliya’s one body and connected multi-hood anatomy follow `d054-kaliya/character.json:8–20`.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen in water, bank, foliage or corners.
- **Scene and reference fidelity:** The numbered reference `003.jpg` aligns thematically with the pursuit. The candidate follows the more specific plan: Garuda chases Kaliya into the river and the offering remains on the bank as context. The continuous body/hood group and river entry are clearly shown.
- **Character/deity contract:** Kaliya is rendered in muted indigo/charcoal with restrained olive underside, matte and non-grotesque. Garuda is brown/ochre, without extra wings. Series palette and full-bleed mural treatment are consistent.
- **Verdict: pass.**

### Stanza 4 — `candidate-v009.png`

- **Version and checksum:** `v009`; `31c457792c1621b3b8b306a7351e1514a997b4b90e887c264a3a98b3784952a2` (verified).
- **Review time:** 2026-11-26T23:11:32Z.
- **Anatomy:** One youthful Krishna has two attached arms, hands, legs and feet. His extended open hand and chest hand each show a thumb and four fingers; both visible feet show five toes. The three falling birds are separate and have attached wings. I saw no malformed or duplicated figure.
- **Faces:** Krishna's youthful face is clear and naturally formed. No other human face is present.
- **Hands/feet:** Five digits are visible on each hand and five toes on each foot. No malformed extremity seen.
- **Clothing and cast:** Yellow dhoti and muted red-orange shawl are modest; no other people or Kaliya are shown.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen in the river, ground, trees, birds or corners.
- **Scene and reference fidelity:** Reference `004.jpg` is a cartoon-like dead-riverbank scene with a panel number; the plan says not to adopt that rendering or panel mark. The candidate uses two clearly separate dead trees, three falling birds and Krishna's compassionate response. It does not add Kaliya, poison cloud, halo or rays.
- **Character/deity contract:** Krishna's skin-only arm patch `(300,340)–(344,384)` has median RGB `(48,62,88)`, blue-minus-red `40`; it reads as deep matte blue and meets the stated threshold. The low band and single peacock feather, youthful proportions, plain forehead requirement and clothing are otherwise consistent. **Defect:** a small red forehead mark is visible between the brows, approximately source pixels `(443,175)–(451,184)`. It is a character mark the contract forbids, and remains visible in the full frame as a red speck on the forehead. The character contract specifies a plain smooth forehead with no mark (`krishna-vrindavan-youth/character.json:11`, `:48`, `:55`).
- **Verdict: needs-fix.** Remove the visible forehead mark in a new candidate.

### Stanza 5 — `candidate-v004.png`

- **Version and checksum:** `v004`; `038065bd316c05749ea4eea2edb8ea2e68f6d6e7cbf43aaeb4dc8a73494fcc8f` (verified).
- **Review time:** 2026-11-26T23:11:32Z.
- **Anatomy:** Krishna stands with two attached arms, hands, legs and feet. His two hands each show five digits; both feet are visible, with five toes on the near foot and the far-foot digits small at native size. The gopas and five-cow herd are distinct; their ordinary proportions, varied faces and modest dress follow `gopas/character.json:8–27` and `d054-cattle/character.json:8–20`. Visible bovine bodies have coherent heads and attached legs; some legs naturally overlap or are occluded by the group and river. No fused or duplicated people or animals seen.
- **Faces:** Krishna's face is calm and youthful. The three drinking cowherds have distinct faces and hair; no malformed or cloned face seen.
- **Hands/feet:** Krishna's five digits on each hand and five toes on the near foot are visible; far-foot toes are too small to resolve at native size and show no visible error. The gopas' cupped drinking hands are not open hands that can be reliably digit-counted at this scale.
- **Clothing and cast:** The gopas wear modest dhotis and wraps; bare male torsos are ordinary traditional dress. The modest herd is secondary to Krishna and the drinking figures. Krishna is present and does not drink.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen in water, ground, foliage or corners.
- **Scene and reference fidelity:** Numbered reference `005.jpg` aligns with the thirsty cows and cowherds at poisoned water. The candidate shows the hot-season drinking scene, dark river water, Krishna remaining on the bank, and no unsupported Balarama. The staging follows the frozen plan.
- **Character/deity contract:** Krishna's skin-only face patch `(1090,115)–(1124,149)` has median RGB `(49,51,89)`, blue-minus-red `40`; his skin reads as deep matte blue. One gopa shoulder patch `(244,590)–(278,624)` has median RGB `(164,87,38)`, red-minus-blue `126`; the gopas read as warm ochre-brown in the full image, not conspicuously orange. Krishna has the contracted low band/feather, yellow dhoti, muted red-orange shawl and plain forehead. No palace-like ornament is visible.
- **Verdict: pass.**

### Stanza 6 — `candidate-v004.png`

- **Version and checksum:** `v004`; `d4e5b3f55c90bed6ee139d7d5ea56fedbbc24a6a53829e2d80cdf4db3263098a` (verified).
- **Review time:** 2026-11-26T23:11:32Z.
- **Anatomy:** Krishna has two attached arms, hands, legs and feet. The extended open hand and the hand resting on his lap each show a thumb and four fingers. The near foot shows five toes; the far foot is partly under the drape and its toes are too small to resolve at native size, with no visible error. The waking gopas and cattle are separate figures; no fused or duplicated person or animal seen (`gopas/character.json:8–27`; `d054-cattle/character.json:8–20`). One foreground figure runs partly to the frame edge as a natural part of the crowded group.
- **Faces:** Krishna's face is youthful and composed. The seated and prone cowherds have distinct faces; I saw no malformed face.
- **Hands/feet:** Krishna's open hands and visible foot digits are counted above. The gopas' limbs overlap naturally in the group; no visibly extra or detached limb identified.
- **Clothing and cast:** The gopas wear modest traditional wraps; bare upper torsos are ordinary dress. The herd is modest. **Defect:** Krishna wears several large bright ochre-gold necklaces, large round earrings, armlets, wrist cuffs and a decorated waist belt. Together they read as conspicuous palace-like regalia and are not disclosed by this cowherd-youth plan/contract, which specifies the simple low headband, yellow dhoti and muted shawl (`krishna-vrindavan-youth/character.json:10–12`). They are readily visible in the full image, especially around source pixels `(165,245)–(520,515)`.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen in water, ground, clothing, foliage or corners.
- **Scene and reference fidelity:** Reference `006.jpg` shows fallen devotees and Krishna reviving them; the candidate follows the plan's restorative moment, with several cowherds upright or beginning to rise and cows nearby. Mercy is conveyed by gesture and expression without rays, beams or halo. No later Kaliya scene is added.
- **Character/deity contract:** Krishna's skin-only upper-arm patch `(220,370)–(264,414)` has median RGB `(41,53,88)`, blue-minus-red `47`; Krishna reads as deep matte blue. An exposed gopa upper-body patch `(980,375)–(1014,409)` has median RGB `(208,110,34)`, red-minus-blue `174`; the large middle-right gopa reads clearly orange rather than warm brown in the full image, and is visibly more saturated than the other human skin. This is noticeable at native size and exceeds the scene's warm-brown guidance. Krishna's plain forehead and single low feather band are otherwise present.
- **Verdict: needs-fix.** Reduce the clearly orange gopa skin toward warm brown and remove Krishna's undisclosed palace-like ornamentation in a new candidate.

## Verification record

Commands and outputs used:

1. A Python-generated expected-hash list piped to `sha256sum -c -`: all 21 candidate/reference/metadata/contract entries returned `OK` (5 candidates, 5 source photos, 2 source metadata files, 7 character files and 2 series/plan files).
2. Python SHA-256 reads of the frozen plan and series/character contract files: each produced the same hash listed above.
3. `identify -format '%f %wx%h %[channels]\n'` on all five candidates: all reported `1672x941 srgb`.
4. `sha256sum` on all five source photos and existing OneDrive copies: each source/copy pair matched, with the hashes listed in the task.
5. `magick <candidate> -crop ... +repage -resize ... <absolute scratch path>` generated enlarged detail views under `.review-scratch/d054-review-ba/`; input paths were unchanged. Full images and those crops were visually inspected.
6. Python used ImageMagick's `RGB:-` crop output to compute median channel values from the skin-only patches reported per image. The report states each patch's source-pixel coordinates and red-minus-blue or blue-minus-red median.

## Recommendation and captain-call inventory

Create fresh candidates for stanzas 4 and 6 to correct the exact cited defects, then bind any subsequent independent review to each new candidate checksum and the same final plan bytes. Stanzas 1, 3 and 5 pass this exact-checksum review. No captain decision is raised by these findings; the standing pending art approval remains unchanged. My reviewed captain-call inventory is empty. This report does not approve any artwork.
