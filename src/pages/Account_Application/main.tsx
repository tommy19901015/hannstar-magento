import React, { useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";

import "./css.scss";

const AccountApplication: React.FC = () => {
  const pageName = "AccountApplication";

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "會員中心",
        href: "",
      },
      {
        text: "申請權限",
        href: "",
      },
    ],
  };

  const ApplicationContent = () => {
    const captionData = {
      customerNormal: [
        "行業應用文章",
        "產品查詢",
        "新技術合作",
        "線上客服聊天室",
      ],
      customerEnterprise: [
        "優選產品報價含零組件、方案與整機",
        "客製化服務專案報價含零組件、方案與整機",
        "RMA 申請",
        "解析申請",
        "綠色法規申請",
        "+ 以及所有HannStar 客戶一般會員的服務",
      ],
      partnerNormal: [
        "新技術合作",
        "行業應用文章",
        "產品查詢",
        "線上客服聊天室",
      ],
      partnerEnterprise: [
        "供應商資訊交流平台",
        "+ 以及所有HannStar 供應商一般會員的服務",
      ],
    };

    return (
      <div className={`${pageName}Content`}>
        <div className="mainTitle">申請權限</div>
        <div className="rankTypeContent">
          <div className="subTitle">權限類別</div>
          <div className="rankContent">
            <div className="rankCard">
              <img
                className="rankImg"
                alt="rankImg"
                src={`${urlConfig.s3Url}/Image/account/img_info_permissions_card_basic_y.png`}
              />
              <div className="rankText">您現在是</div>
              <div className="rankName">
                <img
                  alt="rankText"
                  src={`${urlConfig.s3Url}/Image/account/icon_login_member_basic.png`}
                />
                <div className="text">一般會員</div>
              </div>
            </div>
            <div className="arrowBlock">
              <img
                alt="arrow"
                src={`${urlConfig.s3Url}/Image/account/icon_info_permissions_arrow.png`}
              />
            </div>
            <div className="rankCard">
              <img
                className="rankImg"
                alt="rankImg"
                src={`${urlConfig.s3Url}/Image/account/img_info_permissions_card_enterprise_y.png`}
              />
              <div className="rankText">您可以進一步成為</div>
              <div className="rankName">
                <img
                  alt="rankText"
                  src={`${urlConfig.s3Url}/Image/account/icon_login_member_enterprise.png`}
                />
                <div className="text">企業會員</div>
              </div>
            </div>
          </div>
        </div>
        <div className="captionContent">
          <div className="subTitle">權限說明</div>
          <div className="listBlock">
            <div className="leftBlock">
              <div className="captionIcon">
                <div className="titleText">客戶權限說明</div>
                <img
                  alt="captionIcon"
                  src={`${urlConfig.s3Url}/Image/account/icon_enterprisemember_client_directions_blue.png`}
                />
              </div>
              <div className="textListBlock">
                <div className="topBlock">
                  <div className="textTitle">一般會員</div>
                  <ul className="captionList">
                    {captionData.customerNormal.map((item) => (
                      <li>
                        <img
                          alt="icon_tick"
                          src={`${urlConfig.s3Url}/Image/account/icon_tick.png`}
                        />
                        <div>{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bottomBlock">
                  <div className="textTitle">企業會員</div>
                  <ul className="captionList">
                    {captionData.customerEnterprise.map((item) => (
                      <li>
                        <img
                          alt="icon_tick"
                          src={`${urlConfig.s3Url}/Image/account/icon_tick.png`}
                        />
                        <div>{item}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="btnBlock">
                    <a className="applicationBtn" href="/">
                      申請企業會員
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <div className="captionIcon">
                <div className="titleText">供應商限說明</div>
                <img
                  alt="captionIcon"
                  src={`${urlConfig.s3Url}/Image/account/icon_enterprisemember_supplier_directions_blue.png`}
                />
              </div>
              <div className="textListBlock">
                <div className="topBlock">
                  <div className="textTitle">一般會員</div>
                  <ul className="captionList">
                    {captionData.partnerNormal.map((item) => (
                      <li>
                        <img
                          alt="icon_tick"
                          src={`${urlConfig.s3Url}/Image/account/icon_tick.png`}
                        />
                        <div>{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bottomBlock">
                  <div className="textTitle">企業會員</div>
                  <ul className="captionList">
                    {captionData.partnerEnterprise.map((item) => (
                      <li>
                        <img
                          alt="icon_tick"
                          src={`${urlConfig.s3Url}/Image/account/icon_tick.png`}
                        />
                        <div>{item}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="btnBlock">
                    <a className="applicationBtn" href="/">
                      申請企業會員
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbsData} />}
      />
      <AccountPersonalTemplate contentComponent={<ApplicationContent />} />
    </Layout>
  );
};

export default AccountApplication;
