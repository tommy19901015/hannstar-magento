import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import { postGetD360Art } from "../../services/api.service";
import Columns from "../../component/columns/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import { ColType } from "../../component/columns/interface";
import D360ArticleList from "../../component/d360ArticleList/main";
import mappingD360I18n from "../../common/mappingD360I18n";
import "./css.scss";

import DD360Test from "../../D360fakeData/D360ArticleList.json"
import { urlConfig } from "../../config/urlSetting";

const NewsFinancial: React.FC = () => {
  const pageName = "NewsFinancial";
  const [d360Data, setD360Data] = useState<any>()
  const [showData, setShowData] = useState<any>()
  const [selectOption, setSelectOption] = useState<string>("");

  const pageData = usePageData();

  useEffect(() => {
    const postData = {
      "method": "GetAllArticles",
      "language": mappingD360I18n(window.hannstar?.language),
      "site": "/news/investors"
    }

    postGetD360Art(postData).then((response: any) => {
      console.log("response", response);
      if (response.result === "success") {
        setD360Data(response.data)
        setShowData(response.data)
      }
    });
    selectData();

    // const D360Test: any = DD360Test;
    // setD360Data(D360Test.data)
    // setShowData(D360Test.data)
    // selectData();

  }, []);

  const selectData = () => {
    const year = new Date().getFullYear();
    const optionArr: any = [{ text: "所有年份", value: "all" }];
    for (var i = year; i >= 2020; i--) {
      optionArr.push({ text: i, value: i });
    }
    return optionArr;
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value)
    e.target.value === "all" ?
      setShowData(d360Data) :
      setShowData(d360Data.filter((item: any) => item["published-date"].split(".")[0] === e.target.value))
  }

  return (
    <Layout>
      <TemplateLayout {...pageData} />
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <div className={`${pageName}ContentBlock`}>
              <select value={selectOption} onChange={handlerOnChange} className="articleSelect">
                {selectData().map((item: any) => (
                  <option value={item.value}>{item.text}</option>
                ))}
              </select>
              {showData && <D360ArticleList
                data={showData}
                articleUrl={urlConfig().hannstar.news_article.href} />}
            </div>
          </>
        }
      />
    </Layout>
  );
};

export default NewsFinancial;
