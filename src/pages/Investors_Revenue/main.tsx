import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import CollapseLi from "../../component/collapseLi/main"
import D3603 from "../../D360fakeData/D3603.json"
import "./css.scss";

const InvestorsRevenue: React.FC = () => {
  const pageName = "InvestorsRevenue";
  const [d360Data, setD360Data] = useState<any>()
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0)

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
    console.log('D3603', D3603);
    if (D3603.result === "success") {
      const tt = D3603.data.map((item) => {
        return JSON.parse(item)
      })
      console.log('tt', tt);
      setD360Data(tt)
    }



    //test data--------------
  }, [])

  const handleClickTab = (index: any) => {
    setActiveTabIdx(index)
  }

  const D360Block = () => {

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
      </>)
    }

    return <div className={`${pageName}ContentBlock`}>
      {
        d360Data && <>
          <ul className="d360Ul">
            {d360Data.map((item: any, index: number) => <li className={`d360Li ${activeTabIdx === index ? "active" : ""}`} onClick={() => handleClickTab(index)}>{item.tab}</li>)}
          </ul>
          <select className="d360Select" value={activeTabIdx} onChange={(e) => handleClickTab(e.target.value)}>
            {d360Data.map((item: any, index: number) => <option value={index}>{item.tab}</option>)}
          </select>
          <div className="d360ContentBlock">
            <div className="d360Title">{d360Data[activeTabIdx].metaTitle}</div>
            {multipleBlock(d360Data[activeTabIdx])}
          </div>
        </>
      }
    </div >
  }

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <Breadcrumbs {...pageData.breadcrumbs} />
            <D360Block />
          </>
        } />
    </Layout>
  );
};

export default InvestorsRevenue;
