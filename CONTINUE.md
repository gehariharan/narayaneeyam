# Continue Narayaneeyam studio

Read this first, then `AGENTS.md`, `STUDIO.md`, and `review-site/README.md`.
This handoff covers work completed on 2026-09-13. Do not regenerate completed
artwork or recreate Cloudflare resources just because a new checkout lacks assets.

## Current user intent

The user is reviewing Narayaneeyam artwork and commentary before producing the
remaining chapters. They want source reference, traditional mural and detailed
painting compared side by side, with easy feedback. Their latest instruction is
to ship this state, sync OneDrive/GitHub and continue with a remote agent.

The user explicitly authorised the public review site, a dedicated R2 bucket,
D1 feedback, Wrangler deployment and GitHub push. This overrides the earlier
no-remote-store rule for the review site only. Local files remain authoritative.
They explicitly chose **open access, no passphrase**. Do not reintroduce a login.

## Shipped site

- Index: https://gehariharan.com/narayaneeyam/
- Dasakam 1: https://gehariharan.com/narayaneeyam/d001
- Dasakam 2: https://gehariharan.com/narayaneeyam/d002
- Worker: `narayaneeyam-review`; account `d9967c9f63e9aa7685c005a62a00443c`.
- Routes: exact `gehariharan.com/narayaneeyam` plus `gehariharan.com/narayaneeyam/*`.
- Dedicated R2 bucket: `narayaneeyam` (93 WebP review images).
- Dedicated D1: `narayaneeyam-feedback`, ID `c3eabf56-d31e-4b44-a6b6-eff98fc9054c`.
- Current shipped Worker version: `62cf8786-e26a-41b9-a1b4-d12de0e689ab`.
- Existing `gehariharan-blog` Worker, blog media bucket and database are separate.

All three chapters (1, 2 and 38) have ten rows with three images each. On phones (650px or narrower),
images stack vertically at full width with no horizontal scrolling; desktop keeps
three columns. Mobile navigation targets and feedback fields are touch-friendly. Compact UI labels are
Reference / Traditional mural / Detailed painting. Filenames, versions,
provenance notes and repeated explanatory text are hidden. Commentary is
unchanged. Each row has a small feedback link opening only a textbox and Submit.
Server records chapter, sloka, dataset revision and generated-image snapshots.
There is no public feedback listing. D1 uses prepared writes, validation,
same-origin checks, a honeypot and an edge rate limiter.

The user initially deferred the compact UI, then explicitly asked a subagent to
implement it. That work is now complete and deployed. Do not follow the obsolete
deferred-status sentence in `artifacts/review-site/compact-layout-prompt.md`.

## Git and large assets

Repository: https://github.com/gehariharan/narayaneeyam — branch `main`.
Code, content JSON, bibles, plans and candidate-selection records are in Git.
PNG masters/candidates, raw reference intake and generated HTML/WebP files are
gitignored and backed up in OneDrive. A Git clone alone cannot build the review
dataset. R2 is a publishing derivative store, not the authoritative asset source.

OneDrive folder: `Pictures/Narayaneeyam Studio/`.
On this machine: `/home/gehariharan/OneDrive/Pictures/Narayaneeyam Studio/`.
Local repo: `/home/gehariharan/narayaneeyam`.

For a remote machine, hydrate/copy `artifacts/` and `intake/` from that OneDrive
studio into the clone before building. Preserve paths and check the latest
`handoff-sync-*.json` checksum manifest in the OneDrive studio root. Do not copy
OAuth tokens, browser profiles or Wrangler credentials into Git/OneDrive; the
remote machine needs its own authorised login or existing credentials.

## Artwork state

- D001: ten exact legacy approved landscape PNGs recovered from the earlier
  deployment; hashes match `art/approved/d001.json`. Preserved at
  `artifacts/d001/sNNN/landscape/master.png`.
- D001: ten new detailed-painting alternatives, plus eight QC revisions.
  Selected v001 for S001/S005, v002 for all other stanzas. Selection and hashes:
  `art/batches/d001-detailed-comparison-v001.json`.
  QC report: `artifacts/d001/detailed-comparison-v001.json`.
- D002: ten earlier detailed/glossy candidates, ten traditional/matte alternatives,
  and preserved QC revisions. Review build maps these explicitly in
  `review-site/scripts/build.mjs`. Original reference images are `001.jpg`–`010.jpg`.
- New comparison PNG layout: `intake/D001/outputs/d1001-landscape-v001.png` and
  `intake/D002/outputs/d2001-landscape-v003.png`, etc. Version suffixes matter.
  Older comparison filenames in parent folders remain historical copies.
