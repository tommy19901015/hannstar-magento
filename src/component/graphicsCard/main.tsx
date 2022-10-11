import React from "react";
import "./css.scss";
import { I_Props } from "./interface";

const GraphicsCard: React.FC<I_Props> = ({ data, rowCount }) => {
  const componentName = "GraphicsCard";

  return (
    <div className={`${componentName}Content row${rowCount}`}>
      {data.map((item, idx) => (
        <a className="cardBlock" href={item.href} key={idx}>
          <div className="imgBlock">
            <img src={item.src} alt={item.title} />
          </div>
          <div className="contentWrap">
            <div className="textBlock">
              <div className="title">{item.title}</div>
              <div className="content">{item.text}</div>
            </div>
            {item.href &&
              <a className="btnBlock" href={item.href}>{item.btnText}</a>}
          </div>
        </a>
      ))}
    </div>
  );
};

export default GraphicsCard;
