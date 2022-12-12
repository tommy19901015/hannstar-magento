import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t("Account_EditAccount.breadcrumbsLinkFrontPage"),
          href: "",
        },
        {
          text: t("Account_EditAccount.breadcrumbsLinkMemberCentre"),
          href: "",
        },
        {
          text: t("Account_EditAccount.breadcrumbsLinkAccountEdit"),
          href: "",
        },
      ],
    },
    personal: t("Account_EditAccount.personal"),
    account: t("Account_EditAccount.account"),
    surname: t("Account_EditAccount.surname"),
    name: t("Account_EditAccount.name"),
    changePass: t("Account_EditAccount.changePass"),
    oldPasswordTitle: t("Account_EditAccount.oldPasswordTitle"),
    newPasswordTitle: t("Account_EditAccount.newPasswordTitle"),
    requiredInput: t("Account_EditAccount.requiredInput"),
    requiredCharacters: t("Account_EditAccount.requiredCharacters"),
    passwordAgain: t("Account_EditAccount.passwordAgain"),
    required: t("Account_EditAccount.required"),
    saveBtn: t("Account_EditAccount.saveBtn"),
    accountDelete: t("Account_EditAccount.accountDelete"),
    confirmDelete: t("Account_EditAccount.confirmDelete"),
    deleteAccount: t("Account_EditAccount.deleteAccount"),
  };

  return PageType;
}

export default usePageData;
