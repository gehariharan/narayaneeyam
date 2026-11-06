# D043 supporting-cast contract re-inspection v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Reason: `art/plans/d043.json` scene `characters` now bind the existing visible supporting-actor contracts (yashoda, gopikas, nandagopan, gopas). Visible roles: S001 yashoda; S003 yashoda, gopas, gopikas; S004 yashoda; S005 nandagopan, gopas, yashoda; S006 gopas; S007 gopas; S008 nandagopan, gopas, gopikas; S009 nandagopan, yashoda. S002 and S010 are unchanged.
- Plan SHA-256 now `9baea88aa6f923c00839abcfe88c6b7ab71efe0ec77ff7da8607fd86aebbb2c1`. Contracts: `art/bible/characters/yashoda/character.json` (`4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`), `art/bible/characters/gopikas/character.json` (`a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`), `art/bible/characters/nandagopan/character.json` (`56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`), `art/bible/characters/gopas/character.json` (`06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`).
- Inspection window: 2026-11-06T01:38:16Z to 2026-11-06T01:39:07Z. Each affected selected frame was opened in full, and supporting-actor detail crops (face, hands, jewellery and dress) were opened at native resolution. The prior infant-only inspection is not used as supporting-actor clearance.
- Outcome: 8 frames pass. **S003 v001 and S005 v002 need fix** against the newly bound Yashoda contract (see below). Those two frames now need native repair; their earlier pass records remain unchanged as history and are not re-bound, so the validator reports them stale. No image bytes changed. No approval.

## Frames

### S001 v002 — pass

- `artifacts/d043/s001/landscape/v002/candidate.png`, SHA-256 `d5629a8395e578a8581fee18b298340b3dc27cb8ae4731418bf2c79d1ec84ecd` (recomputed: match); characters: yashoda, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s001-yashoda.png` SHA-256 `84313008215a67b436724f7425b9900cae07494469e3abc89f56caa44c52fd15`
- Yashoda (yashoda contract): gentle oval face with dark eyes and worried glance, warm medium-brown skin, dark parted hair under a cream veil with rose and saffron stripes, cream sari, one single-strand bead necklace, a maang-tikka, flower earrings and a few bangles, which is modest jewellery. Her green blouse reads as the contract’s restrained olive accent. Two arms; the hand on the churning staff and the hand on the pot each show a thumb and four fingers.

### S002 v001 — pass

- `artifacts/d043/s002/landscape/v001/candidate.png`, SHA-256 `e75cdeb1822ceeda0915116dd785bb71fc7c8cbf8e14af4eda65f7b70f6605b2` (recomputed: match); characters: infant-krishna
- No newly bound actors. Re-opened full frame: the infant is carried up the dust funnel under the wind-demon profile face. Unchanged.

### S003 v001 — needs-fix

- `artifacts/d043/s003/landscape/v001/candidate.png`, SHA-256 `db1852dd42a0ce3b66b7420f9e788d849b5f4839db9a981e2bf63c5b50f4e0d4` (recomputed: match); characters: yashoda, gopas, gopikas
- Crop `artifacts/d043/review-evidence/managed-v004/s003-yashoda.png` SHA-256 `789a07a05e7b2dcba2aa7c2a1740f33b953a0cc0ac4840b0a6c23b4afa2adb41`
- Crop `artifacts/d043/review-evidence/managed-v004/s003-gopa.png` SHA-256 `7d3657a5343f7a61d13f6921e1c038533df71cb18bc6178adb1453233bdf5c5c`
- Crop `artifacts/d043/review-evidence/managed-v004/s003-gopikas.png` SHA-256 `e86680dacb81e5310bd3ecfccff222b9d2fd24328a09ce192f7082e7001b0997`
- Yashoda (yashoda contract) FAILS: she wears a long triple-strand pearl necklace with pendant, large chandbali earrings, a large maang-tikka and stacked bangles on both wrists. That breaks the contract’s “no heavy ornate jewelry” and “modest jewelry” rules, and it is visibly heavier than her single-strand jewellery in S001, S004 and S009. Face, veil, cream sari and rose blouse otherwise fit, and her open hand shows a thumb and four fingers. Gopa (gopas contract): one moustached cowherd in a cream turban and olive tunic shading his eyes, with ordinary anatomy; pass. Gopikas (gopikas contract): two distinct women, one in a rose sari with a hand on her chest and one stooping in a green sari with flowers in her hair and a double strand of beads; they are not duplicated or fused; pass.
- Finding D043-S003-YASHODA-JEWELLERY-V001: Yashoda wears a triple-strand pearl necklace with pendant, large chandbali earrings, a large maang-tikka and stacked bangles, which violates the yashoda contract (“no heavy ornate jewelry”, “modest jewelry”) and is heavier than in S001/S004/S009. Repair: Native S003 repair that keeps the dust-search composition but reduces Yashoda’s jewellery to the modest single-strand set used in S004/S009; then re-run the managed review.

### S004 v002 — pass

- `artifacts/d043/s004/landscape/v002/candidate.png`, SHA-256 `c41270a7f8d3ad1585ff49d7b752e5cd47e40fac938704e77d06d2bd438cdf26` (recomputed: match); characters: yashoda, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s004-yashoda.png` SHA-256 `7f99b1ff1970e71116cd9c873523c251c166b6f22c35594bd2bd62260e1178d5`
- Yashoda (yashoda contract): oval face with an upturned anxious gaze, dark parted hair under a saffron-cream veil, rose blouse, cream sari, a single bead necklace, a small earring and a few bangles. One raised hand shows a thumb and four fingers and the other rests on her chest. Matches the contract.

