// @ts-check
import { defineConfig } from 'astro/config';

// This is a GitHub *user* site (mszula.github.io) served from the domain root,
// so no `base` path is needed. If you ever move this to a project repo, set
// `base: '/repo-name'`.
export default defineConfig({
  site: 'https://mszula.github.io',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  // Honour a PORT from the environment (e.g. the preview harness); defaults to
  // Astro's usual 4321 for local `npm run dev`.
  server: {
    port: Number(process.env.PORT) || 4321,
  },
});
