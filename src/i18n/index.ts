import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import { en, tw, cn } from "./language/index";

const DEFAULT_LANGUAGE = window.hannstar.language || "zh_Hant_TW";
  
i18n.use(initReactI18next).init({
    resources: {
      en_US: {
        translation: en
      },
      zh_Hant_TW: {
        translation: tw
      },
      zh_Hant_CN: {
        translation: cn
      }
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    keySeparator: ".",
    interpolation: {
      escapeValue: false
    }
  });
  
export default i18n;
