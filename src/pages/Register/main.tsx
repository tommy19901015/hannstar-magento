import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_TabContentObj } from "./interface";
import "./css.scss";
import { pageData } from "./pageData";

const HannstarRegister: React.FC = () => {
  const pageName = "HannstarRegister";
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<any>("");

  const registerBlock: any = useRef();
  const errorMessageBlock: any = useRef();

  useEffect(() => {
    const magentoDom: any = document.getElementById(
      "hannstar-magento-register"
    );
    if (magentoDom) registerBlock.current.appendChild(magentoDom);

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
    const confirmPasswordDom = document.getElementById("password-confirmation");
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
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoConfirmPasswordDom()) {
      getMagentoConfirmPasswordDom().value = e.target.value;
    }
    setConfirmPassword(e.target.value);
  };

  const handleRegister = () => {
    console.log({ firstName, lastName, email, password, confirmPassword });
    const registerBtn: any = document.getElementById("hannstar-register-btn");
    if (registerBtn) registerBtn.click();
  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div ref={registerBlock}></div>
        <div>註冊</div>
        <div className={`${pageName}Content`}>
          <div className="row">
            <div className="columnBlock">
              <div className="title required">姓</div>
              <div className="bodyBlock input">
                <input
                  type="text"
                  onChange={handleFirstName}
                  value={firstName}
                />
              </div>
            </div>
            <div className="columnBlock">
              <div className="title required">名</div>
              <div className="bodyBlock input">
                <input type="text" onChange={handleLastName} value={lastName} />
              </div>
            </div>
          </div>
          <div className="columnBlock">
            <div className="title required">電子郵箱(即帳號)</div>
            <div className="bodyBlock input">
              <input type="text" onChange={handleEmail} value={email} />
            </div>
          </div>
          <div className="columnBlock">
            <div className="title required">密碼</div>
            <div className="bodyBlock input">
              <input type="text" onChange={handlePassword} value={password} />
            </div>
          </div>
          <div className="columnBlock">
            <div className="title required">密碼(再次確認)</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleConfirmPassword}
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="columnBlock">
            <div className="title">公司名稱</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleConfirmPassword}
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="columnBlock">
            <div className="title">公司所在地</div>
            <div className="bodyBlock select">
              <select>
                <option>台灣</option>
                <option>中國</option>
                <option>日本</option>
              </select>
            </div>
          </div>
          <div className="checkBlock"></div>
        </div>

        <div onClick={handleRegister}>申請註冊</div>
        <div ref={registerBlock} className="magentoRegisteBlock"></div>
      </div>
    </Layout>
  );
};

export default HannstarRegister;
