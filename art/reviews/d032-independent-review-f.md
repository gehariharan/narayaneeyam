# D032 landscape candidate review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates at native resolution, then inspected focused crops of faces, hands, feet, bodies, Matsya, the sage group, image edges, and corners. I compared each image with the matching intake reference photo(s), numbered caption, final plan entry, and frozen character contracts. The candidate SHA-256 values were verified before visual inspection. No candidate, master, approval manifest, or project content was changed; crops used for close inspection are scratch files in this disposable worktree.

Reference mapping follows the frozen plan's accepted map (plan `art/plans/d032.json`, lines 31–32): stanza 1 → `001.jpg`; stanza 2 → `002.jpg`; stanza 3 → `003.jpg` and `004.jpg`; stanza 4 → `005.jpg`; stanza 5 → `006.jpg`. The caption anchors are in `intake/D032/photo-captions.txt`, lines 1–28. Chapter content stanza commentary confirms the corresponding actions at `content/daskams/d032.json`, lines 16–100. These photos and captions are story references, not demands to copy source composition.

Inspection evidence: full-size candidate and reference viewing; `identify` on the five candidate PNGs; focused crops made with ImageMagick `magick … -crop … +repage` and individually viewed. Crops and their source-coordinate regions: s001 Brahma `(0,130,700,760)` and Hayagriva `(520,100,700,800)`; s002 cupped hands `(450,160,690,670)` and head/legs `(80,250,640,650)`; s003 Satyavrata `(850,245,590,650)`, large fish `(930,320,670,560)`, and right edge `(1302,260,370,350)`; s004 Satyavrata `(80,120,650,760)` and Matsya `(860,220,770,370)`; s005 group `(0,330,1370,560)`, feet `(0,630,700,230)`, and right edge `(1391,370,280,480)`. Pixel coordinates are x,y,width,height from the candidate's top-left.

## Frozen contract hashes

