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