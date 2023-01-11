import React, { useEffect, useState } from "react";
import { postGetD360Art } from "../../services/api.service";
import CollapseLi from "../../component/collapseLi/main";
import { I_D360Templates } from "./interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import mappingD360I18n from "../../common/mappingD360I18n";
import Loading from "../../component/loading/main";
import "./css.scss";
//---------------------------------
// import DD360Test from "../../D360fakeData/D360_summary.json";
// import DD360Test from "../../D360fakeData/D360_Communicate.json";
// import DD360Test from "../../D360fakeData/D3603.json"
// import DD360Test from "../../D360fakeData/D360_PDF.json"
// import DD360Test from "../../D360fakeData/D360_oneArticle.json"
// import DD360Test from "../../D360fakeData/D360_multipleBlock.json";
// import DD360Test from "../../D360fakeData/D360_TabEmpty.json"
// import DD360Test from "../../D360fakeData/D360Empty_Error.json";
// import DD360Test from "../../D360fakeData/D360Error2.json"
//---------------------------------

const D360Templates: React.FC<I_D360Templates> = ({
  site,
  method,
  type,
  theme,
}) => {
  const pageName = "D360Templates";
  const [d360Data, setD360Data] = useState<any>();
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  useEffect(() => {
    const postData = {
      method: method,
      language: mappingD360I18n(window.hannstar?.language),
      site: site,
    };

    postGetD360Art(postData).then((response: any) => {
      if (response.result === "success") {
        checkD360Data(response) && setD360Data(response.data);
      }
    });

    // setD360Data(DD360Test.data);
  }, []);

  const handleClickTab = (index: any) => {
    setActiveTabIdx(index);
  };

  const checkD360Data = (checkData: any) => {
    console.log("checkData", checkData);
    if (
      checkData &&
      checkData.hasOwnProperty("data") &&
      Array.isArray(checkData.data) &&
      checkData.data.length !== 0
    ) {
      const checkArr = checkData.data.map(
        (item: any) => item.hasOwnProperty("block") && Array.isArray(item.block)
      );
      return !checkArr.includes(false);
    } else {
      return false;
    }
  };

  const D360Block = () => {
    const getRWDTable = (document360Data: any) => {
      const div: any = document.createElement("div");
      div.innerHTML = document360Data.trim();
      const table: any = div.getElementsByTagName("table");
      const trLlist: any = table[0].getElementsByTagName("tr");
      const trLlistArray = [...trLlist];
      const rwdData = trLlistArray.map((tr: any, idx: number) => {
        const td = tr.getElementsByTagName("td");
        const tdArray = [...td];
        return { title: tdArray[0].innerText, content: [tdArray[1].innerHTML] };
      });
      return <CollapseLi data={rwdData} />;
    };

    const multipleBlock = (blockData: any) => {
      return blockData.block.map((item: any) => (
        <>
          {type === "ServiceArticle" && (
            <div className="serviceArticleBlock">
              <div className="serviceArticleTitle">{blockData.title}</div>
              <div className="serviceArticleDate">
                {blockData["published-date"]}
              </div>
            </div>
          )}
          {item.content && (
            <div
              className="d360HTML content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
          {item.tablePC && (
            <div
              className="d360HTML tablePC"
              dangerouslySetInnerHTML={{ __html: item.tablePC }}
            />
          )}
          {item.tableM && (
            <div className="d360HTML tableM">{getRWDTable(item.tableM)}</div>
          )}
          {item.tablePDF && (
            <div
              className="d360HTML tablePDF"
              dangerouslySetInnerHTML={{ __html: item.tablePDF }}
            />
          )}
        </>
      ));
    };

    return (
      <div className={`${pageName}ModuleBlock`}>
        {d360Data && !d360Data.dataError ? (
          <>
            {d360Data.length > 1 && (
              <>
                <ul className={`d360Ul ${theme}`}>
                  {d360Data.map((item: any, index: number) => (
                    <li
                      className={`d360Li ${activeTabIdx === index ? "active" : ""
                        }`}
                      onClick={() => handleClickTab(index)}
                    >
                      {item.tab}
                    </li>
                  ))}
                </ul>
                <select
                  className="d360Select"
                  value={activeTabIdx}
                  onChange={(e) => handleClickTab(e.target.value)}
                >
                  {d360Data.map((item: any, index: number) => (
                    <option value={index}>{item.tab}</option>
                  ))}
                </select>
              </>
            )}
            <div className="d360ContentBlock">
              {multipleBlock(d360Data[activeTabIdx])}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  };

  return <Columns type={ColType.OneCol} content={<D360Block />} />;
};

export default D360Templates;
