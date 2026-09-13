# Narayaneeyam public review site

The user explicitly authorised a public Cloudflare review site at
`https://gehariharan.com/narayaneeyam`, with a dedicated R2 bucket and D1 feedback.
This supersedes the earlier prohibition on remote stores for this review-site
scope only. Local source content, image candidates and approvals remain authoritative.
No image generation runs in the website. No artwork is approved by publishing it.

## Build and publish

```sh
node review-site/scripts/build.mjs
node review-site/scripts/test.mjs
node review-site/scripts/upload.mjs
wrangler d1 migrations apply narayaneeyam-feedback --remote --config review-site/wrangler.jsonc
wrangler deploy --dry-run --config review-site/wrangler.jsonc
wrangler deploy --config review-site/wrangler.jsonc
```

Build creates a standalone three-page HTML review under `artifacts/review-site/`
and WebP derivatives from an explicit list of local images. Originals remain
unchanged. Each chapter compares source references with traditional murals and
detailed painting candidates; the build manifest records the exact versions.
Commentary is copied verbatim from the content JSON. The compact pages label the
columns Reference, Traditional mural and Detailed painting, with no filenames or
editorial metadata shown. A small Leave feedback link opens a text box and Submit
button below each image row.

Only the two `/narayaneeyam` routes are attached. The existing blog Worker and
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
