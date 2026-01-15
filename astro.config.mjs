// @ts-check
import { defineConfig } from 'astro/config'

// Plugins
import tailwindcss from '@tailwindcss/vite'

// Integrations
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        optimize: true
      })
    ]
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  site: 'https://raulcatalinas.vercel.app',

  integrations: [
    sitemap(),
    robotsTxt(),
    react({
      babel: {
        minified: true,
        plugins: ['babel-plugin-react-compiler']
      }
    })
  ]
})
