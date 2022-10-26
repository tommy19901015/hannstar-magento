import { useTranslation } from "react-i18next";
import { I_PageData } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const tableList: I_PageData =  {
    pageTitle: "雙重身份驗證(2FA)",
    subTitle: "提供比一般密碼更強的保護，請您完成雙重身份驗證",
    noteTitle: "在登入時，您需要輸入一組6位數的代碼以進入帳號，這組代碼由您的身份驗證應用程式每30秒隨機產生",
    formTitle: "綁定雙重身份驗證3步驟",
    installText1: "行動裝置安裝",
    installText2:"身份驗證應用程式",
    bind: "進行身份綁定",
    verifylText1: "請輸入",
    verifylText2:"身份驗證應用程式上的代碼",
    bindSubTitle: "請您打開身份驗證應用程式，掃描下方QR code或輸入key值，進行身份綁定",
    bindNote: "請輸入key值，進行身份綁定",
    verifyBtn: "完成雙重身份綁定",
    errorMessage:"必填欄位；輸入格式有誤，請重新輸入",
    placeholder: "請輸入代碼",
    stepGuide: "綁定雙重身份驗證3步驟",
  }

  return tableList;
}

export default usePageData;
