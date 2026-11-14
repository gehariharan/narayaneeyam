# D027 landscape candidate visual review

Review scope: independent exact-checksum review of the selected landscape candidates for dasakam 27, stanzas 7–11. I inspected each full 16:9 PNG at native resolution, then inspected scratch crops made from the source images under `/tmp/d027-review-k/`. The scratch crops were not written in the producer worktree. I also viewed the stanza-mapped reference photographs and read their captions, the stanza entries in `content/daskams/d027.json`, the frozen final plan, and the frozen character/series contracts. I did not read any prior review record or producer notes.

Reference mapping: plan `reference_paths` maps S007–S011 respectively to `intake/D027/012.jpg` through `016.jpg`; the supplied captions at `OneDrive/Pictures/Narayaneeyam Studio/intake/D027/photo-captions.txt` identify the corresponding Kurma/Mandara, renewed churning, praise, poison/selective rain, and two-handed churning scenes. The review respects the plan’s single-moment mural compositions rather than copying incidental details from the source images.

## Contract byte checks

All listed actual SHA-256 values matched the expected values supplied in the task. These are the exact contract bytes reviewed:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d027.json` (final frozen plan) | `2872dc21fb5b78fcae48cb2806273f2cac50cadb4ecbbf6d728e85bceb5550ce` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d027-cast-contract.json` | `6c16be532562c27aa755057f52a9a91ed96b1b38120e817431a3ebac409a84ba` |
| `art/bible/characters/durvasa/character.json` | `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab` |
| `art/bible/characters/indra/character.json` | `79673700165a403b64babad8f47e11218b06911b64eb1686ff1a1f8a14bf5831` |
| `art/bible/characters/airavata/character.json` | `8f1a1ed0b879d49c6467f12b271d7633a6e2055c97bc5b3ba516c747f53a8496` |
| `art/bible/characters/vishnu/character.json` | `b12934f8ab07bf3378b90ea256a6074a771d5edb22b9d36565d44bdb41441111` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/devas/character.json` | `549a36458ed305cd2fa0f1f7c41c087bae53bbe7ac44ee425ab2654d6a901a1a` |
| `art/bible/characters/garuda/character.json` | `8f8418c3fbaf8857bcdc8912fa80e47dbdfac66cc156cd20ed87e7eba8d0ecce` |
| `art/bible/characters/asuras/character.json` | `0bbc62b39d78299add49f9e3e1d26f969a4ca79de4cdc6698e3c53c8e7c6d96d` |
| `art/bible/characters/vasuki/character.json` | `4e2745074230f7cf5317609857a7aaa0d84085e02e1ed491bda5ff1ada830fc1` |
| `art/bible/characters/kurma/character.json` | `e672aae1d68282614afb4ab5c73ab86d1f62c736a1b30a9d9eb51f8647926094` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

## Candidate findings

### S007 — candidate v003

- Image: `artifacts/d027/s007/landscape/candidate-v003.png`; 1672 × 941 px.
- Verified SHA-256: `787970f9986348bd1456530479d308197051e8ebf30f0abce0edccbf0abe6f18`.
- Reviewed: 2026-11-14 06:46:20 UTC.
- Anatomy: Kurma is a complete tortoise, not anthropomorphic. One head, one shell, four attached legs and a short tail are visible. No human limbs, extra legs, detached shell, or duplicated creature is visible.
- Faces: The tortoise’s single eye and muzzle are coherent in the close crop; no malformed face is visible.
- Hands/feet: No hands are present. All four feet are visible in the lower image region (approximately x=120–1505, y=690–885); each has a readable set of claws. No missing or fused digits are visible.
- Clothing and cast: Kurma is the sole living figure, so clothing is not applicable. No unrelated figure appears.
- Text/signature artifacts: No readable text, signature, or watermark is visible; I checked the sky, water, shell, and corners.
- Scene and caption fidelity: The large shell visibly carries the mountain’s base; the mountain rises above the ocean surface and the tortoise body remains submerged. This matches caption 012 and the S007 plan. Its grand scale is conveyed without an extra narrative panel.
- Character/deity contract: Kurma’s anatomy and role match the explicit complete-tortoise contract. Palette and outlined mural treatment are consistent with the series plan.
- **Verdict: pass.**

### S008 — candidate v005

- Image: `artifacts/d027/s008/landscape/candidate-v005.png`; 1671 × 941 px.
- Verified SHA-256: `adfe17df7e67ce6a8cfda983e9d3abadc334677ff57f7e5a4b470e888da02dc1`.
- Reviewed: 2026-11-14 06:46:20 UTC.
- Anatomy: Four churning figures are shown as distinct humanoids. Their torsos and visible arm/leg joints remain connected; no clone, fused body, or extra limb is apparent. Vasuki is depicted as one continuous serpent with one head at the left and a tapering tail at the right.
- Faces: All four faces are distinct and legible in the full image and head crops. The serpent has one coherent face/head.
- Hands/feet: Each figure grips the rope with attached hands; the grip crops show distinct fingers without a conspicuous digit error. Visible feet at the lower edge have natural toe groupings and remain inside the frame. No limb is cut at a joint.
- Clothing and cast: The left pair wear muted maroon/olive wraps and the right pair cream/saffron wraps, making the asura/deva sides legible. Bare torsos are ordinary traditional mural dress. No sexualised framing or exposed skin beyond that dress is present.
- Text/signature artifacts: No readable text, signature, or watermark is visible in the sky, water, and corners.
- Scene and caption fidelity: Mandara is central and wrapped by the single serpent; the asuras hold the head end at left and the devas hold the tail at right. Both groups visibly resume churning. A warm shared glow sits behind the mountain. This corresponds to caption 013 and the S008 plan. The serpent’s orange/cream scales are an observable palette variation from the Vasuki bible’s muted olive/cream/earth-blue description; the contract does not make that palette a structural prohibition, and it does not obscure the required continuity or end assignments.
- Character/deity contract: There is no second Vishnu figure; the sustaining presence is represented by the restrained glow as required. Vasuki is a single connected body, not an Adishesha couch/canopy.
- **Verdict: pass.**

### S009 — candidate v002

- Image: `artifacts/d027/s009/landscape/candidate-v002.png`; 1672 × 941 px.
- Verified SHA-256: `8ce57af6c8c18bc4afd3b77fa3f3200965441c7cf2db898f08ffb16411f23a7a`.
- Reviewed: 2026-11-14 06:46:20 UTC.
- Anatomy: Vishnu has four visibly attached arms. Brahma is seated with three distinct front-visible faces and four attached arms; no merged or duplicated face is visible. Shiva is a single figure in prayer. The smaller devas remain distinct, with no obvious duplicate people or fused bodies.
- Faces: Vishnu’s face is proportionate and coherent. Brahma’s three visible faces are individually formed; the fourth head is not front-visible, consistent with the contract’s rear-facing fourth head. Shiva and the surrounding faces are coherent at the inspected scale.
- Hands/feet: Vishnu’s four arms terminate in distinct hands holding the attributes or lotus; the lotus hand visibly steadies Mandara. Brahma’s four hands are distinct around the scripture, lotus, pot, and beads. Shiva’s joined hands form one readable prayer gesture. Vishnu’s feet are fully inside the lower frame with toes visible. No conspicuous extra/missing/fused digits are visible in the inspected hands and feet.
- Clothing and cast: The figures wear traditional robes and sacred ornaments. At Vishnu’s head and torso (roughly x=430–770, y=15–730), the tall tiered crown, peacock feather, and multiple necklaces exceed the modest-ornament contract. This is the plan’s disclosed residual deviation. It is ordinary temple-mural iconography and is not independently failed. Other garments are modest and no sexualised framing is present.
- Text/signature artifacts: No readable text, signature, or watermark is visible; I checked the decorative frame, ground, water, and corners. Brahma’s held manuscript appears blank, without legible writing.
- Scene and caption fidelity: Vishnu stands beside the rising, spinning Mandara and steadies it with the lotus hand; Brahma, Shiva, and a compact divine group praise him amid a light flower shower. The composition corresponds to caption 014 and the S009 plan.
- Character/deity contract: Vishnu’s deep blue identity and four-arm form are correct. Brahma’s visible heads and four-arm depiction satisfy the scene-specific contract. The only identified contract deviation is the ornamentation already disclosed in `candidate_status`.
- Disclosed deviation present. **Verdict: pass.**

### S010 — candidate v008

- Image: `artifacts/d027/s010/landscape/candidate-v008.png`; 1671 × 941 px.
- Verified SHA-256: `db52901c18f32f775207ac50e3883f8d35d24a519036f189b148233dc0e4b37d`.
- Reviewed: 2026-11-14 06:46:20 UTC.
- Anatomy: Two devas at left and two asuras at right have distinct, naturally proportioned bodies. Their visible arms and legs remain attached; no duplicated figure, fused body, or extra limb is visible. Vasuki has one head and one continuous body wrapped around Mandara.
- Faces: All four humanoid faces are distinct and readable. Vasuki’s single head and mouth are coherent; the fumes visibly originate at that mouth.
- Hands/feet: The visible hands grasp the serpent with attached fingers; the close crop shows no conspicuous digit error. The legs and feet are naturally jointed; the far-right asura’s foot continues off the right mural edge in a natural peripheral pose. No face or key extremity is cut off.
- Clothing and cast: Devas and asuras are differentiated by position and cream/olive versus muted maroon garments. Bare torsos are ordinary traditional dress. No sexualised framing is present.
- Text/signature artifacts: No readable text, signature, or watermark is visible in the clouds, ground, water, or corners.
- Scene and caption fidelity: Poison fumes drift from Vasuki’s head toward the asuras, and a cloud rains only over the devas at left; the asura side remains dry. This matches caption 015 and the S010 plan. The smoke is muted rather than horror-like.
- Character/deity contract: One connected serpent body and one head are present. No Vishnu figure is added. The rain/fume separation follows the scene’s explicit requirements.
- **Verdict: pass.**

### S011 — candidate v002

- Image: `artifacts/d027/s011/landscape/candidate-v002.png`; 1672 × 941 px.
- Verified SHA-256: `50f2e4ea5f0188a0446547f496fb7cbc8154644b65003e36840c54f29958b54d`.
- Reviewed: 2026-11-14 06:46:20 UTC.
- Anatomy: Vishnu has exactly two attached arms, each extending to a hand gripping a different portion of the same continuous Vasuki. No additional arm is visible. Bhattathiri is one seated figure with connected limbs; no duplicate person is visible. The surfaced fish and makara forms are decorative creatures with coherent bodies.
- Faces: Vishnu’s face and Bhattathiri’s older face are coherent. Bhattathiri is clean-shaven. No malformed or duplicated face is apparent.
- Hands/feet: Vishnu’s left hand (approximately x=175–245, y=445–540) and right hand (x=900–995, y=320–405) visibly grip the serpent; both have attached fingers without a conspicuous digit defect. Bhattathiri’s joined hands form a coherent prayer gesture; his feet are covered by his seated pose and garment, with no malformed extremity visible.
- Clothing and cast: Vishnu wears a tall tiered crown with a peacock feather and heavy necklaces (approximately x=430–750, y=5–440), exceeding the modest-ornament contract. This is the plan’s disclosed residual deviation. It is ordinary temple-mural iconography and is not independently failed. Bhattathiri wears a cream dhoti and restrained beads, is older and clean-shaven, and has no beard, moustache, crown, or ornate jewelry.
- Text/signature artifacts: No readable text, signature, or watermark is visible in the sky, water, ground, or corners.
- Scene and caption fidelity: Vishnu alone resumes churning with both hands on Vasuki; aquatic creatures surface from the ocean, and no nectar is shown. Bhattathiri kneels in prayer at the right foreground and remains secondary. The scene corresponds to caption 016 and the S011 plan.
- Character/deity contract: Vishnu’s explicit two-arm/two-hand stanza form is satisfied; the continuous serpent is not duplicated. Bhattathiri’s clean-shaven identity and modest devotee dress match his contract. The only identified contract deviation is the ornamentation already disclosed in `candidate_status`.
- Disclosed deviation present. **Verdict: pass.**

## Evidence and completion

Commands used for integrity and dimensions included `sha256sum` on all frozen contracts and candidates, and ImageMagick `identify` on all five candidates (1671–1672 × 941 px). I viewed each native image with `view_image`, made pixel crops from the read-only producer images into `/tmp/d027-review-k/` using ImageMagick, and viewed those crops. I re-ran `sha256sum` on all five producer candidates after inspection; all end hashes still match the expected values listed above. The review verdicts apply only to those exact bytes.

Captain-call inventory: empty. The standing pending captain art approval is not a decision raised by this independent review. No project file or approval manifest was changed.
