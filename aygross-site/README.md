# AY Gross

AY Gross's personal portfolio, photography, and projects site. It is built with [Astro](https://astro.build/) and uses a responsive Bento-style layout.

## Requirements

- Node.js 20 or newer
- npm

> This project was installed with npm's legacy peer-dependency resolution. Use the command below when installing dependencies.

## Local development

From `D:\Users\Ay\Documents\aygross-site`:

```bash
npm install --legacy-peer-deps
npm run dev
```

The development server prints its local URL in the terminal (normally `http://localhost:4321`).

## Verify and build

```bash
npm run check
npm run build
npm run preview
```

- `npm run check` runs Astro and TypeScript checks.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the built site locally for a final review.

## Updating AY-specific content

| What to change | Location |
| --- | --- |
| Name, bio metadata, location, social/contact links, visited countries | `src/site-config.ts` |
| Home-page cards and copy | `src/pages/index.astro` and `src/components/` |
| About page and contact copy | `src/pages/about.astro` |
| Work cards and destination links | `src/pages/work.astro` |
| AY photography and project images | `src/assets/aygross/` |
| Site-level title, analytics, and document layout | `src/layouts/BasicLayout.astro` |
| Site URL used by sitemap and robots files | `SITE_URL` environment variable, with `https://aygross.com/` as the fallback in `astro.config.mjs` |

The included AY assets are `profile.jpg`, `darkroom-edits.jpg`, `pup-on-tech.jpg`, `ayg-photography.jpg`, and `quicksand.woff2`. Keep replacement images in `src/assets/aygross/` and update the importing component or page when their filenames change.

## Deployment

This project uses Astro's Netlify adapter and server output. Set `SITE_URL` in the deployment environment to the canonical public URL (for example, `https://aygross.com/`), then deploy with the platform's normal build command:

```bash
npm run build
```

There is no Astro DB, guestbook, database schema, or database environment-variable requirement. The site builds without database provisioning.

## Credits

The initial layout foundation came from the Ladvace `astro-bento-portfolio` theme and has been adapted for AY Gross.