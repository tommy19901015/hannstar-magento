import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../../component/banner/interface";
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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/topbanner_1.png`,
            title: t('SustainabilityNegotiate.bannerTitle'),
            text: t('SustainabilityNegotiate.bannerContent'),
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
                text: `${t('SustainabilityNegotiate.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityNegotiate.breadcrumbsItem2')}`,
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
            activeId: 2,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityNegotiate.title1')}`,
            content:
            `${t('SustainabilityNegotiate.subTitle1')}`,
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 3,
            imgGrids: [
              {
                text: `${t('SustainabilityNegotiate.grid1Title')}`,
                content:`${t('SustainabilityNegotiate.grid1SubTitle')}`,
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/demopic.png`,
              },
              {
                text: `${t('SustainabilityNegotiate.grid2Title')}`,
                content: `${t('SustainabilityNegotiate.grid2SubTitle')}`,
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/demopic_1.png`,
              },
              {
                text: `${t('SustainabilityNegotiate.grid3Title')}`,
                content: `${t('SustainabilityNegotiate.grid3SubTitle')}`,
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/demopic_2.png`,
              },
            ],
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Rectangle68(3).png`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
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
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/MaskGroup.png`,
                title: `${t('SustainabilityNegotiate.cardTitle1')}`,
                text: [
                  `${t('SustainabilityNegotiate.cardContent1_1')}`,
                  `${t('SustainabilityNegotiate.cardContent1_2')}`,
                  `${t('SustainabilityNegotiate.cardContent1_3')}`,
                  `${t('SustainabilityNegotiate.cardContent1_4')}`
                ],
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/MaskGroup_1.png`,
                title:`${t('SustainabilityNegotiate.cardTitle2')}`,
                text: [
                  `${t('SustainabilityNegotiate.cardContent2_1')}`,
                  `${t('SustainabilityNegotiate.cardContent2_2')}`,
                  `${t('SustainabilityNegotiate.cardContent2_3')}`,
                  `${t('SustainabilityNegotiate.cardContent2_4')}`,
                  `${t('SustainabilityNegotiate.cardContent2_5')}`,
                  `${t('SustainabilityNegotiate.cardContent2_6')}`,
                ],
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/MaskGroup_2.png`,
                title:`${t('SustainabilityNegotiate.cardTitle3')}`,
                text: [
                  `${t('SustainabilityNegotiate.cardContent3_1')}`,
                  `${t('SustainabilityNegotiate.cardContent3_2')}`,
                ],
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title:`${t('SustainabilityNegotiate.title2')}`,
              content:`${t('SustainabilityNegotiate.subTitle2')}`,
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Rectangle69.png`,
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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Group5945.png`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: `${t('SustainabilityNegotiate.title3')}`,
              content: "",
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Group5946.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
