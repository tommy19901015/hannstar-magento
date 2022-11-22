import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";

import Breadcrumbs from "../../component/breadcrumbs/main";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import Graphics3 from "../../component/graphics3/main";

import usePageData from "./pageData";
import "./css.scss";

const SustainabilityCSR: React.FC = () => {
  const pageName = "SustainabilityCSR";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {/* <SustainabilityBlock */}
        {/* <TemplateLayout {...pageData} /> */}
        {/* <Graphics3 {[{...pageData.graphics3}]} /> */}
        <Graphics3 groups={[{ ...pageData.graphics3 }]} />
      </div>
    </Layout>
  );
};

export default SustainabilityCSR;
