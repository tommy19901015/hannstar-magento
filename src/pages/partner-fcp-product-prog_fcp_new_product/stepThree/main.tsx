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

  const ProductImgBlock = () => {
    const handlerUploadImg = () => {};

    const productImgData = [
      {
        // imgSrc:
        //   "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        imgSrc: "https://fakeimg.pl/200x250/ddd/",
        exampleImgSrc: "https://fakeimg.pl/200x250/ddd/?text=preview",
        exampleTitle: "正面圖",
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
        // imgSrc:
        //   "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        imgSrc: "https://fakeimg.pl/200x250/ddd/",
        exampleImgSrc: "https://fakeimg.pl/200x250/ddd/?text=preview",
        exampleTitle: "背面圖",
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
        // imgSrc:
        //   "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        imgSrc: "https://fakeimg.pl/200x250/ddd/",
        exampleImgSrc: "https://fakeimg.pl/200x250/ddd/?text=preview",
        exampleTitle: "左斜視",
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
        // imgSrc:
        //   "https://partner-test.hannstar.com/images/fcp/%E6%96%B0%E5%A2%9E%E7%85%A7%E7%89%87icon.jpg",
        imgSrc: "https://fakeimg.pl/200x250/ddd/",
        exampleImgSrc: "https://fakeimg.pl/200x250/ddd/?text=preview",
        exampleTitle: "右斜視",
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
      <>
        {productImgData.map((item, index) => (
          <div key={index} className="contentBlock">
            <div className="exampleBlock">
              <img src={item.exampleImgSrc} alt="exampleImgSrc" />
              <div className="title">{item.exampleTitle}</div>
            </div>
            <div className="productBlock">
              <img src={item.imgSrc} alt="uploadImg" />
              <div className="btnBlock">
                {item.uploadComponent}
                <div className="uploadBtn">上傳</div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const ShapeImgBlock = () => {
    const handlerUploadImg = () => {};

    const shapeImgData = [
      {
        imgSrc: "https://fakeimg.pl/200x250/ddd/",
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
        imgSrc: "https://fakeimg.pl/200x250/ddd/",
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
      <>
        {shapeImgData.map((item, index) => (
          <div key={index} className="contentBlock">
            <div className="shapeBlock">
              <img src={item.imgSrc} alt="uploadImg" />
              <div className="btnBlock">
                {item.uploadComponent}
                <div className="uploadBtn">上傳</div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>產品圖片管理</div>
      <div className="title">產品圖片</div>
      <ul className="noteText">
        <li>上傳照片條件：</li>
        <li>1. 同一產品4張照片：正面、背面、左斜視、右斜視。</li>
        <li>
          2. 上傳照片建議為1000 * 1000圖元以上，商品圖片最低為72dpi
          每張照片產品大小儘量差不多。
        </li>
        <li>3. 圖片請去背，最好無圖框。</li>
        <li>4. 檔案格式：jpg/png。</li>
        <li>5. 檔案大小不超過5mb</li>
      </ul>
      <div className="uploadBlock">
        <div className="productImgBlock">
          <ProductImgBlock />
        </div>
      </div>
      <div className="title">產品外型圖</div>
      <ul className="noteText">
        <li>上傳照片條件：</li>
        <li>1. 不可有圖框。</li>
        <li>2. 背面圖不要有他廠標籤。</li>
        <li>3. 線條黑色，底色白色。</li>
        <li>4. 檔案格式：jpg/png。</li>
        <li>5. 圖為橫式。</li>
        <li>6. 像素大小：1920*1280。</li>
        <li>7. 圖檔上傳後會自動產生HannStar浮水印。</li>
      </ul>
      <div className="uploadShapeBlock">
        <div className="shapeImgBlock">
          <ShapeImgBlock />
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
