// vite.config.js
import { defineConfig } from 'vite'
const repo = 'spa-store'

export default defineConfig({
  base: `/${repo}/`,

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