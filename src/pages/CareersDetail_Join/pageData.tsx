import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/Group6342.png`,
            title:`${t('CareersDetailJoin.bannerTitle')}`,
            text: "",
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
                text: `${t('CareersDetailJoin.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('CareersDetailJoin.breadcrumbsItem2')}`,
                href: "",
              },
              {
                text: `${t('CareersDetailJoin.breadcrumbsItem3')}`,
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/Group6343.png`,
            title:`${t('CareersDetailJoin.bannerBlockTitle1')}`,
            text:`${t('CareersDetailJoin.bannerContent1')}`,
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/Rectangle1889.png`,
            title:`${t('CareersDetailJoin.bannerBlockTitle2')}`,
            text:`${t('CareersDetailJoin.bannerContent2')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('CareersDetailJoin.title1')}`,
            content:`${t('CareersDetailJoin.subTitle1')}`,
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
                src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/image514.png`,
                title:`${t('CareersDetailJoin.cardTitle1')}`,
                text:`${t('CareersDetailJoin.cardContent1')}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/image515.png`,
                title:`${t('CareersDetailJoin.cardTitle2')}`,
                text:`${t('CareersDetailJoin.cardContent2')}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/image516.png`,
                title:`${t('CareersDetailJoin.cardTitle3')}`,
                text:`${t('CareersDetailJoin.cardContent3')}`,
                href: "",
                btnText: "",
              }
            ],
          }
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
