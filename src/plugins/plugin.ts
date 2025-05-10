import * as path from "node:path";
import type { RspressPlugin } from "@rspress/shared";

export function pluginForDoc(): RspressPlugin {
	return {
		// 插件名称
		name: "plugin-for-doc",
		// 扩展 Markdown/MDX 编译能力
		markdown: {
			// 启用 JS 版本的编译器以支持外部插件
			// mdxRs: false,
			remarkPlugins: [
				// 添加自定义的 remark 插件
			],
			rehypePlugins: [
				// 添加自定义的 rehype 插件
			],
			globalComponents: [
				// 为 MDX 注册全局组件
			],
		},
	};
}
