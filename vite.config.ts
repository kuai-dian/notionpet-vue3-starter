import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const packageJSON = require("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/main.ts",
      name: packageJSON.name,
      formats: ["umd"],
      fileName: () => "index.js",
    },
  },
})
