import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const AboutTeam: React.FC = () => {
  const pageName = "AboutTeam";
  const pageData = usePageData();

  const D360TemplatesProp =
  {
    site: "2f4b44a9-84fc-4ecb-ae32-8cfa3d3deb5f",
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

export default AboutTeam;
