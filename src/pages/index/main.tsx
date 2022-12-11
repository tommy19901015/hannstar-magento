import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import "./css.scss";
import SlickComponent from "../../component/slickComponent/main";

import Loading from "../../component/loading/main";

const Index: React.FC = () => {
  const pageName = "Index";
  const pageData = usePageData();
  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Loading />
        <TemplateLayout {...pageData} />
        <SlickComponent imgs={[]} />
      </div>
    </Layout>
  );
};

export default Index;
