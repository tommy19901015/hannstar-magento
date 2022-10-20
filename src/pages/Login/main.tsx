import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_TabContentObj } from "./interface"
import "./css.scss";
import { pageData } from "./pageData";

const Login: React.FC = () => {
  const pageName = "Login";
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginBlock: any = useRef()


  useEffect(() => {
    const magentoDom: any = document.getElementById("magentoBlock")
    loginBlock.current.appendChild(magentoDom);
  }, [])

  const handleAccout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailDom: any = document.getElementById("email")
    if (emailDom) {
      emailDom.value = e.target.value
    }

    setAccount(e.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordDom: any = document.getElementById("pass")
    if (passwordDom) {
      passwordDom.value = e.target.value
    }
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log({ account, password });
    const send2: any = document.getElementById("send2")
    if (send2) {
      send2.onclick()
    }
  }

  return (
    <Layout>
      <div ref={loginBlock} className="login">
        <input onChange={handleAccout} type="text" value={account} />
        <input onChange={handlePassword} type="text" value={password} />
        <div onClick={handleLogin}>送出</div>
      </div>
    </Layout>
  );
};

export default Login;
