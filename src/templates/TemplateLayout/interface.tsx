import { I_ArticleList2 } from "../../component/articleList2/interface";
import { I_GraphicsCard } from "../../component/graphicsCard/interface";
import { I_Video } from "../../component/video/interface";
import { I_TabsModule } from "../../component/tabProductList/interface";
import { I_SustainabilityBlock } from "../../component/sustainabilityBlock/interface";

import {
  I_Banner,
  I_Breadcrumbs,
  I_TitleContent,
  I_GraphicsModel,
  I_TitleContentBanner,
  I_TitleContentImgGrid,
} from "../../types/base";

export type I_DataModel =
  | I_TabsModule
  | I_Banner
  | I_TitleContentImgGrid
  | I_Breadcrumbs
  | I_TitleContent
  | I_ArticleList2
  | I_GraphicsModel
  | I_GraphicsCard
  | I_TitleContentBanner
  | I_SustainabilityBlock
  | I_Video;
export interface I_TemplateLayout {
  props: {
    type: string;
    data: I_DataModel[];
  }[];
  handleSustainabilityTab?: any;
}
