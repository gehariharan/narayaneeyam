# D032 landscape candidate review: stanzas 6–10

## Scope and method

I independently inspected the five selected landscape candidates at their native resolution and in enlarged, self-made crops of faces, limbs, hands, feet, the seated groups, Matsya/Vasuki connections, Hayagriva, Brahma, the manuscript and image edges. I compared each image with its final stanza plan entry, the matching intake reference photo and numbered supplied caption, the chapter stanza in `content/daskams/d032.json`, the frozen scene/character contracts and series bible. The mapped references are: stanza 6 → `intake/D032/007.jpg` and caption #6; stanza 7 → `008.jpg` and caption #7; stanza 8 → `009.jpg` and caption #8; stanza 9 → `010.jpg` and caption #9; stanza 10 → `011.jpg` and `012.jpg`, caption #10. The plan records those mappings and concepts at `art/plans/d032.json` stanza entries 6–10 (lines 319–374, 376–431, 434–489, 492–547, and 550–605). The source stanza/caption anchors are at `content/daskams/d032.json` lines 103–185.

The review is bound to the exact candidate and contract bytes listed below. Review completion time: **2026-11-14 02:06:03 UTC**. Verdicts apply only to those image checksums.

### Frozen contract SHA-256 values actually read

| File | SHA-256 |
|---|---|
| `art/plans/d032.json` (final plan) | `6dea2b03d529fb84e5677b5c3ff753d0085eabb1a64d7cc3e288cd423bb7201b` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d032-scene-contracts.json` | `bf457ddf32dfa55cb806b9a57f3a4497aec0a5de90ec8f5aa2706677c339c02a` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/hayagriva/character.json` | `d1cbba2411fc526337381186fb194fa8a33c0adaea3896d47571535142fec0ec` |
| `art/bible/characters/matsya/character.json` | `a9a4c1bb33d50c6ad9f6f58c43e256647e6f4393193e99ae0d4919d485b58ff9` |
| `art/bible/characters/saptarishis/character.json` | `d546da0691ca3da5fe131d593cbc80e8c8c940f188ff2bbb15ae8926cf2be601` |
| `art/bible/characters/satyavrata/character.json` | `b9cbb4b1c11f957ebcd2e62dd0b134d5949773999316e9422cbc661361ef4a61` |
| `art/bible/characters/vasuki/character.json` | `0f35452ba9fd49fd0a0cce002f7830d3da3446a88e10e72d6c1ff04f83706228` |

The five candidate SHA-256 values matched the task-pinned expected values before visual inspection. `identify` reported native dimensions of 1672×941 (stanzas 6–8), 1671×941 (stanza 9), and 1670×942 (stanza 10). I inspected the source references `007.jpg`–`011.jpg` at full available resolution. Enlarged crops were made with ImageMagick `magick … -crop … -resize …` under the worktree’s temporary `.review-scratch/` directory, then removed after review. No source candidate, plan, contract, intake image or approval manifest was changed.

## Candidate findings

### Stanza 6 — landscape v004

- **Candidate:** `artifacts/d032/s006/landscape/v004/candidate.png`
- **SHA-256:** `636156f531c364de0eda3307ef786cafcc69e21051c78ff7273a0bf51654ad54`
- **UTC review time:** 2026-11-14 02:06:03 (final visual judgment recorded).
- **Plan/reference:** final plan stanza 6, `007.jpg`, caption #6; chapter stanza 32-6 (`content/daskams/d032.json:103–117`). The scene contract requires one Earth-boat, Satyavrata and exactly seven sages, turbulent water, and a separate large Matsya (`art/bible/characters/d032-scene-contracts.json:11–24, 40–47, 60–63`).
- **Anatomy:** The boat carries one king and seven distinct seated sages (eight people total). Their visible heads and torsos are separate; no duplicate or fused person is apparent. Matsya is a separate fish body in the water. Its head, body, fins, tail and single horn are connected; the horn tip is inside the frame (approximately x=540, y=150 in the 1672×941 image), with margin above it.
- **Faces:** Faces are legible in the crowded row and not malformed. Satyavrata’s moustache and gathered dark hair distinguish him from the older bearded sages.
- **Hands/feet:** Enlarged boat crop (source region approximately x=460–1620, y=180–650) shows each figure’s joined hands attached at wrists and arms. Simplified painted fingers show no clear extra, missing or fused digits. Seated legs remain within the hull; feet are not required to be visible for this seated pose.
- **Clothing and cast:** Satyavrata and seven older sages wear traditional cream/ochre cloth and prayer beads; bare upper torsos are ordinary ascetic dress. No sexualized framing or exposed anatomy. The count and cast match the plan.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible. I checked the cloud/sky edges, boat, water, lower corners and waves.
- **Scene and caption fidelity:** The image shows rain, turbulent floodwater, the stable occupied boat and Matsya separated in open water, consistent with the supplied caption. The boat is presented level rather than on the plan’s suggested diagonal; this is a composition difference, not a missing required element. The reference also shows fish, boat and storm, though the candidate uses a more decorative boat.
- **Character/deity contract:** Matsya has indigo upper scales, a cream underside and one visible forehead horn, with fish anatomy only. The boat is a single boat rather than a globe or island. Seven distinct sages are present as required. No contract prohibition is violated.
- **Verdict: pass.**

