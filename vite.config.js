// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/spa-store',

  build: {
    target: "es2022"
  },
  esbuild: {
    target: "es2022"
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    }
  }

})