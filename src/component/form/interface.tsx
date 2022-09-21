export enum FormType {
  Intput = "intput",
  Radio = "radio",
  CheckBox = "checkbox",
  Select = "select",
}

export interface I_Props {
  data: {
    formMethods?: any,
    formData: I_FormData[];
  }
}

export interface I_FormData {
  index?: number;
  title: string;
  columnKey: string;
  type: FormType;
  value?: string;
  placeholder: string;
  required: boolean;
  option?: { text: string, value: string }[];
}

export interface I_MappingForm {
  [FormType.Intput]: JSX.Element;
  [FormType.Radio]: JSX.Element;
  [FormType.CheckBox]: JSX.Element;
  [FormType.Select]: JSX.Element;
}