### Stanza 7 — landscape v004

- **Candidate:** `artifacts/d032/s007/landscape/v004/candidate.png`
- **SHA-256:** `e1cddcd1a419ed80df4d42ed32b8d5f55f87d73f401c748e18f9afb6e01c8627`
- **UTC review time:** 2026-11-14 02:06:03 (final visual judgment recorded).
- **Plan/reference:** final plan stanza 7, `008.jpg`, caption #7; chapter stanza 32-7 (`content/daskams/d032.json:120–134`). The scene requires seven sages and Satyavrata aboard, one continuous Vasuki touching the boat and Matsya’s single horn, and a calm, immense one-horned fish (plan stanza entry; scene contract `:11–18, 40–57, 60–63`).
- **Anatomy:** One king and seven seated sages are distinct aboard the single boat. Matsya has one continuous fish body with coherent fins and tail. Vasuki is a single continuous serpent body with one hooded head; no detached head, coil or body is visible.
- **Faces:** The seated sages have separate, readable faces with varied hair and beard shapes; Satyavrata’s moustached profile is distinct. The naga has one small but coherent head and face.
- **Hands/feet:** The enlarged boat crop (approximately x=0–900, y=360–780) shows natural attached arms and joined hands for the sages. Satyavrata grips the serpent tether at the bow with connected arms and hands. No prominent digit error is visible; feet are seated/covered and do not show a defect. On prominent joined hands, five digit marks per hand are legible; smaller paired hands overlap naturally in prayer.
- **Clothing and cast:** Eight occupants wear traditional ascetic/king garments, with ordinary bare upper torsos. No exposed anatomy or sexualized framing. Matsya and Vasuki are the required two nonhuman figures.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible in sky, boat, water or corners.
- **Scene and caption fidelity:** The boat, tether and horn form a clear three-point connection. The serpent visibly touches and loops around the single horn, and its other end meets the king’s hands at the bow. This matches the caption and plan; the reference is also the tethered boat/fish scene.
- **Character/deity contract:** Matsya has a single prominent horn, fish-only anatomy and the expected blue/cream coloring. Vasuki has one calm hooded head and a continuous green/ochre body, without multi-hood imagery, attack posture or human limbs. The boat stays a boat. No contract prohibition is violated.
- **Verdict: pass.**

### Stanza 8 — landscape v003

- **Candidate:** `artifacts/d032/s008/landscape/v003/candidate.png`
- **SHA-256:** `c95d1729d6e50316a046097601c7d765f774b9a7078bfc2fb9ef64a41aa1ece8`
- **UTC review time:** 2026-11-14 02:06:03 (final visual judgment recorded).
- **Plan/reference:** final plan stanza 8, `009.jpg`, caption #8; chapter stanza 32-8 (`content/daskams/d032.json:137–151`). The plan carries the same boat, king, seven sages, Matsya, horn and Vasuki tether forward, with distant world-regions; scene contracts require continuous identities and tether (`art/bible/characters/d032-scene-contracts.json:11–18, 40–57, 60–63`).
- **Anatomy:** The boat carries one king and seven distinct seated sages. No duplicate, merged or detached human figure is visible. Matsya’s body, head, horn, fins and tail are coherent. Vasuki has one head and a continuous body from the king’s hands to the horn.
- **Faces:** Faces in the row remain distinct and proportionate in the enlarged crop. Satyavrata’s face is separately identifiable. Fish and serpent faces are coherent at this scale.
- **Hands/feet:** The enlarged boat crop (approximately x=0–800, y=340–760) shows connected arms and hands resting in laps or holding the tether. No clear excess, missing or fused fingers are visible; prominent joined hands show five digit marks per hand, and some paired fingers overlap naturally in prayer. Seated legs and feet are naturally covered or inside the boat.
- **Clothing and cast:** The king and sages wear traditional cream/ochre garments and beads; exposed upper torsos are ordinary dress. No sexualized framing or exposed anatomy.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark appears in the sky, water, boat, distant shore or corners.
- **Scene and caption fidelity:** Matsya leads forward with the boat trailing, connected by the taut serpent. Hills and small temple/settlement forms sit beyond the water as restrained distant world-regions. This fits the stanza’s travel/teaching caption and the plan; reference 009 is a tethered boat with the giant fish.
- **Character/deity contract:** The fish has one prominent horn, indigo scales and cream underside; no humanoid features. Vasuki has a single hooded head and one continuous body, not multiple detached heads or coils. There is no identity discontinuity from stanza 7 apparent in this composition. No contract prohibition is violated.
- **Verdict: pass.**

