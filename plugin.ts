import type { RspressPlugin } from '@rspress/shared';
import path from 'path';

export function pluginForDoc(): RspressPlugin {
  // 组件路径
  const componentPath = path.join(__dirname, 'components', 'MyComponent.tsx');
  return {
    // 插件名称
    name: 'plugin-comp',
    // 全局组件的路径
    globalUIComponents: [componentPath],
  };
}