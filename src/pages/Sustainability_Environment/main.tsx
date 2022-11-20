import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import "./css.scss";

const SustainabilityEnvironment: React.FC = () => {
  const pageName = "SustainabilityEnvironment";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default SustainabilityEnvironment;
