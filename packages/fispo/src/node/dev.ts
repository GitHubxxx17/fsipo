import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugins/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { PACKAGE_ROOT } from "./constants";

export async function createDevServer(root = process.cwd()) {
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
