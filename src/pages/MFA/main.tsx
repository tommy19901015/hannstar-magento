import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import { validate, patterns } from "../../common/validateUtils"
import "./css.scss";
import usePageData from "./pageData";

const MFA: React.FC = () => {
  const pageName = "MFA";

  const [code, setCode] = useState<string>("");
  const [isCodeError, setIsCodeError] = useState<boolean>(true);
  const MFABlockRef: any = useRef();
  const errorMessageBlock: any = useRef();
  const tableData = usePageData();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "hannstar-magento-loginMFA"
    );
    if (magentoDom) MFABlockRef.current.appendChild(magentoDom);

    // const magentoErrorMessageDom: any =
    //   document.getElementsByClassName("page messages")[0];
    // if (magentoErrorMessageDom)
    //   errorMessageBlock.current.appendChild(magentoErrorMessageDom);

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
    const sendBtn: any = document.getElementById("sendMail");
    sendBtn && sendBtn.click();
  };

  const handleCode = () => {
    const sendBtn: any = document.getElementById("send2");
    const codeValidate = validate(code, patterns.number);
    setIsCodeError(codeValidate);
    if (codeValidate) {
      sendBtn && sendBtn.click();
    }
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
                className={`${!isCodeError ? "error" : ""}`}
              />
              {!isCodeError && (
                <div className="errorMessage">
                  ???????????????????????????????????????????????????
                </div>
              )}
            </div>
          </div>
          <div className="hannstarRegisterBtn" onClick={handleCode}>
            {tableData.sendBtn}
          </div>
          <span>{tableData.otherMessage}<span onClick={handleSend}>{tableData.linkText}</span></span>
        </div>
        <div ref={MFABlockRef} className="magentoBlock"></div>
      </div>
    </Layout>
  );
};

export default MFA;
