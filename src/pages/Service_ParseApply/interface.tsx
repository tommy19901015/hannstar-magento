import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { I_FormData } from "../../component/form/interface"

export interface I_PageData {
    breadcrumbs: I_Breadcrumbs
    pageTitle: string
    formTitle: string
    formData: I_FormData[]
    uploadTitle: string
    saveBtn: string
    resetBtn: string
    sendBtn: string
}