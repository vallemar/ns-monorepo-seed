import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": "/src/",
      "@core-common": resolve(__dirname,"../../libs/core-common/src")
    },
    extensions: ['.mjs', '.js', '.ts', '.json', '.vue', ".web.ts"]
  }
})
