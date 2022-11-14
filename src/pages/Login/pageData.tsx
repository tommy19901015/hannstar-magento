import { useTranslation } from "react-i18next";
import { I_PageData } from "./interface";

function useLoginForm() {
  const { t } = useTranslation();
  const formList: I_PageData = {
    loginTitle: t('LoginForm.loginTitle'),
    account: t('LoginForm.account'),
    password: t('LoginForm.password'),
    rememberAccount: t('LoginForm.rememberAccount'),
    forgotPassword: t('LoginForm.forgotPassword'),
    createAccount: t('LoginForm.createAccount'),
    required: t('LoginForm.required'),
    loginBtn: t('LoginForm.loginBtn'),
    hasAccount: t('LoginForm.hasAccount'),
  };

  return formList;
}

export default useLoginForm;
