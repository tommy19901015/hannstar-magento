export enum GraphicsLineType {
  Reverse = "reverse",
}

export interface I_Props {
  rowCount: number;
  data: {
    src: string;
    title: string;
    text: string;
    href?: string;
    btnText?: string;
  }[];
}
