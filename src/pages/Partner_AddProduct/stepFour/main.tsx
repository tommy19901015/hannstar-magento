import React, { forwardRef, useImperativeHandle } from "react";
import "./css.scss";

const StepFour: React.FC<any> = forwardRef((props, ref) => {
  const pageName = "StepFour";

  const handleSaveStepFour = () => {
    console.log("handleSaveStepFour");
  };

  useImperativeHandle(ref, () => ({
    handleSaveStepFour,
  }));

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>{`產品規格書&資料`}</div>
      <div className="uploadBlock">
        <div className="title">產品規格</div>
        <input className="uploadInput" type="file" name="file" />
        <div className="uploadBtn">上傳</div>
        <div className="text">*請以word格式上傳</div>
      </div>
      <div className="uploadBlock">
        <div className="title">點燈inital code</div>
        <input className="uploadInput" type="file" name="file" />
        <div className="uploadBtn">上傳</div>
        <div className="text">*請以TXT格式上傳</div>
      </div>
      <div className="uploadBlock">
        <div className="title">IC datasheet</div>
        <input className="uploadInput" type="file" name="file" />
        <div className="uploadBtn">上傳</div>
        <div className="text">*請以PDF/ZIP格式上傳</div>
      </div>
      <div className="noteBlock">
        <div>上傳條件</div>
        <div>1. 產品規格書請依HSD公版格式製作</div>
        <div>2. 檔名不可以有特殊字元{`(如: "*:<>?/\|+)`}</div>
      </div>
    </div>
  );
});

export default StepFour;
