export enum ColType {
  OneColFullPage = "oneColFullPage",
  TwoColFullPage = "twoColFullPage",
  OneCol = "oneCol",
  TwoCol = "twoCol",
}

export interface I_Style {
  bgColor?: string
  widthL?: number
  widthR?: number
  minWidthR?: string
  minWidthL?: string
  content?: React.ReactNode
  contentL?: React.ReactNode
  contentR?: React.ReactNode
  children?: React.ReactNode

}

export interface I_Col extends I_Style {
  type: ColType;
}
