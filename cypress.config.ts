import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // other configurations
    supportFile: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
  },
})
