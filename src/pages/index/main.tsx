import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import "./css.scss";

const Index: React.FC = () => {
  const pageName = "Index";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default Index;
