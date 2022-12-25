import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../../component/banner/interface";
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
            title: `${t('SustainabilityEnvironmentGreenProduct.bannerTitle')}`,
            text: `${t('SustainabilityEnvironmentGreenProduct.bannerContent')}`,
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
                text: `${t('SustainabilityEnvironmentGreenProduct.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityEnvironmentGreenProduct.breadcrumbsItem2')}`,
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
            activeId: 1,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityEnvironmentGreenProduct.title1')}`,
            content:`${t('SustainabilityEnvironmentGreenProduct.subTitle1')}`,
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/greenproduct/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/greenproduct/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/greenproduct/focus3.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/greenproduct/focus4.png` },
            ]
          }
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: `${t('SustainabilityEnvironmentGreenProduct.title2')}`,
              content:`${t('SustainabilityEnvironmentGreenProduct.subTitle2')}`,
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/greenproduct/Group5799.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
          {
            titleContent: {
              title: `${t('SustainabilityEnvironmentGreenProduct.title3')}`,
              content:`${t('SustainabilityEnvironmentGreenProduct.subTitle3')}`,
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/greenproduct/istockphoto-1140788405-1024x1024.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          }
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
