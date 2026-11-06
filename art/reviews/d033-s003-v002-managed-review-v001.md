# D033 S003 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Year-long Dvadashi worship beside the Yamuna
- Selected native PNG: `artifacts/d033/s003/landscape/candidate-v002.png` (v002), SHA-256 `1a15fa0d67f1eb6a3823857daa185035b57915722268b595946f575a1059f221` (recomputed after a byte-exact copy of the image file from the D033 production checkout), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:17:55Z and 2026-11-06T11:18:40Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and records were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s003/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v001/s003-v002-zoom-couple-lower.png`: region `560x560+0+380 at 130%`, SHA-256 `b7b2e3165e5aa2b4b6056f0541cf77cf7e09d0bec249112c88a62d80f8a20b58`, opened between 2026-11-06T11:17:55Z and 2026-11-06T11:18:40Z
  - `artifacts/d033/review-evidence/managed-v001/s003-v002-zoom-brahmin-hands.png`: region `560x300+1100+280 at 150%`, SHA-256 `0bfa58bbc3f27c3b858b46dfda97851d8548652b2b658318a6fa7e3b9c79adc3`, opened between 2026-11-06T11:17:55Z and 2026-11-06T11:18:40Z
  - `artifacts/d033/review-evidence/managed-v001/s003-v002-zoom-cows-legs.png`: region `700x420+972+521 at 130%`, SHA-256 `bc4e74d00c326b8a6434b8841e26a6c5ecc12c37a2cd6b0d0cdc9c931192eef1`, opened between 2026-11-06T11:17:55Z and 2026-11-06T11:18:40Z

## References opened and hashed

- Source reference: `intake/D033/003.jpg` (SHA-256 `00f2b54be13dce8631a26b7dcc45f0df783e3d92738f2bf561cab09bd78f9105`), opened full-frame next to the candidate
- Caption: `intake/D033/photo-captions.txt#003` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `57e4a64aa4f2b3395fc45109e30ff4301a6814a4f877d843c9905bbd96a137c1`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/ambarisha-wife/character.json` (SHA-256 `1b34dc95deeafe843f337f0170540ab6ce9c5ad03eca9c253330f022c17e994d`)
- Contract: `art/bible/characters/brahmins/character.json` (SHA-256 `ee6f618e0dd1b82fae4f7ab0a37abdee5cf6edb7a0544410a55e5fbc996f7b07`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)

## Source and story

intake/D033/003.jpg is a glossy portrait of a crowned king and a veiled queen side by side in namaskara in a palace. The candidate keeps the couple in namaskara, seats them by the Yamuna before a shrine murti, and adds two Brahmins and two cows for the gifts.

## Anatomy basis

Four ordinary two-armed adults (Ambarisha, the unnamed queen and two Brahmins), two cows and one small Bhagwan murti.

## Observations

- Limbs, hands, feet and fingers (pass): King and queen each join two hands in namaskara with bangles on both wrists; the king’s bare foot and the queen’s foot show at the mat edge. Each Brahmin holds out two cupped hands with fingers drawn. Each Brahmin shows one bare foot, the other hidden behind a cow. Each cow stands on four hoofed legs.
- Attachment and proportions (pass): Both Brahmins show a near arm and a far arm with ash stripes, each joined to its own shoulder. The seated couple have coherent cross-legged poses and the cows are proportionate.
- Faces (pass): Ambarisha has a dark beard and moustache, consistent with stanzas 1 and 2. The queen has a distinct calm face with a red sari drawn over her hair. The shaved Brahmin and the topknot Brahmin are clearly different men. The murti has the blue Guruvayurappan face and peacock feather.
- Duplication and fusion (pass): Two distinct cows (brown-patched and grey-spotted) and two distinct Brahmins; no clones or fused bodies.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 3: the couple worship by the Yamuna before a small murti, with a lamp, fruit and flowers as offerings. A modest group of cows and recipients stands in for the gifts. Clothing follows the Ambarisha, queen and Brahmin contracts in a matte mural palette.

## Defects

- None observed.

## Limitations

- The Brahmins wear bead malas, and no sacred thread is clearly visible. This is not enough to change their role.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.
