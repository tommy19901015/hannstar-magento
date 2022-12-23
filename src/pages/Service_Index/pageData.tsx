import { useTranslation } from "react-i18next";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { urlConfig } from "../../config/urlSetting";

function useServiceIndex() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/service/Homepage_CustomerService/Banner_Customersupport.jpg`,
            title: "創新技術、品質服務",
            text: "",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/service/Homepage_CustomerService/icon1.png`,
            title: "客戶通",
            href: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/service/Homepage_CustomerService/icon2.png`,
            title: "綠色環保申請",
            href: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/service/Homepage_CustomerService/icon3.png`,
            title: "技術諮詢",
            href: "/",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "關於客戶服務平台",
            content:
              "以顧客為中心的客戶服務平台，用多元化服務協助不同消費階段遇到的問題，以及後勤人員即時協助客戶，提高您的滿意度，共同創造雙贏的未來。",
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
                src: "https://e-service.hannstar.com/Content/images/img/home1.jpg",
                title: "客戶通",
                text:
                  "透過平台簡易、便利的服務，讓客戶享受更快速的各項專業諮詢交流，由全方位的售後服務團隊為您效勞。",
                href: "",
                btnText: "了解更多",
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/home3.jpg",
                title: "綠色環保申請",
                text:
                  "「可回收、低污染、省資源」致力推動綠色產品發展，並取得環保標章，符合永續發展。",
                href: "",
                btnText: "了解更多",
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/home2.jpg",
                title: "技術諮詢",
                text: "多年的技術經驗及教育訓練透過雲端共享，",
                href: "",
                btnText: "了解更多",
              },
            ],
          },
        ],
      },
      {
        type: "ArticleListContent",
        data: [
          {
            title: "最新文章列表",
            data: [
              {
                catalog: "技術文件",
                articleDatas: [
                  {
                    src: "https://e-service.hannstar.com/Content/images/img/professional-accurately-unscrewing-case-metallic-slim-laptop-his-electric-service-lab-near-tool-bag-clean-repair-it-front-view.jpg",
                    title: "LCM 偏光板製程",
                    description: "LCM模組生產站點POL站，針對整個偏光板貼附作業的技術介紹",
                    href: "",
                    subTitle: "2022/09/01",
                    // views: "5",
                  },
                  {
                    src: "https://e-service.hannstar.com/Content/images/img/close-up-reparation-laptop.jpg",
                    title: "LCM 切割製程簡介",
                    description: "LCM模組生產站點切割站，針對切割Cell玻璃的技術介紹",
                    href: "",
                    subTitle: "2022/08/22",
                    // views: "8",
                  },
                ],
              },
              {
                catalog: "教育訓練",
                articleDatas: [
                  {
                    src: "https://e-service.hannstar.com/Content/images/img/iStock-962459768.jpg",
                    title: "Cover Lens技術介紹",
                    description:
                      "Cover Lens，是電容式觸控面板的關鍵元件，也是人機接觸之第一道界面，其位置是觸控面板最外層、最靠近手指端之保護玻璃板。表面蓋板通常是以強化玻璃基板為基材，在上層經過抗反射(AR)、抗眩(AG)、抗污(AS)等加工處理；下層部分則以網印製程製做邊框遮蔽層，最後製得之成品可與觸控感測器(Sensors)貼合而完成—觸控面板。",
                    href: "",
                    subTitle: "2022/08/29",
                    // views: "9",
                  },
                  {
                    src: "https://e-service.hannstar.com/Content/images/img/iStock-480928463.jpg",
                    title: "可靠度試驗-MTBF(Mean Time Between Failure)",
                    description:
                      "MTBF(Mean Time between failures)是產品在操作使用或測試時間的平均連續無故障時間…",
                    href: "",
                    subTitle: "2022/08/22",
                    // views: "9",
                  },
                ],
              },
            ]
          },
        ]
      },
    ],
  };

  return PageType;
}

export default useServiceIndex;

