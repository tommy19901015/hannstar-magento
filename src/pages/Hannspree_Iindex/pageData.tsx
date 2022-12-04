import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
            title: "",
            text: "",
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
            title: "Product",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
            title: "Solutions",
            href: "/",
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
            title: "Customization Design",
            href: "/",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "關於瀚斯寶麗",
            content:
              "Hannspree故事始於2002年，承接世界頂級LCD品牌Hannstar多年工藝及讓生活更精采的信念，創造「讓時尚融入您的智慧生活」的品牌理念，致力於結合科技與時尚，並實現您對智慧生活的想像。Hannspree願景是不斷創新，打造引領全球的時尚智慧精品，一同迎接智慧生活的未來。",
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "顯示紙整機產品",
            content:
              "以Paper Display顯示紙為面板技術核心，設計手錶、平板與筆記型電腦等系列產品。強調陽光下可視、護眼、低功耗、多媒體播放等特色，讓你不論在戶外運動、教學場域都可以盡情使用。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "客製化服務",
            content:
              "不只品牌產品，更依照客戶需求，進行產品客製化服務。我們擁有完整的設計、研發與專案管理團隊，從概念到成品，打造您的客製化整機產品。",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "服務項目",
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
                title: "整機產品",
                text: "顯示紙整機產品系列，包含：穿戴式裝置、平板、筆電與顯示器。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "客製化服務",
                text: "針對客戶需求，提供多種方案，進行產品客製。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title: "解決方案",
                text: "搭配顯示紙產品推出教育與健康照護的解決方案。",
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
