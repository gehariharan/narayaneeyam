# D037 independent visual review: landscape stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates against the frozen final plan, the frozen series and character contracts, the stanza-specific source commentary, and each mapped intake photo with its caption. The candidate images are 1672×941 pixels. I viewed every full image at native resolution and examined enlarged crops made from the read-only source images under `/tmp/d037-review-c-crops/`; no crop or other write was made in the producer's worktree, `artifacts/`, or `intake/`. I inspected the mapped photographs `001.jpg` through `005.jpg` individually and used only the narrative cues allowed by each plan entry.

The plan's stanza entries are at [d037.json:39](/home/gehariharan/firstmate-narayaneeyam-mate/data/d037-production/review-contract-c/art/plans/d037.json:39), [d037.json:85](/home/gehariharan/firstmate-narayaneeyam-mate/data/d037-production/review-contract-c/art/plans/d037.json:85), [d037.json:131](/home/gehariharan/firstmate-narayaneeyam-mate/data/d037-production/review-contract-c/art/plans/d037.json:131), [d037.json:178](/home/gehariharan/firstmate-narayaneeyam-mate/data/d037-production/review-contract-c/art/plans/d037.json:178), and [d037.json:225](/home/gehariharan/firstmate-narayaneeyam-mate/data/d037-production/review-contract-c/art/plans/d037.json:225). The source commentary for the five stanzas is at [d037.json:23](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/6/narayaneeyam/content/daskams/d037.json:23), [d037.json:33](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/6/narayaneeyam/content/daskams/d037.json:33), [d037.json:43](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/6/narayaneeyam/content/daskams/d037.json:43), [d037.json:53](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/6/narayaneeyam/content/daskams/d037.json:53), and [d037.json:63](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/6/narayaneeyam/content/daskams/d037.json:63). Caption mapping is independently visible in `photo-captions.txt` lines 1–24. The corresponding plan mapping and reference-photo hashes are at plan lines 47–50, 93–96, 140–143, 187–190, and 233–236.

I checked the plan for `candidate_status` disclosures, including nested keys; none occurs in the stanza 1–5 entries. Thus there is no disclosed deviation to report for these candidates. I treated Brahma's contracted four heads/four arms and Hari's four arms as intentional, and applied the stated natural-anatomy and no-readable-text rules. The relevant explicit rules are in the frozen Brahma character contract (`anatomy_contract`, `never`), D037 scene contracts (`characters` and `rendering`), and stanza `scene_brief` blocks at plan lines 51–67, 97–113, 144–160, 191–207, and 237–253. Ornate painted crowns and layered jewelry on deities are recorded as observations, not defects.

Commands used for input integrity and review setup included:

```sh
sha256sum <the ten frozen contract paths> <the five selected candidate paths>
identify -format '%f %wx%h\\n' <the five selected candidate paths>
convert <read-only candidate> -crop <region> +repage -resize <enlarged size> <scratch crop under /tmp/d037-review-c-crops/>
```

The initial `sha256sum` output matched every expected value in the task brief. `identify` returned `1672x941` for all five candidates. I also inspected the full-resolution photo files at `intake/D037/001.jpg`–`005.jpg` and read the caption export; the visible reference subjects and caption mapping agreed with the final plan. At the end of the review I re-ran SHA-256 verification for all five candidate files; the final values are listed below and remain the exact images reviewed. No project or approval file was changed.

## Frozen contract file SHA-256 values

These are the actual hashes of the exact frozen files read for this review; all matched their expected values.

