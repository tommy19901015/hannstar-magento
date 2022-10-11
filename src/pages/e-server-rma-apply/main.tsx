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

  const FormBlock = () => {
    return (
      <>
        <div className={`${pageName}MainTitle`}>RMA申請</div>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>基本資料</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent data={formData} />
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
      <Breadcrumbs {...breadcrumbsData} />
      <Columns type={ColType.OneColFullPage} content={<FormBlock />} />
    </Layout>
  );
};

export default EServerRMAApply;
