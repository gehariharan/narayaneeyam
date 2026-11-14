# D028 independent landscape candidate review: stanzas 1–5

## Scope and method

I reviewed the five selected landscape candidates individually at their native 1672 × 941 resolution, then enlarged focused crops of faces, limbs, digits, animal anatomy, ritual hand paths, frame edges, and ground/water details. I compared them with the final frozen stanza plans, the mapped intake photographs and supplied captions, and the frozen character contracts listed below. Photos map through `art/plans/d028.json`: S001 → `intake/D028/001.jpg`; S002 → `002.jpg`–`006.jpg`; S003 → `007.jpg`; S004 → `008.jpg`; S005 → `009.jpg`. The supplied caption text is in `OneDrive/Pictures/Narayaneeyam Studio/intake/D028/photo-captions.txt` and is also referenced in `content/daskams/d028.json`.

The review used `sha256sum` on all five candidate files and all frozen contracts, `file` for candidate dimensions, `cat`/`nl -ba`/`rg -n` to read and locate the plan, content, captions and contracts, `magick -crop ... -resize ...` to create focused scratch crops under `/tmp/d028-review-a-crops/`, and direct full-image and crop inspection with `view_image`. All expected candidate and contract hashes matched. Findings below apply only to the candidate checksum shown for that stanza. Review completed at **2026-11-14 00:45 UTC**.

## Frozen contract SHA-256 values read

| Contract | SHA-256 |
|---|---|
| Final plan `art/plans/d028.json` | `53270fe54232866c8f7866e3cbd41b2c2c3596ad33c5adb264c6a2093782e3e9` |
| `airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `asuras/character.json` | `00c00f503c33706c54306461c404e467e54ffcc40266f89190e0376a7d4afded` |
| `devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `dhanvantari/character.json` | `3557d434fe4cdf43000a3ba3605fbb23f6a977adbbfec21a5a59c428e7b7f951` |
| `guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `lakshmi/character.json` | `541fc9d30aed43e142a7bd195b994710bd91d834df484a6b9e4eba2f7c74ef8c` |
| `sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `uchchaihshravas/character.json` | `b80c20b5d4d52bbca4839119616769f86b9d431776e6de54f2e72a955a1c48c7` |
| `varuni/character.json` | `15d582ded2890fede70d1ad79cf5f6d0f5e1d6c0a2de1f9a9477ecdd4e70910f` |

## Image findings

### Stanza 1 — landscape v003

- **Candidate:** `artifacts/d028/s001/landscape/v003/candidate-v003.png`
- **Verified SHA-256:** `fef132dc39aee38e9301127090202433b0226cb3ec70e0828a3f1aff61a6338a`
- **Reviewed:** 2026-11-14 00:45 UTC
- **Anatomy:** Shiva is one full seated figure with one head, two attached arms and two legs. The two distant deva witnesses are distinct two-armed people. No duplicate, fused or detached body parts visible.
- **Faces:** Shiva’s face is calm and coherent, with the planned third-eye mark, crescent and blue throat. Both witness faces are legible and undistorted.
- **Hands/feet:** Enlarged Shiva crop (`s001-left.png`) shows a natural cup grip and resting hand, with separated finger contours and no extra/fused digits apparent. Both visible feet are complete; five toe contours are visible on each. Witness hands are joined in prayer at distance; no malformed silhouette apparent.
- **Clothing and cast:** Opaque cream/ochre wrap and orange shoulder cloth cover the seated figure appropriately. Cast is limited to Shiva and two distant praying devas. The cobra and neck ornament read as ordinary Shiva iconography.
- **Text/signature artifacts:** No readable text, signature, watermark, or suspicious mark seen in sky, waves, ground, or corners.
- **Scene and caption fidelity:** Shiva drinks from a small conch cup beside the ocean, with a dark poison cloud overhead and two distant praying devas to the right. This matches the S001 brief and photo 001 caption. The reference is a close poison-drinking icon, so the expanded shore setting is a planned narrative composition.
- **Character/deity contract:** The D028 scene brief calls for a single-faced, two-armed ascetic form; the image follows that form, with ash-grey skin, blue throat, matted hair and crescent. The frozen Shiva contract describes a different D033 meditating scene (contract lines 7–20); its two-arm/one-head anatomy requirement is also met here. No disallowed glossy or reflective treatment is visible.
- **Verdict: pass.**

Plan evidence: `art/plans/d028.json` lines 22–57; caption evidence: `photo-captions.txt` lines 1–5 and `content/daskams/d028.json` lines 17–23. Character evidence: `shiva/character.json` lines 7–21 and `devas/character.json` lines 5–20.

### Stanza 2 — landscape v002

