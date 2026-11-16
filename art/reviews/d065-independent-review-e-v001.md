# D065 S002 landscape candidate review

## Scope and method

I independently reviewed one image only: stanza 2, landscape, version v002. The review is bound to the exact candidate checksum below and to the byte-frozen final plan and character/series contracts listed below. Review time: **2026-11-16T04:00:45Z**.

I verified the candidate and contract hashes with `sha256sum`, copied the candidate into this task worktree's scratch directory, confirmed its native size as 1672 × 941 with `magick identify`, viewed the full native image, and made enlarged crops from that copy with ImageMagick `magick -crop ... -filter point -resize ...`. Focus crops covered all three gopika faces and hands, Krishna's head/torso/flute grip and feet, the gopikas' clothing, and top-left and bottom-right image edges. The source candidate, intake, frozen contracts, and approvals were not changed. The only reference photo used was the plan-mapped `intake/D065/002.jpg`; its caption and stanza mapping were checked against `photo-captions.txt` and `content/daskams/d065.json`.

## Contract file SHA-256 values

- Final plan, `data/d065-production/review-contract-e/art/plans/d065.json`: `9a66d787a112eec042b41d5b86f7f682500ca9623a7e3dc629e8a47fb7c56860`
- Series bible, `data/d065-production/review-contract-e/art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Krishna youth character contract: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- Gopikas character contract: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`
- Bhattathiri character contract: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`

All actual values matched the expected hashes before inspection.

## Candidate and findings

- **Stanza:** 2
- **Version/orientation:** v002 landscape
- **Candidate:** `artifacts/d065/s002/landscape/candidate-v002.png`
- **Verified SHA-256:** `71b3d4e52a6c069553cc93c77ab7ffc5391a884594e2a91aad79966045a3df12`
- **Verdict:** **pass — disclosed deviation present**

**Anatomy:** The full frame shows one seated Krishna across the river and three separate seated women in the foreground. Enlarged crops show attached arms and coherent seated postures; I saw no extra, missing, fused, or detached limb, malformed body, or duplicate person. Krishna's two arms connect naturally through the flute-playing pose; his two feet are visible and attached below the folded legs (approximately x=1280–1515, y=390–475). The women’s lower bodies continue beneath their saris to the lower frame edge; no face or key extremity is cut off.

**Faces:** The women at approximately (75–355, 165–430), (390–650, 330–560), and (690–960, 270–500) have distinct, readable profile faces and different hair arrangements; enlarged native-pixel crops show no malformed facial features. Krishna has one small youthful face at approximately (1365–1440, 185–285). His face reads as youthful rather than infant-like. The plan explicitly discloses that Krishna is too small for confident forehead and low-band confirmation. In the crop, his forehead appears plain and a low band and one upright feather are visible, but I cannot certify the absence of a tiny mark or the band detail at this scale; nothing visible contradicts the contract. This is the disclosed limitation, not a newly found defect.

**Hands and feet:** Focus crops included the gopika prayer hands at about (225–355, 375–555), the center woman's cheek-support and lap hands at about (440–670, 425–835), the right woman's chest and open hands at about (830–1215, 510–700), and Krishna's flute grip at about (1290–1435, 245–365). The right woman's open hand has four separated finger contours and a distinct thumb; the other shown hands have separated digit contours, with some fingers overlapped by the prayer/cheek-support poses. I do not see extra, fused, or detached digits. The overlap in the joined and cheek-support poses prevents independent counting of every digit on each occluded hand, but no countable visible error is apparent. Krishna's flute grip is small but shows a connected hand around the flute without an obvious extra digit. His two feet are visible; toe detail is small and stylized, with no visible malformed or detached toe. The candidate status' disclosed Krishna-size limitation applies to fine confirmation at this scale.

**Clothing and cast:** All three women wear opaque, covered saris and blouses; their seated poses are devotional and non-sexualized. Krishna wears a yellow dhoti and muted red-orange shawl; his exposed upper torso is ordinary traditional cowherd depiction, not sexualized. The women's necklaces, earrings, hair ornament, and bangles are visible as mural ornament; none reads as a costume or exposure defect. No Bhattathiri appears, consistent with the stanza 2 plan. The left woman has a long braid and maroon clothing; the center woman has a low bun and muted olive clothing; the right woman is cream-clad with gathered hair. That last figure does not clearly display the series' side-braided muted-olive continuity cue. It is a visible continuity observation, not a missing figure or explicit structural prohibition in this stanza's scene brief, and does not meet this review gate's needs-fix threshold.

**Text/signature artifacts:** I inspected the full image and enlarged crops of the top-left and bottom-right edges, foliage, ground, and water. No readable text, notation, signature, logo, watermark, or border artifact is visible. The curved cream strokes above the river read as the plan's musical rise/fall motif, not letters or notation.

**Scene and caption fidelity:** The candidate shows Krishna playing the flute across the Yamuna, three gopikas facing toward him, and curved sound forms. This matches the final plan's stanza 2 scene brief (single distant Krishna, distinct gopikas turning to the sound, non-letter sound motif; plan lines 97–110) and the stanza 2 caption's account of the flute's ascending/descending notes reaching the gopikas from far (caption lines 6–9). The mapped reference photo shows Krishna with a flute; the plan explicitly limits that photo to story/cast context and makes the stanza/caption control the scene (plan lines 116–122). The river setting and foreground listeners are consistent with that guidance. No required scene element is missing.

**Character/deity contract:** Krishna is depicted once, blue-skinned, youthful, two-armed, with dark curly hair, yellow dhoti, red-orange shawl, one feather, and an apparently low band; I see no tall tiered crown, extra arm, or infant proportions. The forehead appears plain, with the confirmation limit disclosed in the plan as stated above. Gopikas are distinct adult women with natural proportions, simple village clothing, and modest jewelry; I see no fused or duplicated woman. The left maroon braid and center low bun are visible; the right woman's cream sari and gathered bun do not clearly match the side-braided olive continuity cue, noted above without treating it as a disqualifying defect. The Bhattathiri contract is not applicable because the stanza plan excludes him.

## Evidence references

- Final plan stanza 2 requirements, photo mapping, and disclosed status: frozen `art/plans/d065.json` lines 97–133; particularly 97–112 and 116–132.
- Stanza 2 content and caption source mapping: `content/daskams/d065.json` lines 33–42.
- Reference caption for photo 002: `intake/D065/photo-captions.txt` lines 6–9; mapped source image `intake/D065/002.jpg`.
- Krishna contract: frozen `krishna-vrindavan-youth/character.json` lines 6–14 and 54–63.
- Gopikas contract: frozen `gopikas/character.json` lines 14–28.
- Series style and no-text/no-hand-artifact requirements: frozen `series.json` lines 4–24 and 51–64.

Verification commands run included `sha256sum` over the candidate and all five frozen contract files, `magick identify` on the copied native image, and `magick ... -crop ... -filter point -resize ...` to generate focused scratch crops. The plan stanza and status, content stanza, captions, and contracts were read directly from the paths cited above. Visual findings above are from the actual image and crops, not prior report text or software tests.

This verdict applies only to the exact candidate SHA-256 above. It is not art approval and does not change the pending captain art approval.
