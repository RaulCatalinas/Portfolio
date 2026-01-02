// @ts-check
import { defineConfig } from 'astro/config'

// Plugins
import tailwindcss from '@tailwindcss/vite'

// Integrations
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
})
