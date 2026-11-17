# D094 landscape exact-checksum review: stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates against the frozen final plan, frozen series and character contracts, the chapter content, and the mapped D094 intake photos/captions. The frozen plan maps stanzas 6–10 to `intake/D094/006.jpg` through `010.jpg` respectively (plan stanza entries at `art/plans/d094.json:287,342,390,446,500`; chapter records at `content/daskams/d094.json:67,77,87,97,107`; captions at `intake/D094/photo-captions.txt:26–48`). The plan and the two other sources were read directly from the paths listed below.

I verified every expected SHA-256 before inspecting images. For each candidate I viewed the whole image at its native 1664×936 resolution, then made and viewed enlarged crops in a scratch directory inside the disposable `/12` worktree. Crops focused on faces, hands, feet, limbs, and the scene-specific objects. I checked the full-frame edges and ground/water areas for text, signatures, and watermark artifacts. I independently measured the disclosed skin-only 11×11 patches with ImageMagick crops and per-channel medians. ImageGen was not used; no project or approval file was changed.

Commands/evidence: `sha256sum <frozen contract files> <five candidate files>`; `magick <candidate> -crop WxH+X+Y +repage -resize ... <scratch crop>`; `magick <candidate> -crop 11x11+X+Y -depth 8 txt:-` with Python standard-library channel medians; `view_image` on all five full candidates, mapped intake photos 006–010, and the focused crops. `PIL` was unavailable, so ImageMagick was used for cropping and sampling.

## Contract hashes verified

All actual hashes below match the expected values in the task brief.

