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
            src: "https://e-service.hannstar.com/Content/images/img/banner/customer-support.jpg",
            title: `${t("ServiceCustomerSupport.FullBannerTitle")}`,
            text: `${t("ServiceCustomerSupport.FullBannerText")}`,
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
                text: `${t("ServiceCustomerSupport.breadcrumbsLink1")}`,
                href: urlConfig().hannstar.index.href,
              },
              {
                text: `${t("ServiceCustomerSupport.breadcrumbsLink2")}`,
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
            title: `${t("ServiceCustomerSupport.TitleContentTitle")}`,
            content: `${t("ServiceCustomerSupport.TitleContentText")}`,
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
                src: "https://e-service.hannstar.com/Content/images/img/customer-support1.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle1")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText1")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support2.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle2")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText2")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support3.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle3")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText3")}`,
              },
            ],
          },
        ],
      },

      {
        type: "TitleContentBlock",
        data: [
          {
            title: `${t("ServiceCustomerSupport.TitleContentTitle2")}`,
            content: "",
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
                src: "https://e-service.hannstar.com/Content/images/img/customer-support4.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle4")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText4")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support5.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle5")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText5")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support6.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle6")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText6")}`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support7.jpg",
                title: `${t("ServiceCustomerSupport.GraphicsCardTitle7")}`,
                text: `${t("ServiceCustomerSupport.GraphicsCardText7")}`,
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
