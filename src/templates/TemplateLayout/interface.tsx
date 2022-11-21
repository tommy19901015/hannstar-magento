//import { I_Banner } from "../../component/banner/interface";
//import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
//import { I_TitleContent } from "../../component/titleContent/interface";
import { I_ArticleList2 } from "../../component/articleList2/interface";
//import { I_Graphics3 } from "../../component/graphics3/interface";
import { I_GraphicsCard } from "../../component/graphicsCard/interface";
import { I_Video } from "../../component/video/interface";
import { I_TabsModule } from "../../component/tabProductList/interface";

import { I_Banner, I_Breadcrumbs, I_TitleContent, I_GraphicsModel, I_TitleContentBanner } from "../../types/base";

export type I_DataModel = I_TabsModule | I_Banner | I_Breadcrumbs | I_TitleContent | I_ArticleList2 | I_GraphicsModel | I_GraphicsCard | I_TitleContentBanner | I_Video;
export interface I_TemplateLayout {
  props: {
    type: string;
    data: I_DataModel[];
  }[];
}
