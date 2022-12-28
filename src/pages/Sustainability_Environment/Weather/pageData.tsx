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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/topbanner1_1.png`,
            title: `${t('SustainabilityEnvironmentWeather.bannerTitle')}`,
            text: `${t('SustainabilityEnvironmentWeather.bannerContent')}`,
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
                text: `${t('SustainabilityEnvironmentWeather.breadcrumbsItem')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityEnvironmentWeather.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityEnvironmentWeather.breadcrumbsItem2')}`,
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
            activeId: 2,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: `${t('SustainabilityEnvironmentWeather.title1')}`,
              content: `${t('SustainabilityEnvironmentWeather.subTitle1')}`
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/risk/image358.png`,
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
              title:`${t('SustainabilityEnvironmentWeather.title2')}`,
              content: ""
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/risk/image363.png`,
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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/risk/image364.png`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
    ]
  }

  return PageType;
}

export default usePageData;
