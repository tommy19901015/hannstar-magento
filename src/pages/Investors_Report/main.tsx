import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const InvestorsReport: React.FC = () => {
  const pageName = "InvestorsReport";
  const pageData = usePageData();

  const D360TemplatesProp =
  {
    site: "/investors/report",
    method: "GetAllArticles"
  }

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <Breadcrumbs {...pageData.breadcrumbs} />
            <D360Templates {...D360TemplatesProp} />
          </>
        } />
    </Layout>
  );
};

export default InvestorsReport;
