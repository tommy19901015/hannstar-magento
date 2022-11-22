import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
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
                    title: "Paper Display microT 顯示紙技術",
                    text: "",
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
                          text: "首頁",
                          href: "",
                      },
                      {
                        text: "顯示紙技術",
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
                    title: "microT微反結構設計，功耗減少50%",
                    content: "顯示紙microT以創新的微反結構設計，兼具反射式與穿透式顯示器的優點，可以同時利用環境光源的反射光，與背光模組的穿透光，在戶外環境與室內空間同樣呈現鮮豔亮麗的顯示畫面，讓顯示科技應用場景不再受到多變環境的限制。"
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
                    title: "",
                    content: "顯示紙microT在陽光下不需開啟背光模組，入射光源被反射並用於顯示TFT畫面內容；在室內環境，可依據環境光動態調整背光源亮度，較傳統TFT顯示器減少50%耗電量，大幅延長使用時間與續航力。"
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
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "高明室對比(ACR)，陽光下清晰可視",
                    content: "顯示器的對比是評估顯示品質的一個重要參數，傳統顯示器規格標示為在黑暗環境下的對比值(暗室對比)，與顯示器大部分都是在有外界光照明的環境下使用的狀況不符。明室對比（ACR, Ambient Contrast Ratio）係指顯示器在明亮光線下，螢幕所呈現的畫質色彩對比，反映液晶顯示器在不同環境光源時的表現狀態，更忠實呈現顯示器在真實環境內之影像表現。"
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
                    title: "",
                    content: "瀚宇彩晶透過獨家的A.B.T.顯示技術(Argentum Birefringent Technology)，有效收集環境光源，使明室對比度維持 30，無論是在一般日光燈的室內環境，甚至強烈太陽光直射的戶外看板，都能維持高對比畫質，呈現鮮豔亮麗、清晰可視的畫面效果。"
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
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "Mini LED全彩螢幕，創造全新視覺饗",
                    content: "除運用像素設計搭配8bit色深，使顯示色彩可高達16.7M外，另採用Mini LED背光模組，搭配分區調光（Local Dimming）設計，可達到百萬等級動態對比，呈現黑白分明、高色彩飽和度的影像畫質。此外，透過暗態輝度調整，可降低背光功耗，達到省電節能的效益。"
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
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "廣溫顯示技術，滿足高低溫操作需求",
                    content: "顯示紙採用與液晶相關廠商共同研發的特殊材料及寬溫規格的IC，使其在極端溫度（-40℃~85℃）下，仍可維持正常顯示，適用於工控、筆電、平板等會於高低溫環境下使用的裝置。"
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
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "刷新率技術革新，支持全彩影片流暢播放",
                    content: "瀚宇彩晶革新開發的刷新率技術，讓顯示紙具備更快的顯示反應時間，60Hz頻率之動畫，支援影片流暢播放。另透過顯示紙省電特性，使用者可享受更長時間、優質的影音觀賞，提供筆電、平板等創新節能的解決方案。"
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
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "低藍光，降低眼睛疲勞",
                    content: "顯示紙採用微反射設計，有效降低穿透顯示器螢幕的藍光量，減少藍光所引起的黃斑部病變或眼睛疲勞。同時以抗眩光、防畫面閃爍的技術，提供低藍光與減少眼睛傷害的數位閱讀體驗，適用於長時間使用的平板、筆記型電腦、醫療用顯示器等產品應用。"
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
              type: "TitleContentBanner",
              data: [
                {
                  titleContent: {
                    title: "Painting Like創新結構，讓畫面躍然紙上",
                    content: "瀚宇彩晶以創新的CNP技術(Crystal Nano Pixel Technology)，改變傳統面板表面微結構設計，立體凸出每一格畫素，並透過降低反射率設計避免散射光的產生，可達到霧化度(Haze)>70%，膜面反射R< 1%，相較傳統防眩光膜更能有效降低環境光源的干擾，精準呈現高對比與高飽和的色調，完美展現彷彿油畫般的立體色彩，豐富生活中無所不在的視覺體驗。"
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
              ]
            },
        ]
    }

    return PageType;
}

export default usePageData;
