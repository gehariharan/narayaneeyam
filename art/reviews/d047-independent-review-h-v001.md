# D047 landscape candidate review — stanzas 1–5

## Scope and method

I independently inspected the five selected landscape candidates at their native dimensions, then made and inspected focused crops for faces, hands, feet, and scene details. I compared each image with its mapped intake photograph and numbered caption, the frozen final plan, the series bible, and the relevant character contracts. Candidate/reference files and all contracts were read-only. Every crop and enlargement was written under this worktree’s `.review-scratch/d047-review-h/`; no artifact or intake input was modified. This is exact-checksum visual review evidence, not producer inspection and not artwork approval.

Before inspection, I generated `.review-scratch/d047-review-h/expected.sha256` programmatically from the task’s expected values and ran `sha256sum -c` on it. All 19 listed inputs returned `OK`. The list included all five candidates and their numbered references, the final plan and five character/series contracts, `reference-map.json`, and `photo-captions.txt`. The candidates’ native dimensions match the frozen plan: stanza 1 1672×941; stanza 2 1671×941; stanzas 3–5 1672×941.

The final plan’s scene/mapping rules are at `art/plans/d047.json` lines 26–28 and stanza entries at lines 45–80, 96–131, 146–181, 196–231, and 247–282. The source map confirms photo 001→stanza 1, 002→2, 003→3, 004→4, and 005→5, including the canonical monkey interpretation for stanza 5 (`content/sources/d047/reference-map.json` lines 11–60). The captions are at `intake/D047/photo-captions.txt` lines 1–25. Series rendering and global avoid rules are in `art/bible/series.json` lines 4–24 and 51–64. Krishna’s appearance and anatomy contract is in `art/bible/characters/krishna-vrindavan-youth/character.json` lines 5–14 and 47–63; Yashoda’s in `art/bible/characters/yashoda/character.json` lines 15–29; the monkey contract in `art/bible/characters/monkeys/character.json` lines 10–21. No devas appear in these five selected scenes.

Skin samples below are 31×31-pixel skin-only patches sampled from the candidates using ImageMagick raw RGB output and channel medians computed in Python. `R−B` is reported for Yashoda; `B−R` for Krishna. The plan’s numeric guide is a useful measurement, while the verdict follows the stated viewer-visible defect standard: I judged whether the skin actually reads orange at full image size.

## Frozen contract hashes read

All actual hashes matched the task’s expected values:

- Final plan, `data/d047-production/review-contract-d/art/plans/d047.json`: `9d04f8ccd7faf663e19700762ef6cd6ebaa5f2fc50e5d978e28feecabe79016d`
- Series bible, `data/d047-production/review-contract-d/art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Krishna contract, `.../characters/krishna-vrindavan-youth/character.json`: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- Yashoda contract, `.../characters/yashoda/character.json`: `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`
- Gopikas contract, `.../characters/gopikas/character.json`: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`
- Monkeys contract, `.../characters/monkeys/character.json`: `902a357279ad316974426d4de863014fd037a750135b9385f654fdf771ea4481`
- Devas contract, `.../characters/devas/character.json`: `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138`
- Reference map, `content/sources/d047/reference-map.json`: `e2b351145c7e03746da82b00c73f3bfa6131345df49edc6a76092e7fd69bf5e2`
- Captions, `intake/D047/photo-captions.txt`: `b5c8bc79d2642672ad20fd7d1fedbffe3f2852480105e29bdddb1def1801a4ba`

## Per-candidate findings

### Stanza 1 — v006

