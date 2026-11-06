# D040 S007 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Krishna defeats Putana
- Selected native PNG: `artifacts/d040/s007/landscape/v001/candidate.png` (v001), SHA-256 `6616b1f484f140cdf55e4e1b674e8423854d89e8caa175922369323e99944aee` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s007/landscape/v001/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:32:48Z and 2026-11-06T07:33:08Z; re-inspected against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s007/landscape/v001/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s007/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s007-v001-nw.png`: region `836x471+0+0`, SHA-256 `e317324e366db005ef101ee317fae4e2821d2bb034ce7b8e7e49fe3d2412a1f7`, opened between 2026-11-06T07:32:48Z and 2026-11-06T07:33:08Z
  - `artifacts/d040/review-evidence/managed-v001/s007-v001-ne.png`: region `836x471+836+0`, SHA-256 `bc77a2503fdb9a52158fcb695281298cd47f819ab9372f2507677f9dbcae6445`, opened between 2026-11-06T07:32:48Z and 2026-11-06T07:33:08Z
  - `artifacts/d040/review-evidence/managed-v001/s007-v001-contact-x2.png`: region `460x360+540+320 then 200% Lanczos`, SHA-256 `ed13e39b5f0c3166e87dc5da3a24a34b0479aa69cfd8c4ff3c35f47e239000dd`, opened 2026-11-06T07:33:08Z
  - `artifacts/d040/review-evidence/managed-v001/s007-v001-raised-hand-x2.png`: region `260x320+330+320 then 200% Lanczos`, SHA-256 `3ca16339060f4d1976b57b0e51d71db66d6c8004f20fd6d5678687d6b3a085e7`, opened 2026-11-06T07:33:08Z

## References opened and hashed

- Source reference: `intake/D040/007.jpg` (SHA-256 `fc5d4c4cca816e11e30abed3881c40e1f48731de136b74505122e84f3ed4c7ec`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#007` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Comparison image: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), infant identity anchor (opened full-frame 2026-11-06T07:35:05Z-07:35:19Z)
- Comparison image: `artifacts/d040/s004/landscape/v001/candidate.png` (SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d`), Putana disguise continuity (selected S004 v001)

## Source and story

intake/D040/007.jpg is a close-up of the veiled woman's startled, open-mouthed face as the infant's head rests at her chest. The candidate shows the same seated pose as S006: Putana startled with wide eyes and a raised palm, the infant calm at her covered chest, a dark violet poison wisp drawing into a small blue glow, and the two gopis watching from the doorway.

## Anatomy basis

Two adult gopikas, one adult woman (Putana in disguise) and one two-armed infant Krishna.

## Observations

- Limbs, hands, feet and fingers (pass): Putana raises her right palm with four fingers and a thumb and stacked bangles, and holds the infant's wrapped hip with her left hand (fingers visible). The infant rests one open hand with four fingers on her draped chest; his other arm and legs are wrapped. The background gopis each raise a hand to the chin or rest it on a knee.
- Attachment and proportions (pass): The raised forearm is continuous from armlet to wrist, and the supporting arm wraps around the infant naturally. The infant's visible arm is plump and connected.
- Faces (pass): Putana: the same face, maang-tikka, white flowers and round gold earring, now with wide eyes, raised brows and an open mouth. Infant: namam, feather, calm smile. Gopis: the same two individuals as S005/S006, smaller in the distance.
- Duplication and fusion (pass): One Putana, one infant and two gopis.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows the reversal described in the stanza: her alarm against the infant's calm, with the poison drawn into his blue radiance. Her chest stays fully covered by the maroon drape; there is no gore, fruit motif or extra divine arm. The putana, infant-krishna and gopikas contracts hold. The plan now binds gopikas for this frame because they are visible.

## Defects

- None observed.

## Limitations

- The infant's second arm and legs are hidden by the wrap.
- Re-opened against the final putana contract and the plan's added gopikas binding between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.
