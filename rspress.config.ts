import * as path from "node:path";
import { pluginLastUpdated } from "@rspress/plugin-last-updated";
import { defineConfig } from "rspress/config";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "Dodolalorc",
	icon: "/icon.png",
	logo: {
		light: "/icon.png",
		dark: "/icon.png",
	},
	builderConfig: {
    html: {
      tags: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
						integrity: "sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP",
						crossorigin: "anonymous"
          },
        },
        {
          tag: 'script',
          attrs: {
						src: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js',
						integrity: "sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh", crossorigin: "anonymous",
						onload: "renderMathInElement(document.body);"
					},
        },
      ],
    },
  },
	plugins: [pluginLastUpdated()],
	route: {
		exclude: [],
	},
	globalStyles: path.join(__dirname, "src", "styles", "index.css"),
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
