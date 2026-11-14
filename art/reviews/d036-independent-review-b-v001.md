# D036 landscape visual review: stanzas 7–11

## Scope and method

I independently reviewed the five selected landscape candidates at their full 1672×941 native resolution, then inspected focused crops made with ImageMagick from the read-only originals into `/tmp/d036-review-b/`. I did not write to the producer worktree, its `artifacts/` or `intake/` directories, or any approval/review manifest. Findings bind only to the exact candidate SHA-256 values below. The review completion times are recorded per image below (UTC).

The final plan and character contracts were byte-hash checked before inspection. Stanza/photo mapping came from `art/plans/d036.json` and `content/daskams/d036.json`; I viewed photos 012–020 and compared their scene cues to the plan and the captions at `intake/D036/photo-captions.txt` entries 7–11. The plan’s own source-reference SHA-256 values for all nine mapped photos matched the inspected files.

Commands used for integrity and dimensions:

- `sha256sum <all listed frozen contract files and candidate files>` before inspection and `sha256sum <the five candidate files>` after inspection; both runs matched the expected values.
- `sha256sum <intake/D036/012.jpg … 020.jpg>`; all matched the plan’s `source_reference_sha256` entries.
- `identify <candidate files>` confirmed 1672×941 native dimensions. Python PIL was unavailable (`ModuleNotFoundError`), so `magick <candidate> -crop … +repage /tmp/d036-review-b/<stanza>/<area>.png` created the focused crops. Each original was also opened directly at `detail:"original"` with `view_image`.
- Focus crops inspected: s007 Parashurama and king/host; s008 king/arm fan, Parashurama, Hari and humbled king; s009 Renuka/Jamadagni, Parashurama, and an additional lower-edge crop; s010 Sanatkumara group, Parashurama and water/hands; s011 Parashurama, sea/ladle and lower edge.

Plan and content references: [plan](/home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/plans/d036.json:375) (s007 lines 375–430; s008 433–488; s009 491–548; s010 551–608; s011 611–664); [chapter content](</home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/content/daskams/d036.json:117>) (commentary and photo-source mapping for s007–s011 at lines 117–189). The relevant character contracts are [Parashurama](</home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/characters/parashurama/character.json:1>), [Kārtavīrya Arjuna](</home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/characters/kartavirya-arjuna/character.json:1>), [Jamadagni](</home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/characters/jamadagni/character.json:1>), [Renuka](</home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/characters/renuka/character.json:1>), [Sanatkumara](</home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/characters/sanatkumara/character.json:1>), and [Guruvayurappan](</home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/characters/guruvayurappan/character.json:1>). The series rendering contract is [series.json](/home/gehariharan/firstmate-narayaneeyam-mate/data/d036-production/review-contract-b/art/bible/series.json:1).

## Frozen contract hashes actually read

| Contract | SHA-256 |
|---|---|
| `art/plans/d036.json` | `9643879a8f864e8131bca5dcff64aefa836da52c3ad1cba383d2ee813ddc3037` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `characters/akruthavrana/character.json` | `438f4a4f8a4e6ec174840e367196c612bf6cbb55d12e0fdc6a5079d0c781e506` |
| `characters/dattatreya/character.json` | `13a559840423655f67e6f47f6a31e565bad559b22d14626ec6a8b5981cafe498` |
| `characters/dattatreya-consort/character.json` | `56ebc107bc605cfc1b966dd9d9cf5c77333994188e09eb35bbc941bbb139e0d4` |
| `characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `characters/jamadagni/character.json` | `6792aa8790488f1c84f17f90817571a6bf75f522c28ef8d338dd635d595347fb` |
| `characters/kamadhenu/character.json` | `df6f56e2642d37f6a4787219aeaf351ed6f94de321902e70e310a67f9a2e496a` |
| `characters/kartavirya-arjuna/character.json` | `27f3d43b7a3502707c10e5bf4124d5ad61f2129442af4778b9e7f176578d5471` |
| `characters/parashurama/character.json` | `7d42d4f6c759be7e24d7e5a8e3789149c86e1d505a7475ec34effa0912073648` |
| `characters/renuka/character.json` | `5fe40c84d319e6d59c99c52046e8fdbabcb575e9ce74bb4f2e556a063e2380ea` |
| `characters/sanatkumara/character.json` | `5ed32bc1fbab4599d13c1a54d58309c5a99b2b7cc8297fa9fbe933707e6e9966` |
| `characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |

