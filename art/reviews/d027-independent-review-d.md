# D027 landscape visual review: stanzas 7–11

## Scope and method

I independently inspected the five selected landscape candidates at their full 1672 × 941 native resolution and in enlarged crops covering the characters, hands, feet, serpent, and scene details. I compared each one with its mapped lead reference photo, its stanza entry in the frozen final plan, the series bible, and the applicable character contracts. Reference mapping is from `content/sources/d027/reference-map.json`; stanza captions are from `intake/D027/photo-captions.txt` and `content/daskams/d027.json`.

Review completed at **2026-11-14T01:35:37Z**. Results bind only to the candidate SHA-256 listed for each image below. I did not read existing D027 review records or producer notes. No image or approval manifest was changed. Enlarged inspection crops were temporary files in the worktree and were removed after inspection.

### Contract byte checks

I ran `sha256sum` on each candidate and each frozen contract file before reading them. Every actual hash matched the expected hash in the task brief. These are the actual hashes of the bytes reviewed:

| Contract file | SHA-256 |
|---|---|
| Frozen final plan `data/d027-production/review-contract-c/d/art/plans/d027.json` | `1916d7fa8441ddbace6956f7bd4f8b0672e2792803db399206cf21ce82c20dd3` |
| Frozen series bible `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| D027 cast contract `.../art/bible/characters/d027-cast-contract.json` | `6c16be532562c27aa755057f52a9a91ed96b1b38120e817431a3ebac409a84ba` |
| Durvasa contract `.../characters/durvasa/character.json` | `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab` |
| Indra contract `.../characters/indra/character.json` | `79673700165a403b64babad8f47e11218b06911b64eb1686ff1a1f8a14bf5831` |
| Airavata contract `.../characters/airavata/character.json` | `8f1a1ed0b879d49c6467f12b271d7633a6e2055c97bc5b3ba516c747f53a8496` |
| Vishnu contract `.../characters/vishnu/character.json` | `b12934f8ab07bf3378b90ea256a6074a771d5edb22b9d36565d44bdb41441111` |
| Brahma contract `.../characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Shiva contract `.../characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| Devas contract `.../characters/devas/character.json` | `549a36458ed305cd2fa0f1f7c41c087bae53bbe7ac44ee425ab2654d6a901a1a` |
| Garuda contract `.../characters/garuda/character.json` | `8f8418c3fbaf8857bcdc8912fa80e47dbdfac66cc156cd20ed87e7eba8d0ecce` |
| Asuras contract `.../characters/asuras/character.json` | `0bbc62b39d78299add49f9e3e1d26f969a4ca79de4cdc6698e3c53c8e7c6d96d` |
| Vasuki contract `.../characters/vasuki/character.json` | `4e2745074230f7cf5317609857a7aaa0d84085e02e1ed491bda5ff1ada830fc1` |
| Kurma contract `.../characters/kurma/character.json` | `e672aae1d68282614afb4ab5c73ab86d1f62c736a1b30a9d9eb51f8647926094` |
| Bhattathiri contract `.../characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

### Evidence and commands

The exact expected and actual candidate hashes matched. The full-resolution files identified as 1672 × 941 with `identify -format '%f %wx%h\n' <candidate paths>`. I opened each full image with the local image viewer, then used ImageMagick `magick <candidate> -crop <WxH+X+Y> +repage -resize 150%|200% <temporary crop>` and viewed those crops. The observed defect coordinates below refer to the original 1672 × 941 image, origin at top left. The crop inspections included Kurma’s head/shell/each leg, all four S008 pullers and their grips, Vishnu and Brahma’s faces/arms, both S010 groups and Vasuki’s head, and Vishnu’s grips and Bhattathiri in S011. I also opened the mapped reference photos 012.jpg–016.jpg at full resolution.

The reviewed scene requirements are in the frozen plan at `d/art/plans/d027.json`: S007 lines 344–388, S008 lines 390–438, S009 lines 440–489, S010 lines 491–537, and S011 lines 539–587. Series style and frame rules are at `d/art/bible/series.json:4–24,51–60`. Character rules referenced below: Kurma `characters/kurma/character.json:18–27`; Vishnu `characters/vishnu/character.json:18–31`; Brahma `characters/brahma/character.json:20–43`; D027 cast notes `characters/d027-cast-contract.json:5–9`; Devas `characters/devas/character.json:17–25`; Asuras `characters/asuras/character.json:17–25`; Vasuki `characters/vasuki/character.json:17–25`; Bhattathiri `characters/bhattathiri/character.json:16–32`. Source captions and stanza mapping are at `content/daskams/d027.json:77–126` and `content/sources/d027/reference-map.json` stanza records 7–11.

## Candidate findings

