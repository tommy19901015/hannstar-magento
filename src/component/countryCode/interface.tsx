export interface I_Article {
  src: string;
  title: string;
  date: string;
  description: string;
  href: string;
  index?: number;
}

export interface I_ArticleList2 {
  title: string;
  data: {
    catalog: string;
    articleDatas: I_Article[];
  }[];
}
