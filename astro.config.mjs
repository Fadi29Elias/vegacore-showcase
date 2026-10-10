import { defineConfig } from 'astro/config';

// Static site. Arabic is the default language; "/" redirects to "/ar/".
export default defineConfig({
  site: 'https://work.vegacore.co',
  redirects: {
    '/': '/ar/',
  },
});
