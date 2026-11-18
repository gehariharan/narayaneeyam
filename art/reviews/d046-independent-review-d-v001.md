# D046 independent landscape candidate review

## Scope and result

I independently inspected the eight selected D046 landscape candidates at native size and in enlarged crops, and compared each with its mapped numbered reference photo, caption and stanza plan. I read only the frozen final plan and character contracts named below; I did not consult producer reviews or existing D046 review records. The results are bound to the exact candidate checksums and exact contract bytes in this report.

**Seven candidates pass; stanza 1 needs a framing fix.** Its checksum-specific finding is limited to the top of Yashoda’s head/hair being cut by the frame. No artwork is approved by this review; all candidates remain unapproved. Stanzas 7 and 8 were not reviewed.

**Review recorded:** 2026-11-18T03:07:08Z (UTC; all eight images had been inspected by this time).

## Frozen-input checksums

Each actual SHA-256 matched the expected value in the task brief. Contract paths below are relative to `/home/gehariharan/firstmate-narayaneeyam-mate/`; candidate paths are relative to `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/`. The final two input hashes are for files in that read-only source worktree.

| File | Actual SHA-256 |
|---|---|
| `data/d046-production/review-contract-b/art/plans/d046.json` | `244df97b3236a612a65014eb911103271c12f8910c9d2cbe11a913eb24ef6a98` |
| `data/d046-production/review-contract-b/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d046-production/review-contract-b/art/bible/characters/adishesha/character.json` | `d5c14279a218432cf99035e86436523e156167af06563c7890a3ae5954f5790c` |
| `data/d046-production/review-contract-b/art/bible/characters/asuras/character.json` | `00c00f503c33706c54306461c404e467e54ffcc40266f89190e0376a7d4afded` |
| `data/d046-production/review-contract-b/art/bible/characters/d046-cowherd-boys/character.json` | `72f2876be4d885c91eddbcd26abdd4b2012e6ae63cbec81b55e13c9bdc968496` |
| `data/d046-production/review-contract-b/art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `data/d046-production/review-contract-b/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `data/d046-production/review-contract-b/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `data/d046-production/review-contract-b/art/bible/characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `data/d046-production/review-contract-b/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `data/d046-production/review-contract-b/art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `content/sources/d046/reference-map.json` | `94ffdf8e256a2b884f844ec11f1bf302d68a0bb7f39e4c52c67773c536979ede` |
| `intake/D046/photo-captions.txt` | `c06b7e71e473c4dac728cb1e9b7f3b537292c95629b1bd43a334f3f3139f1b44` |

The map assigns stanza 1–6 and 9–10 to photos 001–006 and 009–010 respectively (`content/sources/d046/reference-map.json:7-12,15-16`; its sequential mapping statement is at `art/plans/d046.json:29`). Caption sections are at `intake/D046/photo-captions.txt:1-3,6-8,11-13,17-19,22-24,27-29,42-44,47-49`. The selected plan entries and candidate versions are at `art/plans/d046.json:40-74,85-121,132-167,178-212,223-257,268-303,414-448,459-493`. The source chapter's stanza entries are at `content/daskams/d046.json:16,33,50,67,84,101,152,169`.

## Inspection method and evidence

Commands used for file verification and evidence included:

- `sha256sum <the eight exact candidate paths> <the frozen plan and character paths> <reference-map.json> <photo-captions.txt>`; all 21 outputs matched the expected hashes.
- `magick identify -format '%f %wx%h\n' <each candidate>`; native dimensions were 1672×941 for stanzas 1, 3, 4, 5, 6, 9 and 10; stanza 2 was 1671×941.
- `magick <candidate> -crop <region> +repage <scratch crop>` for focused details, followed by native image viewing of the full candidate, its crops and the mapped reference. Crops were scratch files under `.review-scratch-d046/` in the disposable review worktree; no candidate or project material was edited.
- Skin measurements used 8×8-pixel skin-only patches converted to RGB bytes with ImageMagick and channel-wise medians calculated with Python `statistics.median`. Coordinates below are candidate-native pixels. The observed red-minus-blue (R−B) medians are reported per required warm-brown cast. Color numbers are supporting evidence; the visual judgment is whether the skin reads naturally brown or orange.

