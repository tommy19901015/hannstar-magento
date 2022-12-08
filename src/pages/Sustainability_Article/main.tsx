import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import { postGetD360Art } from "../../services/api.service";
import Columns from "../../component/columns/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import { ColType } from "../../component/columns/interface";
import mappingD360I18n from "../../common/mappingD360I18n";
import D360Templates from "../../templates/D360Templates/main";
import { urlConfig } from "../../config/urlSetting";
import "./css.scss";

const SustainabilityArticle: React.FC = () => {
  const pageName = "SustainabilityArticle";
  const pageData = usePageData();

  const d360TemplatesProp = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleID = urlParams.get('articleID')

    return {
      site: articleID ? articleID
        : window.location.href = urlConfig().hannstar.sustainability_esg.href,
      method: "GetArticle",
      type: "SustainabilityArticle"
    }
  }


  return (
    <Layout>
      <TemplateLayout {...pageData} />
      <D360Templates {...d360TemplatesProp()} />
    </Layout>
  );
};

export default SustainabilityArticle;
