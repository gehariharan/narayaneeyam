# D027 landscape independent visual review: stanzas 7–11

## Scope and method

I independently reviewed each selected landscape candidate at native resolution and inspected enlarged crops of figures, faces, hands, feet, creature anatomy, and corners. Each candidate is **1672 × 941 px**. Stanza-to-photo mapping came from the frozen plan's `reference_paths`, the stanza `commentary_source` in `content/daskams/d027.json`, and the corresponding caption. The reference pairs were **012.jpg / #7**, **013.jpg / #8**, **014.jpg / #9**, **015.jpg / #10**, and **016.jpg / #11**. I compared the complete scenes with the final plan and frozen character contracts.

Commands used: Python 3 `hashlib.sha256` byte hashes for the five candidates and all listed contracts; `magick identify` for dimensions; ImageMagick `magick ... -crop ...` for local focused views. I viewed each complete candidate and reference, plus the focused candidate crops. Every expected candidate and contract hash matched before inspection. The checksums below bind verdicts to the exact reviewed bytes.

**Visual inspection completed:** 2026-11-14T00:53:55Z (UTC).

## Frozen contract checksums actually read

Every actual SHA-256 matched the expected frozen value.

| Contract | SHA-256 |
|---|---|
| Final plan `art/plans/d027.json` | `3612e2764450517f2e83ab6896cb084b0a3753886cff527fc7e42990aba862b7` |
| Series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Cast `art/bible/characters/d027-cast-contract.json` | `6c16be532562c27aa755057f52a9a91ed96b1b38120e817431a3ebac409a84ba` |
| Durvasa `art/bible/characters/durvasa/character.json` | `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab` |
| Indra `art/bible/characters/indra/character.json` | `79673700165a403b64babad8f47e11218b06911b64eb1686ff1a1f8a14bf5831` |
| Airavata `art/bible/characters/airavata/character.json` | `8f1a1ed0b879d49c6467f12b271d7633a6e2055c97bc5b3ba516c747f53a8496` |
| Vishnu `art/bible/characters/vishnu/character.json` | `b12934f8ab07bf3378b90ea256a6074a771d5edb22b9d36565d44bdb41441111` |
| Brahma `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Shiva `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| Devas `art/bible/characters/devas/character.json` | `549a36458ed305cd2fa0f1f7c41c087bae53bbe7ac44ee425ab2654d6a901a1a` |
| Garuda `art/bible/characters/garuda/character.json` | `8f8418c3fbaf8857bcdc8912fa80e47dbdfac66cc156cd20ed87e7eba8d0ecce` |
| Asuras `art/bible/characters/asuras/character.json` | `0bbc62b39d78299add49f9e3e1d26f969a4ca79de4cdc6698e3c53c8e7c6d96d` |
| Vasuki `art/bible/characters/vasuki/character.json` | `4e2745074230f7cf5317609857a7aaa0d84085e02e1ed491bda5ff1ada830fc1` |
| Kurma `art/bible/characters/kurma/character.json` | `e672aae1d68282614afb4ab5c73ab86d1f62c736a1b30a9d9eb51f8647926094` |
| Bhattathiri `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

## Candidate reviews

### Stanza 7 — landscape v003

- **Candidate:** `artifacts/d027/s007/landscape/candidate-v003.png`
- **SHA-256:** `787970f9986348bd1456530479d308197051e8ebf30f0abce0edccbf0abe6f18`
- **Reference:** `intake/D027/012.jpg`, caption #7.
- **Anatomy:** Kurma has one natural head and a coherent fully tortoise body. Four attached legs and four feet are visible. The short claw tips remain separated where visible; no extra/missing leg or malformed body part is apparent.
- **Faces:** The tortoise face is intact, with one eye and a natural mouth; no malformed or duplicate face.
- **Hands/feet:** No hands. Four attached feet have visible claws. Waves partly cover the lower feet but do not cut off a key extremity; no malformed digit is apparent.
- **Clothing and cast:** No human cast or clothing; no exposed or sexualized figure.
- **Text/signature artifacts:** No readable text, signature, logo or watermark in the full image, water, ground or corners.
- **Scene and caption fidelity:** Mandara rests on Kurma's broad shell beneath the ocean surface, matching the caption's mountain lifted on the tortoise's back. Layering reads clearly.
- **Character/deity contract:** Complete tortoise form, broad hard shell, four legs, partly submerged support; mountain directly supported by shell. Frozen plan stanza 7, lines 356–368; Kurma contract lines 18–27.
- **Verdict: pass.**

### Stanza 8 — landscape v004

- **Candidate:** `artifacts/d027/s008/landscape/candidate-v004.png`
- **SHA-256:** `340f96cb88f1770d7ba9c11ce3c8a8cd43edc8d15624b811d6ac0ec6f515daf6`
- **Reference:** `intake/D027/013.jpg`, caption #8.
- **Anatomy:** Four distinct humanoids each have one head, two arms and two legs. No fused bodies or extra/missing limbs. Vasuki is one continuous serpent with one head at the asura/left end and a tapering tail at the deva/right end.
- **Faces:** All four are intact. The asuras share moustaches and tied hair but differ visibly in face, skin tone and clothing; they do not read as duplicate copies in the enlarged crop.
- **Hands/feet:** Eight hands total, two attached per figure, grasp the serpent. Fingers appear as separated short curves around the grips, with natural overlap where they wrap the body; no obvious fused/extra digit. All four pairs of feet are in frame; toes are simplified, with no visible malformed or extra toes.
- **Clothing and cast:** Devas and asuras are distinguishable by position and muted clothing. Bare male torsos with dhotis are ordinary traditional dress; no sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo or watermark, including water and corners.
- **Scene and caption fidelity:** Both groups pull around raised Mandara; serpent-end assignment and one wrapped serpent are legible. Understated shared glow reaches both groups without a second Vishnu figure, matching caption #8.
- **Character/deity contract:** Group anatomy and distinct faces comply; one continuous Vasuki with correct head/tail sides. No duplicate Vishnu, cloned crowd, broken serpent or extra arms. Frozen plan stanza 8, lines 390–418; Vasuki lines 18–25; devas lines 18–25; asuras lines 18–25.
- **Verdict: pass.**

### Stanza 9 — landscape v002

- **Candidate:** `artifacts/d027/s009/landscape/candidate-v002.png`
- **SHA-256:** `8ce57af6c8c18bc4afd3b77fa3f3200965441c7cf2db898f08ffb16411f23a7a`
- **Reference:** `intake/D027/014.jpg`, caption #9.
- **Anatomy:** Vishnu has four attached arms; Brahma four attached arms; Shiva is single-headed and two-armed. Other visible devas have ordinary two-arm/two-leg forms. No fused bodies or malformed anatomy.
- **Faces:** Vishnu's face is intact. Brahma has three distinct front-visible faces, consistent with four total heads and the fourth turned behind. Shiva and the devas have intact faces; no accidental duplicates.
- **Hands/feet:** Vishnu's four hands are distinct and attached, including the lotus hand at Mandara. Brahma's four hands each hold a distinct object. Shiva's joined prayer hands are intentional namaste. Devas' hands are attached and readable. Visible feet are intact; no obvious malformed digits.
- **Clothing and cast:** Traditional cream, saffron and muted colors; no sexualized framing. **Defect:** Vishnu's crown at approximately **x=340–620, y=0–230 px**, especially its stacked jewel-like tiers and large peacock feather, is conspicuously elaborate. Multiple heavy necklaces and garlands continue down the torso. This prominent focal ornament exceeds the contract's expressly restrained crown/diadem and sacred ornament, reading as palace-like regalia.
- **Text/signature artifacts:** Marks on Brahma's palm-leaf object are not readable writing. No readable text, signature, logo or watermark elsewhere, including water and corners.
- **Scene and caption fidelity:** Vishnu steadies the rising mountain with the lotus hand; Brahma, Shiva and a compact group praise him amid falling flowers. Scene matches plan and caption. Peripheral figures touch the right edge, but faces and key extremities remain inside frame.
- **Character/deity contract:** Brahma's intentional multi-headed form and arm count meet contract. Vishnu has four arms, but the stated ornament is not restrained (Vishnu contract lines 19–25). Frozen plan stanza 9, lines 440–469.
- **Verdict: needs-fix.** The crown/ornament defect is visible at full-image scale; the coordinates identify its enlarged region.

### Stanza 10 — landscape v006

- **Candidate:** `artifacts/d027/s010/landscape/candidate-v006.png`
- **SHA-256:** `4e73e13bbc96505b19fbe02be077641ae08230acb9c692ea6d12cf25a74a037b`
- **Reference:** `intake/D027/015.jpg`, caption #10.
- **Anatomy:** Four humanoids each show two arms/hands and two legs/feet; no extra or missing limb apparent. Vasuki is one continuous body with a single head on the asura side and tail on the deva side.
- **Faces:** **Defect:** The two asuras at right repeat near-identical curly hair, moustache, expression and head angle. The two devas at left also repeat near-identical hair, face shape and profile. At full-image scale they read as two copied pairs rather than a distinct small cast. Regions: left group **x=0–430, y=285–790 px**; right group **x=1120–1670, y=280–800 px**. This is a visible human duplication defect.
- **Hands/feet:** Eight hands total, two attached per figure, grasp the serpent. Fingers partly wrap around the body but remain separated; no extra or fused digit visible. Each figure has two attached feet in frame; toes are simplified and not malformed.
- **Clothing and cast:** Devas at left wear cream/olive and are under rain; asuras at right wear muted maroon and remain dry under fumes. Bare torsos with dhotis are ordinary traditional dress. The repeated face/body designs conflict with both group contracts' distinct-face/no-clone requirement.
- **Text/signature artifacts:** No readable text, signature, logo or watermark, including water, ground and corners.
- **Scene and caption fidelity:** Fumes drift from Vasuki's head toward asuras; rain falls only on devas. Matches caption #10 and the selective-rain plan.
- **Character/deity contract:** Serpent continuity, head placement and selective rain comply; the repeated pairs violate the plan's no-duplicated-people rule and both group contracts. Frozen plan stanza 10, lines 491–517; devas lines 18–25; asuras lines 18–25.
- **Verdict: needs-fix.** The repeated pairs are visible in the cited regions at full-image scale.

### Stanza 11 — landscape v002

- **Candidate:** `artifacts/d027/s011/landscape/candidate-v002.png`
- **SHA-256:** `50f2e4ea5f0188a0446547f496fb7cbc8154644b65003e36840c54f29958b54d`
- **Reference:** `intake/D027/016.jpg`, caption #11.
- **Anatomy:** Vishnu has exactly two attached arms and hands. Bhattathiri has an intact slender body in a kneeling prayer pose. Vasuki is one continuous body with one head and tail. Visible fish and makara forms have coherent bodies; no extra/fused limb apparent.
- **Faces:** Vishnu's face is intact. Bhattathiri appears older and clean-shaven, with lined face and forehead marks. Aquatic creature heads are intact. No duplicate person or malformed face.
- **Hands/feet:** Vishnu's two hands grip opposite portions of the same serpent around Mandara; fingers are partly hidden by coils, with no extra or fused digit apparent. Bhattathiri's joined prayer hands are attached and readable. Folded legs and feet are under his dhoti; no malformed toes visible.
- **Clothing and cast:** Bhattathiri wears a simple cream dhoti and modest beads, without beard, moustache, crown or ornate jewelry. Vishnu's costume is modest and traditional. **Defect:** Vishnu's crown at approximately **x=450–650, y=0–180 px** is tall, tiered and jewel-like, topped by a large peacock feather; prominent necklaces and gold ornaments add to an elaborate palace-regalia appearance, beyond the contract's restrained crown/diadem and sacred ornament (Vishnu contract lines 21–24).
- **Text/signature artifacts:** No readable text, signature, logo or watermark in the full image, water, shore or corners.
- **Scene and caption fidelity:** Fish and makara shapes surface in the ocean and no nectar appears. Vishnu resumes churning; Bhattathiri is an unobtrusive prayerful witness on the right shore. Matches caption and plan.
- **Character/deity contract:** Vishnu uses exactly two arms; Bhattathiri matches the older clean-shaven identity and modest clothing; Vasuki remains continuous. Vishnu's ornament conflicts with the restrained direction. Frozen plan stanza 11, lines 557–585; Vishnu lines 19–25; Bhattathiri lines 16–32; Vasuki lines 18–25.
- **Verdict: needs-fix.** The crown/ornament defect is visible at full-image scale; coordinates identify its enlarged region.

## Recommendation and captain-call inventory

Stanzas 7 and 8 pass. Stanzas 9, 10 and 11 need fixes for the image-specific defects above; do not treat those images as cleared for publication. Each verdict applies only to the listed checksum. This review does not approve the art or update any approval manifest.

The pending captain art approval is the existing standing state. This review raises no new captain decision; my captain-call inventory is empty.
