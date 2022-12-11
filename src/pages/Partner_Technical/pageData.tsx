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
      Theme: t('PartnerTechnical.theme'),
      Nation: {
        title:t('PartnerTechnical.nation.title'),
        option:[],
      },
      ProposalCategory: {
        title:t('PartnerTechnical.proposalCategory.title'),
        option:[
          { text:t('PartnerTechnical.proposalCategory.option1'), value:t('PartnerTechnical.proposalCategory.option1') },
          { text:t('PartnerTechnical.proposalCategory.option2'), value:t('PartnerTechnical.proposalCategory.option2') },
          { text:t('PartnerTechnical.proposalCategory.option3'), value:t('PartnerTechnical.proposalCategory.option3') },
          { text:t('PartnerTechnical.proposalCategory.option3'), value:t('PartnerTechnical.proposalCategory.option3') },
        ]
      },
      Site: {
        title:t('PartnerTechnical.site.title'),
        option:[
          { text:"", value:"" }
        ]
      },
      Classification: {
        title:t('PartnerTechnical.classification.title'),
        option:[
          { text:"", value:"" }
        ]
      },
      SupplierCategory:{
        title:t('PartnerTechnical.supplierCategory.title'),
        option:[
          { text:t('PartnerTechnical.supplierCategory.option1'), value:t('PartnerTechnical.supplierCategory.option1') },
          { text:t('PartnerTechnical.supplierCategory.option2'), value:t('PartnerTechnical.supplierCategory.option2') },
          { text:t('PartnerTechnical.supplierCategory.option3'), value:t('PartnerTechnical.supplierCategory.option3') }
        ]
      },
      Describe: t('PartnerTechnical.describe'),
      Remark:  t('PartnerTechnical.note'),
      Send:  t('PartnerTechnical.common.send'),
      Upload:  t('PartnerTechnical.common.upload'),
      Cancel:t('PartnerTechnical.common.cancel'),
      NoteContent: t('PartnerTechnical.noteContent'),
    }
  }
  
export default usePartnerTechnical;

