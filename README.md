# Narayaneeyam

An offline-first editorial and image-production studio for a Narayaneeyam coffee-table book and downloadable digital edition. The project combines sourced verses and commentary with consistent temple-mural-inspired artwork.

The current milestone is content quality. There is no image-generation API, admin panel, or deployment requirement. Codex ImageGen is used interactively; local files remain authoritative and are mirrored to OneDrive for durable storage.

## Start here

```sh
npm install
npm run studio:validate
npm run dev
```

See [STUDIO.md](STUDIO.md) for the complete production workflow.

## Paired artwork contract

Every stanza is planned and approved as a pair:

- landscape 16:9 for desktop, spreads, and presentations
- portrait 4:5 for mobile, downloads, covers, and portrait pages

These are separate compositions of one concept, not crops. Shared identity is recorded with `concept_id` in both the plan and approval manifest.

## Useful commands

```sh
npm run studio:validate
npm run studio:validate -- --strict
npm run prompt:build -- --daskam=1 --sloka=1 --orientation=landscape
npm run prompt:build -- --daskam=1 --sloka=1 --orientation=portrait
npm run art:approve -- --daskam=1 --sloka=1 --orientation=portrait --file=artifacts/path/to/candidate.png
npm run preview:sync
npm run storage:sync -- --dry-run
npm run storage:sync
npm run check
npm run build
```

## OneDrive storage

`storage:sync` is a one-way, non-destructive mirror of `content/`, `art/`,
`artifacts/`, raw `intake/`, and `schemas/`. It copies changed files, verifies
each copy by SHA-256, writes `studio-storage-manifest.json` at the destination,
and never deletes files already in OneDrive. The repository and local artifacts
remain the source of truth.

The mirror runs automatically after `scrape`, `studio:validate`,
`prompt:build`, `art:approve`, `preview:sync`, and `build`. `storage:sync`
remains available for an explicit sync or dry run.

On Windows, the destination defaults to `Narayaneeyam Studio` inside the
personal folder identified by `OneDriveConsumer`. It falls back to `OneDrive`
and then `OneDriveCommercial` when a personal-folder variable is unavailable.
Override it when needed:

```sh
npm run storage:sync -- --target "D:\OneDrive\Narayaneeyam Studio"
```

Set `NARAYANEEYAM_ONEDRIVE_ROOT` to make a custom destination the default.
Alternatively, create a gitignored `.studio-storage.json`:

```json
{
  "target": "C:\\Users\\you\\OneDrive\\Pictures\\Narayaneeyam Studio"
}
```

Files written there are ordinary OneDrive files; the OneDrive desktop client
handles cloud upload automatically.

## Facebook reference intake

Authenticated Facebook posts are captured without copying browser cookies:

1. Open the Facebook page while logged in.
2. Open browser developer tools, copy the contents of
   `scripts/facebook-capture-snippet.js` into the Console, and run it.
3. As soon as `facebook-capture-*.json` downloads, import it:

```sh
npm run facebook:intake -- --capture "C:\Users\you\Downloads\facebook-capture-123.json"
```

The snippet incrementally scrolls through as many as 250 page sections, expands
visible "See more" captions, and retains posts continuously even when Facebook
removes old off-screen elements. It captures post text, links, and all
substantial images loaded for each post, then downloads a JSON file. Leave the
tab active until the JSON download begins.

The importer immediately saves captions and images under `intake/facebook/`,
records checksums and provenance, and mirrors the raw intake to OneDrive.
Facebook CDN URLs expire, so run the importer immediately. Review captured
captions before editorial use because interface text can be included.

### Facebook Graph API

For a Page you own, the Graph API is more reliable than browser capture. Create
a Meta app, then use Graph API Explorer with Graph API `v25.0` to generate a
User access token containing `pages_show_list` and `pages_read_engagement`.
For an owner-only development test, keep the app in development mode and add
your Facebook account as an app administrator or tester.

1. Create or select an app at
   [Meta for Developers](https://developers.facebook.com/apps/).
2. Open [Graph API Explorer](https://developers.facebook.com/tools/explorer/),
   select that app, select **User Token**, and add `pages_show_list` and
   `pages_read_engagement`.
3. Generate the token, copy `.env.facebook.example` to `.env.facebook`, and
   paste the token after `FACEBOOK_USER_ACCESS_TOKEN=`.
4. Test three posts, then download the same sample:

```powershell
npm run facebook:graph -- --page "தினமும் ஒரு கீதை" --limit 3
npm run facebook:graph -- --page "தினமும் ஒரு கீதை" --limit 3 --download
```

The command calls `/me/accounts`, selects the managed Page, uses its returned
Page access token, and reads `/{page-id}/posts` with captions, permalinks, full
pictures, attachments, and multi-image subattachments. Add `--all --download`
with `--limit 100` after the sample succeeds to follow pagination and preserve
all available Page-authored posts under `intake/facebook-graph/`:

```powershell
npm run facebook:graph -- --page "தினமும் ஒரு கீதை" --limit 100 --all --download
```

Use `pages_read_user_content` as well only if visitor-authored Page content is
required. Never put an access token in a command argument, committed file,
capture JSON, or OneDrive mirror.

## Repository layout

```text
content/                 canonical content and source provenance
art/bible/               series and recurring-character continuity
art/plans/               stanza concepts and paired compositions
art/approved/            explicit approvals, local paths, and checksums
artifacts/               prompts, candidates, and masters (local/ignored)
public/images/           generated preview derivatives (local/ignored)
schemas/                 versioned contracts for content, plans, and approvals
src/                     small Astro proof-reading interface
scripts/                 offline acquisition, prompt, validation, and preview tools
```
