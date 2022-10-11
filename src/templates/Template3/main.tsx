import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import { TextAlign } from "../../component/banner/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import GraphicsCard from "../../component/graphicsCard/main";
import ArticleList2 from "../../component/articleList2/main";
import TabProductList from "../../component/tabProductList/main";
import { I_Template3 } from "./interface";
import "./css.scss";

const Template3: React.FC<I_Template3> = ({ data }) => {
  const pageName = "Template3";

  const bannerProps = {
    src: "https://webdev.hannstar.com/upload/package_b/ALL_package_20F12_5iycmervqs.jpg",
    title: "瀚宇彩晶願景",
    text: "讓我們的下一代都能享受新彩麗世界的新希望透過不斷創新的顯示技術，讓視覺可以穿越綠野、越過高山，到達世界的彼端，打開一扇使人類生命更豐富，讓生活更精采的視窗",
    textAlign: TextAlign.BottomLeft,
  };

  const breadcrumbsProps = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "新技術合作",
        href: "",
      },
    ],
  };

  const titleContentProps = {
    title: "關於客戶服務平台",
    content:
      "以顧客為中心的客戶服務平台，用多元化服務協助不同消費階段遇到的問題，以及後勤人員即時協助客戶，提高您的滿意度，共同創造雙贏的未來。",
  };

  const graphicsCardProps = {
    rowCount: 4,
    data: [
      {
        src: "https://partner.hannstar.com/images/supplier/home2.jpg",
        title: "材料供應商",
        text: "運用材料創新，創造面板無限可能性，攜手合作，推動顯示科技新世界。。",
        href: "/test",
        btnText: "了解更多",
      },
      {
        src: "https://partner.hannstar.com/images/supplier/home3.jpg",
        title: "設備供應商",
        text: "運用技術創新，攜手合作，共創綠色顯示科技新世界。",
        href: "/test",
        btnText: "了解更多",
      },
      {
        src: "https://partner.hannstar.com/images/supplier/home1.jpg",
        title: "協同製造夥伴",
        text: "以客戶服務為核心，提供線上報價、生產流程、標準品資料上傳及協同採購等即時服務。",
        href: "/test",
        btnText: "了解更多",
      },
      {
        src: "https://partner.hannstar.com/images/supplier/home4.jpg",
        title: "管理諮詢",
        text: "不定期評鑑與稽核來提升供應鏈管理，提供產品解析指南，協助綠色供應商服務。",
        href: "/test",
        btnText: "了解更多",
      },
    ],
  };

  const articleList2Props = {
    title: "主要title",
    data: [
      {
        catalog: "技術文件",
        articleDatas: [
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
        ],
      },
      {
        catalog: "教學文件",
        articleDatas: [
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
          {
            src: "https://fakeimg.pl/350x200/?text=Hello",
            href: "/",
            title: "文章title",
            date: "2022/10/11",
            description:
              "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
          },
        ],
      },
    ],
  };

  const ModuleBlock1 = () => {
    return (
      <div className={`${pageName}ModuleBlock`}>
        <TitleContent {...titleContentProps} />
        <Banner {...bannerProps} />
      </div>
    );
  };

  const ModuleBlock2 = () => {
    return (
      <div className={`${pageName}ModuleBlock`}>
        <TitleContent {...titleContentProps} />
        <div>圖文</div>
      </div>
    );
  };

  const ModuleBlock3 = () => {
    return (
      <div className={`${pageName}ModuleBlock`}>
        <TitleContent {...titleContentProps} />
        <GraphicsCard {...graphicsCardProps} />
      </div>
    );
  };

  const MainContainer = () => {
    return (
      <div className={`${pageName}MainContainer`}>
        {/* <Banner {...bannerProps} />
        <Breadcrumbs {...breadcrumbsProps} />
        <Columns type={ColType.OneCol} content={<ModuleBlock1 />} />
        <Columns type={ColType.OneCol} content={<ModuleBlock2 />} />
        <Columns type={ColType.OneCol} content={<ModuleBlock3 />} />
        <Columns
          type={ColType.OneCol}
          content={<ArticleList2 {...articleList2Props} />}
        /> */}
        <TabProductList />
      </div>
    );
  };
  return <MainContainer />;
};

export default Template3;
