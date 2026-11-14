# D028 landscape candidate review: stanzas 1–5

## Scope and method

I independently inspected the five selected landscape candidates at their full native 1672 × 941 resolution, then enlarged focused crops of faces, hands, feet, animal anatomy, crowded groupings, frame edges, water/ground, and corners. The scratch crops were made with ImageMagick `magick -crop ... -resize 200%` (the S001 conch hand was also enlarged to 400%) under the disposable worktree's `.review-scratch/`; no candidate, master, plan, approval, or project file was changed. I inspected the supplied intake photos individually and matched them using the final plan and chapter content: S001→001.jpg; S002→002.jpg–006.jpg; S003→007.jpg; S004→008.jpg; S005→009.jpg. Captions are in the OneDrive `photo-captions.txt`, lines 4, 26–31, 37, 42, and 47 respectively; chapter-content mappings are at `content/daskams/d028.json` lines 22, 32, 42, 52, and 62.

Checksum verification was performed with Python `hashlib.sha256` over every named frozen contract and candidate before inspection. All values matched the task's expected values. Native dimensions were confirmed with `identify -format '%f %wx%h\\n'`. Source/plan context: final plan stanza entries are `art/plans/d028.json` lines 22–281, especially scene briefs at 36–50, 93–107, 144–158, 196–210, and 248–262. The visual inspection used full-image views and individual crops, not a contact sheet. UTC review time below is the time I recorded each image's verdict.

## Frozen contract SHA-256 values

| Contract file | SHA-256 read |
|---|---|
| `art/plans/d028.json` | `c09738a636a8efddb9928568813171de47ae8dfb1ad2298ef7b524b9becbac13` |
| `art/bible/characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `art/bible/characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `art/bible/characters/asuras/character.json` | `00c00f503c33706c54306461c404e467e54ffcc40266f89190e0376a7d4afded` |
| `art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `art/bible/characters/dhanvantari/character.json` | `3557d434fe4cdf43000a3ba3605fbb23f6a977adbbfec21a5a59c428e7b7f951` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/lakshmi/character.json` | `541fc9d30aed43e142a7bd195b994710bd91d834df484a6b9e4eba2f7c74ef8c` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `art/bible/characters/uchchaihshravas/character.json` | `b80c20b5d4d52bbca4839119616769f86b9d431776e6de54f2e72a955a1c48c7` |
| `art/bible/characters/varuni/character.json` | `15d582ded2890fede70d1ad79cf5f6d0f5e1d6c0a2de1f9a9477ecdd4e70910f` |

## Image-specific findings

### S001 — v003

- Candidate: `artifacts/d028/s001/landscape/v003/candidate-v003.png`; SHA-256 `fef132dc39aee38e9301127090202433b0226cb3ec70e0828a3f1aff61a6338a`; native 1672 × 941.
- Review time: `2026-11-14T02:41:18Z`.
- Anatomy: Shiva is one seated, connected adult figure. His cross-legged pose reads clearly; both legs and both feet remain inside frame. No duplicated or fused figure is visible.
- Faces: Shiva has a single calm face, crescent and central third-eye mark; both distant deva faces are distinct and legible at their scale.
- Hands/feet: The enlarged conch-hand crop shows four visible fingers gripping the shell, with the thumb naturally occluded behind it; the other hand has five separated digits resting on the knee. Both feet show separated toes. No malformed extremity found.
- Clothing and cast: Shiva's cream/ochre wrap is modest traditional ascetic dress. Two distant two-armed devas pray at right; no extra cast appears.
- Text/signature artifacts: None visible in the patterned sky, poison cloud, water, ground, or corners.
- Scene and caption fidelity: Matches the full-body poison-drinking scene and placement of witnesses in S001's plan (plan lines 36–50), expanding the close Shiva icon in 001.jpg in the way the plan calls for. The cup, dark cloud, and shore/ocean are present; no injury is depicted.
- Character/deity contract: The scene uses the requested single-head, two-arm Shiva form. One hand holds the small conch cup and the other rests visibly on his knee; blue throat, ash-grey appearance, crescent, and devotional witnesses are present. **Verdict: pass** for this exact checksum.

### S002 — v002

