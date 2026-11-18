# D100 S001 candidate v002 producer review

- Reviewer: Codex producer self-review
- Inspected at: 2026-11-17T04:59:22Z
- Candidate: `artifacts/d100/s001/landscape/candidate-v002.png`
- SHA-256: `4c886ed20ed44e7b5023744450bbfe35a69fa8097e0c8628572089925bc6cf76`
- Native dimensions: 1672x941
- Method: Opened the full native PNG; enlarged and inspected Krishna’s face, open hand, lap hand and visible foot, Bhattathiri’s face and prayer hands, Narada’s face, and representative attendant faces. Compared with the mapped D100 source and current contracts.

## Findings

The image retains one youthful Krishna among blue lotuses with Bhattathiri, Narada, sages and distinct women attendants. Krishna’s visible open hand has a thumb and four fingers. One visible foot has five separate toes; the other foot is hidden by the crossed seated posture. Krishna’s lap hand is attached, but its thumb blends into the palm at the enlarged view, so that hand count is uncertain. Faces are distinct, Bhattathiri remains clean-shaven, and I found no duplicate/fused body, watermark, signature, logo or readable text. The frame is matte and full-bleed.

Skin measurements from face-only 16×16 native-pixel patches: Krishna `(89, 103, 135)`, B-R `46` (meets the minimum 40); Bhattathiri `(237, 142, 49)`, R-B `188`; Narada `(131, 85, 39)`, R-B `92`; left Upanishad woman `(236, 139, 50)`, R-B `186`; right Upanishad woman `(236, 140, 46)`, R-B `190`. Bhattathiri and both sampled women remain saturated orange rather than clearly brown.

## Outcome

Needs-fix. Re-render with all human skin clearly brown and with a legible, countable lap hand. Keep this v002 image and report as history.
