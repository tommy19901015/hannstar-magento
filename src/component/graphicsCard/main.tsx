import React from "react";
import "./css.scss";
import { I_GraphicsCard } from "./interface";

const GraphicsCard: React.FC<I_GraphicsCard> = ({ data, rowCount, theme }) => {
  const componentName = "GraphicsCard";

  return (
    <div className={`${componentName}Content row${rowCount}`}>
      {data.map((item, idx) => (
        <a className={`cardBlock ${theme}`} href={item.href} key={idx}>
          <div className="imgBlock">
            <img src={item.src} alt={item.title} />
          </div>
          <div className={`contentWrap ${theme}`}>
            <div className="textBlock">
              <div className={`title ${theme}`}>{item.title}</div>
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
