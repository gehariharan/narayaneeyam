# D033 S004 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Durvasa delays at the Yamuna as Ambarisha waits
- Selected native PNG: `artifacts/d033/s004/landscape/candidate-v001.png` (v001), SHA-256 `16b2eb86e891fcc4ce216231b6e9aa1c4317e5377599a7f7d5ebbd819077773f` (recomputed after a byte-exact copy of the image file from the D033 production checkout), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:18:40Z and 2026-11-06T11:19:05Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and records were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s004/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v001/s004-v001-zoom-durvasa-arms.png`: region `360x460+930+300 at 150%`, SHA-256 `33b0b5bce0515616562139fb82cb2f3739314354eb5b548ffcfab1f4225ec286`, opened between 2026-11-06T11:18:40Z and 2026-11-06T11:19:05Z
  - `artifacts/d033/review-evidence/managed-v001/s004-v001-zoom-disciples-hands.png`: region `440x420+440+330 at 150%`, SHA-256 `b41311a18b05b3e02448b3b3cffbf20a0ef9b73c422132668bfedca19ae4f0f8`, opened between 2026-11-06T11:18:40Z and 2026-11-06T11:19:05Z
  - `artifacts/d033/review-evidence/managed-v001/s004-v001-zoom-feet.png`: region `560x260+420+680 at 150%`, SHA-256 `d920dca5044f032328d27b4fc6fdd3c45965cd154621e245dbb8f053367dcde8`, opened between 2026-11-06T11:18:40Z and 2026-11-06T11:19:05Z

## References opened and hashed

- Source reference: `intake/D033/004.jpg` (SHA-256 `723dad8fd751e155c8b1e66702f1e206ab21889c78335bb96872f6b2b48cfeca`), opened full-frame next to the candidate
- Caption: `intake/D033/photo-captions.txt#004` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `57e4a64aa4f2b3395fc45109e30ff4301a6814a4f877d843c9905bbd96a137c1`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)

## Source and story

intake/D033/004.jpg shows a white-bearded sage in saffron standing in a river among many bathing ascetics, with temples and a waterfall behind. The candidate keeps the white-bearded saffron sage, the river, the waterfall and the domed shrines, but shows him walking toward the water with two disciples while the king waits at a palace doorway.

## Anatomy basis

Four ordinary two-armed, two-legged adults: Ambarisha, two disciples and Durvasa.

## Observations

- Limbs, hands, feet and fingers (pass): Durvasa grips a staff with one hand and lets the other hang open, with bead bands at the upper arm and wrist. One disciple carries a rolled mat and the other a pot, each with the near hand visible. Both disciples walk on two bare feet with toes. Ambarisha joins two hands at the doorway and stands on two feet.
- Attachment and proportions (pass): Durvasa’s staff arm comes from behind his torso to the staff; his hanging arm is continuous from shoulder to hand. The disciples’ far arms are hidden behind their loads, and every body is proportionate.
- Faces (pass): Durvasa: long lined face, strong brows, long white beard and grey-white matted hair piled high, as his contract describes. The bearded topknot disciple and the shaved disciple are distinct. Ambarisha is bearded and crowned, consistent with earlier stanzas.
- Duplication and fusion (pass): One Durvasa, two distinct disciples and one king; no repeated sages or split panels.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 4: Durvasa heads to the Yamuna for his observances while Ambarisha waits respectfully at the palace threshold, all in one continuous riverside scene in the matte mural style.

## Defects

- None observed.

## Limitations

- The invitation to eat is implied by the king’s waiting namaskara rather than shown as a gesture.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

## Re-inspection after final selection change

The full frame `artifacts/d033/s004/landscape/candidate-v001.png` (SHA-256 `16b2eb86e891fcc4ce216231b6e9aa1c4317e5377599a7f7d5ebbd819077773f`) was reopened between 2026-11-06T18:08:44Z and 2026-11-06T18:09:00Z, after `art/plans/d033.json` was updated to bind S006 v005, S009 v003 and S010 v002 and after the origin/main D034 merge. Durvasa with staff and two disciples walk toward the river while the bearded king waits in namaskara at the doorway; unchanged.

- Final contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Final contract: `art/plans/d033.json` (SHA-256 `f147f2397170bb1527a2e5fa275142b0943d8924918fcc23aec4fddab2601216`)
- Final contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Final contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Final contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Final contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
