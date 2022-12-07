import { useTranslation } from "react-i18next";
import { I_PageData } from "./interface";

function useRegisterForm() {
    const { t } = useTranslation();
    const formList: I_PageData = {
        registerTitle: t('RegisterForm.registerTitle'),
        firstName: t('RegisterForm.firstName'),
        lastName: t('RegisterForm.lastName'),
        email: t('RegisterForm.email'),
        password: t('RegisterForm.password'),
        confirmPassword: t('RegisterForm.confirmPassword'),
        companyName: t('RegisterForm.companyName'),
        companyAddress: t('RegisterForm.companyAddress'),
        agreePrivacyText1: t('RegisterForm.agreePrivacyText1'),
        agreePrivacyText2: t('RegisterForm.agreePrivacyText2'),
        agreeEmail: t('RegisterForm.agreeEmail'),
        registerBtn: t('RegisterForm.registerBtn'),
        errorMessage1: t('RegisterForm.errorMessage1'),
        errorMessage2: t('RegisterForm.errorMessage2'),
        errorMessage3: t('RegisterForm.errorMessage3'),
    };

    return formList;
}

export default useRegisterForm;
