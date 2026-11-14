# D027 landscape visual review: stanzas 7–11

**Review completed:** 2026-11-14T03:02:42Z (UTC)  
**Scope:** Independent visual review of five exact candidate files against the frozen final D027 plan, frozen series and character contracts, the stanza-to-reference mapping, source photos, and supplied captions. Images were opened at native 1672×941 resolution. Focused face, limb, grip, deity anatomy, shell, water, and edge crops were made from read-only originals into this task worktree’s `.review-scratch/` directory. Crops were not used as a substitute for full-image inspection. The review gate is checksum-bound; these findings apply only to the exact candidate hashes below.

## Contract file hashes

All actual hashes equal the expected hashes in the assignment. These are the bytes read for this review.

| Frozen file | SHA-256 |
|---|---|
| `data/d027-production/review-contract-h/i/art/plans/d027.json` | `7bcbefcf19ffd6c610d13d7ceafbd3643713e1b953a57eb6a4ddce7ab17cdb73` |
| `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `.../art/bible/characters/d027-cast-contract.json` | `6c16be532562c27aa755057f52a9a91ed96b1b38120e817431a3ebac409a84ba` |
| `.../art/bible/characters/durvasa/character.json` | `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab` |
| `.../art/bible/characters/indra/character.json` | `79673700165a403b64babad8f47e11218b06911b64eb1686ff1a1f8a14bf5831` |
| `.../art/bible/characters/airavata/character.json` | `8f1a1ed0b879d49c6467f12b271d7633a6e2055c97bc5b3ba516c747f53a8496` |
| `.../art/bible/characters/vishnu/character.json` | `b12934f8ab07bf3378b90ea256a6074a771d5edb22b9d36565d44bdb41441111` |
| `.../art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `.../art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `.../art/bible/characters/devas/character.json` | `549a36458ed305cd2fa0f1f7c41c087bae53bbe7ac44ee425ab2654d6a901a1a` |
| `.../art/bible/characters/garuda/character.json` | `8f8418c3fbaf8857bcdc8912fa80e47dbdfac66cc156cd20ed87e7eba8d0ecce` |
| `.../art/bible/characters/asuras/character.json` | `0bbc62b39d78299add49f9e3e1d26f969a4ca79de4cdc6698e3c53c8e7c6d96d` |
| `.../art/bible/characters/vasuki/character.json` | `4e2745074230f7cf5317609857a7aaa0d84085e02e1ed491bda5ff1ada830fc1` |
| `.../art/bible/characters/kurma/character.json` | `e672aae1d68282614afb4ab5c73ab86d1f62c736a1b30a9d9eb51f8647926094` |
| `.../art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

## Method and evidence references

- Verified all five candidate SHA-256 values before inspection and again after inspection with `sha256sum`; both rounds matched the requested hashes. `magick identify` reported 1672×941 PNG for each candidate.
- Opened each full image at original resolution, then inspected crops cut from the source candidate into this task worktree’s `.review-scratch/` using ImageMagick `magick <source> -crop <geometry> +repage <scratch-file>`. Source candidates, intake photos, and contracts remained read-only.
- Matched stanza numbers to references using the plan’s `reference_paths`, `content/daskams/d027.json` stanza entries at lines 77–121, and the OneDrive caption file `intake/D027/photo-captions.txt` entries `012.jpg` through `016.jpg`. The matching source photos are `intake/D027/012.jpg` through `016.jpg` in the producer worktree. Captions are respectively the Kurma-and-Mandara lift, renewed churning, Brahma/Shiva and devas praising Vishnu, Vasuki’s poison and selective rain, and the closing two-handed-churning prayer.
- Main plan evidence: stanzas 7–11 are at `art/plans/d027.json` lines 347–587. Relevant shared rules are lines 27–30 (Vishnu form, Brahma anatomy, Vasuki orientation, distinct non-cloned crowds). Scene rules are stanza 7 lines 356–371, stanza 8 lines 406–420, stanza 9 lines 457–471, stanza 10 lines 505–519, and stanza 11 lines 555–569. Character evidence: Kurma `character.json` lines 18–27; Vasuki lines 18–29; devas lines 18–25; asuras lines 18–26; Vishnu lines 18–29; Brahma lines 20–48; Bhattathiri lines 17–31. Series rendering and full-bleed rule: `art/bible/series.json` lines 3–25.

## Candidate findings

### Stanza 7 — `candidate-v003.png`

- **Candidate:** `artifacts/d027/s007/landscape/candidate-v003.png`
- **Version / checksum:** v003 — `787970f9986348bd1456530479d308197051e8ebf30f0abce0edccbf0abe6f18`
- **Review time:** 2026-11-14T03:02:42Z
- **Anatomy:** Kurma is a complete tortoise, with one natural head, broad shell, four attached legs, and short tail. Front and rear legs remain distinct and connected. No anthropomorphic torso or detached shell is visible.
- **Faces:** Kurma’s face is coherent; no malformed or duplicated person/creature face.
- **Hands / feet:** No hands are present. All four feet are in frame and attached; the visible claws/toes are separated and consistent across the feet. No digit defect is visible.
- **Clothing and cast:** Kurma is the only figure, so clothing is not applicable. No extra cast members.
- **Text / signature artifacts:** No readable text, signature, or watermark in sky, water, ground, or corners.
- **Scene and caption fidelity:** The mountain’s base visibly rests on the shell; the immense tortoise raises it toward the water surface. This follows the stanza 7 plan and caption for photo 012. The blue-green water and mineral mountain remain legible.
- **Character / deity contract:** Meets Kurma’s complete-tortoise form and four-leg requirement (`characters/kurma/character.json:18–27`; plan lines 356–371).
- **Verdict: pass.**

