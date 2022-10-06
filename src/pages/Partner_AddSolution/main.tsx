import React, { useRef, useState, useMemo } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import PartnerFcpTemplate from "../../templates/partner_product/main";
import StepOne from "./stepOne/main";
import StepTwo from "./stepTwo/main";
import { PageType } from "../../templates/partner_product/interface";
import { StepTap, I_tabStateInfo } from "./interface";

import "./css.scss";

const PartnerAddSolution: React.FC = () => {
  const pageName = "PartnerAddSolution";

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
        text: "方案產品清單",
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

    const tabStateInfo: I_tabStateInfo[] = [
      {
        text: "步驟一",
        state: StepTap.One,
      },
      {
        text: "步驟二",
        state: StepTap.Two,
      },
    ];

    const changeState = (state: StepTap) => {
      setStep(state);
    };

    const stepOneRef: any = useRef(null);
    const stepTwoRef: any = useRef(null);

    const handleSave = (getData: any) => {
      getData();
    };

    const handleSubmit = () => {
      console.log("handleSubmit");
    };

    const handleChangePage = (type: string, step: StepTap) => {
      type === "next" ? setStep(step + 1) : setStep(step - 1);
      window.scrollTo({ top: 80, behavior: "smooth" });
    };

    const mappingArray = [
      {
        step: StepTap.One,
        stepComponent: useMemo(() => <StepOne ref={stepOneRef} />, []),
        getData: () => stepOneRef.current.handleSaveStepOne,
      },
      {
        step: StepTap.Two,
        stepComponent: useMemo(() => <StepTwo ref={stepTwoRef} />, []),
        getData: () => stepTwoRef.current.handleSaveStepTwo,
      },
    ];

    return (
      <div className={`${pageName}ContentBlock`}>
        <div className="stepTapBlock">
          {tabStateInfo.map((item, index) => (
            <div
              className={`stateTab ${step === index ? "active" : ""}`}
              onClick={() => changeState(item.state)}
            >
              {item.text}
            </div>
          ))}
        </div>
        {mappingArray.map((item, index) => (
          <>
            <div
              className={`stepTabContent ${step === item.step ? "" : "hide"}`}
              key={index}
            >
              {item.stepComponent}
            </div>
            <div className={`btnBlock ${step === item.step ? "" : "hide"}`}>
              {step !== StepTap.One && (
                <div
                  className="formBtn"
                  onClick={() => handleChangePage("pre", item.step)}
                >
                  上一步
                </div>
              )}
              {step !== StepTap.Two ? (
                <div
                  className="formBtn"
                  onClick={() => handleSave(item.getData())}
                >
                  儲存
                </div>
              ) : (
                <div className="formBtn" onClick={() => handleSubmit()}>
                  提交
                </div>
              )}
              {step !== StepTap.Two && (
                <div
                  className="formBtn"
                  onClick={() => handleChangePage("next", item.step)}
                >
                  下一步
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    );
  };

  const partnerFcpTemplateProp = {
    pageType: PageType.Solution,
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

export default PartnerAddSolution;