- **Candidate:** `artifacts/d028/s002/landscape/v002/candidate.png`
- **Verified SHA-256:** `3b7127f4f1320b2d9efe9c60b6e336aec0cbc7802fcaafc01aadaeb0214b0de9`
- **Reviewed:** 2026-11-14 00:45 UTC
- **Anatomy:** The enlarged horse crop shows exactly seven distinct horse heads on one body; four legs are attached and visible, including the raised foreleg. Surabhi is a single bovine-headed, four-legged cow with two horns and one tail. Airavata has one head/trunk and four attached legs. No fused animal bodies or duplicate people are apparent.
- **Faces:** The seven horse faces are individually separated and readable; cow and elephant faces are coherent. The two sages and two apsaras have distinct, undistorted faces.
- **Hands/feet:** The sages’ prayer hands and apsaras’ gestures are small but visibly attached and not malformed. The two apsaras each have two arms and two legs; the sages’ feet and the animals’ hooves remain inside frame. The elephant crop shows four distinct tusks rooted at the mouth in two pairs. No obvious digit, hoof or limb error is visible in the enlarged details.
- **Clothing and cast:** Two sages wear simple ascetic cloth; the two apsaras wear opaque modest saris with no wings or sexualized posing. The cow has no human face or wings. Animal ornaments are decorative coverings, not anatomy. All required treasures—cow, seven-headed horse, four-tusked elephant, wish-tree, and two apsaras—are separately readable.
- **Text/signature artifacts:** No readable text, watermark or signature in the candidate, including shore and water. The caption’s source images contain third-party marks, but none were copied into the candidate.
- **Scene and caption fidelity:** The spacious left-to-right treasure frieze corresponds to plan S002 and caption 006. Source photos 002–006 are composite or subject references; the candidate uses their subject cues without the human-faced cow, wings, labels, or crowded churning scene.
- **Character/deity contract:** Surabhi’s single bovine head/four legs, Uchchaihshravas’ seven heads/four legs, Airavata’s four tusks/four legs, and the two modest two-armed apsaras conform to their frozen contracts. The tree is clearly present. No contract-breaking anatomy is apparent.
- **Verdict: pass.**

Plan evidence: `art/plans/d028.json` lines 71–121; caption evidence: `photo-captions.txt` lines 7–33 and `content/daskams/d028.json` lines 27–33. Character evidence: `surabhi/character.json` lines 5–20; `uchchaihshravas/character.json` lines 5–20; `airavata/character.json` lines 5–20; `apsaras/character.json` lines 5–20; `sages/character.json` lines 5–20.

### Stanza 3 — landscape v002

- **Candidate:** `artifacts/d028/s003/landscape/v002/candidate.png`
- **Verified SHA-256:** `1956983159c5db8398c9bdb5c7ae2f3591f3b047bae309e41db0b43d304fa089`
- **Reviewed:** 2026-11-14 00:45 UTC
- **Anatomy:** Lakshmi has one head, two naturally attached arms and no visible body fusion. The two distant witnesses are separate two-armed figures. No duplicate people or malformed limbs apparent.
- **Faces:** Lakshmi has a serene adult face, small red bindi and arranged dark hair with jasmine. Both witness faces are coherent at their displayed scale.
- **Hands/feet:** Enlarged crop of Lakshmi’s upper body shows a five-digit open blessing hand and a natural lotus-holding hand, with clear wrists and no extra limbs. Her lower legs/feet are concealed by the lotus and waves as part of the planned emergence, not cut off by the frame. Witness limbs are complete.
- **Clothing and cast:** The maroon sari and muted green blouse are opaque and modest. Only Lakshmi and two distant devas appear. **Needs-fix finding:** the large, densely tiered crown and heavy multi-layer necklaces, belt, armlets and shoulder ornaments in approximately **x=650–1040, y=0–700** are conspicuously palace-like. This is visible at full-frame scale and exceeds the S003 brief’s “modest ochre crown” and “restrained painted ornament,” as well as the Lakshmi contract’s proportionate crown and restrained jewelry (lines 21–23, 30). It is a scene/continuity mismatch, not an anatomy defect.
- **Text/signature artifacts:** No text, signature, watermark, or accidental marks seen in the water, lotus, land, or corners.
- **Scene and caption fidelity:** Lakshmi rises centrally on a single pink lotus above open water, holding a lotus and blessing, with two separated shore witnesses. This follows the S003 scene brief and photo 007’s emergence subject cue; the source image’s extra arms and iconography are not copied.
- **Character/deity contract:** Two-arm narrative form, golden-brown skin, bindi, jasmine, maroon sari, green blouse and lotus/blessing gestures match the plan. The crown/jewelry excess is the sole clear contract/plan defect.
- **Verdict: needs-fix.**

Plan evidence: `art/plans/d028.json` lines 127–171; caption evidence: `photo-captions.txt` lines 35–40 and `content/daskams/d028.json` lines 37–43. Character evidence: `lakshmi/character.json` lines 17–33.

### Stanza 4 — landscape v001

