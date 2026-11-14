# D027 landscape candidate review: stanzas 1–6

## Scope and method

I independently reviewed the six selected landscape candidates against the final frozen plan, the series and character contracts, the stanza captions/content, and the mapped intake photographs. I read the frozen contract files listed below and verified their byte hashes before inspection. Each candidate was opened individually at its native 1671/1672 × 941 px resolution, then inspected in enlarged crops of the figures, hands/feet, creature anatomy, and all four corners. The crops were made with ImageMagick from the read-only originals into `/tmp/d027-review-l/`; no candidate, source photo, approval manifest, or project file was changed.

Reference mapping used the plan and `content/daskams/d027.json`: stanza 1 → `intake/D027/003.jpg` / caption #003; stanza 2 → `004.jpg` / #004; stanza 3 → `005.jpg` / #005; stanza 4 → `007.jpg` / #007 (with `006.jpg` as an additional plan reference); stanza 5 → `008.jpg` / #008; stanza 6 → `011.jpg` / #011 (with `009.jpg` and `010.jpg` as additional plan references). I visually checked all plan-listed numbered intake photos for these stanzas (`001.jpg`, `002.jpg`, `003.jpg`, `004.jpg`, `005.jpg`, `006.jpg`, `007.jpg`, `008.jpg`, `009.jpg`, `010.jpg`, and `011.jpg`) and their caption text where supplied. All times below are UTC; each image was reviewed on 2026-11-14, with the report finalized at 2026-11-14T22:35:28Z.

Evidence commands included `sha256sum <candidate and frozen contract paths>`, `identify -format '%wx%h %f\\n' <candidate paths>`, `magick <candidate> -crop ... +repage -resize 150% /tmp/d027-review-l/...`, `magick montage ...` for the corner crops, and `nl -ba` on the frozen plan and character contracts. I then ran `sha256sum` on all six candidates again after inspection. The full plan and scene references used for the decisive checks are `art/plans/d027.json:59–80` (S001), `:118–140` (S002), `:177–199` (S003), `:235–257` (S004), `:293–315` (S005), and `:351–374` (S006); scene rules are `art/bible/characters/d027/scene-contracts.json:7–12`. The stanza text/caption mapping is in `content/daskams/d027.json` at stanza entries 1–6, with `commentary_source` pointing to captions #003–#011 listed above. The plan's `candidate_status` for every reviewed version says independent review is pending and discloses no remaining deviation.

## Frozen contract file hashes

Every actual hash matched the expected hash in the task brief. These hashes bind this review to the exact bytes inspected.

| Frozen contract file | Actual SHA-256 |
|---|---|
| `art/plans/d027.json` | `460a75c84f61d3c66a94ad9303ebe2c14787c508ff5702b49177061ba1711002` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d027/scene-contracts.json` | `d2783b2dac71cd777a732cfca5d9ea1e1f06729b9468ee90345c0d98efc52fa4` |
| `art/bible/characters/d027-airavata/character.json` | `e1cd39bb990cfeb6093cc56e97f519f3d4767780c365e4c67f87cee5f048a5fa` |
| `art/bible/characters/d027-asuras/character.json` | `1ef89cb356260859fa31ec5b8ba58beae4f670a0ec50f47020df6b7f9d99135b` |
| `art/bible/characters/d027-bhattathiri/character.json` | `a688d5a3ca6c23473e044d9cec7fa926961e537aa5d8a85a3a8fe1e6d6025732` |
| `art/bible/characters/d027-brahma/character.json` | `704f5a05d314cfb2edcca3085f75195d65e7b1246b6ee720277ab83671725db0` |
| `art/bible/characters/d027-devas/character.json` | `a63dfeb65ac3d191de56a9cabf0c4c347ba3755195c13b243fdd1473b0e9dba9` |
| `art/bible/characters/d027-durvasa/character.json` | `d40d0e58c11a90b8d62b8041137c86f4199bfe17143cfd8725c4d8c54c4eab35` |
| `art/bible/characters/d027-garuda/character.json` | `af32201021f10c221be88f790e6aade6717902f6933458ce31249f6228ad51bb` |
| `art/bible/characters/d027-indra/character.json` | `e3ddb42201fe3ce662e0a29ce4dba9c0ba8aca47c10bf9dffbd17ec920a173a8` |
| `art/bible/characters/d027-kurma/character.json` | `0e88aac21ec005cc069c7f0e7a467bfbf64d8e795978c20ea47ae0ea14a525b6` |
| `art/bible/characters/d027-shiva/character.json` | `478e205305395919e3dee2c400fb0099a9a76b588a7ba07770341d147fce8389` |
| `art/bible/characters/d027-vasuki/character.json` | `e4bcf5e23519179a49675f225174c05a4bd46f855532b5d688708444fea1999c` |
| `art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

