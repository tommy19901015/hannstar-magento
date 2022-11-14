import { JsxElement } from "typescript";

export interface I_AccountTemplate {
  content: React.ReactNode;
}

export type serviceItem = {
  id:number,
  icon:string,
  title:string,
  directions:string
};

export type serviceType = {
  categoryId: number,
  categoryTitle:string
  serviceItems:serviceItem[]
};

export interface I_PageData{
  signTitle: string
  service: serviceType[]
}