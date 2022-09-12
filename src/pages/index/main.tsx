import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerSlider from "../../component/bannerSlider/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";
import GraphicsLine from "../../component/graphicsLine/main";
import Graphics2 from "../../component/graphics2/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { Provider } from "react-redux";
import "./css.module.scss";
import store from "../../store";
import { fetchDataRequest } from "../../store/action";
import { GraphicsLineType } from "../../component/graphicsLine/interface";

//header
//footer
//共用??

//banner
const bannerData = [
  {
    src: "https://www.hannstar.com/upload/banner_list/twL_banner_22A27_6erpvjpmxp.jpg",
    title: "創新技術、品質服務",
  },
  {
    src: "https://www.hannstar.com/upload/banner_list/twL_banner_22A28_zi638kdkyz.jpg",
    title: "綠色顯示、全新視界",
  },
  {
    src: "https://www.hannstar.com/upload/banner_list/twL_banner_22B08_8e38nb3hz6.jpg",
    title: "實踐 ESG、邁向永續經營",
  },
];
//v訊息中心(api)
const messageCenterData = [
  {
    tag: "企業永續",
    date: "2022.03.22",
    title:
      '瀚宇彩晶加入「TALENT, In Taiwan，台灣人才永續行動聯盟」">瀚宇彩晶加入「TALENT, In Taiwan，台灣人才永續行動聯盟」',
  },
  {
    tag: "企業永續",
    date: "2022.03.11",
    title: '38婦女節，多愛妳一點">38婦女節，多愛妳一點',
  },
  {
    tag: "投資人關係",
    date: "2022.03.09",
    title: '瀚宇彩晶2022年2月份營收報告">瀚宇彩晶2022年2月份營收報告',
  },
  {
    tag: "投資人關係",
    date: "2022.02.24",
    title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
  },
  {
    tag: "投資人關係",
    date: "2022.02.03",
    title: '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
  },
  {
    tag: "投資人關係",
    date: "2022.02.24",
    title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
  },
  {
    tag: "投資人關係",
    date: "2022.02.24",
    title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
  },
  {
    tag: "投資人關係",
    date: "2022.02.03",
    title: '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
  },
];
//平台相關資料
const platformEntryData = [
  {
    src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
    title: "產品行銷服務",
    href: "/"
  },
  {
    src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
    title: "方案系統及整合服務",
    href: "/"
  },
  {
    src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
    title: "客戶服務",
    href: "/"
  },
  {
    src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_20F17_cfe6j6bk57.png",
    title: "瀚斯寶麗",
    href: "/"
  },
  {
    src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png",
    title: "供應商協同合作",
    href: "/"
  },
  {
    src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png",
    title: "瀚宇會員服務",
    href: "/"
  },
]

//圖文
const graphics2Data = [
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_22B07_8u4mux55rb.jpg",
    title: "智能車載",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_20F03_tg97kwr8vt.jpg",
    title: "工控",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_20F03_7zkzsfrzxx.jpg",
    title: "手機",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_20F30_u7puhfkn43.jpg",
    title: "穿戴",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_20H26_sfsggchm67.jpg",
    title: "平板",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_20F03_4v74pbgygb.jpg",
    title: "觸控",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_21K24_n5zb9f55xb.jpg",
    title: "科技資訊顯示器",
    href: "",
  },
  {
    src: "https://www.hannstar.com/upload/marqueepic_small_list/twL_marqueepic_22B07_kzz4js34zv.jpg",
    title: "綠色顯示器",
    href: "",
  },
];
//左圖右文
const graphics1Data1 = {
  type: GraphicsLineType.Reverse,
  src: "https://www.hannstar.com/upload/home_templast_wrap_list/twL_home_template_20F05_aift33zvnm.jpg",
  title: "企業永續發展",
  content:
    "永續發展是瀚宇彩晶的長期目標，我們致力顯示科技與產品的發展，為社會與利害關係人帶來價值，並關心環境變遷所帶來的影響。",
  href: "",
};
//左圖右文
const graphics1Data2 = {
  src: "https://www.hannstar.com/upload/home_templast_list/twL_home_template_20F05_z4wzanj6ws.jpg",
  title: "成為夥伴",
  content:
    "加入彩晶，我們的用心您能看的見!彩晶致力為世界帶來更鮮艷的色彩、更精采的生活互動，同時我們更加重視內部菁英人才的發展與成長，實踐誠信、鼓勵創新、客戶導向、團隊合作的核心價值。",
  href: "",
};
//左圖右文
const graphics1Data3 = {
  type: GraphicsLineType.Reverse,
  src: "https://www.hannstar.com/upload/home_templast_list/twL_home_template_20G03_w7kaf4h3zg.jpg",
  title: "瀚宇關係企業",
  content:
    "彩晶於南科以獨特規格的5.3代LCD廠，運用先進IPS面板製程技術，生產各式中小尺寸之LCD面板，同時於中國南京設立後端模組及觸控組裝廠，垂直整合產業資源。彩晶於2020年調整產能結構，整合部分和鑫光電南科廠房，預計提升先進面板技術製程。公司設有彩晶文教基金會，倡導企業社會責任，協助文化創意的發展， 期許建立充滿信心愛心及自由公平的和諧社會。",
  href: "",
};

const allStore = {
  bannerData,
  messageCenterData,
  platformEntryData,
  graphics2Data,
  graphics1Data1,
  graphics1Data2,
  graphics1Data3,
};

const Index: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  // 拿 store 資料

  return (
    <Layout>
      <Columns
        type={ColType.OneColFullPage}
        content={<BannerSlider data={allStore.bannerData} />} />
      <Columns
        type={ColType.TwoColFullPage}
        widthL={60}
        widthR={40}
        contentL={<MessageCenter data={allStore.messageCenterData} />}
        contentR={<PlatformEntry data={allStore.platformEntryData} />} />
      <Columns
        type={ColType.OneCol}
        content={<Graphics2 data={allStore.graphics2Data} />} />
      <Columns
        type={ColType.OneCol}
        content={<GraphicsLine data={allStore.graphics1Data1} />} />
      <Columns
        type={ColType.OneCol}
        content={<GraphicsLine data={allStore.graphics1Data2} />} />
      <Columns
        type={ColType.OneCol}
        content={<GraphicsLine data={allStore.graphics1Data3} />} />
    </Layout>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default AppWrapper;
