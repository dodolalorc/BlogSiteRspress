import * as path from "node:path";
import { pluginLastUpdated } from "@rspress/plugin-last-updated";
import { defineConfig } from "rspress/config";
import mermaid from "rspress-plugin-mermaid";
import readingTime from "rspress-plugin-reading-time";
import { pluginSass } from "@rsbuild/plugin-sass";

import { pluginKatex } from "./src/plugins/Katex";
import { pluginPageExtend } from "./src/plugins/PageExtend";
import { pluginFooterInfo } from "./src/plugins/FooterInfo";

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
    pluginPageExtend({
      enable: true,
      copyright: '2023 <i className="i-hugeicons-at" /> dodola\'s Blog. All rights reserved.',
      poweredBy: 'Powered by <a href="https://rspress.dev" target="_blank" rel="noreferrer">Rspress</a>',
      since: '2023',
      icp: '<p class="beian"><img class="beian-icon" src="/img/icons/govbeian.png"><a class="gov" href="https://beian.mps.gov.cn/#/query/webSearch?code=33010902003733" rel="noreferrer" title="浙公网安备33010902003733" target="_blank">浙公网安备33010902003733</a><a class="icp" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" title="浙ICP备2023048052号-1">浙ICP备2023048052号-1</a></p>',
      license: '<a rel="license external nofollow noopener noreffer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
    }),
    pluginFooterInfo(),
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
