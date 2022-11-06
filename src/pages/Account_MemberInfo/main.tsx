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

const AccountMemberInfo: React.FC = () => {
  const pageName = "AccountMemberInfo";
  const pageData = usePageData();
  const { breadcrumbs, captionData, content } = pageData;

  const MemberInfoContent = () => {
    return <div>MemberInfoContent</div>;
  };

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
