import { useTranslation } from "react-i18next";
import { I_PageData } from "./interface";

function usePageData() {
  const { t } = useTranslation();

  const tableList: I_PageData = {
    formTitle: "請輸入身份驗證應用程式上的代碼",
    errorMessage: "必填欄位；輸入格式有誤，請重新輸入",
    placeholder: "請輸入代碼",
    sendBtn: "登入",
    otherMessage: "如果您雙重身份驗證(2FA)的裝置遺失或出現問題 可使用原註冊郵箱進行身份驗證，",
    linkText: "發送驗證郵件"
  }

  return tableList;
}

export default usePageData;