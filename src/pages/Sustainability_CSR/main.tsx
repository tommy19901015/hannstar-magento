import React, { useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import Chairman from "./Chairman/pageData";
import Governance from "./Governance/pageData";
import Negotiate from "./Negotiate/pageData";
import Communicate from "./Communicate/pageData";

import "./css.scss";

const SustainabilityCSR: React.FC = () => {
  const pageName = "SustainabilityCSR";

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
        <div>董事長的話</div>
      </>
    );
  };

  const CommunicateBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...CommunicateData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>利害關係人溝通管道</div>
      </>
    );
  };

  const mappingType = () => {
    return {
      Chairman: <ChairmanBlock />,
      Governance: (
        <TemplateLayout
          {...GovernanceData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
      ),
      Negotiate: (
        <TemplateLayout
          {...NegotiateData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
      ),
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

export default SustainabilityCSR;
