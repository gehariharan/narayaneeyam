# D012 landscape candidate review: stanzas 1–5

Reviewed individually against the frozen final D012 plan, the series bible, Brahma and Varaha character contracts, the stanza text, and the mapped intake reference photos. The full 1672×941 candidate images were inspected at native resolution, followed by enlarged detail crops made from the producer images into this task's `data/d012-review-a/scratch/` directory. Crops were never written to the producer tree. This is an independent visual review; it does not approve art or update an approval manifest.

Review time: 2026-11-14 22:35 UTC. Candidate and contract checksums were verified before inspection and candidate checksums were reverified after inspection.

## Contract file checksums

| Frozen contract file | SHA-256 read |
|---|---|
| `data/d012-s003-fix/review-contract-a/art/plans/d012.json` | `5073515ef7467fc27feff08b8f71f47acf76617db7fe39b6148104863b4d9e30` |
| `data/d012-s003-fix/review-contract-a/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d012-s003-fix/review-contract-a/art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `data/d012-s003-fix/review-contract-a/art/bible/characters/varaha/character.json` | `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3` |

All four match the expected values in the review assignment.

## Reference mapping and evidence

The plan entries map S001–S005 to `intake/D012/001.jpg` through `005.jpg`, respectively (frozen plan lines 18, 63, 109, 161, 209). Chapter content lines 15–57 map those stanzas to caption references `photo-captions.txt#001` through `#005`; the corresponding caption sections are in the OneDrive intake caption file lines 3–16. The plan treats these photos as iconographic references and explicitly rejects importing unrelated figures, weapons, warrior anatomy, or composite layouts.

Inspection commands included:

- `sha256sum` on the five selected producer candidates and the four frozen contract files (pre-inspection).
- `identify -format '%f %wx%h\n'` on candidate and reference files. Selected candidates were all 1672×941 pixels; reference-photo dimensions varied by source.
- `cat` of the frozen plan, series bible, both character contracts, chapter content, and `intake/D012/photo-captions.txt`.
- `view_image` at original detail for each candidate and its mapped photo, followed by `magick ... -crop ... -resize 200%` crops from the candidate originals into `data/d012-review-a/scratch/` for faces, limbs, extremities, boar anatomy, and the S003 nose/receiving-hand area.
- `sha256sum` on the selected producer candidates again after inspection (values below; all unchanged).

## Candidate findings

### S001 — landscape candidate-v003

File: `artifacts/d012/s001/landscape/candidate-v003.png`  
SHA-256: `321be19fcc1e264a81c8ee49ce991b5e1e90b3b50d8af5008311e46c1b1f3a20`  
Reference: `intake/D012/001.jpg`; plan entry at frozen plan lines 18–61; alt text at line 40.

- **Anatomy:** No visible malformed, fused, duplicated, or cut-off figures. The three standing figures have compact, connected adult proportions. Brahma is seated naturally on a lotus.
- **Faces:** Brahma has three distinct forward-visible faces in the expected arrangement; no merged or repeated facial features are apparent. Manu and both sages have distinct, legible faces.
- **Hands/feet:** Brahma has four separate attached arms and hands: open hand, lotus hand, pot hand, and bead hand. Manu and the two sages each have two arms. The folded hands, feet, and toes in the enlarged left-group crop show no conspicuous count or fusion error; extremities remain inside frame.
- **Clothing and cast:** Brahma wears cream and saffron drapery; the visitors wear traditional wraps. Shoulders and arms are conventionally bare, with lower bodies covered. There are three visitors (Manu and two sages), no accidental extra people, and no sexualized framing. Brahma's layered necklaces and tiered crowns at the upper-right figure are ordinary painted temple iconography.
- **Text/signature artifacts:** No readable text, pseudo-script, signature, logo, or watermark seen. Checked the water, lower corners, and open sky.
- **Scene and caption fidelity:** The lotus-seated Brahma, approaching Manu with sages, Satyaloka setting, and small submerged Earth motif in the lower water match the stanza and plan. The composition keeps the water/Earth secondary and omits the unrelated reclining Narayana present in the source photo.
- **Character/deity contract:** Brahma's rose-ochre skin, mature bearded identity, three visible faces/four-head arrangement, four arms, lotus seat, cream/saffron clothes, and matte earth palette align with the contract. No prohibited attribute or extra limb is visible.
- **Verdict: pass.**

### S002 — landscape candidate-v004

File: `artifacts/d012/s002/landscape/candidate-v004.png`  
SHA-256: `0e9d708a086730e5c961bb23fdabcda0856fc92debd7e752333fe0deeacd2dae`  
Reference: `intake/D012/002.jpg`; plan entry at frozen plan lines 63–107; alt text at line 86.

