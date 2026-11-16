# D048 landscape candidate review: stanzas 6–10

Independent exact-checksum visual review of the five selected landscape candidates. I reviewed each candidate at its full native resolution, then inspected enlarged crops made from copies in my task worktree scratch directory. I compared each scene with its mapped intake photo/caption, final plan entry, series bible, and the applicable character contracts. Images and source materials remained read-only. This is a visual review, not an art approval.

**Review time:** 2026-11-15 22:56 UTC (all five visual inspections completed by this time).
**Reference mapping:** final plan `art/plans/d048.json`, stanza entries 6–10, map to `intake/D048/006.jpg` through `010.jpg`; chapter text confirms captions at `content/daskams/d048.json` lines 74–119. The caption text is in `intake/D048/photo-captions.txt`, sections `## 006`–`## 010`.

## Frozen contract hashes actually read

All match the expected values in the task brief.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d048.json` | `f3bf7572dbb802a426fd8ffcd0dca6aa3d34a4f1f6a85d247be6632c4cb654ff` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `art/bible/characters/narada/character.json` | `841aa373baad9230944390a5019523cea424d23fd3f96ef81b149e7aa4f98806` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/kubera-brothers/character.json` | `7bdb85258ac305ea0b3ea46a701dc30392fca12f538519e34724ef43cf5253e7` |

## Review method and evidence

- Verified all five candidate hashes before opening them with `sha256sum`; every value matched the brief and the plan candidate SHA. The exact values are recorded below.
- Opened each candidate at native resolution with `view_image(detail="original")`. Native dimensions from `identify`: S006 1671×941; S007 1672×941; S008 1670×942; S009 1672×941; S010 1672×941.
- Copied candidate and reference bytes into `.d048-review-h-scratch/` in this task worktree; enlarged native crops with ImageMagick `magick ... -crop ... +repage` and opened the crops individually. Focused crops included S006 Krishna and mortar (`820x650+820+230`, `820x430+0+430`); S007 child and brothers (`1150x570+260+340`); S008 figures and full-width fallen-tree area (`1120x680+260+220`, `1670x450+0+230`); S009 family, hands/faces and feet (`1050x700+280+200`, `940x500+420+130`, `1000x280+580+660`); S010 family, feet and the left/rear trunks (`1100x700+280+220`, `1000x260+450+680`, `700x650+0+0`). Reference photos 006–010 were also opened individually at original resolution.
- For Krishna skin, sampled two 12×12 pixel skin-only patches per candidate from the local copies. I inspected the crops to confirm each patch showed skin only, then took per-channel RGB medians from raw 8-bit sRGB pixels using ImageMagick and Python's `statistics.median`. All patches show deep indigo-blue; each median has blue-minus-red ≥40, consistent with the infant-Krishna contract (`character.json` lines 18–31). Coordinates below are top-left pixels in the native image.
- Checked all full frames, edges, ground/grass, and visible water for text, signatures, or watermark artifacts. None detected. Ordinary mural ornament, traditional clothing, and the S007 brothers’ warm radiance are observations, not defects; no cinematic beams, rays, shafts, or volumetric lighting are visible.

## Candidate findings

### Stanza 6 — v003 — `artifacts/d048/s006/landscape/v003/candidate.png`

- **Verified SHA-256:** `d709c266352ea4fdaa94ece9274359eba5636d8c8f8012aeabfa79b193ab767b`
- **Anatomy:** One toddler crawls with age-appropriate proportions and two arms/two legs. No duplicate or fused figure.
- **Face:** One coherent face with both eyes and features intact; expression and curls are cleanly formed.
- **Hands/feet:** Both visible hands have five discernible digits apiece. One exposed foot has five visible toes; the other foot is concealed by the folded leg/garment. No malformed extremity.
- **Clothing and cast:** Yellow waist cloth covers the child; no sexualized framing. No supporting cast is expected.
- **Text/signature artifacts:** None found, including corners and ground.
- **Scene/caption fidelity:** Caption 006 describes Krishna pulling the mortar horizontally between the trees. In the focused crop at native region about x=250–850, y=470–780, the wooden mortar lies on its side with its long axis horizontal between two upright trunks; the cord is continuous from the mortar to the child’s waist and taut. Both trunks remain standing. This matches plan lines 330–366 and captioned content lines 74–79.
- **Character contract:** Skin-only patch medians: (48,60,128) at (1000,590), and (56,65,129) at (1040,610); blue-minus-red 80 and 73. The child reads deep indigo-blue, has the required peacock feather and two-arm human toddler form, and no prohibited extra limb or distorted hand/foot is visible (infant contract lines 18–31; plan lines 344–362).
- **Verdict: pass.**