### Stanza 8 — `candidate-v004.png`

- **Candidate:** `artifacts/d027/s008/landscape/candidate-v004.png`
- **Version / checksum:** v004 — `340f96cb88f1770d7ba9c11ce3c8a8cd43edc8d15624b811d6ac0ec6f515daf6`
- **Review time:** 2026-11-14T03:02:42Z
- **Anatomy:** Four two-armed, two-legged pullers are visible. Their torsos and limbs remain connected; no extra or fused limbs are visible.
- **Faces:** **Needs-fix defect:** the two asura faces at approximately **x=270–590, y=340–435 px** repeat the same profile, curled moustache, topknot silhouette, brow, and facial proportions. The color differs, but the paired faces read as repeated copies at full-image viewing size. This is noticeable in the small cast and conflicts with the plan’s distinct, visually varied groups/no-cloned-crowds requirement.
- **Hands / feet:** Both hands of each puller visibly grip the rope; grips and forearms remain attached. Feet are inside the frame and naturally placed. No digit error is visible.
- **Clothing and cast:** Traditional draped garments cover the lower bodies; bare torsos are ordinary mural dress. The two devas have differentiated skin tone, clothes, and face; no sexualized framing or duplicated body is visible.
- **Text / signature artifacts:** No readable text, signature, or watermark visible in the image, water, or corners.
- **Scene and caption fidelity:** Mandara is central, with one continuous Vasuki around it. Its single head is at the left/asura end; the tapering tail reaches the right/deva end. Both groups resume pulling. A restrained warm field behind the mountain supports the planned shared sustaining presence without adding a second Vishnu. This matches plan stanza 8 and photo 013’s renewed-churning caption.
- **Character / deity contract:** Serpent continuity and head/tail assignment are correct; no duplicate Vishnu appears. The repeated asura faces violate the plan’s crowd rule at `art/plans/d027.json:30,406–420` and the devas/asuras distinct-face and no-clone requirements (`characters/devas/character.json:18–25`; `characters/asuras/character.json:18–26`).
- **Verdict: needs-fix.** The repeated asura faces are a genuine, full-image-visible cast defect.

### Stanza 9 — `candidate-v002.png`

- **Candidate:** `artifacts/d027/s009/landscape/candidate-v002.png`
- **Version / checksum:** v002 — `8ce57af6c8c18bc4afd3b77fa3f3200965441c7cf2db898f08ffb16411f23a7a`
- **Review time:** 2026-11-14T03:02:42Z
- **Anatomy:** Vishnu has four attached arms; the two upper and two lower arms are distinct and connected. Brahma has three distinct front-visible faces (the fourth head faces behind) and four attached arms. Shiva appears as one coherent two-armed figure. No fused or extra limbs are visible.
- **Faces:** Vishnu’s face is intact. Brahma’s three visible faces are distinct, not merged; Shiva and the smaller witnesses have coherent faces. No repeated identical witness faces are conspicuous.
- **Hands / feet:** Vishnu’s lotus hand touches/stabilizes the mountain; his other three hands hold distinct attributes. Brahma’s four hands hold separate attributes. Visible hands and feet are attached and legible. Some peripheral witnesses continue beyond the right frame edge, but no face or key hand is cut off.
- **Clothing and cast:** Traditional clothing is intact and modest. The scene includes a conspicuously tall tiered crown with peacock feather and several necklaces on Vishnu (most visible at **x=285–510, y=20–370 px**); this is recorded factually as ornament, not treated as a defect under the review threshold for ordinary temple-mural deity ornament. The image also has a scalloped decorative perimeter, an observable departure from the series’ full-bleed/no-outer-border target (`series.json:21`); no frame defect is counted under the specified fail categories for this review.
- **Text / signature artifacts:** No readable text, signature, or watermark in the candidate. The small book-like Brahma attribute has no visible writing.
- **Scene and caption fidelity:** Vishnu steadies the spinning Mandara with one lotus hand; Brahma, Shiva, and a compact group of devas praise him as flowers fall. The scene matches plan stanza 9 and photo 014’s praise caption. No nectar or second narrative scene is introduced.
- **Character / deity contract:** The required four-armed Vishnu and four-headed/four-armed Brahma are satisfied. No structural prohibition is violated; see `art/plans/d027.json:27–30,457–471`, `characters/vishnu/character.json:18–29`, and `characters/brahma/character.json:20–48`. The noted crown, feather, and necklace ornamentation is the disclosed residual and is assessed under the supplied ordinary-iconography rule.
- **Verdict: pass.**