- **Anatomy:** Two distinct, connected figures; no malformed or duplicate body parts seen. Both full figures and Brahma's lotus seat are contained in frame.
- **Faces:** Manu's profile is legible and Brahma's three visible faces are distinct, with closed eyes conveying inward contemplation. No malformed or merged facial features seen.
- **Hands/feet:** Brahma has four distinct attached arms/hands: a lowered open hand, pot, lotus, and prayer beads. Manu has two natural arms, one raised in petition and one near the chest. Enlarged hands and visible feet show no conspicuous extra/fused digits or missing extremities.
- **Clothing and cast:** Manu's cream/saffron and maroon garments cover the lower body; bare shoulders and arms follow ordinary traditional dress. Brahma's cream/saffron robes and layered sacred ornaments are ordinary temple-mural iconography. No extra sages or other figures appear.
- **Text/signature artifacts:** No readable text, pseudo-script, signature, logo, or watermark seen, including in the water and corners.
- **Scene and caption fidelity:** The quiet two-figure petition is clear. Brahma is seated on a lotus and contemplating; calm water below establishes the submerged-Earth concern without adding a second action scene. The candidate follows the canonical stanza rather than copying the unrelated Krishna-and-Brahma garden scene in the reference photo.
- **Character/deity contract:** Brahma's visible head arrangement, four-arm count, skin, beard, clothing, lotus seat, and matte mineral palette match the contract. Manu is two-armed; no prohibited child Krishna or duplicate Brahma is present.
- **Verdict: pass.**

### S003 — landscape candidate-v008

File: `artifacts/d012/s003/landscape/candidate-v008.png`  
SHA-256: `4afcf91061f564c7e0efc1dbc8d5e85e43fead0d14280249b7087fd7b8517850`  
Reference: `intake/D012/003.jpg`; plan entry at frozen plan lines 109–159, especially must-show lines 119–128 and disclosed `candidate_status` line 158; caption alt at line 136.

- **Anatomy:** Brahma's torso and limbs are connected and proportionate. The single small boar has a natural boar head and one coherent small body; four connected legs are visible in the enlarged crop. No duplicate boar or human baby face is present.
- **Faces:** Brahma has three distinct visible faces with calm, prayerful expressions. The boar's snout, ears, and eye read clearly as a boar, not a human infant. No malformed or duplicated faces seen.
- **Hands/feet:** Brahma has four distinct attached arms: paired prayer hands, an outer hand holding a water pot, and the open receiving hand. The boar's four small feet connect to its legs. The receiving hand is visibly below the boar; their separation matches the plan's disclosed deviation. No conspicuous digit error seen.
- **Clothing and cast:** Brahma wears traditional cream/saffron drapery and sacred ornaments; ordinary bare upper arms/shoulders, no exposed lower body. One tiny crowned boar is present. Its small ochre crown is ordinary iconography and not prohibited by this contract.
- **Text/signature artifacts:** No readable text, pseudo-script, signature, logo, or watermark seen; inspected corners, water, and open background.
- **Scene and caption fidelity:** The single tiny boar is visibly linked to Brahma's nostril by fine painted wisps; the secondary Earth is sinking into the ocean at the right. This matches the caption and the newly regenerated emergence scene. The boar floats above, rather than touching, Brahma's open receiving hand.
- **Character/deity contract:** Brahma's three visible faces/four-head arrangement and four arms match the contract. Varaha retains one boar head, natural four-leg anatomy, and the earth-pigment matte treatment; no weapons or humanoid body.
- **Disclosed deviation:** The frozen plan explicitly discloses that the tiny crowned boar is connected to the nostril by painted wisps and floats above the receiving hand rather than touching either point. **disclosed deviation present**. It is the only deviation found; under the assigned rule it does not make this candidate fail.
- **Verdict: pass.**

### S004 — landscape candidate-v006

File: `artifacts/d012/s004/landscape/candidate-v006.png`  
SHA-256: `70635c74f22fc915eef311a779c6a0274f6c161c2f5c7b27ef907bac150fe563`  
Reference: `intake/D012/004.jpg`; plan entry at frozen plan lines 161–207; alt text at line 185.

