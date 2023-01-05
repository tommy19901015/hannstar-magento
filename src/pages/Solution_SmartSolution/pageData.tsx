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
            src: `${urlConfig().s3Url}/Image/solution/SolutionIntegrationandSystemService/BANNER/Solutionmainpage__BANNER.jpg`,
            title: ``,
            text: ``,
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
                text: t('SolutionIndex.breadcrumbsItem'),
                href: urlConfig().hannstar.index.href,
              },
              {
                text:t('SolutionIndex.breadcrumbsItem1'),
                href: "",
              },
              {
                text:t('SolutionIndex.breadcrumbsItem2'),
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
            title: `${t('SolutionIndex.title1')}`,
            content:
            `${t('SolutionIndex.subTitle1')}`
            },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: `${t('SolutionIndex.bannerBlockTitle_1')}`,
            text: `${t('SolutionIndex.bannerBlockContent_1')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: `${t('SolutionIndex.bannerBlockTitle_2')}`,
            text: `${t('SolutionIndex.bannerBlockContent_2')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: `${t('SolutionIndex.bannerBlockTitle_3')}`,
            text: `${t('SolutionIndex.bannerBlockContent_3')}`,
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SolutionIndex.title2')}`,
            content:
            `${t('SolutionIndex.subTitle2')}`
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
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionIndex.cardTitle_1')}`,
                text:`${t('SolutionIndex.cardContent_1')}`,
                href: "",
                btnText: "",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionIndex.cardTitle_2')}`,
                text:`${t('SolutionIndex.cardContent_2')}`,
                href: "",
                btnText: "",
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionIndex.cardTitle_3')}`,
                text:`${t('SolutionIndex.cardContent_3')}`,
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
