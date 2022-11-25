import { useTranslation } from "react-i18next";

function usePageData() {
  const { t } = useTranslation();
  return {
    sendVerification: t('Account_SendVerifyEmail.sendVerification'),
    enterEmail: t('Account_SendVerifyEmail.enterEmail'),
    qequired: t('Account_SendVerifyEmail.qequired'),
    verificationletter: t('Account_SendVerifyEmail.verificationletter'),
  }
}

export default usePageData;
