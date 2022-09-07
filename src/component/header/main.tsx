import React, { useState, useEffect } from "react";
import menuData from "../../common/menuData.json"
import CollapseLi from "../collapseLi/main";
import "./css.scss";

const headerData = {
  logoSrc: "https://www.hannstar.com/images/logo.png",
  menu: [
    {
      text: "關於瀚宇彩晶",
      href: "",
    },
    {
      text: "產品應用",
      href: "",
    },
    {
      text: "企業永續",
      href: "",
    },
    {
      text: "投資人關係",
      href: "",
    },
    {
      text: "人力資源",
      href: "",
    },
    {
      text: "訊息中心",
      href: "",
    },
  ],
};

const MenuBlock: React.FC = () => {
  console.log('menuData', menuData);
  return (
    <ul className="menuUl">
      {menuData.map((item: any, idx: any) => (
        <li className="menuLi" key={idx}>
          <div className="menuText">
            <a href={item.href}>{item.title}
            </a>
            <div className="arrow"></div>
          </div>
          <ul className="secMenuUl">
            {item.content.map((subMenu: any) =>
              <li><a href={subMenu.href}>{subMenu.title}</a></li>)}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  const [openPhoneMenu, setOpenPhoneMenu] = useState<boolean>(false)

  const handleOpenPhoneMenu = () => {
    setOpenPhoneMenu(!openPhoneMenu)
  }

  const menuMData: any = () => menuData.map((item: any) => {
    return {
      title: <div className="menuTitle">{item.title}</div>,
      content: item.content.map((obj: any) =>
        <li>
          <a className="menuContrnt" href={obj.href}>{obj.title}</a>
        </li>)
    }
  })

  return (
    <div className="hannstarHeader">
      <div className="header_pc">
        <img className="logo" src={headerData.logoSrc} />
        <div className="menuBlock">
          <MenuBlock />
          <div className="otherBlock">
            <a className="headerBtn login">登入</a>
            <select className="headerBtn i18n">
              <option>繁中</option>
              <option>EN</option>
              <option>简中</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header_m">
        <img className="logo" src={headerData.logoSrc} />
        <div className={`menuOpenBtn ${openPhoneMenu ? 'open' : 'close'}`} onClick={handleOpenPhoneMenu}>
          <span></span>
        </div>
        <div className={`phoneMenuBlock ${openPhoneMenu ? 'open' : 'close'}`}>
          <CollapseLi data={menuMData()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
