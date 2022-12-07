import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import AccountTemplate from "../../templates/AccountTemplate/main";
import {
  patterns,
  validate,
  validatePassword,
} from "../../common/validateUtils";
import { urlConfig } from "../../config/urlSetting";
import "./css.scss";
import useLoginForm from "./pageData";

const HannstarLogin: React.FC = () => {
  const pageName = "HannstarLogin";
  const pageData = useLoginForm();

  const LoginContent = () => {
    const [account, setAccount] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isAccountPass, setIsAccountPass] = useState<Boolean>(true);
    const [isPasswordPass, setIsPasswordPass] = useState<boolean>(true);

    const loginBlock: any = useRef();
    const errorMessageBlock: any = useRef();

    useEffect(() => {
      const magentoDom: any = document.getElementById("hannstar-magento-login");
      if (magentoDom) loginBlock.current.appendChild(magentoDom);

      const magentoDefultMessageDom: any =
        document.getElementsByClassName("page messages")[0];

      if (magentoDefultMessageDom)
        errorMessageBlock.current.appendChild(magentoDefultMessageDom);

      setAccount(getMagentoAccount().value);
      setPassword(getMagentoPassword().value);
    }, []);

    const getMagentoAccount = () => {
      const emailDom: any = document.getElementById("email");
      return emailDom ? emailDom : "";
    };

    const getMagentoPassword = () => {
      const passwordDom: any = document.getElementById("pass");
      return passwordDom ? passwordDom : "";
    };

    const handleAccout = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoAccount()) {
        getMagentoAccount().value = e.target.value;
      }

      setAccount(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoPassword()) {
        getMagentoPassword().value = e.target.value;
      }

      setPassword(e.target.value);
    };

    const handleLogin = () => {
      const accountValidate = validate(account, patterns.email);
      const passwordValidate = validatePassword(password);
      setIsAccountPass(accountValidate);
      setIsPasswordPass(passwordValidate);
      if (accountValidate && passwordValidate) {
        const send2: any = document.getElementById("send2");
        send2 && send2.click();
      }
    };

    return (
      <div className="hannstarLoginBlock">
        <h2>{pageData.loginTitle}</h2>
        <div className="magentoMessageBlock" ref={errorMessageBlock}></div>
        <div className="columnBlock">
          <div className="title required">{pageData.account}</div>
          <div className="bodyBlock input">
            <input
              type="text"
              onChange={handleAccout}
              value={account}
              placeholder="請填入您的Email"
              className={`${!isAccountPass ? "error" : ""}`}
            />
          </div>
          {!isAccountPass && (
            <div className="errorMessage">
              {pageData.errorMessage}
            </div>
          )}
        </div>

        <div className="columnBlock">
          <div className="title required">{pageData.password}</div>
          <div className="bodyBlock input">
            <input
              onChange={handlePassword}
              type="password"
              value={password}
              className={`${!isPasswordPass ? "error" : ""}`}
            />
          </div>
          <div className={`remind ${!isPasswordPass ? "errorMessage" : ""}`}>
            {pageData.required}
          </div>
        </div>
        <div className="row">
          <div className="columnBlock">
            <div className="bodyBlock select">
              <div className="hannstarCheckBox spaceBetween alignCenter">
                <input id="checkBox1" type="checkBox" value="yes" name="yes" />
                <label htmlFor="checkBox1">{pageData.rememberAccount}</label>
              </div>
            </div>
          </div>
          <a href={urlConfig().account.forgotPassword.href}>{pageData.forgotPassword}</a>
        </div>
        <div className="loginBtn" onClick={handleLogin}>
          {pageData.loginBtn}
        </div>
        <p className="create">
          {pageData.hasAccount}
          <a href={urlConfig().account.register.href}>{pageData.createAccount}</a>
        </p>
        <div ref={loginBlock} className="magentoLoginBlock"></div>
      </div>
    );
  };
  const accountTemplateProp = {
    content: <LoginContent />,
  };

  return (
    <Layout>
      <div className={`${pageName}Container`}>
        <AccountTemplate {...accountTemplateProp} />
      </div>
    </Layout>
  );
};

export default HannstarLogin;
