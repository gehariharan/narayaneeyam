# D067 landscape independent exact-checksum visual review: S006–S010

## Scope and method

I independently reviewed the five selected landscape candidates against the corresponding mapped source photo, caption, final scene-plan entry, and D067 character contracts. I opened every full candidate and mapped reference photo at original resolution, then made enlarged focus crops of faces/foreheads, hands, bodies, and visible feet using ImageMagick `magick ... -crop ... -resize 200%` (and 500% for Krishna foreheads). I inspected the images visually with `view_image`; no contact sheet or automated score was used. Review time for each candidate: **2026-11-13 22:05:13 UTC**.

Checksum preflight used `sha256sum` on all five candidates, the final plan, and the two Krishna contract files. All assigned candidate hashes matched. The final plan hash also matches its expected hash. D067's gopika and Radha cues are in the composite `d067-rasa.json` character bible.

### Contract hashes actually read

- Final plan `/home/gehariharan/firstmate-narayaneeyam-mate/data/d067-final-plan-v2/d067.json`: `c26b9d5753aa41b79842ec8fe33735f5d32af1b54d7729548fd1acbe162d7f5c`
- Shared Krishna contract `art/bible/characters/krishna-vrindavan-youth/character.json`: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- D067 Krishna contract `art/bible/characters/d067-krishna-youth/character.json`: `6f4194313a1a8354df14013d9d380c45ef605b8d66b208d1b1ab9bd61d54ea4c`
- D067 composite gopika/Radha character contract `art/bible/characters/d067-rasa.json`: `b9c56f77258d88bec7a3d9908f6aee385c4acaec737660a62f1887ce002c2d3d`

The controlling Krishna details are a plain smooth forehead, deep matte blue youthful skin, natural two-arm/two-leg anatomy, and one simple low gold band with one upright peacock feather. The gopika/Radha details require distinct adult women with natural anatomy and modest, fully opaque clothing. Final scene-plan stanza entries and statuses are at `d067.json:282–490`; stanza text/commentary is at `content/daskams/d067.json:67–113`; mapped captions are `photo-captions.txt:26–50`; accepted photo mapping is `accepted-readiness.json` under `per_stanza_references`.

## Candidate findings

### S006 — `candidate-v002.png` — **needs-fix**

- Path: `artifacts/d067/s006/landscape/candidate-v002.png`
- SHA-256: `f410fa443fc956108c7db2474501fa3d2b0ee984a7dae3d1dee8f8ede24b2133`
- Reference: `intake/D067/006.jpg`, SHA-256 `8e12951ef5a129c382587821a0e1d35baf7bbb6b5286f6293db91318e46b89d5`; caption `photo-captions.txt:26–30`.
- Plan: imagined vision at `d067.json:282–320`; stanza text/commentary at `content/daskams/d067.json:67–75`.
- **Anatomy:** The adult women are distinct and seated in separate silhouettes; no duplicate or fused person, detached limb, or extra limb seen. The central speaker's raised palm shows a thumb and four fingers. Other visible hands are folded or resting; seated skirts conceal most feet, so hidden toes were not inferred.
- **Faces:** The women have coherent, separate adult faces with grief/attention expressions; no malformed face observed. Krishna's small imagined face is intact.
- **Hands/feet:** The visible raised palm has five digits. Prayer and cheek-resting hands have connected wrists and plausible finger groupings; no extra or missing digit discernible. Most feet are under skirts or outside view.
- **Clothing/adult cast:** The women wear opaque blouses and draped garments covering their torsos and legs. No exposed body or sexualized framing; all depicted women read as adults.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found, including on the dark grass, water, and corners.
- **Scene/caption fidelity:** One woman addresses her companions while a single Krishna bust appears inside a soft cream thought aura. The thought image is clearly separate from the physical group and the other women look distressed, matching the caption. However, the ornate aura and bust occupy a large, central panel (roughly one-third of the frame height), so the vision is not the subtle, small inset required by the plan. The Yamuna setting is present.
- **Krishna continuity:** I enlarged the forehead. It is plain, with no pale mark. He has deep blue skin, dark curls, a low gold band, and one upright peacock feather. The thought-image is the only Krishna depiction and is not a second physical person.

### S007 — `candidate-v001.png` — **needs-fix**