All actual hashes below match the expected values in the assignment. The files were read from the frozen review-contract-f copy.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d032.json` | `6dea2b03d529fb84e5677b5c3ff753d0085eabb1a64d7cc3e288cd423bb7201b` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d032-scene-contracts.json` | `bf457ddf32dfa55cb806b9a57f3a4497aec0a5de90ec8f5aa2706677c339c02a` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/hayagriva/character.json` | `d1cbba2411fc526337381186fb194fa8a33c0adaea3896d47571535142fec0ec` |
| `art/bible/characters/matsya/character.json` | `a9a4c1bb33d50c6ad9f6f58c43e256647e6f4393193e99ae0d4919d485b58ff9` |
| `art/bible/characters/saptarishis/character.json` | `d546da0691ca3da5fe131d593cbc80e8c8c940f188ff2bbb15ae8926cf2be601` |
| `art/bible/characters/satyavrata/character.json` | `b9cbb4b1c11f957ebcd2e62dd0b134d5949773999316e9422cbc661361ef4a61` |
| `art/bible/characters/vasuki/character.json` | `0f35452ba9fd49fd0a0cce002f7830d3da3446a88e10e72d6c1ff04f83706228` |

The controlling scene rules are in the frozen scene-contract file, lines 11–18 (Matsya), 21–28 (Satyavrata), 30–38 (Hayagriva), 40–47 (Saptarishis), and 60–63 (scene contracts). Final plan entries and candidate checksums are at `art/plans/d032.json`, s001 lines 36–77, s002 lines 92–133, s003 lines 148–191, s004 lines 206–247, and s005 lines 262–304.

## Candidate findings

Review time for each candidate: **2026-11-14 01:58:59 UTC** (completed and recorded by this time). Verdict applies only to the exact SHA-256 shown.

### Stanza 1 — v005

- **Image:** `artifacts/d032/s001/landscape/v005/candidate.png` (1670×941)
- **Verified SHA-256:** `78ca3537edce2c4b9a5a5be61c56a023939f1429394ad9f86154c95212806451`
- **Anatomy:** Brahma's seated body and Hayagriva's humanlike torso and legs appear coherent and attached. Hayagriva is a single horse-headed figure.
- **Faces:** Brahma has four heads total, with three faces visible frontally; all are closed-eyed. Hayagriva has one coherent horse head with two ears and a readable muzzle. No malformed or duplicated faces.
- **Hands/feet:** Brahma shows four attached arms and hands; Hayagriva shows two arms holding the bundle and two legs. The visible fingers and toes in the enlarged crops are distinct; no extra or fused digits apparent.
- **Clothing and cast:** Traditional cream and red drapery with restrained jewelry; the ornamented crown and necklaces are ordinary mural iconography and do not conflict with a prohibition. Cast is Brahma, Hayagriva, and one small fish-form Matsya.
- **Text/signature artifacts:** Palm-leaf bundle has line-like decoration but no readable writing. No signature or watermark seen in the corners, ground, or water.
- **Scene and caption fidelity:** Brahma rests on a lotus with closed eyes; Hayagriva takes the closed bundle at center; dark ocean and a small fish at right foreshadow Matsya. This follows the plan's wide progression and the #1 caption.
- **Character/deity contract:** Brahma's four-head/three-visible-face and four-arm depiction matches the specific contract; Hayagriva has one horse head and two arms; Matsya is fish-form only, without humanoid features.
- **Verdict: pass.**

### Stanza 2 — v001

- **Image:** `artifacts/d032/s002/landscape/v001/candidate.png` (1672×941)
- **Verified SHA-256:** `c2b4e2b4515cae548c46861fe35d327bcd283a7d2da20e8c3975e8b26320df0a`
- **Anatomy:** One kneeling Satyavrata has a coherent adult body and two attached arms and legs. The topknot is fully within the frame. No duplicate person.
- **Faces:** One calm, intact face with neat moustache; no facial distortion apparent in the enlargement.
- **Hands/feet:** Both attached hands are cupped together and fully in frame around one small fish. Enlarged palms and fingers are distinct, with no extra/fused digits; visible feet are coherent.
- **Clothing and cast:** Cream dhoti with muted red/ochre wrap, sacred thread, and simple beads. One sage and one small fish only; ordinary traditional dress.
- **Text/signature artifacts:** No readable text, signature, or watermark seen, including the water and corners.
- **Scene and caption fidelity:** River setting and joined palms with one luminous tiny fish match the stanza 2 plan and #2 caption. The composition is independently arranged from reference photo 002.
- **Character/deity contract:** Satyavrata's simple hair, moustache, clothing, and two-arm anatomy follow the chapter contract. Matsya remains a natural small fish with no humanoid anatomy.
- **Verdict: pass.**

### Stanza 3 — v004

- **Image:** `artifacts/d032/s003/landscape/v004/candidate.png` (1672×941)
- **Verified SHA-256:** `b0cd4eda5a2fcb5cabb2d994e232ddda391860d318da04a2fc1c5da1bd28b8cd`
- **Anatomy:** Satyavrata's kneeling body, arms, legs, and feet appear attached and proportionate. The four fish depictions form a left-to-right pot/well/pond/river growth sequence; they read as staged progression, not accidental extra fish.
- **Faces:** Satyavrata's face is intact. The large river fish's face is cut by the right frame edge: its snout/mouth runs off the image at approximately **x=1618–1671, y=485–533** (native candidate coordinates). This is visible in the full composition and focused edge crop; the nose/mouth is not fully inside the frame.
- **Hands/feet:** Satyavrata's two hands are separately attached and open toward the fish; fingers are individually visible with no extra or fused digits. Both visible feet appear coherent.
- **Clothing and cast:** One Satyavrata, in cream and muted red/ochre traditional garments; no extra person. The staged fish remain fish-form.
- **Text/signature artifacts:** No readable text, signature, or watermark seen in the corners, ground, or water.
- **Scene and caption fidelity:** The sequence connects the water pot, well, pond, and broad river as required and aligns with the #3 caption. The well-stage fish has the plan-disclosed gold floral scale-pattern patch (candidate status at plan line 190); it is visible as a decorative gold mark on that fish and is recorded as a known deviation. The snout crop is a separate framing defect.
- **Character/deity contract:** Matsya has fish-only anatomy and coherent fins/body in the depicted stages; Satyavrata follows the two-arm, simple ascetic contract. The plan's explicit frame guidance is not met for the large fish's face: the composition places its nose beyond the right edge (plan lines 167–174).
- **Verdict: needs-fix.** Recompose or regenerate so the large river fish's entire face and snout are inside the frame; retain the same concept and ensure the revealed staged progression remains clear.

### Stanza 4 — v002

- **Image:** `artifacts/d032/s004/landscape/v002/candidate.png` (1672×941)
- **Verified SHA-256:** `d3e33f48d4d712e7c0c59a5619fe8200e0a508e496e0dbcdcdd501d2bd514a3d`
- **Anatomy:** Satyavrata stands naturally on shore with two attached arms and legs. Matsya is one coherent fish, partly submerged, with one horn; fins and tail remain attached.
- **Faces:** Satyavrata's face and Matsya's visible fish face are intact and not malformed.
- **Hands/feet:** Both of Satyavrata's open hands are fully visible, attached, and have distinct fingers. Both feet are visible with distinct toes; no digit or limb defects seen.
- **Clothing and cast:** Satyavrata wears a cream dhoti, muted red wrap, sacred thread, and ordinary beads; no other people or extra fish. Seven small lamps sit along the shore.
- **Text/signature artifacts:** The seven lamps are unlettered. No numerals, calendar, readable text, signature, or watermark seen in water, ground, or corners.
- **Scene and caption fidelity:** Broad shore, sage gesturing as the one horned fish recedes below the horizon, and seven secondary shore lamps fit the plan and #4 caption. Matsya is already the oceanic form; no seven-day text is added.
- **Character/deity contract:** Satyavrata matches the simple sage-king contract and Matsya keeps fish-only anatomy with one prominent horn.
- **Verdict: pass.**

### Stanza 5 — v004

- **Image:** `artifacts/d032/s005/landscape/v004/candidate.png` (1671×941)
- **Verified SHA-256:** `b5acd932c887ef67af436728570a530c871ccd63ca7375cfd02cfc34d19feba4`
- **Anatomy:** One boat carries Satyavrata and seven distinct seated sages. Their visible torsos and limbs are connected; no merged bodies or duplicated people. The far-right sage's hand reaches the image edge as a peripheral limb; his head and face are inside the frame and the edge contact is not a cut-off face or body.
- **Faces:** Eight distinct, intact faces are visible (Satyavrata plus seven sages). The sages are visually differentiated by hair and beard; no malformed or cloned faces noticed.
- **Hands/feet:** The figures hold joined hands in prayer; their hands are connected to forearms. The enlarged group and foot crops show seated legs and feet inside the boat, with no visible extra/fused digits or detached limbs.
- **Clothing and cast:** All wear simple cream/ochre ascetic garments with muted red accents. Count is exactly seven sages plus Satyavrata; one distant Matsya is visible over the water.
- **Text/signature artifacts:** No readable text, signature, or watermark seen in the waves, ground, or corners.
- **Scene and caption fidelity:** Heavy rain and floodwater dominate; all eight figures are safely aboard one boat and face a distant Matsya, matching the plan and #5 caption.
- **Character/deity contract:** Saptarishis appear as seven distinct mature men; each visible head and body is separate, with two-arm human anatomy. Satyavrata remains the simple sage-king; distant Matsya has fish form only.
- **Verdict: pass.**

## Recommendation and inventory

Three candidates pass and one candidate, stanza 3 v004, needs a framing fix. The remaining stanza 3 observations do not justify failing it under the specified threshold; the disclosed well-stage gold floral patch is present and documented above. These are review findings, not art approval. The chapter's pending art approval remains the standing state. This review raises no captain decision, so the captain-call inventory for this review is empty.
