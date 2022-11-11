import React from "react";
import Columns from "../../component/columns/main";
import { ColType, TopMType } from "../../component/columns/interface";
import { I_AccountPersonalTemplate, Accountstatus } from "./interface";

import { pageData } from "./pageData";
import { useIsMobile } from "../../hooks";
import "./css.scss";

const AccountPersonalTemplate: React.FC<I_AccountPersonalTemplate> = ({
  contentComponent,
  rootId,
  accountstatus
}) => {
  const pageName = "AccountPersonalTemplate";
  const isMobile = useIsMobile();
  const personalInfoData = pageData();
  const AccountToolBar = () => {
    // rootId = "123" //測試資料把menu打開
    // accountstatus = Accountstatus.Approved
    return (
      <div className={`${pageName}AccountToolBar`}>
        {useIsMobile() ? (
          <>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu">{personalInfoData[0].items[0].title}</label>
            <ul className="menu-content">
              {personalInfoData[0].items.map((item, index) => (
                <li className="linkText" key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
              {(rootId && accountstatus === Accountstatus.Approved) && <>
                {personalInfoData[1].items.map((item, index) => (
                  <li className="linkText" key={index}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </>}
            </ul></>
        ) : (
          <>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu">{personalInfoData[0].categoryTitle}</label>
            <div className="menu-content">
              <ul className="linkBlock">
                {personalInfoData[0].items.map((item, index) => (
                  <li className="linkText" key={index}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {(rootId && accountstatus === Accountstatus.Approved) && <>
              <input type="checkbox" id="menu1" />
              <label htmlFor="menu1">{personalInfoData[1].categoryTitle}</label>
              <div className="menu-content">
                <ul className="linkBlock">
                  {personalInfoData[1].items.map((item, index) => (
                    <li className="linkText" key={index}>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>}
          </>
        )
        }
      </div >
    );
  };

  return (
    <Columns
      type={isMobile ? ColType.TwoCol : ColType.TwoColFullPage} // TwoCol
      widthL={15}
      widthR={85}
      minWidthL={"250px"}
      topMContent={TopMType.Left}
      contentL={<AccountToolBar />}
      contentR={contentComponent}
    />
  );
};

export default AccountPersonalTemplate;
