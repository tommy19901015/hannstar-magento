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
            src: `${urlConfig().s3Url}/Image/hannstar/about/strategy/img_strategy_top_banner.jpg`,
            title: "品質管理與策略",
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
                text: "關於瀚宇彩晶",
                href: "",
              },
              {
                text: "品質管理與策略",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "AboutTab",
        data: [
          {
            type: "about",
            activeId: 0,
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
