# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Narayaneeyam is a static website built with **Astro 5** that presents the Sanskrit devotional poem Narayaneeyam with English translations, word-by-word glossaries, commentary, and AI-generated temple-mural-style artwork. Currently covers Daskam (chapter) 1 with 10 slokas (verses).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run intake` | Start intake UI server (Express) |
| `node scripts/generate-images.mjs [--only=N] [--force] [--variants=N]` | Generate DALL-E images for slokas |
| `node scripts/blob-sync.mjs` | Upload images to Vercel Blob, update manifest |

There is no test runner or linter configured. Use `npx astro check` for TypeScript diagnostics.

## Architecture

### Content Pipeline

All content lives in JSON files under `src/content/`:
- **daskam01.json** — Main content: array of sloka objects with Sanskrit (devanagari + IAST romanization), English translation, commentary, glossary, scene briefs for image generation, and Tamil placeholders
- **characters.json** — Visual guidelines for characters (e.g., Krishna) used in image prompt construction
- **style.json** — Art style bible (temple-mural devotional painting) for consistent DALL-E output
- **blob-manifest.json** — Maps sloka images to Vercel Blob CDN URLs with SHA1 hashes

### Image Generation Pipeline

1. `generate-images.mjs` composes prompts from style.json + characters.json + sloka scene_brief → DALL-E API → PNG to `public/images/`
2. `blob-sync.mjs` uploads PNGs to Vercel Blob, creates WebP variants (1280x720, q85) via sharp, updates blob-manifest.json
3. Generated images are gitignored; CDN URLs in blob-manifest.json are the source of truth

Requires env vars: `OPENAI_API_KEY`, `BLOB_READ_WRITE_TOKEN`

### Pages & Routing

Astro file-based routing under `src/pages/`:
- `index.astro` — Home page
- `daskam/1.astro` — Daskam 1 reader with swipeable card UI

No component framework (React/Vue/Svelte). All interactivity is vanilla JavaScript inline in Astro components. The swipe card system uses pointer events with momentum physics and threshold-based swiping.

### Styling

Dark theme with CSS variables (`--bg: #0b0c10`, `--accent: #c8a24a` gold). All CSS is scoped inline within Astro components. Mobile-first layout with max-width wrapper ~820-860px.

### Content Import Scripts

Python scripts in `scripts/` import romanized text and translations from external sources into daskam JSON files. These are run manually during content authoring.

## Key Conventions

- Content is structured as JSON, not Markdown or MDX
- Each sloka object contains a `scene_brief` with `must_show`, `composition`, `tone`, `avoid` fields that drive image generation
- Images stored in Vercel Blob, never committed to git
- State (like language preference) persisted via localStorage
- ESM modules throughout (`"type": "module"` in package.json)
