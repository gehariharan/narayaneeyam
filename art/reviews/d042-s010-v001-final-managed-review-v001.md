# D042 S010 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5; independent of the native Codex ImageGen generators)
- Scene: Cart-demon released into the Lord
- Selected native PNG: `artifacts/d042/s010/candidates/landscape-v001.png` (v001), SHA-256 `4276538ac122d1e0c7e94195e76c8ada2d15e6b36ed200a5ce57809ad4c96e80` (recomputed after a byte-exact regular-file copy from the producer worktree `artifacts/` path), 1672 × 941
- Prompt: `artifacts/d042/s010/prompts/landscape-v001.prompt.txt` (SHA-256 `a07e7b1d28b74ab243ebde10e55203acdf27673803f54037b7c3271c75c5a46b`, verified `a07e7b1d28b74ab243ebde10e55203acdf27673803f54037b7c3271c75c5a46b`)
- Native output provenance: `/home/gehariharan/.codex/generated_images/01a1aaa0-8dfa-7702-b8e3-622fd6f23427/exec-81f76df8-5360-48a6-8125-d4789a8d8660.png`
- Inspected at: 2026-11-05T23:09:22Z (detail views); the full-frame open came first
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-reports and the infant anchor review were not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d042/s010/candidates/landscape-v001.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d042/review-evidence/managed-v001/s010-onlookers-upper.png`: region `640x560+0+0`, SHA-256 `1d0ff6d43fc432208f259d006f0ecf71afe27aacf9fa5b0d22e322e7d2d22c29`, opened after creation at 2026-11-05T23:09:22Z
  - `artifacts/d042/review-evidence/managed-v001/s010-boys.png`: region `380x420+0+520`, SHA-256 `b04c5c02ffcc38a9ebef6432ec8409a8757c33e92ef803084966ec8ba2dab88a`, opened after creation at 2026-11-05T23:09:22Z
  - `artifacts/d042/review-evidence/managed-v001/s010-infant-wisp.png`: region `420x500+330+400`, SHA-256 `7bdc4a15fe1e65fea49e11c6e72af6fa4429f6c236dbcb046cb10fe4da978a10`, opened after creation at 2026-11-05T23:09:22Z

## References opened and hashed

- Source reference: `intake/D042/010.jpg` (SHA-256 `a9e841045c3554286d491ecffe16fe29f710691bac6ccb33eac5892a6764e98b`), opened full-frame
- Caption: `intake/D042/photo-captions.txt#010` (file SHA-256 `02a446d6d59fa6328c4f46921a067c120c3f8e18cc044f68ce8368710fefedd6`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d042.json` (SHA-256 `f66f9a303d73f13bc8275821978ced521ada3646b620683561f91cff16b15cf5`)
- Contract: `content/daskams/d042.json` (SHA-256 `a8ea388f8a092a0b09373625f01ef4bf1427045ad7b750bfceba032b446a7308`)
- Contract: `content/sources/d042/reference-map.json` (SHA-256 `923bd765d908e799ce12719b68125c0f2572ab6e62630c864ade63d9d333634f`)
- Contract: `content/sources/d042/provenance.json` (SHA-256 `ba0bb7e9ffd1711b3414f73cdddc4ff3e5bcfff3d6800fae1e97d64f58127f0b`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/chakatasura-cart-form/character.json` (SHA-256 `3c228b0f8165a2f04546d5cc291424c88c2623dd6287ea5e7ba14df8d33e36e9`)
- Reference (character anchor): `artifacts/d042/references/shared/infant-krishna-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s004.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s008.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)

## Source and story

intake/D042/010.jpg shows a woman in a red sari, a man in a teal turban and two veiled women at upper left, with boys at front and a fallen demon behind the carved cart. v001 shows the carved broken cart and a pale wisp from under it dissolving toward the seated radiant infant, with no demon body. However, the upper-left onlookers closely copy the source's staging and costumes: a woman in a red sari with a red veil and layered pearl strands, a man in a teal turban and green robe, two veiled women and two boys at front.

## Anatomy basis

Seven figures: four adults and two boys are ordinary two-armed people, and Krishna is an ordinary two-armed infant. The cart demon has no body by plan.

## Observations

- Limbs, hands, feet and fingers (pass): The red-sari woman's two hands open toward the infant. The green-sari woman has one hand at her chest. The boys' hands rest on the ground with complete feet. The infant opens two five-finger palms and both feet are complete.
- Attachment and proportions (pass): All visible limbs attach correctly and proportions are natural.
- Faces (uncertain): Faces are distinct and well formed. The infant matches v004. The woman leaning toward the child in Yashoda's position does not match the shared Yashoda cue: she wears a red sari and red veil with heavy layered pearls instead of a cream/saffron/rose sari with modest jewelry. The teal-turbaned man in a court-style green robe does not match Nandagopan's cream-and-olive cue.
- Duplication and fusion (pass): One infant, no repeated figures.
- Text and marks (pass): None.
- Scene, iconography, composition and style (needs-fix): The cart form and the restrained dissolving wisp meet the stanza. But the onlooker group is not in the plan's cast, reproduces the source's staging (which the plan forbids copying), and presents a likely Yashoda and father figure with costumes that break the D042 identity cues used in S001, S004 and S009.

## Defects

- Unplanned onlooker group copies intake/D042/010.jpg staging and costumes (red-sari woman with red veil and heavy pearls, teal-turbaned man in a green court robe, two veiled women), contrary to the plan's instruction not to copy reference staging.
- The red-sari woman reads as Yashoda but breaks the shared Yashoda cue (cream/soft saffron/muted rose sari, simple veil, modest jewelry), and the teal-turbaned man in a paternal position does not match the Nandagopan cue; chapter identity continuity is broken.

## Requested native repair (private asset request to controller/root)

- Native Codex ImageGen correction from v001: keep the carved broken cart, the pale dissolving wisp and the seated radiant infant. Either remove the onlookers, or replace them with the D042 cast drawn to the shared cues (Yashoda in cream/saffron sari with a simple veil and modest jewelry; optional guard boys) and no teal-turbaned courtier, in an original staging rather than the source's.
- The pipeline will import the exact preserved native result as a new version and re-inspect it before any pass.

## Limitations

- The pale wisp reads as light rather than a dark shadow; it was judged acceptable as a restrained dissolution.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.
