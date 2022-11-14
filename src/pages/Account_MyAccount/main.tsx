import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import usePageData from "./pageData";
import { postAccountInfo } from "../../services/api.service";
import { Accountstatus } from "../../templates/AccountPersonalTemplate/interface"
import "./css.scss";

const AccountMyAccount: React.FC = () => {
  const pageName = "AccountMyAccount";
  const { 
    breadcrumbs,     
    account,
    personalInfo,
    edit,
    name,
    email,
    subscription,
    companyInfo,
    companyName,
    business,
    applicable,
    personal} = usePageData();

  const [magentoName, setMagentoName] = useState<string>();
  const [magentoEmail, setMagentoEmail] = useState<string>();
  const [accountInfo, setAccountInfo] = useState<any>("")

  const infoBlock: any = useRef();
  const addressesBlock: any = useRef();
  const errorMessageBlock: any = useRef();

  useEffect(() => {
    const magentoDashboardDom: any = document.getElementById("block-dashboard-info");
    if (magentoDashboardDom) infoBlock.current.appendChild(magentoDashboardDom);

    const magentoAddressesDom: any = document.getElementById("block-dashboard-addresses");
    if (magentoAddressesDom) addressesBlock.current.appendChild(magentoAddressesDom);

    const magentoDefultMessageDom: any =
      document.getElementsByClassName("page messages")[0];

    if (magentoDefultMessageDom)
      errorMessageBlock.current.appendChild(magentoDefultMessageDom);

    setMagentoName(getMagentoName().innerText)
    setMagentoEmail(getMagentoEmail().innerText)

    postAccountInfo({
      Email: window.hannstar.email,
    }).then((response: any) => {
      if (response.success !== false) setAccountInfo(response)
    });
  }, [])

  const getMagentoName = () => {
    const nameDom: any = document.getElementById("magentoInfoName");
    return nameDom ? nameDom : "";
  };

  const getMagentoEmail = () => {
    const emailDom: any = document.getElementById("magentoInfoEmail");
    return emailDom ? emailDom : "";
  };

  const getMagentoSubscribedBlock = () => {
    const subscribedBlockDom: any = document.getElementById("subscribedBlock");
    return subscribedBlockDom ? subscribedBlockDom : "";
  };

  const MyAccountContent = () => {



    const ListBlock = ({ title, text }: any) => {
      return (<div className="listBlock">
        <span className="title">{title}:</span>
        <span className="text">{text}</span>
      </div>)
    }

    return (
      <div className={`${pageName}Content`}>
        <div className="magentoMessageBlock" ref={errorMessageBlock}></div>
        <h1 className="mainTitle">{personal}</h1>
        <div className="content">
          <div className="accountTitle">{account}</div>
          <div className="infoBlock">
            <div className="leftBlock">
              <div className="subTitle">{personalInfo}</div>
              <ListBlock title={name} text={magentoName} />
              <ListBlock title={email} text={magentoEmail} />
              <a className="editBtn" href={urlConfig.account.EditAccount.href}>{edit}</a>
            </div>
            <div className="rightBlock">
              <div className="subTitle">{subscription}</div>
              <div>
                <span className="text">{getMagentoSubscribedBlock().innerText}</span>
              </div>
              <a className="editBtn" href={urlConfig.account.AccountNewsletter.href} >{edit}</a>
            </div>
          </div>
          {accountInfo && accountInfo.status === Accountstatus.Approved &&
            <div className="infoBlock">
              <div className="leftBlock">
                <div className="subTitle">{companyInfo}</div>
                <ListBlock title={companyName} text={accountInfo.companyname} />
                <ListBlock title={business} text={accountInfo.businesstype} />
                {accountInfo.HannstarCode && <ListBlock title={applicable} text={accountInfo.applicablearea} />}
              </div>
            </div>}
        </div>
        <div ref={infoBlock} className="magentoInfoBlock"></div>
        <div ref={addressesBlock} className="magentoInfoBlock"></div>
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
        contentComponent={<MyAccountContent />}
        rootId={accountInfo.rootid}
        accountstatus={accountInfo.status} />
    </Layout>
  );
};

export default AccountMyAccount;
