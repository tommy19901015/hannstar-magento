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
                text: `${t('SustainabilityRisk.breadcrumbsItem2_3')}`,
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
            activeId: 2,
            component: "tab",
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