## Image findings

### Stanza 1 — landscape candidate v005

- **Candidate:** `artifacts/d027/s001/landscape/candidate-v005.png`
- **Verified SHA-256:** `b86c10e1cdbb07f49f5d2e9aa22f0cbe588fd1e64e06893366fee5a4b97b36fa`
- **Review time:** 2026-11-14T22:35:28Z
- **Anatomy:** Durvasa, Indra, and one pale elephant are distinct. The elephant has one head and trunk and four attached legs; its forward foot rests on the fallen flowers. No duplicated body or malformed joint is visible.
- **Faces:** Durvasa’s furrowed brow and open-eyed expression read as anger; Indra looks down toward the garland. Both faces are coherent at the enlarged view.
- **Hands/feet:** The raised curse hand, offering hand, and Indra’s two garland-holding hands have coherent attachment and visible finger groups; no extra or missing digit is apparent. Human feet and all four elephant feet remain inside the frame; the elephant toenail divisions are simple, not malformed.
- **Clothing and cast:** Both men wear traditional dhoti/ascetic garments. Only the intended Durvasa, Indra, and Airavata appear. Indra’s crown and jewelry are visible as ordinary mural iconography.
- **Text/signature artifacts:** None seen in the patterned floor, architectural border, foliage, or corners. No signature or watermark.
- **Scene and caption fidelity:** The celestial garland is being passed between Durvasa and Indra; crushed flowers lie under Airavata’s forefoot. This matches caption #003 and the scene brief’s linked gift/curse/crushed-garland moment. No written curse or violence appears.
- **Character/deity contract:** One Durvasa, one Indra, and one natural four-legged Airavata; no contract conflict observed. The wide composition keeps their faces, hands, and feet in frame.
- **Verdict: pass.** This verdict applies only to the exact SHA-256 above.

### Stanza 2 — landscape candidate v002

- **Candidate:** `artifacts/d027/s002/landscape/candidate-v002.png`
- **Verified SHA-256:** `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933`
- **Review time:** 2026-11-14T22:35:28Z
- **Anatomy:** The petitioners, Shiva, Brahma, and Vishnu are separate figures with connected bodies. Vishnu has four attached arms; Shiva is single-headed and two-armed. No fused or duplicated person is visible.
- **Faces:** Indra’s lowered, tired face reads as subdued. Shiva and Vishnu have coherent faces. **Brahma’s central, left-profile, and right-profile faces are the only three heads indicated:** the enlarged region around native x≈650–1000, y≈140–400 shows three faces and three crowns, with no fourth head turned behind. This conflicts with the required four total heads.
- **Hands/feet:** Brahma’s four separate arms/hands are present, with scripture, pot, lotus, and beads. Vishnu’s and the petitioners’ hands are distinct; no extra or missing fingers are apparent at the useful crop scale. Visible feet are coherent and remain inside the frame.
- **Clothing and cast:** Traditional garments cover the figures. A small, differentiated group accompanies Brahma, Shiva, and the visibly bowed Indra. The crowns and layered jewelry on the named divine figures are ordinary temple-mural iconography.
- **Text/signature artifacts:** None seen in the floor, background, lotus bases, or corners; no readable text, signature, or watermark.
- **Scene and caption fidelity:** Vishnu receives the devas, with Brahma and Shiva present and Indra visibly weakened. The scene fits caption #004 and the plan’s petition scene.
- **Character/deity contract:** The missing indicated fourth Brahma head violates `d027-brahma/character.json:15,21,25,28` and the scene rule at `scene-contracts.json:8`; the plan explicitly requires four total heads at `d027.json:123,126`. The plan status discloses no such deviation.
- **Verdict: needs-fix.** The wrong head count is visible in the enlarged crop and is not disclosed in the plan. This verdict applies only to the exact SHA-256 above.

