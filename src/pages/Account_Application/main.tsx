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

const AccountApplication: React.FC = () => {
  const pageName = "AccountApplication";
  const pageData = usePageData();
  const { breadcrumbs, captionData, content } = pageData;

  const ApplicationContent = () => {

    return (
      <div className={`${pageName}Content`}>
        <div className="mainTitle">{content.title}</div>
        <div className="rankTypeContent">
          <div className="subTitle">{content.subTitle}</div>
          <div className="rankContent">
            <div className="rankBlock">
              <div className="rankCard">
                <img
                  className="rankImg"
                  alt="rankImg"
                  src={`${urlConfig.s3Url}/Image/account/img_info_permissions_card_basic_y.png`}
                />
                <div className="rankText">{content.text}</div>
                <div className="rankName">
                  <img
                    alt="rankText"
                    src={`${urlConfig.s3Url}/Image/account/icon_login_member_basic.png`}
                  />
                  <div className="text">{content.member}</div>
                </div>
              </div>
            </div>
            <div className="arrowBlock">
              <img
                alt="arrow"
                src={`${urlConfig.s3Url}/Image/account/icon_info_permissions_arrow.png`}
              />
            </div>
            <div className="rankBlock">
              <div className="rankCard">
                <img
                  className="rankImg"
                  alt="rankImg"
                  src={`${urlConfig.s3Url}/Image/account/img_info_permissions_card_enterprise_y.png`}
                />
                <div className="rankText">{content.become}</div>
                <div className="rankName">
                  <img
                    alt="rankText"
                    src={`${urlConfig.s3Url}/Image/account/icon_login_member_enterprise.png`}
                  />
                  <div className="text">{content.companymember}</div>
                </div>
              </div>

              <div className="btnBlocks">
                <div className="btnBlock">
                  <a
                    className="applicationBtn"
                    href={urlConfig.account.AccountPersonal.href}
                  >
                    {content.applymembership}
                  </a>
                </div>
                <div className="btnBlock">
                  <a
                    className="applicationBtn"
                    href={urlConfig.account.AccountPartner.href}
                  >
                    {content.applypartnership}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="captionContent">
          <div className="subTitle">{content.rank}</div>
          <div className="tabs">
            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-1"
                checked
                className="tab-switch"
              />
              <label htmlFor="tab-1" className="tab-label titleText">
                {content.customerpermission}
              </label>
              <img
                alt="captionIcon"
                className="captionIcon"
                src={`${urlConfig.s3Url}/Image/account/icon_enterprisemember_client_directions_blue.png`}
              />
              <div className="tab-content">
                <div className="topBlock">
                  <div className="textTitle">{content.member}</div>
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
                  <div className="textTitle">{content.companymember}</div>
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
                </div>
              </div>
            </div>
            <div className="tab"></div>
            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-2"
                className="tab-switch"
              />
              <label htmlFor="tab-2" className="tab-label titleText">
                {content.supplierlimit}
              </label>
              <img
                alt="captionIcon"
                className="captionIcon"
                src={`${urlConfig.s3Url}/Image/account/icon_enterprisemember_supplier_directions_blue.png`}
              />
              <div className="tab-content">
                <div className="topBlock">
                  <div className="textTitle">{content.member}</div>
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
                  <div className="textTitle">{content.companymember}</div>
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
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate contentComponent={<ApplicationContent />} />
    </Layout>
  );
};

export default AccountApplication;