### Stanza 10 — `candidate-v006.png`

- **Candidate:** `artifacts/d027/s010/landscape/candidate-v006.png`
- **Version / checksum:** v006 — `4e73e13bbc96505b19fbe02be077641ae08230acb9c692ea6d12cf25a74a037b`
- **Review time:** 2026-11-14T03:02:42Z
- **Anatomy:** Four pullers have naturally attached arms and legs. The hands grip one connected serpent body. No extra limbs, fused bodies, or malformed extremities are visible.
- **Faces:** **Needs-fix defect:** the two devas at approximately **x=35–470, y=345–500 px** repeat the same profile, topknot, hairline, and face proportions; the two asuras at approximately **x=1,210–1,610, y=330–505 px** repeat the same dark hair, moustache, profile, and face proportions. The near-identical paired faces on both sides are conspicuous in the full image and match the disclosed residual; they violate the plan and cast contracts’ no-cloned-faces requirement.
- **Hands / feet:** All visible pulling hands remain attached and placed on the serpent; feet remain in-frame. No finger/toe defect is visible at the inspected scale.
- **Clothing and cast:** Both groups are modestly dressed in distinct cream/olive and maroon/ochre wraps; no exposed skin beyond ordinary traditional dress. Their positions distinguish devas from asuras, but the paired faces do not satisfy the required visual variety.
- **Text / signature artifacts:** No readable text, signature, or watermark visible, including ground, water, and corners.
- **Scene and caption fidelity:** Vasuki’s single head releases muted fumes toward the asuras; rain falls over the devas and not the asuras. The rope stays connected around Mandara. This matches plan stanza 10 and photo 015’s poison/selective-rain caption.
- **Character / deity contract:** One serpent head/body and correct selective rain are present. The repeated faces violate `art/plans/d027.json:30,505–519`, `characters/devas/character.json:18–25`, and `characters/asuras/character.json:18–26`.
- **Verdict: needs-fix.** The cloned pairs are clearly visible at full-image scale.

### Stanza 11 — `candidate-v002.png`

- **Candidate:** `artifacts/d027/s011/landscape/candidate-v002.png`
- **Version / checksum:** v002 — `50f2e4ea5f0188a0446547f496fb7cbc8154644b65003e36840c54f29958b54d`
- **Review time:** 2026-11-14T03:02:42Z
- **Anatomy:** Vishnu has exactly two attached arms, with no extra arms hidden in the torso or water. The serpent has one head and one continuous body. Bhattathiri is a single, naturally proportioned older adult. No malformed faces or fused bodies are visible.
- **Faces:** Vishnu’s face is coherent. Bhattathiri is visibly older and clean-shaven, with no beard or moustache. No duplicate figure or malformed face is visible.
- **Hands / feet:** Vishnu’s two hands visibly grip opposite portions of the same serpent. Bhattathiri’s joined hands are attached and legible. Vishnu’s legs/feet are partly obscured by the water, not cut by the frame; Bhattathiri’s lower seated figure continues naturally off the lower edge as a peripheral figure. No digit defect is visible.
- **Clothing and cast:** Both figures wear traditional, modest garments. Vishnu has a conspicuous tiered crown, peacock feather, and several necklaces (face/crown around **x=420–750, y=0–420 px**; necklaces across **x=350–850, y=250–510 px**). These match the disclosed ornament residual and are recorded as observations under the ordinary-iconography threshold. Bhattathiri is small and prayerful at far right, as planned.
- **Text / signature artifacts:** No readable text, signature, or watermark visible in the water, ground, foliage, or corners.
- **Scene and caption fidelity:** Vishnu alone resumes churning, while fish and two makara forms surface; nectar is absent. Bhattathiri prays on the shore. The candidate follows plan stanza 11 and photo 016’s closing caption.
- **Character / deity contract:** The stanza-specific two-arm requirement is met and both hands hold the same Vasuki. Bhattathiri meets the older, clean-shaven cue. No structural prohibition is violated; see `art/plans/d027.json:27,555–569`, `characters/vishnu/character.json:18–29`, and `characters/bhattathiri/character.json:17–31`. The disclosed ornament residual is not failed under the supplied iconography rule.
- **Verdict: pass.**

## Recommendation and inventory attestation

Regenerate stanza 8 and stanza 10 as new candidate versions with visibly varied faces for each deva/asura; preserve these reviewed files and do not overwrite them. The other three reviewed images pass this independent visual check for their exact checksums. This report does not approve art or change any approval manifest. No new captain decision is raised by this review: the pending captain art approval noted in the plan is the standing state. My captain-call inventory for this review is empty.

## Commands / review actions recorded

- `sha256sum <five candidate paths>` before and after inspection.
- `sha256sum <frozen plan, series bible, and 13 character contracts>`.
- `magick identify <five candidate paths>`.
- `magick <read-only candidate> -crop <region> +repage <this-worktree .review-scratch crop>`; focused regions and coordinates are recorded above.
- Opened each native-resolution full candidate and each mapped source photo `012.jpg`–`016.jpg` with the image viewer; read caption mapping and stanza entries in the specified content and caption files.
