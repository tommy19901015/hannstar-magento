import React from "react";
import "./css.scss";
import { I_Col } from "./interface";
import {
  ColBGStyle,
  OneColFullStyle,
  TwoColFullStyle,
  OneColStyle,
  TwoColStyle,
  LeftColStyle,
  RightColStyle,
} from "./styledComponent";

const Main: React.FC<I_Col> = ({
  type,
  bgColor,
  fixClass,
  widthL,
  widthR,
  content,
  contentL,
  contentR,
  minWidthL,
  minWidthR,
  topMContent
}) => {
  const OneColFullPage = () => <OneColFullStyle>{content}</OneColFullStyle>;

  const TwoColFullPage = () => {
    return (
      <TwoColFullStyle topMContent={topMContent}>
        <LeftColStyle widthL={widthL} minWidthL={minWidthL}>{contentL}</LeftColStyle>
        <RightColStyle widthR={widthR} minWidthR={minWidthR}>{contentR}</RightColStyle>
      </TwoColFullStyle>)
  }

  const OneCol = () =>
    <ColBGStyle bgColor={bgColor}>
      <OneColStyle fixClass={fixClass}>{content}</OneColStyle>
    </ColBGStyle>;

  const TwoCol = () => {
    return (
      <ColBGStyle bgColor={bgColor}>
        <TwoColStyle topMContent={topMContent}>
          <LeftColStyle widthL={widthL} minWidthL={minWidthL}>{contentL}</LeftColStyle>
          <RightColStyle widthR={widthR} minWidthR={minWidthR}>{contentR}</RightColStyle>
        </TwoColStyle>
      </ColBGStyle>
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
