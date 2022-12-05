import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout =  {
        props:[
            {
                type: "FullBanner",
                data: [
                  {
                    src: `${urlConfig().s3Url}/Image/solution/ProductsandApplications/ProductsandApplications_BANNER.png`,
                    title: "Sustainable Supply Chain",
                    text: "HannStar is committed to provide a better environment for our next generation. We obey the green regulations to achieve the goal.",
                    textAlign: TextAlign.BottomLeft,
                    type: BannerType.Main,
                  },
                ],
            },
            {
                type: "BreadcrumbsBlock",
                data: [
                  {
                    title: "",
                    breadcrumbsLink: [
                        {
                            text: "首頁",
                            href: "",
                        },
                        {
                          text: "訊息中心",
                          href: "",
                        },
                        {
                          text: "投資人關係",
                          href: "",
                        },
                    ],
                  },
                ],
            },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "方案產品與應用",
                    content: "作為液晶面板行業的領導者，瀚宇彩晶致力於提供綠色產品。我們協助我們的合作夥伴持續運營，因為我們的合作夥伴是提供優質產品的關鍵部分。",   
                  },
              ],
            },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "方案產品",
                    content: ""
                  },
              ],
            },
            {
                type:"SustainabilityGraphics3",
                data:[
                  {
                    src: `${urlConfig().s3Url}/Image/solution/ProductsandApplications/ProductsandApplications_DisplayBoard.png`,
                    title: "顯示板(人機介面)",
                    content:"顯示板方案能解決客戶各種人機介面顯示的需求， 除透過內建底層韌體與UI物件驅動面板顯示器外， 更讓開發者通過簡易設定即可對物件進行控制， 還具備可擴充的記憶體插槽配置，滿足多樣的應用需求。"
                    },
                  {
                  src: `${urlConfig().s3Url}/Image/solution/ProductsandApplications/ProductsandApplications_Converterboard.png`,
                  title: "連接板(轉板)",
                  content:"無論新規格還是舊規格的產品， 或者低分辨率還是高分辨率的顯示器， 彩晶提供客戶簡單方便轉接板， 滿足客戶多樣接口顯示面器的連接需求。 相關規格 RGB, MIPI, SPI, LVDS..."
                },
                  {
                    src: `${urlConfig().s3Url}/Image/solution/ProductsandApplications/ProductsandApplications_BANNER.png`,
                    title: "客製化服務",
                    content:"彩晶擁有豐富的顯示整合方案及供應鏈資源， 可依客戶不同的應用需求提供客製化服務， 協助客戶加速回應市場需求。"
                  }
                ]
            },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "方案應用",
                    content: ""
                  },
              ],
            },
            {
              type: "TitleContentGraphicsCard",
              data: [
                {
                  rowCount: 3,
                  theme: GraphicsTheme.Theme1,
                  data: [
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"智慧零售",
                      text:"瀚宇彩晶方案產品協助零售業數位轉型，提升管理效率、宣傳力，更打造優質消費體驗。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"智能建築",
                      text:"瀚宇彩晶方案產品整合圖形顯示與各種功能模組，快速實現家居產品智慧化，帶來智慧新生活。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"交通運輸",
                      text:"運用瀚宇彩晶方案產品，全面強化交通運輸的安全性與便利性。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"智慧育樂",
                      text:"通過瀚宇彩晶方案產品，快速開發寓教於樂的數位產品，陪伴孩子快樂學習。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"健康關懷",
                      text:"瀚宇彩晶強大的顯示與功能方案，為創造智慧醫療與智能健康產品的最佳選擇。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"智能製造",
                      text:"瀚宇彩晶以具備先進顯示技術的方案產品，滿足工廠設備智慧化需求，加速建構智慧工廠。",
                      href:"",
                      btnText:"",
                    },
                  ],
                }
              ]
            },
        ]
    }

    return PageType;
}

export default usePageData;
