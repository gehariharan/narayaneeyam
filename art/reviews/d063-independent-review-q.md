# D063 S001–S005 landscape candidate review

## Scope and method

I independently inspected the five selected landscape candidates at native resolution, then inspected enlarged crops made from read-only copies in my own worktree scratch directory. I checked the matching intake photos and captions (001–005), the frozen final plan, and the frozen series and character contracts. I also checked the entire frame, including the ground, vegetation, water, and corners, for readable text, signatures, logos, and watermarks. The verdicts below bind only to the exact candidate SHA-256 values listed for each image. This is a visual review, not art approval; no approval manifest or producer file was changed.

The plan maps stanzas 1–5 to `intake/D063/001.jpg` through `005.jpg` and gives the scene requirements and selected versions in [plan stanza 1 lines 35–83](../../data/d063-production/review-contract-q/art/plans/d063.json), [stanza 2 lines 86–134](../../data/d063-production/review-contract-q/art/plans/d063.json), [stanza 3 lines 137–185](../../data/d063-production/review-contract-q/art/plans/d063.json), [stanza 4 lines 188–236](../../data/d063-production/review-contract-q/art/plans/d063.json), and [stanza 5 lines 239–281](../../data/d063-production/review-contract-q/art/plans/d063.json). Chapter text and caption provenance are in `content/daskams/d063.json:17–62`; the mapped caption text is in `intake/D063/photo-captions.txt:1–26`.

Contract checks used the series' matte mural, palette, no-text, no-signature, no-cinematic-lighting, and no-extra-finger rules (`art/bible/series.json:5–6, 20–24, 34–64`); Krishna's youthful appearance, deep matte blue skin, plain forehead, simple low band and feather, clothing, and two-arm/two-leg anatomy (`art/bible/characters/krishna-vrindavan-youth/character.json:5–14, 54–63`); and the gopas' distinct faces, ordinary proportions, muted traditional dress, and no-extra-limb rules (`art/bible/characters/gopas/character.json:15–28`). No unrelated Varaha, Indra, or deva contract is applied to these five scenes.

### Contract SHA-256 values actually read

