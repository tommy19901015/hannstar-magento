import React from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import TemplateLayout from "../../templates/TemplateLayout/main";
import "./css.scss";

const TFTCustomized: React.FC = () => {
  const pageName = "TFTCustomized";

  const pageData = usePageData();
  return (
    <Layout>
      TFT_Customized
    </Layout>
  );
};

export default TFTCustomized;
