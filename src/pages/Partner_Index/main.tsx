import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";

const PartnerIndex: React.FC = () => {
  const pageName = "PartnerIndex";
  const pageData = usePageData();

  return (
    <Layout>
    <div className={`${pageName}MainContainer`}>
      <TemplateLayout {...pageData} />
    </div>
  </Layout>
  );
};

export default PartnerIndex;
