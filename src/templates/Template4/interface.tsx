import { I_Banner } from "../../component/banner/interface"
import { I_Breadcrumbs } from "../../component/breadcrumbs/interface"
import { I_TitleContent } from "../../component/titleContent/interface"
import { I_GraphicsCard } from "../../component/graphicsCard/interface"
import { I_GraphicsImage } from "../../component/graphics4/interface"
import { I_Graphics2 } from "../../component/graphics2/interface"


export interface I_Template4 {
  banner?: I_Banner
  breadcrumbs?: I_Breadcrumbs
  module1?: {
    titleContent: I_TitleContent
    graphics2: I_Graphics2
  },
  module2?: {
    titleContent: I_TitleContent
    test: any
  },
  module3?: {
    titleContent: I_TitleContent
    banner: I_Banner
  },
  module4?: {
    titleContent: I_TitleContent
    graphicsCard: I_GraphicsCard
  },
  module5?: {
    titleContent: I_TitleContent
    graphicsCard: I_GraphicsCard
  },
  module6?: {
    titleContent: I_TitleContent
    graphicsImage: I_GraphicsImage
  },
}