| Contract file | Actual SHA-256 |
|---|---|
| `data/d094-production/review-contract-j/art/plans/d094.json` | `a1c4ed1418addeac6675f373a24f57b3a2a0563539c70472096eb91a608d82d4` |
| `data/d094-production/review-contract-j/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d094-production/review-contract-j/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `data/d094-production/review-contract-j/art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `data/d094-production/review-contract-j/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `data/d094-production/review-contract-j/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `data/d094-production/review-contract-j/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |

## Image findings

### Stanza 6 — candidate v011

- **Candidate:** `artifacts/d094/s006/landscape/candidate-v011.png`
- **SHA-256:** `8f321bf7bad6dd4f13c8d2c9b34b93c4abf2ae5c870332b8161dc39b55923573`
- **Review time:** `2026-11-17T04:22:54Z` (UTC)
- **Anatomy:** Bhattathiri has one head, two attached arms, and a natural kneeling pose. Guruvayurappan has one head, two attached arms, and two legs; no duplicated or fused figure is visible.
- **Faces:** Both faces are legible, calm, and well formed. Bhattathiri is older and clean-shaven with the shaved scalp, dark tuft, and ash marks; Guruvayurappan has a serene blue face.
- **Hands/feet:** Bhattathiri’s namaste shows five fingertip ends; the thumbs are overlapped by the prayer pose. Guruvayurappan’s two open hands each show a thumb and four fingers. Bhattathiri’s exposed foot at about x=180–305, y=800–890 shows five toes; his other foot is tucked. The deity’s viewer-right foot shows five toes. **Unresolved count:** the deity’s viewer-left foot at about x=1080–1170, y=845–890 has overlapping toe tips. Even in the 5× crop I cannot reliably distinguish all five. This is an uncertainty, not a confirmed malformed-foot defect.
- **Clothing and cast:** Bhattathiri wears a cream dhoti and restrained beads. The required off-white sacred thread is clearly visible from his left shoulder across the torso to the right waist. The skin-only 11×11 medians I sampled at origins (390,280), (390,470), and (450,510) are RGB (152,92,63), (130,67,35), and (175,96,58), with R−B 89, 95, and 117. Guruvayurappan is blue and wears a yellow dhoti, red-orange shawl, feathered crown and ornate temple jewelry; the ornamentation is ordinary iconography and does not violate his contract.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including in the manuscript, ground, foliage, and corners.
- **Scene and caption fidelity:** The prayer scene follows photo/caption 006’s devotional context. The image includes the palm-leaf teaching object, clean water vessel, and uncluttered grove. No copied caption or text is present.
- **Character/deity contract:** Bhattathiri and Guruvayurappan match their frozen contracts and this plan entry (`art/plans/d094.json:287–332`; character files `bhattathiri/character.json:17–23` and `guruvayurappan/character.json:19–29`). The sacred thread requirement is met.
- **Verdict: uncertain.** The deity’s viewer-left toes remain inseparable enough that I cannot confirm the required five-toe count. Keep this exact checksum uncleared until toe separability is resolved by a clearer candidate or a conclusive exact-image review.

### Stanza 7 — candidate v002

- **Candidate:** `artifacts/d094/s007/landscape/candidate-v002.png`
- **SHA-256:** `4c89681e485a924d33c07c321d7174c3d97a3f50e18580255f8a3ba5997c370a`
- **Review time:** `2026-11-17T04:23:09Z` (UTC)
- **Anatomy:** No person or deity is depicted. The healthy cow has one head, four naturally attached legs, and four cloven hooves in the enlarged lower-body crop. Its head, muzzle, ears, and horns are coherent; no extra leg or duplicated animal is visible.
- **Faces:** No human faces; the cow’s eye and muzzle are intact.
- **Hands/feet:** No hands or human feet. All four legs end in visible paired/cloven hooves.
- **Clothing and cast:** No clothed characters. Cow is a healthy, cared-for animal, not an emaciated or distressed figure.
- **Text/signature artifacts:** The open two-leaf palm-leaf manuscript is unmarked; no readable letters or symbols appear. No signature, logo, or watermark is visible in the leaves, ground, foliage, or corners.
- **Scene and caption fidelity:** The cow, blank manuscript, empty speech bowl, and silent flower are all present. This is a gentle still-life interpretation of photo/caption 007’s study-without-devotion comparison; it does not reproduce the source’s writing or imagery.
- **Character/deity contract:** No character or deity is required or depicted, as specified at `art/plans/d094.json:342–380`.
- **Verdict: pass.**

### Stanza 8 — candidate v007

- **Candidate:** `artifacts/d094/s008/landscape/candidate-v007.png`
- **SHA-256:** `19d4c9e010ca706017c96b6c1015158c08ec04c5e3cdf48c2895d08bd923ca05`
- **Review time:** `2026-11-17T04:23:18Z` (UTC)
- **Anatomy:** One Bhattathiri and one Guruvayurappan are visible. Bhattathiri’s kneeling figure has two attached arms and naturally folded legs; Guruvayurappan has one head, two attached arms and two legs. No duplicated/fused body or malformed face is apparent.
- **Faces:** Bhattathiri’s older clean-shaven face and ash marks are clear; the deity’s face is serene and blue. Neither face is cut off.
- **Hands/feet:** Both of Bhattathiri’s raised hands show a thumb plus four fingers. The deity’s two open hands each show five digits. One exposed Bhattathiri foot shows five toes; the other leg is tucked beneath him. Both deity feet show five toes. The three lower clusters of footprints are distinct pairs and are not confused with the figures’ feet.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and restrained beads; the deity wears a yellow dhoti and red-orange shawl. The deity’s tiered crown, garlands and layered jewelry are ordinary temple-mural iconography and are permitted. The disclosed skin deviation is present and matches the plan’s stated ranges: skin-only 11×11 medians at origins (380,345), (300,500), and (475,540) are RGB (197,115,63), (166,90,45), and (201,118,67), R−B 134, 121, and 134. These do not exceed the disclosure.
- **Text/signature artifacts:** No readable text, notation, signature, logo, or watermark is visible in the full image, ground, or corners.
- **Scene and caption fidelity:** The image contains the humble worshipper before Bhagwan, offerings, resting hand cymbals and veena, and the required distinct devotee footprints. It follows photo/caption 008’s devotional focus while recomposing the crowded reference into the plan’s single-deity scene.
- **Character/deity contract:** The older Bhattathiri identity and serene blue Guruvayurappan follow their contracts; no prohibited item or figure is present (`art/plans/d094.json:390–436`; `bhattathiri/character.json:17–23`; `guruvayurappan/character.json:19–29`).
- **Verdict: pass — disclosed deviation present.**

### Stanza 9 — candidate v005

- **Candidate:** `artifacts/d094/s009/landscape/candidate-v005.png`
- **SHA-256:** `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`
- **Review time:** `2026-11-17T04:23:27Z` (UTC)
- **Anatomy:** Bhattathiri is a single standing figure with two attached arms and two legs. The shrine contains exactly one Bhagwan with four distinct attached arms. No duplicated deity or fused person is visible.
- **Faces:** Bhattathiri’s lined, clean-shaven face and the deity’s serene blue face are coherent and fully inside the frame.
- **Hands/feet:** Bhattathiri’s lowered hand shows five digits; the broom-gripping hand’s digits wrap around the handle, with the handle partly occluding them but no extra or missing digit visible. The four deity hands are attached in the expected two-arm-per-side layout; the chakra, conch, lotus, and mace grips partly obscure individual digits, with no malformed hand apparent. Bhattathiri’s two visible feet each show five toes; the deity’s feet are present on the shrine plinth, with toe marks visible and no crop.
- **Clothing and cast:** Bhattathiri wears the cream dhoti, sacred thread, and modest beads. The disclosed warm-brown skin deviation is present and no worse than the plan’s measured range. I reproduced its skin-only 11×11 medians at origins (420,170), (390,260), and (470,360): RGB (172,88,49), (178,90,52), and (180,94,56), R−B 123, 126, and 124. The deity’s crown, multiple necklaces, armlets and other ornaments are visible in the shrine; they are ordinary iconography and no contract prohibition is violated.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible in the image, floor, shrine background, or corners.
- **Scene and caption fidelity:** Bhattathiri is sweeping the threshold, with the broom bristles contacting the floor. The shrine medallion contains one four-armed deity; a modest offering, sun motif and oil lamp are present. There is no second deity in the sun or flame. The image carries photo/caption 009’s four-armed worship context into the exact service scene required by the plan.
- **Character/deity contract:** Bhattathiri’s identity and modest dress match his contract. Bhagwan’s four-armed form satisfies the explicit scene anatomy requirement (`art/plans/d094.json:446–490`; `bhattathiri/character.json:17–23`; `guruvayurappan/character.json:19–29`).
- **Verdict: pass — disclosed deviation present.**

### Stanza 10 — candidate v006

- **Candidate:** `artifacts/d094/s010/landscape/candidate-v006.png`
- **SHA-256:** `6d82f5fed8b3b8b6b5cbedfbd32dcd15d8df79a2caff495ab990a7eeb1aa9bda`
- **Review time:** `2026-11-17T04:23:35Z` (UTC)
- **Anatomy:** One Krishna and four distinct gopikas are visible. Krishna has one face, two attached arms, and two legs; each woman has two arms and two legs. The circular seated group has no fused or duplicated bodies. Proportions and joints read naturally at enlarged views.
- **Faces:** Krishna and all four women have separate, coherent, visible faces; no face is cut off or duplicated.
- **Hands/feet:** Ten visible hands (two per figure) each show a thumb and four fingers. Eight gopika feet and Krishna’s one exposed foot show five toes apiece; Krishna’s other foot is covered by his seated dhoti. The visible feet are inside the frame, with small margins at the lower edge.
- **Clothing and cast:** All four women are adult-presenting and wear modest, fully covered village saris with simple jewelry. Krishna wears the yellow dhoti and muted red-orange shawl, with deep matte blue skin. His forehead is plain, with a single low gold band and one upright peacock feather; there is no tilak or tall crown.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including in the grass, water, sky, and corners.
- **Scene and caption fidelity:** The small group gathers around Krishna in a reverent conversation; the lotus is central and the grouping is circular without physical merging or romanticized contact. The plan’s required devotional gathering is present; the scene uses photo/caption 010 only as love-and-union context and is composed as specified.
- **Character/deity contract:** Krishna matches the youthful Vrindavan contract, including two-arm anatomy, bare forehead, low band and single feather. The women are distinct ordinary adults in modest village dress (`art/plans/d094.json:500–541`; `krishna-vrindavan-youth/character.json:5–13,48–58`; `gopikas/character.json:14–29`).
- **Verdict: pass.**

## Recommendation and captain-call inventory

Four images pass, including the two passes with disclosed deviations. Stanza 6 v011 remains **uncertain** solely because I cannot independently resolve the deity’s overlapping viewer-left toe tips well enough to certify the five-toe count; it should not be counted as visually cleared for publication until that exact uncertainty is resolved. No confirmed defect or new captain decision is raised by this review. The existing pending captain art approval remains the standing approval state and is not an inventory item created by this review.

**Captain-call inventory: empty.** No captain-held call is required for this report.
