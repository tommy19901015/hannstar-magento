import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import D360ArticleList from "../../component/d360ArticleList/main"
import "./css.scss";

const testData: any = {
  "result": "success",
  "data": {
    "site": "/investors/contacts",
    "metaTitle": "投資相關洽詢",
    "articleId": "f59b73a6-4a2f-463f-a328-c6b10bfa598a",
    "block": [
      {
        "tablePC": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%;\"><tbody><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">洽詢單位</span></th><td><span style=\"font-size:16px;\">瀚宇彩晶股份有限公司 股務辦事處</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">地址</span></th><td><span style=\"font-size:16px;\">臺北市114內湖區行善路398號8樓</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(886)2-2790-5885</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">網址</span></th><td><span style=\"font-size:16px;\"><a href=\"http://stock.walsin.com\" target=\"_blank\">http://stock.walsin.com</a></span></td></tr></tbody></table>",
        "tablePDF": null,
        "tableM": null,
        "content": "<p><span style=\"font-size:18px;\">個人投資及股務代理訊息</span></p><p>###TablePC</p><table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%;\"><tbody><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">洽詢單位</span></th><td><span style=\"font-size:16px;\">瀚宇彩晶股份有限公司 股務辦事處</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">地址</span></th><td><span style=\"font-size:16px;\">臺北市114內湖區行善路398號8樓</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(886)2-2790-5885</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">網址</span></th><td><span style=\"font-size:16px;\"><a href=\"http://stock.walsin.com\" target=\"_blank\">http://stock.walsin.com</a></span></td></tr></tbody></table><p>###TablePC#</p>"
      },
      {
        "tablePC": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%;\"><tbody><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">洽詢單位</span></th><td><span style=\"font-size:16px;\">瀚宇彩晶股份有限公司</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">發言人</span></th><td><span style=\"font-size:16px;\">簡宏毅 Justin Chien</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(886)2-5555-0077</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">代理發言人</span></th><td><span style=\"font-size:16px;\">張志銘 Stanley Chang</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(886)2-5555-0077</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">地址</span></th><td><span style=\"font-size:16px;\">台北市114內湖區行善路168巷15號4樓</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">Email</span></th><td><span style=\"font-size:16px;\">IR@hannstar.com</span></td></tr></tbody></table>",
        "tablePDF": null,
        "tableM": null,
        "content": "<p><span style=\"font-size:18px;\">專業投資機構</span></p><p>###TablePC</p><table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%;\"><tbody><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">洽詢單位</span></th><td><span style=\"font-size:16px;\">瀚宇彩晶股份有限公司</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">發言人</span></th><td><span style=\"font-size:16px;\">簡宏毅 Justin Chien</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(886)2-5555-0077</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">代理發言人</span></th><td><span style=\"font-size:16px;\">張志銘 Stanley Chang</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(886)2-5555-0077</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">地址</span></th><td><span style=\"font-size:16px;\">台北市114內湖區行善路168巷15號4樓</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">Email</span></th><td><span style=\"font-size:16px;\">IR@hannstar.com</span></td></tr></tbody></table><p>###TablePC#</p>"
      },
      {
        "tablePC": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%;\"><tbody><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">洽詢單位</span></th><td><span style=\"font-size:16px;\">Citibank, N.A., Depositary Receipts Services</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">地址</span></th><td><span style=\"font-size:16px;\">388 Greenwich Street, New York, NY 10013, U.S.A. &nbsp;</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(+1)877-248-4237</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">網址</span></th><td><span style=\"font-size:16px;\"><a href=\"https://www.citi.com/dr\" target=\"_blank\">https://www.citi.com/dr</a></span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">Email</span></th><td><span style=\"font-size:16px;\">citibank@shareholders-online.com</span></td></tr></tbody></table>",
        "tablePDF": null,
        "tableM": null,
        "content": "<p><span style=\"font-size:18px;\">海外存託憑證(GDR)存託銀行</span></p><p>###TablePC</p><table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:100%;\"><tbody><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">洽詢單位</span></th><td><span style=\"font-size:16px;\">Citibank, N.A., Depositary Receipts Services</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">地址</span></th><td><span style=\"font-size:16px;\">388 Greenwich Street, New York, NY 10013, U.S.A. &nbsp;</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">電話</span></th><td><span style=\"font-size:16px;\">(+1)877-248-4237</span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">網址</span></th><td><span style=\"font-size:16px;\"><a href=\"https://www.citi.com/dr\" target=\"_blank\">https://www.citi.com/dr</a></span></td></tr><tr><th scope=\"row\" style=\"text-align: center; width:120px; background-color: rgb(0, 148, 218);\"><span style=\"color:#ffffff;\">Email</span></th><td><span style=\"font-size:16px;\">citibank@shareholders-online.com</span></td></tr></tbody></table><p>###TablePC#</p>"
      }
    ],
    "editor-id": "30025841",
    "metaDescription": null
  },
  "resultMsg": ""
}

const InvestorsContacts: React.FC = () => {
  const pageName = "InvestorsContacts";
  const [d360Data, setD360Data] = useState<any>()
  const [selectOption, setSelectOption] = useState<string>("")

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

    setD360Data(testData.data)

  }, [])

  const MultipleBlock = () => {
    const totalData: any = []
    if (d360Data) {
      return d360Data.block.map((item: any, index: number) => {
        const initData = item.content
          .replace("###Table PC#", "###Table PC")
          .replace("###Table M#", "###Table M")
        const strArr: string[] = []
        const pcStartBlock: string = initData.split("###Table PC")[0]
        const pcEndBlock: string = initData.split("###Table PC")[2]
        let mStartBlock: string = ""
        let mEndBlock: string = ""
        if (pcEndBlock) {
          mStartBlock = pcEndBlock.split("###Table M")[0]
          mEndBlock = pcEndBlock.split("###Table M")[2]
        }
        strArr.push(pcStartBlock)
        strArr.push(item.tablePC)
        // strArr.push(getRWDTable(item.tableM))
        strArr.push(mStartBlock)
        strArr.push(mEndBlock)
        totalData.push(strArr)
        return (<div className="testMultipleBlock">
          <div dangerouslySetInnerHTML={{ __html: pcStartBlock }} />
          <div dangerouslySetInnerHTML={{ __html: item.tablePC }} />
          {/* {item.tableM && <div className="mTable">{getRWDTable(item.tableM)}</div>} */}
          <div dangerouslySetInnerHTML={{ __html: mStartBlock }} />
          <div dangerouslySetInnerHTML={{ __html: mEndBlock }} />
        </div>)
      })

    }
    return null
  }

  const D360Article = () => {
    return <div className="">
      <div className="d360TitleBlock">{d360Data.metaTitle}</div>
      <div className="d360ContentBlock">
        {d360Data.block.map((item: any) =>
          <>
            {/* <div className="testHtml" dangerouslySetInnerHTML={{ __html: item.content }} /> */}
            <br />
            <div className="d360Table" dangerouslySetInnerHTML={{ __html: item.tablePC }} />
          </>
        )}
      </div>
    </div >
  }

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<div className={`${pageName}ContentBlock`}>
          {d360Data && <D360Article />}
        </div>} />
    </Layout>
  );
};

export default InvestorsContacts;
