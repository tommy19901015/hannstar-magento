import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const InformationsPrivacy: React.FC = () => {
  const pageName = "InformationsPrivacy";
  const pageData = usePageData();

  const D360TemplatesProp =
  {
    site: "09edf03d-b3fe-4e4a-addd-b4c967721bc8",
    method: "GetArticle"
  }

  return (
    <Layout>
      <D360Templates {...D360TemplatesProp} />
    </Layout>
  );
};

export default InformationsPrivacy;
