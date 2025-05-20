import type { RspressPlugin } from "@rspress/shared";
import path from "node:path";

export function pluginFooterInfo(): RspressPlugin {
  const componentPath = path.join(__dirname, "../components/common/globleFooter/globleFooter.tsx");
  return {
    name: "rspress-footer-info",
    globalUIComponents: [componentPath]
  };
}
