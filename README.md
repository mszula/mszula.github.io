# mszula.github.io

Personal site for **Mateusz Szuła** — a light, casual, project-first page with
a few pixel/retro touches.

Built with [Astro](https://astro.build), styled by hand, deployed to GitHub
Pages.

## Develop

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run build    # build static site into ./dist
npm run preview  # preview the production build
```

## Edit the content

Almost everything lives in `src/data/` so you rarely touch markup:

| File                   | What it controls                                  |
| ---------------------- | ------------------------------------------------- |
| `src/data/site.ts`     | Name, tagline, location, SEO text, social links   |
| `src/data/projects.ts` | Projects — blurbs, tags, repo/demo links, accents |

Design tokens (colours, fonts, shadows) live at the top of
`src/styles/global.css` (`:root`).

### Project screenshots

Featured projects show an image from `public/images/`. To refresh them:

- **wacki** — pulled from the repo: `public/images/wacki.png`
- **visual-sorting** — a screenshot of the live demo at
  <https://mszula.github.io/visual-sorting/>

Drop a new PNG in `public/images/` and point the `image.src` field in
`projects.ts` at it.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. Once:

1. Push to `github.com/mszula/mszula.github.io`.
2. Repo **Settings → Pages → Source: GitHub Actions**.

Live at <https://mszula.github.io>.

## Structure

```
src/
├── components/   # Nav, Hero, Projects, Footer, Icon
├── data/         # site.ts, projects.ts
├── layouts/      # Layout.astro — <head>, fonts, SEO
├── pages/        # index.astro
└── styles/       # global.css — design tokens + base styles
public/images/    # project screenshots
```
