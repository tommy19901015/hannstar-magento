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
            src:  `${urlConfig().s3Url}/Image/paperdisplay/index/topbanner.jpg`,
            title: "顯示紙",
            text: "Paper Display",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/Technologyicon.png`,
            title: "顯示紙技術",
            href: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/Application_icon.png`,
            title: "顯示紙應用",
            href: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/Greensupplychainicon.png`,
            title: "綠色供應鏈",
            href: "/",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "關於顯示紙",
            content:
              `永續發展與淨零碳排已成為全球共同追求的目標，瀚宇彩晶秉持保護環境守護綠色地球為理念，全新開發環境友善的創新「顯示紙」產品。

              「顯示紙」採用 A.B.T (Argentum Birefringent Technology) 顯示技術，在戶外強光下畫面依然清晰可視，且可達到 16.7M 自然全彩無間斷動態顯示。在正常環境光源下，搭配自主開發的超低功耗 IC，與傳統顯示器最高可節省約 80-90% 功耗，達到節能省電並大幅度降低碳排放問題。另運用 C.N.P (Crystal Nano Pixel) 與 S.T.P (Soft Texture Paper) 技術，讓「顯示紙」的閱讀、書寫有如真實紙張的體驗感，同步讓眼睛可減少負擔降低傷害。
              
              「顯示紙」除產品設計上較傳統顯示器更省電節能，在材料、製程、物流包材上，也致力於減少產品碳足跡與實踐永續理念，協助客戶打造更環保節能的產品，一同共創綠色未來。
              
              `,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "顯示紙創新技術研發 啟動智慧城市節能減碳新時代",
            content:
              `智慧城市是透過數位化結合 5G、物聯網等技術達到數據傳遞，經由大數據分析而達到智慧化。智慧城市的發展，智慧裝置溝通媒介主要透過顯示屏幕，如何選擇節能減碳創新顯示產品，顯示紙產品分為六大應用領域從產品使用情境出發，以循環經濟理念建構節能減碳智慧城市創新應用，開創綠色創新經濟新價值。
              `,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/banner_smarttransportation.jpg`,
            title: "交通運輸智慧移動",
            text: `整合顯示紙導入城際公路與都市道路管理系統，即時資訊運輸資料傳遞進而增進運輸系統的安全，效率及舒適性，以顯示科技實踐環境永續與綠色運輸。`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/banner_smart_building.jpg`,
            title: "智慧建築環境打造",
            text: `顯示紙在建築聯網應用中更添色彩，提供未來建築的便利與安全選擇。協助智慧建築相關產品於不斷更新的應用裡顯示出多種可能性，善盡企業友善環境責任。
            `,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/banner_smartretailing.jpg`,
            title: "智慧零售創新商模",
            text: `透過低碳顯示紙聯網應用，協助傳統的產品銷售數位轉型，整合數據效益與服務模式，為消費者創造即時、高互動的新興體驗。
            `,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/banner_smartedutainment.jpg`,
            title: "智慧育樂沉浸體驗",
            text: `以顯示紙多螢幕多裝置設備為人機互動介面，延展虛擬空間資訊即時反饋學習成效，圖像教材高彩度擬真效果完美呈現，提昇沉浸感與參與感。`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/banner_healthcare.jpg`,
            title: "健康關懷健康生活",
            text: `運動健康及智慧醫療等關懷物聯應用下，顯示紙系統打造下個世代健康關懷新世界。運動健康、智慧醫療等數據一目了然、多元豐富與便捷的溝通體驗。
            `,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/banner_IIoT.jpg`,
            title: "智能製造高效流程",
            text: `人機介面為物聯相關重要設備，透過顯示紙物聯產品，除可達到強固耐用外，更可提升裝置在室內外產品性能如低功耗、散熱、續航力等為，為智慧製造提升市場競爭力。
            `,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },

      {
        type: "TitleContentBlock",
        data: [
          {
            title: "提出需求",
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
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/productinquiry.jpg`,
                title: "產品查詢",
                text: `結合平台大數據運行，提供多元化產品，以符合客戶需求`,
                href: "/",
                btnText: "了解更多",
              },
              {
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/solutionintegration.jpg`,
                title: "客製化服務",
                text: `提供客戶專案報價服務`,
                href: "/",
                btnText: "了解更多",
              },
              {
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/customizationservice.jpg`,
                title: "方案整合",
                text: `一站式方案整合服務，提供嵌入式主板、顯示器與UI設計服務`,
                href: "/",
                btnText: "了解更多",
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
