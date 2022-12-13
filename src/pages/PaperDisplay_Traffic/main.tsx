import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import PaperDisplayTab from "../../component/paperDisplayTab/main"
import usePageData from "./pageData";
import "./css.scss";

const PaperDisplayTraffic: React.FC = () => {
  const pageName = "PaperDisplayTraffic";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
        <PaperDisplayTab />
      </div>
    </Layout>
  );
};

export default PaperDisplayTraffic;
