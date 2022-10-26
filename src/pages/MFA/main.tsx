import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";

const MFA: React.FC = () => {
  const pageName = "MFA";

  const [code, setCode] = useState<string>("");
  const [isCodeError, setIsCodeError] = useState<boolean>(true);
  const MFAQRCodeBlockRef: any = useRef();
  const errorMessageBlock: any = useRef();
  const tableData = usePageData();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "hannstar-magento-mfaQRcode"
    );
    if (magentoDom) MFAQRCodeBlockRef.current.appendChild(magentoDom);

    const magentoErrorMessageDom: any =
      document.getElementsByClassName("page messages")[0];
    if (magentoErrorMessageDom)
      errorMessageBlock.current.appendChild(magentoErrorMessageDom);

  }, []);

  const getMagentoPasscodeDom = (): any => {
    const passcodeDom = document.getElementById("passcode");
    return passcodeDom ? passcodeDom : null;
  };

  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoPasscodeDom()) {
      getMagentoPasscodeDom().value = e.target.value;
    }

    setCode(e.target.value.trim());
  };
  const handleSend = () => {
    const sendBtn: any = document.getElementById("send2");
    let getCodeVal = code.replace(/\s*/g, "");
    const isTypeError = getCodeVal.length === 0;
    setIsCodeError(isTypeError);
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
        <div ref={MFAQRCodeBlockRef} className="magentoBlock"></div>
      </div>
    </Layout>
  );
};

export default MFA;