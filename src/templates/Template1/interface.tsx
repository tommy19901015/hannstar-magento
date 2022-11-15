import { I_Banner } from "../../component/banner/interface"
import { I_Breadcrumbs } from "../../component/breadcrumbs/interface"
import { I_TitleContent } from "../../component/titleContent/interface"
import { I_GraphicsLine } from "../../component/graphicsLine/interface"
import { I_Graphics3 } from "../../component/graphics3/interface"
import { I_GraphicsCard } from "../../component/graphicsCard/interface"
import { I_Video } from "../../component/video/interface"

export interface I_Template1 {
  banner?: I_Banner
  breadcrumbs?: I_Breadcrumbs
  module1?: {
    titleContent: I_TitleContent
  },
  module2?: [
    {
      titleContent: I_TitleContent
      banner: I_Banner
    }
  ],
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

