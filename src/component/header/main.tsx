import React, { useState, useEffect, useRef } from "react";
import useMenu from "../../common/menuData";
import CollapseLi from "../collapseLi/main";
import { urlConfig } from "../../config/urlSetting";
import { useTranslation } from "react-i18next";
import { I_MenuType } from "../../common/menuData";
import mappingUrlI18n from "../../common/mappingUrlI18n"
import {
  MagentoNotLoginHeader,
  MagentoLoginHeader,
  MagentoLanguageHeader,
  MagentoInputHeader,
} from "./magentoHeader";
import "./css.scss";

type I_MenuContent = {
  title: string;
  href: string;
};

const Header: React.FC = () => {
  const [openPhoneMenu, setOpenPhoneMenu] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<string>("hannstar");
  const [language, setLanguage] = useState<string>(window.hannstar?.language);

  const { account, hannstar } = urlConfig();
  const magentoHeaderRef: any = useRef();

  const { t, i18n } = useTranslation();
  // const language = useRef(i18n.language);

  const [isLogin, setIsLogin] = useState<boolean>(true);

  useEffect(() => {
    // const magentoDom: any = document.getElementsByClassName("page-header")[0];
    // if (magentoDom) magentoHeaderRef.current.appendChild(magentoDom);

    const type = window.location.pathname.split("/")[2];
    const mappingArr = [
      "hannstar",
      "partner",
      "service",
      "paperdisplay",
      "tftdisplay",
      "solution",
      "hannspree",
    ];
    mappingArr.includes(type) && setServiceType(type);
  }, []);

  const handleOpenPhoneMenu = () => {
    setOpenPhoneMenu(!openPhoneMenu);
  };

  const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const urlArr = window.location.pathname.split("/");
    const mappingObj: any = {
      "en_US": "en",
      "zh_Hant_TW": "tw",
      "zh_Hans_CN": "cn",
    };
    if (urlArr[1] === "tw" || urlArr[1] === "en" || urlArr[1] === "cn") {
      urlArr[1] = mappingObj[e.target.value] ? mappingObj[e.target.value] : "tw"
    } else {
      urlArr[0] = mappingObj[e.target.value] ? mappingObj[e.target.value] : "tw"
    }
    window.location.href = urlArr.join("/")
  }

  const menuList: I_MenuType = useMenu();

  const TopHeaderBlock = () => {
    return (
      <div className="hannstarTopBlock">
        <div className="algoliaInputBlock">
          <input className="algoliaInput" type="text" />
          <div className="searchIcon">

          </div>
        </div>
        <select className="languageSelect" value={language} onChange={handleSelectLanguage}>
          <option value="zh_Hant_TW">繁中</option>
          <option value="zh_Hans_CN">简中</option>
          <option value="en_US">EN</option>
        </select>
        {window.hannstar.islogin ?
          <div className="accountBlock">
            <a className="toolBarText" href={account.MyAccount.href}>會員中心</a>
            <a className="toolBarText" href={account.AccountMagentoLogoutUrl.href}>登出</a>
          </div>
          :
          <div className="accountBlock">
            <a className="toolBarText" href={account.login.href}>登入</a>
            <a className="toolBarText" href={account.register.href}>註冊</a>
          </div>}
      </div>
    );
  };

  const menuMData = menuList[serviceType].map((item) => {
    const { title, content } = item;
    return {
      title: <div className="menuTitle">{title}</div>,
      content:
        content &&
        content.map((obj) => (
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
        {menuList[serviceType].map((item, index) => (
          <li className="menuLi" key={index}>
            <div className="menuText">
              <a href={item.href}>{item.title}</a>
              <div className="arrow"></div>
            </div>
            <ul
              className={`secMenuUl ${item.type === "member" && "base-box-shadow"
                }`}
            >
              {isLogin && item.type === "member" ? (
                <div className="member-content">
                  <h4>Tyler</h4>
                  {menuList["member"].map((item) => (
                    <ul>
                      {item.content?.map((i) => (
                        <li>{i.title}</li>
                      ))}
                    </ul>
                  ))}
                  <a className="hannstarLoginBtn" href={account.login.href}>
                    {account.login.title}
                  </a>
                </div>
              ) : (
                <>
                  {item.content &&
                    item.content.length > 0 &&
                    item.content?.map(
                      (subMenu: I_MenuContent, index: number) => (
                        <li key={index}>
                          <a href={subMenu.href}>{subMenu.title}</a>
                        </li>
                      )
                    )}
                </>
              )}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  // const handleChangeLanguage = () => {
  //   const newLanguage = language.current === "tw" ? "en" : "tw";
  //   language.current = newLanguage;
  //   console.log('newLanguage', newLanguage)
  //   i18n.changeLanguage(language.current);
  // };

  return (
    <div className="hannstarHeader">
      <div ref={magentoHeaderRef} className="magentoHeader">
        <TopHeaderBlock />
        {/* <MagentoInputHeader /> */}
        {/* <MagentoLoginHeader /> */}
        {/* <MagentoNotLoginHeader /> */}
        {/* <MagentoLanguageHeader /> */}
      </div>
      <div className="header_pc">
        <a href={hannstar.index.href}>
          <img
            className="logo"
            alt="logo"
            src={`${urlConfig().s3Url}/Image/hannstar/header/logo.png`}
          />
        </a>
        <div className="menuBlock">
          <MenuBlock />
          {/* <div className="otherBlock">
            <a className="headerBtn login" href={account.login.href}>
              {account.login.title}
            </a>
            <select
              className="headerBtn i18n"
              onChange={(lang) => i18n.changeLanguage(lang.target.value)}
            >
              <option value="tw">繁中</option>
              <option value="en">EN</option>
              <option value="cn">简中</option>
            </select>
          </div> */}
        </div>
      </div>
      <div className="header_m">
        <img
          className="logo"
          alt="logo"
          src={`${urlConfig().s3Url}/Image/hannstar/header/logo.png`}
        />
        <div
          className={`menuOpenBtn ${openPhoneMenu ? "open" : "close"}`}
          onClick={handleOpenPhoneMenu}
        >
          <span></span>
        </div>
        <div className={`phoneMenuBlock ${openPhoneMenu ? "open" : "close"}`}>
          {menuMData && <CollapseLi data={menuMData} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
