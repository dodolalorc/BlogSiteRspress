
export interface Tag {
  name: string;
  count: number;
  color: string;
  icon: string;
  url: string;
  description: string;
}

export interface Action {
  text: string;
  link?: string;
  icon?: string;
  theme?: string;
}

export interface HomeProps {
  name: string;
  text: string;
  tagline: string;
  avatar: string;
  tags?: Tag[];
  actions?: Action[];
}

export interface FooterProps {
  enable?: boolean; // 是否启用
  copyright?: string; // 版权信息
  poweredBy?: string; // 网站技术信息
  since?: string; // 网站创立年份
  icp?: string;   // 网站备案信息
  license?: string; // 许可协议信息
  custom?: string; // 自定义信息
}