- **Anatomy:** One large coherent boar is shown; four connected legs and all hooves are visible, and its tail is fully within the frame. The thin curved line terminates at a tiny outline echo and the large boar, clearly communicating growth rather than a second unrelated boar. Brahma and the two small witnesses have connected natural bodies; no malformed, fused, or duplicated figures seen.
- **Faces:** Boar's single head and eye are intact. Brahma has three distinct visible faces; the two witnesses have distinct faces. No malformed features seen.
- **Hands/feet:** Brahma has four distinct attached arms/hands. Each witness has two arms. The enlarged crop shows no conspicuous extra/fused fingers, and visible feet/toes are coherent. No extremity is cut off by the frame.
- **Clothing and cast:** Brahma wears cream/saffron robes and sacred ornaments; the two sons/witnesses wear traditional wraps. Lower bodies are covered, with only conventional bare shoulders/arms. The boar has painted ochre ornaments; these are not prohibited and do not obscure its anatomy. Cast remains small and distinct.
- **Text/signature artifacts:** No readable text, pseudo-script, signature, logo, or watermark seen; checked the open sky, cloud shapes, water, and corners.
- **Scene and caption fidelity:** The small-to-elephant-sized growth is shown as a restrained size echo attached by a continuous trajectory to the single focal boar. Brahma and two sons look up in wonder in open sky. The candidate avoids the source photo's unrelated weapon-bearing humanoid warrior form.
- **Character/deity contract:** Varaha has one boar head, one torso, four natural legs, and no arms or weapons. Brahma retains the four-arm and three-visible-face arrangement. Matte ochre/brown rendering follows the series contract.
- **Verdict: pass.**

### S005 — landscape candidate-v003

File: `artifacts/d012/s005/landscape/candidate-v003.png`  
SHA-256: `bc8a03142e0382473c28b6c2886326673e5a9640716e54e801c70dc52abf7af6`  
Reference: `intake/D012/005.jpg`; plan entry at frozen plan lines 209–255, especially must-show lines 219–226; alt text at line 233.

- **Anatomy:** The single mountain-sized boar has one coherent torso and four connected legs; all four hooves are visible. Its tail and roaring head are intact. Brahma is seated below on a lotus; no accidental duplicate people or creatures are visible.
- **Faces:** Varaha has one clear boar head, two tusks, and an open roaring snout; no extra head or malformed facial feature seen. Brahma has three distinct visible faces in the contracted arrangement.
- **Hands/feet:** Brahma has four distinct attached arms and hands (open gesture, lotus, pot, and beads). The boar has four legs, not humanoid arms. Enlarged deity and hoof crops show no conspicuous digit/limb fusion or count error; Brahma's visible limbs and boar's feet are inside the frame.
- **Clothing and cast:** Brahma's cream/saffron lower garments and conventional sacred ornaments cover him appropriately. Varaha's ochre crown and neck/body ornaments are visible, but are ordinary painted deity iconography and no plan or character rule prohibits them. No sexualized framing or exposed lower body.
- **Text/signature artifacts:** No readable text, pseudo-script, signature, logo, or watermark seen, including in the sky, clouds, lower corners, and ground.
- **Scene and caption fidelity:** The candidate shows one immense roaring boar above a much smaller, separate Brahma, with clouds and a clear scale gap. However, the upper and side background around the boar (image coordinates x=0–1671, y=0–650) contains ochre sky and cloud forms but no mountain forms. The S005 must-show text explicitly says scale should read through “cloud and mountain forms” (plan line 225); that required scale-setting element is absent. The size contrast remains clear, but the specific planned mountain context is missing.
- **Character/deity contract:** Varaha is a natural four-legged boar, not a humanoid warrior; it carries no weapon. Brahma's three visible faces/four-head arrangement and four arms are consistent. Matte earth palette is consistent.
- **Verdict: needs-fix.** Reason: missing required mountain forms from the S005 plan. This is a scene-plan omission, not an anatomy or character-contract violation.

## Recommendation and captain-call inventory

S001–S004 pass for these exact candidate checksums. S005 needs a new candidate that adds the planned mountain forms while preserving the current natural boar anatomy and clear Brahma scale reference; do not alter this candidate in place. The review itself raises no unresolved captain choice. The pending human art approval remains the standing chapter state, not a decision created by this review. Captain-call inventory for this review: **empty**.

## Final integrity check

The following `sha256sum` values were collected again after visual inspection; each matches the pre-inspection value and the expected assignment checksum:

```text
321be19fcc1e264a81c8ee49ce991b5e1e90b3b50d8af5008311e46c1b1f3a20  artifacts/d012/s001/landscape/candidate-v003.png
0e9d708a086730e5c961bb23fdabcda0856fc92debd7e752333fe0deeacd2dae  artifacts/d012/s002/landscape/candidate-v004.png
4afcf91061f564c7e0efc1dbc8d5e85e43fead0d14280249b7087fd7b8517850  artifacts/d012/s003/landscape/candidate-v008.png
70635c74f22fc915eef311a779c6a0274f6c161c2f5c7b27ef907bac150fe563  artifacts/d012/s004/landscape/candidate-v006.png
bc8a03142e0382473c28b6c2886326673e5a9640716e54e801c70dc52abf7af6  artifacts/d012/s005/landscape/candidate-v003.png
```
