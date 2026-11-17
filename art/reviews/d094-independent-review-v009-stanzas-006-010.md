# D094 landscape candidate review: stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates against their exact frozen plan and character-contract bytes, the mapped intake photos, and the chapter captions. I inspected each full-resolution candidate (1672×941 pixels; stanza 10 is 1671×941) and enlarged crops covering faces, torsos, hands, feet, the cow’s legs, the gopika group, the deity’s attributes, and ground/corner areas for artifacts. Candidate pixels were not edited. Skin-only 11×11 patches were measured from the specified upper-left crop origins using ImageMagick raw RGB output and per-channel medians.

The plan maps stanzas 6–10 respectively to `intake/D094/006.jpg` through `010.jpg`; the corresponding chapter content records each commentary caption source at [content/daskams/d094.json:72](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/content/daskams/d094.json:72), [content/daskams/d094.json:82](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/content/daskams/d094.json:82), [content/daskams/d094.json:92](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/content/daskams/d094.json:92), [content/daskams/d094.json:102](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/content/daskams/d094.json:102), and [content/daskams/d094.json:112](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/content/daskams/d094.json:112). I viewed those five read-only reference photos and checked their matching captions in `intake/D094/photo-captions.txt` (`## 006.jpg`–`## 010.jpg`). The photos provide story context; the mapped plans and captions govern the scenes.

### Frozen contract SHA-256 values

Each actual value matched the expected value in the review brief:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d094.json` | `83694a45b6bd6b467b8b284d783a803343a6f6f5f854ce86b9feeaafa0f0a1cf` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |

Commands and direct evidence: `sha256sum` on the five candidate paths and seven contract paths returned the exact values listed here and below; `identify -format '%f %wx%h\n'` returned 1672×941 for stanzas 6–9 and 1671×941 for stanza 10. Enlarged crops were made with `magick <candidate> -crop <region> +repage -resize <factor> <scratch-file>` and viewed individually. A Python script called `magick <candidate> -crop 11x11+X+Y +repage -depth 8 RGB:-` and calculated each channel’s median. The cited plan lines below contain each scene brief, candidate path/version, and any disclosure.

## Image findings

### Stanza 6 — v012

- **Candidate / exact checksum:** `artifacts/d094/s006/landscape/candidate-v012.png` — `df96de72b50d144d47b61388432a8d167e5847f9348cd71b35299fd43291e721`.
- **Review time:** 2026-11-17T05:16:49Z.
- **Anatomy:** One Bhattathiri and one Bhagwan, both with connected, proportionate bodies; no duplicated or fused figures. The human’s bent legs form a coherent kneeling pose.
- **Faces:** Bhattathiri’s lined, clean-shaven face, ash stripes, and small tuft are visible and coherent. The deity’s face is intact and serene.
- **Hands and feet:** Bhattathiri’s joined namaste has five visible fingertip ends with thumbs overlapped. His exposed foot has five toes; the other is naturally tucked. The deity’s two open hands each show thumb plus four fingers. Both deity feet show five separated toes. No hand, foot, or face is cut off.
- **Clothing and cast:** Modest cream dhoti, beads, ash markings, and the required off-white sacred thread are visible; the thread crosses from shoulder to waist. The blue deity wears a yellow dhoti and red-orange drape with richly ornamented crown and jewelry, ordinary devotional iconography. Skin-only 11×11 medians reproduce the disclosed warm-brown deviation: cheek origin (390,300) RGB (161,84,47), R−B 114; torso (360,420) (195,107,65), R−B 130; arm (390,470) (141,75,40), R−B 101; additional origins (385,350) R−B 124, (320,460) 129, (420,480) 129, (435,500) 121, (460,500) 132, and (390,520) 130. This is within the deviation recorded in the stanza’s disclosure, not a newly found worse defect. Traditional dress is modest; no sexualized framing. The rendering uses smooth modeled shading and bright, metallic-looking ornament highlights that are visibly at odds with the series matte, painted-ochre rule ([series.json:4](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/series.json:4)); recorded as a style observation, not a defect in the task’s listed needs-fix categories.
- **Text/signature artifacts:** No readable writing on the palm leaves, no signature, logo, or watermark in the full image, ground, water, or corners.
- **Scene and caption fidelity:** The humble prayer, one blue Bhagwan, blank palm-leaf teaching, clean water and vessel are present. The mapped photo is prayer context; the image follows the caption and plan without copying its photo composition or text. Plan references: [d094.json:295](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:295), [d094.json:332](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:332).
- **Character/deity contract:** Older clean-shaven devotee identity, sacred thread, beads, cream dhoti, blue deity, and uncut crown/hands/feet comply with the applicable contracts ([Bhattathiri character.json:16](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/bhattathiri/character.json:16); [Guruvayurappan character.json:18](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/guruvayurappan/character.json:18)).
- **Verdict: pass — disclosed deviation present.**

### Stanza 7 — v002

- **Candidate / exact checksum:** `artifacts/d094/s007/landscape/candidate-v002.png` — `4c89681e485a924d33c07c321d7174c3d97a3f50e18580255f8a3ba5997c370a`.
- **Review time:** 2026-11-17T05:16:49Z.
- **Anatomy:** No people are depicted. The healthy cow has one coherent body, one head, and four attached legs ending in four hooves; no duplicate, fused, or malformed creature parts.
- **Faces:** No human faces. The cow’s eye, muzzle, ears, and horns are cleanly drawn and not distorted.
- **Hands and feet:** No hands or human feet. All four cow hooves are visible and attached; no leg is missing or cut off.
- **Clothing and cast:** No human cast or clothing. Cow is healthy and cared for, in keeping with the plan. The animal, manuscript, and ground use layered, dimensional surface shading rather than the series’ flat matte mural treatment ([series.json:4](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/series.json:4)); recorded as a style observation, not a listed needs-fix defect.
- **Text/signature artifacts:** The two-leaf manuscript is open and unmarked. Its surface has painted texture but no letters or legible symbols. No signature, logo, or watermark is visible, including in the ground and corners.
- **Scene and caption fidelity:** The blank palm-leaf text, healthy nonmilking cow, empty bowl, and silent flower are all present. There are no people or deity. The scene treats the comparison gently. Plan references: [d094.json:347](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:347), [d094.json:380](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:380); caption source: `photo-captions.txt`, `## 007.jpg`.
- **Character/deity contract:** No character or deity is required or shown; this matches the plan. The cow is not a humanized or duplicated figure.
- **Verdict: pass.**

