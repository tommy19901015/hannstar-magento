import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import { patterns, validate, compare, validatePassword } from "../../common/validateUtils";
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

  const handleSend = () => {
    const getNewPassVal = validatePassword(newPassword);
    const getConfirmPassVal = compare(confirmPassword, newPassword)
    const isDiffVal = getNewPassVal && getConfirmPassVal && compare(newPassword, confirmPassword);
    setInputError(isDiffVal);

    if (isDiffVal) {
      const sendBtn: any = document.getElementById("hannstar-register-btn");
      if (sendBtn) sendBtn.click();
    }

  };


  return (
    <Layout>
      <div className={`${pageName}`}>
        <div className="mainTitle">????????????</div>
        <div className={`${pageName}Content`}>
          <div className="columnBlock">
            <div className="title required">?????????</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleNewPass}
                value={newPassword}
                placeholder="?????????"
                className={`${!!isInputSame ? "" : "error"}`}
              />
              {!isInputSame && <div className="errorMessage"><i className="">*</i>???????????????????????????????????????????????????</div>}
            </div>
            <div className="title required">???????????????</div>
            <div className="bodyBlock input">
              <input
                type="text"
                onChange={handleConfirmPass}
                value={confirmPassword}
                placeholder="????????????"
                className={`${!!isInputSame ? "" : "error"}`}
              />
              {!isInputSame && <div className="errorMessage"><i className="">*</i>???????????????????????????????????????????????????</div>}
            </div>
          </div>
          <div className="hannstarRegisterBtn" onClick={handleSend}>
            ??????
          </div>
          <div ref={emailBlock} className="magentoRegisteBlock"></div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
