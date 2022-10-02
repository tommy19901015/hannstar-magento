import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./css.scss";

const StepTwo: React.FC<any> = forwardRef((props, ref) => {
  const pageName = "StepTwo";
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleSaveStepThree = () => {
    console.log("handleSaveStepThree");
  };

  useImperativeHandle(ref, () => ({
    handleSaveStepThree,
  }));

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>產品圖片管理</div>
      <div className="title">產品圖片</div>
      <ul className="noteText">
        <li>上傳注意事項 :</li>
        <li>
          1. 正面圖檔案命名規則: 原廠料號 + _ + front Ex. 01839PX_front.jpg
        </li>
        <li>2. 背面圖檔案命名規則: 原廠料號 + _ + back Ex. 01839PX_back.jpg</li>
        <li>
          3. 規格書檔案命名規則: 原廠料號 + _ + specification Ex.
          01839PX_specification.doc
        </li>
        <li>4. 正面圖/背面圖可接受格式檔: JPG/PNG</li>
        <li>5. 產品規格書可接受格式檔: WORD/PDF</li>
      </ul>
      <div className="uploadBlock">
        <div className="productImgBlock">
          <input type="file" onChange={handleChange} />
          <img src={image.preview} alt="dummy" width="300" height="300" />
        </div>
      </div>
    </div>
  );
});

export default StepTwo;
