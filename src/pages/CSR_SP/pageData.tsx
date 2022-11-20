import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";


function usePageData() {
    const { t } = useTranslation();

    const PageType: I_TemplateLayout = {
        props: [
          {
            type: "FullBanner",
            data: [
              {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "綠色創新",
                text: "從綠色產品之設計、供應鏈到生產，秉持企業成長與生態環境共榮的信念，厚植綠色管理於日常營運。",
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
                        text: "永續生產",
                        href: "",
                    },
                ],
              },
            ],
          },
          {
            type: "TitleContentBanner",
            data: [
                {
                    
                    titleContent: {
                        title: "2021年瀚宇彩晶環境足跡",
                        content: "彩晶推動高效能、低汙染的綠色生產，達到企業獲利與環境永續的雙贏目標。面對全球暖化及極端氣候帶來可能的營運衝擊進行廠區的節能減碳，並揭露2021年瀚宇彩晶環境足跡。"
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
            type:"SustainabilityGraphics3",
            data:[]
          }
        ],
      };


    return PageType;
}

export default usePageData;
