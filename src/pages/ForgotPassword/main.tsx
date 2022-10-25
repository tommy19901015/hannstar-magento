import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";

const ForgotPassword: React.FC = () => {
  const pageName = "ForgotPassword";

  const [email, setEmail] = useState<string>("");
  const [isEmailError, setIsEmptyError] = useState<boolean>(true);
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

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoEmailDom()) {
      getMagentoEmailDom().value = e.target.value;
    }
    const emailValue = e.target.value.trim();
    setEmail(emailValue);
  };

  const handleSend = () => {
    const sendBtn: any = document.getElementById("hannstar-register-btn");
    let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let getEmailVal = email.replace(/\s*/g,"");
    const isTypeError = regex.test(getEmailVal) ;
    setIsEmptyError(isTypeError);
    if (sendBtn) sendBtn.click();
  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div className="mainTitle">忘記密碼</div>
        <div className={`${pageName}Content`}>
          <div className="columnBlock">
            <div className="title required">請輸入您的帳號Email，<br/>系統會將您的密碼發送到您的信箱。</div>
            <div className="bodyBlock input">
              <input
              type="text"
              onChange={handleEmail}
              value={email}
              placeholder="請填入您的Email"
              className={`${!!isEmailError ? "" : "error"}`}
              />
               {!isEmailError && <div className="errorMessage"><i className="">*</i>必填欄位；輸入格式有誤，請重新輸入</div>}
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
