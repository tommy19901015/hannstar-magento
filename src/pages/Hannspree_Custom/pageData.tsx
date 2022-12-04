import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout =  {
        props:[
            {
                type: "FullBanner",
                data: [
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                    type: BannerType.Main,
                  },
                ],
            },
            {
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "客製化服務",
                    content: "瀚斯寶麗除了顯示紙整機標準品之外，更提供了產品客製化服務。在穿戴產品、平板或筆記型電腦系列，我們提供了四種客製化方案，提供您做選擇。讓瀚斯寶麗與您一起打造專屬於您的夢幻逸品。"
                  },
                  banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                  },
                },
              ],
            },
            {
              type: "FullBanner",
              data: [
                {
                  src: "https://fakeimg.pl/1000x700/?text=Image",
                  title: "產品類別說明",
                  text: "客製化方案產品類別包含：穿戴式產品、平板與筆記型電腦系列。",
                  textAlign: TextAlign.BottomLeft,
                },
              ],
          },
            {
              type: "TitleContentBlock",
              data: [
                {                     
                  title: "客製化方案",
                  content: ""
                },
              ],
          },
          {
            type: "TitleContentGraphicsCard",
            data: [
              {
                rowCount: 4,
                theme: GraphicsTheme.Theme1,
                data: [
                  {
                    src:"https://fakeimg.pl/100x100/?text=Image",
                    title:"品牌識別",
                    text:[
                      "．企業Logo絹印",
                      "．包裝與說明書設計",
                      "．錶帶顏色調整",
                    ],
                    href:"",
                    btnText:"",
                  },
                  {
                    src:"https://fakeimg.pl/100x100/?text=Image",
                    title:"外型設計",
                    text:[
                      "．整機外型設計",
                      "．整機材質選擇",
                    ],
                    href:"",
                    btnText:"",
                  },
                  {
                    src:"https://fakeimg.pl/100x100/?text=Image",
                    title:"軟體訂製",
                    text:[
                      "．整機內建功能規劃",
                      "．產品UI/UX設計",
                      "．內建應用程式挑選",
                      "．產品語言定義",
                    ],
                    href:"",
                    btnText:"",
                  },
                  {
                    src:"https://fakeimg.pl/100x100/?text=Image",
                    title:"全客製化服務",
                    text:[
                      "完整客製您的產品，可包含以下項目：",
                      "．螢幕尺寸與記憶體",
                      "．整機材質與工藝",
                      "．處理器",
                      "．電池容量與充電方式",
                      "．韌體開發與內建應用程式設計",
                    ],
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
