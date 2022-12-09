import { useTranslation } from "react-i18next"; 

function usePartnerTechnical() {
    const { t } = useTranslation();
    return {
      breadcrumbs: {
        title: "",
        breadcrumbsLink: [
            {
              text: t('PartnerTechnical.home'),
              href: "",
            },
            {  
              text:  t('PartnerTechnical.breadcrumb'),
              href: "",
            },
            {
              text:  t('PartnerTechnical.breadcrumbItem'),
              href: "",
            }
        ],
      },
      Name: t('PartnerTechnical.name'),
      Email: t('PartnerTechnical.email'),
      Phone: t('PartnerTechnical.phone'),
      Company: t('PartnerTechnical.company'),
      Required: t('PartnerTechnical.required'),
      Theme: t('PartnerTechnical.note'),
      Nation: {
        title:t('PartnerTechnical.note'),
        option:[],
      },
      ProposalCategory: {
        title:t('PartnerTechnical.note'),
        option:[]
      },
      Site: {
        title:t('PartnerTechnical.note'),
        option:[
          { text:"", value:"" }
        ]
      },
      Classification: {
        title:t('PartnerTechnical.note'),
        option:[
          { text:"", value:"" }
        ]
      },
      SupplierCategory:{
        title:t('PartnerTechnical.supplierCategory.title'),
        option:[
          { text:"", value:"" }
        ]
      },
      Describe: t('PartnerTechnical.describe'),
      Remark:  t('PartnerTechnical.note'),
      Send:  t('PartnerTechnical.common.send'),
      Upload:  t('PartnerTechnical.common.upload'),
      Cancel:t('PartnerTechnical.common.cancel'),
    }
  }
  
export default usePartnerTechnical;

