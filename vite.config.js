import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Vue3Project/' //This base configuration ensures that your assets will be linked correctly when deployed to a subdirectory (/Vue3Project/) on GitHub Pages.
})
