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
            src: `${
              urlConfig().s3Url
            }/Image/service/Homepage_CustomerService/Banner_Customersupport.jpg`,
            title: t("ServiceIndex.FullBannerTitle"),
            text: t("ServiceIndex.FullBannerText"),
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: `${
              urlConfig().s3Url
            }/Image/service/Homepage_CustomerService/icon1.png`,
            title: t("ServiceIndex.platform1"),
            href: urlConfig().service.customer.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/service/Homepage_CustomerService/icon2.png`,
            title: t("ServiceIndex.platform2"),
            href: urlConfig().service.greenLawApply.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/service/Homepage_CustomerService/icon3.png`,
            title: t("ServiceIndex.platform3"),
            href: urlConfig().service.technicalSupport.href,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t("ServiceIndex.title")}`,
            content: `${t("ServiceIndex.content")}`,
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
                title: `${t("ServiceIndex.GraphicsCardTitle1")}`,
                text: `${t("ServiceIndex.GraphicsCardText1")}`,
                href: urlConfig().service.customer.href,
                btnText: `${t("ServiceIndex.BtnText")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/home3.jpg",
                title: `${t("ServiceIndex.GraphicsCardTitle2")}`,
                text: `${t("ServiceIndex.GraphicsCardText2")}`,
                href: urlConfig().service.greenLawApply.href,
                btnText: `${t("ServiceIndex.BtnText")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/home2.jpg",
                title: `${t("ServiceIndex.GraphicsCardTitle3")}`,
                text: `${t("ServiceIndex.GraphicsCardText3")}`,
                href: urlConfig().service.technicalSupport.href,
                btnText: `${t("ServiceIndex.BtnText")}`,
              },
            ],
          },
        ],
      },
      {
        type: "ArticleListContent",
        data: [
          {
            title: `${t("ServiceIndex.ArticleListContentTitle1")}`,
            data: [
              {
                catalog: `${t("ServiceIndex.catalog1")}`,
                articleDatas: [
                  {
                    src: "https://e-service.hannstar.com/Content/images/img/professional-accurately-unscrewing-case-metallic-slim-laptop-his-electric-service-lab-near-tool-bag-clean-repair-it-front-view.jpg",
                    title: "LCM 偏光板製程",
                    description:
                      "LCM模組生產站點POL站，針對整個偏光板貼附作業的技術介紹",
                    href: "",
                    subTitle: "2022/09/01",
                    // views: "5",
                  },
                  {
                    src: "https://e-service.hannstar.com/Content/images/img/close-up-reparation-laptop.jpg",
                    title: "LCM 切割製程簡介",
                    description:
                      "LCM模組生產站點切割站，針對切割Cell玻璃的技術介紹",
                    href: "",
                    subTitle: "2022/08/22",
                    // views: "8",
                  },
                ],
              },
              {
                catalog: `${t("ServiceIndex.catalog2")}`,
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
            ],
          },
        ],
      },
    ],
  };

  return PageType;
}

export default useServiceIndex;
