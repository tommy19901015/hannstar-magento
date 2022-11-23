function mappingD360I18n(lang: string) {
  const mappingObj: any = {
    "en-us": "en_US",
    "zh-hant": "zh_Hant_TW",
    "zh-cn": "zh_Hans_CN",
  };
  return lang && mappingObj[lang] ? mappingObj[lang] : "zh_Hant_TW";
}

export default mappingD360I18n;
