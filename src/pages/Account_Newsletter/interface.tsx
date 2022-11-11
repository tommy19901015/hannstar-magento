import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";

type I_MemberContent ={
    date:string,
    singleNumber:string,
    item:string
    model:string,
    superstition:string,
    details:string
}

type I_Content = {
    title: string,
    table:string[],
    member: I_MemberContent[],
}
export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    content: I_Content,
}