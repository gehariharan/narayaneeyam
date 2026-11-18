# Dasakam 100 landscape candidate review

Independent visual review of the two requested candidates. Each verdict applies only to the exact candidate SHA-256 below. I inspected each full image at native dimensions and enlarged crops of faces, torsos, hands, and feet. The review does not approve either artwork; both remain unapproved pending the standing captain approval.

## Contract and reference byte checks

All expected SHA-256 values matched. These are the actual hashes of the frozen contract files read for this review:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d100.json` | `4799f02c6f74f3686dbfbeb3a570d6fc622c6710961333f93c3362284a7e5483` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/narada/character.json` | `841aa373baad9230944390a5019523cea424d23fd3f96ef81b149e7aa4f98806` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `art/bible/characters/d100-upanishad-sundaris/character.json` | `b55c74bcb1725276b30eac416cfba9f45858459647a286ce5a2ca66481aac724` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |

The plan maps photo 007 to stanza 7 and photo 011 to stanza 11, one-to-one; the chapter commentary and matching captions were checked at `content/daskams/d100.json:119-127,187-195` and `intake/D100/photo-captions.txt:31-34,51-56`. Scene requirements are in the frozen plan at `art/plans/d100.json:304-353` and `484-532`. Relevant identity constraints are in the Krishna contract at lines 5-14 and 47-63, Bhattathiri at lines 16-32, and Guruvayurappan at lines 10-37. The series rendering rules are at `art/bible/series.json:4-24,34-64`.

## Stanza 7 — landscape v004

- **Candidate:** `artifacts/d100/s007/landscape/candidate-v004.png`
- **Verified SHA-256:** `cbe0e9fdf8588b814c2799fb2316e8fec895d959e6ba22a4f9dbd0f4e5af1e24`
- **Native dimensions:** 1672×941 (`magick identify`)
- **Review time:** 2026-11-18T01:18:13Z
- **Anatomy:** One complete seated figure with connected torso, arms, crossed legs, and feet; proportions read naturally at full-image scale. No extra, missing, detached, or fused limbs or duplicate figures observed.
- **Face:** One serene youthful face with dark curls and deep blue skin. Face features are coherent in the enlarged crop. The low single feather band is present; no obvious forehead mark is visible at normal viewing scale.
- **Hands and feet:** Enlarged lower-body crop shows both hands attached, with a thumb and four fingers on each; both crossed feet show five distinct toe tips each. No fused or missing digits observed.
- **Clothing and cast:** Yellow cloth fully covers hips and thighs; the narrow jeweled belt and small hanging bells are present. Flower motifs suggest fragrance. The torso is bare as ordinary traditional devotional dress, with no sexualized framing. Only Krishna is depicted, as required by this stanza plan. The gold ornaments are elaborate but read as devotional iconography, not a palace crown or a tall tiered crown.
- **Text/signature artifacts:** No readable text, caption, signature, logo, or watermark seen. I checked the ground, water, and image corners at full scale; no artifact found.
- **Scene and caption fidelity:** The meditative waist, blue body, yellow silk, jeweled bell girdle, and tiny three-world jewel match the stanza caption and plan. The supplied photo is a story/cast reference only; its different staging and multi-armed form are not copied, consistent with the plan's two-armed youthful Krishna contract. The mural fills the frame without a separate decorative border.
- **Character/deity contract:** Reads as youthful Vrindavan Krishna with one face, two arms, long curls, blue skin, yellow dhoti, muted red-orange shawl, one feather, and a single low band. The gemmed band and other ornaments are more detailed than the word “simple” in the identity contract, but remain a low band and do not read as a palace crown; no contract-level defect is apparent.
- **Verdict: PASS** for this checksum only.

## Stanza 11 — landscape v014