### Stanza 9 — landscape v005

- **Candidate:** `artifacts/d032/s009/landscape/v005/candidate.png`
- **SHA-256:** `3690d98ada3699cfa57a6ad5bbc03556ed0f6871e55342ab280b079269ea2593`
- **UTC review time:** 2026-11-14 02:06:03 (final visual judgment recorded).
- **Plan/reference:** final plan stanza 9, `010.jpg`, caption #9; chapter stanza 32-9 (`content/daskams/d032.json:154–168`). The scene requires the sages’ return, a modest appointment of Manu, and Matsya pursuing the single horse-headed Hayagriva. The scene contract calls for an immense oceanic Matsya through stanzas 6–10 and one coherent horse head with ears on Hayagriva (`art/bible/characters/d032-scene-contracts.json:11–18, 21–38, 40–47, 60–63`).
- **Anatomy:** The foreground kneeling Satyavrata and the older gesturing sage have attached arms and legs. Distant travelers are separate figures. Hayagriva’s complete horse head, ears and mane are inside the frame at upper-right (approximately x=1270–1500, y=85–200); the enlarged crop confirms sky margin above them. No face or extremity is clipped.
- **Faces:** The foreground king and sage have intact, proportionate faces. Hayagriva’s small face and both ears are intact in the enlarged upper-right crop. The distant Matsya face is coherent.
- **Hands/feet:** The king’s joined hands and the older sage’s open gesturing hand are attached and readable in the enlarged foreground crop (approximately x=0–1050, y=350–941). Their visible fingers show no clear extra, missing or fused digits; on the prominent joined hands the five digit marks per hand are legible, while some paired fingers overlap naturally in the prayer pose. Walking sages’ feet are inside the scene; no obvious limb defect is apparent.
- **Clothing and cast:** Traditional cream/ochre and maroon cloth is used. The foreground king is modestly dressed and the gesture reads as a respectful appointment. The seven return figures are individually separated across the paths/settlements; no duplicate person is apparent. No sexualized framing or exposed anatomy.
- **Text/signature artifacts:** No labels, readable text, pseudo-script, signature or watermark is visible. I checked the ground, paths, huts, water and frame edges.
- **Scene and caption fidelity:** The dawn landscape shows a respectful foreground appointment and figures returning toward separate hermitages, followed by a fish pursuing Hayagriva across the water, corresponding to the caption and plan. **Defect:** Matsya at approximately x=970–1240, y=0–205 is depicted as a small fish only a little larger than the adjacent horse-headed figure, rather than the contract’s immense oceanic form (contract lines 12–14). This size is apparent in the full image; it breaks the specified continuity even though the fish turns toward Hayagriva and has a visible horn. The scale defect makes the image noncompliant.
- **Character/deity contract:** Satyavrata is shown with the contract’s simple hair, moustache, cream dhoti and maroon edge. The distant Matsya remains fish-shaped with one horn but is conspicuously small, contradicting the immense-form requirement. Hayagriva is horse-headed with one complete head and ears visible inside the frame. The scene has no graphic violence.
- **Verdict: needs-fix.** Concrete corrections: restore Matsya’s immense oceanic scale relative to the antagonist and setting.

### Stanza 10 — landscape v009

