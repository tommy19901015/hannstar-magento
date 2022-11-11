import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import usePageData from "./pageData";
import "./css.scss";
import { validate, patterns } from "../../common/validateUtils";
import { postAccountInfo, postMemberGroupList, postJoinMemberGroup } from "../../services/api.service";
import useGetLoginInfo from "../../hooks/useGetLoginInfo"

const MemberInfoContent = () => {
  const { content } = usePageData();
  const pageName = "AccountMemberInfo";
  const [email, setEmailValue] = useState<string>("");
  const [memberGroupList, setMemberGroupList] = useState<any>("")
  const loginInfo = useGetLoginInfo()

  useEffect(() => {
    postMemberGroupList({
      "AdminEmail": window.hannstar.email
    }).then((response: any) => {
      setMemberGroupList(response)
    });
  }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatEmail = e.target.value.trim();
    setEmailValue(formatEmail);
  };

  const handleInvite = () => {
    const verifyEmail = validate(email, patterns.email);
    console.log('verifyEmail', verifyEmail);
    if (verifyEmail) {
      console.log('email', email);
      postJoinMemberGroup({
        "AdminEmail": window.hannstar.email,
        "JoinEmail": email
      }).then((response: any) => {
        console.log(response);
        window.location.reload()
      });
      // call api
    }

  }
  return (
    <div className={`${pageName}Content`}>
      <h1 className="mainTitle">{content.title}</h1>
      <div className="inviteBlock">
        <label htmlFor="email">{content.label}</label>
        <input id="input1" type="text"
          onChange={handleChange}
          value={email}
          placeholder="請輸入Email" />
        <a className="btn" onClick={handleInvite}>{content.btn}</a>
      </div>
      <table className="table">
        <tbody>
          <tr>
            {
              content.table.map(col => (<td>{col}</td>))
            }
          </tr>
          {
            memberGroupList && memberGroupList.map((user: any) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.jobtitle}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const AccountMemberInfo: React.FC = () => {
  const { breadcrumbs } = usePageData();
  const [accountInfo, setAccountInfo] = useState<any>("")
  const loginInfo = useGetLoginInfo()
  console.log('loginInfo111', loginInfo);
  useEffect(() => {
    postAccountInfo({
      Email: window.hannstar.email,
    }).then((response: any) => {
      setAccountInfo(response)
    });
    // setAccountInfo({
    //   "UserName": "ronfu",
    //   "Email": "rfchen@hannstar.com",
    //   "Lang": "en",
    //   "GroupName": "權限群組名稱",
    //   "PhoneNumber0": "886",
    //   "PhoneNumber1": "1111",
    //   "PhoneNumber2": "11111",
    //   "CellPhoneNumber0": "886",
    //   "CellPhoneNumber1": "222222",
    //   "CountryCode": "國家代碼",
    //   "JobAttributes": "業務相關",
    //   "JobTitle": "創辦人/董事長",
    //   "InterestedType": [
    //     "智慧零售",
    //     "智慧育樂.",
    //     "智能建築",
    //     "健康關懷",
    //     "交通運輸",
    //     "智能製造"
    //   ],
    //   "CompanyName": "公司名稱",
    //   "CompanySName": "公司名稱關鍵字",
    //   "BusinessType": "代理商",
    //   "TaxNo": "企業編號(統編/稅號)",
    //   "Weblink": "公司網址",
    //   "Country": "台灣",
    //   "AreaCity": "城市",
    //   "AreaAddress": "地址",
    //   "CompanyEmpNumber": "<100",
    //   "AnnualRevenue": "<1M",
    //   "CompanyStockOn": "是",
    //   "CompanyMA1": [
    //     "車載",
    //     "穿戴",
    //     "工控",
    //     "手機",
    //     "消費類",
    //     "其他"
    //   ],
    //   "CompanyMA2": "公司產品主要銷售國家/地區-1",
    //   "CompanyMA3": "公司產品主要銷售國家/地區-2",
    //   "CompanyMA4": "公司產品主要銷售國家/地區-3",
    //   "TOP1": "主要出貨客戶-1",
    //   "TOP2": "主要出貨客戶-2",
    //   "TOP3": "主要出貨客戶-3",
    //   "HannstarYN": "Y",
    //   "Buy1": "瀚宇彩晶",
    //   "BuyCompany1": "渠道公司名稱-1",
    //   "Buy2": "瀚宇彩晶",
    //   "BuyCompany2": "渠道公司名稱-2",
    //   "Buy3": "瀚宇彩晶",
    //   "BuyCompany3": "渠道公司名稱-3",
    //   "CompanyRemark": "備註說明"
    // })
  }, [])

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate contentComponent={<MemberInfoContent />} rootId={accountInfo.rootid} />
    </Layout>
  );
};

export default AccountMemberInfo;
