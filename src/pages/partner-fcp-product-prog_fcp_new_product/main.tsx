import React, { useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import PartnerFcpTemplate from "../../templates/partner-fcp/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";

import "./css.scss";

const PartnerFcpProductProgFcpNewProduct: React.FC = () => {
  const pageName = "partner-fcp-product-prog_fcp_new_product";

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
        text: "產品清單",
        href: "",
      },
      {
        text: "新增產品",
        href: "",
      },
    ],
  };

  const formData = [
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
    {
      title: "基板名稱",
      value: "",
      columnKey: "6",
      type: FormType.Intput,
      placeholder: "請輸入 例如:HSD015BPN1 - A00",
      required: true,
    },
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
  const formMethods: any = useRef(null);
  const dd = {
    formMethods,
    formData: formData,
  };

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <div>產品資訊</div>
        <FormComponent data={dd} />
      </div>
    );
  };

  const partnerFcpTemplateProp = {
    contentComponent: <ContentBlock />,
    activeLink: 1,
  };

  return (
    <Layout>
      <Breadcrumbs data={breadcrumbsData} />
      <PartnerFcpTemplate data={partnerFcpTemplateProp} />
    </Layout>
  );
};

export default PartnerFcpProductProgFcpNewProduct;
