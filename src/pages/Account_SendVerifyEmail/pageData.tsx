import { useTranslation } from "react-i18next";

function usePageData() {
  const { t } = useTranslation();
  return {
    sendVerification:"寄送驗證信",
    enterEmail:"請在下方欄位輸入郵箱收取驗證信。",
    qequired:"必填欄位；輸入格式有誤，請重新輸入",
    verificationletter:"發送驗證信",
  }
}

export default usePageData;
