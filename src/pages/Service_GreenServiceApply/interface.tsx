import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { FormType } from "../../component/form/interface";

type I_OptionType= {
    text:string,
    value:string
}

type I_Table1 = {
    title: string,
    value: string,
    columnKey: string,
    type: FormType.Intput,
    placeholder: string,
    disabled?: boolean,

}

type I_Table2 = {
    title: string,
    value: string,
    columnKey: string,
    type: FormType.CheckBox,
    placeholder: string,
    required: boolean,
    option: I_OptionType[],
}


export interface I_Table3 {
    title: string,
    value: string,
    columnKey: string,
    type: FormType.Textarea,
    placeholder: string,
    required: boolean,
}

export interface I_PageType {
    breadcrumbs: I_Breadcrumbs
    formProps1: I_Table1[]
    formProps2:I_Table2[]
    formProps3:I_Table3[]
}
