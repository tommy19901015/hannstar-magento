import { I_Banner } from "../../component/banner/interface";
import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { I_TitleContent } from "../../component/titleContent/interface";
import { I_ArticleList2 } from "../../component/articleList2/interface";
import { I_Graphics3 } from "../../component/graphics3/interface";
import { I_GraphicsCard } from "../../component/graphicsCard/interface";
// import {I_ArticleList2} from "../../component/tabProductList/interface"

export interface I_TemplateLayout {
  props: {
    type: string;
    data: any;
  }[];
}
