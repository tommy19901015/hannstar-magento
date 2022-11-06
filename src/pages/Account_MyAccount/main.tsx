import React, { useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import usePageData from "./pageData";
import "./css.scss";

const AccountMyAccount: React.FC = () => {
  const pageName = "AccountMyAccount";
  const pageData = usePageData();
  const { breadcrumbs, captionData, content } = pageData;

  // const getData ={}

  const MyAccountContent = () => {
    return (
      <div className={`${pageName}Content`}>
        <h1 className="mainTitle">個人專區</h1>
        <div className="accountTitle">帳戶資訊</div>
        <div className="infoBlock">
          <div className="leftBlock">
            <div className="subTitle">個人資訊</div>
            <div>
              <span>姓名:</span>
              <span>name</span>
            </div>
            <div>
              <span>email:</span>
              <span>email</span>
            </div>
            <a href="/">Edit</a>
          </div>
          <div className="rightBlock">
            <div className="subTitle">信件訂閱</div>
            <div>
              <span>訂閱:</span>
              <span>name</span>
            </div>
            <a href="/">Edit</a>
          </div>
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
      <AccountPersonalTemplate contentComponent={<MyAccountContent />} />
    </Layout>
  );
};

export default AccountMyAccount;
