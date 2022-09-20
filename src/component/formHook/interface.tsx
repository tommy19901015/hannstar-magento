export enum FormType {
  Intput = "intput",
  Radio = "radio",
  CheckBox = "checkbox",
  Select = "select",
}

export interface I_Props {
  data: {
    getAllData: any,
    formData: {
      title: string;
      columnKey: string;
      type: FormType;
      value?: string;
      placeholder: string;
      required: boolean;
      option?: { text: string }[];
    }[];
  }
}