All actual hashes equal the task’s expected hashes. All candidate hashes below were verified before inspection and re-verified after inspection.

## Candidate findings

### Stanza 7 — `candidate-v001.png`

- **Path / version / SHA-256:** `artifacts/d036/s007/landscape/candidate-v001.png`, v001, `9b1b8853191d4fc1be4f00a50d03ee3585a35b65fe84cc343d4c06e491efb951`.
- **Review completed:** 2026-11-14T06:52:12Z.
- **Reference mapping:** photos 012–013; plan s007 and caption 7 describe Parashurama’s battle against the Haihaya host, the king advancing, and retreating survivors.
- **Anatomy:** At the full frame and crops, Parashurama (approximately x=900–1600, y=100–900) and the mounted king (x=190–550, y=80–500) each have one torso and two arms; the horse has a coherent body and four visible legs. The foreground retreating figures at x=0–550, y=500–940 are separate bodies. No obvious fused or duplicated focal person, malformed face, or limb-proportion defect.
- **Faces:** Parashurama’s bearded face and the king’s moustached face are distinct and formed; the small army faces remain readable as separate figures at crop scale. No malformed focal face.
- **Hands/feet:** Parashurama’s raised axe hand and lower arrow hand each show a coherent grip with a thumb and fingers; both feet are inside the frame and have separated toes. The mounted king’s reins hand is distinct; his other arm holds the weapon. No extra, missing, or fused digits apparent in the enlarged views.
- **Clothing and cast:** Traditional wrapped garments, sacred thread, and ornaments cover the figures appropriately. Parashurama has tied hair, beard, and no crown. The king wears a restrained crown and royal dress. Fallen weapons and retreating soldiers appear without blood or wounds.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the corners, ground, or sky.
- **Scene and caption fidelity:** The wide battlefield includes Parashurama with axe and arrows, the king riding forward, banners, fallen weapons, and retreating host. It follows the non-graphic planned treatment and caption 7’s advancing king/retreating survivors.
- **Character/deity contract:** Parashurama’s ordinary two-arm/two-leg form, tied hair, beard, sacred thread, ochre wrap, and coherent axe comply. Kārtavīrya has the expected distinctive moustache, royal clothing, and two arms outside stanza 8. No deity is called for.
- **Verdict: pass.**

### Stanza 8 — `candidate-v002.png`

- **Path / version / SHA-256:** `artifacts/d036/s008/landscape/candidate-v002.png`, v002, `783242511d1e75ea40d657eee00f34e721d4b8f763f6b5550e01e8643efc8fe2`.
- **Review completed:** 2026-11-14T06:52:12Z.
- **Reference mapping:** photos 014–015 plus the plan’s approved Guruvayurappan identity reference; plan s008 and caption 8 describe the king’s thousand arms, Parashurama overcoming him, and his meditation on Hari.
- **Anatomy:** The full frame and king-arm crop show one Kārtavīrya torso (roughly x=260–670, y=200–690) with a broad, deliberately fanned arm array attached along the shoulder line (roughly x=40–870, y=60–500). This is the intentional stanza-8 motif, not extra duplicated bodies. Parashurama at x=700–1120 has one torso and two arms. The Hari cue and kneeling king at x=1260–1600 are separate figures. No obvious fused bodies or malformed proportions.
- **Faces:** The king’s single moustached face is clear beneath his crown. Parashurama’s face is distinct. The small blue Hari figure has a serene face; the kneeling king has a separate face. No malformed focal faces.
- **Hands/feet:** The fan hands are individually attached to the radiating arms; the enlarged fan has no detached wrists or floating hands. Parashurama grips his axe with both hands, with visible thumbs and fingers and no fused grip. Hari’s two hands are visible, and the king’s prayer hands meet cleanly. No obvious digit errors in the enlarged crops.
- **Clothing and cast:** Both warriors wear traditional covered garments; ordinary temple-mural crowns, necklaces, armlets, and ochre-painted ornament are visible. Hari is blue-skinned with peacock-feather head ornament, yellow dhoti, orange shawl, and halo. No exposed or sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full frame or examined corners/background.
- **Scene and caption fidelity:** One central battle scene shows the fan-armed king’s weapons directed toward Parashurama, who braces with his axe. At the edge, the humbled king kneels toward a small serene blue Hari. This is the planned meditation cue, not a separate battle vignette. It corresponds to the mapped photo/caption narrative without copying their watermarks or text.
- **Character/deity contract:** Kārtavīrya’s thousand-arm exception is represented as one torso with a shoulder-connected deliberate fan; Parashurama remains two-armed; the small Guruvayurappan figure retains blue skin, peacock ornament, and traditional clothing. No explicit contract prohibition is violated.
- **Verdict: pass.**

