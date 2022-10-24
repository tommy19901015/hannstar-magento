import { I_PageData } from "./interface"
import { FormType } from "../../component/form/interface";
import { useTranslation } from "react-i18next";


function useParseApply() {
    const { t } = useTranslation();

    const tableList: I_PageData =  {
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
                    text: "解析申請",
                    href: "",
                },
            ],
        },
        pageTitle: t('ParseApply.application'),
        formTitle: t('ParseApply.basicInfo'),
        formData: [
            {
                title: t('ParseApply.customer'),
                value: "",
                columnKey: "1",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: t('ParseApply.agent'),
                value: "",
                columnKey: "fff",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('ParseApply.singleNumber'),
                value: "",
                columnKey: "3",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: t('ParseApply.cqs'),
                value: "",
                columnKey: "4",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: t('ParseApply.fieldClass'),
                value: "",
                columnKey: "5",
                type: FormType.Select,
                placeholder: "",
                option: [
                    { text: t('ParseApply.productionStage'), value: t('ParseApply.productionStage') }
                ],
            },
            {
                title: t('ParseApply.module'),
                value: "",
                columnKey: "6",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('ParseApply.amount')+t('ParseApply.slice'),
                value: "",
                columnKey: "7",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('ParseApply.defective')+t('ParseApply.slice'),
                value: "",
                columnKey: "8",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('ParseApply.nonPerforming')+t('ParseApply.per'),
                value: "",
                columnKey: "9",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('ParseApply.stand'),
                value: "",
                columnKey: "10",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('ParseApply.issueCategory'),
                value: "",
                columnKey: "11",
                type: FormType.Select,
                placeholder: "",
                required: true,
                option: [
                    { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
                    { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass') },
                ],
            },
            {
                title: t('ParseApply.issueCode'),
                value: "",
                columnKey: "12",
                type: FormType.Select,
                placeholder: "",
                required: true,
                option: [
                    { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
                    { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass')},
                ],
            },
            {
                title: t('ParseApply.invoice'),
                value: "",
                columnKey: "13",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('ParseApply.note')+t('ParseApply.providDefectiveProduct'),
                value: "",
                columnKey: "14",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
        ],
        uploadTitle: t('ParseApply.fileAtt'),
        saveBtn: t('ParseApply.save'),
        resetBtn: t('ParseApply.reset'),
        sendBtn: t('ParseApply.send')
    }
  
    return tableList;
  }
  
  export default useParseApply;