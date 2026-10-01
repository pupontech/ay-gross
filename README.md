# AY Gross

Source archive and active site for [aygross.com](https://aygross.com/).

## Current live site

`aygross-site/` is the current Astro implementation served at `https://aygross.com/`.
It is the version to use for future edits and deployment work.

The live site currently presents AY Gross as an IT consultant, photo editor, and photographer. It includes a themed Bento-style home page, About and Work pages, contact/social links, a wishlist link, and links to Darkroom Edits, Pup on Tech, and AY Gross Photography.

## Other folders

- `aygross-html/` — a simpler multi-page static HTML implementation.
- `aygross-recreation/` — an older single-page recreation/reference implementation.

These folders are retained as historical/reference versions and are not the current live build.

## Local development

```text
cd aygross-site
npm install --legacy-peer-deps
npm run dev
```

Verification commands:

```text
npm run check
npm run build
```

Deployment configuration and local browser profiles are intentionally excluded from version control.
