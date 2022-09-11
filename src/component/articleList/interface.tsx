export interface I_Article {
  idx?: number;
  category: string;
  src: string;
  title: string;
  content: string;
  href: string;
  date: string;
  views: string;
}

export interface I_Props {
  data: I_Article[];
}
