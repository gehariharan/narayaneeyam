# D047 S009 v003 producer visual review

- Outcome: **pass** (producer review only; independent exact-checksum review pending; not art approval).
- Inspected: 2026-11-18T03:07:43Z at native resolution with focused hand/face/feet detail crops, compared with the mapped numbered source photo and caption.
- Candidate: `artifacts/d047/s009/landscape/candidate-v003.png` SHA-256 `45aead569a5cb9234985e90b166094fbe32d1fc012cfffab68bbeec82119705e`; native dimensions `1672x941`.
- Mapped source: `intake/D047/009.jpg` SHA-256 `6ffc7454b52ea841593fa749cffde884b4f1c14f0a1d5b73180b25d927f6b667`; canonical stanza and numbered caption are retained under `content/daskams/d047.json` and `intake/D047/photo-captions.txt`.
- Prompt: `artifacts/d047/s009/landscape/prompt-submitted-v003.txt` SHA-256 `d6f143b4665570af9e77bafc0a35328ca0a79b3a449c97d86c79dd3c02c3ffe7`.
- Actual native ImageGen arguments: `artifacts/d047/s009/landscape/call-arguments-actual-v003.json` SHA-256 `c9b649f076cd87fa3909df563990ca8a71d9d23217c531d62f62c56b33c4a891`.
- Frozen final plan SHA-256: `2983f7fdfc41b27b461852d45d8550c6a764d9f65223bb230a879cd4892b81b2`.
- Contract SHA-256: `art/bible/series.json` `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`, `art/plans/d047.json` `2983f7fdfc41b27b461852d45d8550c6a764d9f65223bb230a879cd4892b81b2`, `art/bible/characters/krishna-vrindavan-youth/character.json` `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`, `art/bible/characters/yashoda/character.json` `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`, `art/bible/characters/gopikas/character.json` `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`, `art/bible/characters/monkeys/character.json` `902a357279ad316974426d4de863014fd037a750135b9385f654fdf771ea4481`, `art/bible/characters/devas/character.json` `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138`.
- Focused crop evidence: `artifacts/d047/s009/landscape/review-crop-face-hands-v003.png` `f8e46daebd9f8d1eaf9766caace159b7266ec256f2ac3fcaa5a87653484b2047`, `artifacts/d047/s009/landscape/review-crop-feet-zoom-final-v003.png` `74928bc2229b0ea71c10cd0277234878997b7a67eae36e12d80fab8522b28818`, `artifacts/d047/s009/landscape/review-patch-face-v003.png` `fd9af87465a5a5d62b038c07ed7cc032da56052a96dd9b6ed6fb9daa660c9c30`, `artifacts/d047/s009/landscape/review-patch-torso-v003.png` `bcfdee2127eb53bda11c54b3e665f4b93249affd08a0d0aa20ec395782fd111b`.

## Observations

The source photo has Yashoda present, but canonical stanza/caption describe her leaving; the candidate correctly shows Krishna alone eating the butter stored in the mortar cavity. Krishna has two connected arms and legs, one focused face, plain forehead, low band and feather. His hand brings butter to his mouth and his other hand braces near the mortar; neither is an open palm and neither shows a visible digit defect. Both feet are fully visible with five separate toes each in the enlarged crop. Face/torso blue medians B-R 133/90. No second physical Krishna, text, signature, poster layout or extra limb observed.

## Disclosed deviations

No material scene deviation: the candidate follows the canonical action despite source-photo mismatch. Face/torso blue medians exceed the shared B-R 40 minimum.

This is a producer inspection of the exact candidate bytes, not an independent review or art approval. The selected image remains unapproved.
