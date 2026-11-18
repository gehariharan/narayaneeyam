# D047 stanza 8 landscape candidate review

## Scope and method

I independently reviewed the single selected image, stanza 8 landscape v002, against the frozen final plan, series bible, relevant character contracts, stanza 8 text, reference map, caption, and numbered reference photo. I inspected the complete 1672×941 PNG at native resolution, plus enlarged scratch crops for the left witness group, Krishna’s torso/rope/feet/hands, Yashoda’s face/hands, and the full frame’s corners and ground. Crops were written only under `.review-scratch/` in this worktree; candidate and reference inputs were not modified. No artwork is approved by this review.

The plan maps stanza 8 to `intake/D047/008.jpg`; the frozen reference map confirms that mapping and describes Krishna tied beside the mortar with women watching (`art/plans/d047.json:419–426`; `content/sources/d047/reference-map.json:83–90`). The caption says exhausted Yashoda finally binds Krishna as the gopikas watch (`intake/D047/photo-captions.txt:37–40`). The source stanza describes the amazed companions watching and Krishna permitting the bond through compassion (`content/daskams/d047.json:87–90`). The candidate depicts that moment.

## Exact bytes reviewed

All expected hashes passed `sha256sum -c` before inspection. The candidate was rechecked after inspection and still matched its pinned digest.

| File | Actual SHA-256 |
|---|---|
| `artifacts/d047/s008/landscape/candidate-v002.png` | `3616034695850f7ffbb1f5c9e78fe6c0980430d428f2c310420764c798a14cfc` |
| Frozen final `art/plans/d047.json` | `9d04f8ccd7faf663e19700762ef6cd6ebaa5f2fc50e5d978e28feecabe79016d` |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Frozen Krishna contract | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Frozen Yashoda contract | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| Frozen gopikas contract | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Frozen monkeys contract | `902a357279ad316974426d4de863014fd037a750135b9385f654fdf771ea4481` |
| Frozen devas contract | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `content/sources/d047/reference-map.json` | `e2b351145c7e03746da82b00c73f3bfa6131345df49edc6a76092e7fd69bf5e2` |
| `intake/D047/photo-captions.txt` | `b5c8bc79d2642672ad20fd7d1fedbffe3f2852480105e29bdddb1def1801a4ba` |
| Reference `intake/D047/008.jpg` | `e28585af64f7739378082a5fae7defc0d451a1f63da0b6ff99735f5f3ca77b93` |

## Candidate findings

**Stanza/version:** 8, landscape v002, native PNG 1672×941.  
**Review time:** 2026-11-18 05:21:26 UTC.  
**Verdict:** **PASS** for the exact candidate checksum above. This is independent visual review only; it does not confer approval.

- **Anatomy:** Krishna has one head, two attached arms, and two attached legs; Yashoda and each of the three background women read as distinct, naturally proportioned people. No fused or duplicated body, detached limb, or malformed face is visible. At the candidate’s native size, Krishna’s small hands do not resolve every digit reliably; the enlarged crop shows no clear extra or malformed digit. The apparent interruptions in Yashoda’s fingers are consistent with her downward, palm-down pose; no clear missing-digit defect is visible.
- **Faces, hands, and feet:** Faces are legible and distinct. Krishna’s two feet are fully inside frame and each visibly has five toes in the enlarged crop (`.review-scratch/krishna-feet-close.png`). His hands remain attached at his sides. Yashoda’s two resting hands are visible and connected; the digits are naturally separated with thumbs turned away/obscured by the pose. Gopikas’ hands are held together in a prayerful watching gesture; no malformed or extra digit is apparent at their depicted size. No face or key extremity is cut off.
- **Clothing and cast:** Krishna’s yellow dhoti is modest; the bare upper torso is ordinary traditional dress. Yashoda’s cream sari, muted rose blouse and restrained jewelry fit her contract. The women wear simple muted village saris and modest ornaments. No sexualized framing or exposed skin beyond ordinary dress is present.
- **Text/signature artifacts:** No readable text, caption, signature, logo, or watermark is visible. I checked the corners, patterned wall, floor and ground details in the full-frame and detail views; the decorative motifs remain non-readable mural ornament.
- **Scene and caption fidelity:** The crouched, visibly perspiring Yashoda looks toward Krishna; the cord runs gently around Krishna’s waist and continues around the mortar, showing the binding has succeeded. The scene reads as the compassionate binding described by the plan and caption. The intake photo is consistent in subject and staging. The three gopika witnesses are all visible in the left background: (1) upper/rear woman in olive, approximately x=55–222, y=55–220; (2) middle woman in rose, approximately x=165–355, y=145–445; (3) lower/front woman in olive, approximately x=45–230, y=210–520. The enlarged crop `.review-scratch/left-witnesses.png` confirms three separate faces and bodies, not one. The plan’s distinct-witness requirement is met.
- **Character/deity contract and skin:** Krishna has deep matte indigo-blue skin, plain forehead, a single low band and one upright peacock feather, ordinary child anatomy, and no extra limbs or duplicate Krishna. His measured 15×15 torso patch at (1070,404) has median RGB (43,69,144), blue-minus-red 101, meeting the plan’s blue threshold of 40. Yashoda and all three gopikas read as natural warm brown, not orange. Median RGB and red-minus-blue for 15×15 skin-only patches: Yashoda cheek at (750,290), (170,96,59), **111**; Yashoda forearm at (465,552), (178,95,60), **118**; rear gopika cheek at (172,130), (176,96,59), **117**; middle gopika cheek at (294,196), (146,87,53), **93**; front gopika cheek at (171,260), (175,100,62), **113**. These measurements are below the plan’s approximate red-minus-blue limit of 120 and look brown in the full image.

## Evidence and reproducibility

- The pin list was generated programmatically into `.review-scratch/sha256.expected`; `sha256sum -c .review-scratch/sha256.expected` returned `OK` for the candidate, reference, plan, all five listed character files, series bible, reference map and captions. Final `sha256sum` recheck returned the same candidate digest shown above.
- `identify -format '%wx%h %m\n' <candidate>` returned `1672x941 PNG`.
- Full-image inspection used the pinned candidate and reference directly. Enlargements were made with read-only ImageMagick `magick <input> -crop … +repage -resize … <absolute .review-scratch output>` calls. Inspected crops: `left-witnesses.png`, `krishna-rope-feet.png`, `krishna-hands-close.png`, `krishna-feet-close.png`, `yashoda-face-hands.png`, `yashoda-face-close.png`, `yashoda-hands-close.png`, and `corners-ground.png`.
- Skin medians were calculated from ImageMagick text pixel output for the stated source-coordinate 15×15 crops, using per-channel medians and red minus blue; no input image was edited.

## Recommendation and captain-call inventory

Keep this exact v002 landscape candidate eligible for the unapproved comparison set; no image correction is indicated by this review. The pending human art approval remains pending and is not a decision raised by this review. I attest that this review raises **no captain call** and its captain-call inventory is empty.
