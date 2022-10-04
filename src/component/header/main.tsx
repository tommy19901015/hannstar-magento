import React, { useState, useEffect } from "react";
import menuDataJson from "../../common/menuData.json";
import CollapseLi from "../collapseLi/main";
import "./css.scss";

interface I_Menu {
  title: string;
  href: string;
  content: { title: string; href: string }[];
}

type I_ServiceType = "hannstar" | "partner";

type I_MenuProp = Record<I_ServiceType, I_Menu>;

const Header: React.FC = () => {
  const [openPhoneMenu, setOpenPhoneMenu] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<string>("hannstar");

  useEffect(() => {
    const type = window.location.pathname.split("/")[2];
    const mappingArr = ["hannstar", "partner"];
    mappingArr.includes(type) && setServiceType(type);
  }, []);

  const handleOpenPhoneMenu = () => {
    setOpenPhoneMenu(!openPhoneMenu);
  };

  const menuData: any = menuDataJson;

  const menuMData: any = () =>
    menuData[serviceType].map((item: any) => {
      return {
        title: <div className="menuTitle">{item.title}</div>,
        content: item.content.map((obj: any) => (
          <li>
            <a className="menuContrnt" href={obj.href}>
              {obj.title}
            </a>
          </li>
        )),
      };
    });

  const MenuBlock: React.FC = () => {
    return (
      <ul className="menuUl">
        {menuData[serviceType].map((item: any, index: number) => (
          <li className="menuLi" key={index}>
            <div className="menuText">
              <a href={item.href}>{item.title}</a>
              <div className="arrow"></div>
            </div>
            <ul className="secMenuUl">
              {item.content.map((subMenu: any, index: number) => (
                <li key={index}>
                  <a href={subMenu.href}>{subMenu.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="hannstarHeader">
      <div className="header_pc">
        <img
          className="logo"
          alt="logo"
          src="https://www.hannstar.com/images/logo.png"
        />
        <div className="menuBlock">
          <MenuBlock />
          <div className="otherBlock">
            <a className="headerBtn login" href="/">
              登入
            </a>
            <select className="headerBtn i18n">
              <option>繁中</option>
              <option>EN</option>
              <option>简中</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header_m">
        <img
          className="logo"
          alt="logo"
          src="https://www.hannstar.com/images/logo.png"
        />
        <div
          className={`menuOpenBtn ${openPhoneMenu ? "open" : "close"}`}
          onClick={handleOpenPhoneMenu}
        >
          <span></span>
        </div>
        <div className={`phoneMenuBlock ${openPhoneMenu ? "open" : "close"}`}>
          <CollapseLi data={menuMData()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
