import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import {
  patterns,
  validate,
  validatePassword,
} from "../../common/validateUtils";
import "./css.scss";
import { urlConfig } from "../../config/urlSetting";

const MFAQRCode: React.FC = () => {
  const pageName = "MFAQRCode";
  const tableData = usePageData();
  const [code, setCode] = useState<string>("");
  const [isCodePass, setIsCodePass] = useState<boolean>(true);
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
    const codeValidate = validate(code, patterns.number);
    setIsCodePass(codeValidate);

    if (codeValidate) {
      const sendBtn: any = document.getElementById("send2");
      sendBtn && sendBtn.click();
    }
  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div className={`${pageName}Content`}>
          <div className="contentBlock">
            <div className="titleContent">
              <div className="mainTitle">{tableData.pageTitle}</div>
              <p>{tableData.subTitle}</p>
              <img
                alt="demo"
                className="mobileImgContent"
                src={`${urlConfig().s3Url}/Image/account/img_2fa_demo.png`}
              />
              <span>{tableData.noteTitle}</span>
            </div>
            <div className="imgContent">
              <img
                alt="demo"
                src={`${urlConfig().s3Url}/Image/account/img_2fa_demo.png`}
              />
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
                  <span className="description">
                    {tableData.installText1}
                    <br />
                    {tableData.installText2}
                  </span>
                </div>

                <div className="stepExample">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=zh_TW&gl=US"
                  >
                    <img
                      className="appImg"
                      alt="android"
                      src={`${
                        urlConfig().s3Url
                      }/Image/account/img_2fa_app_android.png`}
                    />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458"
                  >
                    <img
                      className="appImg"
                      alt="ios"
                      src={`${
                        urlConfig().s3Url
                      }/Image/account/img_2fa_app_ios.png`}
                    />
                  </a>
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
                  <span className="description">
                    {tableData.verifylText1}
                    <br />
                    {tableData.verifylText2}
                  </span>
                </div>

                <div className="bodyBlock input">
                  <input
                    type="text"
                    onChange={handleCodeInput}
                    value={code}
                    placeholder={tableData.placeholder}
                    className={`${!isCodePass ? "error" : ""}`}
                  />
                  {!isCodePass && (
                    <div className="errorMessage">
                      必填欄位；輸入格式有誤，請重新輸入
                    </div>
                  )}
                  <div className="hannstarVerifyBtn" onClick={handleSend}>
                    {tableData.verifyBtn}
                  </div>
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
