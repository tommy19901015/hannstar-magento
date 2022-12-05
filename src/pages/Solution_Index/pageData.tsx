import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
            src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/BANNER/Solutionmainpage__BANNER.jpg`,
            title: "方案系統及整合服務",
            text: "物聯網快速發展下，智慧產品也更加多元，透過豐富顯示資源與經驗，提供客戶整合性方案服務",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
            title: "智慧零售",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
            title: "智能建築",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
            title: "交通運輸",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_20F17_cfe6j6bk57.png",
            title: "智慧育樂",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png",
            title: "健康關懷",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png",
            title: "智能製造",
            href: "/",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "方案整合及系統服務",
            content:
              "在數位時待下物聯網應用蓬勃發展，應用在不同層面，如家電，汽車，智慧家庭裝置等，觸控顯示器與嵌入式系統成為密不可分的整合式設計。因此瀚宇彩晶結合顯示面板資源與豐富的產業經驗推出嵌入系統整合方案服務，提供客戶不同領域多元需求的顯示器與嵌入硬件主板產品，另外附加GUI開發平台滿足各產業簡單快速的使用需求。"
            },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/DevelopmentProcess/DevelopmentProcess_Plan.png`,
            title: "階段1 : 產品發想",
            content: ["1.Demand Analysis", "2.Plan", "3.Confirm Content"],
          },
          {
            src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/DevelopmentProcess/DevelopmentProcess_Maintain.png`,
            title: "階段2 : 開發實作",
            content: ["1.Kick off", "2.Test & Check", "3.Optimize"],
          },
          {
            src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/DevelopmentProcess/DevelopmentProcess_Implement.png`,
            title: "階段3 : 量產維護",
            content: ["1.Production", "2.Maintain Contract"],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "六大應用",
            content: "",
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
                src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/Applications/SmartRetailling.jpg`,
                title: "智慧零售",
                text: "瀚宇彩晶方案產品協助零售業數位轉型，提升管理效率、宣傳力，更打造優質消費體驗。",
                href: "/",
                btnText: "Normal",
              },
              {
                src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/Applications/SmartBuilding.jpg`,
                title: "智能建築",
                text: "瀚宇彩晶方案產品整合圖形顯示與各種功能模組，快速實現家居產品智慧化，帶來智慧新生活。",
                href: "/",
                btnText: "Normal",
              },
              {
                src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/Applications/Transportation.jpg`,
                title: "交通運輸",
                text: "運用瀚宇彩晶方案產品，全面強化交通運輸的安全性與便利性。",
                href: "/",
                btnText: "Normal",
              },
              {
                src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/Applications/SmartEduatainment.jpg`,
                title: "智慧育樂",
                text: "通過瀚宇彩晶方案產品，快速開發寓教於樂的數位產品，陪伴孩子快樂學習。",
                href: "/",
                btnText: "Normal",
              },
              {
                src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/Applications/HealthCare.jpg`,
                title: "健康關懷",
                text: "瀚宇彩晶強大的顯示與功能方案，為創造智慧醫療與智能健康產品的最佳選擇。",
                href: "/",
                btnText: "Normal",
              },
              {
                src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/Applications/IIoT.png`,
                title: "智能製造",
                text: "瀚宇彩晶以具備先進顯示技術的方案產品，滿足工廠設備智慧化需求，加速建構智慧工廠。",
                href: "/",
                btnText: "Normal",
              },
            ],
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
