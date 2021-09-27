import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@core-common": resolve(__dirname, "../../packages/core-common/src"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', ".web.ts"]
  }
});