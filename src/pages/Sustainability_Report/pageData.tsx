import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t("About_Family.breadcrumbsItem1"),
          href: "/",
        },
        {
          text: "報告書下載",
          href: "",
        },
      ],
    },
  };

  return PageType;
}

export default usePageData;
