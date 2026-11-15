# D039 S007 v004 producer inspection

- Review role: producer; this record is not independent review or artwork approval.
- Reviewer: Codex production worker.
- Inspected at: 2026-11-15T21:28:46Z.
- Method: opened the exact candidate at native resolution and inspected enlarged crops of Kamsa's face, torso and arms, the departing trio, the doorway, hands, feet, frame edges, and two skin-only sample patches.
- Candidate: `artifacts/d039/s007/landscape/v004/candidate.png`
- Candidate SHA-256: `7973a878bb537e9fa97c81943001e64b21f2ec2f4828618d04f8dc82f1f4c864`.
- Native dimensions: 1672x941.
- Source reference: `intake/D039/007.jpg` (SHA-256 `d1dbb91f51de9dd3c6af3a91d344d0fde281b7dc2c29afc617a61e0f7a61a418`).
- Final plan SHA-256: `cff422581e55af21e9ff87237a6faf66c6ee20a6b8768ecbec74c6f03ba3669d`.
- Final batch SHA-256: `efe6a7bc0b38ae25d624c3b6c3d48d8a5a87a481216fc6f8fa8162673d431604`.
- Detail views: `artifacts/d039/s007/landscape/v004/crops/kamsa-upper-body.png` (SHA-256 `6a3c8a0d1447561b6687353ba61f2b2722c5c60b468ea1a959b69069d5fffe8b`), `artifacts/d039/s007/landscape/v004/crops/departing-asuras-and-doorway.png` (SHA-256 `fa17ea1ad0fe28a173cd1897564da6459d31913e22f339d8b2dda1292463c1a6`), and `artifacts/d039/s007/landscape/v004/crops/asura-feet-and-floor.png` (SHA-256 `840532126dd913bc6a06f4482f07f41d981a2424f3a629fb2c2e57c49a8faf64`).

## Bound project files

- `art/bible/series.json` SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`.
- `art/plans/d039.json` SHA-256 `cff422581e55af21e9ff87237a6faf66c6ee20a6b8768ecbec74c6f03ba3669d`.
- `art/batches/d039-comparison-v001.json` SHA-256 `7647c881311d80f97feecbc027ff4b5fc9b7d1b942aa7c3bb232e5a05a478669`.
- `art/bible/characters/asura-council/character.json` SHA-256 `16f82d11ca685feca5181d1cc59a01a73e27e4196662f923e5d43305c77084f1`.
- `art/bible/characters/kamsa/character.json` SHA-256 `350e683816ad1e7a3edc8ecb6dac2b3a1c4a8dd910a34a3af9d2cf41983b0ab6`.

## Observations

Kamsa's face, torso, and both attached arms have changed from the prior candidate's slate-gray reading to a warm orange-brown mural pigment. The skin has earthy brown shading, although it remains strongly orange in the brightest exposed shoulder area. On two manually selected 12x12 px skin-only shoulder patches at `(100,410)` and `(130,400)`, the prior v003 medians were RGB `(116,98,78)` and `(119,101,81)`; the v004 medians are `(195,92,18)` and `(197,96,22)`. The contract gives a qualitative warm-brown target and no numeric threshold. The new samples no longer read gray, but their high red and low blue channels correspond to the visible orange cast recorded in the final plan; no second repair was made under the one-round decision.

Kamsa retains an ordinary two-arm human body, with his resting and extended hands connected. The previously detached gray hand at the left edge is absent. The scene contains the three intended departing leaders: red Pralamba, bird-headed Baka, and green Putana. Their bodies and limbs remain distinct; the enlarged lower view shows their feet within the frame. No accidental duplicated figure, fused body, readable text, signature-like mark, or watermark is visible in the full image, corners, doorway, or floor.

## Producer result

Outcome: **uncertain** on exact color fit to the warm-brown contract because the repaired skin retains the measured orange cast described above. The candidate is the better of the prior slate-gray v003 and this one-round v004 repair. It remains unapproved and awaits independent exact-checksum review.