### Stanza 7 — v003

- **Candidate:** `artifacts/d027/s007/landscape/candidate-v003.png`
- **SHA-256:** `787970f9986348bd1456530479d308197051e8ebf30f0abce0edccbf0abe6f18`
- **Reference:** `intake/D027/012.jpg`, caption #7.
- **Anatomy:** One complete tortoise with one head, shell, four attached legs, and a short tail. The mountain base visibly rests on the shell. No detached body parts or doubled anatomy seen.
- **Faces:** The single tortoise face is coherent and well formed at the inspected enlargement.
- **Hands/feet:** No hands. Four legs end in visible, coherent feet with separated claws; no extra leg or malformed foot visible.
- **Clothing and cast:** No clothing or other cast members. No exposed or sexualised figure.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo seen in the field, water, or corners.
- **Scene and caption fidelity:** Shows the huge tortoise raising Mandara from beneath the ocean. The shell supports the mountain and the waterline reads as the ocean; matches the mapped caption and the planned layered composition.
- **Character/deity contract:** Fully tortoise form, not anthropomorphic; four legs and broad shell conform to Kurma’s contract. Earth/olive palette is appropriate. Decorative shell panels and painterly surface texture are visible, but are not an anatomy or scene defect.
- **Verdict: pass.**

### Stanza 8 — v004

- **Candidate:** `artifacts/d027/s008/landscape/candidate-v004.png`
- **SHA-256:** `340f96cb88f1770d7ba9c11ce3c8a8cd43edc8d15624b811d6ac0ec6f515daf6`
- **Reference:** `intake/D027/013.jpg`, caption #8.
- **Anatomy:** Four separate humanoid pullers have connected torsos and limbs. Vasuki appears as one continuous body, one head, and one tapered tail around Mandara. No extra or fused limbs seen.
- **Faces:** Faces are coherent; the two devas are visibly distinguishable by skin tone and garment. The asura pair shares similar hair and facial hair, but at full size I do not see an unmistakable duplicate face.
- **Hands/feet:** Enlarged views show the pullers’ hands attached around the serpent and their feet/legs connected and inside the frame. Fingers are stylized but separated; no clear digit defect.
- **Clothing and cast:** Four modestly dressed figures, two on each side. No exposed or sexualised framing. Their jewelry/crowns are small and do not read as palace regalia.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo seen, including the water and corners.
- **Scene and caption fidelity:** Asuras hold the single head at image-left; devas hold the tapering tail at image-right. The groups pull from opposite sides around Mandara, matching the caption and reference. **Needs-fix:** the plan requires a restrained warm mineral radiance to reach both groups and Vasuki as the only depiction of Vishnu’s sustaining presence. The full field (x=0–1671, y=0–940) has a uniform warm backdrop and no visible radiance or emanation reaching the groups/serpent. This planned scene element is absent.
- **Character/deity contract:** No second Vishnu, no extra limbs, and Vasuki’s head/tail assignment is correct. Group size and humanoid anatomy are within the cast contracts.
- **Verdict: needs-fix.** The required sustaining radiance is not visibly depicted.

### Stanza 9 — v002

- **Candidate:** `artifacts/d027/s009/landscape/candidate-v002.png`
- **SHA-256:** `8ce57af6c8c18bc4afd3b77fa3f3200965441c7cf2db898f08ffb16411f23a7a`
- **Reference:** `intake/D027/014.jpg`, caption #9.
- **Anatomy:** Vishnu is one coherent figure with four attached arms. Brahma’s three frontal faces and four attached arms are distinct; the rear-facing fourth head is occluded as specified. Shiva and the other witnesses have coherent bodies. No fused or duplicated bodies seen.
- **Faces:** Vishnu, Brahma’s three visible faces, Shiva, and the witnesses have intact, legible faces. No malformed or duplicated face seen.
- **Hands/feet:** Vishnu’s four hands are attached; one lotus hand steadies Mandara, and the remaining iconographic objects are held distinctly. Brahma’s four hands are attached and separated. Witness hands releasing/holding flowers are coherent at the viewed scale. Visible feet are intact; naturally peripheral figures at the edge are not cut through a face or key extremity.
- **Clothing and cast:** The cast matches the planned praising gods. **The disclosed ornament deviation is present:** Vishnu has a tall tiered crown with peacock feather and multiple heavy necklaces. These read as conspicuous palace-like regalia beyond the modest-ornament contract (candidate coordinates approximately x=355–650, y=0–515, crown/feather and chest ornaments). No inappropriate exposure.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo seen in the scene or corners.
- **Scene and caption fidelity:** Vishnu steadies the rising/spinning Mandara with a lotus while Brahma, Shiva, and other gods praise him and shower flowers. The reference and caption’s wonder/praise are conveyed.
- **Character/deity contract:** Four-armed form and blue identity are correct; Brahma’s three front-visible faces, hidden rear-facing head, and four arms follow the explicit contract. The disclosed Vishnu ornament exceeds the restrained crown and sacred ornament requirement. The image also has a pronounced decorative border, contrary to the series full-bleed/no-separate-border rule (`series.json:20–24`); this is a style/frame observation, not a separate defect category in this review gate.
- **Verdict: needs-fix.** The disclosed crown/feather/necklace excess is visibly palace-like regalia and violates the applicable character contract.

