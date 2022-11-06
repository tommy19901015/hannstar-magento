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

const AccountEditAccount: React.FC = () => {
  const pageName = "AccountEditAccount";
  const pageData = usePageData();
  const { breadcrumbs, captionData, content } = pageData;

  const EditAccountContent = () => {
    return <div>EditAccountContent</div>;
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <AccountPersonalTemplate contentComponent={<EditAccountContent />} />
    </Layout>
  );
};

export default AccountEditAccount;
