import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const AboutCertification: React.FC = () => {
  const pageName = "AboutCertification";
  const pageData = usePageData();

  const D360TemplatesProp =
  {
    site: "37a234bc-7919-49db-bec6-7c2564d18453",
    method: "GetArticle"
  }

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...pageData.breadcrumbs} />} />
      <D360Templates {...D360TemplatesProp} />
    </Layout>
  );
};

export default AboutCertification;
