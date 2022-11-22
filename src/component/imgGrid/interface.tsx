export type I_ImgGrid = {
  src: string;
  href?:string;
}

export type I_GridModel = { 
  row: number;
  imgs: I_ImgGrid[];
}