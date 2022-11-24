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
    return (
      <>
        <TemplateLayout
          {...DirectorData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
      </>
    );
  };

  const AuditBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...AuditData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>審計委員會</div>
      </>
    );
  };
  const SalaryBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...SalaryData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>薪酬委員會</div>
      </>
    );
  };
  const CheckBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...CheckData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>內部稽核</div>
      </>
    );
  };
  const OperateBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...OperateData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>誠信經營</div>
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
    return (
      <>
        <TemplateLayout
          {...TradeData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>內部重大資訊處理暨防範內線交易管理</div>
      </>
    );
  };
  const CharterBlock: React.FC = () => {
    return (
      <>
        <TemplateLayout
          {...CharterData}
          handleSustainabilityTab={handleSustainabilityTab}
        />
        <div>公司治理章程與程序</div>
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
