import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import usePageData from "./pageData";
import "./css.scss";
import { validate, patterns } from "../../common/validateUtils";
import { postAccountInfo } from "../../services/api.service";

const MemberInfoContent = () => {
  const { content } = usePageData();
  const pageName = "AccountDashboard";

  const handleDetail = () => {
    // to do
  };
  return (
    <div className={`${pageName}Content`}>
      <h1 className="mainTitle">{content.title}</h1>
      <table className="table">
        <tbody>
          <tr>
            {content.table.map((col) => (
              <td>{col}</td>
            ))}
          </tr>
          {content.member.map((prod) => (
            <tr>
              <td>{prod.date}</td>
              <td>{prod.singleNumber}</td>
              <td>{prod.item}</td>
              <td>{prod.model}</td>
              <td>{prod.superstition}</td>
              <td>
                <a href="#" onClick={handleDetail}>
                  view
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AccountDashboard: React.FC = () => {
  const { breadcrumbs } = usePageData();
  const [accountInfo, setAccountInfo] = useState<any>("");

  useEffect(() => {
    postAccountInfo({
      Email: window.hannstar?.email,
    }).then((response: any) => {
      setAccountInfo(response);
    });
  }, []);

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

export default AccountDashboard;