### Stanza 7 — v002 — `artifacts/d048/s007/landscape/v002/candidate.png`

- **Verified SHA-256:** `cfb1eaa1c26c212dbd51dbf0ec773971a44478cc529f42fc53193c0f804fb688`
- **Anatomy:** Krishna is one seated toddler with two arms/two legs. Two separate adult Yaksha brothers kneel beside him; their limbs attach coherently. No third, duplicate, or fused person.
- **Faces:** Krishna and both brothers have intact, distinct faces. The brothers’ light gold painted crowns and jewelry are ordinary iconography; the plan does not prohibit them.
- **Hands/feet:** Krishna’s raised palm and hand on his knee each show five digits; the visible foot shows five toes. The brothers’ joined hands are cleanly paired with differentiated fingers; their visible feet have no malformed or extra digits.
- **Clothing and cast:** Krishna’s waist cloth and rope are visible. Both brothers wear traditional wrapped garments; their exposed torsos are ordinary traditional dress. The two figures remain visually distinct.
- **Text/signature artifacts:** None found in frame, corners, or ground.
- **Scene/caption fidelity:** Two fallen trunks and separate root areas flank the scene; exactly two Yaksha brothers kneel and praise the tied child. The tied mortar remains at the left. This corresponds to caption 007 and plan lines 378–417 / content lines 84–89.
- **Character contract:** Skin-only patch medians: (39,53,127) at (500,650), and (43,57,133) at (540,640); blue-minus-red 88 and 90. Krishna reads deep indigo-blue and remains two-armed. Exactly two adult brothers are present with naturally attached limbs (infant contract lines 18–31; Kubera-brothers contract lines 25–32).
- **Verdict: pass.**

### Stanza 8 — v003 — `artifacts/d048/s008/landscape/v003/candidate.png`

- **Verified SHA-256:** `50f05159b2e90e166d3b855ee63c1b65e1c48d4ad2e17704cda85d214a41ddde`
- **Anatomy:** One seated toddler and two separate kneeling adult brothers. Their visible arm and leg attachments are coherent; no duplicate or fused body.
- **Faces:** All three faces are intact and distinct. The brothers’ light gold painted ornaments are ordinary iconography.
- **Hands/feet:** Krishna’s blessing hand and hand resting on the thigh each show five digits; both exposed feet show five toes. Each brother’s folded hands are distinct and anatomically coherent; no extra/missing digits visible.
- **Clothing and cast:** Krishna wears yellow cloth and simple ornaments. The brothers’ wrapped lower garments and bare upper torsos are ordinary traditional dress. No other people appear, as required.
- **Text/signature artifacts:** None found in the full frame, corners, or ground.
- **Scene/caption fidelity:** The prayer and blessing action matches caption 008, and exactly two brothers kneel at Krishna’s feet as required by plan lines 429–467 / content lines 94–99. **The required fallen twin trunks are not both present:** the full-width upper/rear area (native x≈0–1,500, y≈120–510; enlarged crop `1670x450+0+230`) shows one continuous identifiable fallen trunk behind the figures. No second distinct trunk/root mass can be traced elsewhere in the frame. A viewer comparing the scene to the explicit “fallen twin trunks sit behind” requirement would notice the missing tree. This is not listed as a disclosed deviation in the plan’s candidate_status at line 467.
- **Character contract:** Skin-only patch medians: (35,60,131) at (460,510), and (30,50,116) at (480,530); blue-minus-red 96 and 86. Krishna reads deep indigo-blue and has the required two-arm toddler form. Exactly two separate brothers appear, with no fused or detached limbs (infant contract lines 18–31; Kubera-brothers contract lines 25–32).
- **Verdict: needs-fix.** The second required fallen trunk is missing; see the full-frame pixel region above.

### Stanza 9 — v001 — `artifacts/d048/s009/landscape/v001/candidate.png`

