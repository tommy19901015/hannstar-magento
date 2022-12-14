import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { urlConfig } from "../../config/urlSetting";
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
            src: `${
              urlConfig().s3Url
            }/Image/hannspree/index/img_main_banner.png`,
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
            src: `${
              urlConfig().s3Url
            }/Image/hannspree/index/icon_menu_product.png`,
            title: "整機產品",
            href: "/",
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannspree/index/icon_menu_solution.png`,
            title: "解決方案",
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
            src: `${
              urlConfig().s3Url
            }/Image/hannspree/index/img_intro_product.png`,
            title: "顯示紙整機產品",
            content:
              "以Paper Display顯示紙為面板技術核心，設計手錶、平板與筆記型電腦等系列產品。強調陽光下可視、護眼、低功耗、多媒體播放等特色，讓你不論在戶外運動、教學場域都可以盡情使用。",
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannspree/index/img_intro_customization.png`,
            title: "解決方案",
            content:
              "除了顯示紙整機產品，更結合不同領域軟體服務，提供教育、照護、零售等不同解決方案。整合後續數據分析，提供政府部門、教育單位、醫療機構等單位，都能實現更智慧環保的生活。",
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
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/index/img_service_product.png`,
                title: "整機產品",
                text: "顯示紙整機產品系列，包含：穿戴式裝置、平板、筆電與顯示器。",
                href: "/",
                btnText: "了解更多",
              },
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/index/img_service_solution.png`,
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
