# D027 landscape candidate review: stanzas 1–6

## Scope and method

I independently reviewed the six selected landscape candidates at native resolution and in enlarged, image-specific crops of faces, hands, feet, deity anatomy, crowded groups, and creature anatomy. I compared each image with its mapped captioned reference photo, its final-plan scene brief, and the applicable character contracts. The candidate files, frozen plan, series bible, and all listed character contracts matched their expected SHA-256 values before inspection. No project or approval file was changed. Scratch crops were removed after review.

All six candidates are 16:9 PNGs, 1672×941 except S004 at 1671×941. The plan's reference map assigns S001–S006 to lead photos 003, 004, 005, 007, 008, and 011 respectively (reference-map.json lines 15–105; content/daskams/d027.json lines 17–72). The plan scene and candidate-version entries are at art/plans/d027.json lines 42–333. The plan calls for a flat matte mural and restrained ornament (lines 27–31); the Vishnu identity contract calls for a restrained crown and sacred ornament (characters/vishnu/character.json lines 16–25), while Indra's contract calls for a modest crown and restrained clothing borders (characters/indra/character.json lines 18–24).

Review time recorded for each image: **2026-11-14T01:36:32Z**. Verdicts apply only to the exact candidate SHA-256 listed below. “Needs-fix” findings cite native-image pixel coordinates as `[x1,y1]–[x2,y2]`, origin at the upper-left.

## Contract file checksums actually read

| File | SHA-256 |
|---|---|
| `art/plans/d027.json` (frozen final plan) | `1916d7fa8441ddbace6956f7bd4f8b0672e2792803db399206cf21ce82c20dd3` |
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

### Stanza 1 — v004

- Candidate: `artifacts/d027/s001/landscape/candidate-v004.png`
- SHA-256: `8955bee95d6672d37d9d199f4632b41cb5ec53412ae0d1ef28ade481894a23ad`
- Reference: `intake/D027/003.jpg`, mapped at reference-map.json lines 15–27; caption/source text at content/daskams/d027.json lines 17–24.
- **Anatomy:** Durvasa and Indra each read as one naturally proportioned person. Airavata has one head and trunk and four attached legs; no duplicate person or animal is visible.
- **Faces:** Durvasa's angry face and Indra's downcast face are coherent and distinct. Airavata's face is natural for the painted style.
- **Hands/feet:** Durvasa's two hands are distinct (staff hand and pointing hand); Indra's two hands are distinct (forehead and ground). Airavata's four feet are in frame; the near forefoot is placed over the broken garland. Enlarged crops show no conspicuous extra/missing digits or fused hand forms.
- **Clothing and cast:** Ordinary traditional garments cover the lower body; the bare upper torsos are not sexualised. **Needs-fix:** Indra's tall, densely filigreed gold crown and layered gold chest/arm ornaments at approximately `[650,365]–[825,660]` read as conspicuous royal regalia, beyond the modest crown and restrained clothing specified by the Indra contract (characters/indra/character.json lines 18–24). This is visible in the full scene and enlarged crop. Durvasa remains in ascetic cloth; Airavata has no adornments.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including the lower ground and corners.
- **Scene and caption fidelity:** Durvasa is at left, Indra and one elephant at right, and the crushed flower garland is clearly visible under the foot. The angry curse is conveyed by Durvasa's expression and pointing gesture. This is a legible aftermath moment consistent with mapped photo 003 and the plan at art/plans/d027.json lines 57–71. The textured, painterly departure from the flat-matte rendering reference is already disclosed in the plan's candidate status at line 80; it is not the defect cited above.
- **Character/deity contract:** Durvasa and Airavata meet the visible identity/anatomy requirements; Indra's face/body anatomy is sound. Indra's regalia is the contract mismatch cited above.
- **Verdict: needs-fix.**

### Stanza 2 — v002

