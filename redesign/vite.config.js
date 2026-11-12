import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work from any sub-path (e.g. GitHub Pages /DeveloperPortfolio/)
// The production build goes straight into ../docs, which GitHub Pages serves.
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: { port: 5173, open: true },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
});
