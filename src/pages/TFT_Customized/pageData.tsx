import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType = {}

  return PageType;
}

export default usePageData;
