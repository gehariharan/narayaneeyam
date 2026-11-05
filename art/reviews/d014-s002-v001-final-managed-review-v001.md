# D014 S002 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Kardama's long austerity
- Selected native PNG: `artifacts/d014/s002/landscape/candidate-v001.png` (v001), SHA-256 `1391da61c51c1e0b07ab7991206b3d5139908cea76e6eb19405fe1a949add7e9` (recomputed from the D014 source checkout), 1672 × 941
- Inspected at: 2026-11-05T11:43:02Z (detail views); the full-frame open came first, between 2026-11-05T11:42:46Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d014/s002/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence under the release worktree, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v001/s002-v001-detail-face.png`: region `520x420+300+80`, SHA-256 `3c4f2aec2af07a209d7616f0f5a9d1a396ad0977a8497b16d24d05077046f4ee`, opened after creation at 2026-11-05T11:43:02Z
  - `artifacts/d014/review-evidence/managed-v001/s002-v001-detail-hands-legs.png`: region `820x320+160+620`, SHA-256 `b7d8ca53ccdf47076e277fca7185ba7a90a52d04dc9b8b662eb5fe38af6fca10`, opened after creation at 2026-11-05T11:43:02Z
  - `artifacts/d014/review-evidence/managed-v001/s002-v001-detail-season-arc.png`: region `960x360+700+40`, SHA-256 `e73e063530968bc7a6c17abbd8537df7fc40347671f37522e4bc30d3bc17755a`, opened after creation at 2026-11-05T11:43:02Z

## References opened and hashed

- Source reference: `intake/D014/002.jpg` (SHA-256 `9a1fa7663ecabe30c818d5959f6bc8a08e19c04e95889cbee8e34ec2b52dac96`), opened full-frame immediately before the candidate
- Caption: `intake/D014/photo-captions.txt#002` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame

## Source and story

intake/D014/002.jpg shows a young long-haired ascetic in a saffron robe meditating in jnana mudra under a great tree, with a thatched hut and stream. The candidate recomposes the same cues: saffron robe, rudraksha strands, urdhva-pundra tilak, closed eyes and mudra, under a broad pipal tree with the hut and stream behind. Photographic lighting is replaced by flat mural colour. A painted arc of four trees (blossom, green, autumn, bare in snow) above the landscape conveys the long passage of time without numbers.

## Anatomy basis

Kardama is the single ordinary ascetic: one head, two arms resting in jnana mudra, legs in half-lotus. The season trees are scenery.

## Observations

- Limbs, hands, feet and fingers (pass): Both hands rest on the knees in jnana mudra: the viewer-right hand shows a thumb and four fingers with thumb and index touching, and the viewer-left hand is foreshortened with curled fingers. One upturned foot with toes lies on the opposite thigh; the other foot is under the robe.
- Attachment and proportions (pass): Shoulders, elbows and wrists (each with a bead bracelet) are continuous, and the robe drapes one seated body on a round grass mat.
- Faces (pass): One serene, youthful, clean-shaven face with closed eyes, a tilak and long dark hair in a bead-bound bun.
- Duplication and fusion (pass): One human and no Brahma shadow-double. The season arc holds only trees.
- Text and marks (pass): The arc scrollwork has no letters, numerals or clock; no signature or watermark.
- Scene, iconography, composition and style (pass): The seasonal arc encloses the setting, not his body, as the plan specifies. Matte ochre and olive mural treatment with dark contours matches the style anchors, without gloss.

## Defects

- None observed.

## Limitations

- The bare winter tree on a snow mound is a non-Kerala seasonal convention. It reads as a time-passage cue, not a scene error.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.
