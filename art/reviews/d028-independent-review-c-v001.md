# D028 landscape visual review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates listed below against the byte-frozen D028 plan and character contracts, the stanza commentary in `content/daskams/d028.json`, and the mapped raw intake photos plus their captions. Each candidate hash matched the task brief before inspection. I opened every full candidate at its native 1672×941 resolution and opened native-pixel crops for Shiva, the seven-headed horse, the four-tusked elephant, the apsaras, Lakshmi, Indra, the sages, and key hand/face regions. I also checked full-image corners, water/ground areas, clothing, scene layout, and the reference photos individually. Crops were temporary scratch images in the worktree and are not review evidence independent of the candidate checksums.

Commands used included `sha256sum <frozen-contracts-and-candidates>`, `magick identify -format '%f %wx%h\\n' <candidates>`, `magick <candidate> -crop ... +repage <worktree-scratch-crop>`, and `date -u +%Y-%m-%dT%H:%M:%SZ`; full and cropped images were opened with the image viewer at original resolution. The verified candidate dimensions were 1672×941 for all five.

Scene-plan anchors are the stanza entries in the frozen `art/plans/d028.json`: S001 at lines 22–69, S002 at 72–126, S003 at 129–177, S004 at 180–229, and S005 at 232–281. The matching chapter commentary and source photo mappings are in `content/daskams/d028.json`: S001 lines 17–23 → `intake/D028/001.jpg`; S002 lines 27–33 → `006.jpg`, with scene source photos `002.jpg`–`006.jpg` mapped by plan lines 84–99; S003 lines 37–43 → `007.jpg`; S004 lines 47–53 → `008.jpg`; S005 lines 57–63 → `009.jpg`. The supplied OneDrive caption export was also checked at `Pictures/Narayaneeyam Studio/intake/D028/photo-captions.txt` under each numbered heading.

## Frozen contract checksums

