
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
