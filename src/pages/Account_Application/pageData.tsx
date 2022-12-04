import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t('Account_Application.breadcrumbsLinkFrontPage'),
          href: "",
        },
        {
          text: t('Account_Application.breadcrumbsLinkMemberCentre'),
          href: "",
        },
        {
          text: t('Account_Application.breadcrumbsLinkAuthManagement'),
          href: "",
        },
      ],
    },
    captionData: {
      customerNormal: [
        t('Account_Application.customerNormalIndustryAtricles'),
        t('Account_Application.customerNormalProductQuery'),
        t('Account_Application.customerNormalNewTechnology'),
        t('Account_Application.customerNormalOnlineChatRoom'),
      ],
      customerEnterprise: [
        t('Account_Application.customerEnterpriseProductQuotation'),
        t('Account_Application.customerEnterpriseCustomizedService'),
        t('Account_Application.customerEnterpriseRMAApply'),
        t('Account_Application.customerEnterpriseAnalyzeApply'),
        t('Account_Application.customerEnterpriseGreenRegulationApply'),
        t('Account_Application.customerEnterpriseHSDCustomerService'),
      ],
      partnerNormal: [
        t('Account_Application.partnerNormalNewTechnology'),
        t('Account_Application.partnerNormalIndustryAtricles'),
        t('Account_Application.partnerNormalProductQuery'),
        t('Account_Application.partnerNormalOnlineChatRoom'),
      ],
      partnerEnterprise: [
        t('Account_Application.partnerEnterpriseSupplierPlatform'),
        t('Account_Application.partnerEnterpriseHSDSupplierService'),
      ],
    },
    content: {
      title: t('Account_Application.contentTitle'),
      subTitle: t('Account_Application.contentSubTitle'),
      rank: t('Account_Application.contentRank'),
      text: t('Account_Application.contentText'),
      member: t('Account_Application.contentMember'),
      pendingText: t('Account_Application.contentPendingText'),
      pendingStates: t('Account_Application.contentPendingStates'),
      become: t('Account_Application.contentBecome'),
      companymember: t('Account_Application.contentCompanyMember'),
      customerpermission: t('Account_Application.contentCustomerPermission'),
      applymembership: t('Account_Application.contentApplyMembership'),
      applypartnership: t('Account_Application.contentApplyPartnership'),
      supplierlimit: t('Account_Application.contentSupplierLimit'),
    },
  };

  return PageType;
}

export default usePageData;
