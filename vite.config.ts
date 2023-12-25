import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [tsconfigPaths(), preact(), svgr()],
});
