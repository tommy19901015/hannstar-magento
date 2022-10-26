import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";

export enum ParseState {
    All = "",
    Applying = "applying",
    Send = "send",
    Parsing = "parsing",
    Closed = "closed",
}

export type I_tabStateInfo = {
    text: string;
    state: ParseState;
}[];


export interface I_Table {
    requisitionNo: string;
    paresNo: string;
    modelNo: string;
    badType: string;
    badRate: string;
    applicationProgress: string;
    reportDownload: string;
}

export interface I_PageType {
    breadcrumbs: I_Breadcrumbs
    pageTitle: string
    filterStateTitle: string
    filterState: {
        all: string
        applying: string
        send: string
        parsing: string
        closed: string
    },
    filterYearTitle: string
    parseListThead: {
        action: string
        requisitionNo: string
        paresNo: string
        modelNo: string
        badType: string
        badRate: string
        applicationProgress: string
        reportDownload: string
    }
}
