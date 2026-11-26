# D045 independent visual review: stanzas 7–12 landscape candidates

## Scope and method

I independently reviewed each selected candidate against its stanza in the frozen final plan, the applicable character contracts, chapter content, and its numbered reference photo. I opened every complete candidate frame and inspected native-resolution crops of faces, hands, feet, and principal cast in `.review-scratch/` under the review worktree. Candidate and reference inputs were never modified. The crop scratch files are inspection derivatives only.

All six numbered references were also present in the OneDrive intake folder; each OneDrive photo had the same SHA-256 as its local counterpart. I therefore visually inspected the local copies whose hashes are listed below. The disclosed photo deviations are present for stanzas 7, 8, 11, and 12; in each case the scene judgment below follows the canonical stanza and plan.

The expected-hash list was generated programmatically and checked with:

```sh
sha256sum -c /home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/.review-scratch/expected.sha256
```

Result: all **26/26** listed candidates, references, rendering references, frozen contracts, map, and caption files reported `OK`. Candidate dimensions are 1672×941 except stanza 12 at 1671×941. The review used full-frame display plus close crops made with ImageMagick `magick <input> -crop ... +repage -filter point -resize ... <absolute .review-scratch output>`; no candidate was edited.

## Exact bytes reviewed

### Frozen contracts

