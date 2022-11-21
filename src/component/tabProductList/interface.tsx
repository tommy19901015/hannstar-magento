export type I_TabDataModule = {
  src: string;
  title: string;
  isHot: boolean;
  content:string;
  productId:string;
  btnTextL?:string;
  btnTextR?:string;
}

export interface I_TabsModule {
  tabName: string;
  tabData: I_TabDataModule[];
}
