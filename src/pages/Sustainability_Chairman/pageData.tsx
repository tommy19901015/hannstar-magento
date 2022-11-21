import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t("About_Family.breadcrumbsIndex"),
          href: "/",
        },
        {
          text: "永續管理",
          href: "",
        },
      ],
    },
  };

  return PageType;
}

export default usePageData;