export enum GraphicsLineType {
  Reverse = "reverse",
}

export interface I_GraphicsLine {
  type?: GraphicsLineType;
  src: string;
  title: string;
  content: string;
  href: string;
}