Character contract fields checked include the Yashoda warm medium-brown complexion, sari and modest jewelry (`characters/yashoda/character.json:15-30`); youthful Krishna's matte blue skin, plain forehead, one low band/feather and ordinary two-arm/two-leg form (`characters/krishna-vrindavan-youth/character.json:8-20,53-67`); infant form and natural infant anatomy (`characters/infant-krishna/character.json:18-35`); and, for stanza 2, the distinct warm-brown, clothed child companions (`characters/d046-cowherd-boys/character.json:10-29`). The selected scenes do not depict Adishesha, devas or asuras; their contracts were read and hashed but are not applicable to these eight scenes.

## Candidate findings

### Stanza 1 — v009 — needs-fix

- **Candidate / binding:** `artifacts/d046/s001/landscape/candidate-v009.png`; SHA-256 `2b6715244f7f54b2d93fbd1b6abe5278e874d7921d6bbf8b33bffae1a3daa1fe`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** Infant reads as an infant with two attached arms and two legs. Yashoda and infant faces are legible and not malformed. In the enlarged lap crop, the infant's two visible feet each show five toes; the resting infant hand is open with separated digits, while the other is closed as a fist. Yashoda's hand across the infant has four visible fingers; its thumb is obscured by the contact/overlap. No extra or fused limb is visible.
- **Clothing and cast:** Yashoda's sari covers her; infant has a yellow lower wrap and bare upper torso. There is no nursing depicted. This is ordinary traditional infant depiction, not sexualized framing. No duplicated person.
- **Text/signature artifacts:** No readable text, signature or watermark found in the image, including the mouth, ground and corners.
- **Scene/caption fidelity:** The lap, yawn and small universe contained within the mouth are clear and consistent with photo 001, caption #1 and plan stanza 1 (`art/plans/d046.json:40-74`; `photo-captions.txt:1-3`).
- **Character contract / skin:** Krishna's indigo infant color, curls and infant proportions fit the infant contract. Yashoda's 8×8 cheek patch at (660,220) has median RGB (163,88,49), R−B **114**; the complexion reads as natural warm brown, not orange. Her cream/rose clothing and veil are consistent. Her floral earring and bead jewelry are ornate but do not read as palace regalia.
- **Defect and exact region:** The top of Yashoda's head/hair is cut by the frame at the upper edge, approximately x=600–850, y=0 (candidate-native pixels). The enlarged top crop confirms the hair silhouette exits the frame, and the full image visibly truncates her head. This is a viewer-noticeable framing defect under the brief's cut-off rule. **Verdict: needs-fix.**

### Stanza 2 — v011 — pass

- **Candidate / binding:** `artifacts/d046/s002/landscape/candidate-v011.png`; SHA-256 `8c623cc9d134e6f0924435c5f196f43f319749a1c2ce842398e2ad00c8863f8c`; 1671×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** Three distinct children and Yashoda have coherent attached limbs and distinct, readable faces. Yashoda's gesturing palm shows a thumb and four fingers. The complaining boy has one clear pointing hand and a separate hand at his chest; the second boy holds fruit with both hands; Krishna holds fruit with one hand and rests the other on his knee. No extra, missing or fused limb or duplicated child is visible. The enlarged lower crop shows five toes on each fully visible foot; some toes are small but distinct.
- **Clothing and cast:** The two companions are children with distinct hair and expressions, complete muted village wraps; no adult proportions, exposed or sexualized depiction. Krishna wears yellow and red-orange, with one low band and feather. Fruit is beside him and the second boy is visibly upset holding fruit.
- **Text/signature artifacts:** No text, signature or watermark found in the scene, grass, water or corners.
- **Scene/caption fidelity:** The single grove scene places Yashoda at left, the accuser gesturing toward Krishna, and the other boy with fruit between them; Krishna sits at right with shared fruit. This tracks photo 002, caption #2 and plan stanza 2 (`art/plans/d046.json:85-121`; `photo-captions.txt:6-8`).
- **Character contract / skin:** Youthful Krishna and Yashoda follow their contracts. The Yashoda cheek patch at (220,250) is median RGB (166,105.5,63.5), R−B **102.5**. The two boys' cheek patches at (540,230) and (965,240) are (160,102.5,64), R−B **96**, and (174,108,66), R−B **108**. All three read as warm medium brown, not orange. **Verdict: pass.**

### Stanza 3 — v006 — pass

