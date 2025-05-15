import Theme from "rspress/theme";
import DoHomeLayout from "./layouts/DoHomeLayout";
import type { Tag, HomeProps } from "./types";

const HomeLayout = () => {
  const myTags = [{}] as Tag[];
  const props: HomeProps = {
    name: "Hi Here!",
    text: "This is dodola's blog",
    tagline: "Sharing my thoughts and experiences.",
    avatar: "/miku.png",
    tags: myTags,
  };
  return <DoHomeLayout {...props} />;
};

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from "rspress/theme";
