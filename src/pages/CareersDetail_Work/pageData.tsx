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
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Group6341.png`,
            title: t("CareersDetail_Work.bannerTitle"),
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
                text: t("CareersDetail_Work.breadcrumbsItem1"),
                href: "",
              },
              {
                text: t("CareersDetail_Work.breadcrumbsItem2"),
                href: "",
              },
              {
                text: t("CareersDetail_Work.breadcrumbsItem3"),
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title:`${t("CareersDetail_Work.title1")}`,
            content: `${t("CareersDetail_Work.subTitle1")}`,
          },
        ],
      },
      {
        type: "ArticleContent",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1903.png`,
            title: `${t("CareersDetail_Work.articleContent1")}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1902.png`,
            title: `${t("CareersDetail_Work.articleContent2")}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1901.png`,
            title: `${t("CareersDetail_Work.articleContent3")}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1904.png`,
            title: `${t("CareersDetail_Work.articleContent4")}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1905.png`,
            title: `${t("CareersDetail_Work.articleContent5")}`,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1906.png`,
            title: `${t("CareersDetail_Work.articleConten6")}`,
          }
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1888.png`,
            title: `${t("CareersDetail_Work.bannerBlockTitle1")}`,
            text: `${t("CareersDetail_Work.bannerContent1")}`,
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/work/Rectangle1889.png`,
            title: `${t("CareersDetail_Work.bannerBlockTitle2")}`,
            text: `${t("CareersDetail_Work.bannerContent2")}`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t("CareersDetail_Work.title2")}`,
            content: "",
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
                src: `${urlConfig().s3Url}/Image/hannstar/careers/work/image514.png`,
                title:  `${t("CareersDetail_Work.cardTitle1")}`,
                text:  `${t("CareersDetail_Work.cardContent1")}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/work/image515.png`,
                title:  `${t("CareersDetail_Work.cardTitle2")}`,
                text:  `${t("CareersDetail_Work.cardContent2")}`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/work/image516.png`,
                title:  `${t("CareersDetail_Work.cardTitle3")}`,
                text:  `${t("CareersDetail_Work.cardContent3")}`,
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
