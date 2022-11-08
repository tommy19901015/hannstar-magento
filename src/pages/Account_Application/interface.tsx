import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";

export enum Accountstatus {
    Pending = "Pending",
    NotApproved = "NotApproved",
    Approved = "Approved"
}

type I_Module = {
    customerNormal: string[],
    customerEnterprise: string[],
    partnerNormal: string[],
    partnerEnterprise: string[]
};

type I_Content = {
    title: string,
    subTitle: string,
    rank: string,
    text: string,
    member: string,
    become: string,
    companymember: string,
    customerpermission: string,
    applymembership: string,
    applypartnership: string
    supplierlimit: string
    pendingText: string
    pendingStates: string
}
export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    captionData: I_Module,
    content: I_Content,
}