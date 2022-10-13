export enum RMAState {
    All = "",
    Register = "register",
    OverturnReview = "overturnReview",
    OverturnFinish = "overturnFinish",
    RefundProcessing = "refundProcessing",
    Closed = "closed",
}

export type I_tabStateInfo = {
    text: string;
    state: RMAState;
}[];


export interface I_Table {
    requisitionNo: string;
    RMANo: string;
    agent: string;
    modelNo: string;
    requisitionCount: string;
    overturn: string;
    signOffResult: string;
    applicationProgress: string;
    shipDate: string;
    shipDNNO: string;
    returnNo: string;
    sellOffNo: string;
    caseResult: string;
}