- **Candidate / binding:** `artifacts/d046/s003/landscape/candidate-v006.png`; SHA-256 `44f8a4fdb6e2b5dc32db260e817ea4dcfbfbb290c18adfd63b87b3c394f56e35`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** Mother and child have attached, proportionate limbs and distinct, expressive faces. Yashoda's raised open hand shows five digits; Krishna points toward his mouth with one hand and rests the other on his knee. The lower crop shows five toes on each visible foot. No malformed or duplicated person, extra limb or fusion found.
- **Clothing and cast:** Yashoda is fully dressed in her sari; Krishna wears his yellow dhoti and red-orange shawl, with bare upper torso as ordinary traditional dress. No sexualized framing.
- **Text/signature artifacts:** No text, signature or watermark found, including the floor and image edges.
- **Scene/caption fidelity:** The concerned mother, calm child and restrained earth/water worldscape contained in the open mouth fit photo 003, caption #3 and the plan's hidden-cosmic-truth treatment (`art/plans/d046.json:132-167`; `photo-captions.txt:11-13`). Yashoda is alarmed rather than shown knowingly worshipping him.
- **Character contract / skin:** Krishna's youthful deep matte blue, plain forehead, low band and single feather fit the Vraja youth contract. Yashoda's cheek patch at (680,220) has median RGB (200,119,71), R−B **129**; despite the high red-minus-blue difference, the rendered patch and full face read as natural warm brown, not orange. **Verdict: pass.**

### Stanza 4 — v008 — pass

- **Candidate / binding:** `artifacts/d046/s004/landscape/candidate-v008.png`; SHA-256 `e1d89b5584fef9336cf4703094e91a232813d536f8f78a215e1f852c9296bc31`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** Two distinct figures with attached, ordinary limbs and sound faces. Yashoda's raised hand forms a clear pointing gesture; the other rests on her lap. Krishna's two hands lie separately on his lap. The enlarged lower crop shows five toes on each visible foot; no extra, fused or missing limb or malformed extremity is visible.
- **Clothing and cast:** Complete sari and dhoti/shawl clothing; bare male upper torso is ordinary dress. No other person or duplicate figure.
- **Text/signature artifacts:** No text, signature or watermark found on the floor, pots, foliage or corners.
- **Scene/caption fidelity:** The leaning mother points/questioningly gestures while smiling Krishna faces her. His lips and face are clean, and no earth is visible. This matches photo 004, caption #4 and plan stanza 4 (`art/plans/d046.json:178-212`; `photo-captions.txt:17-19`).
- **Character contract / skin:** Krishna has a plain forehead, youthful face, matte blue skin and a single low band/feather. Yashoda cheek patch at (705,215) has median RGB (152,94,62), R−B **90**; she reads as natural warm brown, not orange. No palace-like regalia. **Verdict: pass.**

### Stanza 5 — v006 — pass

- **Candidate / binding:** `artifacts/d046/s005/landscape/candidate-v006.png`; SHA-256 `f3d92721c7c5031dc73b950e03502e6c172b9c805dce9066a3bbda4c47b87fd8`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** Yashoda and Krishna are separate, proportionate figures with clean attached limbs and readable faces. Yashoda's open palm shows five digits. Krishna's two hands rest apart on his lap with separated fingers. Each visible foot shows five toes in the enlarged lower crop; no limb or digit defect is visible.
- **Clothing and cast:** Both are clothed in the established sari and dhoti/shawl; Krishna's bare upper torso is ordinary traditional dress. No sexualized framing or duplicate person.
- **Text/signature artifacts:** No text, signature or watermark found in the mouth, floor, pots, foliage or corners.
- **Scene/caption fidelity:** Yashoda prompts him with an open hand and Krishna begins to open his mouth. The mouth remains human-sized, with no cosmic tableau or visible mud. This fits photo 005, caption #5 and plan stanza 5 (`art/plans/d046.json:223-257`; `photo-captions.txt:22-24`).
- **Character contract / skin:** Krishna's plain forehead, deep matte blue, curls and low feather band are consistent with the youthful contract. Yashoda's cheek patch at (620,235) has median RGB (148,91,63), R−B **85**; it reads as natural warm brown, not orange. **Verdict: pass.**

### Stanza 6 — v007 — pass

