import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
type I_Content = {
    title: string,
    btn: string,
    label: string,
    table: string[]
}
export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    inputEmail:string
    content: I_Content,
}