import type { RspressPlugin } from "@rspress/shared";
import type { HomeProps } from "../../theme/types";

// Extend the PageIndexInfo type to include the 'home' property
declare module "@rspress/shared" {
  interface PageIndexInfo {
    home?: HomeProps;
  }
}

export function pluginPageExtend(): RspressPlugin {
  return {
    name: "rspress-page-extend",
    extendPageData(pageData, isProd) {
      pageData.home = {} as HomeProps;
    },
  };
}
