import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const PaperDisplayApplications: React.FC = () => {
  const pageName = "PaperDisplayApplications";
  const pageData = usePageData();
  const D360TemplatesProp =
  {
    site: "/paperdisplay/applications",
    method: "GetAllArticles"
  }

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
        <Columns
          type={ColType.OneCol}
          content={<D360Templates {...D360TemplatesProp} />} />
      </div>
    </Layout>
  );
};

export default PaperDisplayApplications;
