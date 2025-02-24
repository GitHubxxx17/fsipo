/// <reference types="vite/client" />

declare module "fispo:site-data" {
  import type { UserConfig } from "shared/types";
  const siteData: UserConfig;
  export default siteData;
}

declare module "fispo:routes" {
  import type { Route } from "node/plugins/plugin-routes";
  export const routes: Route[];
}
