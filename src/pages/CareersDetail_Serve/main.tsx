import React from "react";
import Layout from "../../component/layout/main";
// import TemplateLayout from "../../templates/TemplateLayout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import "./css.scss";

const CareersServe: React.FC = () => {
  const pageName = "CareersServe";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default CareersServe;