### Stanza 3 — landscape candidate v004

- **Candidate:** `artifacts/d027/s003/landscape/candidate-v004.png`
- **Verified SHA-256:** `cf50a18e92e8117b01b1457fc3d7b7ffdef27806d7067485e7cca852455fd4fe`
- **Review time:** 2026-11-14T22:35:28Z
- **Anatomy:** Vishnu’s seated body and the three listening devas are coherent. The water-and-mountain symbols sit in the setting without a second narrative panel.
- **Faces:** Vishnu’s face is calm and proportionate; each listening deva has a distinct face. No malformed or cloned face is visible.
- **Hands/feet:** Vishnu has four attached arms, with hands holding the conch and discus and gesturing/listing at rest; fingers are not visibly extra or fused. The devas’ joined hands and seated legs are coherent. The visible bare foot has separated toe marks without an extra or missing digit apparent.
- **Clothing and cast:** Figures wear traditional covered garments. The small listening group is visually differentiated. Vishnu’s crown and multiple necklaces/garlands are visible as ordinary temple-mural iconography.
- **Text/signature artifacts:** None seen in the sandy ground, water, tree, or corners; no text, signature, or watermark.
- **Scene and caption fidelity:** Vishnu gestures toward the ocean and Mandara while devas listen in one assembly, matching caption #005 and the plan’s counsel scene. No nectar is shown.
- **Character/deity contract:** Vishnu’s four-arm form is attached and distinct; no extra Vishnu, Brahma, or other unplanned figure is present. No contract conflict observed.
- **Verdict: pass.** This verdict applies only to the exact SHA-256 above.

### Stanza 4 — landscape candidate v003

- **Candidate:** `artifacts/d027/s004/landscape/candidate-v003.png`
- **Verified SHA-256:** `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b`
- **Review time:** 2026-11-14T22:35:28Z
- **Anatomy:** One Garuda has one head, two broad attached wings, and two attached taloned legs. Vishnu is a separate rider with four attached arms. The small groups at the sides have coherent humanoid bodies; outer figures naturally continue beyond the mural edge.
- **Faces:** Garuda’s beaked face and Vishnu’s face are coherent; the side figures’ faces are distinct and not duplicated.
- **Hands/feet:** Vishnu’s four hands hold the iconographic objects distinctly. The side figures’ hands gesture toward the mountain; no detached or extra hand is visible. Garuda’s two taloned feet visibly contact the mountain. No digit defect is apparent in the enlarged figure crop.
- **Clothing and cast:** The figures are traditionally clothed. Vishnu’s tiered crown and layered jewelry and Garuda’s decorative collar are visible as mural ornament. The side groups are recognizable as devas and asuras.
- **Text/signature artifacts:** None seen in the orange ground, ocean, or corners; no text, signature, or watermark.
- **Scene and caption fidelity:** Vishnu on Garuda and the mountain over the ocean echo reference photo 007. However, in the full frame (mountain around x≈500–1050; side groups around x≈0–550 and x≈1080–1671), no deva or asura carries the mountain or has hands supporting it. Their empty hands gesture toward it, while the mountain is upright and already held at its peak by Garuda; the required fallen mountain slipping from the carriers is not shown. The plan’s `must_show` and composition require carriers and the fallen mountain (`d027.json:235–240`), and caption #007 also describes the carriers and the fall.
- **Character/deity contract:** Garuda’s and Vishnu’s contracted head/arm/wing/leg counts are satisfied. The missing carrier/fallen-mountain moment is an undisclosed scene-plan omission, not an anatomy or ornament issue.
- **Verdict: needs-fix.** The required carrier/fallen-mountain scene element is absent in the specified full-frame regions; it is not disclosed in the plan. This verdict applies only to the exact SHA-256 above.

### Stanza 5 — landscape candidate v005

