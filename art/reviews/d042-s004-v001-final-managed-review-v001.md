# D042 S004 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5; independent of the native Codex ImageGen generators)
- Scene: Nanda and elders find Krishna safe
- Selected native PNG: `artifacts/d042/s004/candidates/landscape-v001.png` (v001), SHA-256 `0d395708b7b081355c0fa25575f53ee05c885ba868fba918a21fd842f2af65fc` (recomputed after a byte-exact regular-file copy from the producer worktree `artifacts/` path), 1672 × 941
- Prompt: `artifacts/d042/s004/prompts/landscape-v001.prompt.txt` (SHA-256 `67d20edf0854e2f706a2cf7a275bb636c8797c8038826650d2d6d7a451ece74e`, verified `67d20edf0854e2f706a2cf7a275bb636c8797c8038826650d2d6d7a451ece74e`)
- Native output provenance: `/home/gehariharan/.codex/generated_images/01a1aaa0-8dfa-7702-b8e3-622fd6f23427/exec-ef937216-592c-47e8-b201-0e6e9df0d128.png`
- Inspected at: 2026-11-05T23:05:35Z (detail views); the full-frame open came first
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-reports and the infant anchor review were not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d042/s004/candidates/landscape-v001.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d042/review-evidence/managed-v001/s004-elders-upper.png`: region `560x520+0+120`, SHA-256 `43f19e2b7b58a2a184814cdc6b45ab586a15fd8ed01bd0e80519e20202763de6`, opened after creation at 2026-11-05T23:05:35Z
  - `artifacts/d042/review-evidence/managed-v001/s004-elders-feet.png`: region `560x320+0+560`, SHA-256 `1ca799eef96365c3379ba919ac65bccf863d26fa257abef97a18ee4c9a6859f0`, opened after creation at 2026-11-05T23:05:35Z
  - `artifacts/d042/review-evidence/managed-v001/s004-nanda-hands-feet.png`: region `640x420+260+480`, SHA-256 `871f5be6635a2e3ed4bdf5166590bd460580ea119c31af2d65b22f977769b8d1`, opened after creation at 2026-11-05T23:05:35Z
  - `artifacts/d042/review-evidence/managed-v001/s004-infant-yashoda-hands.png`: region `460x480+860+280`, SHA-256 `dc431d0b823f3fe6b9754dc014dec2d3299bf34fddb4e0f9b1658c9f95251127`, opened after creation at 2026-11-05T23:05:35Z
  - `artifacts/d042/review-evidence/managed-v001/s004-nanda-yashoda-faces.png`: region `460x320+560+100`, SHA-256 `d4df9a9b1ef5d5af7632d1c5c395dd8f045926cea6bf7b7aa4e27cf00472141a`, opened after creation at 2026-11-05T23:05:35Z
  - `artifacts/d042/review-evidence/managed-v001/s004-embrace-arm-x3.png`: region `260x220+820+460 enlarged 3x (point filter)`, SHA-256 `0dc352c1ea23db2ac6b901221cb203d8ff78ad9612bc7e2d9198db1848bca502`, opened after creation at 2026-11-05T23:05:35Z

## References opened and hashed

- Source reference: `intake/D042/004.jpg` (SHA-256 `58a0396e159b1ffefecedda23f294b1fd7f16c9bda82596d636442122d88bc7d`), opened full-frame
- Caption: `intake/D042/photo-captions.txt#004` (file SHA-256 `02a446d6d59fa6328c4f46921a067c120c3f8e18cc044f68ce8368710fefedd6`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d042.json` (SHA-256 `f66f9a303d73f13bc8275821978ced521ada3646b620683561f91cff16b15cf5`)
- Contract: `content/daskams/d042.json` (SHA-256 `a8ea388f8a092a0b09373625f01ef4bf1427045ad7b750bfceba032b446a7308`)
- Contract: `content/sources/d042/reference-map.json` (SHA-256 `923bd765d908e799ce12719b68125c0f2572ab6e62630c864ade63d9d333634f`)
- Contract: `content/sources/d042/provenance.json` (SHA-256 `ba0bb7e9ffd1711b3414f73cdddc4ff3e5bcfff3d6800fae1e97d64f58127f0b`)
- Contract: `art/bible/characters/nandagopan/character.json` (SHA-256 `6ed55f5aeeb930712ee4230c7ea2adcb1322805af184d8f4146b7ce527a36a25`)
- Contract: `art/bible/characters/gopas/character.json` (SHA-256 `6a4068d21630de228575be39032b0de58c8d8888a0f1e9098e043f40daaae2e3`)
- Contract: `art/bible/characters/brahmins/character.json` (SHA-256 `ee6f618e0dd1b82fae4f7ab0a37abdee5cf6edb7a0544410a55e5fbc996f7b07`)
- Contract: `art/bible/characters/yashoda/character.json` (SHA-256 `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Reference (character anchor): `artifacts/d042/references/shared/infant-krishna-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`)
- Reference (character anchor): `artifacts/d042/references/shared/nandagopan-yashoda-identity-source-d043-s009.jpg` (SHA-256 `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s004.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s008.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)

## Source and story

intake/D042/004.jpg shows the elders gathering in relief around the safe child. v001 gathers the scene around Yashoda, who holds the infant at center-right. Nandagopan leans in tearfully beside her, and gopas and Brahmin elders stand at left, readable but secondary.

## Anatomy basis

All adults are ordinary two-armed people (Nandagopan, Yashoda, gopas and Brahmins), and Krishna is an ordinary two-armed infant.

## Observations

- Limbs, hands, feet and fingers (pass): Yashoda's two arms cradle the infant, one under his back and one under his legs. Nandagopan's two hands reach toward the child with five fingers each, and both his feet are bare on the ground. The elders' hands are joined or raised, and their visible feet are complete in the lower-left crop.
- Attachment and proportions (pass): The 3x crop at the embrace confirms each hand traces back to Yashoda or Nandagopan, with no orphan hand. The infant keeps newborn proportions.
- Faces (pass): Nandagopan matches the shared cue: rounded face, dark moustache, cream head cloth and olive upper cloth, with a tearful, relieved expression. Yashoda matches the cue: gentle oval face, parted hair under a cream veil, saffron/rose sari. The elders' faces are distinct. The infant matches v004.
- Duplication and fusion (pass): One infant; no repeated elder or fused bodies in the group.
- Text and marks (pass): None.
- Scene, iconography, composition and style (pass): Anxiety turning to relief in a close gathering with no adult blocking the infant, as planned. Matte mineral finish.

## Defects

- None observed.

## Limitations

- The back-row elders are partly occluded at the shoulders; their faces and visible hands were checked.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.

## Source description correction

- Re-opened at 2026-11-06T00:00:10Z (`artifacts/d042/review-evidence/managed-v004/sources-001-004.png`). The source shows a close group of women around a seated mother holding the infant; no Nandagopan, gopas or Brahmins are shown, matching the reference map. The earlier statement that it 'shows the elders gathering' was wrong. v001's Nandagopan, gopas and Brahmins come from the stanza 4 plan's must-show list, so the image observations, checks and outcome are unchanged.
