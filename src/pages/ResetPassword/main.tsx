import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";

const ResetPassword: React.FC = () => {
  const pageName = "ResetPassword";

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isInputSame, setInputError] = useState<boolean>(true);

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
  }, []);

  const getMagentoEmailDom = (): any => {
    const emailDom = document.getElementById("email");
    return emailDom ? emailDom : null;
  };

  const handleNewPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoEmailDom()) {
      getMagentoEmailDom().value = e.target.value;
    }
    const passwordValue = e.target.value.trim();
    setNewPassword(passwordValue);
  };

  const handleConfirmPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoEmailDom()) {
      getMagentoEmailDom().value = e.target.value;
    }
    const passwordValue = e.target.value.trim();
    setConfirmPassword(passwordValue);
  };

  const validatePassword = (password:string) => {
    let regex = /^[a-zA-Z\d]{8,}$/i;
    let value = password.replace(/\s*/g,"");
    return regex.test(value) 
  }

  const handleSend = () => {
    const sendBtn: any = document.getElementById("hannstar-register-btn");
    const getNewPassVal = validatePassword(newPassword);
    const getConfirmPassVal = validatePassword(confirmPassword);
   const isDiffVal = getNewPassVal && getConfirmPassVal && newPassword === confirmPassword;
    setInputError(isDiffVal);
    
    if (sendBtn) sendBtn.click();
  };


  return (
    <Layout>
      <div className={`${pageName}`}>
      <div className="mainTitle">重置密碼</div>
      <div className={`${pageName}Content`}>
          <div className="columnBlock">
            <div className="title required">新密碼</div>
            <div className="bodyBlock input">
              <input
              type="text"
              onChange={handleNewPass}
              value={newPassword}
              placeholder="新密碼"
              className={`${!!isInputSame ? "" : "error"}`}
              />
               {!isInputSame && <div className="errorMessage"><i className="">*</i>必填欄位；輸入格式有誤，請重新輸入</div>}
            </div>
            <div className="title required">新密碼確認</div>
            <div className="bodyBlock input">
              <input
              type="text"
              onChange={handleConfirmPass}
              value={confirmPassword}
              placeholder="確認密碼"
              className={`${!!isInputSame ? "" : "error"}`}
              />
               {!isInputSame && <div className="errorMessage"><i className="">*</i>必填欄位；輸入格式有誤，請重新輸入</div>}
            </div>
          </div>
          <div className="hannstarRegisterBtn" onClick={handleSend}>
            送出
          </div>
        <div ref={emailBlock} className="magentoRegisteBlock"></div>
      </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
