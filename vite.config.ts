import { defineConfig } from "vite";
import * as path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";

export const viteAliases = {
  "~common": path.resolve(__dirname, "./src/common"),
  "~ui-toolkit": path.resolve(__dirname, "./src/ui-toolkit"),
  "~features": path.resolve(__dirname, "./src/features"),
  "~global": path.resolve(__dirname, "./src/global"),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: viteAliases },
  plugins: [reactRefresh(), visualizer()],
});
