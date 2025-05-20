import type { RspressPlugin } from "@rspress/shared";
import type { HomeProps, FooterProps } from "@/theme/types";

// Extend the PageIndexInfo type
declare module "@rspress/shared" {
  interface PageIndexInfo {
    home?: HomeProps;
    footer?: FooterProps;
  }
}

export function pluginPageExtend(footer?: FooterProps): RspressPlugin {
  return {
    name: "rspress-page-extend",
    extendPageData(pageData) {
      if (footer?.enable) {
        pageData.footer = footer;
      }
    },
  };
}
