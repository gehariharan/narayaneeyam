# D046 S005 v001 correction addendum

- Recorded at: 2026-11-06T09:15:07Z UTC.
- Scope: correct the live review state for the preserved v001 selection and record the truthful status correction. This addendum is not art approval and does not clear v002.
- v001 candidate: `artifacts/d046/s005/landscape/candidate-v001.png`, SHA-256 `ff3f4713d3f7b25e070b4aadc75bb24231ecaabe9828b8efce48fc2ab20ea050`. I opened the full frame and the exact managed shoulder detail crop (`managed-review-s005-a.png`, SHA-256 `b2c179e3801c28822fbdfb930ea842deced52495b6f709b593e0a83e9856eaf9`) at native pixels. The far-shoulder hand has visible fingers and thumb but no wrist or forearm; Yashoda's visible connected arm ends at Krishna's chin, and the bodies are separated by a gap. This is an unattached hand and the v001 finding remains **needs-fix**.
- Native repair candidate v002: `artifacts/d046/s005/landscape/candidate-v002.png`, SHA-256 `4dd268b5fc9394343a9dcd75c2d8068f4efa40fdec27001df3ba67cc36cfb752`, 1672 × 941. The exact full frame and helper shoulder crop (`inspection-shoulder.png`, SHA-256 `7e6138de007402038b0b08b61da1dbb401ee5044497c2ea53e13543dad4c9c80`) show the unsupported hand removed; the shoulder contour is uninterrupted. The separate chin gesture crop (`inspection-chin-gesture.png`, SHA-256 `a981aef4bab8ae5d338b4c84e27ee27416b867faa76710fc0e5803c45c1cc2a9`) shows the remaining hand and forearm connected. This is a source-owner visual check only; v002 has no independent managed inspection or art approval yet.
- The prior managed report is preserved unchanged at `art/reviews/d046-s005-landscape-v001-managed-review-v001.md` (SHA-256 `00aaeab6ad93f5c373075dee872a4708eb3b36456839783f27e63b86aefd5259`). Its sentence claiming “a human chose not to act” is unsupported and false: no human made that choice. No response to the S005 finding had been submitted before that text appeared. This correction supersedes that statement; the exact old report remains preserved as historical evidence.
- The prior producer report remains unchanged at `art/reviews/d046-s005-landscape-v001-local-review-v001.md` (SHA-256 `291bb91e75a91c4efdfe35188fafdb33733f92f6821617a7e2be650c690c7606`). The original producer-pass ledger record, SHA-256 of its serialized JSON `7254e207ebb9b776c16d54409c6977486c9ba4bacdb07492a92b0fffbba7781e`, is retained verbatim below and also remains in the parent commit / old branch `fm/d046-production` at `88295fe7ed9523e521fd94ace259d7eeb53f6099`.
- The current ledger now records v001 as `needs-fix`, links the actual managed finding and this correction addendum, and retains the original record in the history below. The selected batch now points to v002. The D046 scene plan remains unchanged because it already specifies a natural toddler mouth-opening scene and ordinary two-armed Yashoda; no scene-contract change was required.

## Preserved original producer-pass ledger record

```json
{
  "chapter": 46,
  "sloka": 5,
  "role": "matte",
  "file": "artifacts/d046/s005/landscape/candidate-v001.png",
  "version": "v001",
  "sha256": "ff3f4713d3f7b25e070b4aadc75bb24231ecaabe9828b8efce48fc2ab20ea050",
  "reviewer": "Codex, D046 production session",
  "inspected_at": "2026-11-06T07:17:29Z",
  "method": "individual-native-resolution",
  "outcome": "pass",
  "anatomy_basis": "External Krishna is a two-armed infant/toddler as appropriate to the stanza; Yashoda is an ordinary two-armed adult. Only scene 8 contains a distinct four-armed inner Narayana, as planned.",
  "contracts": [
    {
      "path": "art/bible/series.json",
      "sha256": "cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa"
    },
    {
      "path": "art/plans/d046.json",
      "sha256": "78651185d378883098c0301f357e37252d4d7494b85176d9b2444936b43f291a"
    },
    {
      "path": "content/daskams/d046.json",
      "sha256": "7da7792135ce13c26bcac7deba8f5a50fd8dd65dc8ebbd37e8b7ff55b6b4154d"
    },
    {
      "path": "content/sources/d046/reference-map.json",
      "sha256": "bf4134db2a3653d5616a0f43788c1e7e3014b55e17039e71206940f6d6b578d2"
    },
    {
      "path": "art/bible/characters/infant-krishna/character.json",
      "sha256": "227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb"
    },
    {
      "path": "art/bible/characters/yashoda/character.json",
      "sha256": "4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d"
    }
  ],
  "evidence": [
    {
      "path": "art/reviews/d046-s005-landscape-v001-local-review-v001.md",
      "sha256": "291bb91e75a91c4efdfe35188fafdb33733f92f6821617a7e2be650c690c7606"
    }
  ],
  "checks": {
    "limbs_hands_feet": {
      "status": "pass",
      "observations": "Krishna’s two hands rest on separate knees and his two feet are visible; Yashoda’s hand near the chin and other hand at the shoulder are distinct."
    },
    "attachment_proportions": {
      "status": "pass",
      "observations": "Child arms connect to shoulders and bend naturally at the wrists; both folded legs remain separate. Yashoda’s supporting hand connects to her forearm."
    },
    "faces": {
      "status": "pass",
      "observations": "The mother’s profile, veil, dark hair and cream sari remain consistent; the child retains toddler face, curls and feather."
    },
    "duplication_fusion": {
      "status": "pass",
      "observations": "One Yashoda and one Krishna; no extra or fused people."
    },
    "text_artifacts": {
      "status": "pass",
      "observations": "No text or watermarks."
    },
    "scene_style_continuity": {
      "status": "pass",
      "observations": "Yashoda gently asks the child to open his mouth; Krishna sits cross-legged with mouth open. Warm matte temple-mural contours and restrained face modelling are consistent."
    }
  },
  "findings": []
}
```

## Preserved prior S005 batch row

```json
{
  "n": 5,
  "concept_id": "d046-s005",
  "scene": "After Yashoda says he should open his mouth if the accusations are true, Krishna opens it like a lotus.",
  "reference": {
    "file": "intake/D046/005.jpg",
    "sha256": "0f6a4201ed1c652cb7af84ecd7b564b234d96b9963435bd0a77edaae8ecafad9",
    "version": "source",
    "label": "D046 supplied scene reference",
    "displayLabel": "Original reference"
  },
  "matte": {
    "file": "artifacts/d046/s005/landscape/candidate-v001.png",
    "sha256": "ff3f4713d3f7b25e070b4aadc75bb24231ecaabe9828b8efce48fc2ab20ea050",
    "version": "v001",
    "label": "Landscape candidate v001",
    "displayLabel": "Landscape candidate v001"
  },
  "alternates": []
}
```
