import { useTranslation } from "react-i18next";
import { TextAlign , BannerType } from "../../../component/banner/interface";
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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/topbanner1.png`,
            title: `${t('SustainabilityInfoSecurity.bannerTitle')}`,
            text: `${t('SustainabilityInfoSecurity.bannerContent')}`,
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
                text: `${t('SustainabilityInfoSecurity.breadcrumbsItem')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityInfoSecurity.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityInfoSecurity.breadcrumbsItem2')}`,
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
            type: "governance",
            activeId: 6,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityInfoSecurity.title1')}`,
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
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/focus3.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/focus4.png` },
            ]
          }
        ]
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/Rectangle2508.png`,
            title:`${t('SustainabilityInfoSecurity.graphics1Title')}`,
            content:
            `${t('SustainabilityInfoSecurity.graphics1SubTitle')}`
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/Rectangle2508_1.png`,
            title: `${t('SustainabilityInfoSecurity.graphics2Title')}`,
            content:
            `${t('SustainabilityInfoSecurity.graphics2SubTitle')}`
          },
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
