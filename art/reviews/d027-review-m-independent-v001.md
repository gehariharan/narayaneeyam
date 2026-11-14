# D027 stanzas 7–11: independent landscape visual review

## Scope and method

I independently inspected the five selected landscape candidates at full 1680×945 resolution and enlarged detail crops saved under `/tmp/d027-review-m-crops/`. I compared each to its stanza plan entry, mapped intake photo, caption, and the applicable frozen series/character contracts. Photo mapping is `content/daskams/d027.json:77–122` and `intake/D027/photo-captions.txt` sections `#012`–`#016`; the plan entries and their `candidate_status` disclosures are `art/plans/d027.json:392–662`. Focus checks included Kurma’s shell and four legs; the churning groups’ faces, hands, feet and Vasuki connections; Vishnu and Brahma’s head/arm counts; poison direction and selective rain; Bhattathiri’s face and Vishnu’s two grips; image edges, ground, water and corners for text/signature artifacts.

Commands/evidence: `sha256sum <the five pinned candidate paths and the 15 pinned contract paths>` returned exactly the values recorded below on the initial check. A final `sha256sum <the five candidate paths>` after inspection returned the same five candidate values. `jq '.stanzas[] | select(.n >= 7 and .n <= 11)' content/daskams/d027.json` and the equivalent query against the frozen `art/plans/d027.json` established stanza/photo and planned-scene mapping. Full images were opened directly; enlarged scratch crops were made with ImageMagick `magick ... -crop ... -resize ...` only after reading/copying from the producer images. No candidate, intake image, approval manifest or project file was changed. The decisive file/line references are included with each finding.

## Exact contracts read

Every listed actual SHA-256 matched the expected value in the task brief; these are the exact bytes used for this review.

| Frozen contract file | Actual SHA-256 |
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

## Candidate findings

### Stanza 7 — landscape v003

- **Candidate:** `artifacts/d027/s007/landscape/candidate-v003.png`
- **Verified SHA-256:** `787970f9986348bd1456530479d308197051e8ebf30f0abce0edccbf0abe6f18`
- **Review time:** 2026-11-14T22:28:56Z
- **Anatomy:** One complete tortoise form; the hard shell carries Mandara, with four attached legs, one head and a short tail visible (plan `art/plans/d027.json:392–420`; Kurma contract `art/bible/characters/d027-kurma/character.json:16–32`).
- **Faces:** Kurma’s single face is legible and proportionate; no malformed or duplicate figure.
- **Hands/feet:** No hands are present. Four attached feet are visible; each has distinct painted claws (three on the far legs, four on the nearer feet in the enlarged crop), with no extra or fused leg or digit apparent.
- **Clothing and cast:** No human cast; no exposed human skin or clothing concern.
- **Text/signature artifacts:** No readable text, signature or watermark visible in the image, including the water and corners.
- **Scene and caption fidelity:** Matches caption/photo `012.jpg` and plan: mountain is visibly lifted on Kurma’s broad shell, with the water surface and tortoise below. The shell/base connection is clear and the frame does not cut the head, shell or feet.
- **Character/deity contract:** Complete non-anthropomorphic Kurma; no human torso or arms, detached shell, or unsupported mountain (`scene-contracts.json:12`; Kurma character contract `:16–32`).
- **Verdict: pass.**

### Stanza 8 — landscape v005

