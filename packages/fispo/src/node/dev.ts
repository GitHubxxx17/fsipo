import { createServer as createViteDevServer } from "vite";
import { PACKAGE_ROOT } from "./constants";
import { resolveConfig } from "./config";
import { createVitePlugins } from "./plugins/vitePlugins";

export async function createDevServer(
  root = process.cwd(),
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, "serve", "development");
  return createViteDevServer({
    root: PACKAGE_ROOT,
    plugins: await createVitePlugins(config, restartServer),
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
