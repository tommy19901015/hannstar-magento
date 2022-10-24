import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";

const ResetPassword: React.FC = () => {
  const pageName = "ResetPassword";

  const [email, setEmail] = useState<string>("");

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

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getMagentoEmailDom()) {
      getMagentoEmailDom().value = e.target.value;
    }
    setEmail(e.target.value);
  };

  const handleSend = () => {
    const sendBtn: any = document.getElementById("hannstar-register-btn");
    if (sendBtn) sendBtn.click();
  };

  return (
    <Layout>
      <div className={`${pageName}`}>
        <div className="mainTitle">忘記密碼</div>
        <div className={`${pageName}Content`}>
          <div className="columnBlock">
            <div className="title required">請輸入...</div>
            <div className="bodyBlock input">
              <input type="text" onChange={handleEmail} value={email} />
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

export default ResetPassword;
