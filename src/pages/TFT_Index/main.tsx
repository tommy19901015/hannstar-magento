import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import TemplateLayout from "../../templates/TemplateLayout/main";
import "./css.scss";

const TFTIndex: React.FC = () => {
  const pageName = "TFTIndex";

  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default TFTIndex;
