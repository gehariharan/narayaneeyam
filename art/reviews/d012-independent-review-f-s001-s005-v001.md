# D012 landscape candidate review: stanzas 1–5

## Review scope and method

I independently reviewed the five selected landscape candidates against the frozen final D012 plan, series bible, Brahma and Varaha character contracts, stanza text, caption file and numbered intake photos. I opened each candidate at native resolution, then inspected enlarged crops for faces, heads, hands, feet/hooves, torsos, animal anatomy, scene details and image edges. To preserve producer files, I copied each candidate into this task worktree's `data/d012-review-f/scratch/` and made all detail crops from those copies. I did not alter candidates, intake files, approval manifests or project files. Scratch copies and crops were removed after inspection.

The plan maps S001–S005 to `intake/D012/001.jpg` through `005.jpg` respectively (`art/plans/d012.json`, stanza entries at lines 18, 63, 109, 160 and 208). The caption text is `photo-captions.txt` lines 3–16; the corresponding stanza translations and `commentary_source` mappings are in `content/daskams/d012.json` lines 15–57. The plan says the D012 photos are iconographic references and not compositions to copy (plan lines 7–16, 54–60, 100–105, 149–155, 198–205, 246–253). I judged scene fidelity to the stanza and final plan while using the photos for iconography.

Relevant contract requirements include the matte mural palette and no text/watermark/signature (`series.json` lines 4–6, 51–64); Brahma's four total heads with three front-visible faces, four distinct attached arms/hands, and traditional clothing (`characters/brahma/character.json` lines 22–38); and Varaha's coherent natural boar body with four legs and no D012 weapons or added limbs (`characters/varaha/character.json` lines 20–33). The S003 `candidate_status` entry was read (plan line 157); it discloses no remaining deviation, and it is not treated as evidence for my findings.

Inspection commands included `sha256sum` for all candidates and frozen contracts, `identify` for native dimensions, `jq`/`cat` for plan and content, `cat` for captions and character files, `magick -crop` on task-local copies, and native-resolution `view_image` inspection of each full candidate and the detail crops. All hashes below matched the expected values before inspection. Review times are UTC.

## Frozen contract checksums

- Final plan `art/plans/d012.json`: `a9f59eec57f400a19832bfb955659ac2c5ca82fb55314b57b351a8feeeefa129`
- Series bible `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Brahma contract `art/bible/characters/brahma/character.json`: `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- Varaha contract `art/bible/characters/varaha/character.json`: `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3`

## Candidate findings

### Stanza 1 — landscape v003

- **Candidate:** `artifacts/d012/s001/landscape/candidate-v003.png` (1672×941)
- **SHA-256:** `321be19fcc1e264a81c8ee49ce991b5e1e90b3b50d8af5008311e46c1b1f3a20`
- **Reviewed:** 2026-11-15 16:55:47 UTC
- **Anatomy:** The two sages and crowned Manu at image-left each have connected two-arm, two-leg bodies. Brahma's four arms attach distinctly at the shoulders; his seated legs are naturally folded. No malformed or duplicated people are visible.
- **Faces, hands and feet:** The three visible Brahma faces are distinct and normally formed; the turned-away fourth head is represented behind them. The sages' and Manu's faces are distinct. Enlarged crops show joined prayer hands and open/attribute hands with coherent fingers; bare feet are intact and inside the frame. No obvious extra or missing digits.
- **Clothing and cast:** The sages wear traditional draped robes; Manu wears a robe and crown. Brahma wears cream and saffron garments with painted-ochre jewelry. Clothing is traditional and modest. Cast is three visitors plus Brahma, with no apparent duplicate figure.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible in the sky, water, ground or corners.
- **Scene and caption fidelity:** Lotus-seated Brahma receives crowned Manu and two sages in Satyaloka; a small Earth appears partly below the water as a supporting motif. This matches the plan and caption's arrival/petition scene. The photo's unrelated figures and composite scene are not copied.
- **Character/deity contract:** Three faces are visible with the rear-facing head hidden; four distinct arms and hands are visible. The matte ochre/cream treatment and natural proportions fit the contracts. No contract prohibition is apparent.
- **Verdict: pass.**

### Stanza 2 — landscape v004

- **Candidate:** `artifacts/d012/s002/landscape/candidate-v004.png` (1672×941)
- **SHA-256:** `0e9d708a086730e5c961bb23fdabcda0856fc92debd7e752333fe0deeacd2dae`
- **Reviewed:** 2026-11-15 16:55:47 UTC
- **Anatomy:** Kneeling Manu has a connected, normally proportioned body and two arms. Brahma is seated with four distinct attached arms and naturally folded legs. No extra or fused person is visible.
- **Faces, hands and feet:** Manu's face and joined hands are intact. Brahma's three visible faces are distinct; the fourth head faces behind the central head. Enlarged hand crops show a coherent prayer gesture and distinct lotus, pot and bead-holding hands; no obvious extra or missing digits. Manu's folded feet remain within the composition.
- **Clothing and cast:** Both figures wear traditional modest clothing. Brahma has a cream dhoti and saffron drape with painted-ochre ornaments. The scene contains only Manu and Brahma.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible, including on the water, ground and image edges.
- **Scene and caption fidelity:** Manu petitions lotus-seated Brahma; Brahma's lowered eyes and inward posture read as contemplation. Calm water and a partly submerged Earth below suggest the crisis without creating another action panel. This fits the plan and stanza caption.
- **Character/deity contract:** Brahma has three distinct visible faces and four attached arms/hands, with the rear head hidden. Palette, dress and matte rendering follow the contracts; no prohibition is violated.
- **Verdict: pass.**

