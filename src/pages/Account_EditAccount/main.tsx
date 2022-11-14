import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import {
  isNotEmpty,
  compare,
  validatePassword,
} from "../../common/validateUtils";
import urlConfig from "../../config/urlSetting.json";
import usePageData from "./pageData";
import "./css.scss";
import { postAccountInfo } from "../../services/api.service";
import { DeleteBlockPop } from "./magentoBlock";
import Popup from "../../component/popup/main";

const AccountEditAccount: React.FC = () => {
  const pageName = "AccountEditAccount";
  const pageData = usePageData();
  const [accountInfo, setAccountInfo] = useState<any>("")
  const { breadcrumbs, captionData, content } = pageData;

  const deletePopUpRef: any = useRef();

  useEffect(() => {
    postAccountInfo({
      Email: window.hannstar.email,
    }).then((response: any) => {
      if (response.success !== false) setAccountInfo(response)
    });
  }, [])


  const EditAccountContent = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

    const [firstNamePass, setFirstNamePass] = useState<boolean>(true);
    const [lastNamePass, setLastNamePass] = useState<boolean>(true);
    const [oldPasswordPass, setOldPasswordPass] = useState<boolean>(true);
    const [newPasswordPass, setNewPasswordPass] = useState<boolean>(true);
    const [confirmNewPasswordPass, setConfirmNewPasswordPass] =
      useState<boolean>(true);

    const magentoMessageRef: any = useRef();

    useEffect(() => {
      const magentoDefultMessageDom: any =
        document.getElementsByClassName("page messages")[0];

      if (magentoDefultMessageDom)
        magentoMessageRef.current.appendChild(magentoDefultMessageDom);

      setFirstName(getMagentoFirstNameDom().value);
      setLastName(getMagentoLastNameDom().value);
    }, []);

    const getMagentoFirstNameDom = (): any => {
      const firstNameDom = document.getElementById("firstname");
      return firstNameDom ? firstNameDom : "";
    };

    const getMagentoLastNameDom = (): any => {
      const lastNameDom = document.getElementById("lastname");
      return lastNameDom ? lastNameDom : "";
    };

    const getMagentoOldPasswordDom = (): any => {
      const oldPasswordDom = document.getElementById("current-password");
      return oldPasswordDom ? oldPasswordDom : "";
    };

    const getMagentoNewPasswordDom = (): any => {
      const newPasswordDom = document.getElementById("password");
      return newPasswordDom ? newPasswordDom : "";
    };

    const getMagentoConfirmNewPasswordDom = (): any => {
      const confirmNewPasswordDom = document.getElementById(
        "password-confirmation"
      );
      return confirmNewPasswordDom ? confirmNewPasswordDom : "";
    };

    const getMagentoDeleteAccountDom = (): any => {
      const deleteAccountDom = document.getElementsByClassName("action-delete")[0];
      return deleteAccountDom ? deleteAccountDom : "";
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

    const handleOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoOldPasswordDom()) {
        getMagentoOldPasswordDom().value = e.target.value;
      }
      setOldPassword(e.target.value);
    };

    const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (getMagentoNewPasswordDom()) {
        getMagentoNewPasswordDom().value = e.target.value;
      }
      setNewPassword(e.target.value);
    };

    const handleConfirmNewPassword = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (getMagentoConfirmNewPasswordDom()) {
        getMagentoConfirmNewPasswordDom().value = e.target.value;
      }
      setConfirmNewPassword(e.target.value);
    };

    const handleSave = () => {
      setFirstNamePass(isNotEmpty(firstName));
      setLastNamePass(isNotEmpty(lastName));
      setNewPasswordPass(validatePassword(newPassword));
      setConfirmNewPasswordPass(compare(confirmNewPassword, newPassword));
      setOldPasswordPass(validatePassword(oldPassword));

      console.log({
        firstName,
        lastName,
        oldPassword,
        newPassword,
        confirmNewPassword,
      });

      const allValidateColumn = [
        isNotEmpty(firstName),
        isNotEmpty(lastName),
        validatePassword(oldPassword),
        validatePassword(newPassword),
        compare(confirmNewPassword, newPassword),
      ];

      if (allValidateColumn.every((v) => v === true)) {
        const saveBtn: any = document.getElementById("hannstarSaveBtn");
        if (saveBtn) saveBtn.click();
      }
    };

    const getMagentoDeletePopUpDom = () => {
      const deletePopUpBtnDom = document.getElementsByClassName("action-primary action-accept")[0]
      return deletePopUpBtnDom ? deletePopUpBtnDom : "";
    }

    const popupProps = {
      content: <div className={`${pageName}DeletePop`}>
        <div className="title">請您再次確認是否刪除帳號？</div>
        <div className="btnBlock">
          <div className="btn" onClick={() => deletePopUpRef.current.classList.remove("show")}>取消</div>
          <div className="btn" onClick={() => handleMagentoDeletePopUp()}>確定</div>
        </div>
      </div>,
      openFc: deletePopUpRef,
    }

    const handleMagentoDeletePopUp = () => {
      const popUpBtn: any = getMagentoDeletePopUpDom()
      console.log("popUpBtn", popUpBtn)
      if (popUpBtn) {
        popUpBtn.click();
      }
    }

    const handleDeleteAccount = () => {
      const deleteBtn: any = getMagentoDeleteAccountDom()
      if (deleteBtn) {
        deleteBtn.click();
        deletePopUpRef.current.classList.add("show");
      }
    }

    return (
      <div className={`${pageName}Content`}>
        <Popup {...popupProps} />
        <div className="magentoMessageBlock" ref={magentoMessageRef}></div>
        <h1 className="mainTitle">個人專區</h1>
        <div className="infoBlock">
          <div className="leftBlock">
            <div className="accountTitle">帳戶資訊</div>
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
          <div className="rightBlock">
            <div className="accountTitle">變更密碼</div>
            <div className="columnBlock">
              <div className="title required">舊密碼</div>
              <div className="bodyBlock input">
                <input
                  type="password"
                  onChange={handleOldPassword}
                  value={oldPassword}
                  className={`${!oldPasswordPass ? "error" : ""}`}
                />
              </div>
              {!oldPasswordPass && (
                <div className="errorMessage">
                  必填欄位；請輸入至少8個字元，並包含至少一個大寫、一個小寫和一個特殊字元
                </div>
              )}
            </div>
            <div className="columnBlock">
              <div className="title required">新密碼</div>
              <div className="bodyBlock input">
                <input
                  type="password"
                  onChange={handleNewPassword}
                  value={newPassword}
                  className={`${!newPasswordPass ? "error" : ""}`}
                />
              </div>
              {!newPasswordPass && (
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
                  onChange={handleConfirmNewPassword}
                  value={confirmNewPassword}
                  className={`${!confirmNewPasswordPass ? "error" : ""}`}
                />
              </div>
              {!confirmNewPasswordPass && (
                <div className="errorMessage">必填欄位；需與密碼相同</div>
              )}
            </div>
          </div>
        </div>
        <div className="saveBtn" onClick={handleSave}>
          送出
        </div>
        <div className="deleteBlock">
          <div className="deleteTitle">帳號刪除</div>
          <div className="deleteText">您的帳號將被永久刪除，您一旦刪除後，帳號將無法復原，請您務必確定操作。</div>
          <div onClick={handleDeleteAccount} className="deleteBtn">刪除帳號</div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate
        contentComponent={<EditAccountContent />}
        rootId={accountInfo.rootid}
        accountstatus={accountInfo.status}
      />
    </Layout>
  );
};

export default AccountEditAccount;
