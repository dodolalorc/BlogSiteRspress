import Theme from "rspress/theme";
import DoHomeLayout from "./layouts/DoHomeLayout";
import type { Tag, HomeProps } from "./types";

const HomeLayout = () => {
  return <DoHomeLayout />;
};

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from "rspress/theme";
