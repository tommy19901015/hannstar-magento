import React from "react";
import "./css.scss";
import { I_Col } from "./interface";
import {
  OneColFullStyle,
  TwoColFullStyle,
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
  const OneColFullPage = () => <OneColFullStyle>{content}</OneColFullStyle>;

  const TwoColFullPage = () => {
    return (
      <TwoColFullStyle>
        <LeftColStyle widthL={widthL}>{contentL}</LeftColStyle>
        <RightColStyle widthR={widthR}>{contentR}</RightColStyle>
      </TwoColFullStyle>)
  }

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
    oneColFullPage: <OneColFullPage />, //滿版
    twoColFullPage: <TwoColFullPage />,
    oneCol: <OneCol />, //一欄(左右有間具)
    twoCol: <TwoCol />, //兩欄(左右有間具)
  };

  return columnsObj[type];
};

export default Main;
