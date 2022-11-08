import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import AccountTemplate from "../../templates/AccountTemplate/main";
import {
  patterns,
  validate,
  validatePassword,
} from "../../common/validateUtils";
import urlConfig from "../../config/urlSetting.json";
import "./css.scss";

const HannstarLogin: React.FC = () => {
  const pageName = "HannstarLogin";

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
        <h2>登入</h2>
        <div className="magentoMessageBlock" ref={errorMessageBlock}></div>
        <div className="columnBlock">
          <div className="title required">帳號</div>
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
              必填欄位；輸入格式有誤，請重新輸入
            </div>
          )}
        </div>

        <div className="columnBlock">
          <div className="title required">密碼</div>
          <div className="bodyBlock input">
            <input
              onChange={handlePassword}
              type="password"
              value={password}
              className={`${!isPasswordPass ? "error" : ""}`}
            />
          </div>
          <div className={`remind ${!isPasswordPass ? "errorMessage" : ""}`}>
            必填欄位；請輸入至少8個字元，並包含至少一個大寫、一個小寫和一個特殊字元
          </div>
        </div>
        <div className="row">
          <div className="columnBlock">
            <div className="bodyBlock select">
              <div className="hannstarCheckBox spaceBetween alignCenter">
                <input id="checkBox1" type="checkBox" value="yes" name="yes" />
                <label htmlFor="checkBox1">記住帳號</label>
              </div>
            </div>
          </div>
          <a href={urlConfig.account.forgotPassword.href}>忘記密碼</a>
        </div>
        <div className="loginBtn" onClick={handleLogin}>
          登入
        </div>
        <p className="create">
          還沒有HannStar帳號?
          <a href={urlConfig.account.register.href}>建立帳號</a>
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
