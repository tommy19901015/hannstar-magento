import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    title:"You are signed out",
    content: "You have signed out and will go to our homepage in 5 seconds."
  };

  return PageType;
}

export default usePageData;