- Path: `artifacts/d067/s007/landscape/candidate-v001.png`
- SHA-256: `5dccb1e8cad9424c68b27c1fabc97d04b08bb8e0a79c6fbff821d91a0e85cd93`
- Reference: `intake/D067/007.jpg`, SHA-256 `22a6267ae124f7e5c4c7c218c2886876871b8922d9ea4787e00fd5ae9c5c7dfc`; caption `photo-captions.txt:31–35`.
- Plan: imitation and Radha found at `d067.json:324–363`; stanza text/commentary at `content/daskams/d067.json:77–85`.
- **Anatomy:** The women remain separate, with connected limbs and no duplicate or fused bodies. The flute-playing seated woman has two arms, each leading to a hand at the flute; raised mime hands are separate and attached. No malformed face or extra limb observed. Some toes are covered by hems; the exposed feet appear normally formed.
- **Faces:** Faces are distinct and adult. The seated woman at the right is visibly sorrowful; the group looks toward her.
- **Hands/feet:** The two raised mime palms each show a thumb and four fingers. The flute grip is partly overlapped by the flute and fingers, but no extra/missing digit artifact is visible. Radha's hands rest near her knees; visible toes at hems are not distorted.
- **Clothing/adult cast:** **A standing gopika in the pale sari near the center has an exposed abdomen with a visible navel between the blouse and lower wrap.** This violates the plan's explicit fully-clothed requirement, so the image needs correction. The remaining women are adult and clothed in opaque village garments.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found, including in the grass and corners.
- **Scene/caption fidelity:** A seated woman mimics Krishna by playing a flute while the group turns to the sorrowful Radha set apart on the right. Krishna is absent, as required; the riverbank and group-search context echo the mapped reference and caption.
- **Krishna continuity:** Krishna is absent as the plan requires, so there is no Krishna forehead to inspect. No literal second Krishna appears.

### S008 — `candidate-v003.png` — **pass**

- Path: `artifacts/d067/s008/landscape/candidate-v003.png`
- SHA-256: `f0a9904831ac7a65c46832811bcc95cecf09ee6ab4bbb8eb3553da158b04e01d`
- Reference: `intake/D067/008.jpg`, SHA-256 `b5a1cf96a159119cc1581c6165be54a5aee395106fe5069ead96493b9439321d`; caption `photo-captions.txt:36–40`.
- Plan: late search and lament at `d067.json:367–406`; stanza text/commentary at `content/daskams/d067.json:87–95`.
- **Anatomy:** The five seated adult women form separate figures; no fused bodies, duplicate people, or extra limbs observed. No malformed face seen. Visible arms connect naturally to hands; skirts cover most legs and feet.
- **Faces:** Five separate visible faces have coherent features and singing/lamenting expressions. No malformed or duplicated face observed.
- **Hands/feet:** Open gesturing palms show a thumb and four fingers; prayer hands are distinct, with no visible fused or extra fingers. Most toes are hidden by long skirts; visible foot edges show no clear defect.
- **Clothing/adult cast:** All women are adult and wear opaque blouses and full draped garments; no exposed torso or sexualized framing observed.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found in the sky, grass, river, or corners.
- **Scene/caption fidelity:** The group sits together at the Yamuna as the sun drops at the horizon. The deepening sunset and riverbank make the late-evening return clear; the women sing and lament. Krishna is absent as planned.
- **Krishna continuity:** Krishna is absent as required; no Krishna forehead is present to inspect.

### S009 — `candidate-v003.png` — **pass**

- Path: `artifacts/d067/s009/landscape/candidate-v003.png`
- SHA-256: `4b105c6ba593e9693930a50b8cfc223039696b245e380b885a1fddda51cb1ce8`
- Reference: `intake/D067/009.jpg`, SHA-256 `d2d487041b4fc3470855de9e75f5eea4590060071159bae135d51ad05e076c8d`; caption `photo-captions.txt:41–45`.
- Plan: Krishna reappears at `d067.json:409–448`; stanza text/commentary at `content/daskams/d067.json:97–105`.
- **Anatomy:** One physical Krishna stands among a distinct group of adult women. His two arms are attached and proportionate; the raised palm and lowered hand each show a thumb and four fingers. His forward foot shows five toes; the far foot is side-on, with toes partly occluded by angle. No extra limbs, duplicates, or fused figures observed.
- **Faces:** Krishna's youthful face and the women's separate, relieved faces are coherent; no malformed or accidental duplicate face observed.
- **Hands/feet:** Krishna's visible hand digits are countable as five each. Women's prayer/open hands show distinct digit groupings without visible fusions. Long skirts obscure most women's feet; no visible foot artifact found.
- **Clothing/adult cast:** The women read as adults in opaque blouses and full skirts/drapes; no exposed bodies or sexualized contact observed.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found, including on the textured grass and lower corners.
- **Scene/caption fidelity:** A single smiling Krishna has reappeared in an open moonlit Yamuna clearing; the women turn toward him in surprise and relief. This follows the plan and mapped photo/caption subject.
- **Krishna continuity:** The enlarged forehead is plain; there is no pale mark. Krishna has matte deep-blue skin, a single low gold band, and one upright peacock feather. His proportions and two-arm depiction are consistent with the character contract.

