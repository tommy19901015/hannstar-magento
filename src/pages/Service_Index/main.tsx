import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import "./css.scss";
import usePageData from "./pageData";
import { postGetD360Art } from "../../services/api.service";
import TemplateLayout from "../../templates/TemplateLayout/main";
import D360ArticleList2 from "../../component/d360ArticleList2/main";
import mappingD360I18n from "../../common/mappingD360I18n";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Loading from "../../component/loading/main";
//-------------------------------------------
// import fakeData from "../../D360fakeData/D360_EducationData.json";
//-------------------------------------------

const ServiceIndex: React.FC = () => {
  const pageName = "ServiceIndex";
  const pageData = usePageData();
  const [showTechnicalData, setShowTechnicalData] = useState<any>();
  const [showEducationData, setShowEducationData] = useState<any>();

  useEffect(() => {
    const postTechnicalData = {
      method: "GetAllArticles",
      language: mappingD360I18n(window.hannstar?.language),
      site: "/service/technical",
    };

    const postEducationData = {
      method: "GetAllArticles",
      language: mappingD360I18n(window.hannstar?.language),
      site: "/service/education",
    };

    postGetD360Art(postTechnicalData).then((response: any) => {
      if (response.result === "success") {
        setShowTechnicalData(response.data);
      }
    });

    postGetD360Art(postEducationData).then((response: any) => {
      if (response.result === "success") {
        setShowEducationData(response.data);
      }
    });

    // setShowTechnicalData(fakeData.data);
    // setShowEducationData(fakeData.data);
  }, []);

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
        <Columns
          type={ColType.OneCol}
          content={
            <div className={`${pageName}ArticleListBlock`}>
              <div className="mainTitle">??????????????????</div>
              <div className="articleBlock">
                <div className="title">????????????</div>
                <div className="content">
                  {showTechnicalData ? (
                    <D360ArticleList2
                      data={showTechnicalData}
                      showQuantity={3}
                    />
                  ) : (
                    <Loading height="150px" />
                  )}
                </div>
              </div>
              <div className="articleBlock">
                <div className="title">????????????</div>
                <div className="content">
                  {showEducationData ? (
                    <D360ArticleList2
                      data={showEducationData}
                      showQuantity={3}
                    />
                  ) : (
                    <Loading height="150px" />
                  )}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default ServiceIndex;
