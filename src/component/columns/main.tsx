import React from "react";
import "./css.scss";
import { I_Col } from "./interface";
import {
  FullPageStyle,
  OneColStyle,
  TwoColStyle,
  LeftColStyle,
  RightColStyle,
} from "./styledComponent";

const Main: React.FC<I_Col> = ({
  type,
  widthL,
  widthR,
  content,
  contentL,
  contentR,
}) => {
  const FullPage = () => <FullPageStyle>{content}</FullPageStyle>;

  const OneCol = () => <OneColStyle>{content}</OneColStyle>;

  const TwoCol = () => {
    return (
      <TwoColStyle>
        <LeftColStyle widthL={widthL}>{contentL}</LeftColStyle>
        <RightColStyle widthR={widthR}>{contentR}</RightColStyle>
      </TwoColStyle>
    );
  };

  const columnsObj = {
    fullPage: <FullPage />, //滿版
    oneCol: <OneCol />, //最大寬度1400px
    twoCol: <TwoCol />, //左右兩欄
  };

  return columnsObj[type];
};

export default Main;
