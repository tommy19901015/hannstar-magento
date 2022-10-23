import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { serviceType } from "./interface"
import "./css.scss";
import { initialServiceData } from "./pageData";

const HannstarLogin: React.FC = () => {
  const pageName = "HannstarLogin";
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [serviceData, setServiceData] = useState<serviceType[]>(initialServiceData);

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
        <div className="loginBlock">
          <div ref={errorMessageBlock}></div>
          <h2>登入</h2>

          <div className="columnBlock">
            <div className="title required">帳號</div>
            <div className="bodyBlock input">
              <input type="text" onChange={handleAccout} value={account} placeholder="請填入您的Email" />
            </div>
          </div>

          <div className="columnBlock">
            <div className="title required">密碼</div>
            <div className="bodyBlock input">
              <input onChange={handlePassword} type="text" value={password} />
            </div>
          </div>

           
          <div className="columnBlock spaceBetween">
            <div className="input alignCenter">
              <input onChange={handlePassword} className="hannstarCheckBox" type="checkbox" />記住帳號
            </div>
            <a href="">忘記密碼</a>
          </div>
          
          <div className="loginBtn" onClick={handleLogin}>登入</div>
          <p className="create">還沒有HannStar帳號? <a href="">建立帳號</a></p>

         
          <div ref={loginBlock} className="magentoLoginBlock"></div>
        </div>
        
        <div className="serviceBlock">
          <h3>立即註冊翰宇彩晶會員</h3>
            <>{serviceData.map(category => (
              <div className="content">
                <h4 className="title">{category.categoryTitle}</h4>
                  <div className="items">
                  { category.serviceItems.map(item =>(
                    <div className="item">
                      <img className="" src={item.icon} alt={item.icon} />
                      <span className="" >{item.title}</span>
                      <p className="" >{item.directions}</p>
                    </div>
                  ))}
                  </div>
              </div>
            ))}
            </>
        </div>
      </div>
    </Layout>
  );
};

export default HannstarLogin;