- Candidate: `artifacts/d027/s002/landscape/candidate-v002.png`
- SHA-256: `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933`
- Reference: `intake/D027/004.jpg`, mapped at reference-map.json lines 46–55; caption/source text at content/daskams/d027.json lines 27–34.
- **Anatomy:** The small petitioning group is distinct. Shiva is one figure; Brahma has three visible faces (the fourth head turned behind) and four visibly attached arms. Vishnu has four attached arms. No fused or duplicated bodies are visible.
- **Faces:** Brahma's three visible faces are separate and readable; Vishnu's face is calm; the petitioners' faces are distinct. Indra is bowed and tired without grotesque aging.
- **Hands/feet:** Brahma's four hands hold scripture, water pot, lotus, and beads; the enlarged crop shows distinct attached wrists/hands. Vishnu's four hands have distinct actions/attributes (discus, blessing, lotus, conch). The foreground petitioner's prayer hands and visible feet show no conspicuous digit defect.
- **Clothing and cast:** The petitioners wear traditional cream/saffron garments, with no sexualised framing. **Needs-fix:** Vishnu's tall tiered crown with peacock feather and multiple heavy gold necklaces/pendants at approximately `[1285,0]–[1510,540]` visibly exceed the restrained crown and sacred ornament in characters/vishnu/character.json lines 21–25. The feather and layered regalia are conspicuous in the full image and enlarged crop; the S002 plan does not disclose this departure (art/plans/d027.json lines 109–123).
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible.
- **Scene and caption fidelity:** Vishnu receives a small distinct group; subdued Indra, Brahma, and Shiva are present. The gathering communicates the caption's collective petition. Plan match at art/plans/d027.json lines 109–123.
- **Character/deity contract:** Brahma's intentional four-headed form and four arms comply with characters/brahma/character.json lines 20–38. Vishnu's four-arm count is correct; the ornament mismatch above is the defect.
- **Verdict: needs-fix.**

### Stanza 3 — v003

- Candidate: `artifacts/d027/s003/landscape/candidate-v003.png`
- SHA-256: `b4776791ba78aae2a72c2125ed9403251a03254c3f6ea7a81f8d55cf81cda80f`
- Reference: `intake/D027/005.jpg`, mapped at reference-map.json lines 57–66; caption/source text at content/daskams/d027.json lines 37–44.
- **Anatomy:** Vishnu's four arms attach naturally. The four devas are separate, with no fused or cloned bodies. No abnormal body proportions are visible.
- **Faces:** Vishnu's face is proportionate; each listening deva has a distinct face and expression.
- **Hands/feet:** The enlarged crop shows Vishnu's discus, conch, and mace hands plus the open teaching gesture; wrists connect to four separate arms. The visible toes on Vishnu's resting foot and the petitioners' prayer hands show no conspicuous digit errors.
- **Clothing and cast:** Traditional garments cover the figures; no sexualised framing. **Needs-fix:** Vishnu's high tiered crown and peacock feather, plus dense layered necklaces and large floral garland at approximately `[280,115]–[590,640]`, exceed the restrained crown/ornament in characters/vishnu/character.json lines 21–25. The crown/feather/jewelry are obvious in the full frame; the S003 plan does not disclose this departure (art/plans/d027.json lines 159–173).
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including the ornate border and ground.
- **Scene and caption fidelity:** Vishnu is the focal teacher, gesturing toward the ocean and mountain motif; the devas listen in one assembly. No nectar is present and there is no second narrative panel. It aligns with the mapped photo/caption and art/plans/d027.json lines 159–173.
- **Character/deity contract:** Vishnu's deep muted blue identity and four-arm form are coherent; the ornament mismatch above is the defect.
- **Verdict: needs-fix.**

### Stanza 4 — v003

- Candidate: `artifacts/d027/s004/landscape/candidate-v003.png`
- SHA-256: `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b`
- Reference: `intake/D027/007.jpg`, mapped at reference-map.json lines 69–85; caption/source text at content/daskams/d027.json lines 47–54.
- **Anatomy:** Garuda reads as one coherent bird with one head, two broad wings, and two attached legs. Vishnu has four attached arms. The small deva/asura groups are distinct. Edge figures have natural partial framing; no face or key extremity is cut off.
- **Faces:** Vishnu and Garuda have coherent faces; the surrounding figures have distinct faces without obvious duplicates or malformed features.
- **Hands/feet:** Enlarged crops show Vishnu's four hands separately holding the discus, conch, mace, and lotus. Garuda's two taloned feet are visibly attached to its legs. The carriers' hands and feet show no conspicuous extra/missing digits.
- **Clothing and cast:** The groups wear traditional garments; there is no sexualised framing. **Needs-fix:** Vishnu's high tiered crown and peacock feather with multiple prominent necklaces/pendants at approximately `[770,0]–[1045,440]` exceed the restrained crown and sacred ornament in characters/vishnu/character.json lines 21–25. They are conspicuous in the full image; the S004 plan does not disclose this ornament departure (art/plans/d027.json lines 210–224).
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible.
- **Scene and caption fidelity:** Garuda bears Vishnu above the fallen Mandara as it is guided into the ocean; the carriers frame the mountain. This matches the mapped caption and art/plans/d027.json lines 210–224.
- **Character/deity contract:** Garuda's body and wing count are coherent; Vishnu's four-arm anatomy is correct. Vishnu's ornament mismatch above is the defect.
- **Verdict: needs-fix.**

### Stanza 5 — v005

