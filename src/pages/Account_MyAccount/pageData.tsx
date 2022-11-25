import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      breadcrumbsLink: [
        {
          text: t('Account_MyAccount.breadcrumbsLinkFrontPage'),
        },
        {
          text: t('Account_MyAccount.breadcrumbsLinkMemberCentre'),
        },
        {
          text: t('Account_MyAccount.breadcrumbsLinkAccountInfo'),
        },
      ],
    },
    personal: t('Account_MyAccount.personal'),
    account: t('Account_MyAccount.account'),
    personalInfo: t('Account_MyAccount.personalInfo'),
    edit: t('Account_MyAccount.edit'),
    name: t('Account_MyAccount.name'),
    email: t('Account_MyAccount.email'),
    subscription: t('Account_MyAccount.subscription'),
    companyInfo: t('Account_MyAccount.companyInfo'),
    companyName: t('Account_MyAccount.companyName'),
    business: t('Account_MyAccount.business'),
    applicable: t('Account_MyAccount.applicable'),
  };

  return PageType;
}

export default usePageData;
