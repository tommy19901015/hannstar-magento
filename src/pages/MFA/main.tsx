import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";

const MFA: React.FC = () => {
  const pageName = "MFA";
  const tableData = usePageData();
  const [code, setCode] = useState<string>("");
  const [isCodeError, setIsCodeError] = useState<boolean>(true);
  const emailBlock: any = useRef();
  const errorMessageBlock: any = useRef();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "hannstar-magento-forgotPassword"
    );
    if (magentoDom) emailBlock.current.appendChild(magentoDom);

    const magentoErrorMessageDom: any =
      document.getElementsByClassName("page messages")[0];
    if (magentoErrorMessageDom)
      errorMessageBlock.current.appendChild(magentoErrorMessageDom);
  }, []);

  const getMagentoEmailDom = (): any => {
    const emailDom = document.getElementById("email");
    return emailDom ? emailDom : null;
  };

  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoEmailDom()) {
      getMagentoEmailDom().value = e.target.value;
    }
    const emailValue = e.target.value.trim();
    setCode(emailValue);
  };

  const handleSend = () => {
    const sendBtn: any = document.getElementById("hannstar-register-btn");
    // let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    // let getEmailVal = email.replace(/\s*/g, "");
    // const isTypeError = regex.test(getEmailVal);
    // setIsCodeError(isTypeError);
    if (sendBtn) sendBtn.click();
  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        
        <div className={`${pageName}Content`}>
          <div className="contentBlock">
            <div className="titleContent">
              <div className="mainTitle">{tableData.formTitle}</div>
              <p>{tableData.subTitle}</p>
              <span>{tableData.noteTitle}</span>
              <div className="stepBtn">
                {tableData.verifyBtn}
              </div>
            </div>
            <img src="https://picsum.photos/400/300"/>
          </div>
         
        </div>
        <div className={`${pageName}StepContent`}>
        <div className="contentBlock">
          <div className="subTitle">{tableData.formTitle}</div>
            <div className="content">
              <div className="step">
                <span className="description">{tableData.install}</span>
                <div className="stepExample">
                <img src="https://picsum.photos/180/50"/>
                <img src="https://picsum.photos/180/50"/>
                </div>
              </div>
              <div className="step">
                <span className="description">{tableData.bind}</span>
                <div className="stepExample">
                  <span>{tableData.bindSubTitle}</span>
                  <img src="https://picsum.photos/100/100"/>
                  <span className="note">{tableData.bindNote}</span>
                </div>
              </div>
              <div className="step">
                <span className="description">{tableData.verify}</span>
                <div className="bodyBlock input">
                <input
                  type="text"
                  onChange={handleCodeInput}
                  value={code}
                  placeholder={tableData.placeholder}
                  className={`${!!isCodeError ? "" : "error"}`}
                />
                {!isCodeError && (
                  <div className="errorMessage">
                    <i className="">*</i>{tableData.errorMessage}
                  </div>
                )}
                <div className="hannstarVerifyBtn">{tableData.verifyBtn}</div>
                </div>
              </div>
              
              </div>
            </div>
        </div>

        <div ref={emailBlock} className="magentoRegisteBlock"></div>
      </div>
    </Layout>
  );
};

export default MFA;
