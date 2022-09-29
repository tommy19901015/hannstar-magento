import React, { useRef, useState } from "react";
import "./css.scss";

const StepFour: React.FC = () => {
  const pageName = "StepFour";

  const handleSave = () => {
    // const values1 = formMethods.current.getValues();
    console.log("StepFour");
  };

  const goNextStep = () => {
    console.log("goNextStep", goNextStep);
  };
  const goPreStep = () => {
    console.log("handleSave", handleSave);
  };

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
      <div className="btnBlock">
        <div className="formBtn" onClick={handleSave}>
          儲存
        </div>
        <div className="formBtn" onClick={goNextStep}>
          上一步
        </div>
        <div className="formBtn" onClick={goPreStep}>
          下一步
        </div>
      </div>
    </div>
  );
};

export default StepFour;
