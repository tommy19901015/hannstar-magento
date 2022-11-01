import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import { patterns, validate } from "../../common/validateUtils";
import "./css.scss";
import usePageData from "./pageData";

const ForgotPassword: React.FC = () => {
  const pageName = "ForgotPassword";

  const [email, setEmail] = useState<string>("");
  const [isEmailPass, setIsEmailPass] = useState<boolean>(true);
  const emailBlock: any = useRef();
  const errorMessageBlock: any = useRef();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "form-validate"
    );
    if (magentoDom) emailBlock.current.appendChild(magentoDom);

    const magentoDefultMessageDom: any =
      document.getElementsByClassName("page messages")[0];

    if (magentoDefultMessageDom)
      errorMessageBlock.current.appendChild(magentoDefultMessageDom);

    setEmail(getMagentoEmailDom().value);

  }, []);

  const getMagentoEmailDom = (): any => {
    const emailDom = document.getElementById("email_address");
    return emailDom ? emailDom : null;
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoEmailDom()) {
      getMagentoEmailDom().value = e.target.value;
    }
    const emailValue = e.target.value.trim();
    setEmail(emailValue);
  };

  const handleSend = () => {
    const emailValidate = validate(email, patterns.email);
    setIsEmailPass(emailValidate);
    if (emailValidate) {
      const sendBtn: any = document.getElementById("hannstar-send-btn");
      if (sendBtn) sendBtn.click();
    }

  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div className="mainTitle">忘記密碼</div>
        <div className="magentoMessageBlock" ref={errorMessageBlock}></div>
        <div className={`${pageName}Content`}>
          <div className="columnBlock">
            <div className="title required">請輸入您的帳號(Email)，<br />系統會將您的密碼發送到您的信箱。</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleEmail}
                value={email}
                placeholder="請填入您的Email"
                className={`${!isEmailPass ? "error" : ""}`}
              />
              {!isEmailPass && <div className="errorMessage">必填欄位；輸入格式有誤，請重新輸入</div>}
            </div>
          </div>
          <div className="hannstarRegisterBtn" onClick={handleSend}>
            請求重設
          </div>
        </div>
        <div ref={emailBlock} className="magentoRegisteBlock"></div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
