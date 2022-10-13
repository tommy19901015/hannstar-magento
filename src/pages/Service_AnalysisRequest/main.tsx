import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_Props, FormType } from "../../component/form/interface";
import "./css.scss";

const ServiceAnalysisRequest: React.FC = () => {
  const pageName = "ServiceAnalysisRequest";

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
      title: "領域分類",
      value: "",
      columnKey: "5",
      type: FormType.Select,
      placeholder: "",
      option: [
        { text: "量產階段", value: "量產階段" }
      ],
    },
    {
      title: "模組料號",
      value: "",
      columnKey: "6",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "投入量(片)",
      value: "",
      columnKey: "7",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "不良數(片)",
      value: "",
      columnKey: "8",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "不良率(%)",
      value: "",
      columnKey: "9",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "發生站別",
      value: "",
      columnKey: "10",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "Issue類別",
      value: "",
      columnKey: "11",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "外觀異常類", value: "外觀異常類" },
        { text: "凹凸點類", value: "凹凸點類" },
      ],
    },
    {
      title: "Issue代碼",
      value: "",
      columnKey: "12",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "外觀異常類", value: "外觀異常類" },
        { text: "凹凸點類", value: "凹凸點類" },
      ],
    },
    {
      title: "Invoice",
      value: "",
      columnKey: "13",
      type: FormType.Intput,
      placeholder: "",
    },
    {
      title: "備註(須提供不良品序號或箱號)",
      value: "",
      columnKey: "14",
      type: FormType.Intput,
      placeholder: "",
      required: true,
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
      {
        text: "解析申請",
        href: "",
      },
    ],
  };

  const handlerSave = () => { };
  const handlerReset = () => { };
  const handlerSubmit = () => { };

  const formMethods: any = React.useRef(null);

  const FormBlock = () => {
    return (
      <>
        <h1 className={`${pageName}H1Title`}>解析申請</h1>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>基本資料</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent data={formData} />
            <div className="fileBlock">
              <div className="title">檔案附件</div>
              <input type="file" />
            </div>
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

export default ServiceAnalysisRequest;
