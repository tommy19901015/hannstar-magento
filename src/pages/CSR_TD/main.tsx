import React from "react";
import Layout from "../../component/layout/main";
import Template1 from "../../templates/Template1/main";
import NewnewTemplate1 from "../../templates/Template1/newnewmain";
import usePageData from "./pageData";
import "./css.scss";

const CSRTD: React.FC = () => {
  const pageName = "CSRTD";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <NewnewTemplate1 />
        <Template1 {...pageData} />
      </div>
    </Layout>
  );
};

export default CSRTD;
