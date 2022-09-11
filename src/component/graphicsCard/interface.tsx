export enum GraphicsLineType {
  Reverse = "reverse",
}

export interface I_Props {
  data: {
    src: string;
    title: string;
    content: string;
    href: string;
    btnText: string;
  }[];
}
