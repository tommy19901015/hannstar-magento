import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_FormProps, FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerQuotation: React.FC = () => {
  const pageName = "PartnerQuotation";

  const initData = [
    {
      title: "RFQ Number",
      value: "",
      columnKey: "RFQNumber",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "序號",
      value: "",
      columnKey: "number",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "狀態",
      value: "",
      columnKey: "state",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "ALL", value: "all" },
        { text: "待報價", value: "no" },
        { text: "已報價", value: "yes" },
      ],
    },
    {
      title: "PM 擔當",
      value: "",
      columnKey: "PM",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "尺寸",
      value: "",
      columnKey: "size",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "分辨率(Resolution)",
      value: "",
      columnKey: "Resolution",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "顯示技術(IPS/TN)",
      value: "",
      columnKey: "isp_tn",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "ALL", value: "all" },
        { text: "IPS", value: "IPS" },
        { text: "TN", value: "TN" },
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
        text: "供應商協同合作",
        href: "",
      },
      {
        text: "協同製造夥伴",
        href: "",
      },
      {
        text: "RFQ產品報價",
        href: "",
      },
      {
        text: "線上報價",
        href: "",
      },
    ],
  };

  const formMethods: any = React.useRef(null);

  const FormBlock = () => {
    return (
      <div className={`${pageName}FormBlock`}>
        <div className={`${pageName}Title`}>線上報價</div>
        <div className={`${pageName}ContentBlock`}>
          <FormComponent {...formData} />
        </div>
        <div className={`${pageName}btnBlock`}>
          <div className="btn" onClick={handlerBtnClick}>
            查詢
          </div>
        </div>
      </div>
    );
  };

  const handlerBtnClick = () => {
    //data.getAllData.current = getValues     get form 所有資料
    //       get form error
    //data.getAllData.current = reset         reset form
    const values = formMethods.current.getValues();
    console.log("values", values);
    //get form 所有資料
    //get form error
    //reset form
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

export default PartnerQuotation;
