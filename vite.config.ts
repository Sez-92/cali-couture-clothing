import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works unchanged on GitHub Pages,
// regardless of the final repository name (user/repo vs. custom domain).
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
