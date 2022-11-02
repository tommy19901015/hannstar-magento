import React from "react";
import "./css.scss";
import { I_Props } from "./interface";

//  1種都是文字 2.左圖右文 title / content
const GraphicsLine: React.FC<I_Props> = ({ data }) => {
  return (
    <div className={`graphicsLineBlock ${data.type}`}>
      <img className="imgBlock" src={data.src} alt={data.title} />
      <div className="contentBlock">
        <div className="borderStyle">
          <div className="titleBlock">
            <div className="line"></div>
            <h2 className="title">{data.title}</h2>
          </div>
          <div className="textBlock">{data.content}</div>
          {
            data.imgList && (
              <div className="imgList">
                {
                  data.imgList.map(item => {
                    return(
                      <div className={`imgItem ${item.hasborder? "whiteBorder":""}`}>
                          <img src={item.src} alt="" />
                          <span>{item.title}</span>
                      </div>
                    )
                  })
                }
              </div>
            ) 
          }
          <div className="bottomLineBox">
            <div className="line"></div>
            <a className="learnMore" href={data.href}>
              LEARN MORE<span className="plusLine"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsLine;
