import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import usePageData from "./pageData";
import "./css.scss";
import { postAccountInfo } from "../../services/api.service";

const AccountNewsletterContent = () => {
  const {  title, subTitle, options, saveBtn } = usePageData();
  const pageName = "AccountNewsletter";

  const handleSave = () => {
    // to do
  }
  return (
    <div className={`${pageName}Content`}>
      <h1 className="mainTitle">{title}</h1>
      <h6 className="subTitle"> {subTitle}</h6>
      <div className="bodyBlock">
      <input type="checkbox" id="options" className="hannstarCheckBox"/>
      <label htmlFor="options">{options}</label>
      </div>
    
      <div className="btnBlock">
        <div className="btn" onClick={handleSave}>
            {saveBtn}
          </div>
      </div>
    </div>
  );
};

const AccountNewsletter: React.FC = () => {
  const { breadcrumbs } = usePageData();
  const [accountInfo, setAccountInfo] = useState<any>("")

  useEffect(() => {
    postAccountInfo({
      Email: window.hannstar.email
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
        contentComponent={<AccountNewsletterContent />}
        rootId={accountInfo.rootid}
        accountstatus={accountInfo.status}
      />
    </Layout>
  );
};

export default AccountNewsletter;
