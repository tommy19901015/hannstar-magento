import React from "react";
import { I_ImgGrid } from "./interface";
import "./css.scss";

const ImgGrid: React.FC<I_ImgGrid[]> = (data:I_ImgGrid[]) => {
  const componentName = "ImgGrid";

  return (
    <div className={`${componentName}Content`}>
      {data.map((item, idx) => {
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
