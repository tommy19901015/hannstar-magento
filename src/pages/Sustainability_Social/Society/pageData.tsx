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
            title: `${t('SustainabilitySociety.bannerTitle')}`,
            text: `${t('SustainabilitySociety.bannerContent')}`,
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
                text:`${t('SustainabilitySociety.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text:`${t('SustainabilitySociety.breadcrumbsItem2')}`,
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
            activeId: 3,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilitySociety.title1')}`,
            content:`${t('SustainabilitySociety.subTitle1')}`,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/engagement/Rectangle2508.png`,
            title: `${t('SustainabilitySociety.graphics1Title')}`,
            content:`${t('SustainabilitySociety.graphics1SubTitle')}`
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/engagement/Rectangle2508_1.png`,
            title: `${t('SustainabilitySociety.graphics2Title')}`,
            content:`${t('SustainabilitySociety.graphics2SubTitle')}`
          }
        ]
      },
    ]
  }

  return PageType;
}

export default usePageData;
