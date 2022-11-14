import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: "首頁",
          href: "",
        },
        {
          text: "會員中心",
          href: "",
        },
        {
          text: "看板",
          href: "",
        },
      ],
    },
    title: "Newsletter Subscription",
    subTitle: "Subscription option",
    options: "General Subscription",
    saveBtn:"Save"
  };

  return PageType;
}

export default usePageData;
