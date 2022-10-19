import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_FormProps, FormType } from "../../component/form/interface";
import "./css.scss";

const ServiceGreenServiceApply: React.FC = () => {
  const pageName = "ServiceGreenServiceApply";

  const formProps1 = [
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
      title: "開單日期",
      value: "",
      columnKey: "4",
      type: FormType.Intput,
      placeholder: "",
      disabled: true,
    },
    {
      title: "機種名稱",
      value: "",
      columnKey: "5",
      type: FormType.Intput,
      placeholder: "",
      disabled: true,
    },
  ];

  const formProps2 = [
    {
      title: "申請項目",
      value: "",
      columnKey: "1",
      type: FormType.CheckBox,
      placeholder: "",
      required: true,
      option: [
        { text: "RoHS 2.0+HF", value: "RoHS 2.0+HF" },
        { text: "chem SHERPA", value: "chem SHERPA" },
        { text: "REACH SVHC", value: "REACH SVHC" },
        { text: "不使用宣告書/承諾書", value: "不使用宣告書/承諾書" },
        { text: "環保規範盤查", value: "環保規範盤查" },
        { text: "品質系統認證", value: "品質系統認證" },
        { text: "衝突礦產(3TG+鈷)", value: "衝突礦產(3TG+鈷)" },
        { text: "環安系統認證", value: "環安系統認證" },
        { text: "IMDS / CAMDS", value: "IMDS / CAMDS" },
        { text: "其他(客戶提供調查表格)", value: "其他(客戶提供調查表格)" },
      ],
    },
  ]

  const formProps3 = [
    {
      title: "備註",
      value: "",
      columnKey: "1",
      type: FormType.Textarea,
      placeholder: "",
      required: true,
    },
  ]

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "綠色環保申請",
        href: "",
      },
      {
        text: "法規申請",
        href: "",
      },
    ],
  };

  const handlerReset = () => { };
  const handlerSubmit = () => { };

  const formMethods1: any = React.useRef(null);
  const formMethods2: any = React.useRef(null);
  const formMethods3: any = React.useRef(null);

  const formProp1 = {
    formMethods: formMethods1,
    formData: formProps1,
  };

  const formProp2 = {
    isOneRow: true,
    formMethods: formMethods2,
    formData: formProps2,
  };

  const formProp3 = {
    isOneRow: true,
    formMethods: formMethods3,
    formData: formProps3,
  };

  const FormBlock = () => {
    return (
      <>
        <h1 className={`${pageName}H1Title`}>法規申請</h1>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>基本資料</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent {...formProp1} />
            <FormComponent {...formProp2} />
            <FormComponent {...formProp3} />
            <div className="fileBlock">
              <div className="title">檔案附件</div>
              <input type="file" />
            </div>
          </div>
          <div className={`${pageName}UploadBlock`}></div>
          <div className={`${pageName}BtnBlock`}>
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

export default ServiceGreenServiceApply;
