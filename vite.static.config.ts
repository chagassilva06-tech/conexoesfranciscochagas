import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Standalone SPA build for GitHub Pages.
// Builds `static.html` + `src/main.static.tsx` into `dist-static/`.
// Run: `bun run build:static`
export default defineConfig({
  base: process.env.STATIC_BASE ?? "/conecoeschagas/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    rollupOptions: {
      input: "static.html",
    },
  },
});
