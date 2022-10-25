import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";

const MFAQRCode: React.FC = () => {
  const pageName = "MFAQRCode";

  const [code, setEmail] = useState<string>("");
  const [isCodeError, setIsEmptyError] = useState<boolean>(true);
  const emailBlock: any = useRef();
  const errorMessageBlock: any = useRef();
  const tableData =usePageData();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "hannstar-magento-forgotPassword"
    );
    if (magentoDom) emailBlock.current.appendChild(magentoDom);

    const magentoErrorMessageDom: any =
      document.getElementsByClassName("page messages")[0];
    if (magentoErrorMessageDom)
      errorMessageBlock.current.appendChild(magentoErrorMessageDom);

    // setFirstName(getMagentoFirstNameDom().value);
    // setLastName(getMagentoLastNameDom().value);
    // setEmail(getMagentoEmailDom().value);
    // setPassword(getMagentoPasswordDom().value);
    // setConfirmPassword(getMagentoConfirmPasswordDom().value);
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
    setEmail(emailValue);
  };

  const handleSend = () => {
    const sendBtn: any = document.getElementById("hannstar-register-btn");
    //let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let getCodeVal = code.replace(/\s*/g, "");
    const isTypeError = getCodeVal.length === 0;
    setIsEmptyError(isTypeError);
    if (sendBtn) sendBtn.click();
  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div className="mainTitle">{tableData.formTitle}</div>
        <div className={`${pageName}Content`}>
          <div className="columnBlock">
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
            </div>
          </div>
          <div className="hannstarRegisterBtn" onClick={handleSend}>
            {tableData.sendBtn}
          </div>
          <span>{tableData.otherMessage}</span>
        </div>
        <div ref={emailBlock} className="magentoRegisteBlock"></div>
      </div>
    </Layout>
  );
};

export default MFAQRCode;
