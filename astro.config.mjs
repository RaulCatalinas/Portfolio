// @ts-check
import { defineConfig } from 'astro/config'

// Plugins
import tailwindcss from '@tailwindcss/vite'

// Integrations
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  site: 'https://raulcatalinas.vercel.app',

  integrations: [sitemap(), robotsTxt()]
})