Every actual SHA-256 below matched the expected value in the task brief. Paths are relative to `data/d028-production/review-contract-c/d/`.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d028.json` | `6fb2aa8b460867174800bf0fbe4753213cb1d72cd071eba5315c69aca9a6ca13` |
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

## Image findings

### S001 — v003 landscape

- Candidate: `artifacts/d028/s001/landscape/v003/candidate-v003.png`
- Verified SHA-256: `fef132dc39aee38e9301127090202433b0226cb3ec70e0828a3f1aff61a6338a`
- Review time: `2026-11-14T01:22:58Z`
- Anatomy: Shiva is one seated figure with one head, two attached arms, and two legs. The two distant deva figures are separate. No fused, duplicated, detached, or malformed body is visible.
- Faces: Shiva’s face is coherent and calm; the forehead mark reads as the scene’s third-eye mark. Both praying devas have distinct, legible faces.
- Hands/feet: Shiva’s raised hand holds the conch naturally and the other rests on his knee. The visible hands and both feet have coherent shapes; no extra or missing digits are apparent at this view. The deva prayer hands are distinct and attached.
- Clothing and cast: Shiva’s cream/ochre wrap is modest; his bare torso is ordinary ascetic depiction. Cast is limited to Shiva and the two planned devas. The crescent, beads, matted hair, and blue throat are visible.
- Text/signature artifacts: No readable text, signature, logo, watermark, or suspicious mark is visible in the corners, ground, or water.
- Scene and caption fidelity: The image shows Shiva drinking dark poison from a conch beside the ocean, with a dark cloud and two distant praying witnesses, in keeping with the caption for `001.jpg` and plan lines 36–48. It does not copy the reference photo’s crowded churning scene.
- Character/deity contract: The one-head, two-arm Shiva depiction follows the D028 plan’s scene override; the reference contract’s separate D033 scope is noted at `characters/shiva/character.json:9,20`. Crescent, blue throat, ascetic beads, and modest wrap are present. The devas are two distinct two-arm witnesses, consistent with `characters/devas/character.json:10,13`.
- Verdict: **pass** — exact candidate checksum above only.

### S002 — v002 landscape

- Candidate: `artifacts/d028/s002/landscape/v002/candidate.png`
- Verified SHA-256: `3b7127f4f1320b2d9efe9c60b6e336aec0cbc7802fcaafc01aadaeb0214b0de9`
- Review time: `2026-11-14T01:22:58Z`
- Anatomy: Surabhi has one bovine head, two horns, and four attached legs; the horse has one body with **seven distinct heads and four attached legs**; Airavata has one head/trunk, four legs, and **four distinct tusks rooted at the mouth**. No hybrids, detached parts, or duplicate animal bodies are visible. The two sages and two apsaras are distinct two-armed figures.
- Faces: Animal faces are coherent and species-appropriate; all visible human faces are distinct and undistorted. No accidental duplicate person is visible.
- Hands/feet: The sages’ and apsaras’ hands remain separate and attached; their visible feet and the animals’ hooves are coherent. No digit or limb-count defect is visible. Horse’s lifted foreleg is attached and reads as a natural raised leg.
- Clothing and cast: The two sages and two apsaras wear opaque, modest traditional garments. The apsaras have no wings or feather bodies. There is no extra crowd; the cow, seven-headed horse, elephant, wishing tree, sages, and two apsaras are legibly separated.
- Text/signature artifacts: No generated text, labels, signatures, logos, copied stock watermark, or ground/water corner mark is visible. The source photos include watermarks/text, but none is copied into this candidate.
- Scene and caption fidelity: The horizontal frieze includes all five planned treasures and the two sages/apsaras. The photographed subjects in `002.jpg`–`006.jpg` are used as subject cues; the human-faced winged cow and winged dancer forms from the references are not reproduced. Caption for `006.jpg` lists these treasures and their distribution.
- Character/deity contract: The observed animal counts match Surabhi (`characters/surabhi/character.json:10,13`), Uchchaihshravas (`.../uchchaihshravas/character.json:10,13`), and Airavata (`.../airavata/character.json:10,13`). The apsaras are two modest two-arm adults without wings (`.../apsaras/character.json:10,13`); the sages and deva-style dress remain consistent with the D028 rules (`.../sages/character.json:10,13`; `.../devas/character.json:10,13`). The matte ornaments read as painted mural decoration rather than metallic shine.
- Verdict: **pass** — exact candidate checksum above only.

### S003 — v003 landscape

- Candidate: `artifacts/d028/s003/landscape/v003/candidate-v003.png`
- Verified SHA-256: `18dedf79c611cf175753ce3507d2d2c2766958c94812ec7fbc2be7754553dbba`
- Review time: `2026-11-14T01:22:58Z`
- Anatomy: Lakshmi has one head and exactly two attached arms; the torso and visible arms are naturally proportioned. The two distant deva witnesses are separate and not fused with the shoreline.
- Faces: Lakshmi’s serene face, bindi, and features are legible and coherent. Both deva faces are individually distinct.
- Hands/feet: The blessing hand is open with distinct fingers, and the other hand holds the lotus stem. No malformed or extra digits are visible. Lower legs/feet are obscured by the planned lotus and water rather than cut off by the frame.
- Clothing and cast: The maroon sari and green blouse are opaque and modest, with jasmine in the dark hair. Cast remains Lakshmi and two distant devas; no extra deity or crowd is present.
- Text/signature artifacts: No readable text, signature, watermark, logo, or anomalous mark appears in the open water, ground, or corners.
- Scene and caption fidelity: Lakshmi emerges above the milk ocean on a pink lotus, centered in open water with two witnesses on the distant shore, matching caption `007.jpg` and plan lines 144–156. The source is a four-arm composite; this candidate follows the planned two-arm narrative form.
- Character/deity contract: Two arms, golden-brown face, red bindi, arranged dark hair with jasmine, modest crown, maroon sari/green blouse, lotus, and blessing gesture follow the D028 plan and the relevant Lakshmi rules (`characters/lakshmi/character.json:15,21–23`).
- Verdict: **pass** — exact candidate checksum above only.

### S004 — v002 landscape

- Candidate: `artifacts/d028/s004/landscape/v002/candidate-v002.png`
- Verified SHA-256: `5b980054a5edc4cd41095bdf72a23f60b520ad5027588a1e672e79faacd2896f`
- Review time: `2026-11-14T01:22:58Z`
- Anatomy: Lakshmi, Indra, and both sages each read as one naturally proportioned figure with two attached arms. No fused limbs, duplicate people, or malformed bodies are visible.
- Faces: Lakshmi is serene and distinct; Indra and the two bearded sages have coherent, distinct faces.
- Hands/feet: Lakshmi’s hands rest together in her lap. Indra’s open presenting hands and each sage’s vessel-holding hands remain attached and visually attributable. Visible feet are inside the frame; no digit defect is apparent.
- Clothing and cast: All four figures wear opaque traditional dress. Lakshmi’s maroon sari and green blouse are retained. Cast is exactly Lakshmi, Indra, and two sages. The low jewel-set seat, vessels, and flowers remain simple scene props.
- Text/signature artifacts: No readable mantra, text, signature, logo, watermark, or ground/corner artifact is visible.
- Scene and caption fidelity: Lakshmi sits on a low seat beside the ocean, with Indra presenting it and two sages performing the consecration with vessels, matching caption `008.jpg` and plan lines 196–208. She is already seated while Indra presents the seat with open hands; the action remains readable.
- Character/deity contract: The known plan deviation is present: Indra’s crown is tall and has several ornamental bands, and Lakshmi’s necklace is a thick bead collar; these are disclosed in plan line 229. The crown is conspicuous but remains a simple matte painted crown without oversized gemwork or palace-like piled regalia, and the necklace remains within the scene’s traditional jewelry depiction. I do not count either disclosed feature as crossing the stated fail threshold. Indra’s two-arm adult deva depiction and modest cream/saffron dress are otherwise consistent with `characters/indra/character.json:10,13`; Lakshmi and sages follow their scene contracts.
- Verdict: **pass** — exact candidate checksum above only.

### S005 — v002 landscape

- Candidate: `artifacts/d028/s005/landscape/v002/candidate.png`
- Verified SHA-256: `2a51f55e8a822e0d843cc5a2961077c789a50a41f83da8fb4c6050763b4afab6`
- Review time: `2026-11-14T01:22:58Z`
- Anatomy: Lakshmi has one head and two attached arms resting together in her lap. Both sages have distinct two-arm bodies while pouring; the offering deva has two attached arms. No duplicated people, malformed bodies, or fused limbs are visible.
- Faces: Lakshmi’s face is coherent, with bindi and arranged dark hair; the two sages and deva have distinct, readable faces.
- Hands/feet: Lakshmi’s joined hands, both sages’ pot-holding hands, and the deva’s tray-holding hand are coherent and attached. Feet visible at the seated/standing figures are not cut by the image frame. No digit defect is visible.
- Clothing and cast: Lakshmi wears opaque yellow sari and muted green blouse; sages wear modest ascetic cloth and the deva is traditionally dressed. The single deva offers a small ornament tray. No sexualized framing or extra cast is present.
- Text/signature artifacts: No readable text, signature, logo, watermark, or suspicious ground/corner mark is visible.
- Scene and caption fidelity: The water streams, two sages, seated Lakshmi, lotus seat, and deva’s ornament offering match caption `009.jpg` and plan lines 248–260. Streams reach Lakshmi’s crown but do not cross her face or hands.
- Character/deity contract: Lakshmi’s two-arm identity, face, bindi, hair/jasmine, green blouse, and yellow garment follow the plan. **Needs-fix:** the crown at approximately x=798–947, y=222–339 in the 1672×941 candidate is a tall, multi-tier gold crown with a large central medallion; its height is comparable to her face. It is visibly more elaborate than the plan’s “modest crown” and her proportionate crown in S003 (plan lines 144–150; `characters/lakshmi/character.json:21,23`). A viewer sees the oversized regalia on the focal figure at full-image scale. This is the sole defect driving the verdict.
- Verdict: **needs-fix** — exact candidate checksum above only.

## Recommendation and inventory attestation

S001–S004 pass this exact-checksum visual review. S005 needs-fix for the cited crown; it should not be treated as visually cleared. All five candidates remain unapproved, and this review does not update or imply an art approval. The standing captain art approval is not a new question raised by this review; my captain-call inventory for this report is empty.
