import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const D360Article: React.FC = () => {
  const pageName = "D360Article";
  const pageData = usePageData();

  const D360TemplatesProp =
  {
    site: "/sustainability/report",
    method: "GetAllArticles"
  }

  return (
    <Layout>
      <D360Templates {...D360TemplatesProp} />
    </Layout>
  );
};

export default D360Article;
