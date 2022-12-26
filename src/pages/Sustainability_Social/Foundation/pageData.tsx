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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/Group6339.png`,
            title: `${t('SustainabilityTalents.bannerTitle')}`,
            text: `${t('SustainabilityTalents.bannerContent')}`,
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
                text:`${t('SustainabilityTalents.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text:`${t('SustainabilityTalents.breadcrumbsItem4_1')}`,
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
            type: "social",
            activeId: 4,
            component: "tab",
          },
        ],
      },
    ]
  }

  return PageType;
}

export default usePageData;
