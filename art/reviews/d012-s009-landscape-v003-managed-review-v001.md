# D012 S009 landscape v003 managed visual review

Reviewer: Claude (no-mistakes managed fix-review phase)  
Inspected: 2026-11-05T10:59:45Z  
Outcome: needs-fix for selection review only; this is not artwork approval. All candidates remain unapproved.

## Exact inspected source

- Candidate: `artifacts/d012/s009/landscape/candidate-v003.png`
- SHA-256: `6dc404bd19ef437b21afce03ca842ffd95601c76c87fd2b6ede05998a470206a` (re-hashed from `/home/gehariharan/firstmate-images/data/core-worktrees/d012-production/artifacts/d012/s009/landscape/candidate-v003.png` before viewing)
- Native dimensions: 1672 × 941 pixels
- Intake reference viewed: `intake/D012/009.jpg` (SHA-256 `0b74ad9cac36feb2f49bb247197f63bd51b00467432d58956fd31be8a9b5cbf7`)
- Compared against: canonical stanza 12-9 in `content/daskams/d012.json`, the S009 plan in `art/plans/d012.json`, `art/bible/series.json`, `art/bible/characters/varaha/character.json`, and the Varaha identity reference `artifacts/d012/characters/varaha/character-reference-v001.png` (SHA-256 `d594a675db1d199aacd0b0d0f139a3448595049fd49fc03294f6b051085cf301`)
- Canonical stanza: Seeing the Earth hidden at the edge of Rasātala by the wicked demon, You, O Lord in boar form, paid no heed to the approaching demon hordes and playfully supported the Earth on the tip of Your tusk.
- Scene contract: Varaha finds and playfully lifts Earth
- Method: the exact raw was opened at native resolution for full-frame inspection, followed by independent detail crops made from the same raw with ImageMagick (`WxH+X+Y`, upscaled where noted). Crops were ephemeral session files under `/tmp/d012-managed-review/`:
  - `s009-tusk-earth-2x.png` from crop 380x340+1150+80, 2x, SHA-256 `d4ec2829fbf77a2b5b7ac8de330ba78e5792ec47a80f377680e81ecf76dc4c56`
  - `s009-silhouettes.png` from crop 1672x200+0+741, SHA-256 `8dc386d51bab43a4230a698454eb2501b777602cf1b7b023073083a6a7af6533`

## Full frame

A crowned boar swims right through blue-grey ocean waves at the surface, under a plain ochre sky band across the top quarter. A single Earth globe rests on the tip of one upward-curving tusk beside the snout. Several dim, dark silhouettes sit along the bottom edge.

## Detail observations

- Limbs, hands and feet (pass): Four legs with anklets and cloven hooves extend in a swimming stride; no humanoid limbs.
- Attachment and proportions (needs-fix): Crop s009-tusk-earth-2x: the Earth-bearing tusk springs from the right rim of the nostril disc, above and forward of the mouth line. The near tusk roots at the mouth corner, so the Earth tusk reads as growing out of the snout like a horn, not from the far mouth corner. This is the same defect class recorded for S010 v003.
- Faces (pass): One boar head with one eye, ears, crown, forehead mark and a gentle smile.
- Duplication and fusion (pass): One boar and one Earth; the Earth touches only the tip of the single raised tusk; no second tusk contact.
- Text and artifacts (pass): No readable text or marks.
- Scene, style and continuity (needs-fix): The plan calls for a wide underwater composition at the edge of Rasatala (stanza 12-9). The image instead shows a surface swim with sky above, which pre-empts S010's emergence. Crop s009-silhouettes: the bottom figures are calm, seated, crowned silhouettes, not a subdued asura receding. Playful ease and no combat do match.

## Findings

- `D012-S009-V003-SNOUT-ROOTED-TUSK` (high, medium confidence): The Earth-bearing tusk emerges from the nostril disc rim above the mouth line instead of from the mouth corner. Repair: Root the Earth tusk at the lower mouth line behind the snout, as in S010 v004.
- `D012-S009-V003-SURFACE-NOT-RASATALA` (medium, high confidence): The boar swims at the ocean surface under a sky band rather than underwater at the edge of Rasatala, and the bottom silhouettes read as seated crowned figures rather than a receding asura. Repair: Set the lift underwater at Rasatala's edge, with at most one subdued receding asura silhouette.

## Limitations

Tusk-root judgement is from a 2x crop of a stylised drawing; the far-tusk reading was considered and rejected because the tusk projects forward of the snout tip. Prior review prose for this version was not reused as observation. This report is bound only to the exact candidate hash above; portrait production remains paused, and no master or approval manifest is changed.
