import type { RspressPlugin } from "@rspress/shared";

// import remarkRehype from "remark-rehype";
// import rehypeKatex from "rehype-katex";
// import remarkMath from "remark-math";

export interface KatexOptions {
  any?: Record<string, unknown>;
}

export function pluginKatex(options: KatexOptions = {}): RspressPlugin {
  return {
    // 插件名称
    name: "plugin-katex",

    builderConfig: {
      source: {
      },
      html: {
        scriptLoading: "defer",
        tags: [
          {
            tag: "link",
            attrs: {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css",
              integrity:
                "sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP",
              crossorigin: "anonymous",
            },
          },
          {
            tag: "script",
            attrs: {
              src: "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js",
              integrity:
                "sha384-cMkvdD8LoxVzGF/RPUKAcvmm49FQ0oxwDF3BGKtDXcEc+T1b2N+teh/OJfpU0jr6",
              crossorigin: "anonymous",
            },
          },
          {
            tag: "script",
            attrs: {
              src: "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js",
              integrity:
                "sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh",
              crossorigin: "anonymous",
              onload: "renderMathInElement(document.body);",
            },
          },
          // {
          //   tag: "script",
          //   head: false,
          //   append: true,
          //   children: `
          //     document.addEventListener("DOMContentLoaded", function() {
          //       renderMathInElement(document.body, {
          //         // customised options
          //         // • auto-render specific keys, e.g.:
          //         delimiters: [
          //             {left: '$$', right: '$$', display: true},
          //             {left: '$', right: '$', display: true},
          //             {left: '\\(', right: '\\)', display: false},
          //             {left: '\\[', right: '\\]', display: true}
          //         ],
          //         // • rendering keys, e.g.:
          //         throwOnError : false
          //       });
          //   });`,
          // },
        ],
      },
    },
    // 扩展 Markdown/MDX 编译能力
    // markdown: {
    //   // 启用 JS 版本的编译器以支持外部插件
    //   mdxRs: false,
    //   remarkPlugins: [
    //     // 添加自定义的 remark 插件
    //     [remarkMath, options],
    //   ],
    //   rehypePlugins: [
    //     // 添加自定义的 rehype 插件
    //     // @ts-ignore
    //     [rehypeKatex, options],
    //   ],
    // },
  };
}
