import React, { useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import D360Templates from "../../templates/D360Templates/main";
import Equality from "./Equality/pageData"
import Talents from "./Talents/pageData"
import Profession from "./Profession/pageData"
import Society from "./Society/pageData"
import Foundation from "./Foundation/pageData"
import RBA from "./RBA/pageData"
import Labor from "./Labor/pageData"
import "./css.scss";

const SustainabilitySocial: React.FC = () => {
  const pageName = "SustainabilitySocial";
  const EqualityData = Equality();
  const TalentsData = Talents();
  const ProfessionData = Profession();
  const SocietyData = Society();
  const FoundationData = Foundation();
  const RBAData = RBA();
  const LaborData = Labor();

  const [sustainabilityTabType, SetSustainabilityTabType] =
    useState<string>("Equality");

  const handleSustainabilityTab = (type: string) => {
    SetSustainabilityTabType(type);
  };

  const EqualityBlock: React.FC = () => {
    return (<TemplateLayout
      {...EqualityData}
      handleSustainabilityTab={handleSustainabilityTab}
    />);
  };

  const TalentsBlock: React.FC = () => {
    return (<TemplateLayout
      {...TalentsData}
      handleSustainabilityTab={handleSustainabilityTab}
    />);
  };

  const ProfessionBlock: React.FC = () => {
    return (<TemplateLayout
      {...ProfessionData}
      handleSustainabilityTab={handleSustainabilityTab}
    />);
  };

  const SocietyBlock: React.FC = () => {
    return (<TemplateLayout
      {...SocietyData}
      handleSustainabilityTab={handleSustainabilityTab}
    />);
  };

  const FoundationBlock: React.FC = () => {
    //彩晶基金會
    return (
      <>
        <TemplateLayout
          {...FoundationData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
      </>
    );
  };

  const RBABlock: React.FC = () => {
    //RBA年度績效目標
    return (
      <>
        <TemplateLayout
          {...RBAData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "c6e38d52-a6a7-491c-b185-dbb5cb1cdee7",
          method: "GetArticle"
        }} />
      </>
    );
  };


  const LaborBlock: React.FC = () => {
    //勞工與道德政策
    return (
      <>
        <TemplateLayout
          {...LaborData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "a0ebfa2c-0326-4d7e-8c27-b58d43aaade8",
          method: "GetArticle"
        }} />
      </>
    );
  };

  const mappingType = () => {
    return {
      Equality: <EqualityBlock />,
      Talents: <TalentsBlock />,
      Profession: <ProfessionBlock />,
      Society: <SocietyBlock />,
      Foundation: <FoundationBlock />,
      RBA: <RBABlock />,
      Labor: <LaborBlock />
    };
  };


  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {mappingType()[sustainabilityTabType]}
        <SustainabilityBlock
          {...{
            component: "graphics3",
            type: "social",
          }}
        />
      </div>
    </Layout>
  );
};

export default SustainabilitySocial;
