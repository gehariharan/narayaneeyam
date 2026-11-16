# D065 S006 landscape exact-checksum visual review

Reviewed at **2026-11-16T03:59:40Z**. This is an independent review of one image at its native 1672×941 resolution and enlarged crops from a scratch copy. The producer candidate remained read-only. I did not read prior D065 review records or producer notes. The review applies only to the candidate checksum below.

## Contract bytes inspected

All actual SHA-256 values match the expected values in the review brief:

| File | SHA-256 |
|---|---|
| Frozen final plan `data/d065-production/review-contract-f/art/plans/d065.json` | `9a66d787a112eec042b41d5b86f7f682500ca9623a7e3dc629e8a47fb7c56860` |
| Frozen series bible `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Krishna character contract `.../characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| Gopikas character contract `.../characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Bhattathiri character contract `.../characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

The plan maps S006 to `intake/D065/006.jpg` and says that photo is context only; the canonical plan controls any difference (plan lines 321–326). The canonical stanza’s caption says the gopika forgot her drape (chapter content lines 101–106; caption file lines 26–29), while the final scene brief specifically requires full coverage (plan lines 304–308, 313–315). I judged against that final scene brief.

## Candidate and findings

- **Dasakam/stanza:** D065 S006
- **Version/orientation:** v001 landscape
- **Path:** `artifacts/d065/s006/landscape/candidate-v001.png` in the producer worktree
- **Verified SHA-256:** `28818ff58b3d6f3db8295c3575c33e1d91d0d9c378f9554cd2a70873450bb649`
- **Native dimensions:** 1672×941 (confirmed with `file`; also recorded in plan lines 327–337)
- **Verdict:** **pass — disclosed deviation present**

**Anatomy:** The full image and the figure crop show one adult woman with connected arms and legs and plausible proportions. No fused or duplicated person, detached limb, or conspicuously elongated limb is visible. The complete figure remains inside the frame.

**Faces:** The single right-facing profile at approximately x=620–745, y=20–170 has a coherent eye, nose, mouth, ear, and jaw at native scale and in an enlarged crop. No malformed or cut-off face is visible.

**Hands/feet:** Joined prayer hands at approximately x=690–785, y=185–335 are attached to the forearms. The fingers overlap in the prayer pose; enlarged inspection shows separated finger strokes and no extra, fused, or detached digit. The forward foot around x=700–835, y=820–875 has a simplified toe line (two short interior marks); toes are not individually countable with confidence, but no plainly malformed structure or clearly wrong count is visible at normal image size. The rear foot around x=290–415, y=835–930 has visible separated toe strokes. Both feet are intact and fully inside the frame.

**Clothing and cast:** One gopika wears an opaque short-sleeved blouse and a securely wrapped, full-length muted olive sari; no exposed torso, open blouse, loose drape, or sexualized framing is visible. Her earrings, necklace, bangles, and hair flowers are noticeable but read as ordinary mural adornment, not palace finery or heavy jewelry. No other person is present. Bhattathiri is correctly absent for this stanza.

**Text/signature artifacts:** I inspected the full frame and enlarged upper and lower corner crops, including foliage, ground, and the water area. No readable or decorative text, signature, logo, or watermark is visible. The fine mottling reads as painted surface texture.

**Scene and caption fidelity:** The image depicts a fully clothed gopika moving through a forest path, looking and praying toward the right, with a small ritual pot nearby on a rock. This matches the final plan’s approach/pot action (lines 304–308) and its instruction to prioritize the canonical plan over the photo (line 315); the supplied photo instead shows a seated woman and is only a context reference (line 326). **Krishna is absent.** The final plan’s candidate status explicitly discloses this omission (line 335), so it is recorded as present and treated as the disclosed deviation for this verdict. There is no other visible missing required element.

**Character/deity contract:** The visible woman follows the gopika contract’s ordinary adult proportions, village sari, and modest jewelry (gopikas contract lines 16–28). No Krishna appears, so his visual identity and anatomy cannot be assessed; the absence is the disclosed plan deviation above. The image uses matte mural contours and earthy colors consistent with the series style (series bible lines 5–6, 20–24), with no separate outer border.

## Inspection evidence

I verified bytes with `sha256sum` for the candidate and all five frozen contract files before inspection; the values are listed above. I checked native dimensions with `file`. I copied the candidate and reference photo 006 into this task’s scratch directory, viewed the full candidate and reference, and made enlarged scratch crops with ImageMagick `magick -crop` for the face, joined hands, both feet, full figure, and corners. The forward-foot inspection included a 6× enlargement and a native-size crop. The producer image, intake image, contracts, and approval metadata were not modified. Temporary scratch copies and crops were deleted after review.

## Recommendation and inventory

Keep this image’s independent review attached only to this exact checksum. The disclosed Krishna omission remains plainly recorded; this report does not grant human art approval or update an approval manifest. I found no unresolved question for the captain in this review, so the captain-call inventory is empty.
