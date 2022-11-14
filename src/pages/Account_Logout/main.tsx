import React from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import usePageData from "./pageData";
import "./css.scss";

const LogoutContent = () => {
  const { content, title } = usePageData();
  const pageName = "AccountLogout";

  return (
    <div className={`${pageName}Content`}>
      <h1 className="mainTitle">{title}</h1>
      <p className="content">{content}</p>
    </div>
  );
};

const AccountLogout: React.FC = () => {

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<LogoutContent />}
      />
    </Layout>
  );
};

export default AccountLogout;
