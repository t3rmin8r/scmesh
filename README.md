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