- **Candidate:** `artifacts/d027/s008/landscape/candidate-v005.png`
- **Verified SHA-256:** `adfe17df7e67ce6a8cfda983e9d3abadc334677ff57f7e5a4b470e888da02dc1`
- **Review time:** 2026-11-14T22:28:56Z
- **Anatomy:** Four distinct humanoids, each with one head, two arms, two hands, two legs and two feet. Enlarged group crops show connected limbs and no duplicated or fused body.
- **Faces:** Four differentiated faces; no accidental copies or malformed face.
- **Hands/feet:** Each person’s two hands visibly grip the rope; the fingers are drawn as distinct contours around it, with no extra/fused digit apparent. Each person has two attached feet; visible toe contours are ordinary and connected.
- **Clothing and cast:** Two left-side asuras wear muted maroon/ochre; two right-side devas wear cream/saffron/olive. Traditional garments are intact and modest; torsos are bare in ordinary mural dress.
- **Text/signature artifacts:** No text, signature or watermark visible, including the sea, ground and corners.
- **Scene and caption fidelity:** Caption/photo `013.jpg` and plan `art/plans/d027.json:443–478`: one serpent wraps one raised Mandara; its single head is at the left with the asuras and its continuous tapering tail extends to the devas at right. Both groups pull, with a restrained warm radiance around the mountain. This follows the caption’s correct head/tail assignment.
- **Character/deity contract:** Vasuki is one connected serpent with one head and one tail; the asuras hold the head end, devas the tail end. There is no second Vishnu figure (`scene-contracts.json:13`; Vasuki contract `art/bible/characters/d027-vasuki/character.json:14–31`; plan `:460–478`).
- **Verdict: pass.**

### Stanza 9 — landscape v002

- **Candidate:** `artifacts/d027/s009/landscape/candidate-v002.png`
- **Verified SHA-256:** `8ce57af6c8c18bc4afd3b77fa3f3200965441c7cf2db898f08ffb16411f23a7a`
- **Review time:** 2026-11-14T22:28:56Z
- **Anatomy:** Vishnu has four attached arms; Brahma has four attached arms. The surrounding praise figures are distinct. One undisclosed defect is recorded under the head-count finding below.
- **Faces:** Vishnu, Shiva and the deva witnesses have readable faces; the right-edge witnesses’ faces remain inside the frame. **Defect:** Brahma has only three total heads: three crowned faces appear across his head/shoulder region (image pixels approximately x=1165–1330, y=35–240); there is no fourth rear-facing head. This is a visible failure of the four-head contract, not intentional three-quarter iconography. The contract requires four total heads, three front-visible and a fourth turned behind (`art/bible/characters/d027-brahma/character.json:17–24`; scene contract `scene-contracts.json:14`; plan `art/plans/d027.json:519–525`).
- **Hands/feet:** Vishnu’s four hands are distinct: upper left holds the discus, upper right the conch, lower right steadies the mountain with a lotus hand, lower left carries the mace; two feet are visible with separate toes. Brahma’s four hands are distinct and hold separate attributes. No extra or fused digits or clipped key extremities are apparent.
- **Clothing and cast:** Traditional garments are modest; no sexualised framing. **Disclosed deviation present:** Vishnu wears a tall tiered crown with peacock feather and multiple necklaces, exceeding the modest-ornament contract as explicitly disclosed in the plan (`art/plans/d027.json:540`). His ornaments are on the head and torso. This deviation is not counted as a defect.
- **Text/signature artifacts:** No readable text, signature or watermark visible, including the ground and corners.
- **Scene and caption fidelity:** Caption/photo `014.jpg` and plan `art/plans/d027.json:501–538`: Vishnu steadies the rising Mandara with a lotus hand as Brahma, Shiva and distinct devas praise and shower flowers. The central event and witnesses are present.
- **Character/deity contract:** Vishnu’s four-arm form and lotus gesture are correct (`d027-vishnu/character.json:24–30`). Brahma’s required fourth head is missing (`d027-brahma/character.json:17–27`).
- **Verdict: needs-fix.** The undisclosed missing Brahma head is visible and violates the explicit head-count contract. The separately disclosed Vishnu ornament deviation is present.

### Stanza 10 — landscape v008

