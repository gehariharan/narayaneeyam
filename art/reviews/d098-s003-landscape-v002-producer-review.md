# D098 S003 landscape v002 producer review

- Review type: producer review; exact candidate checksum inspected at native resolution and enlarged crops.
- Reviewed at: 2026-11-16T07:38:59Z.
- Candidate: `artifacts/d098/s003/landscape/candidate-v002.png`
- Candidate SHA-256: `965d192bd6fa6291cbb97735c2f6b285a41539cbcae650ef59671065c113d8a4`
- Dimensions: 1672x941 (near 16:9).
- Plan SHA-256: `9ef5d915feafa7f31f6810cc7ebaac7388b0a99d51f2b1cb79135fae6e4089a0`.

## Findings

Needs-fix. The wide empty center and edge grouping fit the stanza's negation, and the scene is full-bleed with no outer border. However, several visible ordinary people are rendered with detailed orange skin rather than the plan's small quiet silhouettes. Skin-only 15x15 medians from three distinct left-group faces are RGB (198,111,17), (201,114,20), and (191,108,23), with red-minus-blue values 181, 181, and 168. Some category figures also sit very close to the frame edges. Redo them as small monochrome silhouettes, fully inside safe margins, without rendered skin or face detail; keep the center open and unframed. Animal forms are separate and coherent; no text or beams are visible.

Inspection crops are preserved under `artifacts/d098/inspection/s003-v002/`.
