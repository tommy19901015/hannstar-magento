import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import PaginatedBlock from "../../component/paginatedBlock/main";
import testTableData from "./testTableData.json";
import "./css.scss";

const EServiceRMAList: React.FC = () => {
  const pageName = "EServiceRMAList";
  const [RMAListData, setRMAListData] = useState<any>([]);
  const [RMAListStateTab, setRMAListStateTab] = useState<number>(0);

  const fakeApiData: any = testTableData;

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

  const FilterYearBlock = () => {
    const handlerOnChange = () => {
      console.log("handlerOnChange");
    };

    return (
      <div className="filterYearBlock">
        <div className="title">年度</div>
        <select onChange={handlerOnChange}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
      </div>
    );
  };

  const StateNoteBlock = () => {
    return (
      <div className="stateNoteBlock">
        <div className="title">進度說明:</div>
        <div className="state">
          <div className="icon">1</div>
          <div className="text">立案</div>
        </div>
        <div className="state">
          <div className="icon">2</div>
          <div className="text">覆判審核</div>
        </div>
        <div className="state">
          <div className="icon">3</div>
          <div className="text">覆判完成</div>
        </div>
        <div className="state">
          <div className="icon">4</div>
          <div className="text">退補處裡</div>
        </div>
        <div className="state">
          <div className="icon">5</div>
          <div className="text">已退補/結案</div>
        </div>
      </div>
    );
  };

  const RMAListBlock = (currentItems: I_Table[]) => {
    const ProgressBlock = ({ activeProgress }: any) => {
      const progressArr = ["1", "2", "3", "4"];

      return (
        <div className="progressBlock">
          {progressArr.map((item) => (
            <>
              <div
                className={`icon ${item === activeProgress ? "active" : ""}`}
              >
                {item}
              </div>
              <div className="line"></div>
            </>
          ))}
        </div>
      );
    };

    return (
      <table className="RMAListBlock">
        <thead>
          <tr>
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
                <td></td>
                <td>{item.requisitionNo}</td>
                <td>{item.RMANo}</td>
                <td>{item.agent}</td>
                <td>{item.modelNo}</td>
                <td>{item.requisitionCount}</td>
                <td>{item.overturn}</td>
                <td>{item.signOffResult}</td>
                <td>
                  <ProgressBlock activeProgress={item.applicationProgress} />
                </td>
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
    contentComponent: RMAListBlock,
  };

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <FilterYearBlock />
        <FilterStateBlock />
        <StateNoteBlock />
        <PaginatedBlock data={PaginatedBlockProp} />
      </div>
    );
  };

  return (
    <Layout>
      <Breadcrumbs {...breadcrumbsData} />
      <ContentBlock />
    </Layout>
  );
};

export default EServiceRMAList;
