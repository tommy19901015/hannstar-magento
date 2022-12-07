import React, { useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import Chairman from "./Manage/pageData";
import Governance from "./Environmental/pageData";
import Negotiate from "./Certified/pageData";
import Communicate from "./Policy/pageData";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const AboutStrategy: React.FC = () => {
  const pageName = "AboutStrategy";

  const ChairmanData = Chairman();
  const GovernanceData = Governance();
  const NegotiateData = Negotiate();
  const CommunicateData = Communicate();

  const [sustainabilityTabType, SetSustainabilityTabType] =
    useState<string>("Chairman");

  const handleSustainabilityTab = (type: string) => {
    SetSustainabilityTabType(type);
  };

  const ChairmanBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...ChairmanData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates
          {...{
            site: "a844d0f9-4d43-403b-89b8-cc52f8f289fd",
            method: "GetArticle",
          }}
        />
      </>
    );
  };

  const GovernanceBlock: React.FC = () => {
    return (
      <TemplateLayout
        {...GovernanceData}
        handleSustainabilityTab={handleSustainabilityTab}
      />
    );
  };

  const NegotiateBlock: React.FC = () => {
    return (
      <TemplateLayout
        {...NegotiateData}
        handleSustainabilityTab={handleSustainabilityTab}
      />
    );
  };

  const CommunicateBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...CommunicateData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates
          {...{
            site: "9f8b5cd6-4341-4737-a9d0-8ebb7de94359",
            method: "GetArticle",
          }}
        />
      </>
    );
  };

  const mappingType = () => {
    return {
      Chairman: <ChairmanBlock />,
      Governance: <GovernanceBlock />,
      Negotiate: <NegotiateBlock />,
      Communicate: <CommunicateBlock />,
    };
  };

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {mappingType()[sustainabilityTabType]}
        <SustainabilityBlock
          {...{
            component: "graphics3",
            type: "csr",
          }}
        />
      </div>
    </Layout>
  );
};

export default AboutStrategy;