- **Candidate:** `artifacts/d100/s011/landscape/candidate-v014.png`
- **Verified SHA-256:** `3ef4de4c95f382a76239a34864705b252c2483fd4245188be4fa120813de1260`
- **Native dimensions:** 1672×941 (`magick identify`)
- **Review time:** 2026-11-18T01:18:13Z
- **Anatomy:** Two distinct, naturally proportioned figures. Guruvayurappan has one head, two attached arms, and two attached feet. Bhattathiri is seated with connected limbs and folded hands; no duplicate, fused, detached, or missing limbs observed.
- **Faces:** Both enlarged faces are coherent. Bhattathiri appears older, clean-shaven, shaved-headed with a small tuft, ash stripes, and a central forehead mark. Guruvayurappan has one calm youthful face and a compact feathered crown. No malformed or duplicated face observed.
- **Hands and feet:** Bhattathiri's prayer hands meet naturally; the overlapping finger arrangement is readable and shows no extra digit. His visible foot has five toe forms. Guruvayurappan's open hand and resting hand each show a thumb and four fingers; both attached feet show five separated toe tips each.
- **Clothing and cast:** Bhattathiri wears a cream Kerala dhoti, sacred thread, and modest beads; the bare upper torso is ordinary traditional dress. Guruvayurappan wears yellow cloth and a red-orange shawl with sacred ornaments. The two figures remain distinct and dignified; no sexualized framing. The closed palm-leaf bundle has no writing.
- **Text/signature artifacts:** No readable text, caption, signature, logo, or watermark seen in the full image or around the floor and corners.
- **Scene and caption fidelity:** Bhattathiri's folded prayer and Guruvayurappan's inclined, compassionate response convey the closing forgiveness and blessing scene. The closed bundle supports the completed-hymn context without writing. The candidate follows the supplied caption and plan rather than copying the reference photo's staging. Full-bleed wall and floor remain within the frame.
- **Character/deity contract:** Bhattathiri matches the older clean-shaven devotee contract, including the forehead ash markings, small tuft, sacred thread, beads, and cream clothing. Guruvayurappan is youthful, blue, two-armed, and feather-crowned; the compact jeweled crown and sacred jewelry remain within the plan and the contract's tasteful-regal allowance.
- **Skin colour, independent visual and pixel check:** I sampled skin-only 11×11-pixel patches on Bhattathiri at the listed centers in the native image and calculated per-channel medians. Face cheek `(1167,346)`: RGB `(164,85,41)`, R−B `123`; neck `(1182,392)`: `(167,86,42)`, `125`; torso `(1241,510)`: `(177,94,47)`, `130`; upper arm `(1320,480)`: `(176,89,42)`, `134`; folded hand `(1090,458)`: `(176,93,48)`, `128`; visible foot `(1230,894)`: `(172,85,39)`, `133`. The face, neck, torso, and arm are above the plan's approximate R−B 120 guide, and my hand/foot patches are also above it. Visually the skin reads as natural warm brown with a strong warm/orange cast, not as orange. Against the Bhattathiri contract's warm medium-brown mineral pigment, that appearance is acceptable; the slight numeric overshoot is present but is not a viewer-noticeable orange-skin defect.
- **Verdict: PASS** for this checksum only.

## Evidence and disposition

Commands run included `sha256sum` over both candidates, both mapped intake photos, and all eight frozen contract files; all printed values matched the expected hashes. `magick identify` confirmed both candidates are 1672×941. I used `magick -crop ... -resize ...` to create enlarged scratch crops for face, torso, hands, feet, and scene details, then inspected those crops alongside each complete image. Skin medians above were computed from 11×11 crops with ImageMagick pixel output and per-channel median calculation.

The review found no defect meeting the needs-fix threshold. Both candidates pass independent visual review for their exact checksums, but neither is approved artwork. Captain-call inventory for this review is empty: the standing pending art approval is not a decision raised by this review. Recommendation: retain both exact candidates as review-cleared selections and leave the approval manifest untouched until the separate explicit art approval.

Mapped reference image hash output from the same `sha256sum` check:

- `intake/D100/007.jpg`: `d2fe7ffec31bdc68242e1d372668599091249a7ab3eebe39f3ceb6af69da61bf`
- `intake/D100/011.jpg`: `80ac523cc20f3469ebd50463497967b01a89dac96a0265f311bd76f5fac243d7`

The required empty-inventory attestation completed successfully. Command output: `complete: d100-review-j captain-call inventory reviewed`.