- **Verified SHA-256:** `f80fb3b0c05633ad4045112555973ae07251f2a3b00f51a43078f2d7e90df7a9`
- **Anatomy:** Krishna stands with child proportions and two arms/two legs; Nandagopan and Yashoda have ordinary adult proportions. The five gopas are individually distinct; no duplicated or fused people.
- **Faces:** Krishna, Nandagopan, Yashoda and the gopas have intact faces. Nandagopan’s moustache and cream head cloth are consistent with his contract. Yashoda’s downcast, modest expression fits the plan.
- **Hands/feet:** Krishna’s two visible hands each show five digits. The child’s two visible feet each show five toes; Nandagopan’s hands around the rope are separate and coherent. Enlarged group details show no obvious malformed or extra digits.
- **Clothing and cast:** Yashoda’s covered cream/rose sari and Nandagopan’s muted green upper cloth and cream dhoti are modest and contract-consistent. The gopas wear simple traditional clothing. Krishna remains securely clothed.
- **Text/signature artifacts:** None found; inspected corners and ground as well as the full frame.
- **Scene/caption fidelity:** Nandagopan is loosening the waist rope from Krishna while Yashoda stands close with a modest, downcast expression. A small group of distinct gopas has arrived. The rope leads from the child toward the mortar at right. This matches caption 009 and plan lines 479–519 / content lines 104–109.
- **Character contract:** Skin-only patch medians: (84,100,154) at (660,585), and (79,92,144) at (680,600); blue-minus-red 70 and 65. Krishna reads blue and remains two-armed. Yashoda’s veil/sari and Nandagopan’s moustache, covered hair and cowherd colors match their contracts (infant lines 18–31; Yashoda contract lines 15–29; Nandagopan contract lines 15–34; gopas contract lines 14–28).
- **Verdict: pass.**

### Stanza 10 — v002 — `artifacts/d048/s010/landscape/v002/candidate.png`

- **Verified SHA-256:** `456dc641c92e2689aa55e4b13c5fb70969790a2784c768e8a64a13a524c2f8fb`
- **Anatomy:** Nandagopan carries one unharmed toddler; Yashoda and four distinct gopas accompany them. Visible bodies and limbs are naturally attached, with no duplicate child or fused people.
- **Faces:** The child’s face is intact; Nandagopan’s moustache and cream head cloth and Yashoda’s veiled face remain recognizable. Supporting faces are distinct at their scene scale.
- **Hands/feet:** The visible child hand has five digits; both feet show five toes. Nandagopan’s carrying hands are separate and coherent. Enlarged cast crops show no apparent extra/missing digits or malformed feet.
- **Clothing and cast:** The child is fully clothed; Yashoda’s sari is modest. Nandagopan wears a cream dhoti and muted green upper cloth. The four gopas are a small, distinct, traditionally dressed group.
- **Text/signature artifacts:** None found in the frame, corners, or ground.
- **Scene/caption fidelity:** Safe homeward return centers the family and gopas. **Exactly two distinct fallen trunks are visible in the left/rear background:** upper trunk and root mass at approximately x=70–650, y=100–430; lower foreground trunk and separate root mass at approximately x=0–560, y=360–720. Both are visually traceable as separate trees, satisfying plan lines 535–575 and captioned content lines 114–119.
- **Character contract:** Skin-only patch medians: (69,79,129) at (800,300), and (65,76,125) at (800,310); blue-minus-red 60 for both. Krishna reads deep indigo-blue and is an unharmed two-arm toddler. Nandagopan, Yashoda, and the gopas follow the expected supporting-cast contracts (infant lines 18–31; Yashoda lines 15–29; Nandagopan lines 15–34; gopas lines 14–28).
- **Verdict: pass.**

## Candidate checksum results

The required pre-inspection `sha256sum` output matched all expected values:

```text
d709c266352ea4fdaa94ece9274359eba5636d8c8f8012aeabfa79b193ab767b  s006/landscape/v003/candidate.png
cfb1eaa1c26c212dbd51dbf0ec773971a44478cc529f42fc53193c0f804fb688  s007/landscape/v002/candidate.png
50f05159b2e90e166d3b855ee63c1b65e1c48d4ad2e17704cda85d214a41ddde  s008/landscape/v003/candidate.png
f80fb3b0c05633ad4045112555973ae07251f2a3b00f51a43078f2d7e90df7a9  s009/landscape/v001/candidate.png
456dc641c92e2689aa55e4b13c5fb70969790a2784c768e8a64a13a524c2f8fb  s010/landscape/v002/candidate.png
```

## Recommendation and captain-call inventory

S006, S007, S009, and S010 pass this exact-checksum review. Revise S008 to show two clearly distinct fallen trunks behind the figures, then obtain a fresh exact-checksum review for the new candidate. The S008 scene omission is a production correction, not a question for the captain. No unresolved captain choice was discovered or raised by this review; the pending captain art approval remains the standing state. **Captain-call inventory: empty.** No approval manifest was read or changed.
