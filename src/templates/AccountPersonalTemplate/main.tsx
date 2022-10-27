import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
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
import "./css.scss";

const { account } = urlConfig;

const AccountPersonalTemplate: React.FC<I_AccountPersonalTemplate> = ({
  contentComponent,
}) => {
  const pageName = "AccountPersonalTemplate";

  const AccountToolBar = () => {
    const personalInfoData = [
      {
        title: "個人專區",
        href: "",
      },
      {
        title: "我的帳號/修改密碼",
        href: "",
      },
      {
        title: "我的權限",
        href: "/Cognito/account/custom/",
      },
    ];

    return (
      <div className={`${pageName}AccountToolBar`}>
        <ul className="linkBlock">
          {personalInfoData.map((item, index) => (
            <li className={`linkText ${index === 0 && "first"}`} key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Columns
      type={ColType.TwoColFullPage}
      widthL={15}
      widthR={85}
      minWidthL={"250px"}
      contentL={<AccountToolBar />}
      contentR={contentComponent}
    />
  );
};

export default AccountPersonalTemplate;