- Candidate: `artifacts/d028/s002/landscape/v002/candidate.png`; SHA-256 `3b7127f4f1320b2d9efe9c60b6e336aec0cbc7802fcaafc01aadaeb0214b0de9`; native 1672 × 941.
- Review time: `2026-11-14T02:41:18Z`.
- Anatomy: The cow and horse remain separate four-legged bodies. The horse shows four attached legs and seven distinct horse heads; the elephant has four attached legs, one head/trunk, and four distinct mouth-rooted tusks. The enlarged lower-body and head crops show no detached or fused limbs.
- Faces: The two sages, two apsaras, cow, seven horse heads, and elephant have distinct, formed faces; no accidental duplicate human is apparent.
- Hands/feet: The sages and apsaras each show two attached arms. The sages' prayer hands and apsaras' gestures are coherent; animal hooves are present and attached. No human feet or animal legs are cut by the frame.
- Clothing and cast: Both sages wear modest ascetic cloth; the two adult apsaras wear opaque saris and have no wings. The five treasure subjects are visually separated. No source-image hybrid human-faced cow or feathered dancer is copied.
- Text/signature artifacts: None visible on the mural background, shore, water, or corners.
- Scene and caption fidelity: The wide shore frieze includes the white cow with two sages, seven-headed horse, four-tusked elephant, wish-tree, and two apsaras as required (plan lines 93–107). This uses the source photos 002–006 as subject cues rather than reproducing their composite layouts. The chapter caption at content line 32 names the same treasures.
- Character/deity contract: Surabhi has a bovine head, two horns, four legs, and one tail; Uchchaihshravas has one body and exactly seven heads; Airavata has one trunk and four tusks; the apsaras are two distinct, modestly dressed adults; the sages are distinct two-armed figures. **Verdict: pass** for this exact checksum.

### S003 — v003

- Candidate: `artifacts/d028/s003/landscape/v003/candidate-v003.png`; SHA-256 `18dedf79c611cf175753ce3507d2d2c2766958c94812ec7fbc2be7754553dbba`; native 1672 × 941.
- Review time: `2026-11-14T02:41:18Z`.
- Anatomy: Lakshmi is one connected seated figure with two arms. Both arms remain separated from her torso and the lotus; no extra or fused limb is visible.
- Faces: Lakshmi's face is formed and serene, with bindi, dark jasmine-adorned hair, and proportionate crown. The two distant deva faces are distinct.
- Hands/feet: Enlarged crops show five separated digits on the blessing hand; the lotus hand closes naturally around the stem. The devas' joined hands read clearly. Lakshmi's lower body is supported by the lotus; no cut-off face or key extremity is present.
- Clothing and cast: Lakshmi's maroon sari and muted green blouse are opaque and modest. Exactly two distant deva witnesses appear; no extra cast is present.
- Text/signature artifacts: None visible in the sky, ocean, foreground, or corners.
- Scene and caption fidelity: Lakshmi emerges centrally on one pink lotus above open water, with two small shore witnesses, matching plan lines 144–158 and caption/photo 007.jpg (content line 42). The reference's four-arm general icon is not copied.
- Character/deity contract: Lakshmi keeps the existing two-arm narrative form, golden-brown face, bindi, jasmine, and maroon/green costume. No prohibited extra arms or peacock feather is present. **Verdict: pass** for this exact checksum.

### S004 — v002

- Candidate: `artifacts/d028/s004/landscape/v002/candidate-v002.png`; SHA-256 `5b980054a5edc4cd41095bdf72a23f60b520ad5027588a1e672e79faacd2896f`; native 1672 × 941.
- Review time: `2026-11-14T02:41:18Z`.
- Anatomy: Lakshmi, Indra, and the two sages are separate connected bodies. Enlarged views of Indra's presentation gesture and the sages' vessels show no extra or fused arms. Lakshmi's seated legs and feet, Indra's kneeling legs/feet, and the sages' feet remain inside the frame.
- Faces: All four faces are formed and distinct. Lakshmi's serene face and the sages' different beard/topknot treatments are clear.
- Hands/feet: Lakshmi's two hands meet in her lap with distinct finger contours. Indra's two palms present the low seat; the sages' two-handed vessel handling is coherent. No malformed or cut-off hands or feet found.
- Clothing and cast: Lakshmi's maroon sari and green blouse and the sages' cream ascetic wraps are modest and opaque. Indra has a tall crown with several ornamental bands, and Lakshmi has a thick bead collar. These are the plan's disclosed v002 deviations (plan line 229); they are visible observations, not defects under the review standard. Only the planned Indra, Lakshmi, and two sages appear.
- Text/signature artifacts: No readable mantra, signature, watermark, or logo is visible in the background, water, floor, or corners.
- Scene and caption fidelity: Indra kneels at the left presenting the low jeweled seat; Lakshmi is seated centrally; two sages at right pour consecration water from vessels. The ocean backdrop and open ritual grouping fit the plan (lines 196–210) and the scene caption/photo 008.jpg (content line 52). The plan permits this source-grounded scene adaptation from the floating Lakshmi reference.
- Character/deity contract: Lakshmi remains two-armed in maroon/green; Indra is a distinct two-armed crowned adult; both sages are two-armed. The tall crown and thick collar are the disclosed deviations and do not violate an explicit structural prohibition. **Verdict: pass** for this exact checksum.