- Final frozen plan `art/plans/d063.json`: `f3a9a476d14a658193f064ebd5c78903b023e3e74161645e80f5074fae28f95c` (matches expected).
- Frozen series bible `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` (matches expected).
- Krishna contract `art/bible/characters/krishna-vrindavan-youth/character.json`: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` (matches expected).
- Gopas contract `art/bible/characters/gopas/character.json`: `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` (matches expected).
- Indra contract `art/bible/characters/d063-indra/character.json`: `175d3e4a04c9b806896037023921e299eacf02a847c9e39403b70a5ecd9d6591` (matches expected).
- Deva witnesses contract `art/bible/characters/d063-deva-witnesses/character.json`: `1643bde726b340bfdef887517edc3504eb58e8fcd5291ee0cb2b05345d8c6785` (matches expected).
- Varaha contract `art/bible/characters/varaha/character.json`: `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3` (matches expected).

All five producer candidate hashes matched the expected values before inspection. Native dimensions were confirmed with `identify`. For skin sampling, I used 21×21 px patches from the copied candidate, exported pixels with ImageMagick, and calculated the median of each sRGB channel. Coordinates below are patch centers in the original candidate frame; every patch was visually checked as exposed skin.

## Candidate findings

### Stanza 1 — v005

- **Candidate:** `artifacts/d063/s001/landscape/candidate-v005.png` — 1672×941 px.
- **Verified SHA-256:** `1d6077138dbfe08480b02c14d82e08a09c3078da7492cb7d6bbbf6f2156622c5`.
- **Review time:** 2026-11-16T02:17:06Z.
- **Anatomy:** Three distinct villagers with coherent proportions; no duplicate person or fused body.
- **Faces:** Three readable, individually distinct concerned faces; none cut by the frame.
- **Hands/feet:** The head-shading, chin-touching, and open-gesture poses have connected hands and arms. Finger and toe lines are separately drawn in the enlarged group crop; no extra or malformed digits seen. All feet are inside the frame.
- **Clothing and cast:** The three men wear cream dhotis and muted red/olive wraps, with ordinary bare-chested traditional dress. No exposed area or framing is beyond ordinary dress. Krishna is absent, which the plan explicitly permits. No cattle, hill shelter, Indra, or lightning is introduced.
- **Text/signature artifacts:** None seen in the frame, including the ground, grass, or corners.
- **Scene and caption fidelity:** Deep indigo-blue roaring storm clouds fill the upper field over Vraja; rain and a small group looking up convey the captioned alarm. The dominant temple from reference photo 001 is not copied, consistent with the plan's story-cue-only reference policy. The plan’s selected cloud-color condition (“deep indigo-blue with no grey or purple cast,” plan line 73) is present.
- **Character/deity contract:** Villagers remain distinct and normally proportioned; no Krishna-specific check applies because he is not depicted. Cloud and ground fields have visible repeated mural-like texture; no text, cinematic beams, or volumetric light is visible.
- **Skin-only 21×21 median RGB patches:** gopa 1 at (165,660): **(209,117,24)**; gopa 2 at (340,650): **(200,111,20)**; gopa 3 at (515,660): **(203,111,20)**.
- **Verdict: pass.** The storm-cloud color matches the plan; no qualifying defect was found.

### Stanza 2 — v005

- **Candidate:** `artifacts/d063/s002/landscape/candidate-v005.png` — 1671×941 px.
- **Verified SHA-256:** `788d68712e9b9f769692d45a5f4b7dd3d11308c69bc52d19226fb53b63ddc4b6`.
- **Review time:** 2026-11-16T02:17:06Z.
- **Anatomy:** Krishna and three cowherds have connected limbs and coherent proportions. The two cows at the sides are distinct, four-legged animals with coherent heads and bodies; no cloned person or animal is visible.
- **Faces:** Krishna is youthful, serene, and distinct from the older and younger cowherds. Face crops show no malformed features or frame cuts.
- **Hands/feet:** Krishna has two attached arms: his open reassuring hand shows five digits, and the other rests against his chest with five separated finger shapes. The cowherds' pleading hands remain connected; overlapping prayer fingers are not malformed. Their and Krishna's feet are fully inside the frame, with toe lines visible and no digit defect.
- **Clothing and cast:** Krishna wears a yellow dhoti, red-orange shawl, simple low band and one upright feather. His gold-toned necklace, earrings, armlets, and belt are visible ordinary mural ornamentation. The cowherds wear muted wraps and dhotis. Dress is traditional and modest; the cattle remain separate from the people.
- **Text/signature artifacts:** None seen, including among the rain, ground channels, grass, and corners.
- **Scene and caption fidelity:** Diagonal rain and visible hail surround a small group of frightened cowherds and cattle. Krishna answers them with a calm open gesture. No lifted hill appears, as required for this pre-lift stanza; the matching caption and reference photo 002 support the storm-and-plea context.
- **Character/deity contract:** Krishna has one face, two arms, two legs, long dark hair, a bare smooth forehead, yellow dhoti, red-orange shawl, and a simple band with one feather. Skin reads deep opaque blue. The plan's disclosed cheek/torso/forearm medians and bare-forehead observation (line 124) are consistent with inspection; my Krishna patch at (1170,400) is **(50,76,118)**, B−R = 68. Main-figure skin-only patches: gopa 1 at (270,460): **(230,128,34)**; gopa 2 at (470,460): **(225,125,34)**; gopa 3 at (780,300): **(166,116,31)**.
- **Verdict: pass.**

### Stanza 3 — v005

- **Candidate:** `artifacts/d063/s003/landscape/candidate-v005.png` — 1672×941 px.
- **Verified SHA-256:** `0911c42506adf52b0488ed9d9c354ba7c7261aea925ddfba7d2391ca7662b3d0`.
- **Review time:** 2026-11-16T02:17:06Z.
- **Anatomy:** Krishna has one face, two arms, and two legs; the two witnessing cowherds are separate people with coherent bodies. No clone, fusion, or malformed face is visible. Both of Krishna's feet are fully inside the frame; the lower-left foot has visible ground margin in the enlarged crop.
- **Faces:** Krishna's youthful smiling face is clear and not infant-like. His forehead is plain. The two cowherds' faces are distinct and intact.
- **Hands/feet:** Each raised palm connects through its wrist and arm to Krishna and meets the underside of the hill base. In the enlarged hand crops, each palm shows four separated fingertips; the thumb is obscured by the palm-to-rock contact and is not visibly malformed or detached. Krishna's toes are outlined at both feet; no extra digit or cut extremity is visible. Cowherds' hands and feet are connected.
- **Clothing and cast:** Krishna wears the yellow dhoti, red-orange shawl, low band and one feather; the two witnesses wear simple traditional wraps. Modest dress; no additional or unrelated deity.
- **Text/signature artifacts:** None seen in any part of the frame, including rocks, soil, vegetation, and corners.
- **Scene and caption fidelity:** The scene clearly shows the initial uprooting, with the hill still connected to its base and the two hands visibly supporting it, plus two witnesses. It follows caption 003 and the plan's “first lift” action without copying the reference photo's shelter composition.
- **Character/deity contract:** Face, hair, clothing, forehead, feather, and two-arm/two-leg form match the character contract. Krishna's exposed skin is visibly muted slate blue-gray rather than the contract's deep matte blue; this is the deviation already disclosed in plan line 175. My 21×21 torso patch centered at (790,530) is **(92,111,123)**. Witness skin patches: gopa 1 at (140,400): **(206,104,16)**; gopa 2 at (245,420): **(216,117,26)**.
- **Verdict: pass — disclosed deviation present.** The disclosed slate blue-gray skin deviation is present; no other qualifying defect was found.

### Stanza 4 — v006

- **Candidate:** `artifacts/d063/s004/landscape/candidate-v006.png` — 1672×941 px.
- **Verified SHA-256:** `95335925ca6504d31f4cc00f1281cf6d794a97c89dff4d545c88813324b4812a`.
- **Review time:** 2026-11-16T02:17:06Z.
- **Anatomy:** Krishna, two cowherds, one woman, one cow, and one calf have distinct, coherent bodies. Krishna has one face and two attached arms and legs. The animal legs and heads remain distinct; no accidental duplicate, fusion, or malformed face is visible.
- **Faces:** Krishna's face is serene and youthful with a plain forehead. The gopas and woman have distinct, intact faces; none is clipped by the frame.
- **Hands/feet:** The supporting palm at approximately x=820–930, y=155–220 has five separated fingertips and visibly meets the hill's underside from below, outside the rock face. Krishna's other arm ends in a connected relaxed hand. The cowherds' and woman's joined/prayer hands remain connected; feet and toes visible at the frame bottom are fully inside it.
- **Clothing and cast:** Krishna wears a yellow dhoti, red-orange shawl, and the simple headband-and-feather identity. The two gopas wear cream/olive wraps; the woman wears a muted sari. The cow and calf are coherent. Clothing is modest and traditional. Krishna's earrings and armlet are ordinary mural ornamentation.
- **Text/signature artifacts:** None seen on hill, ground, vegetation, water/rain, or corners.
- **Scene and caption fidelity:** Govardhana forms a broad shelter roof; people and cattle stand on visibly dry ochre ground beneath it while rain falls outside. The supporting hand remains attached. The scene matches caption 004's sand-bed shelter and follows the plan's explicit no-flood/no-cinematic-rays requirements; no beams or volumetric light are visible.
- **Character/deity contract:** Youth, hair, clothing, feather, plain forehead, and limb count match. Skin reads muted slate blue-gray, the deviation disclosed in plan line 226. Krishna's 21×21 torso patch centered at (770,420) is **(67,92,111)**. Other exposed-skin patches: gopa 1 at (165,680): **(225,115,21)**; gopa 2 at (250,620): **(216,113,20)**; woman at (1100,560): **(228,117,23)**.
- **Verdict: pass — disclosed deviation present.** The disclosed slate blue-gray skin deviation is present; no other qualifying defect was found.

### Stanza 5 — v006

- **Candidate:** `artifacts/d063/s005/landscape/candidate-v006.png` — 1672×941 px.
- **Verified SHA-256:** `89ef5c63912e6972356947eb64e830c662be33cba1a094d9dd9f6823d31ec054`.
- **Review time:** 2026-11-16T02:17:06Z.
- **Anatomy:** Krishna, two cowherd companions, and one cow have distinct, coherent bodies. The cow's four legs, head, muzzle, and tail are connected and distinct. Krishna's two arms are unambiguously separate; no duplicate or fused figure is visible.
- **Faces:** Krishna has one serene youthful face; the cowherds have visibly distinct faces. The cow's face and ears are coherent. No face is clipped.
- **Hands/feet:** The raised left palm has five separated fingertips and continuous palm-to-hill contact at approximately x=780–880, y=45–115; it meets the underside, not the rock face. Krishna's right arm is separately connected to the cow-touching hand; four fingertips are visible against the cow and the thumb is at the far side of the contact. Cowherds' hands are connected. Krishna's and the cowherds' feet and visible toes are fully within frame.
- **Clothing and cast:** Krishna wears his yellow dhoti, red-orange shawl, low band and one upright feather. He has layered gold-toned necklaces, armlets, bracelets, and belt, observed as ordinary temple-mural ornamentation. The two companions wear traditional wraps; their dress is modest. The cow has no abnormal anatomy.
- **Text/signature artifacts:** None seen in hill, ground, vegetation, rain, or corners.
- **Scene and caption fidelity:** Krishna's raised hand supports the hill while his other hand gently touches the nearby cow; two companions converse with him in the dry shelter. The actions remain separately legible and match caption 005 and the plan. No second hill-supporting hand or overlapping arm is present.
- **Character/deity contract:** Krishna's face, hair, forehead, feather, costume, and limb count match. His skin is visibly desaturated slate blue-gray, the deviation disclosed in plan line 277. The 21×21 torso patch centered at (680,360) is **(94,115,132)**. Cowherd skin patches: gopa 1 at (1150,300): **(235,122,24)**; gopa 2 at (1390,470): **(249,180,99)**.
- **Verdict: pass — disclosed deviation present.** The disclosed slate blue-gray skin deviation is present; no other qualifying defect was found.

## Reproducibility and evidence

Commands used for the integrity and pixel checks:

```sh
sha256sum \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/plans/d063.json' \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/bible/series.json' \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/bible/characters/krishna-vrindavan-youth/character.json' \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/bible/characters/gopas/character.json' \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/bible/characters/d063-indra/character.json' \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/bible/characters/d063-deva-witnesses/character.json' \
  '/home/gehariharan/firstmate-narayaneeyam-mate/data/d063-production/review-contract-q/art/bible/characters/varaha/character.json' \
  '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d063/s001/landscape/candidate-v005.png' \
  '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d063/s002/landscape/candidate-v005.png' \
  '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d063/s003/landscape/candidate-v005.png' \
  '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d063/s004/landscape/candidate-v006.png' \
  '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/artifacts/d063/s005/landscape/candidate-v006.png'
identify '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/14/narayaneeyam/.scratch/d063-review-q/'*.png
magick <copied candidate> -crop <width>x<height>+<x>+<y> +repage <scratch crop PNG>
magick <copied candidate> -crop 21x21+<x-10>+<y-10> +repage -depth 8 txt:-
```

I copied the five candidates and five mapped reference photos from their read-only producer intake locations into `.scratch/d063-review-q/` in my worktree before cropping. Native full frames and crops were inspected visually with `view_image`; the crops include the cast, faces, hands, Govardhana contacts, feet, and scene margins. No tests were run because this was a read-only visual review. Scratch copies and crops were deleted after the report was written.

## Recommendation and captain-call inventory

All five exact-checksum candidates pass the stated visual gate, with the disclosed Krishna-skin deviations on stanzas 3–5 recorded above. Stanza 1’s indigo cloud treatment matches its plan. Keep the pending captain art approval as the existing standing state; this review raises no new captain decision and confers no approval. Empty captain-call inventory attested.
