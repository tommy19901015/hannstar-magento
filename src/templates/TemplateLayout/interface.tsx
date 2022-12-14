import { I_ArticleList2 } from "../../component/articleList2/interface";
import { I_GraphicsCard } from "../../component/graphicsCard/interface";
import { I_Video } from "../../component/video/interface";
import { I_TabsModule } from "../../component/tabProductList/interface";
import { I_SustainabilityBlock } from "../../component/sustainabilityBlock/interface";
import { I_AboutBlock } from "../../component/aboutBlock/interface";

import {
  I_Banner,
  I_Breadcrumbs,
  I_TitleContent,
  I_GraphicsModel,
  I_TitleContentBanner,
  I_TitleContentImgGrid,
  I_MessageCenterPlatform,
} from "../../types/base";


export enum I_BlockLayout {
  FullLayout,
  Default
}
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
  | I_AboutBlock
  | I_MessageCenterPlatform
  | I_Video;
export interface I_TemplateLayout {
  props: {
    type: string;
    data: I_DataModel[];
    layoytBgColor?:string;
  }[];
  handleSustainabilityTab?: any;
  handleAboutTab?: any;
}
