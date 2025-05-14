import { PresetConfigMutator } from "rspress-plugin-devkit";

import remarkMath from "remark-math";
import type { Options as RemarkMathOptions } from "remark-math";

import rehypeKatex from "rehype-katex";
import type { Options as RehypeKatexOptions } from "rehype-katex";

import type { RspressPlugin } from "@rspress/shared";

export interface RspressPluginKatexOptions
  extends RemarkMathOptions,
    RehypeKatexOptions {}

export function pluginKatex(
  options: RspressPluginKatexOptions = {},
): RspressPlugin {
  const katexCss = require.resolve("katex/dist/katex.min.css");

  return {
    name: "rspress-katex",
    config(config, utils, isProd) {
      return new PresetConfigMutator(config).disableMdxRs().toConfig();
    },
    globalStyles: katexCss,
    markdown: {
      remarkPlugins: [[remarkMath, options]],
      // @ts-expect-error
      rehypePlugins: [[rehypeKatex, options]],
    },
  };
}