| Frozen contract file | SHA-256 |
|---|---|
| `art/plans/d037.json` | `bf4648663639c3a080e94d5d409a290e188c667af615d2d1a3048c45060196da` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/bhudevi/character.json` | `8fba662e0bf6f7257c4b09e3efd6d75a78fa242728f66fa5e39a73562dad04bf` |
| `art/bible/characters/vasudeva/character.json` | `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8` |
| `art/bible/characters/devaki/character.json` | `bec219a76ee6e61b859a8232e6951090c35ac83ecca1471d00b40e607c064dd6` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/narada/character.json` | `841aa373baad9230944390a5019523cea424d23fd3f96ef81b149e7aa4f98806` |
| `art/bible/characters/d037/scene-contracts.json` | `1b074b0206fab63e19a1fd8d484ad88b4ee15b56a73ada771a0b89166e0b175d` |

## Image-specific findings

### Stanza 1 — candidate v001

- **Review time:** 2026-11-14 22:29 UTC
- **Image:** `artifacts/d037/s001/landscape/candidate-v001.png` (1672×941)
- **SHA-256:** `27b1acf33622ecfde64270acf2edad544948912e902e4ce104b2d7e9f3e9ff9d` — matched expected hash before and after review.
- **Anatomy:** The full composition reads as one kneeling Bhūdevī approaching the lotus seat, with a small witness group and only distant conflict silhouettes on the far-left horizon. In the close views (Bhūdevī around x=60–540, y=280–930; Brahma around x=1020–1600, y=20–900), the adult figures have connected, proportionate limbs; no duplicate person or fused body is visible. No foreground battle, copied armor, fire, second globe, or Varaha appears.
- **Faces:** Bhūdevī's face is intact and composed; Brahma has three distinct front-visible faces with the fourth head turned behind, as contracted. The devas' visible faces are distinct. No malformed or duplicated face is apparent.
- **Hands/feet:** Bhūdevī's two arms meet in prayer; her visible hands and feet remain inside the frame. Brahma has four distinct attached arms/hands, holding a scripture, lotus, water pot, and prayer beads. Enlarged hands and visible toes show no clear extra, missing, fused, or detached digits.
- **Clothing and cast:** Bhūdevī wears a modest muted earth-green sari with warm ochre/cream accents. Brahma and the devas wear traditional draped clothing. Brahma has a tiered ochre crown and layered painted necklaces/armlets; these are ordinary temple-mural ornaments and do not violate a prohibition.
- **Text/signature artifacts:** No readable text, signature, watermark, or border is visible. The open scripture has short decorative page marks, not readable writing. I checked the corners and the ground for stray marks.
- **Scene and caption fidelity:** The scene follows stanza 1 and caption #1: burdened earth seeks Brahma while devas are already gathered. It borrows the burden-of-conflict premise from `001.jpg` while omitting its armored foreground warriors and flames, as required by plan lines 50–67.
- **Character/deity contract:** Bhūdevī has two attached arms, no injury or duplicate, and no globe/Varaha. Brahma's head and arm depiction matches his explicit four-head/four-arm contract. No Krishna feather or glossy/metallic rendering is present.
- **Verdict: pass.**

### Stanza 2 — candidate v001

- **Review time:** 2026-11-14 22:29 UTC
- **Image:** `artifacts/d037/s002/landscape/candidate-v001.png` (1672×941)
- **SHA-256:** `710b4d7af7dada141bd17c36057a1177b5f60b87b84cdb1555705635aecbdc1f` — matched expected hash before and after review.
- **Anatomy:** Bhūdevī kneels on dry receding ground beside the water, not submerged or harmed; Brahma and the witness figures have natural connected bodies. The rising waterline and shore communicate the peril. No second globe, duplicate goddess, or fused figures are visible.
- **Faces:** Bhūdevī's face is intact and directed toward Brahma. Brahma's three front-visible faces are distinct and calm; the fourth head is turned behind. The three secondary devas at the right remain distinct, with no malformed face seen in the enlarged Brahma/group crop.
- **Hands/feet:** Bhūdevī's joined hands and feet are visible. Brahma has four attached hands with scripture, lotus, water pot, and beads; the visible fingers and toes are legible and show no clear digit defect. Witness hands are distinct and attached.
- **Clothing and cast:** Traditional modest sari and draped garments cover the figures. Brahma wears an ornate tiered crown and several painted necklaces/armlets; this is ordinary iconography, with no contract prohibition. The witness group remains secondary.
- **Text/signature artifacts:** No readable text, signature, watermark, or border is present. The scripture's page markings are decorative and not legible writing. No stray text-like marks were seen in the ocean, ground, or corners.
- **Scene and caption fidelity:** The composition uses the ocean/endangered-Earth concept from `002.jpg` without copying its stock painting, watermarks, pose, or globe. It clearly depicts Bhūdevī pleading from shore while Brahma attends to her and turns inward, as specified at plan lines 96–113 and caption #2.
- **Character/deity contract:** Brahma shows the required three visible faces/four total heads and four arms; Bhūdevī remains a separate, uninjured two-armed figure. No extra limb or prohibited feature is visible.
- **Verdict: pass.**

