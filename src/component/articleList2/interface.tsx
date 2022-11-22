export interface I_Article {
  src?: string;
  title?: string;
  subTitle?: string;
  description?: string| string[];
  href?: string;
  index?: number;
}

export interface I_ArticleList2 {
  title: string;
  data: {
    catalog: string;
    articleDatas: I_Article[];
  }[];
}
