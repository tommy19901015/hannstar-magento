import React, { useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import usePageData from "./pageData";
import "./css.scss";
import { validate, patterns } from "../../common/validateUtils";

const MemberInfoContent = () => {
  const { content } = usePageData();
  const pageName = "AccountMemberInfo";
  const [ email ,setEmailValue ] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatEmail = e.target.value.trim();
    setEmailValue(formatEmail);
  };

  const handleInvite = () => {
    const verifyEmail = validate(email, patterns.email);
    // call api
  }
  return (
  <div className={`${pageName}Content`}>
    <h1 className="mainTitle">{content.title}</h1>
    <div className="inviteBlock">
      <label htmlFor="email">{content.label}</label>
      <input id="input1" type="text"
              onChange={handleChange}
              value={email}
              placeholder="請輸入Email"/>
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
          content.member.map(user=>(
            <tr>
            <td>{ user.name}</td>
            <td>{ user.email}</td>
            <td>{ user.position}</td>
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
  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate contentComponent={<MemberInfoContent />} />
    </Layout>
  );
};

export default AccountMemberInfo;
