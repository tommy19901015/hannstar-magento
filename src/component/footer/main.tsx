import React, { useState } from "react";
import CollapseLi from "../collapseLi/main";
import { I_Porps } from "../collapseLi/interface";
import { useTranslation } from "react-i18next";
import urlConfig from "../../config/urlSetting.json";
import "./css.scss";
const { hannstar, partner, service, footerlinks } = urlConfig;
const footerData = [
  {
    title: "關於瀚宇彩晶",
    href: "",
    content: [
      {
        title: "瀚宇彩晶簡介",
        href: hannstar.about_index.href,
      },
      { title: "瀚宇彩晶團隊", href: hannstar.about_team.href },
      { title: "瀚宇關係企業", href: hannstar.about_family.href },
      {
        title: "認證與肯定",
        href: hannstar.about_certification.href,
      },
      { title: "全球據點", href: hannstar.about_stronghold.href },
    ],
  },
  {
    title: "產品應用",
    href: "",
    content: [
      { title: "智能車載", href: "" },
      { title: "工控應用", href: "" },
      { title: "手機應用", href: "" },
      { title: "穿戴應用", href: "" },
      { title: "平板應用", href: "" },
      { title: "觸控應用", href: "" },
      { title: "資訊科技顯示器", href: "" },
      { title: "綠色顯示器", href: "" },
    ],
  },
  {
    title: "企業永續",
    href: "",
    content: [
      { title: "永續焦點", href: "" },
      { title: "公司治理", href: "" },
      { title: "永續營運", href: "" },
      { title: "綠色產品", href: "" },
      { title: "社會參與", href: "" },
      { title: "報告書", href: "" },
      { title: "ESG訊息", href: "" },
    ],
  },
  {
    title: "投資人關係",
    href: "",
    content: [
      { title: "公司概況", href: "" },
      { title: "每月營收", href: "" },
      { title: "財務季報及公司年報", href: "" },
      { title: "法人說明會", href: "" },
      { title: "股東會資訊", href: "" },
      { title: "股利分派", href: "" },
      { title: "股價查詢", href: "" },
      { title: "投資人相關洽詢", href: "" },
    ],
  },
  {
    title: "人力資源",
    href: "",
    content: [
      { title: "工作在彩晶", href: "" },
      { title: "成長在彩晶", href: "" },
      { title: "加入彩晶", href: "" },
    ],
  },
  {
    title: "訊息中心",
    href: "",
    content: [
      { title: "投資人關係", href: "" },
      { title: "企業永續", href: "" },
    ],
  },
];

const TopBlock: React.FC = () => {
  return (
    <div className="topBlock">
      {footerData.map((item) => {
        return (
          <div className="content">
            <ul className="linkBlock">
              <li className="title">
                <h3>
                  <a href={item.href}>{item.title}</a>
                </h3>
              </li>
              {item.content.map((data) => (
                <li className="text">
                  <a href={data.href}>{data.title}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const TopBlock_M: React.FC = () => {
  const collapseLiData: any = footerData.map((item: any) => {
    return {
      title: <h3 className="footerH3">{item.title}</h3>,
      content: item.content.map((obj: any) => (
        <a className="footerLink" href={obj.href}>
          {obj.title}
        </a>
      )),
    };
  });
  return (
    <div className="topBlock_m">
      <CollapseLi data={collapseLiData} />
    </div>
  );
};
const BottomBlock: React.FC = () => {
  return (
    <div className="bottomBlock">
      <div className="logogBlock">
        <a href="">
          <img
            className="logo"
            alt="logo"
            src="https://www.hannstar.com/images/logo.png"
          />
        </a>
        <div className="footerMenu">
          <a href="" className="text">
            聯絡我們
          </a>
          <a href="" className="text">
            隱私權聲明
          </a>
          <a href="" className="text">
            法律聲明
          </a>
          <a href="" className="text">
            網站地圖
          </a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} HannStar. All Rights Reserved.
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <TopBlock />
      <TopBlock_M />
      <BottomBlock />
    </div>
  );
};

export default Footer;
