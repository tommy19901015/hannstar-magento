import { ReactNode } from "react"

export interface I_Porps {
  data: {
    title?: string| ReactNode
    content?: string[]| ReactNode[]
  }[]
}