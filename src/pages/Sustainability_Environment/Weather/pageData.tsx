import { useTranslation } from "react-i18next";
import { TextAlign } from "../../../component/banner/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";
import { urlConfig } from "../../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/topbanner1_1.png`,
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
                text: "綠色創新",
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
            activeId: 2,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "氣候變遷風險管理",
              content: "面對全球暖化及極端氣候帶來可能的營運衝擊，瀚宇彩晶過去已進行廠區的節能減碳，為進一步了解氣候變遷議題對瀚宇彩晶營運的影響，及強化公司對於氣候風險與機會的鑑別與因應，我們結合內部既有風險管理架構以及氣候相關財務揭露建議（TCFD）框架，由各項氣候風險與機會的對應部門，依據現況與趨勢進行重大氣候相關風險與機會辨識，完成辨識後共同討論擬定全公司氣候相關治理策略，並檢視各項因應議題之對應目標執行狀況，並由最高管理階層統籌監督相關事項運作。"
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/risk/image358.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "關鍵氣候風險與機會議題因應與管理",
              content: ""
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/risk/image363.png`,
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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/risk/image364.png`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
    ]
  }

  return PageType;
}

export default usePageData;
