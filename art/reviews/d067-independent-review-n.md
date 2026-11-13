# D067 landscape candidate review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates against the final D067 plan, the named character contracts, each mapped intake reference, its caption, and the supplied stanza text. This is visual review evidence only; it does not approve artwork. Each verdict is bound to the candidate SHA-256 below.

I verified bytes with `sha256sum`, read the final plan and contracts, stanza text and caption/reference mapping, and inspected each full 1672 × 941 candidate at native resolution. I also created and inspected enlarged crops in the worktree scratch directory `.review-scratch/`: Krishna face/forehead detail for S001 and S003; S001 right edge; S002 search group; S004 and S005 group/hand detail; S005 gesturing hands. I viewed the corresponding `001.jpg`–`005.jpg` reference photos. The temporary crops are not evidence files and are not part of this report.

Review timestamps below are UTC. The candidate SHA-256 values and the following contract hashes were checked before inspection. The plan and shared Krishna contract match the required expected hashes.

| File read | SHA-256 |
|---|---|
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d067-final-plan-v3/d067.json` | `0abc1d698bb7571f4122793c0aa11919c636678195ee99c78cfd93eb9d346951` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/d067-krishna-youth/character.json` | `6f4194313a1a8354df14013d9d380c45ef605b8d66b208d1b1ab9bd61d54ea4c` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/d067-radha/character.json` | `b3a0003ed8c1c1977b393ef7c7abe5f010acff254f9395a889231935570f35d6` |
| `art/bible/characters/d067-rasa.json` | `b9c56f77258d88bec7a3d9908f6aee385c4acaec737660a62f1887ce002c2d3d` |

The final plan’s stanza entries are at lines 71–270; scene requirements and candidate status are at S001 lines 79–101, S002 121–143, S003 164–186, S004 206–228, and S005 248–270. Character contracts reviewed: shared Krishna identity and iconography in `krishna-vrindavan-youth/character.json`; stanza-specific Krishna/gopika/Radha contracts in `d067-rasa.json`; the separate gopika and Radha character files are also included in the hash table. Candidate-to-reference mapping is the final plan’s `reference_paths` (one-to-one 001–005), corroborated by `accepted-readiness.json` and `photo-captions.txt`. Stanza wording was read from `content/daskams/d067.json` entries 1–5.

Inspection commands included `sha256sum <candidate and contract paths>`, `identify -format '%f %wx%h\\n' <candidate paths>`, `rg -n '"n": [1-5]|candidate_status|"characters"|"must_show"' <final plan>`, and ImageMagick `magick <image> -crop ... -resize ... <scratch crop>` followed by visual inspection of full images and crops. Full candidate files were viewed directly; the crops targeted the face/forehead and crowded hands/groups described above.

## S001 — v004

- Candidate: `artifacts/d067/s001/landscape/candidate-v004.png`
- SHA-256: `d94be7327d7790ebc7555937424972aa456ea69db9accad314356b2d76e4913c` (verified)
- Reference/caption: `intake/D067/001.jpg`; moonlit Yamuna dance, bliss giving way to pride.
- Reviewed: `2026-11-13T22:48:46Z`
- Anatomy: one central youthful Krishna and a distinct surrounding circle of adult dancers; bodies and limb connections read coherently. The rightmost woman’s torso/arm continues beyond the right mural edge, but it is peripheral and not a face or visibly severed extremity.
- Faces: separate, readable faces throughout; no malformed or duplicate person noticed.
- Hands/feet: enlarged view shows Krishna’s hands with a normal five-digit form where visible and dancers’ open hands are individually shaped; bare feet are present and no obvious extra/fused digit is visible.
- Clothing/adult cast: all women read as adults in opaque saris/blouses; ordinary sari midriff is visible on the green-clad foreground dancer and is within traditional dress. No exposed or sexualized framing.
- Text/signature artifacts: none noticed, including ground and corners.
- Scene/caption fidelity: moon, riverbank, central dance and distinct circle are clear; lifted chins/self-assured glances convey the plan’s first trace of pride. Reference subject/cast context is retained while the composition is newly arranged.
- Krishna continuity: deep blue, youthful, two arms, yellow dhoti and muted red-orange shawl; a single low gold band and one upright feather. Enlarged forehead crop is plain, with no pale mark.
- **Verdict: pass.**

## S002 — v003

- Candidate: `artifacts/d067/s002/landscape/candidate-v003.png`
- SHA-256: `671849dd4cf06cb5b7b024a96b40794d2def7bb9e6ca8c8f94707439d6b74a65` (verified)
- Reference/caption: `intake/D067/002.jpg`; Krishna disappears as gopikas lose their confident certainty.
- Reviewed: `2026-11-13T22:48:46Z`
- Anatomy: four distinct women face the newly empty center; the bodies and visible limbs connect naturally. Their feet remain inside frame. No duplicate or malformed person noticed.
- Faces: four separate surprised/searching expressions; no obvious malformed face.
- Hands/feet: enlarged left-group inspection shows the raised and clasped hands as connected, with distinct fingers; no extra/fused digit defect noticed. Feet are intact.
- Clothing/adult cast: all four read as adult women in opaque village saris and blouses. No sexualized framing or unusual exposure.
- Text/signature artifacts: none noticed in the central path, ground, or corners.
- Scene/caption fidelity: Krishna is absent; the open center and fading pale path communicate a just-vacated space, with the women searching in surprise. This matches the plan and caption. The reference itself is a different iconographic scene; this candidate follows the mapped disappearance subject without copying it.
- Krishna continuity: no physical or ghost Krishna is shown, as required; forehead inspection is not applicable.
- **Verdict: pass.**

## S003 — v002

- Candidate: `artifacts/d067/s003/landscape/candidate-v002.png`
- SHA-256: `24367db6eef2d571371af2ef3e7a6d388a1ba62257110c4faeac37a8f261fc9a` (verified)
- Reference/caption: `intake/D067/003.jpg`; Krishna takes the unassuming Radha aside.
- Reviewed: `2026-11-13T22:48:46Z`
- Anatomy: two people only, both fully in frame; their arms, hands, legs and feet connect coherently. No duplicate body or malformed face noticed.
- Faces: Krishna and Radha have distinct calm expressions; no malformed features noticed.
- Hands/feet: the crop shows Krishna’s palm with five readable digits and his other hand resting across his torso; Radha’s joined hands show a coherent set of fingers. Both figures’ feet are visible and formed normally.
- Clothing/adult cast: Radha reads as an adult, fully clothed in an opaque sari and blouse; no sexualized framing. However, Krishna wears two prominent beaded necklaces and a large central pendant, plus conspicuous arm ornaments; the high-detail, heavy gold set reads as palace-like rather than the restrained village identity in the character contract. Visible approximately over Krishna’s chest/upper torso, image region x≈590–820, y≈370–590. This is a genuine, noticeable contract deviation beyond the disclosed forehead/crown deviations.
- Text/signature artifacts: none noticed in ground or corners.
- Scene/caption fidelity: a quiet forest path, Krishna walking beside Radha, and no other people are shown. Radha is distinct and composed; the scene is faithful to the planned separation and the mapped caption/reference context.
- Krishna continuity: enlarged forehead crop (image region x≈650–735, y≈90–205) clearly shows a pale vertical U-shaped forehead mark. The crown has a raised, ornate central setting above the band. Both deviations are disclosed in the S003 plan candidate status at final-plan line 186; they are present, and I have not counted those disclosed deviations alone against this image. Krishna is deep blue and youthful with two arms, yellow dhoti and red-orange shawl.
- **Verdict: needs-fix.** The visible heavy/palace-like necklace and pendant set at x≈590–820, y≈370–590 violates the restrained character contract and independently merits repair. The disclosed forehead mark and raised crown are present as stated.

## S004 — v002

- Candidate: `artifacts/d067/s004/landscape/candidate-v002.png`
- SHA-256: `4e55a7c124510a1a7c24de58428aa04b50142e6ca32c7845bbda196c0b1510f5` (verified)
- Reference/caption: `intake/D067/004.jpg`; the gopikas search the forest after Krishna’s disappearance.
- Reviewed: `2026-11-13T22:48:46Z`
- Anatomy: six distinct women are visible searching. Their varying standing, leaning, and crouching poses have connected limbs; no fused or duplicated people noticed. The foreground figures’ hands and feet remain within the frame.
- Faces: all visible faces are separate and legible with worried/searching expressions; no malformed face noticed.
- Hands/feet: enlarged group view shows the hands at the forehead, clasped at the chest, and extended toward the path/tree as plausible poses; individual fingers are simplified but no clear extra, missing, or fused digit defect is apparent. Feet visible under the saris are intact.
- Clothing/adult cast: all six read as adults in opaque, modest saris/blouses. No exposed bodies or sexualized framing.
- Text/signature artifacts: none noticed in path, soil, or corners.
- Scene/caption fidelity: wooded Yamuna grove, winding path, grouped searchers, and Krishna absent match the plan and caption. The reference is a decorated mural with searching women; this candidate preserves the cast/action while using a fresh composition.
- Krishna continuity: Krishna is absent; forehead inspection is not applicable.
- **Verdict: pass.**

## S005 — v002

- Candidate: `artifacts/d067/s005/landscape/candidate-v002.png`
- SHA-256: `ea6d0b7ea7ffc1b80fba3885b2196db7e35d2b7adf79236d6632717b984e5e39` (verified)
- Reference/caption: `intake/D067/005.jpg`; gopikas ask trees and creepers whether they have seen Krishna.
- Reviewed: `2026-11-13T22:48:46Z`
- Anatomy: six distinct adult women appear in standing and kneeling poses. Limbs connect coherently; no accidental duplicate or malformed body noticed. Edge figures’ limbs remain within frame.
- Faces: six separate faces with searching expressions directed toward trees/branches; no malformed faces noticed.
- Hands/feet: enlarged central and group crops show open-palmed gestures with five-digit hands where discernible and clasped hands with coherent finger shapes. Kneeling figures’ bare feet are visible and intact; no obvious extra/fused digits.
- Clothing/adult cast: all women are adults in fully opaque saris and blouses. No sexualized framing or exposed bodies.
- Text/signature artifacts: none noticed on the ground, foliage, or corners.
- Scene/caption fidelity: mangoes, flowering trees, tender creepers, and the Yamuna grove appear; the women gesture and look toward the branches while Krishna is absent. This matches both the plan and mapped caption. Reference context is respected without copying its staging.
- Krishna continuity: Krishna is absent; forehead inspection is not applicable.
- **Verdict: pass.**

## Recommendation

Keep the review outcomes attached only to the exact candidate checksums above. S001, S002, S004, and S005 pass this independent review. Repair S003’s heavy/palace-like Krishna jewelry and submit a new version for review; its disclosed pale forehead mark and raised crown are visibly present and should remain explicitly tracked if that version is retained. No candidate is approved by this report.
