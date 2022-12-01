function mappingUrlI18n() {
  const magentoLang = window.hannstar.language
  const urlLang = window.location.pathname.split("/")[1]
  if (urlLang) {
    const mappingObj: any = {
      "en_US": "/en",
      "zh_Hant_TW": "/tw",
      "zh_Hans_CN": "/cn",
    };
    return magentoLang && mappingObj[magentoLang] ?
      mappingObj[magentoLang] : "/tw";
  } else {
    return "/tw"
  }

}

export default mappingUrlI18n;
