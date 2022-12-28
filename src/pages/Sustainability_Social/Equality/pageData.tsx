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
            title: `${t('SustainabilityEquality.bannerTitle')}`,
            text: `${t('SustainabilityEquality.bannerContent')}`,
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
                text:`${t('SustainabilityEquality.breadcrumbsItem')}`,
                href: "",
              },
              {
                text:`${t('SustainabilityEquality.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text:`${t('SustainabilityEquality.breadcrumbsItem2')}`,
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
            activeId: 0,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityEquality.title1')}`,
            content:`${t('SustainabilityEquality.subTitle1')}`,
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 4,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/focus1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/focus2.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/focus3.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/focus4.png` },
            ]
          }
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/stock_photo_diversity_and_inclusion_lgbt_equality_banner_and_support_2110534265.png`,
            title: `${t('SustainabilityEquality.bannerBlockTitle1')}`,
            text: `${t('SustainabilityEquality.bannerBlockContent1')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ]
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Rectangle2503.png`,
            title: `${t('SustainabilityEquality.graphics1Title')}`,
            content:`${t('SustainabilityEquality.graphics1SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Rectangle2504.png`,
            title: `${t('SustainabilityEquality.graphics2Title')}`,
            content:`${t('SustainabilityEquality.graphics2SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Rectangle1914.png`,
            title: `${t('SustainabilityEquality.graphics3Title')}`,
            content:`${t('SustainabilityEquality.graphics3SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Rectangle2500.png`,
            title: `${t('SustainabilityEquality.graphics4Title')}`,
            content:`${t('SustainabilityEquality.graphics4SubTitle')}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/stock_photo_young_professional_male_presentation_at_group_meeting_in_white_board_with_tablet_and_laptop_office_1337290796.png`,
            title: `${t('SustainabilityEquality.graphics5Title')}`,
            content:`${t('SustainabilityEquality.graphics5SubTitle')}`,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/stock_photo_employee_benefits_concept_indirect_and_non_cash_compensation_paid_to_employees_offered_to_attract_2166380659.png`,
            title: `${t('SustainabilityEquality.bannerBlockTitle2')}`,
            text: `${t('SustainabilityEquality.bannerBlockContent2')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ]
      },

      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityEquality.title2')}`,
            content: ""
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 3,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Group3552.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Group3559.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Group3560.png` },
            ]
          }
        ]
      },

      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SustainabilityEquality.title3')}`,
            content: ""
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 3,
            imgGrids: [
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Group3552_1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Group3559_1.png` },
              { src: `${urlConfig().s3Url}/Image/hannstar/sustainability/social/diversity/Group3560_1.png` },
            ]
          }
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
