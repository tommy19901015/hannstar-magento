import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      breadcrumbsLink: [
        {
          text: t('Account_Newsletter.breadcrumbsLinkFrontPage'),
        },
        {
          text: t('Account_Newsletter.breadcrumbsLinkMemberCentre'),
        },
        {
          text: t('Account_Newsletter.breadcrumbsLinkDashboard'),
        },
      ],
    },
    title: t('Account_Newsletter.title'),
    subTitle: t('Account_Newsletter.subTitle'),
    options: t('Account_Newsletter.options'),
    saveBtn: t('Account_Newsletter.saveBtn')
  };

  return PageType;
}

export default usePageData;
