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
            title:`${t('SustainabilityEnvironmentSupplyChain.bannerTitle')}`,
            text: `${t('SustainabilityEnvironmentSupplyChain.bannerContent')}`,
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
                text: `${t('SustainabilityEnvironmentSupplyChain.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('SustainabilityEnvironmentSupplyChain.breadcrumbsItem2')}`,
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
            activeId: 3,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title:`${t('SustainabilityEnvironmentSupplyChain.title1')}`,
            content: `${t('SustainabilityEnvironmentSupplyChain.subTitle1')}`,
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/focus4.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/focus3.png` },
            ]
          }
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title:`${t('SustainabilityEnvironmentSupplyChain.title2')}`,
            content: `${t('SustainabilityEnvironmentSupplyChain.subTitle2')}`,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/Rectangle1914_1.png`,
            title: `${t('SustainabilityEnvironmentSupplyChain.graphics1Title')}`,
            content: [
              `${t('SustainabilityEnvironmentSupplyChain.graphics1Content1')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics1Content2')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics1Content3')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics1Content4')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics1Content5')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics1Content6')}`
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/Rectangle2500.png`,
            title: `${t('SustainabilityEnvironmentSupplyChain.graphics2Title')}`,
            content: [
              `${t('SustainabilityEnvironmentSupplyChain.graphics2Content1')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics2Content2')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics2Content3')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics2Content4')}`, 
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/Rectangle2503.png`,
            title: `${t('SustainabilityEnvironmentSupplyChain.graphics3Title')}`,
            content: [
              `${t('SustainabilityEnvironmentSupplyChain.graphics3Content1')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics3Content2')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics3Content3')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics3Content4')}`, 
            ]
          },
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title:`${t('SustainabilityEnvironmentSupplyChain.title3')}`,
              content: `${t('SustainabilityEnvironmentSupplyChain.subTitle3')}`,
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/Group5953.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ]
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/Rectangle2508.png`,
            title: `${t('SustainabilityEnvironmentSupplyChain.graphics4Title')}`,
            comment:`${t('SustainabilityEnvironmentSupplyChain.graphics4Comment')}`,
            content: [
              `${t('SustainabilityEnvironmentSupplyChain.graphics4Content1')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics4Content2')}`, 
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/environment/supplychain/Rectangle2508_1.png`,
            title: `${t('SustainabilityEnvironmentSupplyChain.graphics5Title')}`,
            subTitle:`${t('SustainabilityEnvironmentSupplyChain.graphics5Comment')}`,
            content: [
              `${t('SustainabilityEnvironmentSupplyChain.graphics5Content1')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics5Content2')}`, 
              `${t('SustainabilityEnvironmentSupplyChain.graphics5Content3')}`, 
            ]
          },
        ]
      },
    ],
  }

  return PageType;
}

export default usePageData;
