import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/fylo/',
  plugins: [vue()],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build:{
  //   outDir: '../backend/public',
  //   emptyOutDir:true
  // }
})