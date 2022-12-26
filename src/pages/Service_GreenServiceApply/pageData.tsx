import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface"
import { FormType } from "../../component/form/interface";

function useGreenServiceApply() {
  const { t } = useTranslation();
  return {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t('ServiceGreenApply.home'),
          href: "",
        },
        {
          text: t('ServiceGreenApply.breadcrumb'),
          href: "",
        },
        {
          text: t('ServiceGreenApply.breadcrumbItem'),
          href: "",
        }
      ],
    },
    Client: t('ServiceGreenApply.legalApplication'),
    Agent: t('ServiceGreenApply.agent'),
    TaxNo: t('ServiceGreenApply.singleNumber'),
    Date: t('ServiceGreenApply.billingDate'),
    Model: t('ServiceGreenApply.model'),
    Required: t('ServiceGreenApply.required'),
    ApplicationType: {
      title: t('ServiceGreenApply.applicationProject.text'),
      option: [
        { text: t('ServiceGreenApply.applicationProject.option1'), value: "G01" },
        { text: t('ServiceGreenApply.applicationProject.option2'), value: "G02" },
        { text: t('ServiceGreenApply.applicationProject.option3'), value: "G03" },
        { text: t('ServiceGreenApply.applicationProject.option4'), value: "G04" },
        { text: t('ServiceGreenApply.applicationProject.option5'), value: "G05" },
        { text: t('ServiceGreenApply.applicationProject.option6'), value: "G06" },
        { text: t('ServiceGreenApply.applicationProject.option7'), value: "G07" },
        { text: t('ServiceGreenApply.applicationProject.option8'), value: "G08" },
        { text: t('ServiceGreenApply.applicationProject.option9'), value: "G09" },
        { text: t('ServiceGreenApply.applicationProject.option10'), value: "G010" },
      ],
    },
    Remark: t('ServiceGreenApply.note'),
    Send: t('ServiceGreenApply.common.send'),
    Reset: t('ServiceGreenApply.common.reset'),
  }
}

export default useGreenServiceApply;

