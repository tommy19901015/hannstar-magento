import React, { useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import AboutBlock from "../../component/aboutBlock/main";

import Certified from "./Certified/pageData";
import Policy from "./Policy/pageData";
import Environmental from "./Environmental/pageData";
import Manage from "./Manage/pageData";
import Event from "./Event/pageData";

import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const AboutStrategy: React.FC = () => {
  const pageName = "AboutStrategy";

  const CertifiedData = Certified();
  const PolicyData = Policy();
  const EnvironmentalData = Environmental();
  const ManageData = Manage();
  const EventData = Event();

  const [aboutTabType, setAboutTabType] = useState<string>("Manage");

  const handleAboutTab = (type: string) => {
    setAboutTabType(type);
  };

  const ManageBlock: React.FC = () => {
    //品質管理與策略
    return (
      <>
        <TemplateLayout {...ManageData} handleAboutTab={handleAboutTab} />
        <D360Templates
          {...{
            site: "6d7c349b-3c01-446c-945f-ebd9693a4148",
            method: "GetArticle",
          }}
        />
      </>
    );
  };

  const PolicyBlock: React.FC = () => {
    //綠色產品政策
    return <TemplateLayout {...PolicyData} handleAboutTab={handleAboutTab} />;
  };

  const EnvironmentalBlock: React.FC = () => {
    //綠色環保
    return (
      <>
        <TemplateLayout
          {...EnvironmentalData}
          handleAboutTab={handleAboutTab}
        />
        <D360Templates
          {...{
            site: "5df4bcd6-b2fc-4395-a182-5e26f5fc4623",
            method: "GetArticle",
          }}
        />
      </>
    );
  };

  const CertifiedBlock: React.FC = () => {
    //綠色管理與認證
    return (
      <>
        <TemplateLayout {...CertifiedData} handleAboutTab={handleAboutTab} />
      </>
    );
  };

  const EventBlock: React.FC = () => {
    //綠色產品大事記
    return (
      <>
        <TemplateLayout {...EventData} handleAboutTab={handleAboutTab} />
        <D360Templates
          {...{
            site: "2337cb8b-5845-469d-bcdd-e8232aafe120",
            method: "GetArticle",
          }}
        />
      </>
    );
  };

  const mappingType = () => {
    return {
      Manage: <ManageBlock />,
      Policy: <PolicyBlock />,
      Environmental: <EnvironmentalBlock />,
      Certified: <CertifiedBlock />,
      Event: <EventBlock />,
    };
  };

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {mappingType()[aboutTabType]}
      </div>
    </Layout>
  );
};

export default AboutStrategy;
