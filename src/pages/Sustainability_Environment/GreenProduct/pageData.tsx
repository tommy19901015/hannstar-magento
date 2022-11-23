import { useTranslation } from "react-i18next";
import { TextAlign } from "../../../component/banner/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";

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
                text: "綠色產品",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityTab",
        data: [
          {
            type: "environment",
            activeId: 1,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "綠色產品",
            content: "2021年瀚宇彩晶所有產品線皆100% 符合產品無有害物質相關法規及客戶規範、100%符合第三方綠色檢測，且持續維持客戶要求造成危害物質（HSF）客訴件數0件。",
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src: "https://fakeimg.pl/100x100/?text=Image" },
              { src: "https://fakeimg.pl/100x100/?text=Image" },
              { src: "https://fakeimg.pl/100x100/?text=Image" },
              { src: "https://fakeimg.pl/100x100/?text=Image" },
            ]
          }
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "綠色產品",
              content: "2021年瀚宇彩晶所有產品線皆100% 符合產品無有害物質相關法規及客戶規範、100%符合第三方綠色檢測，且持續維持客戶要求造成危害物質（HSF）客訴件數0件。"
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
          {
            titleContent: {
              title: "低碳健康產品開發主軸",
              content: "瀚宇彩晶致力於與客戶、供應商攜手提供護眼、節能、健康、少污染、低資源耗用等低碳轉型的產品，以創新技術策略連結至供應商全面開發新材料，提供優質且自然真實的使用體驗。"
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
          {
            titleContent: {
              title: "顯示紙 (Paper Display)",
              content: "利用反射式面板技術達到無背光、低耗能的綠色概念產品。無背光的設計，減少對眼睛的傷害；於陽光下可視、更省電，可廣泛應用於數位零售、數位教育 、交通運輸 、運動健康或智慧製造，提供對人與環境都更友善的顯示產品選擇。"
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          }
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
