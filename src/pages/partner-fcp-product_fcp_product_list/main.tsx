import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import PaginatedBlock from "../../component/paginatedBlock/main";
import testTableData from "./testTableData.json";
import { SearchIcon } from "./icon/searchIcon";
import PartnerFcpTemplate from "../../templates/partner-fcp/main";
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
            className={`stateTab ${
              productListStateTab === index ? "active" : ""
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
      return (
        <div className="hannstarCheckBox" key={index}>
          <input
            id={"deleteCheckBox" + index}
            type="checkBox"
            value=""
            name="deleteCheckBox"
          />
          <label htmlFor={"deleteCheckBox" + index}></label>
        </div>
      );
    };

    return (
      <table className="productListBlock">
        <thead>
          <tr>
            {productListStateTab === 3 && (
              <td>
                <DeleteCheckBox />
              </td>
            )}
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
                {productListStateTab === 3 && (
                  <td>
                    <DeleteCheckBox index={index} />
                  </td>
                )}
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
      console.log("delete");
    };

    return (
      <div className="deleteBlock">
        {productListStateTab === 3 ? (
          <div className="deleteBtn" onClick={handleOnClick}>
            刪除
          </div>
        ) : null}
      </div>
    );
  };

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <FilterStateBlock />
        <SearchBlock />
        <DeleteBtnBlock />
        <PaginatedBlock data={PaginatedBlockProp} />
      </div>
    );
  };

  const partnerFcpTemplateProp = {
    contentComponent: <ContentBlock />,
    activeLink: 0,
  };

  return (
    <Layout>
      <Breadcrumbs data={breadcrumbsData} />
      <PartnerFcpTemplate data={partnerFcpTemplateProp} />
    </Layout>
  );
};

export default PartnerFcpProductFcpProductList;
