export interface I_D360Article2 {
  src: string;
  title: string;
  date: string;
  tags?: [];
  description?: string;
  articleId: string;
}

export interface I_D360ArticleList2 {
  data: I_D360Article2[];
  showQuantity?: number;
}
