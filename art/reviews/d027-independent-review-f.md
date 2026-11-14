# D027 landscape candidate review: stanzas 1–4

## Scope and method

I independently reviewed the four selected landscape candidates individually, each bound to the verified image checksum below. I read the frozen final plan, series bible, all listed character contracts, D027 content and the hash-bound reference map. I inspected the mapped lead photos 003.jpg, 004.jpg, 005.jpg and 007.jpg with their caption excerpts, then viewed each complete candidate at native resolution and detail crops made from that candidate. Full-candidate dimensions were 1672 × 941 px for S001–S003 and 1671 × 941 px for S004. The inspection crops were taken from the original rasters; coordinates below are `x,y,width,height` in native pixels. Review time (UTC): 2026-11-14 01:44Z.

Commands/evidence: `sha256sum <all frozen contract paths and four candidate paths>` returned exactly the expected hashes listed here; `identify -format '%f %wx%h\\n' <four candidates>` returned the dimensions above. Visual inspection used `view_image` at original detail for the complete images and ImageMagick `magick <candidate> -crop ... +repage <scratch crop>` followed by original-detail views for face, hand, foot, creature, crowd, corner and ground regions. Mapped lead references were opened individually. Plan and scene evidence is in frozen `art/plans/d027.json` (S001 lines 42, 57–81; S002 lines 92, 109–132; S003 lines 144, 159–183; S004 lines 194, 210–217); stanza-to-reference mapping is in `content/sources/d027/reference-map.json` and captions are in `intake/D027/photo-captions.txt` (#1 lines 3–11, #2 line 16, #3 line 21, #4 line 26). Character-contract line references are included per candidate.

## Frozen contract SHA-256 values

All actual values matched the expected values supplied for this review.

| Contract file | SHA-256 actually read |
|---|---|
| `art/plans/d027.json` (final frozen plan) | `1916d7fa8441ddbace6956f7bd4f8b0672e2792803db399206cf21ce82c20dd3` |
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

### Stanza 1 — candidate v004

- **Candidate / checksum:** `artifacts/d027/s001/landscape/candidate-v004.png` — `8955bee95d6672d37d9d199f4632b41cb5ec53412ae0d1ef28ade481894a23ad` (verified).
- **Anatomy:** Durvasa and Indra each read as one naturally proportioned adult with one head, two arms and two legs. Airavata is one elephant with one head, one trunk, two ears and four attached legs. The near forefoot visibly presses the flower garland. No duplicate body, fused limb or extra animal part is apparent.
- **Faces:** Durvasa has a single bearded face with an angry expression; Indra's face is single and bowed. The elephant has one natural elephant face. No malformed or duplicated face is visible. Detail views: sage crop `(0,130,700,760)`, Indra crop `(430,300,600,600)`.
- **Hands / feet:** Durvasa's staff-gripping hand and extended pointing hand are attached and readable; Indra's hand at his forehead and planted hand are attached. The elephant's four feet are visible in the full image; the near forefoot overlaps the flowers without a visibly malformed joint. No conspicuous extra, missing or fused digits at full-image scale. Foot/ground detail crop `(1000,500,600,430)`.
- **Clothing and cast:** Durvasa wears traditional saffron ascetic drapery and beads; his bare torso is ordinary ascetic mural dress. Indra wears a cream garment and blue drape with a tiered crown, earrings, armlets and layered jewelry; these are ordinary royal iconography, recorded as an observation. The disclosed absence of Airavata's adornments is present. No inappropriate exposure or sexualized framing.
- **Text / signature artifacts:** No readable text, signature or watermark is visible. I checked the ground, flowers, image corners and architectural detail.
- **Scene and caption fidelity:** The image matches the reference's angry sage pointing at Indra and communicates the curse aftermath: Indra is bowed, and the garland lies crushed beneath Airavata's forefoot. However, the plan's S001 `must_show` explicitly requires Durvasa presenting the garland to Indra and Indra passing it to Airavata (plan lines 59–64). In the native-pixel region `(425,390)` to `(1375,815)`, Indra is kneeling apart from the elephant and the garland is already on the ground beneath its forefoot; no handoff or presentation is shown. A full-image viewer cannot see the required transfer. This is a missing required scene action, not an ornament judgment.
- **Character / deity contract:** The visible Durvasa and Indra anatomy and single Airavata with natural four legs conform to the relevant rules (Durvasa lines 11–21, Indra lines 18–30, Airavata lines 17–25). The plan discloses painterly textured rendering and altered poses departing from the flat-matte style reference (line 80); that deviation is present. It does not change the anatomy finding.
- **Verdict: needs-fix.** The missing visible garland handoff is the sole defect found; revise the scene so the required transfer is legible while retaining the curse and crushed-garland event.

### Stanza 2 — candidate v002

- **Candidate / checksum:** `artifacts/d027/s002/landscape/candidate-v002.png` — `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933` (verified).
- **Anatomy:** Vishnu has four attached arms and a coherent seated body. Brahma has three distinct faces visible from the front and four visibly attached arms/hands; the rear-facing fourth head is not visible from the front, as the contract specifies. Shiva is one single-faced figure with two arms. The petitioners are separate, readable bodies; no fused or cloned person is apparent.
- **Faces:** Vishnu, the three visible Brahma faces, Shiva, Indra and the other devas have legible, non-malformed faces. Brahma's left and right profile faces remain distinct from the central face. Detail crops: Brahma `(500,130,650,750)`, Vishnu `(1040,100,580,750)`, petitioners `(0,120,600,750)`.
- **Hands / feet:** Brahma's four hands are individually attached and hold separate attributes; Vishnu's four hands are distinct, including the conch, discus, lotus and open gesture. Shiva's joined hands are visible. The devas' joined hands and bent legs are readable. Enlarged crops show no extra/missing/fused fingers or toes that a viewer would notice in the full image.
- **Clothing and cast:** Indra appears subdued in the foreground, with the other devas in simple garments. Vishnu wears a tiered crown, earrings, several necklaces, armlets and sacred adornments; Brahma wears a crown and beads; these are ordinary temple-mural ornaments, not a defect. Shiva's crescent, ash marks and ascetic clothing distinguish him. Dress is traditional and modest.
- **Text / signature artifacts:** No readable text, signature or watermark is visible. The bundle in Brahma's hand is blank, with no writing. The ground and corners are clean of text-like artifacts.
- **Scene and caption fidelity:** The shallow gathering approaches Vishnu; Indra is visibly bowed and subdued; Brahma and Shiva accompany the petition; Vishnu faces the group in calm attention. This is consistent with lead reference 004.jpg and its caption (caption line 16), and the plan's S002 brief (lines 109–116).
- **Character / deity contract:** Vishnu's four-arm form follows the stanza-specific contract (Vishnu lines 18–31); Brahma shows the specified three forward-visible faces and four arms (Brahma lines 20–38); Shiva is single-faced and two-armed (Shiva lines 11–21); the devas are distinct and natural (devas lines 17–25). The ornamentation is observed and does not contradict a prohibition.
- **Verdict: pass.**

### Stanza 3 — candidate v003

- **Candidate / checksum:** `artifacts/d027/s003/landscape/candidate-v003.png` — `b4776791ba78aae2a72c2125ed9403251a03254c3f6ea7a81f8d55cf81cda80f` (verified).
- **Anatomy:** Vishnu's four arms are distinct and attached; seated legs and exposed foot are in natural proportion. The three listening devas are separate, naturally proportioned adults. No duplicate, fused or extra limb is apparent.
- **Faces:** Vishnu has one serene face. The three listeners have distinct faces and profiles without malformed features. Crops: Vishnu `(0,100,650,760)`, devas `(900,130,750,760)`.
- **Hands / feet:** Vishnu's conch, discus, mace and teaching gesture are each held by a separate hand; the gesture fingers are distinct. In the foot crop `(410,640,360,210)`, several toe separations and two toenails are resolved; at full composition size there is no conspicuous malformed toe or viewer-noticeable digit error. The devas' folded hands are clear and not fused.
- **Clothing and cast:** Vishnu wears the traditional cream and maroon garments and a richly ornamented crown, layered necklaces and flower garland. This is ordinary temple-mural iconography. The devas wear modest cream/saffron/olive garments, with restrained crowns on named leaders. Brahma is optional under the S003 brief and is absent; this is not a missing required figure.
- **Text / signature artifacts:** No writing, signature or watermark is visible in the full frame, corners, rocks, water or ground.
- **Scene and caption fidelity:** Vishnu is the focal teacher, gesturing toward a small mountain in the ocean while a single quiet group listens; no second narrative panel, written plan or produced nectar is shown. This matches lead reference 005.jpg/caption line 21 and plan lines 159–166.
- **Character / deity contract:** Vishnu has the four-arm form allowed for this scene and no extra limbs or duplicate (Vishnu lines 18–31). The group follows the natural, distinct humanoid rule (devas lines 17–25). The ornate crown and layered necklaces do not violate a structural prohibition.
- **Verdict: pass.**

### Stanza 4 — candidate v003

- **Candidate / checksum:** `artifacts/d027/s004/landscape/candidate-v003.png` — `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b` (verified).
- **Anatomy:** Vishnu has four distinct, attached arms. Garuda is one coherent eagle-like bird with one head, two attached wings and two legs; both taloned legs meet the mountain. Devas at left and asuras at right are distinct two-armed humanoids. No extra or fused body part is apparent. Crops: Vishnu/Garuda `(480,0,650,780)`, devas `(0,120,520,780)`, asuras `(1150,120,520,780)`.
- **Faces:** Vishnu, Garuda and all visible carriers have distinct, intact faces. The peripheral group faces remain inside the frame; no key face or extremity is cut off. No malformed or cloned faces are visible.
- **Hands / feet:** Vishnu's four attribute hands are separately attached and readable. Garuda's two taloned legs are separately visible on the mountain. The devas' and asuras' open or joined hands are readable; the people have connected limbs and feet. No full-image-noticeable extra, missing or fused digits found in close views.
- **Clothing and cast:** Vishnu wears a tiered crown and layered necklaces/garlands, in ordinary temple-mural iconography. Garuda has a small crown and neck ornament; these do not contradict his contract, which prohibits extra anatomy and glossy metallic feathers, not ordinary adornment. The groups are modestly dressed, with devas in cream/ochre and asuras in maroon/ochre; no grotesque caricature or sexualized framing.
- **Text / signature artifacts:** No text, signature or watermark is visible, including over the orange background, waves, corners and ground.
- **Scene and caption fidelity:** The groups frame the mountain over the milk-ocean waves and reach toward it; Vishnu rides Garuda as the bird lifts/supports the mountain. This reads as the recovery and placement described in caption #4 (caption line 26) and plan S004 (lines 210–217). The scene is a single legible moment, not a second panel.
- **Character / deity contract:** Vishnu's four-arm form conforms to the stanza-specific rules (Vishnu lines 18–31); Garuda meets the one-head/two-wing/two-leg contract (Garuda lines 17–25); devas and asuras are natural, separated groups (devas lines 17–25; asuras lines 17–25). No explicit structural prohibition is contradicted.
- **Verdict: pass.**

## Recommendation and captain-call inventory

Keep the review bound to these exact checksums. S002, S003 and S004 pass this independent visual review. S001 needs a new candidate with the required garland presentation/transfer made visible; the disclosed painterly texture and Indra ornamentation are not the basis for its verdict. Do not interpret any pass as captain art approval or approval-manifest change.

Captain-call inventory for this review: **empty**. The pending chapter art approval is the standing state and is not a decision raised by this review; the S001 finding is a concrete revision recommendation, not a question requiring a captain choice.
