# D040 S004 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Putana arrives in disguise
- Selected native PNG: `artifacts/d040/s004/landscape/v001/candidate.png` (v001), SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s004/landscape/v001/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:32:00Z and 2026-11-06T07:32:11Z; re-inspected against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s004/landscape/v001/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s004/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s004-v001-nw.png`: region `836x471+0+0`, SHA-256 `24f38de09f81ab2a8044798d4f2222ad4d7bb1b79dfb445e8096361ae3a1ed04`, opened between 2026-11-06T07:32:00Z and 2026-11-06T07:32:11Z
  - `artifacts/d040/review-evidence/managed-v001/s004-v001-ne.png`: region `836x471+836+0`, SHA-256 `94e8a38ad33ea1fc0a5d79a653dcc9e304848ebc8b40500bd3d075cc0e5ead17`, opened between 2026-11-06T07:32:00Z and 2026-11-06T07:32:11Z
  - `artifacts/d040/review-evidence/managed-v001/s004-v001-sw.png`: region `836x470+0+471`, SHA-256 `37f17b2490ba52ef81311c83e27f4b58c8da57939d2cab27edf0d3aa587a6bc1`, opened between 2026-11-06T07:32:00Z and 2026-11-06T07:32:11Z

## References opened and hashed

- Source reference: `intake/D040/004.jpg` (SHA-256 `460026b4e71129569b95624b3c0adbdc6caf0d80de746b4de70869ab72136e8e`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#004` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)

## Source and story

intake/D040/004.jpg is a two-panel animated still: a veiled woman with a maang-tikka and gold necklace holding a lotus, and the same woman among gopis. The candidate shows one veiled woman with a white flower in her hair walking toward the open door of a thatched Gokula house.

## Anatomy basis

One adult woman (Putana in disguise). One cow in the background.

## Observations

- Limbs, hands, feet and fingers (pass): Her right hand hangs at her side and her left hand is extended slightly forward; each shows a thumb and four fingers and wears gold bangles. Two bare feet in mid-stride, both with toes, below the sari hem.
- Attachment and proportions (pass): Her arms are continuous from the sleeve and armlet to the wrists. Her stride and adult proportions are natural.
- Faces (pass): Oval face with large almond eyes, arched brows, a red bindi, a maang-tikka and a calm, faint smile; a white flower behind her ear and a round gold drop earring.
- Duplication and fusion (pass): One woman; no infant, no second Putana and no Yashoda-like figure.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows the beautiful, flower-adorned disguise approaching Nanda's household. Her deep maroon sari with gold floral dots and border, cream ochre-bordered veil, gold bead necklace and long loose dark hair establish the putana contract's disguise markers. The modest drape is not sexualized. Matte mural rendering, not the source's glossy animation.

## Defects

- None observed.

## Limitations

- The putana contract was drafted after the first inspection pass, from the source captions/references and this frame's observed disguise. The full frame was re-opened against the final contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.
