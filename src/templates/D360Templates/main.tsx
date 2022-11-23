import React, { useEffect, useState } from "react";
import { postGetD360Art } from "../../services/api.service";
import CollapseLi from "../../component/collapseLi/main";
import { I_D360Templates } from "./interface"
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import "./css.scss";
//---------------------------------
import DD360Test from "../../D360fakeData/D360_summary.json"
// import DD360Test from "../../D360fakeData/D3603.json"
// import DD360Test from "../../D360fakeData/D360_PDF.json"
// import DD360Test from "../../D360fakeData/D360_oneArticle.json"
// import DD360Test from "../../D360fakeData/D360_multipleBlock.json"
// import DD360Test from "../../D360fakeData/D360_TabEmpty.json"
//---------------------------------

const D360Templates: React.FC<I_D360Templates> = ({ site, method }) => {
  const pageName = "D360Templates";
  const [d360Data, setD360Data] = useState<any>()
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0)

  useEffect(() => {
    const postData = {
      "functionName": "Magento",
      "method": method,
      "language": "zh-hant",
      "site": site
    }

    // postGetD360Art(postData).then((response: any) => {
    //   console.log("response", response);
    //   if (response.result === "success") {
    //     if (method === "GetArticle") {
    //       setD360Data(response.data)
    //     } else {
    //       setD360Data(response.data.map((item: any) => JSON.parse(item)))
    //     }
    //   }
    // });

    const D360Test: any = DD360Test;
    if (method === "GetArticle") {
      console.log("D360Test", D360Test)
      setD360Data([D360Test.data])
    } else {
      setD360Data(D360Test.data.map((item: any) => JSON.parse(item)))
    }
  }, [])

  const handleClickTab = (index: any) => {
    setActiveTabIdx(index)
  }

  const D360Block = () => {
    console.log('d360Data', d360Data);
    const getRWDTable = (document360Data: any) => {
      const div: any = document.createElement('div');
      div.innerHTML = document360Data.trim();
      const table: any = div.getElementsByTagName('table')
      const trLlist: any = table[0].getElementsByTagName("tr")
      const trLlistArray = [...trLlist]
      const rwdData = trLlistArray.map((tr: any, idx: number) => {
        const td = tr.getElementsByTagName("td")
        const tdArray = [...td]
        return { title: tdArray[0].innerText, content: [tdArray[1].innerHTML] }
      })
      return <CollapseLi data={rwdData} />
    };

    const multipleBlock = (document360Data: any) => {
      return document360Data.block.map((item: any) => <>
        {item.content && <div className="d360HTML content" dangerouslySetInnerHTML={{ __html: item.content }} />}
        {item.tablePC && <div className="d360HTML tablePC" dangerouslySetInnerHTML={{ __html: item.tablePC }} />}
        {item.tableM && <div className="d360HTML tableM">{getRWDTable(item.tableM)}</div>}
        {item.tablePDF && <div className="d360HTML tablePDF" dangerouslySetInnerHTML={{ __html: item.tablePDF }} />}
      </>)
    }

    return <div className={`${pageName}ModuleBlock`}>
      {
        d360Data && <>
          {d360Data.length > 1 && <>
            <ul className="d360Ul">
              {d360Data.map((item: any, index: number) => <li className={`d360Li ${activeTabIdx === index ? "active" : ""}`} onClick={() => handleClickTab(index)}>{item.tab}</li>)}
            </ul>
            <select className="d360Select" value={activeTabIdx} onChange={(e) => handleClickTab(e.target.value)}>
              {d360Data.map((item: any, index: number) => <option value={index}>{item.tab}</option>)}
            </select>
          </>}
          <div className="d360ContentBlock">
            <div className="d360Title">{d360Data[activeTabIdx].metaTitle}</div>
            {multipleBlock(d360Data[activeTabIdx])}
          </div>
        </>
      }
    </div >
  }

  return (
    <Columns
      type={ColType.OneCol}
      content={<D360Block />}
    />
  );
};

export default D360Templates;
