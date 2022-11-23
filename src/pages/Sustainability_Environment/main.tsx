import React, { useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import Production from "./Production/pageData";
import GreenProduct from "./GreenProduct/pageData";
import Weather from "./Weather/pageData";
import SupplyChain from "./SupplyChain/pageData";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const SustainabilityEnvironment: React.FC = () => {
  const pageName = "SustainabilityEnvironment";

  const ProductionData = Production();
  const GreenProductData = GreenProduct();
  const WeatherData = Weather();
  const SupplyChainData = SupplyChain();

  const [sustainabilityTabType, SetSustainabilityTabType] =
    useState<string>("Production");

  const handleSustainabilityTab = (type: string) => {
    SetSustainabilityTabType(type);
  };

  const ProductionBlock: React.FC = () => {
    return (
      <TemplateLayout
        {...ProductionData}
        handleSustainabilityTab={handleSustainabilityTab}
      />
    );
  };

  const GreenProductBlock: React.FC = () => {
    return (
      <TemplateLayout
        {...GreenProductData}
        handleSustainabilityTab={handleSustainabilityTab}
      />
    );
  };

  const WeatherBlock: React.FC = () => {
    return (
      <TemplateLayout
        {...WeatherData}
        handleSustainabilityTab={handleSustainabilityTab}
      />
    );
  };

  const SupplyChainBlock: React.FC = () => {
    return (
      <TemplateLayout
        {...SupplyChainData}
        handleSustainabilityTab={handleSustainabilityTab}
      />
    );
  };

  const mappingType = () => {
    return {
      Production: <ProductionBlock />,
      GreenProduct: <GreenProductBlock />,
      Weather: <WeatherBlock />,
      SupplyChain: <SupplyChainBlock />,
    };
  };

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {mappingType()[sustainabilityTabType]}
        <SustainabilityBlock
          {...{
            component: "graphics3",
            type: "environment",
          }}
        />
      </div>
    </Layout>
  );
};

export default SustainabilityEnvironment;
