import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { urlConfig } from "../../config/urlSetting";
import { string } from "prop-types";

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
            }/Image/hannspree/solution/img_solution_bn.jpg`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "HannsLearning學習解決方案",
            content:
              "疫情之後，教與學也經歷了一段巨大的改變。授課不僅是限於學校的教室，取而代之的是，學習無所不在。HannsLearning解決方案提供了包含教學載具(硬體設備)與教學相關的軟體與平台，提供教學工作者整合教學資源，以期讓每個孩子都能有均等受教的權利。",
          },
        ],
      },

      {
        type: "TitleContentBlock",
        data: [
          {
            title: "適合對象",
            content: "",
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 3,
            imgGrids: [
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_senario_school.jpg`,
              },
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_senario_eduorgs.jpg`,
              },
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_senario_tutor.jpg`,
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "方案特色說明",
            content:
              "HannsClass提供線上學習必備功能，讓你從備課到下課，都能輕鬆上手",
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
                }/Image/hannspree/solution/img_features_onlineclass.png`,
                title: "線上教室：打造高互動空間",
                text: "輕鬆建立你的線上教室，同時完成學生邀請通知。透過內建互動機制，讓師生彷彿親臨現場，學習栩栩如生。",
                href: "",
                btnText: "",
              },
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_features_videoclass.png`,
                title: "錄播課程：反覆觀看內容",
                text: "教師可上傳各式學習資源或補充教材。提供學生可以自由依照學習進度，安排學習時間，在錄播課程裡，無限制的複習學習內容。",
                href: "",
                btnText: "",
              },
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_features_backend.png`,
                title: "後台系統：掌握學習狀態",
                text: "每個學習行為都清楚呈現，包含線上學習、錄播課程以及學習時數。掌握學生學習狀況，透過數據便能有效對症下藥，讓學習更有效率。",
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "顯示紙產品",
            content: "",
          },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 2,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_prod_15.6notebook.png`,
                title: "15.6”筆記型電腦",
                text: "",
                href: "",
                btnText: "",
              },
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_prod_10.1tablet.png`,
                title: "10.3”閱讀平板",
                text: "",
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "合作夥伴",
            content: "",
          },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 2,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: `${
                  urlConfig().s3Url
                }/Image/hannspree/solution/img_partner_antek.png`,
                title: "先博通訊(股)有限公司",
                text: [
                  "‧公司地址 : 新竹縣湖口鄉鳳山村中華路15之1號",
                  "‧電話 :03-5985535",
                  "‧官網 : https://www.cuclass.com/",
                ],
                href: "/",
                btnText: "more",
              },
              // {
              //   src: `${
              //     urlConfig().s3Url
              //   }/Image/hannspree/solution/img_main_banner.png`,
              //   title: "思哈(股)有限公司",
              //   text: [
              //     "‧公司地址 : 台北市松山區復興北路231巷19號4樓",
              //     "‧電話 :02-27199957",
              //     "‧官網 : http://hahow.in",
              //   ],
              //   href: "/",
              //   btnText: "more",
              // },
            ],
          },
        ],
      },
      // {
      //   type: "SustainabilityGraphics3",
      //   data: [
      //     {
      //       src: `${
      //         urlConfig().s3Url
      //       }/Image/hannspree/solution/img_contact_contactus.png`,
      //       title: "與我們聯繫",
      //       btnText: "聯絡我們",
      //       btnHref: "/",
      //       content:
      //         "如您有品牌合作或是任何客製化的需求，請點選以下聯絡我們，填寫表單資料後，將由業務同仁與您聯繫。",
      //     },
      //   ],
      // },
    ],
  };

  return PageType;
}

export default usePageData;
