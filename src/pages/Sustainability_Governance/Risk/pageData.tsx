import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../../component/banner/interface";
import { TabEnum } from "../../../types/Tmeplate1/interface";
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
            title:`${t('SustainabilityRisk.bannerTitle')}`,
            text: `${t('SustainabilityRisk.bannerContent')}`,
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
                text: `${t('SustainabilityRisk.breadcrumbsItem')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityRisk.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityRisk.breadcrumbsItem2')}`,
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
            activeId: 5,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityRisk.title1')}`,
            content:"",
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/Rectangle2500.png`,
            title: `${t('SustainabilityRisk.graphics1Title')}`,
            content:
            `${t('SustainabilityRisk.graphics1SubTitle')}`
          },
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: `${t('SustainabilityRisk.title2')}`,
              content: "",
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/governance/Rectangle68.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
