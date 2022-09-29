export enum PageType {
  Product = "product",
  Solution = "Solution",
}

export interface I_UserInfo {
  name: string;
  email: string;
}

export interface I_ProductCountInfo {
  total: string;
  productOn: string;
  productOff: string;
}

export interface I_PartnerProductTemplate {
  data: {
    contentComponent: JSX.Element;
    activeLink: number;
    pageType: PageType;
  };
}
