import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_Props, FormType } from "../../component/form/interface";
import "./css.scss";

const EServerRMAApply: React.FC = () => {
  const pageName = "e-server-rma-apply";
  const [tab, setTab] = useState<number>(0);
  const [trDetailArr, setTrDetailArr] = useState<number[]>([0]);
  const [trDetailCount, setTrDetailCount] = useState<number>(1);
  const [selectCount, setSelectCount] = useState<number>(1);

  const initData = [
    {
      title: "客戶",
      value: "",
      columnKey: "1",
      type: FormType.Intput,
      placeholder: "",
      disabled: true,
    },
    {
      title: "代理商",
      value: "",
      columnKey: "2",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "單號",
      value: "",
      columnKey: "3",
      type: FormType.Intput,
      placeholder: "",
      disabled: true,
    },
    {
      title: "CQS窗口",
      value: "",
      columnKey: "4",
      type: FormType.Intput,
      placeholder: "",
      disabled: true,
    },
    {
      title: "機種料號",
      value: "",
      columnKey: "5",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "出貨類別",
      value: "",
      columnKey: "6",
      type: FormType.Select,
      placeholder: "",
      option: [
        { text: "中板(1/4版,1/6版)", value: "中板(1/4版,1/6版)" },
        { text: "Full cell", value: "Full cell" },
        { text: "COG", value: "COG" },
        { text: "FOG", value: "FOG" },
        { text: "MDL", value: "MDL" },
        { text: "Sensor", value: "Sensor" },
        { text: "TM", value: "TM" },
        { text: "TP", value: "TP" },
        { text: "PCBa", value: "PCBa" },
      ],
    },
    {
      title: "月結年份",
      value: "",
      columnKey: "7",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "2022", value: "2022" },
        { text: "2012", value: "2012" },
      ],
    },
    {
      title: "月結月份",
      value: "",
      columnKey: "8",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4", value: "4" },
        { text: "5", value: "5" },
        { text: "6", value: "6" },
        { text: "7", value: "7" },
        { text: "8", value: "8" },
        { text: "9", value: "9" },
        { text: "10", value: "10" },
        { text: "11", value: "11" },
        { text: "12", value: "12" },
      ],
    },
    {
      title: "投入數(片)",
      value: "",
      columnKey: "9",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "不良數(片)",
      value: "",
      columnKey: "10",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "不良率(%)",
      value: "",
      columnKey: "11",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "Invoice",
      value: "",
      columnKey: "11",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "保良(%)",
      value: "",
      columnKey: "12",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "箱號",
      value: "",
      columnKey: "13",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "快速覆判",
      value: "",
      columnKey: "14",
      type: FormType.Radio,
      placeholder: "",
      option: [
        { text: "是", value: "yes" },
        { text: "否", value: "no" },
      ],
    },
  ];

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "客戶通",
        href: "",
      },
    ],
  };

  const handlerSave = () => { };
  const handlerReset = () => { };
  const handlerSubmit = () => { };

  const formMethods: any = React.useRef(null);

  const BadDetailsTabBlock = () => {
    const changeTab = (index: number) => setTab(index);
    const tabImgArr = ["單筆填寫", "批次匯入"];

    return (
      <div className={`${pageName}TabBlock`}>
        {tabImgArr.map((text, index) => (
          <div
            className={`tab ${tab === index ? "active" : ""}`}
            onClick={() => changeTab(index)}
          >
            {text}
          </div>
        ))}
      </div>
    );
  };

  const TableTrBlock = ({ index }: any) => {
    return (<tr>
      <td>
        <img alt="delete" src="https://e-service-test.hannstar.com/Content/images/trash.png" />
      </td>
      <td>{index}</td>
      <td>
        <input type="text" />
      </td>
      <td>
        <select>
          <option value="yes">是</option>
          <option value="no">否</option>
        </select>
      </td>
      <td><input type="text" /></td>
      <td><input type="file" /></td>
    </tr>)
  }

  const SingleImportBlock = () => {

    const handlerOnChange = (e: any) => {
      setSelectCount(e.target.value)
      setTrDetailCount(trDetailCount + parseInt(e.target.value))
    }

    const handlerAdd = () => {
      setTrDetailArr(Array(trDetailCount).fill(0))
    }


    return (
      <div className={`${pageName}SingleImportBlock`}>
        <div className="toolBar">
          <select value={selectCount} onChange={handlerOnChange}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <div className="addBtn" onClick={handlerAdd}>新增</div>
        </div>
        <table>
          <thead>
            <tr>
              <td>Action</td>
              <td>項次</td>
              <td>Hannstar序號</td>
              <td>保固</td>
              <td>不良名稱</td>
              <td>圖片</td>
            </tr>
          </thead>
          <tbody>
            {trDetailArr
              .map((item, index) => {
                console.log('trDetailCounttrDetailCount', trDetailCount);
                return <TableTrBlock index={index + 1} />
              })}
          </tbody>
        </table>
      </div>
    )
  }

  const BatchImportBlock = () => {
    return (
      <div className={`${pageName}BatchImportBlock`}>
        <div className="stepTitle">Step1:載入批次資料</div>
        <a href="/" className="text">下載範本</a>
        <input type="file" />
        <div className="stepTitle">Step2:批次圖片上傳</div>
        <div className="noteText">檔名需以數字命名,由1,2,3 ...依序對應至不良項次,可選擇多張照片同時上傳</div>
        <a href="/" className="text">下載範本</a>
        <input type="file" />
      </div>
    )
  }

  const handleTabContentObj: any = {
    "0": <SingleImportBlock />,
    "1": <BatchImportBlock />,
  };

  const FormBlock = () => {
    return (
      <>
        <h1 className={`${pageName}H1Title`}>RMA申請</h1>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>基本資料</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent data={formData} />
            <div className="badDetailsTitle">不良明細載入</div>
            <BadDetailsTabBlock />
            {handleTabContentObj[tab]}
          </div>
          <div className={`${pageName}UploadBlock`}></div>
          <div className={`${pageName}BtnBlock`}>
            <div className="btn" onClick={handlerSave}>
              儲存
            </div>
            <div className="btn" onClick={handlerReset}>
              重製
            </div>
            <div className="btn" onClick={handlerSubmit}>
              送件
            </div>
          </div>
        </div>
      </>
    );
  };

  const formData = {
    formMethods,
    formData: initData,
  };

  return (
    <Layout>
      <Columns type={ColType.OneCol} content={
        <>
          <Breadcrumbs {...breadcrumbsData} />
          <FormBlock />
        </>
      } />
    </Layout>
  );
};

export default EServerRMAApply;
