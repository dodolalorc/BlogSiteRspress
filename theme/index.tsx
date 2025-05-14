import Theme, { Search } from 'rspress/theme';
import HomeLayout from './layouts/HomeLayout';

export default {
  ...Theme,
  HomeLayout,
};

// 重导出其他部分
export * from 'rspress/theme';