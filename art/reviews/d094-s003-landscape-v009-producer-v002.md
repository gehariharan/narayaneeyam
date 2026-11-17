# Dasakam 94 (D094) S003 v009 producer reinspection v002

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-17T02:47:27Z
- Method: native-resolution full-frame inspection against mapped numbered reference and final plan; focused 2x face/torso, folded-hands, and lower-body/feet crops; ImageMagick skin-only 11x11 medians; exact bytes unchanged
- Candidate: `artifacts/d094/s003/landscape/candidate-v009.png`
- Candidate SHA-256: `e3384fbb51ee9fbff519f9921206a08de74cd4f85328f006bb4d03785abc85a8`
- Candidate dimensions: 1672x941
- Mapped reference: `intake/D094/003.jpg` SHA-256 `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`
- Final plan SHA-256: `7335d66fc5454a6a83841ccefdbffe8b33a9e17270b671fcc8508253ed6100c8`
- Shared character contracts: Bhattathiri `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`; Guruvayurappan `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Outcome: needs-fix; repair rounds exhausted, deviations disclosed for renewed independent review; no artwork approval
- Status: selected image retained unchanged for decision; producer review is not independent clearance

## Image-specific findings

The native frame contains one older clean-shaven Bhattathiri and one blue Bhagwan facing each other, with folded hands and the medicine bowl, ritual vessel and discarded crown grouped at the edge. The focused face crop shows a coherent face; the folded hands show four separate fingertips, while the thumbs are overlapped by the joined-palm angle. Bhattathiri’s lower legs are folded beneath him and one bare foot is visible with five toes; the other is tucked. The 2x lower-body crop makes the kneeling pose clear. Bhagwan’s open blessing hand shows a thumb and four fingers; his visible feet show five toes each. There is no added person, duplicate body, readable writing, signature, logo, watermark or light beam.

**DISCLOSED DEVIATION — skin:** The plan requests warm medium-brown skin with 11x11 skin-only R-B below 120. Using crop-origin coordinates, I reproduced the independent reviewer’s cheek origin `(350,310)` RGB `(184,104,58)`, R-B 126, and torso origin `(280,480)` RGB `(187,111,66)`, R-B 121. My additional patches were cheek `(360,320)` RGB `(180,101,54)`, R-B 126, and upper arm/torso `(250,490)` RGB `(155,80,42)`, R-B 113. The reviewer’s two patches both exceed the target.

**DISCLOSED DEVIATION — pose:** The final plan requires both figures to be seated. Bhagwan is seated, but Bhattathiri is kneeling on folded lower legs. No further generation is authorized because repair rounds are exhausted. This producer review does not clear either deviation; renewed independent exact-checksum review remains pending.
