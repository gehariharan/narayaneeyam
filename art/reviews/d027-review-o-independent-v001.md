# D027 independent landscape visual review

## Scope and method

I independently reviewed the three selected landscape candidates at full native resolution and inspected enlarged crops of faces, hands, lower bodies, creature anatomy, and lower corners/ground/water. I copied the candidate bytes into `/tmp/d027-review-o/` before cropping; the producer candidates were read only. I inspected the mapped reference photos `004.jpg`, `007.jpg`, and `011.jpg`, the associated captions, the chapter entries, the frozen final plan, the series bible, and the scene-specific character contracts. All candidate and contract hashes matched the expected values before review. Candidate hashes were checked again after inspection.

Commands/evidence: `sha256sum` on the three producer candidates and all listed frozen contract files; `identify -format '%f %wx%h\\n'` on the candidate images; `cp` to `/tmp/d027-review-o/`; ImageMagick `convert ... -crop ... +repage` for detailed crops; full images, crops, and mapped reference images opened with `view_image`. The specific crops included Brahma and the assembly, Garuda and Mandara, devas/asuras, Kurma, Vasuki, and all six lower corners. `STUDIO.md` review procedure and its checksum-bound, exact-image review expectation were also read. No image, candidate, master, or approval manifest was changed.

The plan locations below refer to the frozen file `/home/gehariharan/firstmate-narayaneeyam-mate/data/d027-production/review-contract-o/art/plans/d027.json`. Character clauses are in the frozen files listed under contract checksums. Content and caption lines refer to `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/content/daskams/d027.json` and `/home/gehariharan/OneDrive/Pictures/Narayaneeyam Studio/intake/D027/photo-captions.txt`.

## Frozen contract file SHA-256 values

