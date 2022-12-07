import React, { useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import D360Templates from "../../templates/D360Templates/main";
import Director from "./Director/pageData"
import Audit from "./Audit/pageData"
import Salary from "./Salary/pageData"
import Check from "./Check/pageData"
import Operate from "./Operate/pageData"
import Risk from "./Risk/pageData"
import InfoSecurity from "./InfoSecurity/pageData"
import Trade from "./Trade/pageData"
import Charter from "./Charter/pageData"


const SustainabilityGovernance: React.FC = () => {
  const pageName = "SustainabilityGovernance";
  const DirectorData = Director();
  const AuditData = Audit();
  const SalaryData = Salary();
  const CheckData = Check();
  const OperateData = Operate();
  const RiskData = Risk();
  const InfoSecurityData = InfoSecurity();
  const TradeData = Trade();
  const CharterData = Charter();

  const [sustainabilityTabType, SetSustainabilityTabType] =
    useState<string>("Director");

  const handleSustainabilityTab = (type: string) => {
    SetSustainabilityTabType(type);
  };

  const D360TemplatesProp =
  {
    site: "/investors/report",
    method: "GetAllArticles"
  }

  const DirectorBlock: React.FC = () => {
    //董事會名單
    return (
      <>
        <TemplateLayout
          {...DirectorData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "5e63ca05-dc2b-4147-b473-cc587ea5a4c1",
          method: "GetArticle"
        }} />
      </>
    );
  };

  const AuditBlock: React.FC = () => {
    //審計委員會
    return (
      <>
        <TemplateLayout
          {...AuditData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "d09aa5cf-5f9b-4bc8-9931-c5531ede1aab",
          method: "GetArticle"
        }} />
      </>
    );
  };
  const SalaryBlock: React.FC = () => {
    //薪酬委員會
    return (
      <>
        <TemplateLayout
          {...SalaryData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "a37a23e7-dc10-40ea-a2d4-6c96c6fe3f88",
          method: "GetArticle"
        }} />
      </>
    );
  };
  const CheckBlock: React.FC = () => {
    //內部稽核
    return (
      <>
        <TemplateLayout
          {...CheckData}
          handleSustainabilityTab={handleSustainabilityTab}
        />

      </>
    );
  };
  const OperateBlock: React.FC = () => {
    //誠信經營
    return (
      <>
        <TemplateLayout
          {...OperateData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "b2e44058-39da-48e7-9080-15a5fb1c814d",
          method: "GetArticle"
        }} />
      </>
    );
  };
  const RiskBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...RiskData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
      </>
    );
  };
  const InfoSecurityBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...InfoSecurityData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
      </>
    );
  };
  const TradeBlock: React.FC = () => {
    //內部重大資訊處理暨防範內線交易管理
    return (
      <>
        <TemplateLayout
          {...TradeData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "a5d6cbf0-d43c-4125-b831-70b1c651892e",
          method: "GetArticle"
        }} />
      </>
    );
  };
  const CharterBlock: React.FC = () => {
    //公司治理章程與程序
    return (
      <>
        <TemplateLayout
          {...CharterData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <D360Templates {... {
          site: "7d34ea41-4af0-4b6d-b4ae-87d9be565cbb",
          method: "GetArticle"
        }} />
      </>
    );
  };

  const mappingType = () => {
    return {
      Director: <DirectorBlock />,
      Audit: <AuditBlock />,
      Salary: <SalaryBlock />,
      Check: <CheckBlock />,
      Operate: <OperateBlock />,
      Risk: <RiskBlock />,
      InfoSecurity: <InfoSecurityBlock />,
      Trade: <TradeBlock />,
      Charter: <CharterBlock />,
    };
  };

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {mappingType()[sustainabilityTabType]}
        <SustainabilityBlock
          {...{
            component: "graphics3",
            type: "governance",
          }}
        />
      </div>
    </Layout>
  );
};

export default SustainabilityGovernance;
