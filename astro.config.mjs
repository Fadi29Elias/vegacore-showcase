import { defineConfig } from 'astro/config';

// Static site. Arabic is the default language (src/pages/index.astro sends "/" to "/ar/").
// SITE_URL / BASE_PATH are set by the GitHub Pages workflow; with a custom domain base stays "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://work.vegacore.co',
  base: process.env.BASE_PATH || '/',
});
