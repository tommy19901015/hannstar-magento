import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import zxcvbn from "zxcvbn";
import {
  validate,
  isNotEmpty,
  patterns,
  compare,
  validatePassword,
} from "../../common/validateUtils";
import "./css.scss";
import { pageData } from "./pageData";
import AccountTemplate from "../../templates/AccountTemplate/main";

const HannstarRegister: React.FC = () => {
  const pageName = "HannstarRegister";

  const RegisterContent = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [agreeEmail, setAgreeEmail] = useState<boolean>(false);
    const [agreePrivacy, setAgreePrivacy] = useState<boolean>(false);
    const [passwordStrengthMeter, setPasswordStrengthMeter] = useState<
      number | string
    >("");
    const [firstNamePass, setFirstNamePass] = useState<boolean>(true);
    const [lastNamePass, setLastNamePass] = useState<boolean>(true);
    const [emailPass, setEmailPass] = useState<boolean>(true);
    const [passwordPass, setPasswordPass] = useState<boolean>(true);
    const [confirmPasswordPass, setConfirmPasswordPass] =
      useState<boolean>(true);
    const [agreePrivacyPass, setAgreePrivacyPass] = useState<boolean>(true);

    const registerBlock: any = useRef();
    const countrySelectBlock: any = useRef();
    const errorMessageBlock: any = useRef();

    useEffect(() => {
      const magentoDom: any = document.getElementById("form-validate");
      if (magentoDom) registerBlock.current.appendChild(magentoDom);

      const magentoCountrySelectDom: any = document.getElementById("country");
      if (magentoCountrySelectDom) countrySelectBlock.current.appendChild(magentoCountrySelectDom);

      const magentoDefultMessageDom: any =
        document.getElementsByClassName("page messages")[0];

      if (magentoDefultMessageDom)
        errorMessageBlock.current.appendChild(magentoDefultMessageDom);

      setFirstName(getMagentoFirstNameDom().value);
      setLastName(getMagentoLastNameDom().value);
      setEmail(getMagentoEmailDom().value);
      setPassword(getMagentoPasswordDom().value);
      setConfirmPassword(getMagentoConfirmPasswordDom().value);
    }, []);

    const getMagentoFirstNameDom = (): any => {
      const firstNameDom = document.getElementById("firstname");
      return firstNameDom ? firstNameDom : "";
    };

    const getMagentoLastNameDom = (): any => {
      const lastNameDom = document.getElementById("lastname");
      return lastNameDom ? lastNameDom : "";
    };

    const getMagentoEmailDom = (): any => {
      const emailDom = document.getElementById("email_address");
      return emailDom ? emailDom : "";
    };

    const getMagentoPasswordDom = (): any => {
      const passwordDom = document.getElementById("password");
      return passwordDom ? passwordDom : "";
    };

    const getMagentoConfirmPasswordDom = (): any => {
      const confirmPasswordDom = document.getElementById(
        "password-confirmation"
      );
      return confirmPasswordDom ? confirmPasswordDom : "";
    };

    const getMagentoisSubscribedDom = (): any => {
      const isSubscribed = document.getElementById("is_subscribed");
      return isSubscribed ? isSubscribed : "";
    };

    // const getMagentoCountryDom = (): any => {
    //   const country = document.getElementById("country");
    //   return country ? country : "";
    // };

    const getMagentoCompanyDom = (): any => {
      const company = document.getElementById("company");
      return company ? company : "";
    };

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoFirstNameDom()) {
        getMagentoFirstNameDom().value = e.target.value;
      }
      setFirstName(e.target.value);
    };

    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoLastNameDom()) {
        getMagentoLastNameDom().value = e.target.value;
      }
      setLastName(e.target.value);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoEmailDom()) {
        getMagentoEmailDom().value = e.target.value;
      }
      setEmail(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoPasswordDom()) {
        getMagentoPasswordDom().value = e.target.value;
      }
      console.log(zxcvbn(e.target.value).score);
      setPasswordStrengthMeter(zxcvbn(e.target.value).score);
      setPassword(e.target.value);
    };

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoConfirmPasswordDom()) {
        getMagentoConfirmPasswordDom().value = e.target.value;
      }
      setConfirmPassword(e.target.value);
    };

    const handleCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoCompanyDom()) {
        getMagentoCompanyDom().value = e.target.value;
      }
      setCompany(e.target.value);
    };

    const handleAgreePrivacy = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAgreePrivacy(e.target.checked);
    };

    const handleAgreeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoisSubscribedDom()) {
        getMagentoisSubscribedDom().checked = e.target.checked;
      }
      setAgreeEmail(e.target.checked);
    };

    const handleRegister = () => {
      setFirstNamePass(isNotEmpty(firstName));
      setLastNamePass(isNotEmpty(lastName));
      setEmailPass(validate(email, patterns.email));
      setPasswordPass(validatePassword(password));
      setConfirmPasswordPass(compare(confirmPassword, password));
      setAgreePrivacyPass(agreePrivacy);

      console.log({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        company,
        country,
        agreeEmail,
        agreePrivacy,
      });

      const allValidateColumn = [
        isNotEmpty(firstName),
        isNotEmpty(lastName),
        validate(email, patterns.email),
        validatePassword(password),
        compare(confirmPassword, password),
        agreePrivacy,
      ];

      if (allValidateColumn.every((v) => v === true)) {
        const registerBtn: any = document.getElementById("hannstarRegisterBtn");
        if (registerBtn) registerBtn.click();
      }
    };

    return (
      <div className="hannstarRegisterBlock">
        <div ref={registerBlock}></div>
        <h2>會員註冊</h2>
        <div className="magentoMessageBlock" ref={errorMessageBlock}></div>
        <div className={`${pageName}Content`}>
          <div className="row">
            <div className="columnBlock">
              <div className="title required">姓</div>
              <div className="bodyBlock input">
                <input
                  type="text"
                  onChange={handleFirstName}
                  value={firstName}
                  className={`${!firstNamePass ? "error" : ""}`}
                />
              </div>
              {!firstNamePass && (
                <div className="errorMessage">必填欄位，請重新輸入</div>
              )}
            </div>
            <div className="columnBlock">
              <div className="title required">名</div>
              <div className="bodyBlock input">
                <input
                  type="text"
                  onChange={handleLastName}
                  value={lastName}
                  className={`${!lastNamePass ? "error" : ""}`}
                />
              </div>
              {!lastNamePass && (
                <div className="errorMessage">必填欄位，請重新輸入</div>
              )}
            </div>
          </div>
          <div className="columnBlock">
            <div className="title required">電子郵箱(即帳號)</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleEmail}
                value={email}
                className={`${!emailPass ? "error" : ""}`}
              />
            </div>
            {!emailPass && (
              <div className="errorMessage">
                必填欄位；輸入格式有誤，請重新輸入
              </div>
            )}
          </div>
          <div className="columnBlock">
            <div className="title required">密碼</div>
            <div className="bodyBlock input">
              <input
                type="password"
                onChange={handlePassword}
                value={password}
                className={`${!passwordPass ? "error" : ""}`}
              />
            </div>
            {/* {(passwordStrengthMeter === 1 || passwordStrengthMeter === 0) && (
              <div className="meter1">弱</div>
            )}
            {passwordStrengthMeter === 2 && <div className="meter2">中</div>}
            {passwordStrengthMeter === 3 && <div className="meter3">強</div>}
            {passwordStrengthMeter === 4 && (
              <div className="meter4">非常強</div>
            )} */}
            {!passwordPass && (
              <div className="errorMessage">
                必填欄位；請輸入至少8個字元，並包含至少一個大寫、一個小寫和一個特殊字元
              </div>
            )}
          </div>
          <div className="columnBlock">
            <div className="title required">密碼(再次確認)</div>
            <div className="bodyBlock input">
              <input
                type="password"
                onChange={handleConfirmPassword}
                value={confirmPassword}
                className={`${!confirmPasswordPass ? "error" : ""}`}
              />
            </div>
            {!confirmPasswordPass && (
              <div className="errorMessage">必填欄位；需與密碼相同</div>
            )}
          </div>
          <div className="columnBlock">
            <div className="title">公司名稱</div>
            <div className="bodyBlock input">
              <input type="text" onChange={handleCompany} value={company} />
            </div>
          </div>
          <div className="columnBlock">
            <div className="title">公司所在地(國家)</div>
            <div className="bodyBlock select" ref={countrySelectBlock}></div>
          </div>
          <div className="checkBlock">
            <div className="columnBlock">
              <div className="bodyBlock checkBox">
                <div className="hannstarCheckBox">
                  <input
                    id="agreePrivacy"
                    type="checkBox"
                    onChange={handleAgreePrivacy}
                  />
                  <label htmlFor="agreePrivacy">
                    我已詳閱並同意<a href="/">瀚宇彩晶隱私申明</a>
                  </label>
                  {!agreePrivacyPass && (
                    <div className="errorMessage">必填欄位 </div>
                  )}
                </div>
              </div>
            </div>
            <div className="columnBlock">
              <div className="bodyBlock checkbox">
                <div className="hannstarCheckBox">
                  <input
                    id="agreeEmail"
                    type="checkBox"
                    onChange={handleAgreeEmail}
                  />
                  <label htmlFor="agreeEmail">
                    我同意收到Hannstar信件與產品資訊
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="hannstarRegisterBtn" onClick={handleRegister}>
            申請註冊
          </div>
        </div>
        <div ref={registerBlock} className="magentoRegisteBlock"></div>
      </div>
    );
  };

  const accountTemplateProp = {
    content: <RegisterContent />,
  };

  return (
    <Layout>
      <div className={`${pageName}Container`}>
        <AccountTemplate {...accountTemplateProp} />
      </div>
    </Layout>
  );
};

export default HannstarRegister;
