// @ts-check
import { defineConfig } from 'astro/config'

// Plugins
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// Integrations
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgr()]
  },

  integrations: [react()]
})
