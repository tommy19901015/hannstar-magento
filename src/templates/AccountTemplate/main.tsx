import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { I_AccountTemplate } from "./interface";
import "./css.scss";

const AccountTemplate: React.FC<I_AccountTemplate> = ({ content }) => {
  const templateName = "AccountTemplate";

  const MainContainer = () => {
    return (
      <div className={`${templateName}Content`}>
        <Columns
          type={ColType.TwoColFullPage}
          widthL={50}
          widthR={50}
          contentL={content}
          contentR={<div>圖右邊</div>}
        />
      </div>
    );
  };
  return <MainContainer />;
};

export default AccountTemplate;
