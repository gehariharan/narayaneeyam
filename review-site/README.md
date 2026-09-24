# Narayaneeyam public review site

The user explicitly authorised a public Cloudflare review site at
`https://gehariharan.com/narayaneeyam`, with a dedicated R2 bucket and D1 feedback.
This supersedes the earlier prohibition on remote stores for this review-site
scope only. Local source content, image candidates and approvals remain authoritative.
No image generation runs in the website. No artwork is approved by publishing it.

## Build and publish

Production deployment may run through the manual GitHub Actions workflow
`.github/workflows/deploy-review.yml`. It requires the repository or
`review-production` environment secret `CLOUDFLARE_API_TOKEN`, scoped to account
`d9967c9f63e9aa7685c005a62a00443c` with Workers Scripts and Workers Routes
write permissions. Upload the manifest-listed WebPs to R2 locally with Wrangler
before dispatching the workflow. Actions downloads a checksum-pinned review-only
release bundle for its exact commit, checks it, deploys only the Worker, and performs
read-only live verification. Raw intake, masters,
candidates, prompts, and feedback exports must never be included in that bundle.

For local deployment:
```sh
node review-site/scripts/build.mjs
node review-site/scripts/test.mjs
python review-site/scripts/test-migrations.py
node review-site/scripts/upload.mjs
wrangler d1 migrations apply narayaneeyam-feedback --remote --config review-site/wrangler.jsonc
wrangler deploy --dry-run --config review-site/wrangler.jsonc
wrangler deploy --config review-site/wrangler.jsonc
```

The local upload can use an R2-only token. The separate GitHub Actions secret
`CLOUDFLARE_API_TOKEN` belongs in the `review-production` environment and must
have Worker deployment permissions. The personal blog repository is a separate
Worker and is not part of this deployment path.

For a GitHub Actions deployment, commit and push the review source, build the
review bundle locally, and upload its media to R2 first. Then package and release
the exact commit before dispatching the workflow:

```sh
node review-site/scripts/build.mjs
node review-site/scripts/upload.mjs
node review-site/scripts/package-release.mjs
sha=$(git rev-parse HEAD)
gh release create "review-bundle-$sha" \
  "artifacts/review-releases/$sha/review-site-bundle.zip" \
  "artifacts/review-releases/$sha/review-site-bundle.zip.sha256" \
  --target "$sha" --title "Review bundle $sha"
gh workflow run deploy-review.yml --ref "review-bundle-$sha"
```

The release bundle contains only rendered review HTML, the review data and
provenance manifests, and WebP derivatives. The Worker deployment uses a separate
GitHub environment secret; GitHub Actions does not upload to R2.

Build creates a standalone index and chapter HTML reviews under `artifacts/review-site/`
and WebP derivatives from an explicit list of local images. Originals remain
unchanged. Each chapter compares a source reference with one traditional matte mural
candidate; the build manifest records the exact versions. Detailed/glossy
candidates are retained only as historical files and are not published. Commentary
is copied verbatim from content JSON only when its source is an allowlisted Facebook
photo-caption file or a user-supplied Google Drive commentary file. The pages label
the columns Reference and Traditional matte mural, with no filenames or editorial
metadata shown. A small Leave feedback link opens a text box and Submit button below
each image row.

Only the `/narayaneeyam` route family is attached. The existing blog Worker and
its media bucket and database are not modified. R2 remains private; the review
Worker serves only image keys explicitly present in its bundled data manifest.
It does not expose raw intake folders, provenance files or generated masters.

## Feedback

Feedback accepts same-origin JSON requests with strict size, field and revision
validation, prepared SQL statements, a honeypot and a 10/minute per-IP edge rate
limit. IP addresses are used transiently for the rate limiter, not saved in D1.
The rate limiter is regional, not a global hard quota. There is no passphrase,
public feedback listing or browser administration panel.

Each new record stores the Dasakam, sloka, message, dataset revision and exact
generated-image version/key snapshot automatically. Target is `generated`, category
is `other`, and reviewer name is empty; reference images are excluded. Existing
feedback records remain unchanged. Retrieve open feedback with:

```sh
wrangler d1 execute narayaneeyam-feedback --remote --config review-site/wrangler.jsonc --command "SELECT * FROM feedback WHERE status='open' ORDER BY created_at" --json
```

Export durable local backups (choose a new versioned filename each time):

```sh
wrangler d1 export narayaneeyam-feedback --remote --config review-site/wrangler.jsonc --output artifacts/review-site/feedback-backup-v001.sql
```

To withdraw the review site, remove only its two Worker routes or deploy a
maintenance response. Do not delete the R2 bucket or feedback database.

## Dasakam 3

D003 contains exactly ten cleaned Facebook photo-caption rows and ten new
traditional matte, full-bleed landscape candidates. Exact selected versions and
checksums are in `art/batches/d003-traditional-v001.json`. All remain
`needs-review`; publishing does not approve them, and no portrait companions were
created.

## Dasakam 4

D004 has 15 rows. Commentary is copied verbatim from
`intake/D004/photo-captions.txt`; `content/daskams/d004.json` stores the same text
with a source pointer for each row. The chosen landscape candidates and source
checksums are pinned in `art/batches/d004-comparison-v001.json`. All remain
`needs-review`, and portraits are paused. For a local deployment, upload only
its new WebP derivatives with `node review-site/scripts/upload.mjs --daskam=4`
before deploying the Worker.

## Dasakam 38

D038 is imported from Jarvis with its original sourced content, plans, and
references. The traditional matte style was independently recomposed as borderless
landscapes for all ten slokas and visually reviewed. Exact selected versions and
checksums are in `art/batches/d038-comparison-v002.json`; findings are in
`art/batches/d038-review-v002.md`. These remain candidates. The comparison has
ten rows, two images per row, and the same mobile stack and feedback form.


`node review-site/scripts/upload.mjs --daskam=38` uploads only D038 derivatives.
Chapter links and Worker routing use three-digit slugs (`d038`, not `d0038`).

D1 migration `0002_feedback_all_dasakams.sql` is applied in production. It
preserves existing rows and replaces the original D001/D002-only database
constraint. The Worker still accepts feedback only for bundled chapter/sloka
pairs. A private pre-migration SQL backup is preserved under `artifacts/review-site/`.

D096 matte review now uses `art/batches/d096-comparison-v003.json`: the
traditional style was independently recomposed as borderless landscapes for all ten rows.
The selected candidates are documented in `art/batches/d096-review-v003.md`.
Upload its derivatives using

`node review-site/scripts/upload.mjs --daskam=96`. Palette/border findings are
recorded in `art/batches/series-color-border-review-v001.md`.
