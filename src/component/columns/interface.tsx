export enum ColType {
  OneColFullPage = "oneColFullPage",
  TwoColFullPage = "twoColFullPage",
  OneCol = "oneCol",
  TwoCol = "twoCol",
}

export interface I_Style {
  widthL?: number;
  widthR?: number;
  content?: React.ReactNode;
  contentL?: React.ReactNode;
  contentR?: React.ReactNode;
  children?: React.ReactNode;
}

export interface I_Col extends I_Style {
  type: ColType;
}
