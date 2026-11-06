# D033 S001 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Sudarshana first protects the devotee
- Selected native PNG: `artifacts/d033/s001/landscape/candidate-v002.png` (v002), SHA-256 `ce6f8623e7aa89de7ce065f780699e73f56225ce048e1178aa3d84b40eb51139` (recomputed after a byte-exact copy of the image file from the D033 production checkout), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and records were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s001/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v001/s001-v002-nw.png`: region `836x471+0+0`, SHA-256 `56fa38e404882fbe0573c3ef39840e49b77ee95ae30b8df28f8955d6f62885dc`, opened between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z
  - `artifacts/d033/review-evidence/managed-v001/s001-v002-ne.png`: region `836x471+836+0`, SHA-256 `22fa7ee41ba4eddefdd1f568b0b37f270694173cfcf54b441d5b9bd87bb57542`, opened between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z
  - `artifacts/d033/review-evidence/managed-v001/s001-v002-sw.png`: region `836x470+0+471`, SHA-256 `ef70eebffd4a773f27ccebd5228e8daba417a36e7474bf987704af4b7079830d`, opened between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z
  - `artifacts/d033/review-evidence/managed-v001/s001-v002-zoom-hands.png`: region `300x300+420+280 at 200%`, SHA-256 `9123155376a3546d0c2edeb1f8bc6f02bbc5e7b1e1f9a1692cde4db1399ac65f`, opened between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z
  - `artifacts/d033/review-evidence/managed-v001/s001-v002-zoom-feet.png`: region `420x260+0+640 at 200%`, SHA-256 `d8821b42a9235dad16bf989772d5239bd5c30a34a0bd71e155e3b986c6a7a242`, opened between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z
  - `artifacts/d033/review-evidence/managed-v001/s001-v002-zoom-murti-hands.png`: region `300x300+1000+250 at 200%`, SHA-256 `005e80926acb75cec41f63f7da4b592f7b60a663fa2ecfee3fcf30fddd9b68b5`, opened between 2026-11-06T11:16:22Z and 2026-11-06T11:17:20Z

## References opened and hashed

- Source reference: `intake/D033/001.jpg` (SHA-256 `338a750667b94a06757a6bcf5efa462fce60143fa5b06b00c6d41528bf8605aa`), opened full-frame next to the candidate
- Caption: `intake/D033/photo-captions.txt#001` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `57e4a64aa4f2b3395fc45109e30ff4301a6814a4f877d843c9905bbd96a137c1`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)

## Source and story

intake/D033/001.jpg is a glossy portrait of a crowned, bearded king standing in namaskara in a pillared hall with seated golden figures. The candidate keeps the bearded king in namaskara but kneels him in profile before a shrine niche, replacing the hall and crowd with vines and a band of waves.

## Anatomy basis

One adult human king (Ambarisha, two arms, two legs) and one small standing Bhagwan shrine image (two arms).

## Observations

- Limbs, hands, feet and fingers (pass): Ambarisha holds his palms together in profile namaskara; the near palm shows four fingers and a thumb, and both wrists carry separate bangle stacks. One bare foot with five toes shows beneath his kneeling dhoti. The murti raises the right palm in abhaya with five digits and lowers the left palm open in varada.
- Attachment and proportions (pass): The king’s near arm runs from a floral armlet through the elbow to the bangled wrist; the far arm is hidden behind the body except its wrist. His kneeling body and folded legs read coherently. Both murti arms join the shoulders under the garlands.
- Faces (pass): Ambarisha: mature profile with a dark trimmed beard, moustache, white urdhva-pundra, crown and round earring, calm and absorbed. The murti has a blue youthful face, peacock-feather crown, almond eyes and a gentle smile matching the Guruvayurappan identity cues.
- Duplication and fusion (pass): One king and one shrine image only; no worshippers, crowds or repeated figures.
- Text and marks (pass): No letters, signatures or text-like marks found in the shrine carving, vines or waves.
- Scene, identity, composition and style (pass): Matches stanza 1: the king’s attention is fixed on Bhagwan rather than on royal display, and a wave band along the bottom stands in for the seven seas. Cream dhoti, maroon wrap and painted ochre ornaments follow the Ambarisha contract. The matte ochre mural texture and firm brown contours match the D001 style references.

## Defects

- None observed.

## Limitations

- The composition brief mentions a single lamp; none is painted. The must-show list does not require it.
- The shrine image is larger than “small” would suggest, but it stays subordinate to the king.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

## Re-inspection after final selection change

The full frame `artifacts/d033/s001/landscape/candidate-v002.png` (SHA-256 `ce6f8623e7aa89de7ce065f780699e73f56225ce048e1178aa3d84b40eb51139`) was reopened between 2026-11-06T18:08:44Z and 2026-11-06T18:09:00Z, after `art/plans/d033.json` was updated to bind S006 v005, S009 v003 and S010 v002 and after the origin/main D034 merge. Bearded, crowned Ambarisha kneels in namaskara before the small Guruvayurappan shrine above the wave band; the earlier observations hold.

- Final contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Final contract: `art/plans/d033.json` (SHA-256 `f147f2397170bb1527a2e5fa275142b0943d8924918fcc23aec4fddab2601216`)
- Final contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Final contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Final contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Final contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)