- **Candidate:** `artifacts/d027/s005/landscape/candidate-v005.png`
- **Verified SHA-256:** `0404915ea1fe49078b8f36fbc0e8834377745e6031495c786602030527e9d371`
- **Review time:** 2026-11-14T22:35:28Z
- **Anatomy:** Two asuras and two devas pull from opposite sides with distinct, connected two-arm and two-leg bodies. No cloned face, fused body, or extra limb is visible.
- **Faces:** The four pullers have distinct, coherent faces. Vasuki has one identifiable head at the asura end.
- **Hands/feet:** The asura hands grip near the serpent’s head; the deva hands grip its tapering tail end. Their fingers remain distinguishable around the rope, without an extra/detached digit apparent in the crops. Bare feet are coherent; the outermost deva’s foot naturally continues beyond the right mural edge.
- **Clothing and cast:** Traditional clothing covers all four humanoids. The two groups are distinguished by position and garments; no other person appears.
- **Text/signature artifacts:** None seen in the water, ground, or corners; no text, signature, or watermark.
- **Scene and caption fidelity:** Mandara is the central pivot in the ocean; one continuous Vasuki winds around it, with asuras on the head side at left and devas holding the tail at right. This matches caption #008 and the plan’s required head/tail assignment.
- **Character/deity contract:** Vasuki shows a single continuous body and one head; the asura/deva anatomy is ordinary two-armed humanoid anatomy. No contract conflict observed.
- **Verdict: pass.** This verdict applies only to the exact SHA-256 above.

### Stanza 6 — landscape candidate v003

- **Candidate:** `artifacts/d027/s006/landscape/candidate-v003.png`
- **Verified SHA-256:** `eb78c032e714e303f44adf48554bdec389d02374af5d749a1c58044b5b4935a7`
- **Review time:** 2026-11-14T22:35:28Z
- **Anatomy:** Kurma has one natural tortoise head, a hard shell, and no human torso or arms. In the full frame and enlarged native region x≈300–1500, y≈620–900, only **three attached legs** are visible: two on the head/forequarter side and one on the far right hindquarter. No fourth leg is visible beneath the opposite hindquarter. The shell supports the mountain from below.
- **Faces:** The tortoise’s single face is coherent; the devas at the left waterline are distinct enough to read as distressed. No duplicate person or malformed face is apparent.
- **Hands/feet:** The three visible tortoise feet each attach to the body and have simple claw divisions. A fourth foot/digit set is not visible. The visible deva hands are open and connected; no extra or fused fingers are apparent.
- **Clothing and cast:** The devas wear traditional garments. Kurma is depicted as a complete tortoise, not anthropomorphic. A single Vasuki is visible around Mandara; its head is to the right and its continuous body runs around the mountain. No extra figure is present.
- **Text/signature artifacts:** None seen in the water, ocean foam, mountain, or corners; no text, signature, or watermark.
- **Scene and caption fidelity:** Mandara is sinking onto Kurma’s shell under the water while devas watch from the waterline, matching caption #011 and the scene plan. The composition communicates the intended support moment.
- **Character/deity contract:** The observable three-leg form conflicts with Kurma’s four-leg rule in `d027-kurma/14,21` and `scene-contracts.json:12`; no deviation is disclosed in the plan. The tail appears as a tapering appendage consistent with the character sheet’s short tail at `d027-kurma:14,22`.
- **Verdict: needs-fix.** Only three attached legs are visible in the full image and focused crop, against the explicit four-leg contract. This verdict applies only to the exact SHA-256 above.

## Final candidate checksum re-verification

After visual inspection, `sha256sum` returned the same hashes as the initial verification for all six candidates:

| Stanza/version | Candidate SHA-256 at final check |
|---|---|
| S001 v005 | `b86c10e1cdbb07f49f5d2e9aa22f0cbe588fd1e64e06893366fee5a4b97b36fa` |
| S002 v002 | `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933` |
| S003 v004 | `cf50a18e92e8117b01b1457fc3d7b7ffdef27806d7067485e7cca852455fd4fe` |
| S004 v003 | `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b` |
| S005 v005 | `0404915ea1fe49078b8f36fbc0e8834377745e6031495c786602030527e9d371` |
| S006 v003 | `eb78c032e714e303f44adf48554bdec389d02374af5d749a1c58044b5b4935a7` |

## Recommendation and captain-call inventory

Keep the existing pending captain art approval as the standing state; this review raises no new captain decision. Repair the undisclosed defects in S002 (Brahma’s fourth head), S004 (carriers/fallen mountain absent), and S006 (fourth Kurma leg not visible), then commission a fresh exact-checksum independent review of any replacement candidates. The S001, S003, and S005 pass findings are limited to their exact hashes and do not confer human art approval.

Captain-call inventory for this review: **empty**. No unresolved product choice or approval question was introduced by these findings.
