import React, { useState, useEffect } from "react";
import "./css.scss";

const GraphicsLine = () => {
  return (
    <div className="graphicsLineBlock">
      <img
        className="imgBlock"
        //   src="https://webdev.hannstar.com/upload/home_templast_list_s/twL_home_template_20F05_z4wzanj6ws.jpg"
        src="https://fakeimg.pl/740x385/?text=1"
        alt="成為夥伴"
      />
      <div className="contentBlock">
        <div className="borderStyle">
          <div className="titleBlock">
            <div className="line"></div>
            <h2 className="title">成為夥伴</h2>
          </div>
          <div className="textBlock">
            加入彩晶，我們的用心您能看的見!彩晶致力為世界帶來更鮮艷的色彩、更精采的生活互動，同時我們更加重視內部菁英人才的發展與成長，實踐誠信、鼓勵創新、客戶導向、團隊合作的核心價值。
          </div>
          <div className="bottomLineBox">
            <div className="line"></div>
            <a className="learnMore" href="/careers-detail/join-hannstar/">
              LEARN MORE<span className="plusLine"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsLine;
