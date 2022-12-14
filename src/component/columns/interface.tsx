export enum ColType {
  OneColFullPage = "oneColFullPage",
  TwoColFullPage = "twoColFullPage",
  OneCol = "oneCol",
  TwoCol = "twoCol",
}

export enum TopMType {
  Right = "right",
  Left = "left",
}

export interface I_Style {
  bgColor?: string
  fixClass?: string
  widthL?: number
  widthR?: number
  minWidthR?: string
  minWidthL?: string
  topMContent?: TopMType
  content?: React.ReactNode
  contentL?: React.ReactNode
  contentR?: React.ReactNode
  children?: React.ReactNode

}

export interface I_Col extends I_Style {
  type: ColType;
}
