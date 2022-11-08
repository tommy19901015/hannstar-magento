import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import zxcvbn from "zxcvbn";
import {
  validate,
  isNotEmpty,
  patterns,
  compare,
  validatePassword,
} from "../../common/validateUtils";
import urlConfig from "../../config/urlSetting.json";
import usePageData from "./pageData";
import "./css.scss";
import { postEnterPrice, postAccountInfo } from "../../services/api.service";

const AccountEditAccount: React.FC = () => {
  const pageName = "AccountEditAccount";
  const pageData = usePageData();
  const [accountInfo, setAccountInfo] = useState<any>("")
  const { breadcrumbs, captionData, content } = pageData;

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

    // const editBlockRef: any = useRef();
    const magentoMessageRef: any = useRef();

    useEffect(() => {
      const magentoDefultMessageDom: any =
        document.getElementsByClassName("page messages")[0];

      if (magentoDefultMessageDom)
        magentoMessageRef.current.appendChild(magentoDefultMessageDom);

      setFirstName(getMagentoFirstNameDom().value);
      setLastName(getMagentoLastNameDom().value);

      postAccountInfo({
        email: "rfchen@hannstar.com",
      }).then((response: any) => {
        setAccountInfo(response)
      });
      setAccountInfo({
        "UserName": "ronfu",
        "Email": "rfchen@hannstar.com",
        "Lang": "en",
        "GroupName": "權限群組名稱",
        "PhoneNumber0": "886",
        "PhoneNumber1": "1111",
        "PhoneNumber2": "11111",
        "CellPhoneNumber0": "886",
        "CellPhoneNumber1": "222222",
        "CountryCode": "國家代碼",
        "JobAttributes": "業務相關",
        "JobTitle": "創辦人/董事長",
        "InterestedType": [
          "智慧零售",
          "智慧育樂.",
          "智能建築",
          "健康關懷",
          "交通運輸",
          "智能製造"
        ],
        "CompanyName": "公司名稱",
        "CompanySName": "公司名稱關鍵字",
        "BusinessType": "代理商",
        "TaxNo": "企業編號(統編/稅號)",
        "Weblink": "公司網址",
        "Country": "台灣",
        "AreaCity": "城市",
        "AreaAddress": "地址",
        "CompanyEmpNumber": "<100",
        "AnnualRevenue": "<1M",
        "CompanyStockOn": "是",
        "CompanyMA1": [
          "車載",
          "穿戴",
          "工控",
          "手機",
          "消費類",
          "其他"
        ],
        "CompanyMA2": "公司產品主要銷售國家/地區-1",
        "CompanyMA3": "公司產品主要銷售國家/地區-2",
        "CompanyMA4": "公司產品主要銷售國家/地區-3",
        "TOP1": "主要出貨客戶-1",
        "TOP2": "主要出貨客戶-2",
        "TOP3": "主要出貨客戶-3",
        "HannstarYN": "Y",
        "Buy1": "瀚宇彩晶",
        "BuyCompany1": "渠道公司名稱-1",
        "Buy2": "瀚宇彩晶",
        "BuyCompany2": "渠道公司名稱-2",
        "Buy3": "瀚宇彩晶",
        "BuyCompany3": "渠道公司名稱-3",
        "CompanyRemark": "備註說明"
      })
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
      const deleteAccountDom = document.getElementById("hannstarDeleteAccount"); //要再去magento設
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
      // console.log(zxcvbn(e.target.value).score);
      // setPasswordStrengthMeter(zxcvbn(e.target.value).score);
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
        const saveBtn: any = document.getElementById("hannstarSaveBtn"); //要再去magento設
        if (saveBtn) saveBtn.click();
      }
    };

    return (
      <div className={`${pageName}Content`}>
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
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate contentComponent={<EditAccountContent />} rootId={accountInfo.rootid} />
    </Layout>
  );
};

export default AccountEditAccount;