### Stanza 3 — landscape v010

- **Candidate:** `artifacts/d012/s003/landscape/candidate-v010.png` (1671×941)
- **SHA-256:** `9e1319704776840c829ee936524c8eb64c1aa015ea502f41b22ed39fc0e211c9`
- **Reviewed:** 2026-11-15 16:55:47 UTC
- **Anatomy:** Brahma's four arms are attached and distinct, with the two central hands joined. The tiny boar has one coherent natural body and four connected legs; no human baby body or duplicated boar is visible.
- **Faces, hands and feet:** Brahma has three distinct visible faces and a rear-facing fourth head represented behind them. His praying hands are intact. The boar has a recognizable natural snout, ears, tusks and face; the small legs are individually visible in the enlarged crop and do not show an extra limb. No malformed face or obvious digit defect is visible.
- **Clothing and cast:** Brahma wears a traditional saffron drape and painted-ochre jewelry over modest devotional dress. The boar wears a small crown. Only Brahma and one boar appear.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible in the sky, water, ground or corners.
- **Scene and caption fidelity:** The Earth is visible sinking into the sea. The boar is single, tiny and crowned, facing outward with snout and forelegs leading. In the enlarged nostril crop, three fine pale breath-light strands visibly begin at the opening of Brahma's right-facing head's nostril, arc to the boar's hindquarters, and connect it to the nostril; the snout points away from Brahma. The strands leave a visible gap from the moustache. This reads as emerging from the nostril, matching the exact caption and reference action.
- **Character/deity contract:** Four crowned heads are represented with three visible faces; four attached arms are visible. The infant boar has natural boar anatomy, not a human infant face or humanoid limbs. Palette and matte contour are consistent with the stated contracts.
- **Verdict: pass.**

### Stanza 4 — landscape v006

- **Candidate:** `artifacts/d012/s004/landscape/candidate-v006.png` (1672×941)
- **SHA-256:** `70635c74f22fc915eef311a779c6a0274f6c161c2f5c7b27ef907bac150fe563`
- **Reviewed:** 2026-11-15 16:55:47 UTC
- **Anatomy:** The large boar has one coherent torso, one head, two forelegs and two hind legs; the four legs and hooves are connected and visible. Brahma has four attached arms; the two smaller witnesses each show natural two-arm anatomy. No fused or malformed body is apparent.
- **Faces, hands and feet:** The boar's face and tusks are intact. Brahma's three visible faces are distinct with the rear head behind them. The witnesses' faces, open hands and feet are intact; Brahma's attribute hands are distinct. No obvious extra/missing digits or cut-off face/extremity.
- **Clothing and cast:** The two small witnesses wear modest traditional robes. Brahma's traditional cream/saffron dress and painted-ochre ornaments are visible. The large boar wears a crown, necklace and leg bands; these are ordinary devotional ornament and do not obscure its anatomy. Cast is one large boar, Brahma and two witnesses.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible, including in the open sky and corners.
- **Scene and caption fidelity:** A small outlined boar at far left and the large boar in the sky are connected by one long, thin curved line. This reads as a scale-change echo/progression leading to the elephant-sized form, not as an unrelated second animal; the boar is the clear focal figure and Brahma with two witnesses looks up from below. The arrangement communicates the caption and plan's permitted restrained size echo.
- **Character/deity contract:** The boar keeps natural four-leg anatomy and no weapons or humanoid warrior form. Brahma's four arms and three visible faces conform; series palette and matte rendering fit.
- **Verdict: pass.**

### Stanza 5 — landscape v003

- **Candidate:** `artifacts/d012/s005/landscape/candidate-v003.png` (1672×941)
- **SHA-256:** `bc8a03142e0382473c28b6c2886326673e5a9640716e54e801c70dc52abf7af6`
- **Reviewed:** 2026-11-15 16:55:47 UTC
- **Anatomy:** One immense boar fills the sky with one coherent body, one head and four connected legs. Enlarged torso/leg crops show two forelegs and two hind legs, not an extra limb. Brahma is seated below with four attached arms; no duplicate people or boars appear.
- **Faces, hands and feet:** The boar's face, eyes, tusks and open roaring mouth are intact. Brahma has three distinct visible faces with the fourth head behind them. His hands are distinct and intact; his seated legs are covered by the dhoti and lotus folds, with no extremity cut by the frame. No malformed face or obvious extra/missing digits.
- **Clothing and cast:** Brahma wears traditional cream/saffron clothing and painted-ochre ornaments. Varaha's crown, necklace and cloth panel are devotional ornament; all are fully contained and do not obscure the four-leg silhouette. Clothing is modest. Cast is one boar and Brahma.
- **Text/signature artifacts:** No readable text, pseudo-script, signature or watermark is visible in the clouds, sky, ground or corners.
- **Scene and caption fidelity:** Brahma looks up at one mountain-sized boar with an open roaring snout; cloud and scale relationship establish the size. The boar and Brahma are separated by clear open space as planned. The source photo's humanoid warrior anatomy and weapons are absent.
- **Character/deity contract:** Varaha remains a natural boar with no added human arms or weapons. Brahma's four attached arms and three visible faces fit the character convention. Matte earth-pigment palette and non-glossy treatment fit the series contract.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All five exact-checksum candidates pass this independent visual review. The result applies only to the checksums recorded above and is not approval to update `art/approved/`; human art approval remains separate. I found no unresolved question requiring a captain decision in this review. The standing pending art approval is outside this review's inventory and is not raised or answered here; the inventory for this review is empty.
