import { useTranslation } from "react-i18next";
import { TextAlign , BannerType } from "../../../component/banner/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "永續管理",
            text: "追求成長與創新，深耕企業文化與核心價值，攜手利害關係人，透過價值鏈的延伸，實現永續經營的目標。",
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
                text: "企業永續",
                href: "",
              },
              {
                text: "永續管理",
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
            activeId: 3,
            component: "tab",
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
