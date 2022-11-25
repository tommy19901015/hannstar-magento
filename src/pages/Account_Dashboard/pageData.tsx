import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t('Account_Dashboard.breadcrumbsLinkFrontPage'),
          href: "",
        },
        {
          text: t('Account_Dashboard.breadcrumbsLinkMemberCentre'),
          href: "",
        },
        {
          text: t('Account_Dashboard.breadcrumbsLinkDashboard'),
          href: "",
        },
      ],
    },
    content: {
      title: t('Account_Dashboard.contentTitle'),
      table: [
        t('Account_Dashboard.contentTableDate'),
        t('Account_Dashboard.contentTableNumber'),
        t('Account_Dashboard.contentTableProject'),
        t('Account_Dashboard.contentTableProductNo'),
        t('Account_Dashboard.contentTableSchedule'),
        t('Account_Dashboard.contentTableDetails')
      ],
      member: [
        // {
        //   date: "2018/06/30 10:10:42 AM",
        //   singleNumber: "A220920101633",
        //   item: "RAM",
        //   model: "040B8W8-A20",
        //   superstition: "覆判完成",
        //   details: "",
        // },
        // {
        //   date: "2018/06/30 10:10:42 AM",
        //   singleNumber: "A220920101633",
        //   item: "RAM",
        //   model: "040B8W8-A20",
        //   superstition: "覆判完成",
        //   details: "",
        // },
      ],
    },
  };

  return PageType;
}

export default usePageData;