### S010 — `candidate-v002.png` — **pass with disclosed continuity deviation**

- Path: `artifacts/d067/s010/landscape/candidate-v002.png`
- SHA-256: `a895b2d1eba69489b939cce48768648945f3b465444005cbd159708e84de5f41`
- Reference: `intake/D067/010.jpg`, SHA-256 `f09e60f36862affb3ad6456b0002fea88262a7c23811bb836b0e71c64fc28446`; caption `photo-captions.txt:46–50`.
- Plan: joyful reunion at `d067.json:451–490`; stanza text/commentary at `content/daskams/d067.json:107–115`. Its `candidate_status` at `d067.json:481` discloses the forehead mark and raised crown ornament.
- **Anatomy:** The single Krishna has two attached arms and legs; one hand rests on his chest and the other meets a gopika's reaching hand. Women remain distinct, with connected limbs; no duplicate person, fused body, or extra limb observed. Visible Krishna feet each show five toes. Some gopika feet/toes are covered by hems.
- **Faces:** Krishna and the women have coherent, separate faces. The women show joyful tears and relief; no malformed or duplicated face observed.
- **Hands/feet:** The contact between Krishna and the nearest gopika is a gentle hand/forearm touch. Visible palms have separated finger outlines, with no extra digit artifact. Other prayer hands are distinct. Partly covered gopika toes were not assigned a count.
- **Clothing/adult cast:** All visible women read as adults in opaque blouses and full garments; no exposed torso or sexualized framing observed.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark found in the mural texture, grass, or corners.
- **Scene/caption fidelity:** The women gather around the smiling, returned Krishna in joyful relief, matching the reunion plan and reference subject. Contact is gentle.
- **Krishna continuity:** The enlarged forehead shows a **pale U-shaped forehead mark**. The headwear also has a **raised, ornate gold ornament/crown element**, beyond the simple low band contract. Both deviations are present and are the narrow deviations disclosed in `candidate_status`; no other continuity defect was observed. On the remaining reviewed areas the image passes.

## Recommendation and limits

S008, S009, and S010 pass this exact-checksum review; S006 needs-fix because its vision is oversized relative to the plan, and S007 needs-fix because the pale-sari gopika's abdomen/navel is exposed. These findings apply only to the exact candidate checksums above. They are independent visual-review findings, not captain art approval. The final plan itself states captain art approval remains pending for selected comparisons (for example S006 at `d067.json:312`, S007 at `:355`, S008 at `:397`, S009 at `:439`, and S010 at `:481`). That outstanding captain call must be included in the home-owned completion inventory before the review can be declared fully complete.

## Commands and evidence trail

- `sha256sum <five assigned candidate paths> <final plan path> <shared Krishna contract path> <D067 Krishna contract path>` — every candidate hash matched its assigned value; plan matched `c26b9d5753aa41b79842ec8fe33735f5d32af1b54d7729548fd1acbe162d7f5c`; shared contract matched `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`.
- `sha256sum art/bible/characters/d067-rasa.json` — `b9c56f77258d88bec7a3d9908f6aee385c4acaec737660a62f1887ce002c2d3d`.
- Read-only source commands: `cat` final plan, character files, `series.json`, `content/daskams/d067.json`, `accepted-readiness.json`, and `photo-captions.txt`; `python` extracted plan stanzas 6–10 and accepted reference mappings; `rg -n`/`sed -n` located the cited plan, stanza, and caption lines.
- Visual inspection: `file` confirmed the first candidate is a 1672×941 PNG. All five full candidates and `intake/D067/006.jpg`–`010.jpg` were opened at original resolution. Focus crops were created in the temporary `.review-scratch-d067/` directory with ImageMagick `magick -crop` and inspected enlarged, including 5× Krishna forehead crops for S006, S009, and S010. The scratch crops were removed after review; no candidate, master, plan, content, or approval file was changed.
