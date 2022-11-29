export type I_ImgGrid = {
  src: string;
  href?:string;
  text?:string;
  content?:string;
}

export type I_GridModel = { 
  rowCount: number;
  imgs: I_ImgGrid[];
}