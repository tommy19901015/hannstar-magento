import React from "react";
import Layout from "../../component/layout/main";
import Template1 from "../../templates/Template1/main";
import usePageData from "./pageData";
import "./css.scss";

const CSRISMS: React.FC = () => {
  const pageName = "CSRISMS";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Template1 {...pageData} />
      </div>
    </Layout>
  );
};

export default CSRISMS;
