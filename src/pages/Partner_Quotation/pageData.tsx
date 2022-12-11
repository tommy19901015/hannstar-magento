import { useTranslation } from "react-i18next"; 

function usePartnerQuotation() {
    const { t } = useTranslation();
    return {
      breadcrumbs: {
        title: "",
        breadcrumbsLink: [
            {
              text: t('PartnerQuotation.home'),
              href: "",
            },
            {  
              text:  t('PartnerQuotation.breadcrumbFirst'),
              href: "",
            },
            {
              text:  t('PartnerQuotation.breadcrumbSecond'),
              href: "",
            },
            {
              text:  t('PartnerQuotation.breadcrumbThird'),
              href: "",
            },
            {
              text:  t('PartnerQuotation.breadcrumbFourth'),
              href: "",
            }
        ],
      },
      RFQNumber: t('PartnerQuotation.rfqNumber'),
      SerialNumber: t('PartnerQuotation.serialNumber'),
      Status: {
        title: t('PartnerQuotation.status.title'),
        option: [
          { text: t('PartnerQuotation.status.option1'), value: "all" },
          { text: t('PartnerQuotation.status.option2'), value: "no" },
          { text: t('PartnerQuotation.status.option3'), value: "yes" },
        ],
      },
      Quote: t('PartnerQuotation.quote'),
      Required: t('PartnerQuotation.required'),
      PM: t('PartnerQuotation.pm'),
      Size: t('PartnerQuotation.size'),
      Resolution: t('PartnerQuotation.resolution'),
      Technology:{
        title: t('PartnerQuotation.technology.title'),
        option: [
          { text: t('PartnerQuotation.technology.option1'), value: "all" },
          { text: t('PartnerQuotation.technology.option2'), value: "IPS" },
          { text: t('PartnerQuotation.technology.option3'), value: "TN" },
        ],
      },
      Search:t('PartnerQuotation.common.search'),
    }
  }
  
export default usePartnerQuotation;
