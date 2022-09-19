import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Form from "../../component/form/main";
import { I_Props, FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerFcpProgFcpQuotation: React.FC = () => {
  // const testObj: any = [
  //   {
  //     title: "標題input",
  //     columnKey: "input1",
  //     type: "input",
  //     placeholder: "標題input",
  //     required: true,
  //     option: [
  //       {
  //         text: "",
  //       },
  //     ],
  //   },
  //   {
  //     title: "標題radio",
  //     type: "radio",
  //     columnKey: "radio1",
  //     placeholder: "",
  //     required: true,
  //     option: [
  //       {
  //         text: "選項1",
  //       },
  //       {
  //         text: "選項2",
  //       },
  //       {
  //         text: "選項3",
  //       },
  //     ],
  //   },
  //   {
  //     title: "標題checkbox",
  //     type: "checkbox",
  //     columnKey: "checkbox1",
  //     placeholder: "",
  //     required: true,
  //     option: [
  //       {
  //         text: "選項1",
  //       },
  //       {
  //         text: "選項2",
  //       },
  //       {
  //         text: "選項3",
  //       },
  //     ],
  //   },
  //   {
  //     title: "標題select",
  //     type: "select",
  //     columnKey: "select1",
  //     placeholder: "",
  //     required: true,
  //     option: [
  //       {
  //         text: "選項1",
  //       },
  //       {
  //         text: "選項2",
  //       },
  //       {
  //         text: "選項3",
  //       },
  //     ],
  //   },
  //   {
  //     title: "標題radio2",
  //     type: "radio",
  //     columnKey: "radio2",
  //     placeholder: "",
  //     required: true,
  //     option: [
  //       {
  //         text: "選項1",
  //       },
  //       {
  //         text: "選項2",
  //       },
  //       {
  //         text: "選項3",
  //       },
  //     ],
  //   },
  //   {
  //     title: "標題checkbox2",
  //     type: "checkbox",
  //     columnKey: "checkbox2",
  //     placeholder: "",
  //     required: true,
  //     option: [
  //       {
  //         text: "選項1",
  //       },
  //       {
  //         text: "選項2",
  //       },
  //       {
  //         text: "選項3",
  //       },
  //     ],
  //   },
  // ];

  const formData = [
    {
      title: "RFQ Number",
      columnKey: "RFQNumber",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "序號",
      columnKey: "number",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "PM 擔當",
      columnKey: "PM",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  return (
    // <Layout>
    <Form data={formData} />
    // </Layout>
  );
};

export default PartnerFcpProgFcpQuotation;
