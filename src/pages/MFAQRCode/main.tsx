import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import "./css.scss";

const MFAQRCode: React.FC = () => {
  const pageName = "MFAQRCode";
  const tableData = usePageData();
  const [code, setCode] = useState<string>("");
  const [isCodeError, setIsCodeError] = useState<boolean>(false);
  const MFAQRCodeBlockRef: any = useRef();
  const QRCodeBlockRef: any = useRef();
  const errorMessageBlock: any = useRef();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "hannstar-magento-MFAQRcode"
    );
    if (magentoDom) MFAQRCodeBlockRef.current.appendChild(magentoDom);

    const QRCodeDom: any = document.getElementById("QRcode");
    if (QRCodeDom) QRCodeBlockRef.current.appendChild(QRCodeDom);



    // const magentoErrorMessageDom: any =
    //   document.getElementsByClassName("page messages")[0];
    // if (magentoErrorMessageDom)
    //   errorMessageBlock.current.appendChild(magentoErrorMessageDom);
  }, []);

  const getMagentoInputDom = (): any => {
    const inputDom = document.getElementById("passcode");
    return inputDom ? inputDom : null;
  };

  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoInputDom()) {
      getMagentoInputDom().value = e.target.value;
    }
    setCode(e.target.value.trim());
  };

  const handleSend = () => {
    const sendBtn: any = document.getElementById("send2");
    let getCodeVal = code.replace(/\s*/g, "");
    const isTypeError = getCodeVal.length === 0 || isNaN(+getCodeVal);
    setIsCodeError(isTypeError);
    if (sendBtn) sendBtn.click();
  };

  return (
    <Layout>
      <div className={`${pageName}`}>

        <div className={`${pageName}Content`}>
          <div className="contentBlock">
            <div className="titleContent">
              <div className="mainTitle">{tableData.pageTitle}</div>
              <p>{tableData.subTitle}</p>
              <span>{tableData.noteTitle}</span>
              <div className="stepGuide">
                {tableData.stepGuide}<i className=""></i>
              </div>
            </div>
            <div className="imgContent">
              <img alt="demo" src="https://s3magentodev.s3.us-west-2.amazonaws.com/Image/account/img_2fa_demo.png" />
            </div>
          </div>
        </div>
        <div className={`${pageName}StepContent`}>
          <div className="contentBlock">
            <div className="subTitle">{tableData.formTitle}</div>
            <div className="content">
              <div className="step">
                <div className="stepDescription">
                  <span className="stepNum">1</span>
                  <span className="description">{tableData.installText1}<br />{tableData.installText2}</span>
                </div>

                <div className="stepExample">
                  <img className="appImg" alt="android" src="https://s3magentodev.s3.us-west-2.amazonaws.com/Image/account/img_2fa_app_android.png" />
                  <img className="appImg" alt="ios" src="https://s3magentodev.s3.us-west-2.amazonaws.com/Image/account/img_2fa_app_ios.png" />
                </div>
              </div>
              <div className="step">
                <div className="stepDescription">
                  <span className="stepNum">2</span>
                  <span className="description">{tableData.bind}</span>
                </div>

                <div className="stepExample">
                  <span>{tableData.bindSubTitle}</span>
                  <div className="QRCodeBlockRef" ref={QRCodeBlockRef}></div>
                  <span className="note">{tableData.bindNote}</span>
                </div>
              </div>
              <div className="step">
                <div className="stepDescription">
                  <span className="stepNum">3</span>
                  <span className="description">{tableData.verifylText1}<br />{tableData.verifylText2}</span>
                </div>

                <div className="bodyBlock input">
                  <input
                    type="text"
                    onChange={handleCodeInput}
                    value={code}
                    placeholder={tableData.placeholder}
                    className={`${!!isCodeError ? "error" : ""}`}
                  />
                  {!!isCodeError && (
                    <div className="errorMessage">
                      <i className="">*</i>{tableData.errorMessage}
                    </div>
                  )}
                  <div
                    className="hannstarVerifyBtn"
                    onClick={handleSend}
                  >{tableData.verifyBtn}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div ref={MFAQRCodeBlockRef} className="magentoBlock"></div>
      </div>
    </Layout>
  );
};

export default MFAQRCode;
