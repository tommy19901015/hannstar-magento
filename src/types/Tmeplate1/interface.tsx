import { I_Banner } from "../../component/banner/interface"
import { I_Breadcrumbs } from "../../component/breadcrumbs/interface"
import { I_TitleContent } from "../../component/titleContent/interface"
import { I_GraphicsLine } from "../../component/graphicsLine/interface"
import { I_Graphics3 } from "../../component/graphics3/interface"
import { I_GraphicsCard } from "../../component/graphicsCard/interface"
import { I_Video } from "../../component/video/interface"

type I_ModuleContent = {
    titleContent: I_TitleContent
    banner: I_Banner
  }

export enum TabEnum {
  CSRIndex,
  CSRED,
  CSRESG,
  CSRGP,
  CSRISMS,
  CSRMR,
  CSROSHA,
  CSRSGI,
  CSRSP,
  CSRSSCM,
  CSRTD
}
  

export interface I_Template1 {
  banner?: I_Banner
  breadcrumbs?: I_Breadcrumbs
  tabId?:number
  module1?: {
    titleContent: I_TitleContent
  },
  module2?: I_ModuleContent[],
  module3?: [
    {
      titleContent: I_TitleContent
      video: I_Video
    }
  ],
  module4?: {
    graphics3: any
  },
  module5?: [
    {
      titleContent: I_TitleContent
      video: I_Video
    }
  ],
  module6?: {
    titleContent: I_TitleContent
    graphicsCard: I_GraphicsCard
  }
}

