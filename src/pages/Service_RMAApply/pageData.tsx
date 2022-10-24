import { I_PageData } from "./interface"
import { FormType } from "../../component/form/interface";
import { useTranslation } from "react-i18next";


function useApplyList() {
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
            ],
        },
        pageTitle: t('RAMapply.RMAapply'),
        formTitle: t('RAMapply.basicInfo'),
        formData: [
            {
                title: t('RAMapply.customer'),
                value: "",
                columnKey: "1",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: t('RAMapply.agent'),
                value: "",
                columnKey: "2",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('RAMapply.singleNumber'),
                value: "",
                columnKey: "3",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: t('RAMapply.cqs'),
                value: "",
                columnKey: "4",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: t('RAMapply.modelNo'),
                value: "",
                columnKey: "5",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('RAMapply.shipment'),
                value: "",
                columnKey: "6",
                type: FormType.Select,
                placeholder: "",
                option: [
                    { text: t('RAMapply.mediumPlate')+(1/4+t('RAMapply.plate'),1/6+t('RAMapply.plate')), value: t('RAMapply.mediumPlate')+(1/4+t('RAMapply.plate'),1/6+t('RAMapply.plate')) },
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
                title: t('RAMapply.monthEndYear'),
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
                title: t('RAMapply.monthEndMonth'),
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
                title: t('RAMapply.input')+t('RAMapply.slice'),
                value: "",
                columnKey: "9",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('RAMapply.defective')+t('RAMapply.slice'),
                value: "",
                columnKey: "10",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: t('RAMapply.nonPerforming')+t('RAMapply.per'),
                value: "",
                columnKey: "11",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('RAMapply.invoice'),
                value: "",
                columnKey: "11",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('RAMapply.paula')+t('RAMapply.per'),
                value: "",
                columnKey: "12",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('RAMapply.caseNumber'),
                value: "",
                columnKey: "13",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: t('RAMapply.quickReview'),
                value: "",
                columnKey: "14",
                type: FormType.Radio,
                placeholder: "",
                option: [
                    { text: t('RAMapply.yes'), value: "yes" },
                    { text: t('RAMapply.no'), value: "no" },
                ],
            },
        ],
        badDetailsTitle: t('RAMapply.badDetail'),
        tabNames: [t('RAMapply.single'), t('RAMapply.batchImport')],
        tableSelectOption: [
            {
                text: t('RAMapply.yes'),
                value: "yes"
            },
            {
                text: t('RAMapply.no'),
                value: "no"
            },
        ],
        addTrBtnText: t('RAMapply.add'),
        tableHead: {
            action: t('RAMapply.action'),
            index: t('RAMapply.index'),
            hannstarNo: t('RAMapply.hannstarNo'),
            warranty: t('RAMapply.warranty'),
            badType: t('RAMapply.badType'),
            img: t('RAMapply.img'),
        },
        batchImportText: {
            title1: t('RAMapply.title1'),
            text1: t('RAMapply.text1'),
            title2: t('RAMapply.title2'),
            noteText2: t('RAMapply.noteText2'),
            text2: t('RAMapply.text2'),
        },
        saveBtn: t('RAMapply.common.save'),
        resetBtn: t('RAMapply.common.reset'),
        sendBtn: t('RAMapply.common.send')
    }
  
    return tableList;
  }
  
  export default useApplyList;