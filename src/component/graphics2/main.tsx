import React from "react";
import { I_Graphics2 } from "./interface"
import "./css.scss";


const Graphics2: React.FC<I_Graphics2> = ({ data }) => {
  return (
    <div className="graphics2Block">
      {data.map((item, idx) => {
        return (
          <a className="item" href={item.href} key={idx}>
            <img src={item.src} alt={item.title} />
            <div className="titleBlock">
              <div className="leftBlock">
                <div className="line"></div>
                <div className="title">{item.title}</div>
              </div>
              <div className="learnMore">Learn More</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Graphics2;
