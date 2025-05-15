import Theme, { Search } from 'rspress/theme';
import DoHomeLayout from './layouts/DoHomeLayout';
import { Tag } from './types';


const HomeLayout = () => {
  const myTags = [
    {}
  ] as Tag[];
  return <DoHomeLayout name="dodola" avatar="/miku.png" tags={myTags} text="123" tagline='1234' />;
}

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from 'rspress/theme';