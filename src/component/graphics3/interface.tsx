type commentList = {
  commentTitle:string,
  comments:string[],
}

export enum GrapTheme{
  Defaule,
  Customization
}

export interface I_GrapModel {
  src: string;
  title: string;
  content: string[] | string;
  comment?: commentList |string;
  subTitle?: string;
  btnText?: string;
  btnHref?: string;
  bgColor?: string;
  image?:string;
  paragraphs?: boolean;
  information?: {
    title:string;
    link:string;
  }[];
  imgSizePercent?: number;
  theme?: number;
  moreHref?:string;
}

export interface I_Graphics3 {
  groups: I_GrapModel[];
}
