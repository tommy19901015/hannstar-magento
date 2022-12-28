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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/topbanner_1.png`,
            title:  t('SustainabilityGovernance.bannerTitle'),
            text:  t('SustainabilityGovernance.bannerContent'),
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
                text: `${t('SustainabilityGovernance.breadcrumbsItem')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityGovernance.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityGovernance.breadcrumbsItem1_3')}`,
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
            type: "csr",
            activeId: 3,
            component: "tab",
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
