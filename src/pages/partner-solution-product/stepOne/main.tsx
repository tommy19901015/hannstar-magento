import React, { useRef, forwardRef, useImperativeHandle } from "react";
import FormComponent from "../../../component/form/main";
import { FormType } from "../../../component/form/interface";
import "./css.scss";

const StepOne: React.FC<any> = forwardRef((props, ref) => {
  const pageName = "StepOne";

  const handlerUpload = () => {};

  return (
    <div className={`${pageName}FormBlock`}>
      <div className={`${pageName}ContentBlock`}>
        <div className={`${pageName}Title`}>公版下載</div>
        <div className={`${pageName}DownloadBlock`}>
          <div className="downloadBtn">下載公版檔案</div>
        </div>
      </div>
      <div className={`${pageName}ContentBlock`}>
        <div className={`${pageName}Title`}>產品資料</div>
        <div className={`${pageName}UploadBlock`}>
          <input
            className="uploadInput"
            type="file"
            name="file"
            onChange={handlerUpload}
          />
          <div className="uploadBtn">上傳</div>
        </div>
      </div>
    </div>
  );
});

export default StepOne;
