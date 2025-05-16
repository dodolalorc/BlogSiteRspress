import Theme from "rspress/theme";
import DoHomeLayout from "./layouts/DoHomeLayout";
import type { Tag, HomeProps } from "./types";

const HomeLayout = () => {
  const myTags = [
    // {
    //   name: "前端",
    //   count: 1,
    //   icon: "frontend",
    //   url: "/tags/front_end/",
    //   description: "前端开发相关的内容",
    // },
  ] as Tag[];
  const props: HomeProps = {
    name: "Hi Here!",
    text: "This is dodola's blog",
    tagline: "Sharing my thoughts and experiences.",
    avatar: "/miku.png",
    tags: myTags,
    actions: [
      {
        text: "✨ 关于我",
        link: "/about/",
        theme: "brand",
      },
      {
        text: "🚀 我的 GitHub",
        link: "https://github.com/dodolalorc",
        theme: "alt",
      },
    ],
  };
  return <DoHomeLayout {...props} />;
};

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from "rspress/theme";
