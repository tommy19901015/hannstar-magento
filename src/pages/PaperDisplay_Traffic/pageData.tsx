import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/topbanner.jpg`,
            title: "交通運輸智慧移動",
            text: "",
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
                text: "顯示紙",
                href: "",
              },
              {
                text: "交通運輸智慧移動",
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
            title: "顯示紙實現綠色交通智慧城市新未來",
            content: "透過提供安全、舒適、便利、具可及性的運輸路網與基礎建設，結合數據分析與行為偵測提升社會大眾的交通運輸使用效率，是推動綠色智慧交通的關鍵。根據比爾蓋茲《如何避免氣候災難》，交通運輸部門的溫室氣體排放量占全球總排放量的16%，如何結合科技創新與節能減碳的綠色智慧交通，是瀚宇彩晶的重要產品發展策略。結合主動運輸、大眾運輸、零碳運具等使用情境，透過顯示紙超低功耗設計加速交通運輸數位轉型，發展綜合性的運輸部門減碳行動方案，建構未來綠色智慧交通的基礎建設，進一步協助實現2050淨零碳排政策目標。",
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/banner1.jpg`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "智慧交通多元應用 顯示紙引領資訊革新",
            content: "智慧交通係藉由先進科技與管理，經由系統分析轉化成有用資訊，透過通訊系統溝通與連結，改善人、車、路之間互動關係，同時減少對環境影響。顯示紙超低功耗與戶外可視等技術，滿足停車管理系統、充電服務系統、智慧車聯及戶外顯示等多元需求，優化使用者體驗，也降低對環境的負面影響，讓交通運輸智慧移動更安全、環保、簡易。",
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
