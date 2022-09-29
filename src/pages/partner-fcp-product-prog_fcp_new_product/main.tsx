import React, { useRef, useState, useMemo } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import PartnerFcpTemplate from "../../templates/partner_product/main";
import StepOne from "./stepOne/main";
import StepTwo from "./stepTwo/main";
import StepThree from "./stepThree/main";
import StepFour from "./stepFour/main";
import StepFive from "./stepFive/main";
import { PageType } from "../../templates/partner_product/interface";
import { IFormProps } from "../../component/form/interface";

import "./css.scss";

enum StepTap {
  One,
  Two,
  Three,
  Four,
  Five,
}


const PartnerFcpProductProgFcpNewProduct: React.FC = () => {
  const pageName = "partner-fcp-product-prog_fcp_new_product";

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "供應商協同合作",
        href: "",
      },
      {
        text: "協同製造夥伴",
        href: "",
      },
      {
        text: "產品清單",
        href: "",
      },
      {
        text: "新增產品",
        href: "",
      },
    ],
  };

  const StepTapBlock = () => {
    const [step, setStep] = useState<StepTap>(StepTap.One);

    type I_tabStateInfo = {
      text: string;
      state: StepTap;
    }[];

    const tabStateInfo: I_tabStateInfo = [
      {
        text: "步驟一",
        state: StepTap.One,
      },
      {
        text: "步驟二",
        state: StepTap.Two,
      },
      {
        text: "步驟三",
        state: StepTap.Three,
      },
      {
        text: "步驟四",
        state: StepTap.Four,
      },
      {
        text: "步驟五",
        state: StepTap.Five,
      },
    ];

    const changeState = (state: StepTap, index: number) => {
      setStep(index);
    };

    const handleSaveEvent = (form:IFormProps) =>{
      console.log('form',form)
      
    }

    const mappingArray = [
      {
        step: StepTap.One,
        stepComponent:  <StepOne handleSaveAll={handleSaveEvent} />,
      },
      {
        step: StepTap.Two,
        stepComponent: useMemo(() => <StepTwo />, []),
      },
      {
        step: StepTap.Three,
        stepComponent: useMemo(() => <StepThree />, []),
      },
      {
        step: StepTap.Four,
        stepComponent: useMemo(() => <StepFour />, []),
      },
      {
        step: StepTap.Five,
        stepComponent: useMemo(() => <StepFive />, []),
      },
    ];

    return (
      <div className={`${pageName}ContentBlock`}>
        <div className="stepTapBlock">
          {tabStateInfo.map((item, index) => (
            <div
              className={`stateTab ${step === index ? "active" : ""}`}
              onClick={() => changeState(item.state, index)}
            >
              {item.text}
            </div>
          ))}
        </div>
        {mappingArray.map((item, index) => (
          <div
            className={`stepTabContent ${step === item.step ? "" : "hide"}`}
            key={index}
          >
            {item.stepComponent}
          </div>
        ))}
      </div>
    );
  };

  const partnerFcpTemplateProp = {
    pageType: PageType.Product,
    contentComponent: <StepTapBlock />,
    activeLink: 2,
  };

  return (
    <Layout>
      <Breadcrumbs data={breadcrumbsData} />
      <PartnerFcpTemplate data={partnerFcpTemplateProp} />
    </Layout>
  );
};

export default PartnerFcpProductProgFcpNewProduct;
