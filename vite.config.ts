import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import preact from "@preact/preset-vite";
import vike from "vike/plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [preact(), svgr(), vike({ prerender: true })],
});