- **Candidate / reference:** `artifacts/d047/s001/landscape/candidate-v006.png` — SHA-256 `57373ec3f3deb10812ea340ed5292422a8e2a770ad98c9ab33db343a7e5729fe`; `intake/D047/001.jpg` — SHA-256 `e680e65365c233a9b3431e30c67b09f6b6206ba41a359015a390b08f242a075e`.
- **Review time:** 2026-11-18 05:12:20 UTC.
- **Anatomy:** Yashoda’s two arms connect naturally to her body while she churns; Krishna has ordinary child proportions, one face, two arms, and two legs. No duplicate/fused person or detached limb.
- **Faces; hands/feet:** Both faces are coherent and distinct. Yashoda’s rod-gripping fingers are partly occluded by the rod as expected; Krishna’s visible open hand shows a thumb and four fingers. Both Krishna feet and Yashoda’s visible foot show five toes; no malformed extremity or frame cut-off.
- **Clothing and cast:** Yashoda’s cream/olive sari and modest jewelry are consistent with her contract. Krishna’s yellow cloth, dark curls, low band and single feather are present; forehead is plain. The bare upper torso is ordinary traditional dress. The small cow at the window is background scale and is not malformed.
- **Text/signature artifacts:** None visible in the image, corners, wall pattern, or floor.
- **Scene/caption fidelity:** Matches photo/caption 001: Yashoda churns while Krishna climbs into her lap to drink. One rod and pot read coherently; the maternal contact is clear.
- **Character contract / skin:** Krishna is deep matte blue; a 31×31 torso patch at (1040,380) measured RGB (49,89,152), `B−R=103`. Yashoda cheek at (742,165) measured (173,99,50), `R−B=123`; forearm at (600,440) measured (169,100,51), `R−B=118`. At full size the complexion reads natural warm brown, not orange. The plan’s producer note discloses its lower-hand measurement of 121; my sampled cheek is also slightly above the approximate 120 guide, without visibly orange skin.
- **Verdict: pass** for this exact candidate checksum.

### Stanza 2 — v014

- **Candidate / reference:** `artifacts/d047/s002/landscape/candidate-v014.png` — SHA-256 `2b6fe0332990096e77fa7ee045cd0f0cac249c6c0c2616625870d92a2102c262`; `intake/D047/002.jpg` — SHA-256 `8bcc8c1cbf5d660c7a43ca328f20c0d5d096939d0e3cc09347e1277401cff925`.
- **Review time:** 2026-11-18 05:12:20 UTC.
- **Anatomy:** Yashoda and Krishna are connected, naturally proportioned figures; no duplicate, fused or detached anatomy. The hearth and spill do not obscure a required face or extremity.
- **Faces; hands/feet:** Faces are distinct and intact. Yashoda’s reaching hand shows thumb plus four fingers; Krishna’s hand on her sari and her supporting hand are connected, with contact obscuring some digits. Krishna’s visible foot and Yashoda’s visible toes each show five toes. No visible digit error.
- **Clothing and cast:** Sari, veil, modest jewelry, child’s yellow cloth, dark curls, low band and single feather fit the contracts. Krishna’s forehead is plain. No sexualized framing or exposed skin beyond ordinary dress.
- **Text/signature artifacts:** None visible, including around the fire, floor spill, corners, or patterned surfaces.
- **Scene/caption fidelity:** Photo 002 is a split scene. The candidate resolves the planned single moment: Krishna feeding at Yashoda’s lap as she turns toward milk overflowing above the lit hearth. The overflowing milk and fire are visible; no duplicated mother or child.
- **Character contract / skin:** Krishna’s arm patch at (675,370) measured RGB (46,71,144), `B−R=98`. Yashoda cheek at (925,220) measured (189,103,58), `R−B=131`; forearm at (1170,405) measured (189,104,58), `R−B=131`. The plan explicitly discloses this approximate 10–11-point deviation from the 120 guide. At full image size I see a warm medium-brown/terracotta complexion, not skin that reads as saturated orange; the numeric deviation is present and disclosed, and the independent visual check found no viewer-noticeable orange-skin defect.
- **Verdict: pass** for this exact candidate checksum.

### Stanza 3 — v009

- **Candidate / reference:** `artifacts/d047/s003/landscape/candidate-v009.png` — SHA-256 `210c12541a2856995a6100d67758f45cc928b749c98e0e57deb42f5cadf315f6`; `intake/D047/003.jpg` — SHA-256 `913b2917c32c74f74c87822bc9b4e6144d2dded7d679cc6768ea47d7f69dfc82`.
- **Review time:** 2026-11-18 05:12:20 UTC.
- **Anatomy:** One seated child, with connected arms and legs. No malformed face, duplicate person, fused body, or detached limb. The folded second foot is partly concealed by the dhoti; the visible foot is complete.
- **Faces; hands/feet:** The angry expression is legible and facial features are intact. Both hands visibly have a thumb and four fingers; the visible foot has five toes. The other foot is concealed by cloth and is not countable; nothing visible at that scale is wrong.
- **Clothing and cast:** Krishna’s yellow dhoti, dark curls, low band and upright feather match the child scene and character contract; forehead is plain. Bare upper torso is ordinary traditional dress.
- **Text/signature artifacts:** None visible on the walls, floor, pot, shards, or image edges.
- **Scene/caption fidelity:** Matches the aftermath in photo 003 and the final plan: broken pot, distinct shards, spilled curd, and the churning rod lying adjacent on the floor. The rod is separate from Krishna’s hands.
- **Character contract / skin:** A 31×31 torso patch at (535,475) measured RGB (50,68,96), `B−R=46`, above the plan’s minimum 40. He has the expected deep matte blue rather than a different deity color; no multi-form anatomy is called for.
- **Verdict: pass** for this exact candidate checksum.

