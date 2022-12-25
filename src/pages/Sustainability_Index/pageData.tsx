import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { urlConfig } from "../../config/urlSetting";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {

    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/topbanner.png`,
            title: t('SustainabilityIndex.bannerTitle'),
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
                text: "企業永續",
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
            title: `${t('SustainabilityIndex.title1')}`,
            content: "",
          },
        ],
      },

      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus3.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus4.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus5.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus6.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus7.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/focus8.png` },

            ]
          }
        ]
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/Rectangle1914.png`,
            title:`${t('SustainabilityIndex.graphics1Title')}`,
            content:
            `${t('SustainabilityIndex.graphics1SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/Group6338.png`,
            title: `${t('SustainabilityIndex.graphics2Title')}`,
            content:
            `${t('SustainabilityIndex.graphics2SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/Rectangle2503.png`,
            title: `${t('SustainabilityIndex.graphics3Title')}`,
            content:
            `${t('SustainabilityIndex.graphics3SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/Rectangle2502.png`,
            title: `${t('SustainabilityIndex.graphics4Title')}`,
            content:
            `${t('SustainabilityIndex.graphics4SubTitle')}`,
          },
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityIndex.title2')}`,
            content: `${t('SustainabilityIndex.subTitle2')}`
          },
        ],
      },
      {
        type: "TitleContentVideo",
        data: [
          {
            src: `${urlConfig().s3Url}/Video/hannstar/sustainability/ESG_report.mp4`
          }
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityIndex.title3')}`,
            content: `${t('SustainabilityIndex.subTitle3')}`
          },
        ],
      },
      {
        type: "TitleContentVideo",
        data: [
          {
            src: `${urlConfig().s3Url}/Video/hannstar/sustainability/2022_hannstarfoundation_Disturbance.mp4`
          }
        ]
      },
    ]
  };

  return PageType;
}

export default usePageData;
