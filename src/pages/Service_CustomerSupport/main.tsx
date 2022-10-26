import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Template4 from "../../templates/Template4/main";
import usePageData from "./pageData"
import "./css.scss";

const ServiceCustomerSupport: React.FC = () => {
  const pageName = "ServiceCustomerSupport";
  const pageData = usePageData();

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Template4 {...pageData} />
      </div>
    </Layout>
  );
};

export default ServiceCustomerSupport;
