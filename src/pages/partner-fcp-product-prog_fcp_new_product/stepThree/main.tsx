import React, { useRef, useState } from "react";
import FormComponent from "../../../component/form/main";
import { FormType } from "../../../component/form/interface";
import "./css.scss";

const StepThree: React.FC = () => {
  const pageName = "StepThree";

  const handleSave = () => {
    // const values1 = formMethods.current.getValues();
    // console.log("StepThreeData", values1);
  };

  const goNextStep = () => {
    console.log("goNextStep", goNextStep);
  };
  const goPreStep = () => {
    console.log("handleSave", handleSave);
  };

  const ProductImgBlok = () => {
    const handlerUploadImg = () => {};

    const productImgData = [
      {
        imgSrc:
          "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        uploadComponent: (
          <input
            className="uploadInput"
            type="file"
            name="file"
            onChange={handlerUploadImg}
          />
        ),
      },
      {
        imgSrc:
          "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        uploadComponent: (
          <input
            className="uploadInput"
            type="file"
            name="file"
            onChange={handlerUploadImg}
          />
        ),
      },
      {
        imgSrc:
          "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        uploadComponent: (
          <input
            className="uploadInput"
            type="file"
            name="file"
            onChange={handlerUploadImg}
          />
        ),
      },
      {
        imgSrc:
          "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        uploadComponent: (
          <input
            className="uploadInput"
            type="file"
            name="file"
            onChange={handlerUploadImg}
          />
        ),
      },
    ];
    return (
      <div>
        {productImgData.map((item, index) => (
          <div key={index}>
            <img src={item.imgSrc} alt="uploadImg" />
            <div>
              {item.uploadComponent}
              <div className="uploadBtn">上傳</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>產品圖片管理</div>
      <div className="uploadBlock">
        <div>
          <div>產品圖片</div>
          <div>
            <ProductImgBlok />
          </div>
        </div>
        <div>
          <div>產品外型圖</div>
          <div></div>
        </div>
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

export default StepThree;
