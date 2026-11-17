# D098 S002 landscape v004 producer review

- Review type: producer review; exact candidate checksum inspected at native resolution and detail crops.
- Reviewed at: 2026-11-16T07:30:10Z.
- Candidate: `artifacts/d098/s002/landscape/candidate-v004.png`
- Candidate SHA-256: `57a6d698452cd1ba92195a0f560c5c27b608de8cfe0bed876a536bcb7877cbea`
- Dimensions: 1672x941 (near 16:9).
- Plan SHA-256: `9ef5d915feafa7f31f6810cc7ebaac7388b0a99d51f2b1cb79135fae6e4089a0`.
- Character contract hashes: Bhattathiri `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`; Guruvayurappan `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`.

## Findings

Needs-fix for Bhattathiri skin color. The scene shows one prostrating scholar and one deity; both faces and attached bodies are coherent, with no extra people. Krishna's two open hands each show a thumb and four fingers, and each visible foot shows five toes. The deity cheek patch RGB (99,117,142) has blue-minus-red 43 and is visibly more blue, though still muted. Bhattathiri's cheek medians are RGB (180,101,52) and (183,103,52), red-minus-blue 128 and 131; his skin remains too orange. No text, duplicate people, malformed anatomy, rays or beams are visible.

Inspection crops are preserved under `artifacts/d098/inspection/s002-v004/`.
