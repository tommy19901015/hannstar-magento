import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import usePageData from "./pageData";
import { postAccountInfo } from "../../services/api.service";
import "./css.scss";

const AccountMyAccount: React.FC = () => {
  const pageName = "AccountMyAccount";
  const pageData = usePageData();
  const { breadcrumbs, captionData, content } = pageData;
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
      email: "rfchen@hannstar.com",
    }).then((response: any) => {
      setAccountInfo(response)
    });;

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
        <h1 className="mainTitle">個人專區</h1>
        <div className="content">
          <div className="accountTitle">帳戶資訊</div>
          <div className="infoBlock">
            <div className="leftBlock">
              <div className="subTitle">個人資訊</div>
              <ListBlock title={"姓名"} text={magentoName} />
              <ListBlock title={"email"} text={magentoEmail} />
              {accountInfo && <>
                <ListBlock title={"工作屬性"} text={accountInfo.JobAttributes} />
                <ListBlock title={"職稱"} text={accountInfo.JobTitle} />
                <ListBlock title={"電話號碼"} text={`+${accountInfo.PhoneNumber0} ${accountInfo.PhoneNumber1} #${accountInfo.PhoneNumber2}`} />
                <ListBlock title={"手機號碼"} text={`+${accountInfo.CellPhoneNumber0} ${accountInfo.CellPhoneNumber1}`} />
                <ListBlock title={"感興趣的應用別"} text={accountInfo.InterestedType.join('、')} />
              </>}
              <a className="editBtn" href={urlConfig.account.EditAccount.href}>編輯</a>
            </div>
            <div className="rightBlock">
              <div className="subTitle">信件訂閱</div>
              <div>
                <span className="text">{getMagentoSubscribedBlock().innerText}</span>
              </div>
              <a className="editBtn" href="/">Edit</a>
            </div>
          </div>
          <div className="infoBlock">
            <div className="leftBlock">
              <div className="subTitle">公司資訊</div>
              {accountInfo && <>
                <ListBlock title={"公司名稱"} text={accountInfo.CompanyName} />
                <ListBlock title={"公司名稱關鍵字"} text={accountInfo.CompanySName} />
                <ListBlock title={"商業類型"} text={accountInfo.BusinessType} />
                <ListBlock title={"企業編號(統編/稅號)"} text={accountInfo.TaxNo} />
                <ListBlock title={"公司網址"} text={accountInfo.Weblink} />
                <ListBlock title={"國家/地區"} text={accountInfo.Country} />
                <ListBlock title={"城市"} text={accountInfo.AreaCity} />
                <ListBlock title={"地址"} text={accountInfo.AreaAddress} />
                <ListBlock title={"員工總數"} text={accountInfo.CompanyEmpNumber} />
                <ListBlock title={"年營業額(USD)"} text={accountInfo.AnnualRevenue} />
                <ListBlock title={"上市公司"} text={accountInfo.CompanyStockOn} />
                <ListBlock title={"公司產品主要銷售分類"} text={accountInfo.CompanyMA1.join('、')} />
                <ListBlock title={"公司產品主要銷售國家/地區-1"} text={accountInfo.CompanyMA2} />
                <ListBlock title={"公司產品主要銷售國家/地區-2"} text={accountInfo.CompanyMA3} />
                <ListBlock title={"公司產品主要銷售國家/地區-3"} text={accountInfo.CompanyMA4} />
                <ListBlock title={"主要出貨客戶-1"} text={accountInfo.TOP1} />
                <ListBlock title={"主要出貨客戶-2"} text={accountInfo.TOP2} />
                <ListBlock title={"主要出貨客戶-3"} text={accountInfo.TOP3} />
                <ListBlock title={"購買渠道-1"} text={accountInfo.Buy1} />
                <ListBlock title={"渠道公司名稱-1"} text={accountInfo.BuyCompany1} />
                <ListBlock title={"購買渠道-2"} text={accountInfo.Buy2} />
                <ListBlock title={"渠道公司名稱-2"} text={accountInfo.BuyCompany2} />
                <ListBlock title={"購買渠道-3"} text={accountInfo.Buy3} />
                <ListBlock title={"渠道公司名稱-3"} text={accountInfo.BuyCompany3} />
              </>}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="accountTitle">地址簿</div>
          <div className="infoBlock">
            <div className="leftBlock">
              <div className="subTitle">Default Billing Address</div>
              <div className="listBlock">Nick Wang</div>
              <div className="listBlock">瀚宇彩晶</div>
              <div className="listBlock">
                <p>Ln. 168, Xingshan Rd., Neilhu Dist.</p>
                <p>Taipei City, Taipei, 114762</p>
                <p>Taiwan, Province of China</p>
              </div>
              <div className="listBlock">T: +886955525441</div>
              <a className="editBtn" href="/">Edit Address</a>
            </div>
            <div className="rightBlock">
              <div className="subTitle">Default Billing Address</div>
              <div className="listBlock">Nick Wang</div>
              <div className="listBlock">瀚宇彩晶</div>
              <div className="listBlock">
                <p>Ln. 168, Xingshan Rd., Neilhu Dist.</p>
                <p>Taipei City, Taipei, 114762</p>
                <p>Taiwan, Province of China</p>
              </div>
              <div className="listBlock">T: +886955525441</div>
              <a className="editBtn" href="/">Edit Address</a>
            </div>
          </div>
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
      <AccountPersonalTemplate contentComponent={<MyAccountContent />} rootId={accountInfo.rootId} />
    </Layout>
  );
};

export default AccountMyAccount;
