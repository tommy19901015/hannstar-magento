import React from "react";
import Layout from "../../component/layout/main";
import ApplicationTemplate from "../../templates/ApplicationTemplate/main"
import "./css.scss";

const PaperDisplaySmartCity: React.FC = () => {
  const pageName = "PaperDisplaySmartCity";

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <ApplicationTemplate site="paperdisplay_parkingmeter" />
      </div>
    </Layout>
  );
};

export default PaperDisplaySmartCity;