### Stanza 3 — candidate v003

- **Review time:** 2026-11-14 22:29 UTC
- **Image:** `artifacts/d037/s003/landscape/candidate-v003.png` (1672×941)
- **SHA-256:** `1ce3822470f5f8cc0d826b053dbaad52980bb03bfab0221d30c52b42aa1aae59` — matched expected hash before and after review.
- **Anatomy:** The orderly procession spans left to right toward the pale ocean, with Shiva in front and the other figures separated by visible space. In the enlarged group crop (approximately x=20–1420, y=100–900), bodies and limbs are connected; there are no tangled or fused limbs, duplicate figures, or visible proportion errors.
- **Faces:** Shiva's single face, Bhūdevī's face, the sage's face, and Brahma's three front-visible faces are intact. The other visible faces are distinct; none appears malformed or duplicated.
- **Hands/feet:** Shiva has two attached arms, one holding the upright trident and one hanging naturally. Bhūdevī has two arms; Brahma has four attached arms, visibly carrying the lotus, scripture, beads, and water pot. The enlarged view shows no clear extra, missing, or fused fingers or toes.
- **Clothing and cast:** All figures wear modest traditional draped clothing. Shiva appears ash-grey, with restrained rudraksha and simple ochre cloth; his gray tone reads as ash-toned, not glossy blue. Brahma's crown and layered jewelry are painted ornaments. No Krishna feather appears on Shiva or Brahma.
- **Text/signature artifacts:** No readable text, signature, watermark, or border is visible. I checked the open book, pale sky, sand, water, and corners; its page strokes are decorative marks, not legible text.
- **Scene and caption fidelity:** The image uses `003.jpg` only as a broad assembly cue, with an original lateral procession rather than the source's deity lineup or photoreal glow. Shiva leads the group toward a calm milky-ocean shore, matching caption #3 and plan lines 143–159.
- **Character/deity contract:** Shiva has one head and two attached arms and carries one upright trident. Bhūdevī is a separate two-armed figure. Brahma has the contracted four heads and arms. No prohibited feature or extra limb is visible.
- **Verdict: pass.**

### Stanza 4 — candidate v002

