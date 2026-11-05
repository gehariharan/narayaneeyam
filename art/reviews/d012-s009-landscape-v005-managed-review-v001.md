# D012 S009 landscape v005 managed visual review

Reviewer: Claude (no-mistakes managed fix-review phase)  
Inspected: 2026-11-05T11:39:24Z  
Outcome: pass for selection review only; this is not artwork approval. All candidates remain unapproved.

## Exact inspected source

- Candidate: `artifacts/d012/s009/landscape/candidate-v005.png`
- SHA-256: `462449699bba4c4a1b0be0c857d4921ced81e904643f94d4e29af1de83ba986c`. Hashed at the native source `/home/gehariharan/firstmate-images/data/d012-production/native-repairs-01M6NNCX68T129334CWDZ2C7TA/s009/candidate-v005.png` before viewing, and again after the byte copy into the review checkout.
- Native dimensions: 1671 × 941 pixels
- Replaces selected v003 (`6dc404bd19ef437b21afce03ca842ffd95601c76c87fd2b6ede05998a470206a`), retained as needs-fix history for the snout-rooted tusk and surface setting (D012-S009-V003-*); native repair v004 f36bffe6… failed separately and remains external history.
- Intake reference: `intake/D012/009.jpg` (SHA-256 `0b74ad9cac36feb2f49bb247197f63bd51b00467432d58956fd31be8a9b5cbf7`)
- Compared against: canonical stanza 12-9 in `content/daskams/d012.json`, the S009 plan in `art/plans/d012.json`, `art/bible/series.json`, `art/bible/characters/varaha/character.json`, and the Varaha identity reference `artifacts/d012/characters/varaha/character-reference-v001.png` (SHA-256 `d594a675db1d199aacd0b0d0f139a3448595049fd49fc03294f6b051085cf301`)
- Canonical stanza: Seeing the Earth hidden at the edge of Rasātala by the wicked demon, You, O Lord in boar form, paid no heed to the approaching demon hordes and playfully supported the Earth on the tip of Your tusk.
- Scene contract: Varaha finds and playfully lifts Earth
- Generation custody (read, not relied on for clearance):
  - prompt: `/home/gehariharan/firstmate-images/data/d012-production/native-repairs-01M6NNCX68T129334CWDZ2C7TA/s009/prompt-v005.txt`, SHA-256 `1a2a1ae3cfd5cecf0f809bc594740c1aeba66dd0913294292a9080a6f455d548`
  - native provenance: `/home/gehariharan/firstmate-images/data/d012-production/native-repairs-01M6NNCX68T129334CWDZ2C7TA/s009/provenance-v005.json`, SHA-256 `8b6e2eac9ae56bc1d0f1e8edb78db2a09a1cf6a51f452d7930f47395c8eba53f`
  - helper self-review (not managed clearance): `/home/gehariharan/firstmate-images/data/d012-production/native-repairs-01M6NNCX68T129334CWDZ2C7TA/s009/review-v005.md`, SHA-256 `42e917dca64d0f0b25e4333ea9b02f869106cca83034c7bd81c88e0df466ca8b`
  - failed intermediate native v004 raw, retained externally: `/home/gehariharan/firstmate-images/data/d012-production/native-repairs-01M6NNCX68T129334CWDZ2C7TA/s009/candidate-v004.png`, SHA-256 `f36bffe66b22608439261d7677d843f7f0eb2b4050bb8a2d4f1f1bfe047595ff`
  - failed intermediate v004 needs-fix review: `/home/gehariharan/firstmate-images/data/d012-production/native-repairs-01M6NNCX68T129334CWDZ2C7TA/s009/review-v004-needs-fix.md`, SHA-256 `c9cd9e89ce45cab6d3396923912e28611676421a251017a2c1a31d84192b8c33`
- Method: the exact raw was opened at native resolution for full-frame inspection, followed by independent detail crops made from the same raw with ImageMagick (`WxH+X+Y`, upscaled where noted). Crops were ephemeral session files under `/tmp/d012-managed-review-r3/`:
  - `s009v5-tusk-root-3x.png` from crop 260x220+1150+300, 3x, SHA-256 `7ed9967dd63569da1e108fad14997c8a8691106459f84f12ea21a693e109d705`
  - `s009v5-asura-3x.png` from crop 160x160+1500+280, 3x, SHA-256 `3c014e1ca6274bc9349582223a43b1f7485ec83482cc6d3c2d8774f02f821108`

## Full frame

Fully underwater deep-blue field with stylised currents, bubbles, coral and sunken colonnade ruins along the lower edge (the edge of Rasatala). One crowned boar swims right in an easy, smiling stride. A single Earth globe rests on the tip of the tusk that curves up in front of the snout. A faint, dim, horned asura bust sits far right in the water.

## Detail observations

- Limbs, hands and feet (pass): Four legs with anklets and cloven hooves in a swimming stride; no humanoid limbs.
- Attachment and proportions (pass): Crop s009v5-tusk-root-3x: the Earth-bearing tusk emerges from under the nostril disc at the lower-lip line and curves upward, matching the near tusk at the mouth corner. It no longer grows from the snout rim. The snout bridge is smooth.
- Faces (pass): One boar head with one eye, ears, crown, forehead mark and a gentle smile. Crop s009v5-asura-3x: a single bearded, horned asura head and shoulders, dim and distant.
- Duplication and fusion (pass): One boar and one Earth, which touches only the tip of a single tusk; one asura silhouette.
- Text and artifacts (pass): No readable text or marks.
- Scene, style and continuity (pass): Matches stanza 12-9 and the plan: underwater at Rasatala's edge, Earth on one tusk tip, playful effortless lift, and a subdued distant asura with no combat, injury or weapon. This resolves both v003 findings. Matte mural palette.

## Findings

No unresolved visual findings were observed in this exact candidate.

## Limitations

The raw is 1671x941. The asura is a still bust rather than a figure visibly receding; the plan allows this as optional ('may recede'). The helper's generation-time self-review was read for custody only; these observations come from this managed inspection. This report is bound only to the exact candidate hash above; portrait production remains paused, and no master or approval manifest is changed.
