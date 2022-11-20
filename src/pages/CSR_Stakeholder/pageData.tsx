import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
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
                    title: "永續管理",
                    text: "追求成長與創新，深耕企業文化與核心價值，攜手利害關係人，透過價值鏈的延伸，實現永續經營的目標。",
                    textAlign: TextAlign.BottomLeft,
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
                            text: "企業永續",
                            href: "",
                        },
                        {
                          text: "永續管理",
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
                    title: "重大永續議題辨識流程",
                    content: "透過傾聽和蒐集利害關係人之想法和回饋，可以了解利害關係人對瀚宇彩晶的經營方向需要優先關注的重大議題，確保我們在實踐企業永續發展的道路方向上，可以納入利害關係人的聲音，使未來的營運與推動更加完善。",   
                  },
              ],
            },
            {
              type: "BannerBlock",
              data: [
                {
                  src: "https://fakeimg.pl/1000x700/?text=Image",
                  title: "",
                  text: "",
                  textAlign: TextAlign.BottomLeft,
                },
              ],
            },
            {
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "4. 確認與討論",
                    content: "透過重大性分析，我們鑑別出6項重大議題並呈報內部管理階層確認，由各ESG專案小組評估其完整性、影響範疇與邊界。",
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
              type: "BannerBlock",
              data: [
                {
                  src: "https://fakeimg.pl/1000x700/?text=Image",
                  title: "",
                  text: "",
                  textAlign: TextAlign.BottomLeft,
                },
              ],
            },
            {
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "利害關係人溝通",
                    content: "",
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

        ]
    }

    return PageType;
}

export default usePageData;
