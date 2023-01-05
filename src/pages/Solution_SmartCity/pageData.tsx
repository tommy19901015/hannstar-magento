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
            title: t('SolutionSmartCity.bannerTitle'),
            text: t('SolutionSmartCity.bannerContent'),
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
                text: t('SolutionSmartCity.breadcrumbsItem'),
                href: urlConfig().hannstar.index.href,
              },
              {
                text:t('SolutionSmartCity.breadcrumbsItem1'),
                href: "",
              },
              {
                text:t('SolutionSmartCity.breadcrumbsItem2'),
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
            title: "智慧停車/充電管理系統、設備",
            content:
              `停車充電樁正夯，海拔2000公尺以上的便利商店都有安裝，隨時隨地充電，綠能商機無限`
            },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            titleContent: {
              title: `${t('SolutionSmartCity.title1')}`,
              content:
              `${t('SolutionSmartCity.subTitle1')}`,
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t('SolutionSmartCity.title2')}`,
            content:
            ``
            },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 4,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartCity.cardTitle_1')}`,
                text:`${t('SolutionSmartCity.cardContent_1')}`,
                href: "",
                btnText: `${t('SolutionSmartCity.cardBtn_1')}`,
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartCity.cardTitle_2')}`,
                text:`${t('SolutionSmartCity.cardContent_2')}`,
                href: "",
                btnText: `${t('SolutionSmartCity.cardBtn_1')}`,
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartCity.cardTitle_3')}`,
                text:`${t('SolutionSmartCity.cardContent_3')}`,
                href: "",
                btnText: `${t('SolutionSmartCity.cardBtn_1')}`,
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartCity.cardTitle_4')}`,
                text:`${t('SolutionSmartCity.cardContent_4')}`,
                href: "",
                btnText: `${t('SolutionSmartCity.cardBtn_2')}`,
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
