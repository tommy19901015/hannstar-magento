import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_TabContentObj } from "./interface"
import "./css.scss";
import { pageData } from "./pageData";

const HannstarLogin: React.FC = () => {
  const pageName = "HannstarLogin";
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<any>("");
  const loginBlock: any = useRef()
  const errorMessageBlock: any = useRef()

  useEffect(() => {
    const magentoDom: any = document.getElementById("hannstar-magento-login")
    if (magentoDom) loginBlock.current.appendChild(magentoDom);

    const magentoErrorMessageDom: any = document.getElementsByClassName("page messages")[0]
    if (magentoErrorMessageDom) errorMessageBlock.current.appendChild(magentoErrorMessageDom);

    setAccount(getMagentoAccount().value)
    setPassword(getMagentoPassword().value)
  }, [])

  const getMagentoAccount = () => {
    const emailDom: any = document.getElementById("email")
    return emailDom ? emailDom : ""
  }

  const getMagentoPassword = () => {
    const passwordDom: any = document.getElementById("pass")
    return passwordDom ? passwordDom : ""
  }

  const handleAccout = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoAccount()) {
      getMagentoAccount().value = e.target.value
    }

    setAccount(e.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoPassword()) {
      getMagentoPassword().value = e.target.value
    }

    setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log({ account, password });
    const send2: any = document.getElementById("send2")
    if (send2) {
      send2.click()
    }
  }

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div ref={errorMessageBlock}></div>
        <div>登入</div>
        <input onChange={handleAccout} type="text" value={account} />
        <input onChange={handlePassword} type="text" value={password} />
        <div onClick={handleLogin}>送出</div>
        <div ref={loginBlock} className="magentoLoginBlock"></div>
      </div>
    </Layout>
  );
};

export default HannstarLogin;
