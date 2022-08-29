import React, { useState, useEffect, useRef } from "react";
import BannerSlider from "../../component/bannerSlider/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";
import GraphicsLine from "../../component/graphicsLine/main";
import Graphics2 from "../../component/graphics2/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import "./css.scss";

const Index: React.FC = () => {
  const colSetting1 = {
    type: ColType.TwoCol,
    widthL: 60,
    widthR: 40,
    contentL: <MessageCenter />,
    contentR: <PlatformEntry />,
  };

  const colSetting2 = {
    type: ColType.FullPage,
    content: <Graphics2 />,
  };

  const colSetting3 = {
    type: ColType.FullPage,
    content: <GraphicsLine />,
  };
  const colSetting4 = {
    type: ColType.FullPage,
    content: <GraphicsLine {...{ type: "reverse" }} />,
  };

  const colSetting5 = {
    type: ColType.FullPage,
    content: <GraphicsLine />,
  };

  return (
    <Layout>
      <BannerSlider />
      <Columns {...colSetting1} />
      <Columns {...colSetting2} />
      <Columns {...colSetting3} />
      <Columns {...colSetting4} />
      <Columns {...colSetting5} />
    </Layout>
  );
};

export default Index;
