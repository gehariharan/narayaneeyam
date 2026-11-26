# D097 S002 landscape v012 producer visual review

- Reviewer: Codex producer review; not an independent review.
- Inspected at: 2026-11-25T23:20:22.230672372Z.
- Candidate: `artifacts/d097/s002/landscape/candidate-v012.png` (1672×941), SHA-256 `215161c92607728bc3ee5926a837314f63b68361b22be5162aa9dc2c05944ff3`.
- Prompt: `artifacts/d097/s002/landscape/prompt-submitted-v012.txt`, SHA-256 `2ebb8ee5ba6c5e58e28ca45051306a11da3f545aaa7aa2d636905b44e8f3993c`.
- Native arguments: `artifacts/d097/s002/landscape/native-call-args-v012.json`, SHA-256 `8a63deeea2b8462993fe06e84266833eb7d76109346f445031feb3021cbc7a79`.
- Final plan SHA-256: `305374da5647aa3e3ed8b59d289fb6cf27396f6d50013857e0ef0c240dda3dbf`.
- Method: full frame at native resolution and a focused crop of both devotees; photo 002 used only as story context.
- Outcome: **needs-fix**.

## Observations

The centered low shrine, two prayerful devotees, animals, equal offerings, water pot, staff, animal tracks and repeated blue-face motif remain. The Lord and repeated blue faces stay indigo-blue. Skin-only 11×11 medians at left cheek (235,480), right cheek (1325,469), right shoulder (1315,520), and right upper arm (1410,510) are RGB (242,184,115), (237,143,59), (237,136,47) and (158,94,59), giving R−B 127, 178, 190 and 99. The right devotee’s cheek and shoulder remain clearly orange; the ambient palette remains bright and warm.

## Findings

- **D097-S002-DEVOTEE-SKIN-THRESHOLD-V012** (high, high, needs-fix): both devotees have orange-leaning skin; right cheek/shoulder are R−B 178/190, exceeding the below-120 guide. v013 is the less-deviating second attempt.

## Evidence

- `artifacts/d097/s002/landscape/review-crop-v012-devotees-skin.png` — SHA-256 `de0cb67f72058b4964dd77095c1cd93a2d9354191ae01bed220729d464aa6450`.

## Contract hashes

- `art/bible/series.json` — SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`.
- `art/plans/d097.json` — SHA-256 `305374da5647aa3e3ed8b59d289fb6cf27396f6d50013857e0ef0c240dda3dbf`.
- `art/bible/characters/guruvayurappan/character.json` — SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`.
