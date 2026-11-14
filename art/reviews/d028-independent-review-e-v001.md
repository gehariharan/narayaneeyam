# D028 stanza 5 landscape candidate review

## Scope and method

I independently reviewed the full native-resolution landscape candidate and enlarged scratch crops. I verified the candidate SHA-256 and all frozen contract-file SHA-256 values before inspection. I read the stanza 5 final plan entry, the Lakshmi, devas, and sages contracts, the matching chapter content, and the supplied caption for reference photo 009. The plan maps stanza 5 to `intake/D028/009.jpg`; it explicitly says this is a static four-arm Lakshmi icon, not a literal ritual scene, and says the verse/caption ground the yellow garment and bathing action.

Commands/evidence: `sha256sum` on the candidate and all 14 frozen contract paths (values below); `identify -format 'candidate dimensions=%wx%h\\n' ...` returned `candidate dimensions=1672x941`; `magick ... -crop ... -resize ...` made detail crops in `.review-scratch/`, which I inspected alongside the full image using the local image viewer. The inspected regions included the entire composition; Lakshmi's head and crown (source rectangle x=735–959, y=245–474); each sage's face, arms, and pot; the tray-bearing deva's head, torso, and arm (x=0–429, y=300–629); Lakshmi's hands and seated body; sage feet; ground/vessel areas; and all four corners. The scratch crops are temporary and are not review evidence outside this report.

## Contract byte hashes

| Frozen contract | SHA-256 |
|---|---|
| `art/plans/d028.json` | `6fb2aa8b460867174800bf0fbe4753213cb1d72cd071eba5315c69aca9a6ca13` |
| `characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `characters/asuras/character.json` | `00c00f503c33706c54306461c404e467e54ffcc40266f89190e0376a7d4afded` |
| `characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `characters/dhanvantari/character.json` | `3557d434fe4cdf43000a3ba3605fbb23f6a977adbbfec21a5a59c428e7b7f951` |
| `characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `characters/lakshmi/character.json` | `541fc9d30aed43e142a7bd195b994710bd91d834df484a6b9e4eba2f7c74ef8c` |
| `characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `characters/uchchaihshravas/character.json` | `b80c20b5d4d52bbca4839119616769f86b9d431776e6de54f2e72a955a1c48c7` |
| `characters/varuni/character.json` | `15d582ded2890fede70d1ad79cf5f6d0f5e1d6c0a2de1f9a9477ecdd4e70910f` |

All 14 values matched the expected hashes in the task brief. Candidate hash matched the stanza 5 plan entry and task brief.

## Candidate finding

- **Stanza/version:** D028 stanza 5, landscape v002
- **Candidate:** `artifacts/d028/s005/landscape/v002/candidate.png`
- **Verified SHA-256:** `2a51f55e8a822e0d843cc5a2961077c789a50a41f83da8fb4c6050763b4afab6`
- **Dimensions:** 1672 × 941
- **Review time:** 2026-11-14T01:32:26Z
- **Anatomy:** Lakshmi and both sages have coherent, attached bodies and ordinary proportions. The deva at lower left has one visible arm from shoulder to tray-holding hand; no second arm is drawn or visible. In the full image this is a small but readable one-armed figure, contrary to the two-armed deva required by the plan.
- **Faces:** Lakshmi, the two sages, and the deva each have a distinct, legible face. No malformed or duplicated person is visible.
- **Hands/feet:** Lakshmi's two hands meet naturally in her lap; no extra or fused digits are apparent. Each sage has two attached arms holding a small ritual pot; their hand shapes remain readable in enlarged crops. The visible sage feet show separated toes without an obvious count or proportion defect. Lakshmi's feet are concealed by her seated, folded-leg pose and garment, not cut off by the frame. The deva's single visible hand is clearly connected to his arm and supports the tray; the missing second arm is recorded above.
- **Clothing and cast:** Lakshmi wears an opaque yellow sari and muted green blouse, with traditional earrings, necklaces, armlets, and bracelets. The sages wear opaque cream robes. The kneeling deva wears cream/yellow clothing and a red drape. No exposed skin beyond ordinary traditional dress, sexualized framing, or accidental duplicate figure is visible. Jewelry is ornate but reads as traditional ceremonial adornment, not palace-like regalia that clearly exceeds the neighboring D028 depictions.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible. I inspected the patterned upper corners, lower ground, and vessel/ground crops closely; the decorative marks there are continuous painted motifs.
- **Scene and caption fidelity:** The wide scene shows Lakshmi on a low lotus seat receiving two separate, simple water streams from two sages with pots; neither stream crosses a face or hand. A single secondary deva offers an ornament on a small tray. Yellow clothing and earrings/necklaces match the supplied caption. Photo 009 itself is a four-armed icon, so the plan's two-armed narrative depiction correctly follows the plan rather than copying that icon. The drawn water is simple mural linework.
- **Character/deity contract:** Lakshmi has two arms, a serene golden-brown face, dark jasmine-adorned hair, and a muted green blouse. Her gold crown's visible height is about 91 px (peak near y=260 to hairline/base near y=351) against about 96 px of face height (hairline to chin, approximately y=351–447), or roughly 0.95 face-heights. It is fully inside the frame. Although taller than the small crown in the D028 stanza 4 comparison, it is close in scale to the ceremonial crown in stanza 6 and reads as ordinary crowning-scene iconography in the full composition; it does not visibly contradict the contract's “proportionate” crown / “no oversized crown” wording or the plan's “modest crown” wording. The necklaces are prominent but remain traditional jewelry consistent with the Lakshmi contract's restrained-regal styling. The tray-bearing generic deva has only one visible arm, against the plan's exact requirement for “one distinct two-armed deva” (plan lines 249–251) and the devas contract's “Exactly two naturally attached arms per generic witness” (contract line 10). Pixel region for this defect: approximately x=130–405, y=450–610; the one arm extends from the figure's shoulder to the hand beneath the tray, and the opposite shoulder has no attached arm or hand.
- **Verdict: needs-fix.** The absent second arm on the tray-bearing deva is a genuine visible anatomy and scene-contract defect. Crown size is an observation, not a defect.

## Source references used

- Final plan: `art/plans/d028.json`, stanza 5 lines 232–280; exact scene requirements and composition at lines 249–251, source-photo limitation at line 280.
- Lakshmi contract: `art/bible/characters/lakshmi/character.json`, two-arm identity line 15, proportionate crown line 21, restrained traditional jewelry line 23, prohibited oversized/cropped crown and extra arms lines 30–33.
- Devas contract: `art/bible/characters/devas/character.json`, exactly two arms line 10.
- Sages contract: `art/bible/characters/sages/character.json`, exactly two attached arms line 10.
- Dasakam content: `content/daskams/d028.json`, stanza 5 and caption source lines 57–64.
- Reference caption: `intake/D028/photo-captions.txt`, `009.jpg` stanza 5 caption lines 44–47.
- Visual comparison: `intake/D028/mural-s004-landscape-v002.png` and `intake/D028/mural-s006-landscape-v001.png`; these were inspected only to compare the Lakshmi crown's ordinary scale/style.

## Recommendation and inventory

Revise the tray-bearing deva to show two naturally attached arms, then obtain a fresh exact-checksum review of the new candidate. This report does not approve art or modify any approval manifest. Captain-call inventory raised by this review: empty; the pending captain art approval is the standing state and is not a new decision raised here.