| File read | SHA-256 |
|---|---|
| `data/d045-production/review-contract-f/art/plans/d045.json` | `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/balarama/character.json` | `8a02d67fd36a52f70d1a1a37cc6c91e65bfd87aa32105fa424d641bd6024d6c9` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/krishna-vraja-toddler/character.json` | `9e920c251c4a39e982842eab09f3821299ba056898ba733e62bc63b3562040ad` |
| `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `art/bible/characters/rohini/character.json` | `a0f4fd173964c8d54aac106880fa086f676c27ecc433b19b68426abe94c10ea1` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `art/bible/characters/vraja-boys/character.json` | `70cedf227d0ad65abc880fa42062a4aa38e8d2f9e08f21d14fee619e5914ee53` |
| `art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |

### Other checked source files

- `content/sources/d045/reference-map.json`: `03a2e454f3ac51d1d68a06bf61273088a8ec41fefca2021449c1b27ee43b67ac`
- `intake/D045/photo-captions.txt`: `0b380daa4805518712b9e3a41adc75bd7421381a847b9b50845cddf809e77831`
- `content/daskams/d045.json` was read for stanza mapping; it is in the authorized input worktree at `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/content/daskams/d045.json` (stanzas 7–12 begin at lines 77, 87, 97, 107, 117, and 127).

## Image-specific findings

Review time recorded for each exact candidate: **2026-11-26 02:11:14 UTC**. Each verdict is bound only to the SHA-256 shown.

### Stanza 7 — `candidate-v004.png` (v004)

- Candidate SHA-256: `00a989cc7aa73d46c72dfa9d02f43430dc27b944eba7616fb3adf6decb708ec3`
- Reference: `intake/D045/007.jpg`, SHA-256 `b21db4e8d63a6cb57495e68f4d430b5c57f4a0098acbb484dc1c726fd5216a99`
- **Anatomy:** Krishna and Balarama read as two distinct child bodies with connected, proportionate limbs. The woman and child in the doorway and the other women remain distinct; no fused or duplicated person is visible.
- **Faces:** Both boys and the visible women have coherent faces and expressions; no malformed or cut-off focal face.
- **Hands/feet:** The open relaxed hands visible on the brothers each resolve as five digits in the close view. Each of the four visible child feet resolves as five toes. The other gopika extremities are secondary and do not show a visible error.
- **Clothing and cast:** The gopikas wear modest village saris. Balarama's bare upper torso with plain pale lower cloth is ordinary traditional dress. Krishna wears simple yellow child cloth; no exposed skin beyond ordinary dress or sexualized framing.
- **Text/signature artifacts:** No readable text, signature, watermark, or overlay is visible, including the corners and ground.
- **Scene/reference fidelity:** Plan entry `art/plans/d045.json:349` requires the brothers traveling together while women pause at separate doorways. The candidate shows that scene. The disclosed deviation is present: photo 007 depicts Krishna with dancing women and lacks Balarama (`d045.json:379`); the candidate follows the stanza and plan rather than copying that scene. Chapter stanza 7 is at `content/daskams/d045.json:77`.
- **Character/deity contract:** Balarama remains warm brown (17×17 chest patch at `(670,450)`, median RGB `(181,110,69)`, R−B **112**); two gopika face patches at `(410,250)` and `(110,170)` have R−B **107** and **112**. These read as natural warm brown, not orange. Krishna is deep indigo (cheek patch `(910,435)`, RGB `(40,56,145)`, B−R **105**), with short curls and bare forehead. This matches the child and Balarama contracts (`characters/krishna-vraja-toddler/character.json:19,22-23`; `characters/balarama/character.json:19,22`).
- **Verdict: pass.**

### Stanza 8 — `candidate-v008.png` (v008)

- Candidate SHA-256: `704984a7051aa8e5d8ce279ac026c7810711ed1cf8127c1fb2792720a4bc408a`
- Reference: `intake/D045/008.jpg`, SHA-256 `a195b84465d555856a04e5a04014fc0ad9b382c3e313e92bfc4a2b8a0389952d`
- **Anatomy:** Krishna has one child body, two attached arms and legs, and a recognizable dancing pose. The women are separate people with coherent faces and bodies; no duplicate or fused person is visible.
- **Faces:** Krishna's face and the visible women's faces are coherent. No focal face is malformed or cut off.
- **Hands/feet:** The vessel-gripping hand and butter-holding hand are partly occluded by the cup and butter; the visible contours are connected and no malformed digit is apparent. Both visible child feet show five toes each in the enlarged crop.
- **Clothing and cast:** Krishna's muted yellow wrap and the women's modest village saris fit the cast. Jewelry is painted mural ornament; no crown, royal costume, exposed skin beyond ordinary dress, or sexualized framing is present.
- **Text/signature artifacts:** No readable text, signature, watermark, or overlay is visible.
- **Scene/reference fidelity:** Plan entry `art/plans/d045.json:400` requires butter offerings, singing and gentle dance, followed by ghee and fresh milk. The candidate shows offerings, a dance-like raised-foot posture, and Krishna drinking from a vessel. The disclosed reference limitation is present: photo 008 does not show singing, dancing, or fresh milk (`d045.json:429`), so I judged the candidate against the canonical scene. **The required singing is not visible:** Krishna's mouth is pressed to the vessel at approximately candidate pixels `x=760–935, y=220–400`, and no other visible cue shows him singing. The pose therefore communicates drinking, not singing. Chapter stanza 8 is at `content/daskams/d045.json:87`.
- **Character/deity contract:** Four 17×17 skin-only gopika patches at `(290,410)`, `(370,115)`, `(1300,115)`, and `(1370,350)` have R−B **111, 114, 114, and 114**. These appear natural warm brown, not orange. Krishna cheek patch `(850,350)` has RGB `(16,44,123)`, B−R **107**, consistent with deep indigo. The two-arm, bare-forehead toddler contract is satisfied (`characters/krishna-vraja-toddler/character.json:19,22-23`; gopika skin and dress at `characters/gopikas/character.json:19,22`).
- **Verdict: needs-fix.** Missing required visible singing is a scene-element defect; it is noticeable in the full frame because the child is drinking at the moment shown.

### Stanza 9 — `candidate-v005.png` (v005)

- Candidate SHA-256: `1f87de081ac241a0ec56f4fa7fd47c6afe264299c5009a1685e791e3c27aa449`
- Reference: `intake/D045/009.jpg`, SHA-256 `fb1515c1fa4b03087851fc6304babcf492b14fcf0675ce9ec919881714c52ba0`
- **Anatomy:** Krishna's two arms and legs connect naturally to one child body. The elevated pot, stool, and child do not fuse. The gopika is distinct and proportionate.
- **Faces:** Krishna and the gopika have coherent faces. No duplicate person, malformed face, or cut-off focal extremity is visible.
- **Hands/feet:** The hand holding butter has five visible digits. The hand reaching into the pot is occluded by the pot rim and curd; no malformed digit is visible. The near foot shows five toes; the foreshortened far foot shows three toe tips, with the remaining toes hidden by the angle, not malformed.
- **Clothing and cast:** Krishna's simple yellow cloth and the gopika's modest sari fit the scene; his bare upper torso is ordinary traditional dress. No palace costume or sexualized framing.
- **Text/signature artifacts:** The source photo's interface icons and lettering are not reproduced. Candidate corners, wall, floor, and pots show no text, signature, or watermark.
- **Scene/reference fidelity:** Plan entry `art/plans/d045.json:450` calls for a quiet curd-and-ghee theft without a Vamana flashback. The candidate clearly shows Krishna taking curd from a hanging pot while a woman watches. Photo 009's butter-theft content and interface overlays are disclosed (`d045.json:479`); its overlays are absent from the candidate. Chapter stanza 9 is at `content/daskams/d045.json:97`.
- **Character/deity contract:** Gopika cheek patch `(330,330)` has median RGB `(149,79,43)`, R−B **106**, naturally warm brown. Krishna cheek patch `(970,300)` has RGB `(1,37,130)`, B−R **129**, deep indigo. He has short curls, bare forehead, simple cloth, and ordinary two-arm anatomy, consistent with the child contract (`characters/krishna-vraja-toddler/character.json:19,22-23`; `characters/gopikas/character.json:19,22`).
- **Verdict: pass.**

### Stanza 10 — `candidate-v006.png` (v006)

- Candidate SHA-256: `264c643f9f1a092ce259a52fa1187b6ebe44fdc0321950a59d3bc2420e6898db`
- Reference: `intake/D045/010.jpg`, SHA-256 `79396736529313a5c695a4587f7c35822507f65f59c433f7d13b755e0299abac`
- **Anatomy:** Krishna has one body and two attached arms; the seated pose, bent leg, and contact with the pot remain readable. The three women are distinct and not duplicated or fused.
- **Faces:** Krishna and the gopikas have coherent, smiling faces. The frame-edge crop at the left contains pots and wall, not a cut-off face. No malformed face is visible.
- **Hands/feet:** Krishna's open hand resting on the pot shows five digits. The upper hand lifting ghee is partly obscured by the ghee strands; no wrong visible digit. One foot shows five toes; the other is hidden by the seated pose and pot. The women's smaller extremities show no visible error.
- **Clothing and cast:** Modest village saris and Krishna's simple yellow cloth; no exposed skin beyond ordinary traditional dress or sexualized framing. The gopikas visibly respond with delight.
- **Text/signature artifacts:** No readable text, signature, watermark, or overlay is visible in the water, ground, or corners.
- **Scene/reference fidelity:** Plan entry `art/plans/d045.json:500` requires joyful gopikas, curd/ghee theft, and a soft water motif. The candidate shows Krishna at the butter vessel, smiling women, and water. The reference's glossy rendering is disclosed and not copied (`d045.json:529`). Chapter stanza 10 is at `content/daskams/d045.json:107`.
- **Character/deity contract:** Skin-only gopika samples `(250,530)`, `(600,150)`, `(1200,220)` have RGB medians `(184,109,69)`, `(183,109,67)`, `(186,115,74)`, R−B **115, 116, 112**; they look warm brown, not orange. Krishna cheek `(850,340)` has RGB `(34,79,162)`, B−R **128**, deep indigo. Child form and modest village cast fit the contracts (`characters/krishna-vraja-toddler/character.json:19,22-23`; `characters/gopikas/character.json:19,22`).
- **Verdict: pass.**

### Stanza 11 — `candidate-v014.png` (v014)

- Candidate SHA-256: `efffc90b40fa25e759b4868a6f37b7512af37f61f01e7b7c9b53dc10666a07f4`
- Reference: `intake/D045/011.jpg`, SHA-256 `74d15451dd5860a6022dc950e265f7d7ff3813663463c0c87b2e52501783125f`
- **Anatomy:** Krishna remains one child body with two arms and two legs; the cosmic setting does not create a second body or extra limbs. Both parents are distinct, with natural connected anatomy. No duplicated people or malformed face is visible.
- **Faces:** The child's face is coherent, with a bare forehead; Yashoda and Nandagopan have recognizable, readable faces. No focal face is cut off.
- **Hands/feet:** Both child's open hands under the moon show five fingers each in the close view. Both visible feet show five toes each. The parents' hands are naturally posed; no visible hand or foot defect.
- **Clothing and cast:** Yashoda wears a veiled cream/rose sari; Nandagopan has a cream headcloth and moustache with pale clothing. Krishna's yellow cloth and small ornaments remain age-appropriate. No sexualized framing or nontraditional exposure.
- **Text/signature artifacts:** The source watermark is absent. No readable text, signature, or watermark appears elsewhere.
- **Scene/reference fidelity:** Plan entry `art/plans/d045.json:550` calls for the branch, both parents, moon in Krishna's hands, and restrained cosmic radiance around the same child. All are visible. The disclosed reference deviation is present: photo 011 supplies a moon/cosmic symbol but omits the parents and branch (`d045.json:580`); the candidate follows the canonical scene. Chapter stanza 11 is at `content/daskams/d045.json:117`.
- **Character/deity contract:** Yashoda cheek patch `(320,350)` median RGB `(177,102,65)`, R−B **112**; Nandagopan `(1420,300)` RGB `(176,101,61)`, R−B **115**. Both read as natural warm brown. Krishna cheek `(835,330)` RGB `(85,89,148)`, B−R **63**, deep indigo. The child's single bare-forehead form and parents' clothing/identity cues match the contracts (`characters/krishna-vraja-toddler/character.json:19,22-23`; `characters/yashoda/character.json:18,21`; `characters/nandagopan/character.json:19,22`).
- **Verdict: pass.**

### Stanza 12 — `candidate-v005.png` (v005)

- Candidate SHA-256: `1ef90c9aa1a7ea8f83a1ed7dc8ad308d83a298dab89ade2da7cbdd7cc6a475fd`
- Reference: `intake/D045/012.jpg`, SHA-256 `ffc5f0ffb06cba90afa15a270db5c82c87ba483ba665bbe628b47bfea887b207`
- **Anatomy:** Nandagopan cradles one physical child; both have connected limbs and natural proportions. Krishna is not duplicated in the cosmic surroundings. No fused or malformed figure is visible.
- **Faces:** Nandagopan's moustached face and the child's face are coherent. No cut-off focal face.
- **Hands/feet:** Nanda's two visible open hands each show five digits in the close crop. Krishna's visible foot shows five toes; the far-side foot is partly obscured by Nanda's arm and shows no visible defect. Nanda's feet are covered by his seated drape, so their digits are not resolvable.
- **Clothing and cast:** Nandagopan's cream headcloth, olive upper cloth, and pale dhoti fit the cowherd palette; his bare upper torso is ordinary traditional dress. Krishna wears simple yellow cloth. The prominent painted earring, neck ornament, and upper-arm cuff are visible but read as ordinary mural iconography, not palace regalia. No sexualized framing.
- **Text/signature artifacts:** The source watermark is absent; no text or signature is visible in the stars, ocean, or corners.
- **Scene/reference fidelity:** Plan entry `art/plans/d045.json:601` calls for Nanda immersed in the cosmic-ocean vision, resolving to the familiar child form, with Nanda present and safe. The candidate shows the father holding the single child amid ocean and cosmic surroundings. The disclosed deviation is present: photo 012 is generic cosmic-Krishna mood and omits father/ocean/return-to-child imagery, with a watermark (`d045.json:630`); the candidate follows the plan and does not reproduce the watermark. Chapter stanza 12 is at `content/daskams/d045.json:127`.
- **Character/deity contract:** Nandagopan cheek patch `(700,300)` median RGB `(160,98,54)`, R−B **106**, naturally warm brown. Krishna cheek `(945,390)` RGB `(12,43,82)`, B−R **70**, deep indigo. One two-armed child with curls and bare forehead; Nanda's clothing retains the simple cream/olive palette (`characters/krishna-vraja-toddler/character.json:19,22-23`; `characters/nandagopan/character.json:19,22`).
- **Verdict: pass.**

## Recommendation and approval state

Keep all six candidates unapproved. Regenerate stanza 8 with a visible singing cue/action while preserving the planned gentle dance, butter offering, ghee, and fresh milk; then obtain a new exact-checksum review for that version. The other five reviewed checksums pass this visual gate. No finding here changes or grants art approval.

I inventoried the report and review surface for captain decisions: **empty**. The existing pending captain art approval is the standing state and is not a decision raised by this review.
