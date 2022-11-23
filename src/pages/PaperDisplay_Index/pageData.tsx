import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "顯示紙",
            text: "Paper Display",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
            title: "顯示紙技術",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
            title: "顯示紙應用",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
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
              "瀚宇彩晶為保持企業永續競爭力及秉持環境保護願景，全新開發兼具創新和環境友善的顯示紙產品。顯示紙採用高反射率金屬材料，可達到戶外強光下清晰可視; 其無背光模組設計，可大幅降低功耗（節省約80~90%）。另運用CNP(Crystal Nano Pixel) 與 STP (Soft Texture Paper) 技術，讓顯示紙的閱讀、書寫有如真實紙張的體驗感。此外，顯示紙也可支持全彩 (16.7百萬色) 、影片播放、寬溫顯示 (-40℃~85℃)、無藍光護眼特性，提供優質影像品質，豐富視覺饗宴。顯示紙除產品設計上較傳統顯示器更省電節能，在材料、製程、物流包材上，也致力於減少產品碳足跡與實踐永續理念，協助客戶打造更環保節能的產品，一同共創綠色未來。",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "顯示紙特性",
            content:
              "顯示紙以環境永續之節能設計概念出發，具備戶外可視清晰護眼、超低功耗強韌續航、寬溫設計征服極境等顯示特性，於戶外強光和極端溫度下仍維持清晰可讀、正常顯示 ; 另兼具貼近真實紙感書寫與繪畫體驗。",
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "節能設計環境永續",
            text: "綠色供應商、綠色產品設計、綠色製程、環保物流與包材。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "戶外可視清晰護眼",
            text: "顯示紙利用環境光反射方式實現畫面顯示",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "超低功耗強韌續航",
            text: "顯示紙無背光、低刷新率設計，達到省電。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "真實紙感體驗",
            text: "透過獨家Soft Texture Paper(STP)技術，打造貼近真實紙張體驗感。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "寬溫設計征服極境",
            text: "顯示紙在極端溫度（-30℃~80℃）下，仍維持正常顯示。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },

      {
        type: "TitleContentBlock",
        data: [
          {
            title: "產品應用",
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
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "智慧零售",
                text: "",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "智慧育樂",
                text: "透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "交通運輸",
                text: "透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "智能建築",
                text: "透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "健康關懷",
                text: "透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "智能製造",
                text: "透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                href: "/",
                btnText: "了解更多",
              },
            ],
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
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "產品查詢",
                text: "結合平台大數據運行，提供多元化產品，以符合客戶需求",
                href: "",
                btnText: "",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "客製化服務",
                text: "提供客戶專案報價服務",
                href: "",
                btnText: "",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "方案整合",
                text: "一站式方案整合服務，提供嵌入式主板、顯示器與UI設計服務",
                href: "",
                btnText: "",
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
