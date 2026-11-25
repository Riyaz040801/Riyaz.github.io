// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow
// (.github/workflows/deploy.yml), so the same code works on:
//   https://riyaz040801.github.io/Riyaz.github.io/   (project site, current repo name)
//   https://riyaz040801.github.io/                   (if the repo is renamed to riyaz040801.github.io)
//   https://your-domain.com/                         (custom domain later: set SITE_URL, BASE_PATH=/)
export default defineConfig({
  // GitHub reports http:// until "Enforce HTTPS" is on; the site is always served over https.
  site: (process.env.SITE_URL || 'https://riyaz040801.github.io').replace(/^http:/, 'https:'),
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
