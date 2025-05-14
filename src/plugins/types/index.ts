import type { Options as RemarkMathOptions } from "remark-math";
import type { Options as RehypeKatexOptions } from "rehype-katex";
export interface RspressPluginKatexOptions
  extends RemarkMathOptions,
    RehypeKatexOptions {}