### S005 — v003

- Candidate: `artifacts/d028/s005/landscape/v003/candidate-v003.png`; SHA-256 `07f2717d8c29af578e68651859e7e0947ca798b33b02b61a45a7ba81c82aaf81`; native 1672 × 941.
- Review time: `2026-11-14T02:41:18Z`.
- Anatomy: Lakshmi, the two sages, and the deva are distinct connected figures. The full and enlarged crops show no duplicate body, fused torso, or detached limb. All visible feet and lower legs remain inside frame.
- Faces: Lakshmi's face is formed and serene. The dark-bearded and white-bearded sages are distinct, and the deva's face is formed.
- Hands/feet: Lakshmi's two hands rest together in her lap; the overlapping fingers remain readable as two hands. Each sage has two arms, each holding a single small pot, with water streams directed to the ritual basin. The deva's two hands support the tray. No malformed extremity found.
- Clothing and cast: Lakshmi wears an opaque yellow sari and green blouse with earrings, a crown, and layered necklaces; the sages wear modest cream ascetic cloth; the deva wears modest yellow/cream garments. These are ordinary painted temple-mural ornaments and no exposed or sexualized framing is present. The cast is one Lakshmi, two sages, and one deva.
- Text/signature artifacts: No readable text, signature, logo, or watermark is visible in the patterned background, floor, water, or corners; sari decoration is ornamental and not legible writing.
- Scene and caption fidelity: Two sages pour holy water toward Lakshmi seated on a low lotus seat; the deva presents an ornament on a tray at left. This matches plan lines 248–262 and caption/photo 009.jpg (content line 62), including the yellow garment called out in the plan and caption. The four-arm icon in the source is not reproduced.
- Character/deity contract: Lakshmi has exactly two arms and the required yellow sari, muted green blouse, dark jasmine hair, and modest crown; the two sages and deva each have two arms. No unplanned figure or crossed water stream is present. **Verdict: pass** for this exact checksum.

## Review conclusion

All five selected landscape candidates pass this independent visual review for their listed SHA-256 values. This is image-specific visual clearance only; the candidates remain unapproved and this review does not confer captain art approval. The disclosed S004 ornamental deviations are present as described above. No image defect requiring revision was found.

## Commands and evidence record

- Candidate and contract bytes: Python `hashlib.sha256(Path.read_bytes())`; all 5 candidate hashes and all 14 frozen contract hashes matched the expected values. Candidate native dimensions confirmed by ImageMagick `identify` as 1672 × 941 each.
- Full images: viewed individually at original resolution using the local image viewer for all five candidate paths above.
- Details: crops were made using ImageMagick under `.review-scratch/` and viewed individually, including S001 face/conch hand/resting hand/feet and devas; S002 sages/cow, seven horse heads/legs, elephant head/tusks/legs, apsaras; S003 Lakshmi face/hands and both devas; S004 Indra's hands/seat, Lakshmi's face/lap/hands/feet, sages' hands/feet; and S005 Lakshmi's face/lap/hands, each sage's face/pot/hands, deva/tray, lower bodies/feet, water, and frame edges. Reference photos 001.jpg–009.jpg were also viewed individually.
- No project or approval files were edited. Candidate checksums are the binding identities for these findings.

## Captain-call inventory

Empty. The pending captain art approval is standing state and is not a decision raised by this independent review.
