import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import CollapseLi from "../../component/collapseLi/main"
import D3603 from "../../D360fakeData/D3603.json";
import D3602 from "../../D360fakeData/D3602.json";
import D360_multipleBlock from "../../D360fakeData/D360_multipleBlock.json"
import "./css.scss";

const InvestorsContacts: React.FC = () => {
  const pageName = "InvestorsContacts";
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
    console.log('D3603', D360_multipleBlock);
    if (D360_multipleBlock.result === "success") {
      setD360Data([D360_multipleBlock])
    }



    //test data--------------
  }, [])

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
          <div className="d360ContentBlock">
            <div className="d360Title">{d360Data[activeTabIdx].metaTitle}</div>
            {multipleBlock(d360Data[activeTabIdx].data)}
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

export default InvestorsContacts;
