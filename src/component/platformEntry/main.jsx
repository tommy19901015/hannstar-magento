import React, { useState, useEffect } from "react";
import "./css.scss";

const PlatformEntry = () => {
  return (
    <div className="platformEntryBlock">
      <div className="item e-biz">
        <a href="https://e-biz.hannstar.com/" target="_blank" rel="noreferrer">
          {/* <img src="https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png" /> */}
          <img src="https://fakeimg.pl/20x20/?text=1" />
          <h2>產品行銷服務</h2>
        </a>
      </div>
      <div className="item solution">
        <a href="https://solution.hannstar.com" target="_blank">
          {/* <img src="https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png" /> */}
          <img src="https://fakeimg.pl/20x20/?text=1" />
          <h2>方案系統及整合服務</h2>
        </a>
      </div>
      <div className="item e-service">
        <a href="https://e-service.hannstar.com/" target="_blank">
          {/* <img src="https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png" /> */}
          <img src="https://fakeimg.pl/20x20/?text=1" />
          <h2>客戶服務</h2>
        </a>
      </div>
      <div className="item webflow2">
        <a href="https://hannspree.webflow.io/">
          {/* <img src="https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_20F17_cfe6j6bk57.png" /> */}
          <img src="https://fakeimg.pl/20x20/?text=1" />
          <h2>瀚斯寶麗</h2>
        </a>
      </div>
      <div className="item partner">
        <a href="https://partner.hannstar.com/Default_Supplier" target="_blank">
          {/* <img src="https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pzksz99f53.png" /> */}
          <img src="https://fakeimg.pl/20x20/?text=1" />
          <h2>供應商協同合作</h2>
        </a>
      </div>
      <div className="item msc">
        <a href="https://msc.hannstar.com" target="_blank">
          {/* <img src="https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png" /> */}
          <img src="https://fakeimg.pl/20x20/?text=1" />
          <h2>瀚宇會員服務</h2>
        </a>
      </div>
    </div>
  );
};

export default PlatformEntry;