All values below were computed from the exact frozen contract paths specified for this review. No mismatch occurred.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d027.json` | `460a75c84f61d3c66a94ad9303ebe2c14787c508ff5702b49177061ba1711002` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d027/scene-contracts.json` | `d2783b2dac71cd777a732cfca5d9ea1e1f06729b9468ee90345c0d98efc52fa4` |
| `art/bible/characters/d027-airavata/character.json` | `e1cd39bb990cfeb6093cc56e97f519f3d4767780c365e4c67f87cee5f048a5fa` |
| `art/bible/characters/d027-asuras/character.json` | `1ef89cb356260859fa31ec5b8ba58beae4f670a0ec50f47020df6b7f9d99135b` |
| `art/bible/characters/d027-bhattathiri/character.json` | `a688d5a3ca6c23473e044d9cec7fa926961e537aa5d8a85a3a8fe1e6d6025732` |
| `art/bible/characters/d027-brahma/character.json` | `704f5a05d314cfb2edcca3085f75195d65e7b1246b6ee720277ab83671725db0` |
| `art/bible/characters/d027-devas/character.json` | `a63dfeb65ac3d191de56a9cabf0c4c347ba3755195c13b243fdd1473b0e9dba9` |
| `art/bible/characters/d027-durvasa/character.json` | `d40d0e58c11a90b8d62b8041137c86f4199bfe17143cfd8725c4d8c54c4eab35` |
| `art/bible/characters/d027-garuda/character.json` | `af32201021f10c221be88f790e6aade6717902f6933458ce31249f6228ad51bb` |
| `art/bible/characters/d027-indra/character.json` | `e3ddb42201fe3ce662e0a29ce4dba9c0ba8aca47c10bf9dffbd17ec920a173a8` |
| `art/bible/characters/d027-kurma/character.json` | `0e88aac21ec005cc069c7f0e7a467bfbf64d8e795978c20ea47ae0ea14a525b6` |
| `art/bible/characters/d027-shiva/character.json` | `478e205305395919e3dee2c400fb0099a9a76b588a7ba07770341d147fce8389` |
| `art/bible/characters/d027-vasuki/character.json` | `e4bcf5e23519179a49675f225174c05a4bd46f855532b5d688708444fea1999c` |
| `art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

Series rules at `series.json` define flat matte mineral colors, painted ochre in place of reflective gold, and no text/signature/logo/watermark. Scene rules at `scene-contracts.json:8,10,12` specify S002 divine anatomy, S004 Garuda and group anatomy, and S006 complete Kurma and Vasuki. Character specifics are cited per image below.

## Candidate reviews

### Stanza 2 — `d027-s002`, landscape v002

- **Candidate:** `artifacts/d027/s002/landscape/candidate-v002.png`
- **Native size:** 1672 × 941
- **SHA-256:** `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933`
- **Review time:** 2026-11-14 22:42:24 UTC
- **Plan and contracts:** plan lines 99–157; scene contract `scenes["2"]`; Brahma character contract lines 13–25; Vishnu, Indra, Shiva, and devas contracts checked against the S002 rules.
- **Mapped source:** `intake/D027/004.jpg`; caption mapping is `photo-captions.txt:14–17` and chapter content `d027.json` stanza 2, whose commentary source is caption 004.

**Findings by area**

- **Anatomy:** The assembly reads as one Vishnu, one Brahma, one Shiva, a subdued Indra, and a small group of distinct devas. Bodies remain individually separated; no duplicate person, fused body, or malformed limb is visible. The kneeling figure's legs and feet at the lower left remain attached and within frame.
- **Faces:** Brahma has **three visibly distinct faces** across the central cluster. This matches the contract: four heads total, with the fourth turned behind and not visible. The hidden fourth head is not treated as missing. Shiva is one single-faced figure. Vishnu, Indra, and the devas show distinct, readable faces.
- **Hands/feet:** Brahma has **four attached arms and four hands**: the upper hands hold a book and lotus; the lower hands hold a pot and beads. They are separately attached and do not merge. Vishnu has four attached arms/hands. The kneeling Indra's joined hands and visible feet are intact; no conspicuous extra or malformed digits are visible at the inspected crop scale. Other visible hands are attached and readable.
- **Clothing and cast:** Clothing is traditional cream, saffron, and ochre drapery. Bare torsos and limbs follow ordinary temple-mural depiction and are not sexualized. Tiered painted-ochre crowns and layered necklaces are visible on Brahma, Vishnu, and the devas; these are ordinary iconography and do not violate a prohibition. Indra appears bowed and subdued, not grotesquely aged. The small assembly is varied rather than cloned.
- **Text/signature artifacts:** No readable text, caption, signature, logo, or watermark is visible. I inspected the lower ground and both lower corners closely; the small floor motifs are painted decoration, not text.
- **Scene and caption fidelity:** The plan requires the weakened Indra and devas to approach Vishnu with Brahma and Shiva accompanying them (plan lines 116–130). The image shows that petition and Vishnu's calm reception. The mapped caption says the devas went to Shiva and Brahma and then collectively to Vishnu (caption 004). The supplied `004.jpg` itself depicts ocean-churning/battle imagery rather than that captioned petition; the candidate follows the frozen plan and caption. This source-photo/caption mismatch is recorded as a reference observation, not an image defect.
- **Character/deity contract:** Brahma's observed three visible faces/four attached arms match his exact convention (Brahma contract lines 15, 21–25). Vishnu's four-armed form, muted blue skin, and calm face match his S002 contract. Shiva appears as a single ascetic figure with two arms. Indra's bowed pose communicates the required weakness. No explicit structural prohibition is violated.

**Verdict: pass.**

### Stanza 4 — `d027-s004`, landscape v003

- **Candidate:** `artifacts/d027/s004/landscape/candidate-v003.png`
- **Native size:** 1671 × 941
- **SHA-256:** `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b`
- **Review time:** 2026-11-14 22:42:24 UTC
- **Plan and contracts:** plan lines 217–257; scene contract `scenes["4"]`; Garuda contract; Vishnu, devas, and asuras contracts checked against the S004 rules.
- **Mapped source:** `intake/D027/007.jpg`; caption mapping is `photo-captions.txt:28–31` and chapter content `d027.json:47–54`.

**Findings by area**

- **Anatomy:** Vishnu and Garuda form one coherent mounted group. Garuda has one head, two attached wings, and two taloned legs. The wings extend to the mural's side edges, but no key face or limb is cut off. Three devas and three asuras are separately drawn; no duplicate or fused bodies are visible. Their lower legs meet the ocean/waterline, with no malformed termination.
- **Faces:** Garuda's beak and eye are clear. Vishnu and the six carriers have distinct faces; no malformed or duplicated face is visible.
- **Hands/feet:** Vishnu has four attached arms and hands, holding conventional attributes. Garuda's two taloned feet contact and support Mandara near its upper sides (approximately x=720–940, y=440–520 in the native frame). The devas at left and asuras at right extend open hands toward the mountain; their hands do not contact it. Those gestures remain attached and readable. The waterline obscures some lower extremities naturally; no visible foot is malformed.
- **Clothing and cast:** The left group wears cream/ochre and the right group maroon/ochre, keeping the groups visually distinct. Exposed upper bodies are ordinary traditional dress. Tiered painted-ochre ornaments on Vishnu and Garuda are decorative mural iconography, not a reflective-metal violation. No grotesque asura caricature appears.
- **Text/signature artifacts:** No readable text or signature is visible. I checked the ocean at the lower edge and both lower corners; no logo or watermark appears. The reference painting itself has a signature, but the candidate does not reproduce it.
- **Scene and caption fidelity:** The exact must-show wording (plan lines 235–240) calls for devas and asuras carrying Mandara toward the ocean, the mountain slipping from their grasp, and Vishnu on one Garuda lifting and placing it. In the candidate, the mountain is upright at the ocean with its base in the water; **Garuda's talons visibly support it**, while Vishnu rides above with four arms. Devas and asuras frame it on opposite sides with open, directed gestures, but are not physically holding it in this depicted instant. The image reads as the recovery/placement after the fall described in caption 007 (`d027.json:51`; `photo-captions.txt:28–31`), rather than showing a separate earlier carrying instant. The prescribed carriers, fallen/recovered mountain, and divine lifting are legibly represented in this single recovery moment; no required scene element is genuinely absent.
- **Character/deity contract:** Vishnu has the required four arms, with no extra arm. Garuda is one coherent bird with the contracted two wings and two legs. Deva/asura groups remain ordinary two-armed humanoids and visually distinct. No explicit structural prohibition is violated.

**Verdict: pass.**

### Stanza 6 — `d027-s006`, landscape v003

- **Candidate:** `artifacts/d027/s006/landscape/candidate-v003.png`
- **Native size:** 1672 × 941
- **SHA-256:** `eb78c032e714e303f44adf48554bdec389d02374af5d749a1c58044b5b4935a7`
- **Review time:** 2026-11-14 22:42:24 UTC
- **Plan and contracts:** plan lines 333–389; scene contract `scenes["6"]`; Kurma contract lines 13–29; Vasuki and devas contracts checked against S006 rules.
- **Mapped source:** `intake/D027/011.jpg`; caption mapping is `photo-captions.txt:46–48` and chapter content `d027.json:67–74`.

**Findings by area**

- **Anatomy:** Kurma is a complete tortoise with one head, one shell, and no human torso or arms. **Four legs are visible**: two forelegs and two hind legs beneath the shell. The two farther legs are partly occluded by the shell/body and water, but remain visibly attached; a viewer would not read them as missing or malformed. A short tail is visible behind the shell. The mountain's base meets the shell directly.
- **Faces:** Kurma's single natural tortoise face is intact. The three distressed devas at the left have separate, legible faces without duplication.
- **Hands/feet:** Kurma's four reptilian feet are individually visible with coherent claws; no leg is missing. The devas' visible hands are raised in prayer/distress and attached. Their other extremities are either in the water or outside the selected grouping; no key face or extremity is cut off.
- **Clothing and cast:** The small deva group wears traditional garments and restrained painted-ochre ornaments. No exposed skin beyond ordinary traditional dress or sexualized framing is present. The visible bodies are separate and the group is appropriately small.
- **Text/signature artifacts:** No text, signature, logo, or watermark appears. I inspected the lower water and both lower corners; only water patterns and Kurma's limbs/tail are present.
- **Scene and caption fidelity:** The mountain visibly settles onto Kurma's broad shell beneath the water; the water is turbulent; three devas look toward the event with raised/prayerful hands. Vasuki's single head is visible at the right and one continuous body wraps around Mandara; the rest of the coil runs behind the mountain. The reference image and caption 011 describe the same support scene (`d027.json:71`; `photo-captions.txt:46–48`).
- **Character/deity contract:** The fully tortoise form, one shell, and four legs match the Kurma contract. Vasuki shows one head and a continuous body; its far end is obscured by the mountain, with no visible fork, duplicate body, or second head. The plan does not require a visible serpent tail in this S006 composition. Devas are distinct. No explicit structural prohibition is violated.

**Verdict: pass.**

## Recommendation and captain-call inventory

All three exact-checksum candidates pass this independent review. The checksum-bound findings do not grant human approval and do not change the approval manifest; the candidates remain unapproved. No unresolved question requiring a captain decision was discovered by this review. The separate pending art-approval state remains the standing state and is not a decision raised here. Captain-call inventory for this review: **empty**.
