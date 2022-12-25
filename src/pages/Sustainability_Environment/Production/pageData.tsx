import { useTranslation } from "react-i18next";
import { TextAlign , BannerType } from "../../../component/banner/interface";
import { GraphicsTheme } from "../../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";
import { urlConfig } from "../../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();

  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/topbanner1_1.png`,
            title: `${t('SustainabilityEnvironmentProduction.bannerTitle')}`,
            text: `${t('SustainabilityEnvironmentProduction.bannerContent')}`,
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
                text: `${t('SustainabilityEnvironmentProduction.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityEnvironmentProduction.breadcrumbsItem2')}`,
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
            title: `${t('SustainabilityEnvironmentProduction.title1')}`,
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
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus3.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus4.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus5.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus6.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus7.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/focus8.png` },
            ]
          }
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {

            titleContent: {
              title:`${t('SustainabilityEnvironmentProduction.title2')}`,
              content: `${t('SustainabilityEnvironmentProduction.subTitle2')}`,
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/image358.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },

          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityEnvironmentProduction.title3')}`,
            content: ""
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
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/MaskGroup.png`,
                title: `${t('SustainabilityEnvironmentProduction.cardTitle1')}`,
                text:`${t('SustainabilityEnvironmentProduction.cardContent1')}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/MaskGroup_1.png`,
                title: `${t('SustainabilityEnvironmentProduction.cardTitle2')}`,
                text:`${t('SustainabilityEnvironmentProduction.cardContent2')}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/production/MaskGroup_2.png`,
                title: `${t('SustainabilityEnvironmentProduction.cardTitle3')}`,
                text:`${t('SustainabilityEnvironmentProduction.cardContent3')}`,
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
