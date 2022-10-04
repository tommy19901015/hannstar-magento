import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerQuotationList: React.FC = () => {
  const pageName = "partner-quotation-list";

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
      title: "PM 擔當",
      value: "",
      columnKey: "PM",
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
        text: "報價清單",
        href: "",
      },
    ],
  };

  const formMethods: any = useRef(null);

  const FormBlock = () => {
    return (
      <div className={`${pageName}FormBlock`}>
        <div className={`${pageName}Title`}>報價清單</div>
        <div className={`${pageName}ContentBlock`}>
          <FormComponent data={formData} />
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
      <Breadcrumbs data={breadcrumbsData} />
      <Columns type={ColType.OneColFullPage} content={<FormBlock />} />
    </Layout>
  );
};

export default PartnerQuotationList;
