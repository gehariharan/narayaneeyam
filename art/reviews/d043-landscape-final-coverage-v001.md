# D043 landscape final coverage v001

- Recorded: 2026-11-06T00:21:29Z
- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Head checked: 3148caec9f8224eb0a8797fd2aae61f2f41f1c07 on fm/d043-production. This is merge commit 3148cae, whose parents are D043 head 2141bf0 and main 7f7b78c (D044 #17), so the ordinary non-forced merge kept all D043 commits and D044 history. Original pipeline base: f1a63545bc451f879327c7836ace272ead049eb5.
- Scope: this is internal software-review evidence by the fixer. It does not substitute for the independent Review phase, and it approves no artwork.

## Summary

- D043: all ten selected leads pass managed visual review: S001 v002, S002 v001, S003 v001, S004 v002, S005 v002, S006 v003 (765a57ef…, native 1671x941, compared side by side with the S004 v002 and S005 v002 demon crops), S007 v001, S008 v002, S009 v001 and S010 v002. The superseded S005 v001 (uncertain), S006 v001 (needs-fix) and S006 v002 (pass invalidated by D043-S006-TRINAVARTA-CONTINUITY-V002) remain as history.
- D044: all ten selected leads pass (from main, unchanged). The union validates 194 selected generated images: 125 inspected and 69 historical.
- No approval manifest exists for D043. D044’s manifest lists every stanza as missing. Portraits are paused, and English translations are absent in both chapters.

## Per-path coverage

### art/approved/d044.json

- SHA-256 at check: `dc99c0495023a194f91b35333f1a690e78a82f0fbc40c35c2d37319c17abfd18`
- D044 approval manifest from main 7f7b78c (byte-identical after merge). status unapproved-candidates-only; all 10 stanzas have landscape and portrait status "missing" with null paths and hashes. Nothing is approved. No D043 approval manifest exists.

### art/batches/d044-comparison-v001.json

- SHA-256 at check: `db26deda0301891a409ba6e35d79592b29d63f6f7564e83d2544eb1d37859382`
- Ten rows pin intake/D044/NNN.jpg references and native candidates (S001–S009 v001, S010 v002, SHA 973f5283…), with no alternates. review_status needs-review; the notice states the work is unapproved and portraits are paused. Identical to main.

### art/bible/characters/balarama/character.json

- SHA-256 at check: `8a02d67fd36a52f70d1a1a37cc6c91e65bfd87aa32105fa424d641bd6024d6c9`
- Provisional D044 contract: a very young child only slightly larger than Krishna, warm light-brown skin (not blue), plain pale cloth; never adult proportions or extra arms. Not a master. Identical to main and not referenced by any D043 stanza.

### art/bible/characters/garga-muni/character.json

- SHA-256 at check: `439a3bf600f5a1199e77830899520b48e8510ec95cc654b58f6ddf0f372282ba`
- Provisional D044 contract: an elderly sage with silver-white topknot and short white beard, in saffron or cream ascetic cloth. Not a master. Identical to main and not used in D043.

### art/bible/characters/gopas/character.json

- SHA-256 at check: `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`
- Generic supporting-group contract (varied faces, cream/olive/maroon dhotis, no cloned individuals). Identical to main. D043 gopas (S003, S005–S008) fit it, but D043 plan characters do not bind it.

### art/bible/characters/nandagopan/character.json

- SHA-256 at check: `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`
- Provisional shared D042–D044 contract derived from the D043 S009 source photo (SHA 1e912a34…, the same cue D043 uses): moustache, cream head cloth or gathered hair, cream dhoti, olive upper cloth. D043 Nanda in S005, S008 and S009 matches (cream turban, olive tunic, moustache). Identical to main.

### art/plans/d044.json

- SHA-256 at check: `3ef9fc966d2389109e2fb46a5af0d264135e7d3d7af05ad4450757e8a6032fbe`
- Ten stanzas with characters, scene briefs, avoid lists and reference paths. Landscape orientations hold aspect/composition only (no candidate pins); portrait is out of scope and not to be cropped. Identical to main. The D044 ledger records bind SHA 3ef9fc96…, which equals the current file, so validation passes.

### art/reviews/d043-s001-v002-final-managed-review-v001.md

- SHA-256 at check: `c4d8bfd612df4d2d4eb2368ac55c11c9c21de1fab613da5c04e56c8eb2e10adf`
- S001 v002 d5629a83… 1672x941, pass, inspected 2026-11-05T23:09:37Z, with infant, Yashoda and churning-hands crops. The report binds the original plan hash f86515f6…; the ledger record now binds plan e80e2bb9… through the plan-pin re-check report (full frame re-opened 2026-11-06T00:03:36Z–00:04:00Z).

### art/reviews/d043-s002-v001-final-managed-review-v001.md

- SHA-256 at check: `ee8d3eb48a17de77d9453a6c97a6dc79b1ca03137abb7bb4de2106b81164e2d7`
- S002 v001 e75cdeb1… pass, 23:09:46Z, with infant and demon-face crops. The whirlwind face carries the demon without limbs; this is recorded as a limitation. Plan re-bind as for S001.

### art/reviews/d043-s003-v001-final-managed-review-v001.md

- SHA-256 at check: `0cbdfaa69e46552d3eb2ce309dfb71a3176ed7ebc519f711fb558a5e31941433`
- S003 v001 db1852dd… pass, 23:09:57Z: four adults and no infant, which is correct for the stanza. Feet are hidden by dust. Four contracts, because the plan lists no characters for S003. Plan re-bind as for S001.

### art/reviews/d043-s004-v002-final-managed-review-v001.md

- SHA-256 at check: `975425cc80474adf82b67b47f8c55a1dc3b32c4ea74ac6671aec522fbbc8f0c4`
- S004 v002 c41270a7… pass, 23:10:11Z: a grey, wild-haired, shrinking Trinavarta, the identity reference for S005 v002 and S006 v003. The red forehead mark is noted as iconographically unusual. Plan re-bind as for S001.

### art/reviews/d043-s005-v001-final-managed-review-v001.md

- SHA-256 at check: `ccf0c2a0e2ddafcd0e0aa4276354a8cd12cbb2b7dc7a58aaed43c39bc4719f97`
- S005 v001 41982313… uncertain (finding D043-S005-TRINAVARTA-FALL-IDENTITY-V001). Historical and unselected; the report and record are unchanged.

### art/reviews/d043-s005-v002-final-managed-review-v001.md

- SHA-256 at check: `b416be964da4e00676d9e585437b12b95ec135dea41477a4d0e07efff33864d6`
- S005 v002 efcd3735… pass, 23:48:24Z, superseding v001. The airborne pair was inspected at 3x and 6x, and the small tucked infant limb was judged not to be an extra limb. Selected. Plan re-bind via the re-check report.

### art/reviews/d043-s006-v001-final-managed-review-v001.md

- SHA-256 at check: `37a27821ea4d4ebaf4a8bcf347aacfb2a5ae0cfaa20ad3b701d8e40470214baa`
- S006 v001 39454182… needs-fix (D043-S006-TRINAVARTA-PROPORTION-V001: hand reaching the ankles). Historical and unselected; unchanged.

### art/reviews/d043-s006-v002-final-managed-review-v001.md

- SHA-256 at check: `f7e352d128d96708f197d026678df6ea86699b320e3d3710af7cac34f75a0e3e`
- S006 v002 c64fe1e9… original pass wording preserved byte-for-byte. Its continuity pass is invalidated by D043-S006-TRINAVARTA-CONTINUITY-V002 (brown, tidy-haired demon unlike S004/S005; the "fallen body darkening" reading was never observed). The ledger record carries invalidated_by, superseded_by_version v003 and an append-only addendum (art/reviews/d043-s006-v002-invalidation-addendum-v001.md). Unselected.

### art/reviews/d043-s007-v001-final-managed-review-v001.md

- SHA-256 at check: `98adbd2dc6b08d813dfaac9595e609040717b450f6061857ed6950a792be7c4b`
- S007 v001 9ad54796… pass, 23:11:55Z. The demon’s arm reaches the thigh, about twice the shoulder-to-waist span; his legs are out of frame (limitation). His grey-olive skin and long hair are compatible with S004/S005/S006 v003. Plan re-bind as for S001.

### art/reviews/d043-s008-v002-final-managed-review-v001.md

- SHA-256 at check: `bde7981145be020086e351cfa3de3468f2c596c242d5024ed80b9052e6f5faa0`
- S008 v002 18b5ddeb… pass, 23:12:26Z: Nanda hands the infant to one gopika, and all eight adult feet show toes. Limitation: only one gopika, whose veil resembles Yashoda’s. Plan re-bind as for S001.

### art/reviews/d043-s009-v001-final-managed-review-v001.md

- SHA-256 at check: `0a34bac3d3d046f856e0dd77811bce56704b95e41a3f46acc1dd325e4ece5ee8`
- S009 v001 9885b0be… pass, 23:12:41Z: Yashoda and Nanda in namaskara around the seated infant. Plan re-bind as for S001.

### art/reviews/d043-s010-v002-final-managed-review-v001.md

- SHA-256 at check: `0494e9dc108258f7b0743fa42420cf9aa89dd81878e0f42de7a0c25b5dbaaaa2`
- S010 v002 a3160149… pass, 23:12:59Z: two-armed Guruvayurappan and the older Bhattathiri (selected older reference SHA ebe4aedd…). Six contracts, including the bhattathiri and guruvayurappan character files. Plan re-bind as for S001.

### art/reviews/d044-s001-v001-final-managed-review-v001.md

- SHA-256 at check: `3d61191e416fe94f9d3ed795606d42c3119319e058e15508e01115ebce5f4b29`
- D044 S001 v001 0a08b898… pass, 23:13:08Z: Garga arrives and Nanda greets him in anjali. Feet are out of frame, and Nanda is shown with uncovered hair (continuity variation noted). From main and unchanged.

### art/reviews/d044-s002-v001-final-managed-review-v001.md

- SHA-256 at check: `2c12063473f76ed473be0a93cb399d488b594989992a0c143f9e0f8f41d29e65`
- D044 S002 v001 65e9e85b… pass, 23:13:20Z: Nanda offers a flower plate to Garga. From main and unchanged.

### art/reviews/d044-s003-v001-final-managed-review-v001.md

- SHA-256 at check: `12045c444f482b8bebfb203ba8017317af4af8c3b5294f02f3864bcef25aaeca`
- D044 S003 v001 dd262b72… pass, 23:13:32Z: secret naming with Krishna and a toddler-scale Balarama, four people in all. From main and unchanged.

### art/reviews/d044-s004-v001-final-managed-review-v001.md

- SHA-256 at check: `b304ba97fefced2cc669316e0b3efd493eea4eb23f10d93d24da022c9fd467c1`
- D044 S004 v001 b3ac6aa4… pass, 23:13:47Z: Garga reflects beside Krishna, with no text. Limitation: Krishna nearly reproduces the v004 anchor pose. From main and unchanged.

### art/reviews/d044-s005-v001-final-managed-review-v001.md

- SHA-256 at check: `2d6e8d983644c0dd3182f4d6ec3943d96ab04668c475c664ea7b6a5adb12a289`
- D044 S005 v001 9e48e5f2… pass, 23:14:02Z: Garga names Krishna, no sunburst. Minor wording inconsistency: the duplication line says “Three people and one infant only”, while the anatomy basis and observations describe two adults (Garga, Nanda) plus one infant. This is an editorial slip in main’s report, not a visual defect; the hash-bound report is left unchanged.

### art/reviews/d044-s006-v001-final-managed-review-v001.md

- SHA-256 at check: `a01eaf8967c88a618ea0c91c1bca9c806c7d8cb2acbd6a6ae66715acb8547e15`
- D044 S006 v001 42826e63… pass: Krishna and Balarama with Garga and Nanda. Limitations: Balarama reads slightly older than in S003, and Garga’s robe is paler. From main and unchanged.

### art/reviews/d044-s007-v001-final-managed-review-v001.md

- SHA-256 at check: `bb67c37e2da1b9bc102be7f9abce8910599ee55d419a0f9221fcb3089fa1ae5e`
- D044 S007 v001 594c7a4c… pass: the protective teaching scene. From main and unchanged.

### art/reviews/d044-s008-v001-final-managed-review-v001.md

- SHA-256 at check: `7481e9d5a6da445e68bda4b0cd8d1430d9b99f3211ee259e3ed225ed8767dd88`
- D044 S008 v001 e13c0376… pass: reclining Krishna, with a winding path for the future. From main and unchanged.

### art/reviews/d044-s009-v001-final-managed-review-v001.md

- SHA-256 at check: `b11a9e2f4a3ecfc62518b08cd7933b3c251f5e4304620f3d1f5b7d6a16b966f1`
- D044 S009 v001 40463196… pass: Garga counsels Vasudeva; Vasudeva is judged against the Bible text only. From main and unchanged.

### art/reviews/d044-s010-v002-final-managed-review-v001.md

- SHA-256 at check: `b5a00b69b4d997259812e478e671f4657393e91745ea8987355729e41a436bc8`
- D044 S010 v002 973f5283… pass, 1671 px native width: continuous household and prayer field with the older Bhattathiri. Limitation: mild gold finish drift. From main and unchanged.

### content/daskams/d044.json

- SHA-256 at check: `d71a7390df0b5ab9d1ec87b4c24f44a2e309cc4a31fa3012b6a18d9b334fe5b9`
- Ten stanzas with Devanagari ending ॥ ४४-N ॥, translation_en empty, review_status needs-review, and commentary_source intake/D044/photo-captions.txt#NNN. Identical to main.

### content/sources/d043/provenance.json

- SHA-256 at check: `87da92c5160a366f3bfd343786ee3d9f6b85fe2fc5e091fa335e2da81702dafa`
- Stotra Nidhi Sanskrit and IAST sources (retrieved 2026-11-05), user captions SHA bb68f639…, intake manifest SHA be401e48… (matches source.json), and a no-translation editorial note. Ten reference_images with stanza order 1–10. Shared assets: older Bhattathiri ebe4aedd…, Guruvayurappan d93b3d0e…, style anchors 9fe353ca… and 9ec5a6ae…, infant v004 02dc00fb…, adult cue 1e912a34…; hashes match the hydrated files.

### content/sources/d043/reference-map.json

- SHA-256 at check: `a4c477c49a09ed96a8c3baaeaa9889d7717c7abb2091a9982a8c4cc4cbebbcb2`
- Ten images map ordinally to captions and stanzas; all ten intake hashes recompute and match. FINDING (low, editorial metadata): the stanza 10 observed_reference reads “A close devotional image of a blue child with multiple arms”, but intake/D043/010.jpg (SHA a72b0898ad49d959…, opened full-frame 2026-11-05 in round 1) shows a two-armed child Krishna lying prone on a rock, chin on hands, holding a flute. The art is unaffected (S010 follows the plan’s Bhattathiri prayer, not the photo). Not corrected here because every D043 review binds this file by SHA-256 (a4c477c4…); correcting it would require re-binding all thirteen D043 records. Recorded for the author.

### content/sources/d043/source.json

- SHA-256 at check: `be401e481d8452695a5f2aa2e6a617b6ac50e034e8c3d63561d2025327e8b37d`
- Byte-identical copy of the user-supplied intake manifest intake/D043/source.json (SHA be401e48…, referenced from provenance). Its original_name field holds the full commentary body plus “.txt”. This is a raw, preserved upstream source field, not a canonical title or translation, so it is left unchanged. D044 handled the same upstream quirk by normalising its manifest to “Dasakam 44” and documenting that in its provenance.

### content/sources/d044/intake-manifest.json

- SHA-256 at check: `9c61df5d31006e1297a779854d46be42845d0be320d2498670362874c9d87033`
- D044 intake manifest (SHA 9c61df5d…, equal to provenance.intake_manifest_sha256), caption SHA 4d89a5ae…, original_name “Dasakam 44”. Identical to main.

### content/sources/d044/photo-captions.txt

- SHA-256 at check: `4d89a5ae9fe3ee2c83b0c3faed39cc9f3592530d444e79f14846d9233cb8c9af`
- Ten English caption blocks #1–#10 (SHA 4d89a5ae…, matching manifest, provenance and reference-map). Trailing whitespace is preserved verbatim from the source. Identical to main.

### content/sources/d044/provenance.json

- SHA-256 at check: `98aff9038971389ede63e5874d5125103fff510e777a2451531b5196aaf9211d`
- Stotra Nidhi Sanskrit and IAST, translation not acquired, commentary preserved verbatim, intake manifest and commentary hashes consistent. Identical to main.

### content/sources/d044/reference-map.json

- SHA-256 at check: `9674525e92d4f5731de8a9cd61147773eda8b66b86ad9ae82e6e02f19c99de76`
- Ten images mapped ordinally with dimensions and hashes, plus style, character and shared working references (style anchors equal to the D043 hashes). Identical to main.

## Findings

- LOW (editorial metadata, unfixed): the stanza 10 `observed_reference` in `content/sources/d043/reference-map.json` describes multiple arms, but the source image shows a two-armed child. A correction needs the author’s decision to re-bind all D043 review contracts.
- LOW (report wording, main): the D044 S005 report’s duplication line says “Three people and one infant”, while its anatomy basis says two adults plus one infant.
- No other defects found in the 37 paths.

## Limitations

- These are text, contract and hash reads. Image observations come from the cited managed reports and, for D043, from the reviewer’s own opening of each selected frame in this run. D044 images were not re-opened in this check.
- The D043 per-version reports name the original plan hash f86515f6…. The current plan e80e2bb9… is bound in the ledger through `art/reviews/d043-plan-pin-recheck-managed-review-v001.md`.

## Update 2026-11-06T00:58:05Z

- Head checked: 58d5eddcedbf4dc2cd1209073a80dd4a9ed652a2, plus this fix round.
- The LOW finding above is now resolved. In `content/sources/d043/reference-map.json`, stanza 10's `observed_reference` now describes one two-armed child Krishna lying prone on a rock with a flute. That was confirmed by opening `intake/D043/010.jpg` (SHA-256 `a72b0898ad49d959575138e70567f2ba179c3ac5ea85cc9b8d9f1ba69dc3a129`) at 2026-11-06T00:56:58Z. Stanza 8's text, which also described men who are not in the image, now says women around a standing child; that was confirmed by opening `intake/D043/008.jpg` (SHA-256 `c7a935fbe4d54ec50a307be34f86d75c9a03eb533e4cb853ccd61ec6c49608f2`) at the same time.
- New reference-map SHA-256: `5647195ef50b6ba397b72667057ae17b4ab732184e2dac56a54f88e399443893`. The per-path entry above records the pre-correction hash `a4c477c4…` and wording as history.
- All ten selected D043 frames were re-opened full-frame between 2026-11-06T00:57:13Z and 00:57:32Z, and their ledger records were re-bound to the corrected map. Evidence: `art/reviews/d043-reference-map-context-recheck-managed-review-v001.md`. No image bytes, captions, plan or approval state changed.
- The D044 S005 report wording slip is unchanged (it belongs to main's report).
