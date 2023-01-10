import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "Paper Display 前瞻顯示紙科技",
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
                text: "首頁",
                href: "",
              },
              {
                text: "顯示紙技術",
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
            title: "合作夥伴",
            content: "",
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
