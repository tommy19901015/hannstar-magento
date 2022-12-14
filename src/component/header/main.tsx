import React, { useState, useEffect, useRef } from "react";
import useMenu from "../../common/menuData";
import CollapseLi from "../collapseLi/main";
import { urlConfig } from "../../config/urlSetting";
import { useTranslation } from "react-i18next";
import { I_MenuType } from "../../common/menuData";
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
  isBlank?: boolean;
};

declare global {
  interface Window {
    zESettings: any;
  }
}

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
    addZdassets();
  }, []);

  const mappingLogo = () => {
    const langMappingObj = {
      en_US: "en",
      zh_Hant_TW: "tc",
      zh_Hans_CN: "sc",
    };

    return {
      hannstar: `${urlConfig().s3Url}/Image/hannstar/header/logo.png`,
      partner: `${
        urlConfig().s3Url
      }/Image/hannstar/header/img_logo_platformname_supplier_${
        langMappingObj[language]
      }.png`,
      service: `${
        urlConfig().s3Url
      }/Image/hannstar/header/img_logo_platformname_customer_${
        langMappingObj[language]
      }.png`,
      paperdisplay: `${
        urlConfig().s3Url
      }/Image/hannstar/header/img_logo_platformname_paper_en.png`,
      tftdisplay: `${
        urlConfig().s3Url
      }/Image/hannstar/header/img_logo_platformname_tft_en.png`,
      solution: `${
        urlConfig().s3Url
      }/Image/hannstar/header/img_logo_platformname_siss_${
        langMappingObj[language]
      }.png`,
      hannspree: `${
        urlConfig().s3Url
      }/Image/hannstar/header/img_logo_platformname_hannspree_${
        langMappingObj[language]
      }.png`,
    };
  };

  const addZdassets = () => {
    const mappingKey = {
      en_US: "fb337541-f8c1-4c71-a422-181f211ce6a8",
      zh_Hant_TW: "25e61c9f-fdf0-4791-8eaa-63e957511f91",
      zh_Hans_CN: "de1d2c46-0218-4c7e-b2bb-916554f00852",
    };

    const zdassetsKey = mappingKey[window.hannstar?.language]
      ? mappingKey[window.hannstar?.language]
      : mappingKey["zh_Hant_TW"];

    const zdassetsScript = document.createElement("script");
    zdassetsScript.id = "ze-snippet";
    zdassetsScript.src = `https://static.zdassets.com/ekr/snippet.js?key=${zdassetsKey}`;
    document.body.appendChild(zdassetsScript);
  };

  const handleOpenPhoneMenu = () => {
    setOpenPhoneMenu(!openPhoneMenu);
  };

  const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const urlArr = window.location.pathname.split("/");
    const mappingObj: any = {
      en_US: "en",
      zh_Hant_TW: "tw",
      zh_Hans_CN: "cn",
    };
    if (urlArr[1] === "tw" || urlArr[1] === "en" || urlArr[1] === "cn") {
      urlArr[1] = mappingObj[e.target.value]
        ? mappingObj[e.target.value]
        : "tw";
    } else {
      urlArr[0] = mappingObj[e.target.value]
        ? mappingObj[e.target.value]
        : "tw";
    }
    window.location.href = urlArr.join("/");
  };

  const menuList: I_MenuType = useMenu();

  const LangSelectBlock = () => {
    return (
      <select
        className="languageSelect"
        value={language}
        onChange={handleSelectLanguage}
      >
        <option value="zh_Hant_TW">??????</option>
        <option value="zh_Hans_CN">??????</option>
        <option value="en_US">EN</option>
      </select>
    );
  };

  const AccountStateBlock = () => {
    if (window.hannstar.islogin) {
      return (
        <div className="accountBlock">
          <a className="toolBarText" href={account.MyAccount.href}>
            ????????????
          </a>
          <a
            className="toolBarText"
            href={account.AccountMagentoLogoutUrl.href}
          >
            ??????
          </a>
        </div>
      );
    } else {
      return (
        <div className="accountBlock">
          <a className="toolBarText" href={account.login.href}>
            ??????
          </a>
          <a className="toolBarText" href={account.register.href}>
            ??????
          </a>
        </div>
      );
    }
  };

  const TopHeaderBlock = () => {
    return (
      <div className="hannstarTopBlock">
        <div className="algoliaInputBlock">
          <input className="algoliaInput" type="text" />
          <div className="searchIcon"></div>
        </div>
        <LangSelectBlock />
        <AccountStateBlock />
      </div>
    );
  };

  const menuMData = menuList[serviceType].map((item) => {
    const { title, content, href, isBlank } = item;
    return {
      title: href ? (
        <a
          className="menuTitle"
          href={href}
          target={isBlank ? "_blank" : ""}
          rel="noreferrer"
        >
          {title}
        </a>
      ) : (
        <div className="menuTitle">{title}</div>
      ),
      content:
        content &&
        content.map((obj) => (
          <li>
            <a
              className="menuContrnt"
              href={obj.href}
              target={obj.isBlank ? "_blank" : ""}
              rel="noreferrer"
            >
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
            <div
              className={`menuText ${
                item.content && item.content.length === 0 && "noSec"
              }`}
            >
              <a
                href={item.href}
                target={item.isBlank ? "_blank" : ""}
                rel="noreferrer"
              >
                {item.title}
              </a>
              <div className="arrow"></div>
            </div>
            <ul
              className={`secMenuUl ${
                item.type === "member" && "base-box-shadow"
              }`}
            >
              {item.content &&
                item.content.length > 0 &&
                item.content?.map((subMenu: I_MenuContent, index: number) => (
                  <li key={index}>
                    <a
                      href={subMenu.href}
                      target={subMenu.isBlank ? "_blank" : ""}
                      rel="noreferrer"
                    >
                      {subMenu.title}
                    </a>
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
        <a href={hannstar.index.href}>
          <img className="logo" alt="logo" src={mappingLogo()[serviceType]} />
        </a>
        <div className="menuBlock">
          <div ref={magentoHeaderRef} className="magentoHeader">
            <TopHeaderBlock />
            {/* <MagentoInputHeader /> */}
            {/* <MagentoLoginHeader /> */}
            {/* <MagentoNotLoginHeader /> */}
            {/* <MagentoLanguageHeader /> */}
          </div>
          <MenuBlock />
        </div>
      </div>
      <div className="header_m">
        <a href={hannstar.index.href}>
          <img
            className="logo"
            alt="logo"
            src={`${urlConfig().s3Url}/Image/hannstar/header/logo.png`}
          />
        </a>
        <div className="algoliaInputBlock">
          <input className="algoliaInput" type="text" />
          <div className="searchIcon"></div>
        </div>
        <div
          className={`menuOpenBtn ${openPhoneMenu ? "open" : "close"}`}
          onClick={handleOpenPhoneMenu}
        >
          <span></span>
        </div>
        <div className={`phoneMenuBlock ${openPhoneMenu ? "open" : "close"}`}>
          <LangSelectBlock />
          <AccountStateBlock />
          {menuMData && <CollapseLi data={menuMData} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
