import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import "./css.scss";

const SustainabilityChairman: React.FC = () => {
  const pageName = "SustainabilityChairman";
  const [d360Data, setD360Data] = useState<any>();
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  const pageData = usePageData();

  useEffect(() => {
    //   const postData = {
    //     "functionName": "Magento",
    //     "method": "GetArticle",
    //     "language": "zh-hant",
    //     "site": "f59b73a6-4a2f-463f-a328-c6b10bfa598a"
    //   }
    //   postGetD360Art(postData).then((response: any) => {
    //     console.log("response", response);
    //     if (response.result === "success") {
    //       setD360Data(response.data)
    //     }
    //   });
    // setD360Data(testData.data)
    //test data--------------
    // setD360Data(testJsonArr);
    //test data--------------
  }, []);

  const handleClickTab = (index: any) => {
    setActiveTabIdx(index);
  };

  const D360Block = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <ul className="d360Ul">
          {d360Data.map((item: any, index: any) => (
            <li
              className={`d360Li ${activeTabIdx === index ? "active" : ""}`}
              onClick={() => handleClickTab(index)}
            >
              {item.metaTitle}
            </li>
          ))}
        </ul>
        {d360Data && (
          <div className="d360ContentBlock">
            <div className="d360Title">{d360Data[activeTabIdx].metaTitle}</div>
            <div
              className="d360HTML"
              dangerouslySetInnerHTML={{
                __html: d360Data[activeTabIdx].block[0].tablePC,
              }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <Breadcrumbs {...pageData.breadcrumbs} />
            {/* <D360Block /> */}
          </>
        }
      />
    </Layout>
  );
};

export default SustainabilityChairman;
