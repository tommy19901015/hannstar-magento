import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Form from "../../component/form/main";
import { I_Props, FormType } from "../../component/form/interface";

import "./css.scss";

const formData: any = [
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
  },
  {
    title: "radio",
    value: "",
    columnKey: "radio",
    type: FormType.Radio,
    placeholder: "",
    required: true,
    option: [
      { text: "A" },
      { text: "B" },
      { text: "C" },
    ]
  },
  {
    title: "radio1",
    value: "",
    columnKey: "radio1",
    type: FormType.Radio,
    placeholder: "",
    required: true,
    option: [
      { text: "AA" },
      { text: "BB" },
      { text: "CC" },
    ]
  },
  {
    title: "checkbox",
    value: "",
    columnKey: "checkbox",
    type: FormType.CheckBox,
    placeholder: "",
    required: true,
    option: [
      { text: "AAA" },
      { text: "BBB" },
      { text: "CCC" },
    ]
  },
  {
    title: "select",
    value: "",
    columnKey: "select",
    type: FormType.Select,
    placeholder: "",
    required: true,
    option: [
      { text: "AAA" },
      { text: "BBB" },
      { text: "CCC" },
    ]
  }
];


const FormTest: React.FC = () => {
  return <Layout>
    <Form data={formData} />
  </Layout>;
};

export default FormTest;
