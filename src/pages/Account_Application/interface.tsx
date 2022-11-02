import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";

type I_Module = {
    customerNormal: string[],
    customerEnterprise: string[],
    partnerNormal: string[],
    partnerEnterprise: string[]
};

type I_Content = {
    title:string,
    subTitle:string,
    rank:string,
    text:string,
    member:string,
    become:string,
    companymember:string,
    customerpermission:string,
    applymembership:string,
    supplierlimit:string
}
export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    captionData: I_Module,
    content: I_Content,
}