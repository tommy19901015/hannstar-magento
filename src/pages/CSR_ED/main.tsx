import React from "react";
import Layout from "../../component/layout/main";
// import Template1 from "../../templates/Template1/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import "./css.scss";

const CSRED: React.FC = () => {
  const pageName = "CSRED";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default CSRED;
