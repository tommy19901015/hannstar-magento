import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { GraphicsLineType } from "../../component/graphicsLine/interface";
import { I_Graphics3 } from "../../component/graphics3/interface"

type I_Banner = {
    src: string,
    title: string,
    text: string,
    textAlign: TextAlign,
    type: BannerType.Main,
};

type I_GraphicsContent = {
    type?: GraphicsLineType,
    src: string,
    title: string,
    content: string,
    href: string,
};

type I_Milestone = {
    date: string,
    title: string,
    imgSrc: string
};

export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    bannerTextData: I_Banner,
    milestoneData: I_Milestone[],
    graphics3Data: any
}