### S005 v002 — needs-fix

- `artifacts/d043/s005/landscape/v002/candidate.png`, SHA-256 `efcd3735e482b5d7dd50d031fb0326c4f857db2ee6a5e3e21c6e68e972583720` (recomputed: match); characters: nandagopan, gopas, yashoda, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s005-nanda.png` SHA-256 `57018b12da843bb77d6aaa0d34b74f7b6fadf7c5124cdcba0f2f915f6a60ecfd`
- Crop `artifacts/d043/review-evidence/managed-v004/s005-gopas.png` SHA-256 `77acea4bcf408cff2e476af78a74c24b569903328aa41a6e98e8b62f6d86fd1f`
- Crop `artifacts/d043/review-evidence/managed-v004/s005-yashoda.png` SHA-256 `bebd8e8777739c0a9eaf74f043110a66b4757d623c3d225134ef74542e27c52e`
- Yashoda (yashoda contract) FAILS: at the window she wears a deep maroon-red sari and veil with a dense floral pattern. That is outside the contract’s “warm cream, soft saffron or muted rose” sari family and breaks its “no changing face, veil or sari palette between scenes” rule (S001, S003, S004 and S009 use cream and saffron). Her two raised hands show fingers and her face is distressed, so anatomy is fine. Nanda (nandagopan contract): moustache, cream turban, olive tunic with cream shawl and cream dhoti; pass. Gopas (gopas contract): three distinct cowherds (two with topknots, one bearded and turbaned) in cream dhotis with olive, saffron and red shawls; not cloned, seven bare feet with toes; pass.
- Finding D043-S005-YASHODA-SARI-PALETTE-V002: Yashoda at the window wears a deep maroon-red patterned sari and veil, outside the yashoda contract’s cream/saffron/rose sari family and its no-palette-change rule. Repair: Native S005 repair that keeps v002’s falling Trinavarta and Nanda’s group but dresses Yashoda in her cream and saffron sari and veil as in S004/S009; then re-run the managed review.

### S006 v003 — pass

- `artifacts/d043/s006/landscape/v003/candidate.png`, SHA-256 `765a57ef0555cfd1bf4720b323a2cf49bee95f0d614338f9f7b0a6cbf730ee05` (recomputed: match); characters: gopas, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s006-gopas.png` SHA-256 `7aff23c876b2f7dec8af150d671bcf93faf84d3ab8e70332c0772382b821d14c`
- Gopas (gopas contract): four distinct young cowherds in cream dhotis with red, green and cream shawls. One has joined palms, one a hand on his head, one kneels with a reaching hand and one leans with hands on knees. No cloned faces, ordinary two-armed anatomy, and visible feet show toes.

