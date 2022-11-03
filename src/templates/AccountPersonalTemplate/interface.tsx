import { JsxElement } from "typescript";

export interface I_AccountPersonalTemplate {
  contentComponent: JSX.Element;
}

type I_Item = {
  href:string,
  title:string,
}

export interface DataType{
  categoryId: number,
  categoryTitle:string,
  items: I_Item[],
};