import React, { useState, useEffect } from "react";
import CollapseLi from "../collapseLi/main";
import { useTranslation } from "react-i18next";
import useMenu from "../../common/menuData";
import { I_MenuType } from "../../common/menuData";
import { urlConfig } from "../../config/urlSetting";
import "./css.scss";

const Footer: React.FC = () => {
  const [serviceType, setServiceType] = useState<string>("hannstar");

  useEffect(() => {
    const type = window.location.pathname.split("/")[1];
    const mappingArr = ["hannstar", "partner", "service"];
    mappingArr.includes(type) && setServiceType(type);
  }, []);

  const { t } = useTranslation();
  const menuList: I_MenuType = useMenu();

  const TopBlock: React.FC = () => {
    return (
      <div className="topBlock">
        {menuList[serviceType].map((item) => {
          return (
            <div className="content">
              <ul className="linkBlock">
                <li className="title">
                  <h3>
                    <a href={item.href}>{item.title}</a>
                  </h3>
                </li>
                {item.content &&
                  item.content.map((data) => (
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
    const collapseLiData: any = menuList[serviceType].map((item: any) => {
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
          <a href="/">
            <img
              className="logo"
              alt="logo"
              src={`${urlConfig().s3Url}/Image/hannstar/header/logo.png`}
            />
          </a>
          <div className="footerMenu">
            <a href={urlConfig().hannstar.privacy.href} className="text">
              隱私權聲明
            </a>
            <a href={urlConfig().hannstar.legalnotices.href} className="text">
              法律聲明
            </a>
            <a href="/" className="text">
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

  return (
    <div className="footer">
      <TopBlock />
      <TopBlock_M />
      <BottomBlock />
    </div>
  );
};

export default Footer;
