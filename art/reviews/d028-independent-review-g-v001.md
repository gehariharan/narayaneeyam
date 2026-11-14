# D028 landscape visual review — stopped before completion

Review stopped because the stanza 8 candidate no longer matches its pinned checksum. The task requires stopping on any candidate checksum mismatch. No verdicts are issued; no review evidence should be used to clear these candidates for publication.

## Contract hashes

The frozen plan and every listed character contract were SHA-256 checked against the brief. The plan hash matched. All listed character contract hashes matched.

| Contract file | Actual SHA-256 |
|---|---|
| `art/plans/d028.json` | `c09738a636a8efddb9928568813171de47ae8dfb1ad2298ef7b524b9becbac13` |
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

## Candidate checksum gate

I ran `sha256sum` on the five pinned candidate paths before viewing them. At that point each matched its expected digest:

| Stanza / version | Pinned candidate | Initial SHA-256 |
|---|---|---|
| 6 / v001 | `artifacts/d028/s006/landscape/v001/candidate.png` | `8ce8426b1ed9c6c6b28f76c749fe7ff0da119f708e551b0ae9088ca415e04076` |
| 7 / v002 | `artifacts/d028/s007/landscape/v002/candidate.png` | `0b47c8def88aaa7d249fe33ddaabf57d2a5606c7468a24dd39e91f43c5e85424` |
| 8 / v002 | `artifacts/d028/s008/landscape/v002/candidate.png` | `8f203d17956b8dd064b0acc704b3d00e75d5439216a22e98b3f7b2acaf25e786` |
| 9 / v002 | `artifacts/d028/s009/landscape/v002/candidate.png` | `36db12170d5ef8b5372f9b197fd2032e2f8c53b6e3bf644bd072218616c7c507` |
| 10 / v002 | `artifacts/d028/s010/landscape/v002/candidate-v002.png` | `3d29ebac0bfb1fcf893fb79c6d91b7b12663ccbed44a6c49c8b81e8f411cbed7` |

After displaying the five native-size images, I attempted to create scratch crops. Due to an erroneous crop command whose output path was the stanza 8 source path itself, that command overwrote the stanza 8 candidate. A subsequent `sha256sum` reported `83a4e72ade57c92c56b04bbd0600d61114f09003143834a6804e7535678ba40a`, which differs from the pinned digest. This was my mistake. I did not attempt to restore or further alter the candidate. The scratch directory created for this work was removed.

## Review state and recommendation

No candidate has a valid completed review record from this run. Although all five full images were displayed, I did not complete the required crop-level inspection or reference-photo comparison. Do not use any informal impressions from those displays as visual clearance. The stanza 8 bytes need to be restored from an authoritative exact-checksum copy, then the affected review must be reassigned or restarted with crop outputs kept in a separate scratch path. The other four candidates remain at their originally verified pinned bytes as far as this run's checks establish, but they have no review verdict here.

The task was stopped at the first mismatch. No approval manifest was touched, and no captain art approval decision was made. I did not attest an empty captain-call inventory because the review did not complete.

Commands used included `sha256sum` on the listed candidate and contract paths, Python to read the plan/content and relevant character contracts, and `magick -crop` for scratch crops. The stanza 8 crop command mistakenly used the candidate path as both input and output; the changed digest above records the consequence.

Review stop time: 2026-11-14 02:40:04 UTC.
