export enum FormType {
  Intput = "intput",
  Radio = "radio",
  CheckBox = "checkbox",
  Select = "select",
  Textarea = "textarea",
}

export interface I_Props {
  data: {
    isOneRow?: boolean;
    formMethods?: any;
    formData: I_FormData[];
  };
}

export interface I_FormData {
  index?: number;
  title: string;
  columnKey: string;
  type: FormType;
  value?: string;
  placeholder: string;
  required: boolean;
  option?: { text: string; value: string }[];
  disabled?: boolean;
}

export interface I_MappingForm {
  [FormType.Intput]: JSX.Element;
  [FormType.Radio]: JSX.Element;
  [FormType.CheckBox]: JSX.Element;
  [FormType.Select]: JSX.Element;
  [FormType.Textarea]: JSX.Element;
}