### Stanza 9 — `candidate-v002.png`

- **Path / version / SHA-256:** `artifacts/d036/s009/landscape/candidate-v002.png`, v002, `2b76fe4955bc194a541568b2d378542065ab520d6cb836c26dd8df0ad7d6b86f`. **Review completed: 2026-11-14T07:00:41Z.**
- **Reference mapping:** photos 016–017; plan s009 and caption 9 describe Renuka grieving beside Jamadagni, with Parashurama returning in resolve.
- **Anatomy:** At native size and crops, Renuka at approximately x=70–380, y=260–760, Jamadagni at x=250–720, y=470–930, and Parashurama at x=500–1060, y=150–790 have distinct bodies. Jamadagni’s resting arms and Parashurama’s kneeling pose are connected naturally. No duplicated Renuka, fused bodies, wounds, or blood.
- **Faces:** Renuka’s downcast face is visible above her cloth; Jamadagni’s eyes are closed and his face is intact; Parashurama’s face is intact and turned toward the waiting chariot. No malformed or duplicated focal face.
- **Hands/feet:** Renuka’s hands hold the cloth at her face with distinct fingers. Jamadagni’s visible hand rests on the covering. Parashurama’s hand touches the covering and the other rests on his knee; the visible digits are distinct. The hands show no obvious extra, missing, or fused digits. The lower bodies of the central figures reach the bottom frame edge; the feet are not kept fully inside the frame.
- **Clothing and cast:** Renuka wears a modest red and cream sari; Jamadagni wears cream ascetic cloth; Parashurama wears an ochre wrap and sacred thread. His hair and beard are consistent with the contract. A waiting chariot, horses, bow/quiver and axe are arranged to the right. The deer and grove are background elements, not duplicate people.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in corners, foliage, ground, or sky.
- **Scene and caption fidelity:** The ashram grove, grieving Renuka, Jamadagni, kneeling Parashurama looking toward the waiting chariot/weapons, and solemn non-graphic tone match the plan and caption 9. No revenge violence is shown.
- **Character/deity contract:** Renuka is one adult woman in modest sari with two arms; Jamadagni is an older white-bearded sage in simple cloth; Parashurama is an adult ascetic warrior with two arms and no crown. All comply with the stanza-specific contracts.
- **Needs-fix region:** along the bottom border at y=920–940, across approximately x=0–1030, the image cuts through Renuka’s seated lower body and Jamadagni’s draped lower body; their legs/feet are not fully composed inside the frame. The same edge cuts into Parashurama’s foreground seated lower body. These are central figures rather than peripheral crowd figures, and the hard image edge makes their truncation visible in the full mural. This violates the plan’s complete-figure composition requirement and the review gate for a key extremity cut off by the frame.
- **Verdict: needs-fix.**

### Stanza 10 — `candidate-v002.png`

