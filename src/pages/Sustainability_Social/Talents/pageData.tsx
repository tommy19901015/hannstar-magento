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
                text:`${t('SustainabilityTalents.breadcrumbsItem')}`,
                href: "",
              },
              {
                text:`${t('SustainabilityTalents.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text:`${t('SustainabilityTalents.breadcrumbsItem2')}`,
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
            activeId: 1,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/development/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/development/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/development/focus3.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/development/focus4.png` },
            ]
          }
        ]
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/development/Rectangle2508.png`,
            title:`${t('SustainabilityTalents.graphics1Title')}`,
            content:`${t('SustainabilityTalents.graphics1SubTitle')}`
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/development/Rectangle2508_1.png`,
            title:`${t('SustainabilityTalents.graphics2Title')}`,
            content:`${t('SustainabilityTalents.graphics2SubTitle')}`
          }
        ]
      },
    ]
  }

  return PageType;
}

export default usePageData;
