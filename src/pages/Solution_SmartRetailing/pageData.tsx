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
            title: t('SolutionSmartRetailing.bannerTitle'),
            text: t('SolutionSmartRetailing.bannerContent'),
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
                text: t('SolutionSmartRetailing.breadcrumbsItem'),
                href: urlConfig().hannstar.index.href,
              },
              {
                text:t('SolutionSmartRetailing.breadcrumbsItem1'),
                href: "",
              },
              {
                text:t('SolutionSmartRetailing.breadcrumbsItem2'),
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
            title: `${t('SolutionSmartRetailing.title1')}`,
            content:
            `${t('SolutionSmartRetailing.subTitle1')}`
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
            src: "https://fakeimg.pl/100x100/?text=Image",
            title:`${t('SolutionSmartRetailing.cardTitle_1')}`,
            text:`${t('SolutionSmartRetailing.cardContent_1')}`,
            href: "",
            btnText: `${t('SolutionSmartRetailing.cardBtn_1')}`,
          },
          {
            src: "https://fakeimg.pl/100x100/?text=Image",
            title:`${t('SolutionSmartRetailing.cardTitle_2')}`,
            text:`${t('SolutionSmartRetailing.cardContent_2')}`,
            href: "",
            btnText: `${t('SolutionSmartRetailing.cardBtn_1')}`,
          },
          {
            src: "https://fakeimg.pl/100x100/?text=Image",
            title:`${t('SolutionSmartRetailing.cardTitle_3')}`,
            text:`${t('SolutionSmartRetailing.cardContent_3')}`,
            href: "",
            btnText: `${t('SolutionSmartRetailing.cardBtn_1')}`,
          },
          {
            src: "https://fakeimg.pl/100x100/?text=Image",
            title:`${t('SolutionSmartRetailing.cardTitle_4')}`,
            text:`${t('SolutionSmartRetailing.cardContent_4')}`,
            href: "",
            btnText: `${t('SolutionSmartRetailing.cardBtn_2')}`,
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
