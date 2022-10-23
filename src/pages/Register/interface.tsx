import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { I_FormData } from "../../component/form/interface"

export interface I_Table {
    action: string
    index: string
    hannstarNo: string
    warranty: string
    badType: string
    img: string
}

export interface I_TabContentObj {
    [key: string]: React.FC
}

export interface I_PageData {
    breadcrumbs: I_Breadcrumbs
    pageTitle: string
    formTitle: string
    formData: I_FormData[]
    badDetailsTitle: string
    tabNames: string[]
    tableSelectOption: {
        text: string
        value: string
    }[],
    addTrBtnText: string
    tableHead: I_Table
    batchImportText: {
        title1: string
        text1: string
        title2: string
        noteText2: string
        text2: string
    },
    saveBtn: string
    resetBtn: string
    sendBtn: string
}