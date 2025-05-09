import * as path from "node:path";
import { defineConfig } from "rspress/config";
import { pluginPlayground } from '@rspress/plugin-playground';


export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Dodolalorc",
  icon: "/icon.png",
  logo: {
    light: "/icon.png",
    dark: "/icon.png",
  },
  outDir: path.join(__dirname, "public"),
  plugins: [
    pluginPlayground(),
  ],
  route: {
    exclude: [],
  },
  globalStyles: path.join(__dirname, 'src', 'styles', 'index.css'),
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/dodolalorc",
      },
    ],
  },
});