### Stanza 4 — v007

- **Candidate / reference:** `artifacts/d047/s004/landscape/candidate-v007.png` — SHA-256 `146b8da014550f36c71719205f90b83b2b994f802973d468b373200993c5bd31`; `intake/D047/004.jpg` — SHA-256 `24d6ce760d1af4e94fb235cac6ac74beeb0933b11df8db2d53c01f466c080652`.
- **Review time:** 2026-11-18 05:12:20 UTC.
- **Anatomy:** Yashoda is a single naturally proportioned adult with two attached arms; no duplicated/fused person or detached limb. The sari covers her feet, as expected.
- **Faces; hands/feet:** Her face is intact and expressive. Both hands show five connected digits (thumb plus four fingers); neither hand is malformed. Feet are covered and cannot be counted.
- **Clothing and cast:** Cream/muted-rose sari, veil, and restrained jewelry fit Yashoda’s contract; no palace regalia or exposed skin concern. She is the focal figure, with no Krishna figure, consistent with the plan.
- **Text/signature artifacts:** None visible on the floor, spilled curd, background pattern, or corners.
- **Scene/caption fidelity:** Matches the return/find scene in photo 004: Yashoda looks down at the broken pot and broad curd spill. The shards and spill are clear; her face and hands remain inside the frame.
- **Character contract / skin:** Cheek patch (670,175) measured RGB (162,90,45), `R−B=117`; forearm patch (760,470) measured (164,89,45), `R−B=119`. Skin reads brown. Her pale vertical forehead mark is absent; veil, face, sari palette, and modest jewelry are consistent.
- **Verdict: pass** for this exact candidate checksum.

### Stanza 5 — v004

- **Candidate / reference:** `artifacts/d047/s005/landscape/candidate-v004.png` — SHA-256 `b51505a5dcb20ea44d0dcd78db24fbd49bcd9bf269783a34d9cf38e18b46a83b`; `intake/D047/005.jpg` — SHA-256 `f759a2299f6bd45da7769724c9e90f9871d621d88a501d02c5d767bf3a0a5892`.
- **Review time:** 2026-11-18 05:12:20 UTC.
- **Anatomy:** Krishna is a single child with two attached arms; no duplicate or malformed person. The three monkeys are distinct, with coherent bodies and attached limbs; no fused/duplicated animal. Their smallest digits are too small to resolve at native scale, with no visible error.
- **Faces; hands/feet:** Krishna’s face is intact. Both open hands show a thumb and four fingers. His feet are hidden by the dhoti/mortar and cannot be counted. Monkey faces are distinct and readable; fine digits are miniature-scale observations, not defects.
- **Clothing and cast:** Krishna’s yellow dhoti, plain forehead, low headband, feather, curls and deep blue skin fit the contract; ordinary bare upper torso. The troop is monkeys (not a cat), each subordinate in scale to Krishna and the mortar.
- **Text/signature artifacts:** None visible in the wall, floor, vessels, mortar, or corners.
- **Scene/caption fidelity:** Depicts Krishna sharing butter with three monkeys beside the mortar. This follows the final plan and photo 005’s depicted scene despite the caption’s word “cat”; the canonical monkey direction is explicit in the plan and map.
- **Character contract / skin:** Krishna torso patch (525,420) measured RGB (88,120,161), `B−R=73`; his skin is deep blue. Monkey color is not separately specified by the contract; their matte ochre-brown fur does not read as a different deity color.
- **Verdict: pass** for this exact candidate checksum.

## Conclusion and inventory

All five exact candidate versions pass this independent visual review. No needs-fix or uncertain finding arose, and no captain decision was raised by this review. The pending captain art approval remains the standing state; none of these findings approves artwork or changes an approval manifest. Recommendation: retain these exact-checksum review outcomes as pass evidence and keep all artwork unapproved until explicit user approval.

Captain-call inventory attested empty. Completion gate: `FM_HOME='/home/gehariharan/firstmate-narayaneeyam-mate' bash '/home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh' complete 'd047-review-h' --none`.
