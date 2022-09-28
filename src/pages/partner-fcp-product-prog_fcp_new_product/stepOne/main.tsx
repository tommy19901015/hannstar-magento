import React, { useRef, useState } from "react";
import FormComponent from "../../../component/form/main";
import { FormType } from "../../../component/form/interface";
import "./css.scss";

const StepOne: React.FC = () => {
  const pageName = "StepOne";

  const formData1 = [
    {
      title: "外包產品名稱",
      value: "",
      columnKey: "1",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "產品應用",
      value: "",
      columnKey: "2",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "HSD料號",
      value: "",
      columnKey: "3",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  const formData2 = [
    {
      title: "外包型號",
      value: "",
      columnKey: "4",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "產品型態",
      value: "",
      columnKey: "5",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "MDL", value: "MDL" },
        { text: "TPM", value: "TPM" },
        { text: "FOG", value: "FOG" },
      ],
    },
  ];

  const formData3 = [
    {
      title: "基板名稱",
      value: "",
      columnKey: "6",
      type: FormType.Intput,
      placeholder: "請輸入 例如:HSD015BPN1 - A00",
      required: true,
    },
  ];

  const formData4 = [
    {
      title: "專案代碼",
      value: "",
      columnKey: "7",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "吋別",
      value: "",
      columnKey: "8",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "解析度",
      value: "",
      columnKey: "9",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "畫素大小",
      value: "",
      columnKey: "10",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "長寬比",
      value: "",
      columnKey: "11",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "面板技術別",
      value: "",
      columnKey: "12",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  const formData5 = [
    {
      title: "穿透率(w/POL)",
      value: "",
      columnKey: "13",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :4.3",
      required: true,
    },
    {
      title: "玻璃厚度",
      value: "",
      columnKey: "14",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "0=>0.7mm", value: "0=>0.7mm" },
        { text: "0=>0.6mm", value: "0=>0.6mm" },
        { text: "0=>0.5mm", value: "0=>0.5mm" },
      ],
    },
    {
      title: "直/橫屏",
      value: "",
      columnKey: "15",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "Landscape", value: "Landscape" },
        { text: "Portrait", value: "Portrait" },
      ],
    },
    {
      title: "模組外觀尺寸(HxVxD)",
      value: "",
      columnKey: "16",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :: 31.52x33.72x1.73",
      required: true,
    },
  ];

  const formData6 = [
    {
      title: "介面(*可複選)",
      value: "",
      columnKey: "17",
      type: FormType.CheckBox,
      placeholder: "",
      required: true,
      option: [
        { text: "Analog", value: "Analog" },
        { text: "Analog+LVDS", value: "Analog+LVDS" },
        { text: "Analog+TMSD", value: "Analog+TMSD" },
        { text: "Analog+TTL", value: "Analog+TTL" },
        { text: "Analog+Video+TV", value: "Analog+Video+TV" },
        { text: "CMDS", value: "CMDS" },
        { text: "CPU", value: "CPU" },
        { text: "DSPI", value: "DSPI" },
        { text: "eDP", value: "eDP" },
        { text: "eDP1.1", value: "eDP1.1" },
        { text: "eDP1.2", value: "eDP1.2" },
        { text: "eDP1.3", value: "eDP1.3" },
        { text: "LVDS", value: "LVDS" },
        { text: "MCU", value: "MCU" },
        { text: "MIDI", value: "MIDI" },
        { text: "MIPI", value: "MIPI" },
        { text: "Panelink", value: "Panelink" },
        { text: "QSPI", value: "QSPI" },
        { text: "RGB", value: "RGB" },
        { text: "RSDS", value: "RSDS" },
        { text: "SPI", value: "SPI" },
        { text: "TTL", value: "TTL" },
      ],
    },
  ];

  const formData7 = [
    {
      title: "色彩飽和度NTSC",
      value: "",
      columnKey: "18",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :50",
      required: true,
    },
    {
      title: "上偏光片表面",
      value: "",
      columnKey: "19",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "淨重(kg)",
      value: "",
      columnKey: "20",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :0.006",
      required: true,
    },
    {
      title: "消耗功率(W)",
      value: "",
      columnKey: "21",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :0.12W",
      required: true,
    },
  ];

  const formMethods1: any = useRef(null);
  const formMethods2: any = useRef(null);
  const formMethods3: any = useRef(null);
  const formMethods4: any = useRef(null);
  const formMethods5: any = useRef(null);
  const formMethods6: any = useRef(null);
  const formMethods7: any = useRef(null);

  const dd1 = {
    isOneRow: true,
    formMethods: formMethods1,
    formData: formData1,
  };

  const dd2 = {
    formMethods: formMethods2,
    formData: formData2,
  };

  const dd3 = {
    isOneRow: true,
    formMethods: formMethods3,
    formData: formData3,
  };

  const dd4 = {
    isOneRow: true,
    formMethods: formMethods4,
    formData: formData4,
  };

  const dd5 = {
    formMethods: formMethods5,
    formData: formData5,
  };

  const dd6 = {
    isOneRow: true,
    formMethods: formMethods6,
    formData: formData6,
  };

  const dd7 = {
    formMethods: formMethods7,
    formData: formData7,
  };

  const handleSave = () => {
    const values1 = formMethods1.current.getValues();
    const values2 = formMethods2.current.getValues();
    const values3 = formMethods3.current.getValues();
    const values4 = formMethods4.current.getValues();
    const values5 = formMethods5.current.getValues();
    const values6 = formMethods6.current.getValues();
    const values7 = formMethods7.current.getValues();

    const stepOneData = {
      ...values1,
      ...values2,
      ...values3,
      ...values4,
      ...values5,
      ...values6,
      ...values7,
    };

    console.log("stepOneData", stepOneData);
  };

  const goNextStep = () => {
    console.log("goNextStep", goNextStep);
  };

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>產品資訊</div>
      <div className="formBlock">
        <FormComponent data={dd1} />
        <FormComponent data={dd2} />
        <FormComponent data={dd3} />
        <FormComponent data={dd4} />
        <FormComponent data={dd5} />
        <FormComponent data={dd6} />
        <FormComponent data={dd7} />
      </div>
      <div className="btnBlock">
        <div className="formBtn" onClick={handleSave}>
          儲存
        </div>
        <div className="formBtn" onClick={goNextStep}>
          下一步
        </div>
      </div>
    </div>
  );
};

export default StepOne;
