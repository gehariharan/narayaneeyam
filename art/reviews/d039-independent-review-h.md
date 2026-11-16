# D039 landscape candidate review: S001–S005

## Scope and method

I independently reviewed the five selected landscape candidates against their frozen plan entries, the stanza captions and mapped reference photos, the series bible, and the relevant character contracts. This is visual review evidence only; it does not grant art approval. Each image was opened at its native resolution and inspected again in enlarged crops made from a private copy under this task worktree. The producer's `artifacts/` and `intake/` directories were read-only throughout.

All five candidate files are 16:9 PNGs at 1672×941 pixels, except S005 at 1671×941. Initial and final `sha256sum` checks matched the pinned checksums below. I also made 12×12 RGB skin-only samples from the private copies with ImageMagick and computed channel medians; coordinates refer to the original candidate pixels. I checked the corresponding D039 reference photos 001.jpg–005.jpg and captions mapped by the plan. The references were used as composition cues, consistent with plan policy.

The native-resolution review found no readable text, captions, watermarks, signatures, logos, copied interface marks, or separate outer borders in any candidate. No cinematic beam or volumetric lighting is present. S005's broad flat painted halo is not a beam.

## Contract-file SHA-256 values

All listed frozen contract files matched their expected SHA-256 values at review time.

| Frozen contract | SHA-256 |
|---|---|
| `art/plans/d039.json` (final plan) | `fa058c552935c84177edfaca8c3cbaf9b3a3d43f2e8e7b9ad39717aa0e28136f` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `characters/adishesha/character.json` | `d5c14279a218432cf99035e86436523e156167af06563c7890a3ae5954f5790c` |
| `characters/asura-council/character.json` | `16f82d11ca685feca5181d1cc59a01a73e27e4196662f923e5d43305c77084f1` |
| `characters/brahmins/character.json` | `ee6f618e0dd1b82fae4f7ab0a37abdee5cf6edb7a0544410a55e5fbc996f7b07` |
| `characters/devaki/character.json` | `bec219a76ee6e61b859a8232e6951090c35ac83ecca1471d00b40e607c064dd6` |
| `characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `characters/kamsa/character.json` | `350e683816ad1e7a3edc8ecb6dac2b3a1c4a8dd910a34a3af9d2cf41983b0ab6` |
| `characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `characters/vasudeva/character.json` | `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8` |
| `characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `characters/yogamaya/character.json` | `759bed23397912cc03a765560ac613ef4e7d5dca8c5b2e7c937b06034bd02122` |

## Image findings

### S001 — landscape v001

- **Candidate:** `artifacts/d039/s001/landscape/v001/candidate.png`; SHA-256 `e4f6a25fb8e6499dc8c965ee2edb8a930969dae7aeed5a54b0e814e65d4ec47c`.
- **Review time:** 2026-11-15T23:19:13Z.
- **Anatomy:** Vasudeva has two attached arms and two visible legs with natural proportions. Krishna is a newborn with two arms, matching the human-infant mode for this stanza. Adishesha forms one continuous body with seven connected, calm cobra heads; the odd head count and protective canopy match the plan and contract. No duplicated or fused person or creature is visible.
- **Faces:** Vasudeva and Krishna have coherent, undistorted faces; neither is obscured or cut off.
- **Hands/feet:** Vasudeva's hands support the child; the enlarged crop shows no extra, fused, or missing digits. His feet are in the shallow water at ankle depth and remain inside the frame. The infant's visible hand is naturally formed; covered extremities need not be inferred.
- **Clothing and cast:** Vasudeva is modestly covered. His yellow dhoti, red-orange shoulder cloth, thick bead ornament and prominent armlet/wrist ornaments are visibly present, as disclosed in the plan, rather than the contract's plain ivory dhoti, cream shawl, and minimal beads. Krishna is wrapped in cloth. No additional person appears.
- **Text/signature artifacts:** None found, including at corners and over the river/ground.
- **Scene and caption fidelity:** The wide diagonal crossing, swollen Yamuna, ankle-level water around Vasudeva's legs, child carried above the water, far bank, and storm sky are all legible. The composition differs from the supplied photo's narrower focal arrangement but follows the final landscape composition override (plan lines 82–96, 141–142, 158–161); the caption's flood-to-ankle event is clear.
- **Character/deity contract:** Krishna is deep indigo and remains a natural two-armed newborn. The serpent canopy is connected and non-aggressive. Vasudeva's warm orange-brown skin and the clothing/ornament deviations are disclosed in the candidate status (plan line 159); independent 12×12 skin-only medians at `(610,345)` and `(575,385)` are RGB `(188,102,20)` and `(189,101,18)`, consistent with the disclosed `(187,101,20)` and `(189,101,18)` samples and visibly outside the warm-medium-brown contract. **Disclosed deviation present.**
- **Verdict: pass.** No additional fail-level defect found.

### S002 — landscape v001

- **Candidate:** `artifacts/d039/s002/landscape/v001/candidate.png`; SHA-256 `6d165b32438842295b30f4773f6b2fe25a88b5537ca272e8a57d053ae1a1a8ad`.
- **Review time:** 2026-11-15T23:19:13Z.
- **Anatomy:** The sleeping Yashoda and Nandagopan, Vasudeva, and both newborns have coherent bodies. Exactly two distinct infants are shown: blue Krishna beside Yashoda and the rose-wrapped girl in Vasudeva's arms. Ordinary humans and both infants have two naturally attached arms; no third baby or accidental duplicate is present.
- **Faces:** The visible faces are coherent and not cut off. Yashoda and Nanda are asleep; Vasudeva looks down toward Krishna.
- **Hands/feet:** Vasudeva's reaching hand and supporting hand are separate and connected; the girl's hands are not fused. Krishna's visible arm and fist are well formed. Sleeping figures' covered or naturally occluded extremities are not defects. No malformed hands or feet were found in the enlarged crops.
- **Clothing and cast:** The cream bedding and garments are modest; the newborn girl is wrapped in muted rose, Krishna in muted yellow. Yashoda's cream sari and simple veil fit her contract. Gold earrings, necklace and bangles are visible as ordinary mural adornment. Nanda is a single sleeping cowherd figure; no royal costume is added.
- **Text/signature artifacts:** None found, including around the dark doorway, ground, and corners.
- **Scene and caption fidelity:** The sleeping household, open door, blue newborn beside sleeping Yashoda, second newborn carried by Vasudeva, and nighttime village outside are clear. The reference photo is portrait-oriented; the candidate follows the plan's wide sleeping-room composition and keeps both babies distinct (plan lines 195–212, 255–265, 288–291).
- **Character/deity contract:** Krishna's skin is flat deep blue; both infants remain natural two-armed newborns, and Yogamaya is in newborn form rather than an adult goddess. Vasudeva, Yashoda, and Nandagopan are warm orange-brown. Independent 12×12 skin-only medians: Yashoda `(190,575)` `(221,129,29)` and `(200,585)` `(220,128,26)`; Nandagopan `(170,350)` `(178,93,18)` and `(175,350)` `(181,95,20)`; Vasudeva `(1120,500)` `(218,119,18)` and `(1135,505)` `(220,123,20)`. These are in the same visibly orange-brown range as the plan's disclosed samples `(209,116,22)`, `(223,128,26)`, `(225,132,27)`, `(189,103,22)`, and `(216,116,14)` and outside the warm-brown contracts (plan line 289). **Disclosed deviation present.**
- **Verdict: pass.** No additional fail-level defect found.

### S003 — landscape v002

- **Candidate:** `artifacts/d039/s003/landscape/v002/candidate.png`; SHA-256 `ddc14ef455190e8419cf34ff013df4339c17a2acb27802cbf405e9197a447d6b`.
- **Review time:** 2026-11-15T23:19:13Z.
- **Anatomy:** Devaki, Kamsa, the held newborn girl, the central bearded man, and the two background guards have coherent, separate bodies. Each visible person is two-armed. Devaki's and Kamsa's poses do not create detached or fused limbs. The newborn is supported in Devaki's arms.
- **Faces:** Devaki, Kamsa, the central man, and the two guards have distinct legible faces; none is malformed or cut off. Kamsa's anger is visible in his expression and forward gesture.
- **Hands/feet:** Devaki's two supporting hands, Kamsa's extended and lowered hands, and the central man's joined hands are visibly connected and naturally drawn. No extra or missing digits were apparent in focused crops. Feet that meet the lower edge remain fully inside the frame.
- **Clothing and cast:** Devaki's deep maroon sari and ochre blouse are present. Repeated floral sleeve motifs and decorated cuff remain visible, as disclosed. Kamsa wears muted royal red/ochre clothing and a crown; this is consistent with his royal role. Two restrained guards recede at the right. A larger bearded man with joined hands stands prominently between Devaki and Kamsa; he is coherent and not a duplicate, though he is outside the plan's named principal cast and occupies more space than the plan's “guards recede” direction. This is an observable composition addition, not a malformed-person defect.
- **Text/signature artifacts:** None found; no reference-photo watermark was copied.
- **Scene and caption fidelity:** Prison architecture, Devaki holding the girl, Kamsa's entrance, and background guards convey the caption and plan. The added central man is visible but does not obscure the required mother, child, or Kamsa (plan lines 323–341, 374–384, 393–396).
- **Character/deity contract:** Devaki's sari is deep muted maroon and her blouse ochre; the floral motifs/cuff deviation is disclosed (plan line 394). Her skin medians at `(255,340)` and `(335,515)` are RGB `(234,138,37)` and `(222,129,38)`. Kamsa's face medians at `(1090,255)` and `(1110,255)` are `(217,123,33)` and `(229,132,37)`. These 12×12 skin-only patches confirm the disclosed orange-brown deviation; Kamsa's separately disclosed hand/arm sample is `(224,132,39)`. Neither Devaki nor Kamsa has an extra arm or monstrous features. **Disclosed deviation present.**
- **Verdict: pass.** No additional fail-level defect found.

### S004 — landscape v002

- **Candidate:** `artifacts/d039/s004/landscape/v002/candidate.png`; SHA-256 `62542e74887599573a52094c48c517bf95acf72e40389adb9da54341f63cfc09`.
- **Review time:** 2026-11-15T23:19:13Z.
- **Anatomy:** Kamsa has two naturally attached arms and legs. Devaki has two arms reaching toward the child. The newborn has a natural infant body with two arms and two legs, and is supported by Kamsa. No duplicated or fused figure is visible.
- **Faces:** Kamsa's and Devaki's faces are coherent and fully inside the frame; the infant's face is clear and uninjured.
- **Hands/feet:** Kamsa's hands support the infant securely; Devaki's raised hands are distinct. In the enlarged crop, the infant's small hands and feet are formed and connected, with no obvious digit defect. The baby is visibly separated from the slab; no contact or impact occurs.
- **Clothing and cast:** Kamsa's muted royal garments and jewelry are ordinary royal mural iconography. Devaki wears the deep maroon sari and ochre blouse disclosed in the plan. All figures are modestly dressed; no extra cast member is added.
- **Text/signature artifacts:** None found, including on the slab, floor, walls, or corners.
- **Scene and caption fidelity:** Kamsa holds the girl above a low stone slab, Devaki reaches toward her, and a clear gap remains between baby and stone. The moment is tense but non-graphic, matching the caption and explicit no-contact plan (plan lines 428–446; reference/caption lines 415–423 and the corresponding content caption #4).
- **Character/deity contract:** Devaki's maroon sari/ochre blouse are present. Independent 12×12 skin-only medians: Devaki `(1390,540)` `(238,130,31)` and `(1240,650)` `(244,139,36)`; Kamsa `(390,265)` `(245,145,39)` and `(600,380)` `(244,140,33)`. These orange-brown readings confirm the plan's disclosed Devaki/Kamsa skin deviations; Devaki has no visible sari-colour mismatch (plan line 500). **Disclosed deviation present.**
- **Verdict: pass.** No additional fail-level defect found.

### S005 — landscape v003

- **Candidate:** `artifacts/d039/s005/landscape/v003/candidate.png`; SHA-256 `20936356597600a30f913f42494ed0f0dbc41f94f16b031cb40f3011cc9ce24a`.
- **Review time:** 2026-11-15T23:19:13Z.
- **Anatomy:** Yogamaya has exactly eight visibly connected arms, four emerging on each side, and two legs. Kamsa and the two foreground deva witnesses are ordinary two-armed figures. The additional small celestial witnesses are distinct, without fused or duplicated bodies. No limb is cut off at the frame.
- **Faces:** Yogamaya's face is coherent and centered. Kamsa and the two foreground witnesses have distinct, legible faces and look toward the manifestation.
- **Hands/feet:** Each of Yogamaya's eight hands is attached and either holds a distinct weapon or forms a clear gesture. Her feet are both visible and naturally drawn. Kamsa's visible hand rests on the stone; no malformed hand or extra digit was found in the enlarged crops. Small background figures' hands are not individually countable at this scale, but none presents a visible defect.
- **Clothing and cast:** Yogamaya's full-length maroon/green/gold garment is modest; her crown and layered ornaments are ordinary goddess iconography. Kamsa's royal costume is consistent with his contract. The devas are a small group in cream/ochre/maroon dress.
- **Text/signature artifacts:** None found, including around the halo, courtyard floor, and corners.
- **Scene and caption fidelity:** Yogamaya rises above the grounded prison courtyard with weapons, while Kamsa looks up. The broad flat halo is painted, not a cinematic beam. The scene agrees with the eight-arm caption and plan (plan lines 534–550, 596–599, 607–610).
- **Character/deity contract:** Yogamaya's eight-arm count is exact; all arms visibly connect to her shoulders/body, satisfying the explicit contract. Two 12×12 exposed-arm patches from the private copy, `(760,270)` and `(1040,270)`, have medians `(249,180,81)` and `(251,197,101)`: warm divine gold shading, not human-skin samples. Kamsa's skin medians at `(390,470)` and `(410,510)` are `(217,122,43)` and `(171,100,19)`, orange-brown and outside his warm-brown contract, consistent with the disclosed deviation (plan line 607). **Disclosed deviation present.**
- **Verdict: pass.** No additional fail-level defect found.

## Evidence and recommendation

Integrity and inspection commands used:

- `sha256sum <each pinned candidate and frozen contract>` — every candidate and contract hash matched the expected value; the five candidates were hashed again after inspection and remained unchanged.
- `magick identify -format '%f %wx%h\n' <private candidate copies>` — S001–S004 were 1672×941; S005 was 1671×941.
- `magick <private copy> -crop 12x12+X+Y ... -depth 8 txt:-` — used to calculate per-channel medians from 12×12 pixel patches; patch crops were enlarged and visually checked to confirm skin-only sampling.
- Each full candidate and each focused crop named in the review was opened visually at original or enlarged resolution. Crops and copied candidates were stored only in `.review-scratch/` under this task worktree and are removed after writing this report.

Relevant contract anchors: the final plan maps S001–S005 to D039/001.jpg–005.jpg and preserves each caption (plan lines 118–142, 241–265, 374–384, 415–423, and 582–599). Scene requirements and orientation overrides are at plan lines 82–96, 158–161; 195–212, 288–291; 323–341, 393–396; 428–446; and 534–550, 607–610. Series-wide matte, full-bleed, palette, and text/lighting rules are in `series.json` lines 5–24, 34–64. Relevant character contracts are in the frozen `characters/{adishesha,devaki,devas,infant-krishna,kamsa,nandagopan,vasudeva,yashoda,yogamaya}/character.json` files; their actual hashes are listed above.

**Recommendation:** retain these five exact landscape versions as reviewed comparison candidates. All five pass the stated independent visual threshold, with the plan's disclosed deviations present. The review does not approve any art. The review raises no new captain decision; the standing captain art approval remains pending. Captain-call inventory for this review is empty.
