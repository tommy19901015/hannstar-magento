import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import BannerSlider from "../../component/bannerSlider/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import GraphicsCard from "../../component/graphicsCard/main";
import TitleContent from "../../component/titleContent/main";
import "./css.scss";

const PartnerIndex: React.FC = () => {
  const pageName = "PartnerIndex";

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
  const platformEntryData = [
    {
      src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
      title: "材料供應商",
      href: "/",
    },
    {
      src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
      title: "設備供應商",
      href: "/",
    },
    {
      src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
      title: "協同製造夥伴",
      href: "/",
    },
    {
      src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
      title: "管理與諮詢",
      href: "/",
    },
  ];
  const graphicsCardData = [
    {
      src: "https://partner.hannstar.com/images/supplier/home2.jpg",
      title: "材料供應商",
      text: "運用材料創新，創造面板無限可能性，攜手合作，推動顯示科技新世界。。",
      href: "",
      btnText: "了解更多",
    },
    {
      src: "https://partner.hannstar.com/images/supplier/home3.jpg",
      title: "設備供應商",
      text: "運用技術創新，攜手合作，共創綠色顯示科技新世界。",
      href: "",
      btnText: "了解更多",
    },
    {
      src: "https://partner.hannstar.com/images/supplier/home1.jpg",
      title: "協同製造夥伴",
      text: "以客戶服務為核心，提供線上報價、生產流程、標準品資料上傳及協同採購等即時服務。",
      href: "",
      btnText: "了解更多",
    },
    {
      src: "https://partner.hannstar.com/images/supplier/home4.jpg",
      title: "管理諮詢",
      text: "不定期評鑑與稽核來提升供應鏈管理，提供產品解析指南，協助綠色供應商服務。",
      href: "",
      btnText: "了解更多",
    },
  ];
  const articleList = [
    {
      category: "技術文件",
      src: "https://e-service.hannstar.com/Content/images/img/professional-accurately-unscrewing-case-metallic-slim-laptop-his-electric-service-lab-near-tool-bag-clean-repair-it-front-view.jpg",
      title: "LCM 偏光板製程",
      content: "LCM模組生產站點POL站，針對整個偏光板貼附作業的技術介紹",
      href: "",
      date: "2022/09/01",
      views: "5",
    },
    {
      category: "技術文件",
      src: "https://e-service.hannstar.com/Content/images/img/close-up-reparation-laptop.jpg",
      title: "LCM 切割製程簡介",
      content: "LCM模組生產站點切割站，針對切割Cell玻璃的技術介紹",
      href: "",
      date: "2022/08/22",
      views: "8",
    },
    {
      category: "教育訓練",
      src: "https://e-service.hannstar.com/Content/images/img/iStock-962459768.jpg",
      title: "Cover Lens技術介紹",
      content:
        "Cover Lens，是電容式觸控面板的關鍵元件，也是人機接觸之第一道界面，其位置是觸控面板最外層、最靠近手指端之保護玻璃板。表面蓋板通常是以強化玻璃基板為基材，在上層經過抗反射(AR)、抗眩(AG)、抗污(AS)等加工處理；下層部分則以網印製程製做邊框遮蔽層，最後製得之成品可與觸控感測器(Sensors)貼合而完成—觸控面板。",
      href: "",
      date: "2022/08/29",
      views: "9",
    },
    {
      category: "教育訓練",
      src: "https://e-service.hannstar.com/Content/images/img/iStock-480928463.jpg",
      title: "可靠度試驗-MTBF(Mean Time Between Failure)",
      content:
        "MTBF(Mean Time between failures)是產品在操作使用或測試時間的平均連續無故障時間…",
      href: "",
      date: "2022/08/22",
      views: "9",
    },
  ];

  const titleContentData1 = {
    title: "關於供應商協同合作平台",
    content:
      "提供該平台給全球材料及設備供應商、製造商，於平台上協同合作資訊交流與專案商務等開創新的商業機會。",
    bgColor: "#e6e6e6",
  };

  const titleContentData2 = {
    title: "綠色供應鏈管理",
    content:
      "瀚宇彩晶以智能及大數據為平台基礎，以企業資源(Enterprise Resource Planning, ERP)、客戶關係(Customer Relationship Management, CRM)、供應商關係(Supplier Relationship Management, SRM)三大管理系統，將供應商、製造商、服務商、客戶等所有合作夥伴整合到其中，串起客戶、供應商、生產、庫存的資料流與更大功能規模的自動化生產供貨模組體系，系統化完整的建構瀚宇彩晶的永續供應鏈管理體系(Supply Chain Management, SCM)。並在此基礎上協同合作，在品質、成本、交期、環保、安全與衛生等不同面向，讓雙方或多方獲得更有價值的信息和數據，跨域合作，提供更精准的商業决策分析與更高效的資源利用，打造串連世界的綠色供應鏈。",
    bgColor: "#e6e6e6",
    btnText: "了解更多",
    btnHref: "/",
  };

  const allData = {
    bannerData,
    messageCenterData,
    platformEntryData,
    graphicsCardData,
    articleList,
  };

  const ServiceBlock = () => {
    return (
      <div className={`${pageName}ServiceBlock`}>
        <div className="title">服務項目</div>
        <GraphicsCard data={graphicsCardData} rowCount={3} />
      </div>
    );
  };

  const ManagementStrategyBlock = () => {
    return (
      <div className={`${pageName}ManagementStrategyBlock`}>
        <img
          src="https://partner.hannstar.com/images/supplier/strategy.png"
          alt="管理策略"
        />
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneColFullPage}
        content={<BannerSlider data={allData.bannerData} />}
      />
      <Columns
        type={ColType.TwoColFullPage}
        widthL={60}
        widthR={40}
        contentL={<MessageCenter />}
        contentR={<PlatformEntry data={allData.platformEntryData} />}
      />
      <Columns
        type={ColType.OneColFullPage}
        content={<TitleContent {...titleContentData1} />}
      />
      <Columns type={ColType.OneCol} content={<ServiceBlock />} />
      <Columns
        type={ColType.OneColFullPage}
        content={<TitleContent {...titleContentData2} />}
      />
      <Columns
        type={ColType.OneColFullPage}
        content={<ManagementStrategyBlock />}
      />
    </Layout>
  );
};

export default PartnerIndex;
