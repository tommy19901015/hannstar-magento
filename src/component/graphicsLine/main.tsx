import React from "react";
import "./css.scss";
import { I_GraphicsLine } from "./interface";

const GraphicsLine: React.FC<I_GraphicsLine> = ({ type, src, title, content, href }) => {
  return (
    <div className={`graphicsLineBlock ${type}`}>
      <img className="imgBlock" src={src} alt={title} />
      <div className="contentBlock">
        <div className="borderStyle">
          <div className="titleBlock">
            <div className="line"></div>
            <h2 className="title">{title}</h2>
          </div>
          <div className="textBlock">{content}</div>
          <div className="bottomLineBox">
            <div className="line"></div>
            <a className="learnMore" href={href}>
              LEARN MORE<span className="plusLine"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsLine;
