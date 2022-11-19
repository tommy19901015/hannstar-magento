import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import D360ArticleList from "../../component/d360ArticleList/main";
import D3601 from "../../D360fakeData/D3601.json";
import D3602 from "../../D360fakeData/D3602.json";
import "./css.scss";

// const testData: any =

const InvestorsContacts: React.FC = () => {
  const pageName = "InvestorsContacts";
  const [d360Data, setD360Data] = useState<any>();
  const [selectOption, setSelectOption] = useState<string>("");

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
    console.log("D3601", D3601);
    setD360Data(D3601.data);
  }, []);

  const MultipleBlock = () => {
    const totalData: any = [];
    if (d360Data) {
      return d360Data.block.map((item: any, index: number) => {
        const initData = item.content
          .replace("###Table PC#", "###Table PC")
          .replace("###Table M#", "###Table M");
        const strArr: string[] = [];
        const pcStartBlock: string = initData.split("###Table PC")[0];
        const pcEndBlock: string = initData.split("###Table PC")[2];
        let mStartBlock: string = "";
        let mEndBlock: string = "";
        if (pcEndBlock) {
          mStartBlock = pcEndBlock.split("###Table M")[0];
          mEndBlock = pcEndBlock.split("###Table M")[2];
        }
        strArr.push(pcStartBlock);
        strArr.push(item.tablePC);
        // strArr.push(getRWDTable(item.tableM))
        strArr.push(mStartBlock);
        strArr.push(mEndBlock);
        totalData.push(strArr);
        return (
          <div className="testMultipleBlock">
            <div dangerouslySetInnerHTML={{ __html: pcStartBlock }} />
            <div dangerouslySetInnerHTML={{ __html: item.tablePC }} />
            {/* {item.tableM && <div className="mTable">{getRWDTable(item.tableM)}</div>} */}
            <div dangerouslySetInnerHTML={{ __html: mStartBlock }} />
            <div dangerouslySetInnerHTML={{ __html: mEndBlock }} />
          </div>
        );
      });
    }
    return null;
  };

  const D360Article = () => {
    return (
      <div className="">
        <div className="d360TitleBlock">{d360Data.metaTitle}</div>
        <div className="d360ContentBlock">
          {d360Data.block.map((item: any) => (
            <>
              {/* <div className="testHtml" dangerouslySetInnerHTML={{ __html: item.content }} /> */}
              <br />
              <div
                className="d360Table"
                dangerouslySetInnerHTML={{ __html: item.tablePC }}
              />
            </>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ContentBlock`}>
            {d360Data && <D360Article />}
          </div>
        }
      />
    </Layout>
  );
};

export default InvestorsContacts;
