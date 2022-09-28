import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { FormIconActive } from "./icon/formIconActive";
import { FormIcon } from "./icon/formIcon";
import { HouseIconActive } from "./icon/houseIconActive";
import { HouseIcon } from "./icon/houseIcon";
import { ManualIconActive } from "./icon/manualIconActive";
import { ManualIcon } from "./icon/manualIcon";
import { SubtractIconActive } from "./icon/subtractIconActive";
import { SubtractIcon } from "./icon/subtractIcon";
import "./css.scss";

interface I_PartnerFcpTemplate {
  data: {
    contentComponent: JSX.Element;
    activeLink: number;
  };
}

const PartnerFcpTemplate: React.FC<I_PartnerFcpTemplate> = ({ data }) => {
  const pageName = "partner-fcp-template";

  interface I_UserInfo {
    name: string;
    email: string;
  }

  const userInfoData = {
    name: "pdmo01",
    email: "pdmo01@hannstar.com",
  };

  const UserInfoBlock: React.FC<I_UserInfo> = ({ name, email }) => {
    return (
      <div className={`${pageName}UserInfoBlock`}>
        <div className="imgBlock">
          <img
            alt=""
            src="https://partner-test.hannstar.com/images/fcp/vendor.png"
          />
        </div>
        <div className="infoBlock">
          <div className="name">{`${name}，您好!`}</div>
          <div className="email">{`廠商帳戶: ${email}`}</div>
        </div>
      </div>
    );
  };

  const productCountInfoData = {
    total: "21",
    productOn: "2",
    productOff: "19",
  };

  interface I_ProductCountInfo {
    total: string;
    productOn: string;
    productOff: string;
  }

  const ProductCountInfoBlock: React.FC<I_ProductCountInfo> = ({
    total,
    productOn,
    productOff,
  }) => {
    return (
      <div className={`${pageName}ProductCountInfoBlock`}>
        <div className="block">
          <div className="title">總產品數量</div>
          <div className="count total">{total}</div>
        </div>
        <div className="block">
          <div className="title">未上架數量</div>
          <div className="count productOff">{productOff}</div>
        </div>
        <div className="block">
          <div className="title">已上架數量</div>
          <div className="count productOn">{productOn}</div>
        </div>
      </div>
    );
  };

  const ProductToolBar = () => {
    const productToolBarData = [
      {
        text: "產品清單",
        href: "/FCP/PRODUCT/PROG_FCP_PRODUCT_LIST",
        icon: <FormIcon />,
        activeIcon: <FormIconActive />,
      },
      {
        text: "價格及庫存管理",
        href: "/FCP/PRODUCT/PROG_FCP_PRODUCT_COST_INVENTORY",
        icon: <HouseIcon />,
        activeIcon: <HouseIconActive />,
      },
      {
        text: "新增產品",
        href: "/FCP/PRODUCT/PROG_FCP_NEW_PRODUCT",
        icon: <SubtractIcon />,
        activeIcon: <SubtractIconActive />,
      },
      {
        text: "平台操作手冊",
        href: "",
        icon: <ManualIcon />,
        activeIcon: <ManualIconActive />,
      },
      {
        text: "產品標籤手冊",
        href: "",
        icon: <ManualIcon />,
        activeIcon: <ManualIconActive />,
      },
    ];

    return (
      <div className={`${pageName}ProductToolBar`}>
        <ul>
          {productToolBarData.map((item, index) => (
            <li
              className={`linkText ${
                data.activeLink === index ? "active" : ""
              }`}
              key={index}
            >
              <a href={item.href}>
                {data.activeLink === index ? item.activeIcon : item.icon}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <div className={`${pageName}TopBlock`}>
          <UserInfoBlock {...userInfoData} />
          <ProductCountInfoBlock {...productCountInfoData} />
        </div>
        {data.contentComponent}
      </div>
    );
  };

  return (
    <Columns
      type={ColType.TwoColFullPage}
      widthL={15}
      widthR={85}
      contentL={<ProductToolBar />}
      contentR={<ContentBlock />}
    />
  );
};

export default PartnerFcpTemplate;
