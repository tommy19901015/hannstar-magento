import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import PaginatedBlock from "../../component/paginatedBlock/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { ParseState, I_Table, I_tabStateInfo } from "./interface"
import testTableData from "./testTableData.json";
import "./css.scss";
import { pageData } from "./pageData";

const ServiceParseList: React.FC = () => {
  const pageName = "ServiceParseList";
  const [parseListData, setParseListData] = useState<any>([]);
  const [parseListStateTab, setParseListStateTab] = useState<number>(0);

  const fakeApiData: any = testTableData;

  useEffect(() => {
    setParseListData(fakeApiData);
  }, [fakeApiData]);

  const FilterStateBlock = () => {
    const tabStateInfo: I_tabStateInfo = [
      {
        text: pageData().filterState.all,
        state: ParseState.All,
      },
      {
        text: pageData().filterState.applying,
        state: ParseState.Applying,
      },
      {
        text: pageData().filterState.send,
        state: ParseState.Send,
      },
      {
        text: pageData().filterState.parsing,
        state: ParseState.Parsing,
      },
      {
        text: pageData().filterState.closed,
        state: ParseState.Closed,
      },
    ];

    const changeState = (state: ParseState, index: number) => {
      setParseListStateTab(index);
      const filterData = state
        ? fakeApiData.filter((item: any) => item.state === state)
        : fakeApiData;
      setParseListData(filterData);
    };

    return (
      <div className="filterStateBlock">
        {tabStateInfo.map((item, index) => (
          <div
            className={`stateTab ${parseListStateTab === index ? "active" : ""}`}
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
          <div className="text">{pageData().filterState.applying}</div>
        </div>
        <div className="state">
          <div className="icon">2</div>
          <div className="text">{pageData().filterState.send}</div>
        </div>
        <div className="state">
          <div className="icon">3</div>
          <div className="text">{pageData().filterState.parsing}</div>
        </div>
        <div className="state">
          <div className="icon">4</div>
          <div className="text">{pageData().filterState.closed}</div>
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
            <td>{pageData().parseListThead.action}</td>
            <td>{pageData().parseListThead.requisitionNo}</td>
            <td>{pageData().parseListThead.paresNo}</td>
            <td>{pageData().parseListThead.modelNo}</td>
            <td>{pageData().parseListThead.badType}</td>
            <td>{pageData().parseListThead.badRate}</td>
            <td>{pageData().parseListThead.applicationProgress}</td>
            <td>{pageData().parseListThead.reportDownload}</td>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index) => (
              <tr key={index}>
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

export default ServiceParseList;
