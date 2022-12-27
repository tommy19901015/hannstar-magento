import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
            src: `${urlConfig().s3Url}/Image/hannstar/careers/recruit/Group6338.png`,
            title:`${t('CareersDetailIndex.bannerTitle')}`,
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
                text: `${t('CareersDetailIndex.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('CareersDetailIndex.breadcrumbsItem2')}`,
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
            src: `${urlConfig().s3Url}/Image/hannstar/careers/recruit/Group6339.png`,
            title: `${t('CareersDetailIndex.bannerBlockTitle1')}`,
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/recruit/image503.png`,
            title:`${t('CareersDetailIndex.bannerBlockTitle2')}`,
            text: "",
            textAlign: TextAlign.BottomLeft,
            btnText:`${t('CareersDetailIndex.bannerContent2')}`,
            btnHref: "#",
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/recruit/Group6340.png`,
            title:`${t('CareersDetailIndex.bannerBlockTitle3')}`,
            text: "",
            textAlign: TextAlign.BottomLeft,
            btnText:`${t('CareersDetailIndex.bannerContent3')}`,
            btnHref: "#",
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/recruit/image501.png`,
            title:`${t('CareersDetailIndex.bannerBlockTitle4')}`,
            text: "",
            textAlign: TextAlign.BottomLeft,
            btnText: `${t('CareersDetailIndex.bannerContent4')}`,
            btnHref: "#",
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
