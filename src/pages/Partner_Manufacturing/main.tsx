import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Template3 from "../../templates/Template3/main";
import { pageData } from "./pageData"
import "./css.scss";

const PartnerManufacturing: React.FC = () => {
  const pageName = "PartnerManufacturing";

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Template3 {...pageData()} />
      </div>
    </Layout>
  );
};

export default PartnerManufacturing;
