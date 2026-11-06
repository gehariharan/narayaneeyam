# D042 shared supporting-cast contract rebinding v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5; independent of the native Codex ImageGen generators)
- Rechecked at: 2026-11-06T00:00:10Z
- Reason: D044 merged to main (`7f7b78c5b311cb127702344f045f25204093a4c2`) with canonical `art/bible/characters/gopas/character.json` and `art/bible/characters/nandagopan/character.json`. D042 now uses those exact bytes instead of keeping a second definition of the same character ids.
- Contract: `art/bible/characters/gopas/character.json` (SHA-256 `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`)
- Contract: `art/bible/characters/nandagopan/character.json` (SHA-256 `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`)
- Outcome: the four affected selected images still satisfy the current contracts; their original reports and pass outcomes stand. No image bytes were edited and nothing is approved.

## Views actually opened

- `artifacts/d042/review-evidence/managed-v004/s004-s009-nandagopan-recheck.png` (S004 v001 and S009 v001 full frames side by side, each scaled to 1100 px wide), SHA-256 `36e8efd5cfcbb1b1b3f9fa4c9483abdb432a98cc8f06803ba9ebc6077dfe6e3f`
- `artifacts/d042/review-evidence/managed-v004/s005-s007-gopas-recheck.png` (S005 v001 and S007 v001 full frames side by side, each scaled to 1100 px wide), SHA-256 `bcdfb3af052ab4b7cff7a623105de549ad4163420f6817821f470a584a1b4b1f`
- The native-resolution detail crops listed in each image's original report.

## Nandagopan (S004 v001, S009 v001)

- Both show one mature man with a gently rounded face, a dark moustache and no beard, dark hair under a cream head cloth, a cream dhoti and a muted olive upper cloth, with a calm, protective expression; tears are visible on his cheek in S009 but not in S004 (see the S004 report's expression correction). This matches the main contract's face, hair, clothing and continuity markers. He appears once in each frame (no duplicate Nanda), with no crown or armor. He is distinct from the white-bearded elder in S004 and from Vasudeva's fuller beard.

## Gopas (S004 v001, S005 v001, S007 v001)

- S004: four secondary gopa and Brahmin elders at left with distinct faces (white-bearded elder, shaved young Brahmin, two turbaned men) in cream dhotis and maroon or rust shawls, visually secondary to Nanda and the infant.
- S005: seven distinct cowherd men of varied age (one bearded, varied moustaches) in cream dhotis with slate-blue, green, rust, ochre and muted purple shawls or turbans. No cloned individual, no royal or modern costume, no extra limbs. The plan's gopas-only scene has no Nanda or Krishna to be secondary to.
- S007: nine distinct gopas of varied age, including a white-bearded elder, in cream dhotis with green, blue, rust and ochre cloths. No cloned individual. The infant on the step stays the focal subject.

## Limitations

- The main gopas contract lists cream, olive or maroon cloth. S005 and S007 also use muted slate-blue and purple accents. These are muted mural pigments, and the contract's never-list does not restrict colour, so this is recorded as a palette variation rather than a defect.
- S005's group of seven is larger than 'small'; the D042 S005 plan requires 'several gopas' studying the cart.
