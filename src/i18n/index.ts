import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import { en, tw, cn } from "./language/index";

const DEFAULT_LANGUAGE = "en";
  
i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en
      },
      tw: {
        translation: tw
      },
      cn: {
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