- Candidate: `artifacts/d027/s005/landscape/candidate-v005.png`
- SHA-256: `0404915ea1fe49078b8f36fbc0e8834377745e6031495c786602030527e9d371`
- Reference: `intake/D027/008.jpg`, mapped at reference-map.json lines 87–96; caption/source text at content/daskams/d027.json lines 57–64.
- **Anatomy:** Four adult figures read as separate, naturally proportioned two-armed/two-legged people. Vasuki is a single continuous body with one head and a tapering tail; no detached coil or second head is visible.
- **Faces:** The two asura faces and two deva faces are distinct and natural, without duplication or deformation.
- **Hands/feet:** Enlarged crops of both rope-gripping groups show two hands attached to each visible person, fingers wrapped around the serpent; the visible legs and feet have ordinary proportions and no conspicuous digit defects. No hand/serpent fusion is apparent.
- **Clothing and cast:** Traditional garments cover the lower body; the bare torsos are ordinary traditional male dress and are not sexualised. The groups are distinguishable by position and clothing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including the water and lower corners.
- **Scene and caption fidelity:** Asuras hold Vasuki's single head at left; devas hold its tail at right; the continuous serpent winds around central Mandara and both groups pull from opposite sides. This matches the caption and art/plans/d027.json lines 260–274.
- **Character/deity contract:** The visible Vasuki, asura, and deva anatomy agrees with their contracts; no extra limbs, cloned faces, or Adishesha couch/canopy form is visible.
- **Verdict: pass.**

### Stanza 6 — v003

- Candidate: `artifacts/d027/s006/landscape/candidate-v003.png`
- SHA-256: `eb78c032e714e303f44adf48554bdec389d02374af5d749a1c58044b5b4935a7`
- Reference: `intake/D027/011.jpg`, mapped at reference-map.json lines 99–122; caption/source text at content/daskams/d027.json lines 67–74.
- **Anatomy:** Kurma is fully tortoise, with one natural head, broad shell, and no human torso or arms. Two near-side legs are visible and attached; the far-side legs are occluded by the shell/body in this perspective, with no visible evidence of missing or extra legs. Mandara rests on the shell. The visible devas are separate figures.
- **Faces:** Kurma's face is coherent; the distressed devas have readable, distinct faces. No duplicated person or malformed face is visible.
- **Hands/feet:** Enlarged crops show the devas' visible hands separately attached and the visible tortoise forefeet with distinct toes/claws; no conspicuous digit errors. Kurma's far legs are occluded rather than visibly severed.
- **Clothing and cast:** The devas wear traditional garments; no sexualised framing. The scene contains a visible Vasuki head at right as part of the ongoing churning context, without displacing Kurma as the focal support.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible.
- **Scene and caption fidelity:** The sinking Mandara base settles onto Kurma's broad shell under the water; distressed devas watch at the waterline. This matches the mapped caption and art/plans/d027.json lines 309–323.
- **Character/deity contract:** Kurma is complete tortoise form, not a half-human avatar; the shell supports the mountain and no human arms, extra head, or extra visible leg appears (characters/kurma/character.json lines 18–27). The two near legs are visible; far limbs are naturally occluded.
- **Verdict: pass.**

## Evidence and recommendation

Commands and inspection actions used:

1. A Python SHA-256 verification loop read the six named candidate paths and all 15 frozen contract paths, compared each actual digest to the supplied expected digest, and printed `OK` for every row; no mismatch occurred.
2. `identify` on all six candidate files reported PNG dimensions `1672x941` for S001, S002, S003, S005, S006 and `1671x941` for S004.
3. Opened all six candidate PNGs at original resolution; opened mapped references `003.jpg`, `004.jpg`, `005.jpg`, `007.jpg`, `008.jpg`, and `011.jpg`; created targeted ImageMagick crops under the worktree scratch directory with `magick <candidate> -crop <geometry> +repage` (including 2× views for hands), then opened each crop at original resolution. The scratch directory was deleted after inspection.
4. Line references in this report identify the exact scene/contract rules applied: final plan stanzas 1–6 at art/plans/d027.json lines 42–333; reference assignments at content/sources/d027/reference-map.json lines 15–105; source captions at content/daskams/d027.json lines 17–74; Indra ornament rule at characters/indra/character.json lines 18–24; Vishnu ornament rule at characters/vishnu/character.json lines 21–25; Brahma head/arm rule at characters/brahma/character.json lines 20–38; Kurma rule at characters/kurma/character.json lines 18–27.

**Recommendation:** Do not advance S001 v004 or S002–S004 at the exact reviewed versions until their conspicuous Indra/Vishnu ornament departures are addressed in a new candidate and re-reviewed. S005 v005 and S006 v003 pass this independent visual check. All candidates remain unapproved; this report does not grant human art approval or alter any manifest. The already-pending captain art approval is standing state and was not raised as a new decision by this review. My captain-call inventory for this review is empty.