- **Review time:** 2026-11-14 22:29 UTC
- **Image:** `artifacts/d037/s004/landscape/candidate-v002.png` (1672×941)
- **SHA-256:** `aff42304b2b7120a56636d36cfa3e7b4254a2c2240c8dc0924e1018058f5d90d` — matched expected hash before and after review.
- **Anatomy:** The figures sit in a restrained arc on the shore around Brahma. In the enlarged group and left-edge crops (x=0–1500, y=100–900), visible limbs are connected and proportionate; no fused or duplicate figures are apparent. The leftmost seated listener's torso/legs continue beyond the mural edge, but the face and key extremities are not cut off.
- **Faces:** Brahma's three front-visible faces and the surrounding deities' calm, varied faces are intact. Shiva's face is intact. The partly edge-positioned left listener's face is wholly inside the frame; no face is cut off or malformed.
- **Hands/feet:** Brahma has four attached hands: one near his heart, with the remaining hands holding the lotus, pot, and beads. The visible hands and feet in the assembly crop show no clear missing, extra, fused, or detached digits. Shiva has two attached arms; the upright trident is held in one hand.
- **Clothing and cast:** The assembly wears modest traditional robes and saris. Brahma has a tiered crown and layered necklaces/armlets, consistent with ordinary iconography. Bhūdevī is distinct and uninjured. No inappropriate exposure is visible.
- **Text/signature artifacts:** No readable text, sound waves, watermark, signature, or border appears. The sea, ground, and all corners were checked; the scripture has only decorative, unreadable marks.
- **Scene and caption fidelity:** The calm horizontal sea and gathered meditating assembly match stanza 4 and caption #4. Brahma is foregrounded with a hand near his heart; no large floating Vishnu image or literal writing was added. The source's glossy lighting and outer text are not copied, consistent with plan lines 190–207.
- **Character/deity contract:** Brahma's heads and hands match the four-head/four-arm contract. Shiva is a mature ash-toned two-armed figure with simple cloth and one upright trident. No extra anatomy, prohibited feather, or duplicated deva is visible.
- **Verdict: pass.**

### Stanza 5 — candidate v002

- **Review time:** 2026-11-14 22:29 UTC
- **Image:** `artifacts/d037/s005/landscape/candidate-v002.png` (1672×941)
- **SHA-256:** `913ee47612350a4000f4f3a51e527b9992f3d38c8738e7cd8d0f5030a31f1477` — matched expected hash before and after review.
- **Anatomy:** Brahma addresses a distinct assembly of listeners; their upper cloud-group is a symbolic lineage cue. The full image and enlarged group crop (approximately x=100–1550, y=0–900) show connected bodies and separated figures without fused people or accidental duplicates. The small Hari vision has a coherent torso and four visible arms.
- **Faces:** Brahma's three front-visible faces are distinct; the fourth head is turned behind. The vision's face is intact and serene. The listeners have varied, intact faces. At the right edge the upper and lower faces remain fully inside the frame; no key facial feature is clipped.
- **Hands/feet:** Brahma has four attached arms/hands with scripture, lotus, water pot, and an open speaking gesture. Hari's four arms are distinct and attached, carrying the iconographic attributes in the small vision. Enlarged visible listener hands and extremities show no clear extra, missing, or fused digits.
- **Clothing and cast:** The figures are modestly dressed in traditional robes and saris. Brahma's tiered crown and layered necklaces/armlets are ordinary painted temple-mural ornaments. Hari wears a painted crown and jewelry; there is no peacock feather. The gold-colored details remain flat painted ochre rather than reflective metallic surfaces.
- **Text/signature artifacts:** No readable text, signature, watermark, or border is visible. Brahma's page strokes are decorative, not legible writing. I checked the sky/cloud vision, ground, waterless foreground, and corners for stray marks.
- **Scene and caption fidelity:** Brahma visibly conveys the promise to the assembled devas. The small four-armed Hari vision sits in a cloud-blue field above the speaking gesture, and the separate listening figures suggest the lineages without showing an adult Krishna or birth scene. The composition uses only Brahma's identity cue from `005.jpg`, not its pose, gloss, text, or metallic lighting; it follows caption #5 and plan lines 236–253.
- **Character/deity contract:** Brahma's four heads and four attached arms conform to his contract. Hari appears as an intentional four-armed vision using Guruvayurappan identity cues, with no feather; the small crowd is not cloned. No structural prohibition is violated.
- **Verdict: pass.**

## Recommendation and completion attestation

All five selected landscape candidates pass this independent exact-checksum visual review. These verdicts apply only to the listed file bytes; they are not human art approval and do not update `art/approved/dNNN.json`. The chapter's pending captain art approval remains its standing state. I independently attest that this review raises no captain call and that the captain-call inventory is empty.
