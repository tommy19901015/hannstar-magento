import React from "react";
import { I_GridModel } from "./interface";
import "./css.scss";

const ImgGrid: React.FC<I_GridModel> = ({rowCount, imgs}) => {
  const componentName = "ImgGrid";
  console.log('imgs',rowCount)
  return (
    <div className={`${componentName}Content row-${rowCount}`}>
      {imgs.map((item, idx) => {
        return (
          <div>
          <img
            className={`${componentName}Img`}
            src={item.src}
            alt={`${componentName}${idx}`} />
            {item.text && (<span>{item.text}</span>)}
          </div>
        );
      })}
    </div>
  );
};

export default ImgGrid;
