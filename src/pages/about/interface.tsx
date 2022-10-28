import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { GraphicsLineType } from "../../component/graphicsLine/interface";

type I_Banner = {
    src: string,
    title: string,
    text: string,
    textAlign: TextAlign,
};

type I_GraphicsContent = {
    type?: GraphicsLineType,
    src: string,
    title: string,
    content:string,
    href:string,
};

type I_Milestone = {
    date: string,
    title: string,
    imgSrc:string
};

export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    bannerTextData:I_Banner,
    milestoneData:I_Milestone[],
    graphics1Data1:I_GraphicsContent,
    graphics1Data2:I_GraphicsContent,
}