- Guruvayurappan and Lakshmi character sheets are explicitly user-approved.
  Bibles and hashes are in `art/bible/characters/`; anchors in `artifacts/characters/`.
- New stanza images are **comparison candidates, not approved masters**.
  No new stanza approvals were inferred from permission to generate or publish.
- Portrait companions remain ungenerated. Every final concept still needs an
  independently composed 4:5 portrait anchored to its approved first orientation.

QC corrected several clipped crowns/feathers, D001 S010 central feet, and a
currency symbol/disconnected hand in D001 S002. Visual QC is not a guarantee of
perfect anatomy. Small/occluded hands and symbolic background figures still
need editorial review. D001 S010 retains some peripheral figure cropping.

## Style direction

The user found D002 too photorealistic/glossy compared with D001 S002–S010.
The traditional style uses flat matte colour, strong outlines, shallow space,
restrained shading and patterned ochre gold. D001 S004/S008 are style anchors;
approved character sheets anchor identity separately. Do not let their glossy
rendering dictate the traditional variant. The detailed variants were explicitly
requested as comparison alternatives, not as a replacement series direction.

Findings: `artifacts/d002/style-review-v001.md` and
`artifacts/d002/matte-comparison-v001.md`. The latter originally covered two
pilots; all ten D002 traditional alternatives have since been generated.

## Intake and remaining chapters

The OneDrive intake was flattened to `intake/D001`, `intake/D002`, etc.; export
wrapper folders were removed and the prior export retained in
`intake/_archive-facebook-export-v1`. Captions-only `D005-X` style names remain.
D001/D002/D038 now have canonical chapter content/plans.

Inventory: `art/batches/reference-murals-v001.json` and `.md`: 37 folders with
560 numbered reference images, approximately 358 provisional stanza concepts,
and 144 images needing mapping. Multiple references can belong to one stanza.
Do not blindly generate one scene per numbered reference file. D038/D097 need
visual mapping. Other ages/avatars/recurring figures need appropriate approved
character references before scaling.

Three source files remain intentionally local-only: `intake/D002/011.jpg`,
`012.jpg`, `013.jpg`. They were removed in OneDrive earlier. Do not reupload
them through a blanket intake sync. `scripts/sync-handoff.py` excludes them.

## Resume and verify

```sh
npm ci --ignore-scripts
node review-site/scripts/build.mjs
node review-site/scripts/test.mjs
python review-site/scripts/test-migrations.py
node scripts/validate-studio.mjs
```

`studio:validate` has existing editorial/incomplete-pair warnings. Do not treat
them as completed approvals. Avoid routine npm lifecycle hooks until storage
target is configured: `npm run build` and other studio commands auto-sync.
Direct Node scripts are useful during setup.

To deploy after an authorised change:

```sh
node review-site/scripts/build.mjs
node review-site/scripts/test.mjs
python review-site/scripts/test-migrations.py
node review-site/scripts/upload.mjs
wrangler deploy --dry-run --config review-site/wrangler.jsonc
wrangler deploy --config review-site/wrangler.jsonc
```

Upload assets before deploying a new manifest. Existing keys are content-hashed.
`--d001-detailed` limits the upload script to D001 alternatives. Don't recreate
the existing bucket/database or run initial provisioning again.

`node review-site/scripts/verify-live.mjs` verifies page responses and image
hashes but **also submits one labelled test feedback record**. It writes exact
verification/cleanup SQL under `artifacts/review-site/`; remove only that test
after checking persistence. Tests during this handoff passed for all 90 images,
the chapter pages, index, blog homepage and live feedback acceptance.

## Feedback and next task

The user plans to test the live site. Start the next session by reading new
feedback and asking only for unresolved artistic choices. Query via Wrangler:

```sh
wrangler d1 execute narayaneeyam-feedback --remote --config review-site/wrangler.jsonc --command "SELECT * FROM feedback WHERE status='open' ORDER BY created_at" --json
```

Feedback must be associated with its stored image snapshot, not merely whichever
candidate is newest. Make revisions as new versions, inspect anatomy/style,
update the review selection, upload new derivatives, then deploy. Explicit user
approval is still required before updating `art/approved/`.

Generate art only through the session's Codex ImageGen tool. No OpenAI API calls
or web generation endpoint. If unavailable on the remote agent, do not silently
substitute an API or a different generator.

## OneDrive handoff sync