### Stanza 10 — v006

- **Candidate:** `artifacts/d027/s010/landscape/candidate-v006.png`
- **SHA-256:** `4e73e13bbc96505b19fbe02be077641ae08230acb9c692ea6d12cf25a74a037b`
- **Reference:** `intake/D027/015.jpg`, caption #10.
- **Anatomy:** The two devas and two asuras are separate humanoid bodies with two arms and two legs each. One Vasuki body and head are visible; the fumes emerge from its mouth. No missing or extra limbs seen.
- **Faces:** **The disclosed paired-face deviation is present.** The two devas’ profiles/hair buns are near-identical, and the two asuras’ profiles, moustaches, hair, and head angles are near-identical. At native size these read as repeated people rather than a varied small group. Deva pair region approximately x=120–485, y=285–415; asura pair region approximately x=1170–1605, y=290–445. This is a genuine visible duplication concern against the plan and group contracts.
- **Hands/feet:** Hands grip the serpent and remain attached; legs and feet are coherent and visible. No clear finger/toe or limb-connection error seen.
- **Clothing and cast:** Garments distinguish devas from asuras and remain traditional. No sexualised framing or exposed skin beyond ordinary traditional dress.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo seen in the candidate, ground, water, or corners.
- **Scene and caption fidelity:** Vasuki’s fumes reach the asuras on the head side; rain is shown over the devas only, leaving the asuras dry. This matches the caption and plan. The mood is subdued rather than graphic.
- **Character/deity contract:** Serpent is continuous and has one head; position of head, fumes, and groups is correct. The paired near-identical faces violate the distinct-cast/no-clones requirement. The plan’s candidate-status note discloses this deviation; it is present, and the other areas above were judged independently.
- **Verdict: needs-fix.** The repeated paired faces are apparent at full size and violate the group contract.

### Stanza 11 — v002

- **Candidate:** `artifacts/d027/s011/landscape/candidate-v002.png`
- **SHA-256:** `50f2e4ea5f0188a0446547f496fb7cbc8154644b65003e36840c54f29958b54d`
- **Reference:** `intake/D027/016.jpg`, caption #11.
- **Anatomy:** Vishnu has exactly two attached arms. Bhattathiri is a single seated figure. The surfaced fish and makara forms have coherent visible animal anatomy; no fused or duplicated body is evident.
- **Faces:** Vishnu’s and Bhattathiri’s faces are coherent and intact. Bhattathiri is visibly older, clean-shaven, and recognizable by the shaved scalp/tuft and ash marks.
- **Hands/feet:** Both of Vishnu’s hands are visibly attached and grip opposite parts of one serpent; fingers are separated at the enlarged view. Bhattathiri’s joined prayer hands are coherent; his seated legs/feet remain fully inside the frame.
- **Clothing and cast:** Bhattathiri wears a cream dhoti with sacred thread and restrained beads, without beard or moustache. **The disclosed Vishnu ornament deviation is present:** tall tiered crown, peacock feather, and heavy necklaces (approximately x=410–710, y=0–485). These read as conspicuous palace-like regalia, beyond the modest ornament contract. Other clothing is traditional and non-sexualised.
- **Text/signature artifacts:** No readable text, signature, watermark, or logo seen, including the water/shore and corners.
- **Scene and caption fidelity:** Vishnu alone resumes the churning with two hands. Fish and makara surface while nectar is absent, and the small prayerful Bhattathiri remains on the shore at right. This matches the plan and caption.
- **Character/deity contract:** Vishnu’s two-arm stanza-specific form and continuous Vasuki are correct. Bhattathiri follows the older clean-shaven identity contract. The disclosed Vishnu ornament exceeds the restrained-ornament contract.
- **Verdict: needs-fix.** The disclosed crown/feather/necklace excess is visibly palace-like regalia and violates the applicable character contract.

## Summary and recommendation

S007 passes. S008, S009, S010, and S011 need fixes for the specific defects stated above. Revisions should preserve the existing candidates and use new versions; this review does not approve artwork or update `art/approved/`. The review itself raises no captain decision: the pending art approval is the standing state, not a decision created by this report. Captain-call inventory for this review: **empty**.
