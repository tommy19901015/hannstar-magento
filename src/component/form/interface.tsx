export enum FormType {
  Intput = "intput",
  Radio = "radio",
  CheckBox = "checkbox",
  Select = "select",
}

export interface I_Props {
  data: {
    title: string;
    columnKey: string;
    type: FormType;
    placeholder: string;
    required: boolean;
    option?: { text: string }[];
  }[];
}
