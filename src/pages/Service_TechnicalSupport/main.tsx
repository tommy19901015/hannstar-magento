import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import { postGetD360Art } from "../../services/api.service";
import Columns from "../../component/columns/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import { ColType } from "../../component/columns/interface";
import D360ArticleList2 from "../../component/d360ArticleList2/main";
import mappingD360I18n from "../../common/mappingD360I18n";
import "./css.scss";

const ServiceTechnicalSupport: React.FC = () => {
  const pageName = "ServiceTechnicalSupport";
  const [showData, setShowData] = useState<any>()
  const [articleType, setArticleType] = useState<string>("/service/technical");

  const pageData = usePageData();

  useEffect(() => {
    const postData = {
      "functionName": "Magento",
      "method": "GetAllArticles",
      "language": mappingD360I18n(window.hannstar?.language),
      "site": articleType
    }

    postGetD360Art(postData).then((response: any) => {
      if (response.result === "success") {
        setShowData(response.data)
      }
    });
  }, []);

  const handlerOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArticleType(e.target.value)
    const postData = {
      "functionName": "Magento",
      "method": "GetAllArticles",
      "language": mappingD360I18n(window.hannstar?.language),
      "site": e.target.value
    }

    postGetD360Art(postData).then((response: any) => {
      if (response.result === "success") {
        setShowData(response.data)
      }
    });
  }

  return (
    <Layout>
      <TemplateLayout {...pageData} />
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <div className={`${pageName}ContentBlock`}>
              <select value={articleType} onChange={handlerOnChange} className="articleSelect">
                <option value="/service/technical">技術文件</option>
                <option value="/service/education">教育訓練</option>
              </select>
              {showData && <D360ArticleList2 data={showData} />}
            </div>
          </>
        }
      />
    </Layout>
  );
};

export default ServiceTechnicalSupport;