- **Candidate:** `artifacts/d028/s004/landscape/v001/candidate.png`
- **Verified SHA-256:** `457a723c1cf9e9f699559c685caf781b2aa97d7977eb86bdc0911e24580c0deb`
- **Reviewed:** 2026-11-14 00:45 UTC
- **Anatomy:** Lakshmi, Indra and both sages each have one head and two attached arms. The right sage’s face is fully inside the frame; his outer body/arm continues naturally to the mural edge. No duplicated figures, fused limbs or malformed face apparent.
- **Faces:** Lakshmi, Indra and both sages have coherent, distinct faces. Sages’ hair/beards are distinguishable.
- **Hands/feet:** Indra’s two arms extend toward the low seat with separate palms; Lakshmi’s two hands rest together in her lap. Each sage has readable attached arms and a clear ritual-vessel hand path. Visible feet are inside frame, with separated toe contours and no obvious digit defect. The far-right sage’s peripheral limb meets the edge naturally; no face or key extremity is cut off.
- **Clothing and cast:** Lakshmi’s sari/blouse are opaque and modest. **Needs-fix findings:** (1) Indra occupies approximately **x=0–560, y=170–920** and wears a bright red/maroon shawl, an ornate tall gold crown, and conspicuous layered jewelry rather than the contract’s modest ochre crown, cream dhoti and muted saffron shawl. This large foreground mismatch is readily noticeable. (2) Lakshmi’s crown and dense layered jewelry at approximately **x=650–1080, y=100–560** also read as lavish palace regalia, beyond the restrained character contract and clearly more ornate than the S005 Lakshmi depiction. No sexualized framing or exposed skin beyond ordinary traditional dress.
- **Text/signature artifacts:** No readable mantra, text, signature, watermark or stray mark seen in background, ground, water or corners.
- **Scene and caption fidelity:** Lakshmi sits centrally on a low jewel-set seat, Indra presents it from the left, and two sages consecrate her with vessels to the right. This matches plan S004 and caption/photo 008’s throne and consecration action; the crowded deva source image is not copied.
- **Character/deity contract:** Lakshmi’s two-arm narrative identity and maroon/green clothing, plus the two distinct sages, are present. The cited Indra outfit/crown and Lakshmi regalia exceed explicit frozen character limits. The seat is low and intimate as planned; hands and props have distinct ownership.
- **Verdict: needs-fix.**

Plan evidence: `art/plans/d028.json` lines 177–222; caption evidence: `photo-captions.txt` lines 42–47 and `content/daskams/d028.json` lines 47–53. Character evidence: `indra/character.json` lines 5–20; `lakshmi/character.json` lines 17–33; `sages/character.json` lines 5–20.

### Stanza 5 — landscape v002

- **Candidate:** `artifacts/d028/s005/landscape/v002/candidate.png`
- **Verified SHA-256:** `2a51f55e8a822e0d843cc5a2961077c789a50a41f83da8fb4c6050763b4afab6`
- **Reviewed:** 2026-11-14 00:45 UTC
- **Anatomy:** Lakshmi is one full seated figure with two attached arms. The two sages are distinct, with separate arms and bodies; the secondary deva is also distinct. No accidental duplicate, fused body or malformed limb apparent.
- **Faces:** Lakshmi’s face is serene and coherent; both sage faces and the secondary deva’s face are distinct and readable.
- **Hands/feet:** Lakshmi’s joined lap hands have clean outlines and no fused/extra digits apparent. Both sages hold separate pots with clear hands and wrist connections; the two water streams terminate at the crown rather than crossing faces or hands. The deva’s tray is supported by attached hands. Lakshmi’s feet are fully inside frame with five toe contours on each; sages’ feet are visible and undistorted.
- **Clothing and cast:** Lakshmi wears the canonical opaque yellow sari with muted green blouse; crown and earrings/necklaces are present without the conspicuous excess identified in S003/S004. Two sages wear modest ascetic cloth; one deva presents an ornament on a tray. No sexualized styling.
- **Text/signature artifacts:** No readable text, signature, watermark or stray mark seen in leaves, ground, vessels, water or corners.
- **Scene and caption fidelity:** Two sages pour holy water over seated Lakshmi; a separate deva offers an ornament on a tray. The lotus seat and ritual vessels are present. This matches the S005 brief and photo 009 caption. The four-armed static reference is not copied; only the yellow garment and jewelry cues are used.
- **Character/deity contract:** Lakshmi retains the established two-arm face/hair identity and planned yellow garment, green blouse and modest adornment. Sage count, dress and limbs match the contract. Water paths and prop ownership are clear.
- **Verdict: pass.**

Plan evidence: `art/plans/d028.json` lines 228–273; caption evidence: `photo-captions.txt` lines 44–47 and `content/daskams/d028.json` lines 57–63. Character evidence: `lakshmi/character.json` lines 17–33; `sages/character.json` lines 5–20; `devas/character.json` lines 5–20.

## Recommendation and captain-call inventory

Pass S001, S002 and S005 at their exact hashes. Request new, versioned candidates for S003 and S004 that keep Lakshmi’s crown and jewelry modest and bring Indra’s crown and dress back to his specified muted, modest contract. Do not treat either needs-fix image as passed, and do not overwrite these candidates. This review makes no approval decision and raises no unresolved captain choice; the pending captain art approval remains the standing state. **Captain-call inventory for this review: empty.**
