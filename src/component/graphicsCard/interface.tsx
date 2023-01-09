export enum GraphicsTheme {
  Theme1 = "Theme1",
  Theme2 = "Theme2",
  Theme3 = "Theme3"
}

export interface I_GraphicsCard {
  rowCount: number;
  theme?: GraphicsTheme;
  data: {
    src: string;
    title: string;
    text: string|string[];
    href?: string;
    btnText?: string;
    hrefSec?:string;
    btnTextSec?:string;
  }[];
}
