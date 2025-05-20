import type { RspressPlugin } from "@rspress/shared";
import type { HomeProps, FooterProps } from "../../theme/types";
import path from "node:path";

// Extend the PageIndexInfo type to include the 'home' property
declare module "@rspress/shared" {
  interface PageIndexInfo {
    home?: HomeProps;
    footer?: FooterProps;
  }
}

export function pluginPageExtend(footer?: FooterProps): RspressPlugin {
  const componentPath = path.join(__dirname, "../components/common/globleFooter/globleFooter.tsx");
  return {
    name: "rspress-page-extend",
    globalUIComponents: [componentPath],
    extendPageData(pageData) {
      if (footer?.enable) {
        pageData.footer = footer;
      }
    },
  };
}
