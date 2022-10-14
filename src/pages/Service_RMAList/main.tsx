import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import PaginatedBlock from "../../component/paginatedBlock/main";
import testTableData from "./testTableData.json";
import { RMAState, I_Table, I_tabStateInfo } from "./interface"
import "./css.scss";
import { useTranslation } from "react-i18next";
import { pageData } from "./pageData";

const ServiceRMAList: React.FC = () => {
  const pageName = "ServiceRMAList";
  const { t, i18n } = useTranslation();
  const [RMAListData, setRMAListData] = useState<any>([]);
  const [RMAListStateTab, setRMAListStateTab] = useState<number>(0);

  const fakeApiData: any = testTableData;

  useEffect(() => {
    setRMAListData(fakeApiData);
  }, [fakeApiData]);

  const FilterStateBlock = () => {
    const tabStateInfo: I_tabStateInfo = [
      {
        text: pageData(t).filterState.all,
        state: RMAState.All,
      },
      {
        text: pageData().filterState.register,
        state: RMAState.Register,
      },
      {
        text: pageData().filterState.overturnReview,
        state: RMAState.OverturnReview,
      },
      {
        text: pageData().filterState.overturnFinish,
        state: RMAState.OverturnFinish,
      },
      {
        text: pageData().filterState.refundProcessing,
        state: RMAState.RefundProcessing,
      },
      {
        text: pageData().filterState.closed,
        state: RMAState.Closed,
      },
    ];

    const changeState = (state: RMAState, index: number) => {
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

  const FilterYearBlock = () => {
    const handlerOnChange = () => {
      console.log("handlerOnChange");
    };

    return (
      <div className="filterYearBlock">
        <div className="title">{pageData().filterYearTitle}</div>
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
        <div className="title">{pageData().filterStateTitle}</div>
        <div className="state">
          <div className="icon">1</div>
          <div className="text">{pageData().filterState.register}</div>
        </div>
        <div className="state">
          <div className="icon">2</div>
          <div className="text">{pageData().filterState.overturnReview}</div>
        </div>
        <div className="state">
          <div className="icon">3</div>
          <div className="text">{pageData().filterState.overturnFinish}</div>
        </div>
        <div className="state">
          <div className="icon">4</div>
          <div className="text">{pageData().filterState.refundProcessing}</div>
        </div>
        <div className="state">
          <div className="icon">5</div>
          <div className="text">{pageData().filterState.closed}</div>
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
            <td>{pageData().RMAListThead.action}</td>
            <td>{pageData().RMAListThead.requisitionNo}</td>
            <td>{pageData().RMAListThead.RMANo}</td>
            <td>{pageData().RMAListThead.agent}</td>
            <td>{pageData().RMAListThead.modelNo}</td>
            <td>{pageData().RMAListThead.requisitionCount}</td>
            <td>{pageData().RMAListThead.overturn}</td>
            <td>{pageData().RMAListThead.signOffResult}</td>
            <td>{pageData().RMAListThead.applicationProgress}</td>
            <td>{pageData().RMAListThead.shipDate}</td>
            <td>{pageData().RMAListThead.shipDNNO}</td>
            <td>{pageData().RMAListThead.returnNo}</td>
            <td>{pageData().RMAListThead.sellOffNo}</td>
            <td>{pageData().RMAListThead.caseResult}</td>
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
      <Columns
        type={ColType.OneCol}
        content={<div className={`${pageName}ContentBlock`}>
          <h1 className="h1Title">{pageData().pageTitle}</h1>
          <div className={`${pageName}ToolBarBlack`}>
            <FilterYearBlock />
            <StateNoteBlock />
          </div>
          <FilterStateBlock />
          <PaginatedBlock data={PaginatedBlockProp} />
        </div>} />
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<>
          <Breadcrumbs {...pageData().breadcrumbs} />
          <ContentBlock />
        </>}
      />
    </Layout>
  );
};

export default ServiceRMAList;
