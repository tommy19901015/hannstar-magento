import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
// import Form from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
// import { I_Props, FormType } from "../../component/form/interface";
// import ReactPaginate from 'react-paginate';
import PaginatedBlock from "../../component/paginatedBlock/main";
import testTableData from "./testTableData.json";
import { SearchIcon } from './icon/searchIcon'
import { FormIconActive } from "./icon/formIconActive";
import { FormIcon } from "./icon/formIcon";
import { HouseIconActive } from "./icon/houseIconActive";
import { HouseIcon } from "./icon/houseIcon";
import { ManualIconActive } from "./icon/manualIconActive";
import { ManualIcon } from "./icon/manualIcon";
import { SubtractIconActive } from "./icon/subtractIconActive";
import { SubtractIcon } from "./icon/subtractIcon";
import "./css.scss";

const PartnerFcpProductFcpProductList: React.FC = () => {
  const pageName = "partner-fcp-product_fcp_product_list";
  const [productListData, setProductListData] = useState<any>([]);
  const [productListStateTab, setProductListStateTab] = useState<number>(0);

  const fakeApiData: any = testTableData;

  useEffect(() => {
    setProductListData(fakeApiData);
  }, [fakeApiData]);

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "供應商協同合作",
        href: "",
      },
      {
        text: "協同製造夥伴",
        href: "",
      },
      {
        text: "製造夥伴資料",
        href: "",
      },
      {
        text: "產品清單",
        href: "",
      },
    ],
  };

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
      <div className="userInfoBlock">
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
      <div className="productCountInfoBlock">
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
        active: true,
        href: "",
        icon: <FormIcon />,
        activeIcon: <FormIconActive />
      },
      {
        text: "價格及庫存管理",
        active: false,
        href: "",
        icon: <HouseIcon />,
        activeIcon: <HouseIconActive />
      },
      {
        text: "新增產品",
        active: false,
        href: "",
        icon: <SubtractIcon />,
        activeIcon: <SubtractIconActive />
      },
      {
        text: "平台操作手冊",
        active: false,
        href: "",
        icon: <ManualIcon />,
        activeIcon: <ManualIconActive />
      },
      {
        text: "產品標籤手冊",
        active: false,
        href: "",
        icon: <ManualIcon />,
        activeIcon: <ManualIconActive />
      },
    ]

    return (
      <div className={`${pageName}ProductToolBar`}>
        <ul>
          {
            productToolBarData.map((item, index) =>
              <li className={`linkText ${item.active ? "active" : ""}`} key={index}>
                <a href={item.href}>
                  {item.active ? item.activeIcon : item.icon}
                  {item.text}
                </a>
              </li>)
          }
        </ul>
      </div>
    );
  };

  const FilterStateBlock = () => {
    enum ProductState {
      NotApproved = "notApproved",
      Pending = "pending",
      Draft = "draft",
      All = "",
    }

    type I_tabStateInfo = {
      text: string;
      state: ProductState;
    }[];

    const tabStateInfo: I_tabStateInfo = [
      {
        text: "所有產品",
        state: ProductState.All,
      },
      {
        text: "審核中",
        state: ProductState.Pending,
      },
      {
        text: "未通過審核",
        state: ProductState.NotApproved,
      },
      {
        text: "草稿區",
        state: ProductState.Draft,
      },
    ];

    const changeState = (state: ProductState, index: number) => {
      setProductListStateTab(index);
      const filterData = state
        ? fakeApiData.filter((item: any) => item.state === state)
        : fakeApiData;
      setProductListData(filterData);
    };

    return (
      <div className="filterStateBlock">
        {tabStateInfo.map((item, index) => (
          <div
            className={`stateTab ${productListStateTab === index ? "active" : ""
              }`}
            onClick={() => changeState(item.state, index)}
          >
            {item.text}
          </div>
        ))}
      </div>
    );
  };

  const SearchBlock = () => {
    const [searchText, setSearchText] = useState<string>("");

    const handleSearch = () => {
      setProductListData(
        fakeApiData.filter(
          (item: any) =>
            item.productNo.includes(searchText) ||
            item.HSDNo.includes(searchText)
        )
      );
    };

    return (
      <div className="searchBlock">
        <input
          type="text"
          placeholder="請輸入HSD型號或外包型號"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div onClick={handleSearch} className="searchBtn">
          <SearchIcon />
        </div>
      </div>
    );
  };

  interface I_Table {
    state: string;
    productNo: string;
    HSDNo: string;
    size: string;
    resolution: string;
    auditState: string;
    detailSpecs: string;
    productPhoto: string;
    productData: string;
    fontState: string;
    date: string;
  }

  //-------------------------------------------

  const productListBlock = (currentItems: any) => {
    const SwitchBtn = ({ value }: any) => {
      return (
        <label className="switchBtn">
          <input type="checkbox" defaultChecked={value} />
          <span className="slider round"></span>
        </label>
      );
    };

    const DeleteCheckBox = ({ index }: any) => {
      return (<div className="hannstarCheckBox" key={index}>
        <input
          id={"deleteCheckBox" + index}
          type="checkBox"
          value=""
          name="deleteCheckBox"
        />
        <label htmlFor={"deleteCheckBox" + index}></label>
      </div>)
    }

    return (
      <table className="productListBlock">
        <thead>
          <tr>
            {productListStateTab === 3 && <td><DeleteCheckBox /></td>}
            <td>外包型號</td>
            <td>HSD型號</td>
            <td>吋別</td>
            <td>解析度</td>
            <td>審核狀態</td>
            <td>詳細規格</td>
            <td>產品照片</td>
            <td>產品資料</td>
            <td>前台狀態</td>
            <td>建立日期</td>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item: any, index: number) => (
              <tr>
                {productListStateTab === 3 && <td><DeleteCheckBox index={index} /></td>}
                <td>
                  <a href={"/"}>{item.productNo}</a>
                </td>
                <td>{item.HSDNo}</td>
                <td>{item.size}</td>
                <td>{item.resolution}</td>
                <td>{item.auditState}</td>
                <td>
                  <a href={"/"}>修改</a>
                </td>
                <td>
                  <a href={"/"}>修改</a>
                </td>
                <td>
                  <a href={"/"}>修改</a>
                </td>
                <td>
                  <SwitchBtn value={item.fontState} />
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  const PaginatedBlockProp = {
    totalData: productListData,
    contentComponent: productListBlock,
  };

  const DeleteBtnBlock = () => {
    const handleOnClick = () => {
      console.log('delete')
    }

    return (<div className="deleteBlock">{productListStateTab === 3 ?
      <div className="deleteBtn" onClick={handleOnClick}>刪除</div> : null}</div>)
  }

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <div className="topBlock">
          <UserInfoBlock {...userInfoData} />
          <ProductCountInfoBlock {...productCountInfoData} />
        </div>
        <FilterStateBlock />
        <SearchBlock />
        <DeleteBtnBlock />
        <PaginatedBlock data={PaginatedBlockProp} />
      </div>
    );
  };

  return (
    <Layout>
      <Breadcrumbs data={breadcrumbsData} />
      <Columns
        type={ColType.TwoColFullPage}
        widthL={15}
        widthR={85}
        contentL={<ProductToolBar />}
        contentR={<ContentBlock />} />
    </Layout>
  );
};

export default PartnerFcpProductFcpProductList;