- **Path / version / SHA-256:** `artifacts/d036/s010/landscape/candidate-v002.png`, v002, `e46d6e3f24ebc16e5eecae06a98819197d61ea534043b9bddad0d46caab4625c`.
- **Review completed:** 2026-11-14T06:52:12Z.
- **Reference mapping:** photos 018–019; plan s010 and caption 10 describe the ancestor rite at Samantapañcaka, restored Jamadagni, and Sanatkumara sages counseling Parashurama.
- **Anatomy:** Parashurama at approximately x=80–650, y=180–880 has a coherent seated body and two arms. The foreground sages at x=910–1570, y=380–900 have separate torsos and visible ordinary limbs. The water-offering hand at x=540–650, y=760–830 is connected to Parashurama’s arm. No focal fused body or malformed limb. **The repeated background ancestor faces across the upper row, approximately x=770–1450, y=170–430, are present as disclosed by the plan’s `candidate_status`. disclosed deviation present.**
- **Faces:** Parashurama’s lowered face, the three foreground sages’ youthful faces, and Jamadagni’s white-bearded face among the ancestors are intact and distinct. The repeated small ancestor faces in the upper row are the disclosed deviation; no other malformed focal face is visible.
- **Hands/feet:** Parashurama’s hands direct the water offering; both are connected and show distinct digits in the crop. Foreground sages’ raised/blessing and explanatory hands are separated, with no visible extra or fused fingers. Their feet are visible beneath their seated garments; no apparent digit defect.
- **Clothing and cast:** Parashurama wears an ochre wrap, sacred thread, and tied hair; the foreground sages wear simple ascetic garments. Jamadagni is identifiable by his white beard and cream cloth. A bow, quiver, and axe rest beside Parashurama. No inappropriate exposure.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the ground, water, foliage, or corners.
- **Scene and caption fidelity:** The water offering, honored/restored Jamadagni, three sages counseling Parashurama, and discarded weapons fit the planned rite and caption 10. The image remains non-graphic and contains no slain bodies.
- **Character/deity contract:** Parashurama has ordinary two-arm anatomy and consistent ascetic-warrior markers. The foreground Sanatkumara group is small, youthful, distinct, and two-armed. The background ancestor repetition is disclosed; no other explicit contract prohibition is violated.
- **Verdict: pass.** disclosed deviation present. The repeated background ancestor faces are the only defect observed and are disclosed in the plan, so they do not change this review verdict.

### Stanza 11 — `candidate-v001.png`

- **Path / version / SHA-256:** `artifacts/d036/s011/landscape/candidate-v001.png`, v001, `4f2402cf102995ab14f70e9bfd045eccbcd8fe08e1292fdc4ff3c9beaee262da`.
- **Review completed:** 2026-11-14T06:52:12Z.
- **Reference mapping:** photo 020; plan s011 and caption 11 describe Parashurama meditating at Mahendra, the fire weapon and sacrificial ladle cast toward the sea, and the sea’s retreat revealing Kerala.
- **Anatomy:** Parashurama at approximately x=1070–1550, y=90–760 is seated cross-legged with one torso and two arms. The partially submerged sea figure at x=0–200, y=590–900 is a separate figure; no fused body or malformed limb is apparent. His folded lower legs remain clothed and within the frame.
- **Faces:** Parashurama’s closed-eyed face is calm and well formed. The sea figure’s visible face is distinct and intact. No malformed or duplicated focal face.
- **Hands/feet:** Parashurama’s two open hands are visible at about x=1040–1240, y=520–680; thumbs and fingers are separated, with no obvious digit error. The sea figure’s joined hands are coherent. Parashurama’s feet are covered by his seated garment rather than cut off.
- **Clothing and cast:** Parashurama wears a traditional ochre wrap and orange shawl with covered lower body; his sacred/ascetic markers are consistent. Axe, bow, and quiver lie set aside in the foreground. The sea figure is modestly depicted, partially immersed.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the waves, beach, vegetation, or corners.
- **Scene and caption fidelity:** The broad coast, green land, withdrawing waves, small flaming weapon motif, and airborne sacrificial ladle are visible. Parashurama meditates beside the sea with weapons set aside, matching plan s011 and caption 11. The ladle is visibly a curved-handled ritual implement in the sea area (approximately x=700–1030, y=500–650); it is not missing.
- **Character/deity contract:** Parashurama has tied dark hair, beard, sacred thread, and ordinary two-arm anatomy, with no crown or extra limbs. No deity is called for.
- **Verdict: pass.**

## Recommendation and captain-call inventory

Four exact-checksum landscape candidates pass this independent visual review. Stanza 9 needs-fix because the bottom frame edge truncates central figures’ lower bodies/feet. Stanza 10’s repeated background ancestor faces are visibly present and disclosed in the frozen plan; all other reviewed areas pass. These are review verdicts only: they do not approve artwork or update the approval manifest. The existing pending captain art approval remains pending as standing state; this review raises no new captain decision. **Captain-call inventory for this review: empty.**
