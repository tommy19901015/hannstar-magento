import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const InformationsLegalnotices: React.FC = () => {
  const pageName = "InformationsLegalnotices";
  const pageData = usePageData();

  const D360TemplatesProp =
  {
    site: "a6f29680-cac5-4b7c-ac30-1bc167b4441d",
    method: "GetArticle"
  }

  return (
    <Layout>
      <D360Templates {...D360TemplatesProp} />
    </Layout>
  );
};

export default InformationsLegalnotices;
