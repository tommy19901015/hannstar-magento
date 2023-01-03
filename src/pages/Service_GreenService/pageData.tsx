import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
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
            src: "https://e-service-test.hannstar.com/Content/images/img/banner/green-service.jpg",
            title: `${t("ServiceGreenService.FullBannerTitle")}`,
            text: `${t("ServiceGreenService.FullBannerText")}`,
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
                text: `${t("ServiceGreenService.BreadcrumbsBlock1")}`,
                href: urlConfig().hannstar.index.href,
              },
              {
                text: `${t("ServiceGreenService.BreadcrumbsBlock2")}`,
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
            title: `${t("ServiceGreenService.TitleContentTitle")}`,
            content: `${t("ServiceGreenService.TitleContentText")}`,
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
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service1.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle1")}`,
                text: `${t("ServiceGreenService.GraphicsCardText1")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service2.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle2")}`,
                text: `${t("ServiceGreenService.GraphicsCardText2")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service3.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle3")}`,
                text: `${t("ServiceGreenService.GraphicsCardText3")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service4.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle4")}`,
                text: `${t("ServiceGreenService.GraphicsCardText4")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service5.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle5")}`,
                text: `${t("ServiceGreenService.GraphicsCardText5")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service6.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle6")}`,
                text: `${t("ServiceGreenService.GraphicsCardText6")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service7.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle7")}`,
                text: `${t("ServiceGreenService.GraphicsCardText7")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service8.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle8")}`,
                text: `${t("ServiceGreenService.GraphicsCardText8")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
              },
              {
                src: "https://e-service-test.hannstar.com/Content/images/img/green-service9.jpg",
                title: `${t("ServiceGreenService.GraphicsCardTitle9")}`,
                text: `${t("ServiceGreenService.GraphicsCardText9")}`,
                href: "/",
                btnText: `${t("ServiceGreenService.BtnText")}`,
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