- **Candidate:** `artifacts/d027/s010/landscape/candidate-v008.png`
- **Verified SHA-256:** `db52901c18f32f775207ac50e3883f8d35d24a519036f189b148233dc0e4b37d`
- **Review time:** 2026-11-14T22:28:56Z
- **Anatomy:** Four distinct humanoids (two devas and two asuras), each with two attached arms and legs. Enlarged crops show no fused bodies, duplicated people or malformed limbs.
- **Faces:** All four faces are distinct and readable. The two asuras at right visibly react to the fumes; the devas at left look toward the serpent.
- **Hands/feet:** Each figure has two hands on Vasuki and two attached feet; visible fingers/toes have ordinary separate contours. No extra/fused digits seen.
- **Clothing and cast:** Traditional dhotis and shoulder cloths are intact; bare torsos are ordinary traditional dress, not exposed beyond it. Small groups are clearly differentiated by side and garments.
- **Text/signature artifacts:** No text, signature or watermark visible in the sky, smoke, water, ground or corners.
- **Scene and caption fidelity:** Caption/photo `015.jpg` and plan `art/plans/d027.json:560–594`: one serpent head at image right emits pale fumes toward the asuras, while rain falls only over the devas on the left; the asuras remain dry. Vasuki’s body stays continuous around the mountain and between the groups.
- **Character/deity contract:** Correct selective rain, poison direction, and single connected Vasuki; no Vishnu figure appears (`scene-contracts.json:15`; plan `:575–594`; Vasuki contract `art/bible/characters/d027-vasuki/character.json:14–31`).
- **Verdict: pass.**

### Stanza 11 — landscape v002

- **Candidate:** `artifacts/d027/s011/landscape/candidate-v002.png`
- **Verified SHA-256:** `50f2e4ea5f0188a0446547f496fb7cbc8154644b65003e36840c54f29958b54d`
- **Review time:** 2026-11-14T22:28:56Z
- **Anatomy:** Vishnu has exactly two attached arms; Bhattathiri is one connected seated human with two arms and legs. The fish and two makara-like creatures are separate animals; no malformed or duplicated person/creature is apparent.
- **Faces:** Vishnu’s face is proportionate. Bhattathiri is visibly older, clean-shaven, and has a single face; no beard or moustache is present.
- **Hands/feet:** Vishnu’s left hand grips the serpent tail section and right hand grips the same continuous serpent near its head; both hands are attached, with no extra arm. Bhattathiri’s two hands are joined in prayer with distinct fingers; his seated feet/legs are connected. No visible digit defect.
- **Clothing and cast:** Vishnu’s dhoti and drape and Bhattathiri’s cream dhoti, sacred thread and beads are modest and consistent with the contracts. **Disclosed deviation present:** Vishnu has a tall tiered crown with peacock feather and heavy necklaces, exceeding the modest-ornament contract; visible on his head and torso and explicitly disclosed in the plan (`art/plans/d027.json:653`). No defect counted for this deviation.
- **Text/signature artifacts:** No readable text, signature or watermark visible, including water, shore and corners.
- **Scene and caption fidelity:** Caption/photo `016.jpg` and plan `art/plans/d027.json:615–651`: Vishnu alone resumes churning with two hands on the same Vasuki; fish and two makara-like forms surface before nectar appears; Bhattathiri is a small prayerful witness at the right shore. No second divine tableau is present.
- **Character/deity contract:** Vishnu’s S011 two-arm count and Bhattathiri’s older, clean-shaven prayerful identity meet contract (`scene-contracts.json:16`; `d027-vishnu/character.json:24–30`; `d027-bhattathiri/character.json:12–32`).
- **Verdict: pass.** The disclosed deviation is present.

## Recommendation and captain-call inventory

Recommend holding stanza 9 v002 out of selection until a new candidate depicts Brahma’s required fourth head; this review makes no art-approval decision. Stanzas 7, 8, 10 and 11 pass this exact-checksum visual review. The candidates remain unapproved pending the standing captain art approval. **Captain-call inventory raised by this review: empty.** The missing Brahma head is a review finding with a clear contract requirement, not an unresolved choice for the captain.
