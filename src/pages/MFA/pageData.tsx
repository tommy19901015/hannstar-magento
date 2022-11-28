import { useTranslation } from "react-i18next";
import { I_PageData } from "./interface";

function usePageData() {
  const { t } = useTranslation();

  const tableList: I_PageData = {
    formTitle: t('MFA.formTitle'),
    errorMessage: t('MFA.errorMessage'), 
    placeholder: t('MFA.placeholder'),
    sendBtn: t('MFA.sendBtn'),
    otherMessage: t('MFA.otherMessage'),
    linkText: t('MFA.linkText'), 
  }

  return tableList;
}

export default usePageData;