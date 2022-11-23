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
    return (
      <>
        <TemplateLayout
          {...FoundationData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {...{
          site: "/investors/report",
          method: "GetAllArticles"
        }} />
      </>
    );
  };

  const RBABlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...RBAData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {...{
          site: "/investors/report",
          method: "GetAllArticles"
        }} />
      </>
    );
  };


  const LaborBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...LaborData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {...{
          site: "/investors/report",
          method: "GetAllArticles"
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
