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
          text: t('ParseApply.breadcrumb'),
          href: "",
        },
        {
          text: t('ParseApply.breadcrumbItem'),
          href: "",
        }
      ],
    },
    PageTitle: t('ParseApply.application'),
    FormTitle: t('ParseApply.basicInfo'),
    customer_code: t('ParseApply.customer'),
    agent: t('ParseApply.agent'),
    issue_number: t('ParseApply.singleNumber'),
    hs_id: t('ParseApply.cqs'),
    product: t('ParseApply.module'),
    form_type: {
      title: t('ParseApply.fieldClass'),
      option: [
        { text: t('ParseApply.productionStage'), value: t('ParseApply.productionStage') }
      ]
    },
    input_amount: t('ParseApply.amount'),
    Slice: t('ParseApply.slice'),
    Required: t('ParseApply.required'),
    defect_amount: t('ParseApply.defective'),
    defect_rate: t('ParseApply.nonPerforming'),
    Per: t('ParseApply.per'),
    site_name: t('ParseApply.stand'),
    invoce_number: t('ParseApply.invoce_number'),
    issue_type: {
      title: t('ParseApply.issueCategory'),
      // option: [
      //   { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
      //   { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass') },
      // ],
    },
    issue_code: {
      title: t('ParseApply.issueCode'),
      // option: [
      //   { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
      //   { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass') },
      // ],
    },
    ProvidDefectiveProduct: t('ParseApply.providDefectiveProduct'),
    remark: t('ParseApply.note'),
    Upload: t('ParseApply.common.upload'),
    Send: t('ParseApply.common.send'),
    Reset: t('ParseApply.common.reset'),
    Save: t('ParseApply.common.save'),
  }
}

export default useGreenServiceApply;