```sh
python scripts/sync-handoff.py --target '/path/to/OneDrive/Pictures/Narayaneeyam Studio'
python scripts/sync-handoff.py --target '/path/to/OneDrive/Pictures/Narayaneeyam Studio' --apply
onedrive --sync --upload-only --no-remote-delete --single-directory 'Pictures/Narayaneeyam Studio'
```

The helper mirrors git-visible code plus studio data, hashes copies, preserves
changed destination files under `_history/handoff-TIMESTAMP/`, and never deletes
remote extras. It copies locally; the final OneDrive command uploads to cloud.
Do not run two OneDrive clients concurrently. Keep handoff manifests and local
feedback exports out of Git; they are in gitignored `artifacts/`.

## Dasakam 38 follow-up

The earlier Jarvis artwork was D038, not D040. Imported files remain intact under
`artifacts/imports/jarvis-d038-v001/`, with source SHA-256 verification. The user
then authorised review and matte/detailed comparison production, delegating the
character-continuity decision. Family sheet c002 was accepted for identity with
infant age adaptation; its glossy rendering was not adopted for the matte set.

Ten imported selected landscapes are preserved as detailed v001. Ten new
traditional candidates are v002, with S002-S004 corrected to v003 to reduce
modelling and glow. Selection/checksums: `art/batches/d038-comparison-v001.json`.
Review findings: `art/batches/d038-review-v001.md`. All prompts and rejected
versions are preserved. The imported all-missing approval manifest is unchanged;
there are no new approved stanza masters. The earlier first portrait candidate
is preserved but is not an approved companion.

Public review URL: https://gehariharan.com/narayaneeyam/d038
Outputs use `intake/D038/outputs/d38001-landscape-v001.png` onward.

D1 migration `0002_feedback_all_dasakams.sql` is applied in production. It
preserves existing rows and replaces the original D001/D002-only database
constraint. The Worker still accepts feedback only for bundled chapter/sloka
pairs. A private pre-migration SQL backup is preserved under `artifacts/review-site/`.

## Dasakam 96 trial

D091 had captions but no photos. The user chose D096 to try next; all ten photos
and captions are present. A one-sloka trial (S004: three yogic paths) is now
available at https://gehariharan.com/narayaneeyam/d096. The page deliberately
contains one row, not a completed ten-sloka chapter. Two new landscape candidates
are v001 traditional and v002 detailed; see `art/batches/d096-comparison-v001.json`
and `art/batches/d096-review-v001.md`. All ten original captions are preserved,
but only S004 is normalized/planned. No Sanskrit or literal translation was
invented. Nine more scenes and all portrait/approval work remain pending.

## D096 remainder — generation limit checkpoint

The user requested the remaining nine slokas in both comparison styles.
Local generation completed selected Traditional mural and Detailed painting
landscapes for S001–S006 (S004 is the unchanged original trial), plus Traditional
mural for S007. S001–S003 Traditional selections are v003: earlier v001 images
were too glossy and are preserved. Other selections use matte v001 / detailed v002.

Seven images remain: S007 detailed v002; S008, S009, S010 matte v001 and detailed
v002. ImageGen returned HTTP 429 usage limit with resets_in_seconds=509489
on 2026-09-13. Do not switch to API generation.

Full plan/content: art/plans/d096.json and content/daskams/d096.json.
Candidate inventory: art/batches/d096-comparison-v002.json; missing image entries
are marked pending-generation. Exact prepared prompts are in
artifacts/d096/sNNN/prompts/. Outputs and metadata are under artifacts/d096/;
comparison copies are intake/D096/outputs/d96NNN-landscape-vVVV.png.
All are mirrored to OneDrive; image binaries remain gitignored.

For remaining matte images use D001 S004 landscape/master.png as first style
anchor, and D096 S004 landscape/candidate-v001.png as second identity anchor.
For detailed images use the approved Guruvayurappan character sheet and D096
S004 candidate-v002.png. Read bibles, plan and images before generating.
Save exact request records before each call. Never overwrite candidates.
After generation, inspect anatomy, faces, style, symbolism and unwanted text;
run python artifacts/d096/register-full-pass.py to register available files.

The public site remains the S004 trial: four chapters, 31 rows, 93 images.
No Cloudflare deployment was made for this incomplete batch. Once all ten rows
are complete, apply artifacts/d096/pending-review-site.patch, build/test, upload
D096, deploy, verify live hashes and feedback, then sync OneDrive/GitHub.
Artwork remains unapproved; portrait companions await approved first orientations.
