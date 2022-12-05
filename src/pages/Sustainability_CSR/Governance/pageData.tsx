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
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/topbanner_1.png`,
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
            activeId: 1,
            component: "tab",
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Rectangle2508.png`,
            title: "永續治理",
            content: "董事會為瀚宇彩晶永續治理最高單位，負責擬定瀚宇彩晶ESG策略與監督執行成果。董事長室轄下設有策略暨永續發展中心，由董事長帶領，分為企業永續發展處、企業策略投資處及企業永續ESG處協力推動，將永續藍圖展開為各部門目標，依單位執掌展開永續業務的規劃與實踐，並依重大性原則，針對不同利害關係人所關注之議題，進行相關業務之規劃、推動、執行和回應，定期向董事會報告執行之進度。",
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "永續藍圖",
              content:
                "瀚宇彩晶結合六大資本資源及五項核心理念的投入，致力創造瀚宇彩晶的永續價值，以「共創價值、綠色創新、智慧生活、健康未來」四個ESG永續聚焦面向，",
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Rectangle68.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
