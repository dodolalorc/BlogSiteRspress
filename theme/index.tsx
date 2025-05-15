import Theme, { Search } from 'rspress/theme';
import DoHomeLayout from './layouts/DoHomeLayout';
import { Tag, HomeProps } from './types';


const HomeLayout = () => {
  const myTags = [
    {}
  ] as Tag[];
  const props:HomeProps = {
    name: 'My Blog',
    text: 'Welcome to my blog!',
    tagline: 'Sharing my thoughts and experiences.',
    avatar: 'https://example.com/avatar.jpg',
    tags: myTags,
  }
  return <DoHomeLayout {...props}  />;
}

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from 'rspress/theme';