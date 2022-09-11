import React from "react";
import "./css.scss";
import { I_Props } from "./interface";

const GraphicsCard: React.FC<I_Props> = ({ data }) => {
  return (
    <div className="graphicsCard">
      {data.map((item, idx) => (
        <a className="cardBlock" href={item.href} key={idx}>
          <div className="imgBlock">
            <img src={item.src} alt={item.title} />
          </div>
          <div className="contentWrap">
            <div className="textBlock">
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
            </div>
            <div className="btnBlock">{item.btnText}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GraphicsCard;
