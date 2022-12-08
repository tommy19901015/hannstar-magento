import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface"
import { FormType } from "../../component/form/interface";

function useGreenServiceApply() {
    const { t } = useTranslation();
  
    const tableList: I_PageType =  {
        breadcrumbs: {
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
                    text: "解析列表",
                    href: "",
                }
            ],
        },
        formProps1:[
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
        ],
        formProps2 : [
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
          ],
          formProps3 : [
            {
              title: "備註",
              value: "",
              columnKey: "1",
              type: FormType.Textarea,
              placeholder: "",
              required: true,
            },
          ]
    }
  
    return tableList;
  }
  
export default useGreenServiceApply;

