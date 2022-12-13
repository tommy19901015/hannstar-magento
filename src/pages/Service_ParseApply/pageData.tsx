import { useTranslation } from "react-i18next";

function useGreenServiceApply() {
    const { t } = useTranslation();
    return {
      breadcrumbs: {
        title: "",
        breadcrumbsLink: [
            {
              text: t('ParseApply.home'),
              href: "",
            },
            {  
              text:  t('ParseApply.breadcrumb'),
              href: "",
            },
            {
              text:  t('ParseApply.breadcrumbItem'),
              href: "",
            }
        ],
      },
      PageTitle: t('ParseApply.application'),
      FormTitle: t('ParseApply.basicInfo'),
      Client: t('ParseApply.customer'),
      Agent: t('ParseApply.agent'),
      TaxNo: t('ParseApply.singleNumber'),
      CQS: t('ParseApply.cqs'),
      Model: t('ParseApply.module'),
      FieldClass: {
        title:t('ParseApply.fieldClass'),
        option:[
          { text: t('ParseApply.productionStage'), value: t('ParseApply.productionStage') }
        ]
      },
      Amount: t('ParseApply.amount'),
      Slice: t('ParseApply.slice'),
      Required: t('ParseApply.required'),
      Defective:t('ParseApply.defective'),
      NonPerforming :t('ParseApply.nonPerforming'),
      Per:t('ParseApply.per'),
      Stand:t('ParseApply.stand'),
      Invoice:t('ParseApply.stand'),
      IssueCategory:{
        title:t('ParseApply.issueCategory'),
        option: [
          { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
          { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass') },
      ],},
      IssueCode:{
        title:t('ParseApply.issueCode'),
        option: [
          { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
          { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass')},
      ],
      },
      ProvidDefectiveProduct: t('ParseApply.providDefectiveProduct'),
      Remark:  t('ParseApply.note'),
      Send:  t('ParseApply.common.send'),
      Reset:  t('ParseApply.common.reset'),
    }
  }
  
export default useGreenServiceApply;

