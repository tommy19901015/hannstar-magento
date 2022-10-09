import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import PaginatedBlock from "../../component/paginatedBlock/main";
import testTableData from "./testTableData.json";
import PartnerFcpTemplate from "../../templates/partner_product/main";
import { PageType } from "../../templates/partner_product/interface";
import "./css.scss";

const EServiceRMAList: React.FC = () => {
  const pageName = "EServiceRMAList";
  const [RMAListData, setRMAListData] = useState<any>([]);
  const [RMAListStateTab, setRMAListStateTab] = useState<number>(0);

  const fakeApiData: any = testTableData;
  const productCountInfoData = {};

  useEffect(() => {
    setRMAListData(fakeApiData);
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
        text: "方案產品清單",
        href: "",
      },
    ],
  };

  const FilterStateBlock = () => {
    enum ProductState {
      NotApproved = "notApproved",
      Pending = "pending",
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
    ];

    const changeState = (state: ProductState, index: number) => {
      setRMAListStateTab(index);
      const filterData = state
        ? fakeApiData.filter((item: any) => item.state === state)
        : fakeApiData;
      setRMAListData(filterData);
    };

    return (
      <div className="filterStateBlock">
        {tabStateInfo.map((item, index) => (
          <div
            className={`stateTab ${RMAListStateTab === index ? "active" : ""}`}
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
      setRMAListData(
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
      </div>
    );
  };

  interface I_Table {
    requisitionNo: string;
    RMANo: string;
    agent: string;
    modelNo: string;
    requisitionCount: string;
    overturn: string;
    signOffResult: string;
    applicationProgress: string;
    shipDate: string;
    shipDNNO: string;
    returnNo: string;
    sellOffNo: string;
    caseResult: string;
  }

  const productListBlock = (currentItems: I_Table[]) => {
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
            {RMAListStateTab === 3 && (
              <td>
                <DeleteCheckBox />
              </td>
            )}
            <td>Action</td>
            <td>申請單號</td>
            <td>RMA單號</td>
            <td>代理商</td>
            <td>機種料號</td>
            <td>申請數量</td>
            <td>快束覆判</td>
            <td>簽核結果</td>
            <td>申請進度</td>
            <td>出貨日期</td>
            <td>出貨DNNo</td>
            <td>已還貨數量</td>
            <td>銷退數量</td>
            <td>結案方式</td>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index: number) => (
              <tr>
                {RMAListStateTab === 3 && (
                  <td>
                    <DeleteCheckBox index={index} />
                  </td>
                )}
                <td>{item.requisitionNo}</td>
                <td>{item.RMANo}</td>
                <td>{item.agent}</td>
                <td>{item.modelNo}</td>
                <td>{item.requisitionCount}</td>
                <td>{item.overturn}</td>
                <td>{item.signOffResult}</td>
                <td>{item.applicationProgress}</td>
                <td>{item.shipDate}</td>
                <td>{item.shipDNNO}</td>
                <td>{item.returnNo}</td>
                <td>{item.sellOffNo}</td>
                <td>{item.caseResult}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  const PaginatedBlockProp = {
    totalData: RMAListData,
    contentComponent: productListBlock,
  };

  const DeleteBtnBlock = () => {
    const handleOnClick = () => {
      console.log("delete");
    };

    return (
      <div className="deleteBlock">
        {RMAListStateTab === 3 ? (
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
    pageType: PageType.Solution,
    productCountInfo: productCountInfoData,
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

export default EServiceRMAList;
