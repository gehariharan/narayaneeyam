# D031 S008 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali halts the battle
- Selected native PNG: `artifacts/d031/s008/landscape/candidate-v002.png` (v002), SHA-256 `93304e4b8ebc0d25ca117c2cb7d678908378888a9fc60572cca51b09078b4bab`, 1672 × 941. Imported byte-for-byte from `/home/gehariharan/firstmate-images/data/d031-production/native-seven-repairs/d031-s008-repair-v002.png` per handoff `/home/gehariharan/firstmate-images/data/d031-production/native-seven-repairs/handoff-v001.json` (SHA-256 `01f34f26447664435ad028ff822eabd28c77c149056937b1c35a428dd4b171d0`); prompt SHA-256 `389a99fe9855c707fd01618c752b72a4d8ab4b7e5e307f5bc0c89271ef368e2a`, arguments SHA-256 `2781c8cf43ce03c84d6267e337c388eb7308560d12aad28dbff8867f99ddb889`.
- Supersedes: `artifacts/d031/s008/landscape/candidate-v001.png` (v001, SHA-256 `d743c38fa9d51532165c92f43968fdbfb4804d2f79de52824524386855c2debf`), recorded as needs-fix in `art/reviews/d031-s008-v001-managed-review-v001.md`, which is preserved unchanged.
- Inspected: full frame and detail views between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's provisional handoff notes were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s008/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v002/s008-v002-nw.png`: region `836x471+0+0`, SHA-256 `15af190a1ca8b0bbb8d4dbd945a9d5139d02a99f57d854492a63ccc3645fa0a8`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s008-v002-ne.png`: region `836x471+836+0`, SHA-256 `21e6ace218825b198204187a3abdf4687568fdf31a4e272bf1f3a452f4b68ab7`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s008-v002-sw.png`: region `836x470+0+471`, SHA-256 `2b477452843c02036ec9be02c26e468fd4b6aba62bfaa95aefe2386ccabb4326`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s008-v002-se.png`: region `836x470+836+471`, SHA-256 `7665d36c3651688bea82fcbe912564642280884e9d0e0b23222f374cd250cb13`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z

## References and contracts

- Source reference: `intake/D031/008.jpg` (SHA-256 `e8c1faaec301762933853da69e60ad264a674b688c011c1aefcdb5f7a8428e17`), opened full-frame in the round-2 review of this stanza and compared from that viewing; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#8` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-asura-host/character.json` (SHA-256 `e9bbba0eb93760a011c87f45acb3d8ab25d7c48fc7389d1cce16ebf622b90faa`)
- Contract: `art/bible/characters/d031-deva-host/character.json` (SHA-256 `17ddf8811072553394809fd699280aa6c3fcfc925a10f3d2789c75fafc1b2a5a`)

## Anatomy basis

Bali standing, two retreating Asuras, two opposing figures (a blue spear-and-shield bearer and a fair archer) and a small two-armed Trivikrama on a globe in the sky.

## Observations

- Limbs, hands, feet and fingers (pass): Bali holds up his right palm to halt the Asuras and opens his left hand toward the opposing side and Trivikrama above it. The first Asura raises one open hand and holds the other at his chest; the bearded Asura raises one hand and grips a mace. The spear-bearer and archer hold their weapons with attached hands. All feet show toes.
- Attachment and proportions (pass): Every arm joins at a shoulder; striding legs are continuous; no injury.
- Faces (pass): Bali: tall crown, moustache, consistent with earlier frames. The two Asuras differ (moustached young warrior; white-bearded elder with headband). The two opposing figures differ in skin, headdress and weapon.
- Duplication and fusion (pass): Only five ground figures, each distinct; no repeated face, crown or shield.
- Text and marks (pass): None observed; the globe shows only vague patches, not readable map outlines.
- Scene, identity, composition and style (pass): Bali turns the Asuras away from the fight, with the Lord's side standing firm and Trivikrama visible above, matching caption 8 and the brief.

## Defects

- None observed.

## Limitations

- The blue spear-bearer reads as one of the Lord's attendants named in caption 8; the human art review may still want to confirm that the blue-and-archer pairing will not be read as Rama and Lakshmana.
- Trivikrama's small globe has darker land-like patches; I did not judge them as a modern map, but they are close to the S010 v001 globe concern.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifest was changed by this review. Human editorial and art approval remain pending.
