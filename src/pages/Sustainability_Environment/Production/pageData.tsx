import { useTranslation } from "react-i18next";
import { TextAlign } from "../../../component/banner/interface";
import { GraphicsTheme } from "../../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";
import urlConfig from "../../../config/urlSetting.json";

function usePageData() {
  const { t } = useTranslation();

  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src:  `${urlConfig.s3Url}/Image/hannstar/sustainability/environment/topbanner1_1.png`,
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
                text: "永續生產",
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
            activeId: 0,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "永續生產",
            content: ""
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus1.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus2.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus3.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus4.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus5.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus6.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus7.png` },
              { src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/focus8.png` },
            ]
          }
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {

            titleContent: {
              title: "2021年瀚宇彩晶環境足跡",
              content: "彩晶推動高效能、低汙染的綠色生產，達到企業獲利與環境永續的雙贏目標。面對全球暖化及極端氣候帶來可能的營運衝擊進行廠區的節能減碳，並揭露2021年瀚宇彩晶環境足跡。"
            },
            banner: {
              src: `${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/image358.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },

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
                src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/MaskGroup.png`,
                title: "100%使用FCs機導入NF3及SF6燃燒減量設備",
                text: "溫室氣體排放自2005年累積至2021年已減少1,928,165公噸CO2e",
                href: "",
                btnText: "",
              },
              {
                src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/MaskGroup_1.png`,
                title: "Array光阻液回收",
                text: "將製程中塗佈後多餘的光阻液收集，2021年回收再利用65.07公噸光阻液。",
                href: "",
                btnText: "",
              },
              {
                src:`${urlConfig.s3Url}/Image/hannstar/sustainability/environment/production/MaskGroup_2.png`,
                title: "再生水工程改善",
                text: "降低製造再生水後清洗管路的耗水量，預估每年可節省36,500百萬公升用水",
                href: "",
                btnText: "",
              }
            ],
          }
        ]
      },
    ],
  };


  return PageType;
}

export default usePageData;
