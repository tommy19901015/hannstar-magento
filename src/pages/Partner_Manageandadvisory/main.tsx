import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData"
import "./css.scss";

const PartnerManageandadvisory: React.FC = () => {
  const pageName = "PartnerManageandadvisory";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default PartnerManageandadvisory;
