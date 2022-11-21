import React from "react";
import { I_GridModel } from "./interface";
import "./css.scss";

const ImgGrid: React.FC<I_GridModel> = ({row, imgs}) => {
  const componentName = "ImgGrid";
  console.log('imgs',imgs)
  return (
    <div className={`${componentName}Content`}>
      {imgs.map((item, idx) => {
        return (
          <img
            className={`${componentName}Img`}
            src={item.src}
            alt={`${componentName}${idx}`}
          />
        );
      })}
    </div>
  );
};

export default ImgGrid;
