import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import NewnewTemplate1 from "../../templates/Template1/newnewmain";
import usePageData from "./pageData";
import "./css.scss";

const SolutionIndex: React.FC = () => {
  const pageName = "SolutionIndex";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {/* <NewnewTemplate1 /> */}
        <TemplateLayout {...pageData} />
      </div>
    </Layout>
  );
};

export default SolutionIndex;
