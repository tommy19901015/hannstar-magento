import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Template3 from "../../templates/Template3/main";
import usePageData from "./pageData";
import "./css.scss";

const ServiceGreenService: React.FC = () => {
  const pageName = "ServiceGreenService";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Template3 {...pageData} />
      </div>
    </Layout>
  );
};

export default ServiceGreenService;
