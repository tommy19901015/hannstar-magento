export enum GraphicsLineType {
  Reverse = "reverse",
}

export interface I_Props {
  data: {
    type?: GraphicsLineType;
    src: string;
    title: string;
    content: string;
    href: string;
  };
}
