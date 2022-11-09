import React from "react";
import Columns from "../../component/columns/main";
import { ColType, TopMType } from "../../component/columns/interface";
import { I_AccountPersonalTemplate } from "./interface";

import { pageData } from "./pageData";
import { useIsMobile } from "../../hooks";
import "./css.scss";

const AccountPersonalTemplate: React.FC<I_AccountPersonalTemplate> = ({
  contentComponent,
  rootId,
}) => {
  const pageName = "AccountPersonalTemplate";
  const isMobile = useIsMobile();
  const personalInfoData = pageData();
  const AccountToolBar = () => {
    rootId = "123";
    return (
      <div className={`${pageName}AccountToolBar`}>
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
        {rootId && (
          <>
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
          </>
        )}
      </div>
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
