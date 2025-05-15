export interface Tag {
  name: string;
  count: number;
  color: string;
  icon: string;
  url: string;
  description: string;
}

export interface HomeProps {
  name: string;
  text: string;
  tagline: string;
  avatar: string;
  tags: Tag[];
}