### Stanza 8 — v007

- **Candidate / exact checksum:** `artifacts/d094/s008/landscape/candidate-v007.png` — `19d4c9e010ca706017c96b6c1015158c08ec04c5e3cdf48c2895d08bd923ca05`.
- **Review time:** 2026-11-17T05:16:49Z.
- **Anatomy:** One Bhattathiri and one deity, with connected limbs and no duplicate people. Bhattathiri kneels with naturally folded legs; the exposed foot is coherent and the other is concealed by the pose.
- **Faces:** Bhattathiri’s older clean-shaven face, forehead ash, and tuft are clear. The blue deity’s face is intact. No malformed faces.
- **Hands and feet:** Bhattathiri’s two upturned hands each show thumb plus four fingers. His exposed foot shows five toes. The deity’s blessing hand shows five digits; the other visible hand is also intact. Its feet are visible and naturally separated, with toes present. The footprint cluster consists of three distinct pairs, not extra limbs. No key extremity is cut off.
- **Clothing and cast:** Bhattathiri wears modest cream Kerala clothing, sacred thread, and beads. The deity wears a yellow dhoti and red-orange drape; layered jewelry and ornate crown are ordinary iconography. The disclosed skin deviation was independently remeasured: face origin (380,345) RGB (197,115,63), R−B 134; torso (300,500) (166,90,45), R−B 121; arm (475,540) (201,118,67), R−B 134. These exactly match the plan’s recorded deviation; no sampled region is worse than that disclosed. No sexualized framing. Strong dimensional highlights and reflective-looking jewelry are visible, contrary to the series matte/painted-ochre rule ([series.json:4](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/series.json:4)); recorded as a style observation, not a listed needs-fix defect.
- **Text/signature artifacts:** No text, sound marks, signature, logo, or watermark was visible in the image, ground, or corners.
- **Scene and caption fidelity:** One devotee and one deity worship scene, offerings, cymbals and veena at rest, lotus, and three pairs of devotee footprints are present. The mapped source is a devotional group context; the plan appropriately avoids copying its crowd and instead uses the footprints. Plan references: [d094.json:398](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:398), [d094.json:436](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:436).
- **Character/deity contract:** Bhattathiri’s older clean-shaven identity and clothing are intact; the deity has consistent blue skin, yellow dhoti, red-orange drape, and visible uncut extremities. No explicit head- or arm-count requirement is violated ([Bhattathiri character.json:16](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/bhattathiri/character.json:16); [Guruvayurappan character.json:18](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/guruvayurappan/character.json:18)).
- **Verdict: pass — disclosed deviation present.**

### Stanza 9 — v005

