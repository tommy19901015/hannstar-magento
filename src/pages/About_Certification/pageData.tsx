import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t("About_Certification.breadcrumbsItem1"),
          href: "/",
        },
        {
          text: t("About_Certification.breadcrumbsItem2"),
          href: "",
        },
      ],
    },
  };

  return PageType;
}

export default usePageData;
