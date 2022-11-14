import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: "首頁",
          href: "",
        },
        {
          text: "會員中心",
          href: "",
        },
        {
          text: "帳戶編輯",
          href: "",
        },
      ],
    },
    personal:"個人專區",
    account:"帳戶資訊",
    surname:"姓",
    name:"名",
    changePass:"變更密碼",
    oldPassword:"舊密碼",
    newPassword:"新密碼",
    requiredInput:"必填欄位，請重新輸入",
    requiredCharacters:"必填欄位；請輸入至少8個字元，並包含至少一個大寫、一個小寫和一個特殊字元",
    passwordAgain:"密碼(再次確認)",
    required:"必填欄位；需與密碼相同",
    saveBtn:"送出",
    accountDelete:"帳號刪除",
    confirmDelete:"您的帳號將被永久刪除，您一旦刪除後，帳號將無法復原，請您務必確定操作。",
    deleteAccount:"刪除帳號",
  };

  return PageType;
}

export default usePageData;
