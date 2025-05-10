import * as path from "node:path";
import { pluginLastUpdated } from "@rspress/plugin-last-updated";
import { pluginPlayground } from "@rspress/plugin-playground";
import { defineConfig } from "rspress/config";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "Dodolalorc",
	icon: "/icon.png",
	logo: {
		light: "/icon.png",
		dark: "/icon.png",
	},
	mediumZoom: {
		selector: ".rspress-doc img",
	},
	plugins: [pluginPlayground(), pluginLastUpdated()],
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
