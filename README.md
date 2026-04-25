# SCMesh

Static multi-page Astro site for publishing community mesh-network guidance on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content editing

- Site-wide metadata, navigation, and placeholder endpoints live in `src/data/site.ts`.
- Homepage summary content lives in `src/data/home.ts`.
- Page-specific copy and structured content live in `src/data/pages/`.
- Replace placeholder URLs, hostnames, credentials, and SVG placeholders before publishing operational details.

## GitHub Pages

The deployment workflow is defined in `.github/workflows/deploy.yml`.

- Push to `main` to trigger a Pages build.
- Enable GitHub Pages in the repository settings and select GitHub Actions as the source.
- The Astro base path is set automatically for project Pages deployments using the repository name.


## How to update content

Update content in the data files, not the Astro page/layout/component files.

## Use these:

Site-wide metadata, nav, footer, and placeholder links: src/data/site.ts
Homepage hero/cards/highlights: src/data/home.ts
Per-page content:
src/data/pages/about.ts
src/data/pages/getInvolved.ts
src/data/pages/loraConfig.ts
src/data/pages/channels.ts
src/data/pages/easSystem.ts
src/data/pages/mqttServer.ts
src/data/pages/meshInfo.ts


## What to change there:

Titles, intros, paragraphs, bullet lists, callouts, tables, config values, and external URLs
Placeholder hostnames and invite/status links in src/data/site.ts
Homepage section labels and cards in src/data/home.ts


## Only edit these if you want layout/UI changes:

Routes and page wiring: src/pages
Reusable rendering/layout: src/components, src/layouts
Styling/theme: src/styles/global.css

## Contributing

Use a lightweight pull request workflow so content stays accurate, the UI stays stable, and GitHub Pages deploys stay predictable.

### How contributors should work

All contributors can work across the project, but changes should still follow a shared review process so the site stays consistent and safe to publish.

Best practice: one person opens the change, at least one other contributor reviews it, and the team merges only after the checks pass. On smaller updates, two contributors may be enough: one author and one reviewer.

### Contribution process

1. Create an issue or short task note before starting work so the team agrees on scope.
2. Create a branch from `main` using a descriptive name such as `content/update-get-involved` or `ui/improve-homepage-cards`.
3. Keep each pull request focused on one topic: content, UI, or deployment/docs.
4. Run the local checks before opening a pull request.
5. Request at least one review from another team member before merging.
6. Merge only after checks pass and the reviewer confirms there are no broken links, placeholder values, or accidental operational details.

### Example pull request and commit naming

If you are new to the project, use clear names that say what changed and where it changed.

- Example pull request title: `Update get involved page copy and links`
- Example branch name: `content/update-get-involved-copy`
- Example commit message: `Update get involved page copy and refresh links`

Good rule of thumb: start with a verb such as `Update`, `Fix`, `Add`, `Remove`, or `Refactor`, then describe the user-facing change in plain language.

### Local validation

Run these commands before submitting a pull request:

```bash
npm install
npm run check
npm run build
```

Use `npm run dev` during authoring to preview content and confirm page structure, spacing, and navigation.

### Content and security guidelines

- Edit content in the data files first; only change Astro components when the page structure or UI truly needs to change.
- Replace placeholders intentionally, but do not commit private credentials, internal-only hostnames, or unpublished operational details.
- Verify every external link, callout, table entry, and configuration value before requesting review.
- Prefer small, reviewable pull requests over large mixed changes.
- Document non-obvious decisions in the pull request description so the next contributor has context.

### Pull request checklist

Before merge, confirm that:

- the affected pages build successfully with `npm run build`
- `npm run check` completes without errors
- content changes were made in `src/data/**` unless a UI change was required
- placeholder URLs, credentials, and SVG assets were not accidentally published
- another team member reviewed the change
