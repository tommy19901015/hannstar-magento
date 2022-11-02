export enum GraphicsLineType {
  Reverse = "reverse",
}

type imageType = {
  src: string;
  title: string;
  hasborder:boolean
}
export interface I_Props {
  data: {
    type?: GraphicsLineType;
    src: string;
    title: string;
    content: string;
    href: string;
    imgList?:imageType[];
  };
}
