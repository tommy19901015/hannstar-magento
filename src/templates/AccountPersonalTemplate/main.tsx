import React from "react";
import Columns from "../../component/columns/main";
import { ColType, TopMType } from "../../component/columns/interface";
import { FormIconActive } from "./icon/formIconActive";
import { FormIcon } from "./icon/formIcon";
import { HouseIconActive } from "./icon/houseIconActive";
import { HouseIcon } from "./icon/houseIcon";
import { ManualIconActive } from "./icon/manualIconActive";
import { ManualIcon } from "./icon/manualIcon";
import { SubtractIconActive } from "./icon/subtractIconActive";
import { SubtractIcon } from "./icon/subtractIcon";
import { I_AccountPersonalTemplate } from "./interface";
import urlConfig from "../../config/urlSetting.json";
import { pageData } from "./pageData";
import {useIsMobile} from "../../hooks";
import "./css.scss";

const AccountPersonalTemplate: React.FC<I_AccountPersonalTemplate> = ({
  contentComponent,
}) => {
  const pageName = "AccountPersonalTemplate";
  const isMobile = useIsMobile();
  const personalInfoData = pageData();
  const AccountToolBar = () => {
    // const personalInfoData = [
    //   {
    //     title: "我的帳號/修改密碼",
    //     href: "",
    //   },
    //   {
    //     title: "我的權限",
    //     href: "/Cognito/account/custom/",
    //   },
    // ];

    return (
      <div className={`${pageName}AccountToolBar`}>
        <input type="checkbox" id="menu"/>
        <label htmlFor="menu">{personalInfoData[0].categoryTitle}</label>
        <div className="menu-content">
          <ul className="linkBlock">
            {personalInfoData[0].items.map((item, index) => (
              <li className={`linkText ${(index === 0 && !isMobile )&& "first"}`} key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Columns
      type={isMobile? ColType.TwoCol:ColType.TwoColFullPage} // TwoCol
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
