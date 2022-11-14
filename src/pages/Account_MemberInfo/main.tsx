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
  const { content, inputEmail } = usePageData();
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
          placeholder={inputEmail} />
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
  }, [])

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate
        contentComponent={<MemberInfoContent />}
        rootId={accountInfo.rootid}
        accountstatus={accountInfo.status}
      />
    </Layout>
  );
};

export default AccountMemberInfo;
