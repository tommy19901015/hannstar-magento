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
import { StepTap, I_tabStateInfo } from "./interface";

import "./css.scss";

const PartnerAddProduct: React.FC = () => {
  const pageName = "PartnerAddProduct";

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

    const tabStateInfo: I_tabStateInfo[] = [
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

    const changeState = (state: StepTap) => {
      setStep(state);
    };

    const stepOneRef: any = useRef(null);
    const stepTwoRef: any = useRef(null);
    const stepThreeRef: any = useRef(null);
    const stepFourRef: any = useRef(null);
    const stepFiveRef: any = useRef(null);

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
      {
        step: StepTap.Three,
        stepComponent: useMemo(() => <StepThree ref={stepThreeRef} />, []),
        getData: () => stepThreeRef.current.handleSaveStepThree,
      },
      {
        step: StepTap.Four,
        stepComponent: useMemo(() => <StepFour ref={stepFourRef} />, []),
        getData: () => stepFourRef.current.handleSaveStepFour,
      },
      {
        step: StepTap.Five,
        stepComponent: useMemo(() => <StepFive ref={stepFiveRef} />, []),
        getData: () => stepFiveRef.current.handleSaveStepFive,
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
              {step !== StepTap.Five ? (
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
              {step !== StepTap.Five && (
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
    pageType: PageType.Product,
    contentComponent: <StepTapBlock />,
    activeLink: 2,
  };

  return (
    <Layout>
      <Breadcrumbs {...breadcrumbsData} />
      <PartnerFcpTemplate data={partnerFcpTemplateProp} />
    </Layout>
  );
};

export default PartnerAddProduct;
