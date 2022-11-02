import { I_Banner } from "../../component/banner/interface"
import { I_Breadcrumbs } from "../../component/breadcrumbs/interface"
import { I_TitleContent } from "../../component/titleContent/interface"
import { I_ArticleList2 } from "../../component/articleList2/interface"
import { I_Graphics3 } from "../../component/graphics3/interface"
import { I_GraphicsCard } from "../../component/graphicsCard/interface"
// import {I_ArticleList2} from "../../component/tabProductList/interface"

export interface I_Template3 {
  banner?: I_Banner
  breadcrumbs?: I_Breadcrumbs //banner
  module1?: {
    titleContent: I_TitleContent
    banner: I_Banner
  },
  module2?: {
    titleContent: I_TitleContent
    // graphics3: I_Graphics3[]
    graphics3: any
  },
  module3?: {
    titleContent: I_TitleContent
    graphicsCard: I_GraphicsCard
  },
  module4?: {
    articleList2: I_ArticleList2
  },
  module5?: {
    titleContent: I_TitleContent
    tabProductList: any
  },
  module6?: any
}

