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
                    title: "Paper Display 顯示紙技術",
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
                    title: "無背光模組設計，達到超低功耗",
                    content: "顯示器的功耗大多來自背光模組，顯示紙透過ABT技術(Argentum Birefringent Technology)，全反射系列產品採用無背光模組設計，節省約85%的功耗，達到省電節能的效益。如下圖表1，相較於傳統顯示器，使用顯示紙可大幅降低顯示器功耗。"
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
                    content: "此外，相較於一般IC 不斷驅動畫面刷新頻率所產生較高功耗，Paper Display搭配最新研發的超低功耗IC，透過準靜態低頻率更新QSLFR技術(Quasi-Static Low Freq. Refresh)，於每秒刷新時，僅有1/4時間進行畫面驅動，其餘 3/4則處於休眠狀態，可大幅降低功耗，使功耗達到uW等級，讓產品功耗降低至0.05%，可使電池使用時間大幅延長。"
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
                    title: "採用高反射率金屬材料，強光下可視性佳",
                    content: "傳統顯示器倚靠背光模組光源來呈現顯示畫面。於戶外強光或陽光直射環境下，因表面反射強度大於顯示器穿透光的強度，導致畫面出現白霧現象，看不清顯示資訊。如提高顯示器亮度，雖可改善可視性，但因背光電流提升，不僅易造成顯示器有發燙、過熱的問題。"
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
                    content: "顯示紙可完美解決傳統顯示器於陽光下可視性差、顯示器過熱、耗電等問題。顯示紙採用高反射率金屬材料，放置於液晶層後方，透過反射環境光呈現畫面顯示，無背光模組的設計，有效避免了傳統顯示器發燙、過熱等問題。"
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
                    title: "全彩顯示，豐富視覺體驗",
                    content: "顯示紙創新的彩色顯示技術，透過彩色濾光片陣列實現真實的全彩解析度，除有黑白兩階調 (一個次像素設計)，搭配1bit 和 8bit色深，可顯示2灰階和256灰階．另有與紅、黃、綠、藍搭配所組成的兩個次像素設計，可呈現65,536種顏色．此外，由包含三原色-紅綠藍三個次像素所組成的像素設計，搭配8bit色深，使顯示色彩可高達16.7M，實現全彩顯示，可供客戶在產品應用上具備多元選擇，為使用者帶來視覺饗宴。"
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
                    title: "寬溫顯示技術，克服戶外極端溫度",
                    content: "液晶擁有特殊物理和光學特性，於常溫(25℃)下相態介於固態及液態之間。在低溫環境下，液晶反應時間會趨於緩慢，會逐漸趨於固態(結晶); 而在高溫環境下，液晶會變質，導致顯示器畫面出現瑕疵。顯示紙採用與液晶相關廠商共同研發的特殊材料及寬溫規格的IC，使其在極端溫度（-40℃~85℃）下，仍可維持正常顯示，適用於工控、車載、電子標籤等於極端溫度環境下運作的裝置。"
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
                    title: "顯示響應時間短，動態顯示無殘影延遲",
                    content: "瀚宇彩晶革新開發的刷新率技術，使用特殊液晶材料及最佳化的液晶合參數設計，讓顯示紙具備更快的顯示反應時間，反應時間<7ms，適合影片播放及動態訊息呈現，操作畫面及翻頁動作更為流暢，完美呈現無延遲的書寫閱讀體驗與無殘影的銳利影像。提供電子閱讀器、公車時刻表、戶外廣告看板等新穎創新的解決方案。"
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
                    title: "自然光顯示，守護視覺健康",
                    content: "不同於傳統LCD或OLED顯示器，以背光源或自發光的光線直射使用者的眼睛，導致藍光引起的黃斑部病變與視覺疲勞等問題。顯示紙透過全反射式無背光源的設計，自然反射外界環境下的全頻譜的光源，減少穿透顯示器螢幕與表面反射的藍光量，符合國際標準Hazardous Blue Light Ratio <35%的護眼規範，提供低藍光與視覺健康的數位閱讀體驗。顯示紙同時加入抗眩光、防畫面閃爍的技術，可適用於長時間使用的平板、筆記型電腦、醫療用顯示器等產品應用。"
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
                    title: "Paper Like特性，前所未見的閱讀書寫質感",
                    content: "顯示紙透過獨家的Soft Texture Paper(STP)技術，藉由顯示螢幕膜材表面的微結構設計，結合彩色光阻材料與高透膜的特殊塗佈處理，達到靜摩擦力係數>0.3fs，霧化度(Haze)>30%的類紙感與低鏡面反射感，提供使用者不論是閱讀或是書寫均有更接近紙張質感的體驗。"
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
