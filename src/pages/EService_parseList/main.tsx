import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import PaginatedBlock from "../../component/paginatedBlock/main";
import testTableData from "./testTableData.json";
import "./css.scss";

const EServiceParseList: React.FC = () => {
  const pageName = "EServiceParseList";
  const [parseListData, setParseListData] = useState<any>([]);
  const [RMAListStateTab, setRMAListStateTab] = useState<number>(0);

  const fakeApiData: any = testTableData;

  useEffect(() => {
    setParseListData(fakeApiData);
  }, [fakeApiData]);

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "客戶通",
        href: "",
      },
      {
        text: "解析列表",
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
      setParseListData(filterData);
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
    paresNo: string;
    modelNo: string;
    badType: string;
    badRate: string;
    applicationProgress: string;
    reportDownload: string;
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
        <div className="title">解析進度說明:</div>
        <div className="state">
          <div className="icon">1</div>
          <div className="text">申請中</div>
        </div>
        <div className="state">
          <div className="icon">2</div>
          <div className="text">寄送</div>
        </div>
        <div className="state">
          <div className="icon">3</div>
          <div className="text">解析中</div>
        </div>
        <div className="state">
          <div className="icon">4</div>
          <div className="text">結案</div>
        </div>
      </div>
    );
  };

  const ParseListBlock = (currentItems: I_Table[]) => {
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
      <table className="parseListBlock">
        <thead>
          <tr>
            <td>Action</td>
            <td>申請單號</td>
            <td>解析單號</td>
            <td>機種料號</td>
            <td>不良現象</td>
            <td>不良率</td>
            <td>申請進度</td>
            <td>報告下載</td>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index: number) => (
              <tr>
                <td></td>
                <td>{item.requisitionNo}</td>
                <td>{item.paresNo}</td>
                <td>{item.modelNo}</td>
                <td>{item.badType}</td>
                <td>{item.badRate}</td>
                <td>
                  <ProgressBlock activeProgress={item.applicationProgress} />
                </td>
                <td>{item.reportDownload}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  const PaginatedBlockProp = {
    totalData: parseListData,
    contentComponent: ParseListBlock,
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

export default EServiceParseList;
