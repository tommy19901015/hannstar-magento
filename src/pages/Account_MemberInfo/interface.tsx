import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";

// type I_MemberContent ={
//     name:string,
//     email:string,
//     position:string
// }

type I_Content = {
    title: string,
    btn: string,
    label: string,
    table: string[],
    // member: I_MemberContent[],
}
export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    content: I_Content,
}