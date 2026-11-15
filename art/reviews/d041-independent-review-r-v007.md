# Independent visual review — dasakam 41, stanzas 6–10

Reviewed each selected landscape candidate at its original 1672×941 or 1671×941 resolution and enlarged detail crops made from source copies in task scratch. I compared each image with its stanza-mapped intake photo, numbered caption, frozen plan entry, and applicable series and character contracts. Crops were created only in `data/d041-review-r/scratch/`; producer images and intake photos were not modified. Skin measurements use a 15×15 pixel skin-only cheek patch, median-filtered with ImageMagick `-statistic median 15x15`; coordinates are top-left source-image pixels.

Image-by-image review and crop examination occurred during 2026-11-15 20:04–20:07 UTC; each entry carries that actual UTC inspection window.

## Exact bytes reviewed

All hashes matched the dispatch expectations.

| Frozen contract file | SHA-256 |
|---|---|
| `data/d041-production/review-contract-r/art/plans/d041.json` | `2aacceae22f313d3731399c2ff02ad02f4540f853730e8d5d55b00c953fe56e0` |
| `data/d041-production/review-contract-r/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d041-production/review-contract-r/art/bible/characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `data/d041-production/review-contract-r/art/bible/characters/putana/character.json` | `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535` |
| `data/d041-production/review-contract-r/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `data/d041-production/review-contract-r/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `data/d041-production/review-contract-r/art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `data/d041-production/review-contract-r/art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |

## Per-image findings

### Stanza 6 — `candidate-v001.png`

- **Review time:** 2026-11-15 20:04–20:07 UTC.
- **Image/checksum:** `artifacts/d041/s006/landscape/candidate-v001.png`; SHA-256 `062ce63686945dee82021d88afe63e738edccd347878934b5bbb15702918b6d7`; 1672×941.
- **Reference and scene:** Mapped to `intake/D041/006.jpg` and caption #6: Gokula grows prosperous and happy as Krishna dwells there. The image shows village houses, cows, grain and flower baskets, villagers at work, and Krishna with the household and gopis. The plan's broad village panorama is present.
- **Anatomy / faces / hands and feet:** Figures and cows have coherent connected anatomy. Nanda's, Yashoda's, gopis' and Krishna's visible faces are recognizable and distinct. Enlarged central and left crops show no extra, missing, fused or detached limbs; visible hands and feet have coherent digits and proportions. No apparent duplicate people.
- **Clothing and cast:** Traditional village garments cover the women modestly; Nanda's simple cream/olive cowherd clothing and Yashoda's veiled sari follow their contracts. Required supporting cast and prosperity elements are present. Krishna is a two-armed infant in yellow cloth with a small feather.
- **Text/signature artifacts:** None visible, including corners, ground, and pottery.
- **Character/deity contract:** **Needs-fix.** Krishna's face and exposed limbs read purple/lavender-blue rather than the contracted deep indigo-blue. A skin-only 15×15 patch at (920,460) has median RGB **(116,106,143)**; the full figure reads violet-blue. This visible color-contract violation is not disclosed in stanza 6's `candidate_status` (frozen plan stanza entry, around lines 340–370). No structural deity-form issue otherwise.
- **Verdict: needs-fix.**

### Stanza 7 — `candidate-v002.png`

- **Review time:** 2026-11-15 20:04–20:07 UTC.
- **Image/checksum:** `artifacts/d041/s007/landscape/candidate-v002.png`; SHA-256 `87588a46a60c955221a8d59f34221480c947342bbe4e85961d0b414ad52afed7`; 1672×941.
- **Reference and scene:** Mapped to `intake/D041/007.jpg` and caption #7: gopis talk about Krishna while doing daily tasks and visit him. The image shows women at household work and conversation, two women walking toward Nanda's house, and Krishna with the household. The illustration adds other village women around the household, but retains the planned action.
- **Anatomy / faces / hands and feet:** Enlarged left edge and group crops show natural connected limbs, coherent visible hands and feet, and distinct faces. No malformed or duplicated people identified. Krishna has two arms and two legs. A foreground woman's torso meets the left frame edge; no hand or foot is cut off. This is the plan's disclosed frame-edge condition (`candidate_status`, frozen plan around line 423); it is present and is not a separate defect.
- **Clothing and cast:** Modest traditional saris and simple village dress; Yashoda remains visually distinct in a veiled sari. Required gopis, household and child are present.
- **Text/signature artifacts:** None visible in the image, corners, ground or house surfaces.
- **Character/deity contract:** Krishna cheek sample at (1330,315), skin-only 15×15 median RGB **(49,64,138)**; clearly deep indigo-blue. Two-armed infant form, curls, yellow wrap and feather are consistent. No structural prohibition violated.
- **Verdict: pass — disclosed deviation present.**

### Stanza 8 — `candidate-v002.png`

- **Review time:** 2026-11-15 20:04–20:07 UTC.
- **Image/checksum:** `artifacts/d041/s008/landscape/candidate-v002.png`; SHA-256 `2d614f3d1ddc4f24eceff0c4b318cde6e24ba3c1e937a2aa3b18a686f27c3f29`; 1671×941.
- **Reference and scene:** Mapped to `intake/D041/008.jpg` and caption #8: gopis call and reach out to hold the child. The candidate shows distinct gopis extending open hands toward a smiling infant securely seated on Yashoda's lap, matching the plan's supported, non-suspended pose.
- **Anatomy / faces / hands and feet:** Enlarged crop around the infant and reaching hands shows connected arms, two infant hands and two feet, and no detached or fused hands. The open hands are stylized but have distinct digits; faces are intact and distinct. No accidental duplicate figures.
- **Clothing and cast:** Women wear modest village saris; Yashoda's sari and veil follow her continuity cue. Required gopis, Yashoda and infant are visible.
- **Text/signature artifacts:** None visible, including ground, motifs and corners.
- **Character/deity contract:** Krishna cheek sample at (1220,360), skin-only 15×15 median RGB **(52,75,126)**; reads indigo-blue. His two arms, two legs, curls, yellow wrap and feather meet the human-infant contract. No structural prohibition violated.
- **Verdict: pass.**

### Stanza 9 — `candidate-v002.png`

- **Review time:** 2026-11-15 20:04–20:07 UTC.
- **Image/checksum:** `artifacts/d041/s009/landscape/candidate-v002.png`; SHA-256 `5f89531711ef1c18bfff74a25644cc8bf4594e7ca1b131178d512a513d2b7df3`; 1671×941.
- **Reference and scene:** Mapped to `intake/D041/009.jpg` and caption #9: the child is passed between gopis like a bee among red lotuses. The scene shows the infant held securely on a woman's lap, other gopis reaching in sequence, a small dark bee, and red lotus motifs; the bee does not dominate the composition.
- **Anatomy / faces / hands and feet:** Enlarged central crop shows Krishna's two connected arms, two legs and feet; surrounding hands support him or reach toward him without a floating body or disconnected grasp. Visible fingers and toes are distinct at mural scale. Gopi faces are separate; no accidental duplicated person or malformed face identified.
- **Clothing and cast:** Modest village saris and restrained jewelry; Yashoda is distinguishable from the gopis. Required infant and group are present.
- **Text/signature artifacts:** None visible in foliage, ground, lotus forms, or corners.
- **Character/deity contract:** Krishna cheek sample at (630,340), skin-only 15×15 median RGB **(56,62,114)**; reads deep indigo-blue. Correct two-armed infant, curls, yellow wrap and feather; no structural prohibition violated.
- **Verdict: pass.**

### Stanza 10 — `candidate-v003.png`

- **Review time:** 2026-11-15 20:04–20:07 UTC.
- **Image/checksum:** `artifacts/d041/s010/landscape/candidate-v003.png`; SHA-256 `143a2b0460e8403b663986964561e9de1d21880fca7ba85c429abf31498fafc5`; 1672×941.
- **Reference and scene:** Mapped to `intake/D041/010.jpg` and caption #10: Yashoda feeds the child while smiling at his face. Candidate shows an intimate home interior and a fully covered maternal hold, with mother and child looking at each other.
- **Anatomy / faces / hands and feet:** Enlarged crop around the pair shows Krishna's two arms, two legs and feet, and Yashoda's supporting hands connected and coherent. Visible infant digits are distinct. Both faces are intact; no fused or duplicate person, extra limb, or extremity cut by the frame.
- **Clothing and cast:** Yashoda is modestly dressed in a cream/rose sari with veil. The infant remains wrapped; no breast is exposed and the pose is maternal, not sexualized. The required two-person cast is correct.
- **Text/signature artifacts:** None visible on the floor, pot, wall, or corners.
- **Character/deity contract:** Krishna cheek sample at (600,380), skin-only 15×15 median RGB **(40,53,113)**; reads deep indigo-blue. Two-armed infant form and Yashoda's face, veil and sari family are consistent. No structural prohibition violated.
- **Verdict: pass.**

## Evidence and recommendation

Hash verification command: `sha256sum` over all five candidate paths and all eight frozen contract paths; all returned values matched the dispatched expected hashes. Visual evidence was the original full image plus manually enlarged scratch crops for face, torso, extremity, and group regions. Candidate crops were not written into producer directories. The frozen plan binds stanzas to `intake/D041/006.jpg`–`010.jpg`; captions #6–10 in `OneDrive/Pictures/Narayaneeyam Studio/intake/D041/photo-captions.txt` and stanza commentary in the producer worktree's `content/daskams/d041.json` confirm caption mapping. Relevant frozen plan entries are at `art/plans/d041.json` stanzas 6–10 (roughly lines 340–600); infant skin and human-form requirements are at `art/bible/characters/infant-krishna/character.json:19-34`. Series no-text and mural rendering rules are in `art/bible/series.json`.

Recommendation: retain the exact-checksum passes for stanzas 7–10, with stanza 7's disclosed edge condition recorded. Do not clear stanza 6 for publication until its Krishna skin color is addressed in a new candidate and independently reviewed. All artwork remains unapproved. This review raises no captain decision; the standing pending art approval is outside this review's inventory.