- **Candidate:** `artifacts/d032/s010/landscape/v009/candidate.png`
- **SHA-256:** `1ba6ccf75d32d6aba5e075d8d8f8ff23a6fb34b8401ea7766de541fa10ce5516`
- **UTC review time:** 2026-11-14 02:06:03 (final visual judgment recorded).
- **Plan/reference:** final plan stanza 10, `011.jpg` and `012.jpg`, caption #10; chapter stanza 32-10 (`content/daskams/d032.json:171–185`). The scene requires the single Matsya horn pinning Hayagriva at the chest without gore, a closed Veda bundle, and Brahma with four total heads/three frontal faces and four distinct attached arms (`art/bible/characters/d032-scene-contracts.json:11–18, 30–38, 60–63`; Brahma contract `art/bible/characters/brahma/character.json`, anatomy contract).
- **Anatomy:** Matsya is one fish body with a single horn and connected fins/tail. Hayagriva is one horse-headed humanlike figure with two arms and two legs; limbs connect at shoulders/hips. Brahma has four heads total represented by three visible faces (central face and two profile faces) and four distinct arms. No duplicate people or merged bodies are visible.
- **Faces:** Hayagriva’s equine muzzle, eyes and ears form one coherent head. Brahma’s three visible faces are distinct, not merged or duplicated. Matsya has one clear fish eye and coherent mouth.
- **Hands/feet:** Enlarged Hayagriva crop (approximately x=0–720, y=80–850) shows both raised hands with five delineated fingers each and both feet, each with five separated toes; no obvious malformed digits. Enlarged Brahma crop (approximately x=900–1660, y=100–840) shows four connected arms/hands: one holds beads, one holds a water pot, one receives/supports the bundle, and one rests at the side/knee. No extra hands or fingers are apparent. Matsya has fins, not humanoid hands.
- **Clothing and cast:** Hayagriva wears a maroon drape and cream/ochre lower garment; his exposed upper torso is traditional depicted dress, not an exposed wound or sexualized framing. Brahma’s warm cream/saffron robes and sacred thread match the contract. His tiered ochre crown, layered necklace and arm ornaments are clearly visible on the head and torso; these are ordinary temple-mural iconography, with no explicit prohibition against them. Matsya is fish-form only.
- **Text/signature artifacts:** The recovered Veda bundle is closed; its few small marks are binding/cover details, not readable writing. No signature, watermark or pseudo-script is visible on the book, water, ground, corners or sky.
- **Scene and caption fidelity:** The composition stages the restrained defeat at left and the exchange at right. The single horn meets Hayagriva’s chest without visible blood or wound detail. The closed palm-leaf bundle is visibly supported by Brahma’s outstretched hand in front of Matsya’s fin, and the reference/caption’s return of the Vedas is readable. The scene retains the same story elements as the supplied photo while using the plan’s two-part arrangement.
- **Character/deity contract:** Matsya has one forehead horn, fish-only anatomy, indigo-blue scales and cream underside. Hayagriva has one horse head, two arms and two legs. Brahma shows three frontal faces from the four-head arrangement and four visibly attached arms. His crown/jewelry is an observation only, not a breach. No gore or explicit contract violation is visible.
- **Verdict: pass.**

## Recommendation and captain-call inventory

Four candidates pass this independent checksum review. Do not use stanza 9 v005 as a cleared image: request a new version that restores Matsya’s immense scale and keeps Hayagriva’s head inside the frame, then inspect that exact new checksum independently. This recommendation does not ask the captain to decide a product or approval question. **Captain-call inventory for this review: empty.** The pending captain art approval is the standing state, not a decision raised by this report. This report does not grant art approval or update any approval manifest.

## Evidence commands

- `sha256sum <five pinned candidate paths> <nine frozen contract paths>` — all returned hashes matched the task’s expected values; the exact hashes are recorded above.
- `identify -format '%f %wx%h\\n' <five pinned candidate paths>` — `1672x941`, `1672x941`, `1672x941`, `1671x941`, `1670x942`, respectively.
- `magick <candidate> -crop <region> -resize <scale> <temporary crop>` — used on group, tether, horn, foreground-hand, Hayagriva and Brahma regions. The full candidate was also viewed at original detail. Temporary crops were removed after inspection.
- Read-only contract and source references: final plan stanza entries 6–10; series and character contracts identified in the hash table; `content/daskams/d032.json:103–185`; intake photos `007.jpg`–`011.jpg`; supplied caption anchors #6–#10 in `photo-captions.txt`.