- **Candidate / exact checksum:** `artifacts/d094/s009/landscape/candidate-v005.png` — `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`.
- **Review time:** 2026-11-17T05:16:49Z.
- **Anatomy:** One Bhattathiri and exactly one Bhagwan. The devotee’s standing legs and arms connect naturally; Bhagwan’s four arms are separately attached, with no extra or missing arms.
- **Faces:** Both faces are intact. Bhattathiri is older and clean-shaven with ash markings and tuft; Bhagwan has a serene blue face.
- **Hands and feet:** Bhattathiri’s hand on the broom and lowered hand are attached and visually coherent; his two visible feet each have five toes. Bhagwan’s four hands correspond to the chakra, conch, lotus, and mace; they remain distinct, with digits visible around the attributes. Both deity feet show five toes in the enlarged crop. No face or key extremity is cut off.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, visible sacred thread, and modest beads; exposed upper torso is ordinary traditional dress. Bhagwan’s blue skin and four-armed iconography are appropriate. The deity’s crown and layered jewelry are richly ornamented but ordinary temple iconography and not an explicit prohibition. The skin disclosure is reproduced using 11×11 skin-only medians: cheek (420,170) RGB (172,88,49), R−B 123; chest (390,260) (178,90,52), R−B 126; forearm (470,360) (180,94,56), R−B 124. Additional origins (430,180) R−B 122, (400,270) 123, (460,350) 106, (415,180) 121, (340,295) 126, and (465,355) 105. These are no worse than the disclosed measurements/range. No sexualized framing. The shrine, reliefs, and deity ornaments have polished dimensional highlights, inconsistent with the series matte/painted-ochre rule ([series.json:4](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/series.json:4)); recorded as a style observation, not a listed needs-fix defect.
- **Text/signature artifacts:** No readable writing, signature, logo, or watermark in the full image, ground, or corners.
- **Scene and caption fidelity:** Bhattathiri is sweeping the temple threshold; one four-armed deity is contained in the shrine, with a sun motif, oil lamp, and modest offering. No second divine figure appears in the sun or lamp. This follows the mapped caption and plan. Plan references: [d094.json:454](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:454), [d094.json:490](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:490).
- **Character/deity contract:** Bhattathiri’s defining face, sacred thread, cream dhoti, and beads remain; Bhagwan has exactly the plan-required four distinct arms and hands ([Bhattathiri character.json:16](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/bhattathiri/character.json:16); [Guruvayurappan character.json:18](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/guruvayurappan/character.json:18)).
- **Verdict: pass — disclosed deviation present.**

### Stanza 10 — v006

- **Candidate / exact checksum:** `artifacts/d094/s010/landscape/candidate-v006.png` — `6d82f5fed8b3b8b6b5cbedfbd32dcd15d8df79a2caff495ab990a7eeb1aa9bda`.
- **Review time:** 2026-11-17T05:16:49Z.
- **Anatomy:** One youthful Krishna and four distinct gopikas. Faces and bodies remain separate, with naturally connected limbs and no fused or duplicate figures. Krishna has one face, two arms and two legs. The women sit in coherent poses; no extremity is cut off at the frame.
- **Faces:** Krishna’s face is youthful and intact. All four gopikas have separate, coherent faces; no duplicated or malformed face is visible.
- **Hands and feet:** All ten visible hands (two for each figure) show a thumb and four fingers in the enlarged group/head-and-hands views. Eight visible gopika feet and Krishna’s one visible foot show five toes each; his other foot is naturally concealed by the seated pose. No extra, missing, or fused digits are visible.
- **Clothing and cast:** All four women wear modest, fully covered village saris with restrained jewelry. Krishna wears a yellow dhoti and muted red-orange shawl. He has one simple low gold band and one upright peacock feather, with a plain forehead; no tall tiered crown or forehead mark. No sexualized framing. The rendering is comparatively flatter than the other reviewed scenes, though figures and jewelry retain dimensional highlights inconsistent with the series matte mural rule ([series.json:4](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/series.json:4)); recorded as a style observation, not a listed needs-fix defect.
- **Text/signature artifacts:** No text, signature, logo, or watermark in the full image, water, grass, or corners.
- **Scene and caption fidelity:** One Krishna sits among a small group of four gopikas in a reverent, non-erotic gathering; the central lotus is present. The image reflects the mapped gopi-devotion caption and does not copy its source photo’s collage or crowd. Plan references: [d094.json:508](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:508), [d094.json:541](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/plans/d094.json:541).
- **Character/deity contract:** Krishna meets the Vrindavan-youth contract: youthful face, deep blue skin, one low band and feather, bare forehead, yellow dhoti, red-orange shawl, two arms ([Krishna character.json:6](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/krishna-vrindavan-youth/character.json:6)). The gopikas are distinct adult women in modest village dress, with ordinary two-armed anatomy ([gopikas character.json:16](/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-m/art/bible/characters/gopikas/character.json:16)).
- **Verdict: pass.**

## Recommendation and captain-call inventory

The five candidates pass the specified exact-checksum visual gate; stanzas 6, 8, and 9 pass with their disclosed skin deviations present and within the recorded ranges. This review does not approve artwork or update an approval manifest. It raises no unresolved captain decision: the pending captain art approval is the standing state, not a call created by this review. My captain-call inventory for this review is empty.
