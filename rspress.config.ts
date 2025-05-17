import * as path from "node:path";
import { pluginLastUpdated } from "@rspress/plugin-last-updated";
import { defineConfig } from "rspress/config";
import mermaid from "rspress-plugin-mermaid";
import readingTime from "rspress-plugin-reading-time";
import { pluginSass } from "@rsbuild/plugin-sass";

import { pluginKatex } from "./src/plugins/Katex";
import { pluginPageExtend } from "./src/plugins/PageExtend";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Dodolalorc",
  icon: "/icon.png",
  logo: {
    light: "/icon.png",
    dark: "/icon.png",
  },
  logoText: "Dodola",
  plugins: [
    pluginSass(),
    pluginLastUpdated(),
    mermaid({
      mermaidConfig: {
        theme: "forest",
      },
    }),
    readingTime({
      defaultLocale: "zh-CN",
    }),
    pluginKatex({
      strict: false,
    }),
    pluginPageExtend(),
  ],
  route: {
    exclude: [],
  },
  globalStyles: path.join(__dirname, "src", "styles", "index.css"),
  themeConfig: {
    enableScrollToTop: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/dodolalorc",
      },
    ],
  },
});
