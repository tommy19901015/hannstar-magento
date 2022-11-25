import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    title: t('Account_Logout.title'),
    content: t('Account_Logout.content'),
  };

  return PageType;
}

export default usePageData;
