import React from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";
import TemplateLayout from "../../templates/TemplateLayout/main";

const ServiceIndex: React.FC = () => {
  const pageName = "ServiceIndex";
  const pageData = usePageData();

  return (
    <Layout>
    <div className={`${pageName}MainContainer`}>
      <TemplateLayout {...pageData} />
    </div>
  </Layout>
  );
};

export default ServiceIndex;
