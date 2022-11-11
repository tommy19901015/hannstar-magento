import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import usePageData from "./pageData";
import { Accountstatus } from "./interface"
import { postAccountInfo } from "../../services/api.service";
import "./css.scss";

const AccountApplication: React.FC = () => {
  const pageName = "AccountApplication";
  const pageData = usePageData();
  const { breadcrumbs, captionData, content } = pageData;
  const [accountInfo, setAccountInfo] = useState<any>("")

  useEffect(() => {
    postAccountInfo({
      Email: window.hannstar.email,
    }).then((response: any) => {
      if (response.success !== "fail") setAccountInfo(response)
    });
  }, []);

  const ApplicationContent = () => {

    const RankTypeNotApproved = () => {
      return <div className="rankContent">
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
        </div>
      </div>
    }

    const RankTypePending = () => {
      return <div className="rankContent">
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
            <div className="rankText">{content.pendingText}</div>
            <div className="rankName">
              <div className="text">{content.pendingStates}</div>
            </div>
          </div>
        </div>
      </div>
    }

    const RankTypeApproved = () => {
      return <div className="rankContent">
        <div className="rankBlock">
          <div className="rankCard">
            <img
              className="rankImg"
              alt="rankImg"
              src={`${urlConfig.s3Url}/Image/account/img_info_permissions_card_enterprise_y.png`}
            />
            <div className="rankText">{content.text}</div>
            <div className="rankName">
              <img
                alt="rankText"
                src={`${urlConfig.s3Url}/Image/account/icon_login_member_enterprise.png`}
              />
              <div className="text">{content.companymember}</div>
            </div>
          </div>
        </div>
      </div>
    }

    const mappingRankType = (status: Accountstatus) => {
      const typeObj = {
        [Accountstatus.Approved]: <RankTypeApproved />,
        [Accountstatus.NotApproved]: <RankTypeNotApproved />,
        [Accountstatus.Pending]: <RankTypePending />
      }
      return status ? typeObj[status] : <RankTypeNotApproved />
    }

    return (
      <div className={`${pageName}Content`}>
        <div className="mainTitle">{content.title}</div>
        <div className="rankTypeContent">
          <div className="subTitle">{content.subTitle}</div>
          {mappingRankType(accountInfo.status)}
        </div>
        {(!accountInfo || accountInfo.status === Accountstatus.NotApproved) &&
          <>
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
          </>
        }

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
        contentComponent={<ApplicationContent />}
        rootId={accountInfo.rootid}
        accountstatus={accountInfo.status}
      />
    </Layout>
  );
};

export default AccountApplication;
