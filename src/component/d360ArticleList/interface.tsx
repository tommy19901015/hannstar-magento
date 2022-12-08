export interface I_D360Article {
  src: string;
  title: string;
  date: string;
  tag: string;
}

export interface I_D360ArticleList {
  data: I_D360Article[]
  articleUrl: string
}