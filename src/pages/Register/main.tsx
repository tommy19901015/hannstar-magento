import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import zxcvbn from "zxcvbn";
import {
  validate,
  isNotEmpty,
  patterns,
  compare,
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

    const [firstNameError, setFirstNameError] = useState<boolean | string>("");
    const [lastNameError, setLastNameError] = useState<boolean | string>("");
    const [emailError, setEmailError] = useState<boolean | string>("");
    const [passwordError, setPasswordError] = useState<boolean | string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<
      boolean | string
    >("");

    const [errorMessage, setErrorMessage] = useState<any>("");

    const registerBlock: any = useRef();

    useEffect(() => {
      const magentoDom: any = document.getElementById("form-validate");
      console.log("magentoDom", magentoDom);
      if (magentoDom) registerBlock.current.appendChild(magentoDom);

      // const magentoErrorMessageDom: any =
      //   document.getElementsByClassName("page messages")[0];
      // if (magentoErrorMessageDom)
      //   errorMessageBlock.current.appendChild(magentoErrorMessageDom);

      // setFirstName(getMagentoFirstNameDom().value);
      // setLastName(getMagentoLastNameDom().value);
      // setEmail(getMagentoEmailDom().value);
      // setPassword(getMagentoPasswordDom().value);
      // setConfirmPassword(getMagentoConfirmPasswordDom().value);
    }, []);

    const getMagentoFirstNameDom = (): any => {
      const firstNameDom = document.getElementById("firstname");
      return firstNameDom ? firstNameDom : null;
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
      setCompany(e.target.value);
    };

    const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCountry(e.target.value);
    };

    const handleAgreePrivacy = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAgreePrivacy(e.target.checked);
    };

    const handleAgreeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAgreeEmail(e.target.checked);
    };

    const handleRegister = () => {
      setFirstNameError(isNotEmpty(firstName));
      setLastNameError(isNotEmpty(lastName));
      setEmailError(validate(email, patterns.email));
      setPasswordError(validate(password, patterns.password));
      setConfirmPasswordError(compare(confirmPassword, password));

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
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        agreePrivacy,
      ];

      if (allValidateColumn.every((v) => v === false)) {
        const registerBtn: any = document.getElementById("hannstarRegisterBtn");
        if (registerBtn) registerBtn.click();
      }
    };

    return (
      <div className="hannstarRegisterBlock">
        <div ref={registerBlock}></div>
        <h2>會員註冊</h2>
        <div className={`${pageName}Content`}>
          <div className="row">
            <div className="columnBlock">
              <div className="title required">姓</div>
              <div className="bodyBlock input">
                <input
                  type="text"
                  onChange={handleFirstName}
                  value={firstName}
                  className={`${firstNameError === false ? "error" : ""}`}
                />
              </div>
              {firstNameError === false && (
                <div className="errorMessage">
                  必填欄位；輸入格式有誤，請重新輸入
                </div>
              )}
            </div>
            <div className="columnBlock">
              <div className="title required">名</div>
              <div className="bodyBlock input">
                <input
                  type="text"
                  onChange={handleLastName}
                  value={lastName}
                  className={`${lastNameError === false ? "error" : ""}`}
                />
              </div>
              {lastNameError === false && (
                <div className="errorMessage">
                  必填欄位；輸入格式有誤，請重新輸入
                </div>
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
                className={`${emailError === false ? "error" : ""}`}
              />
            </div>
            {emailError === false && (
              <div className="errorMessage">
                必填欄位；輸入格式有誤，請重新輸入
              </div>
            )}
          </div>
          <div className="columnBlock">
            <div className="title required">密碼</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handlePassword}
                value={password}
                className={`${passwordError === false ? "error" : ""}`}
              />
            </div>
            {(passwordStrengthMeter === 1 || passwordStrengthMeter === 0) && (
              <div className="meter1">弱</div>
            )}
            {passwordStrengthMeter === 2 && <div className="meter2">中</div>}
            {passwordStrengthMeter === 3 && <div className="meter3">強</div>}
            {passwordStrengthMeter === 4 && (
              <div className="meter4">非常強</div>
            )}
            {passwordError === false && (
              <div className="errorMessage">
                必填欄位；輸入格式有誤，請重新輸入
              </div>
            )}
          </div>
          <div className="columnBlock">
            <div className="title required">密碼(再次確認)</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleConfirmPassword}
                value={confirmPassword}
                className={`${confirmPasswordError === false ? "error" : ""}`}
              />
            </div>
            {confirmPasswordError === false && (
              <div className="errorMessage">
                必填欄位；輸入格式有誤，請重新輸入
              </div>
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
            <div className="bodyBlock select">
              <select onChange={handleCountry} value={country}>
                <option value="台灣">台灣</option>
                <option value="中國">中國</option>
                <option value="日本">日本</option>
              </select>
            </div>
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
