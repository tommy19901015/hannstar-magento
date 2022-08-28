import React, { useState, useEffect, useRef } from "react";
import BannerSlider from "../../component/bannerSlider/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";
import GraphicsLine from "../../component/graphicsLine/main";
import Graphics2 from "../../component/graphics2/main";
import Layout from "../../component/layout/main";
import "./css.scss";

const Index = () => {
  const Body = () => {
    return (
      <div>
        <button className="hannstarBtn">BTN</button>
        <h1>index body</h1>;
      </div>
    );
  };

  return (
    <Layout>
      <BannerSlider />
      <MessageCenter />
      <Graphics2 />
      <PlatformEntry />
      <GraphicsLine />
    </Layout>
  );
};

export default Index;