- **Candidate / binding:** `artifacts/d046/s006/landscape/candidate-v007.png`; SHA-256 `778374e58b889a27bfbd346646519186dcd787cca8eb89ea8ddffdfb2ba02f12`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** Yashoda and Krishna have distinct faces and attached two-arm, two-leg forms. Yashoda's open raised hand shows five digits; Krishna has one hand pointing to his mouth and the other resting on his knee. The two visible feet each show five toes. No malformed face, extra/missing/fused limb or duplicated person found.
- **Clothing and cast:** Sari and dhoti/shawl are complete; bare male upper torso is ordinary traditional dress. No sexualized framing.
- **Text/signature artifacts:** No text, signature or watermark found, including floor, pots, foliage and corners.
- **Scene/caption fidelity:** The earth, sky, mountains and waters are integrated inside Krishna's mouth, with both faces in one scene and no detached panel or light beam. This follows photo 006, caption #6 and plan stanza 6 (`art/plans/d046.json:268-303`; `photo-captions.txt:27-29`).
- **Character contract / skin:** Krishna remains youthful and two-armed, with plain forehead, deep matte blue skin and the correct single feather band. Yashoda's cheek patch at (660,250) has median RGB (149,92,66), R−B **83**; it reads natural warm brown, not orange. **Verdict: pass.**

### Stanza 9 — v004 — pass

- **Candidate / binding:** `artifacts/d046/s009/landscape/candidate-v004.png`; SHA-256 `fd45d0f764b12d15d276e5c705456e852db6b496181f791be8f64f6e649a1331`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** The outer pair is clear and anatomically coherent: Yashoda's open hand is five-fingered; Krishna points to his mouth and has a separate resting hand; visible outer feet show five toes each. In the nested scenes, figures are intentionally tiny. At full image and moderate enlargement, their digits and some extremities are below readable pixel size; none visibly has an extra, fused or missing limb, malformed face or duplicate accidental figure. Per the miniature rule, unresolved miniature digits are an observation, not a defect or uncertainty.
- **Clothing and cast:** Outer pair have complete sari and dhoti/shawl. Nested pairs repeat the same mother-child scene intentionally; this is not accidental duplication. No sexualized depiction.
- **Text/signature artifacts:** No text, signature or watermark found in the outer scene, grass, water or corners.
- **Scene/caption fidelity:** The mouth contains a world with an inner Yashoda/Krishna scene and a further smaller mouth-world, making the recursion explicit. It agrees with photo 009, caption #9 and the two-to-three-layer plan (`art/plans/d046.json:414-448`; `photo-captions.txt:42-44`).
- **Character contract / skin:** Outer Krishna has the plain forehead, youthful blue form, two arms, and low band/feather. Yashoda cheek patch at (600,240) has median RGB (169,97,63.5), R−B **105.5**; it reads as natural warm brown, not orange. The feather sits close to the top edge but its feather fan is visible; no face or limb is cut off. **Verdict: pass.**

### Stanza 10 — v004 — pass

- **Candidate / binding:** `artifacts/d046/s010/landscape/candidate-v004.png`; SHA-256 `3c9c26b68ff1522e41874da6d075bfa8aa29cbe2b25612fa70c378c037ff1ac8`; 1672×941; reviewed 2026-11-18T03:07:08Z.
- **Anatomy; faces; hands and feet:** The embrace has two attached arms per figure. Krishna's near hand rests against Yashoda's chest and the other reaches outward; Yashoda's arm supports his back and her other hand rests on his covered lap. The visible open/relaxed hands have separated fingers without an extra or fused digit. One Krishna foot and one Yashoda foot show five toes; the other Krishna foot is partly covered by the wrap. No malformed face, extra limb or accidental duplicate.
- **Clothing and cast:** Yashoda's sari and Krishna's yellow wrap and red-orange shawl fully cover them; no nursing is shown. The lidded feeding bowl is nearby. Bare male upper torso is ordinary traditional dress; no sexualized framing.
- **Text/signature artifacts:** No text, signature or watermark found in the scene, ground, bowl or corners.
- **Scene/caption fidelity:** Tender lap embrace and covered bowl convey the return to maternal affection after the brief recognition, matching photo 010, caption #10 and plan stanza 10 (`art/plans/d046.json:459-493`; `photo-captions.txt:47-49`).
- **Character contract / skin:** Krishna has a plain forehead, blue youthful form and two arms; Yashoda face/veil/sari palette is consistent. Her cheek patch at (620,220) has median RGB (167,104,54), R−B **113**; the image reads natural warm brown, not orange. **Verdict: pass.**

## Recommendation and captain-call inventory

Revise stanza 1 v009 so Yashoda's full head/hair is inside the landscape frame, then request a fresh checksum-specific review of that new version. The other seven reviewed candidates pass their stated checks. This report does not approve any artwork or confer approval status.

Captain-call inventory for this review is empty. The pending captain art approval is the standing approval state and is not a new decision raised by these findings.