### S007 v001 — pass

- `artifacts/d043/s007/landscape/v001/candidate.png`, SHA-256 `9ad547964554ead10dfac60d04a40c4cd6831e5b41344ef0404ac2e7ecd16a46` (recomputed: match); characters: gopas, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s007-gopas.png` SHA-256 `712597c0e0081a90534beeb59675aa83b2be217e649966f58cc08849dd262f63`
- Gopas (gopas contract): three distinct cowherds (a bearded one in a saffron turban, a red-headband figure and a moustached one in a cream turban) lifting the infant; varied faces; hands traceable to owners. The middle figure’s gender remains ambiguous, as already recorded; no gopika is bound.

### S008 v002 — pass

- `artifacts/d043/s008/landscape/v002/candidate.png`, SHA-256 `18b5ddeb7f5e456d42292744b00e2964f8d1bdcfa6148b91ca674e10cd9d88d7` (recomputed: match); characters: nandagopan, gopas, gopikas, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s008-gopas.png` SHA-256 `549e17eb3fb768b42a52e95734ee164cb9409828c201cbf73f91311274bfa744`
- Crop `artifacts/d043/review-evidence/managed-v004/s008-nanda.png` SHA-256 `c9ad4fbb7d7b89424d91034ddd6949642293935929ffc844b68d81ef868e056e`
- Crop `artifacts/d043/review-evidence/managed-v004/s008-gopika.png` SHA-256 `24a51bcf01c7663cd90a933fcf57cd8f7f58c1b521f5b2fc0b28bb7f46ca6fdb`
- Nanda (nandagopan contract): moustache, cream turban, olive upper cloth and cream dhoti; his hand under the infant shows its fingers. Gopas (gopas contract): two distinct men in anjali, one turbaned and moustached and one bearded with a topknot. Gopika (gopikas contract): one woman in a saffron and cream sari with a cream veil and a single bead necklace, cupped hands with fingers and bangles, two bare feet. Village dress; pass. Her veil still resembles Yashoda’s, as previously noted.

### S009 v001 — pass

- `artifacts/d043/s009/landscape/v001/candidate.png`, SHA-256 `9885b0be646cbf776ddce5a5f3e06cc4a21b1696ef7269788196deb9cbd3907f` (recomputed: match); characters: nandagopan, yashoda, infant-krishna
- Crop `artifacts/d043/review-evidence/managed-v004/s009-yashoda.png` SHA-256 `1185345ca6a778980b47af9e4d5834216d903a3ace54ed77f6f53e18cb534c83`
- Crop `artifacts/d043/review-evidence/managed-v004/s009-nanda.png` SHA-256 `f215d96a7d11533645aecacb47fa77c6c4a377534b6adc1f219fa0a2456ef8cb`
- Yashoda (yashoda contract): gentle downcast oval face, dark parted hair under a cream and saffron veil, rose blouse, cream sari with a red border, a double pearl strand, earrings and bangles. That is restrained, not heavy, and her joined hands show fingers. Nanda (nandagopan contract): moustache, cream turban, olive tunic and cream dhoti, with joined hands. Both match.

### S010 v002 — pass

- `artifacts/d043/s010/landscape/v002/candidate.png`, SHA-256 `a31601491447db3dcdbde6e6def6aadfc5666653d00e724fe6250bd74d96452c` (recomputed: match); characters: bhattathiri, guruvayurappan
- No newly bound actors. Re-opened full frame: the two-armed Guruvayurappan and the older Bhattathiri in prayer. Unchanged.
