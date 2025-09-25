import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  base: process.env.NODE_ENV === "production" ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'apcsp-portfolio-template'}/` : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: false,
  },
  server: {
    open: true,
  },
});
