import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormHook from "../../component/formHook/main";
import { I_Props, FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerFcpProgFcpQuotation: React.FC = () => {
  const formData = [
    {
      title: "RFQ Number",
      value: "eee",
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
    }
  ];



  const childFunc: any = React.useRef(null)

  const testClick = () => {
    const yy = childFunc.current()
    console.log('yy', yy);
    yy.then((res: any) => console.log(res))
  }

  const testData = {
    getAllData: childFunc,
    formData
  }


  return (
    <Layout>
      <FormHook data={testData} />
      <button onClick={testClick}>我是按鈕</button>
    </Layout>
  );
};

export default PartnerFcpProgFcpQuotation;
