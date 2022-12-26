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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/Group6339.png`,
            title: `${t('SustainabilityProfession.bannerTitle')}`,
            text: `${t('SustainabilityProfession.bannerContent')}`,
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
                text:`${t('SustainabilityProfession.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text:`${t('SustainabilityProfession.breadcrumbsItem2')}`,
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
              title: `${t('SustainabilityProfession.title1')}`,
              content:`${t('SustainabilityProfession.subTitle1')}`
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/image360.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/image361.png`,
            title: `${t('SustainabilityProfession.bannerBlockTitle1')}`,
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/Rectangle1914.png`,
            title: `${t('SustainabilityProfession.graphics1Title')}`,
            content:`${t('SustainabilityProfession.graphics1SubTitle')}`
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2500.png`,
            title: `${t('SustainabilityProfession.graphics2Title')}`,
            content:`${t('SustainabilityProfession.graphics2SubTitle')}`
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2503.png`,
            title: `${t('SustainabilityProfession.graphics3Title')}`,
            content:`${t('SustainabilityProfession.graphics3SubTitle')}`
          },
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/image362.png`,
            title: `${t('SustainabilityProfession.bannerBlockTitle2')}`,
            text:`${t('SustainabilityProfession.bannerBlockContent2')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2508.png`,
            title:`${t('SustainabilityProfession.graphics4Title')}`,
            subTitle:`${t('SustainabilityProfession.graphics4SubTitle')}`,
            content: [
              `${t('SustainabilityProfession.graphics4Content1')}`,
              `${t('SustainabilityProfession.graphics4Content2')}`,
              `${t('SustainabilityProfession.graphics4Content3')}`,
              `${t('SustainabilityProfession.graphics4Content4')}`,
              `${t('SustainabilityProfession.graphics4Content5')}`
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2510.png`,
            title:`${t('SustainabilityProfession.graphics5Title')}`,
            content: [
              `${t('SustainabilityProfession.graphics5Content1')}`,
              `${t('SustainabilityProfession.graphics5Content2')}`,
              `${t('SustainabilityProfession.graphics5Content3')}`,
              `${t('SustainabilityProfession.graphics5Content4')}`,
              `${t('SustainabilityProfession.graphics5Content5')}`,
              `${t('SustainabilityProfession.graphics5Content6')}`,
            ]
          },
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityProfession.title2')}`,
            content: `${t('SustainabilityProfession.subTitle2')}`
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
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/MaskGroup.png`,
                title: `${t('SustainabilityProfession.cardTitle1')}`,
                text:`${t('SustainabilityProfession.cardContent1')}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/MaskGroup_1.png`,
                title: `${t('SustainabilityProfession.cardTitle2')}`,
                text:`${t('SustainabilityProfession.cardContent2')}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/safety/MaskGroup_2.png`,
                title: `${t('SustainabilityProfession.cardTitle3')}`,
                text: `${t('SustainabilityProfession.cardContent3')}`,
                href: "",
                btnText: "",
              }
            ],
          }
        ]
      },
    ],
  }
  return PageType;
}

export default usePageData;
