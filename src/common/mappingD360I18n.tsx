function mappingD360I18n(magentoLang: string) {
  const mappingObj: any = {
    "en_US": "en",
    "zh_Hant_TW": "zh-hant",
    "zh_Hans_CN": "zh",
  };
  return magentoLang && mappingObj[magentoLang] ?
    mappingObj[magentoLang] : "zh_Hant_TW";
}

export default mappingD360I18n;
