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
            title: t('SolutionSmartRecreation.bannerTitle'),
            text: t('SolutionSmartRecreation.bannerContent'),
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
                text: t('SolutionSmartRecreation.breadcrumbsItem'),
                href: urlConfig().hannstar.index.href,
              },
              {
                text:t('SolutionSmartRecreation.breadcrumbsItem1'),
                href: "",
              },
              {
                text:t('SolutionSmartRecreation.breadcrumbsItem2'),
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
            title: `${t('SolutionSmartRecreation.title1')}`,
            content:
            `${t('SolutionSmartRecreation.subTitle1')}`
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
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 4,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartRecreation.cardTitle_1')}`,
                text:`${t('SolutionSmartRecreation.cardContent_1')}`,
                href: "",
                btnText: `${t('SolutionSmartRecreation.cardBtn_1')}`,
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartRecreation.cardTitle_2')}`,
                text:`${t('SolutionSmartRecreation.cardContent_2')}`,
                href: "",
                btnText: `${t('SolutionSmartRecreation.cardBtn_1')}`,
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartRecreation.cardTitle_3')}`,
                text:`${t('SolutionSmartRecreation.cardContent_3')}`,
                href: "",
                btnText: `${t('SolutionSmartRecreation.cardBtn_1')}`,
              },
              {
                src: "https://fakeimg.pl/100x100/?text=Image",
                title:`${t('SolutionSmartRecreation.cardTitle_4')}`,
                text:`${t('SolutionSmartRecreation.cardContent_4')}`,
                href: "",
                btnText: `${t('SolutionSmartRecreation.cardBtn_2')}`,
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
