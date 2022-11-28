import { useTranslation } from "react-i18next";
import { I_PageData } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const tableList: I_PageData = {
    pageTitle: t('MFAQRCODE.pageTitle'),
    subTitle: t('MFAQRCODE.subTitle'),
    noteTitle: t('MFAQRCODE.noteTitle'),
    formTitle: t('MFAQRCODE.formTitle') ,
    installText1: t('MFAQRCODE.installText1'),
    installText2: t('MFAQRCODE.installText2') ,
    bind: t('MFAQRCODE.bind'),
    verifylText1: t('MFAQRCODE.verifylText1') ,
    verifylText2: t('MFAQRCODE.verifylText2') ,
    bindSubTitle:
      t('MFAQRCODE.bindSubTitle'),
    bindNote:t('MFAQRCODE.bindNote') ,
    verifyBtn: t('MFAQRCODE.verifyBtn'),
    errorMessage: t('MFAQRCODE.errorMessage') ,
    placeholder:t('MFAQRCODE.placeholder'),
    stepGuide: t('MFAQRCODE.stepGuide'),
  };

  return tableList;
}

export default usePageData;
