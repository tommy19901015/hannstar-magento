export enum Accountstatus {
  Pending = "Pending",
  NotApproved = "NotApproved",
  Approved = "Approved"
}

export interface I_AccountPersonalTemplate {
  contentComponent: JSX.Element;
  rootId?: string
  accountstatus?: Accountstatus
}

type I_Item = {
  href: string,
  title: string,
}

export interface DataType {
  categoryId: number,
  categoryTitle: string,
  items: I_Item[],
};