import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { FormType } from "../../component/form/interface";


type I_BannerType= {
    src:string,
    title:string
}

type I_MessageType = {
    tag: string,
    date: string,
    title:string,
}

type I_PlatformType = {
    src: string,
    title: string,
    href: string,
}


type I_GraphicsCardType = {
    src: string,
    title: string,
    text:string,
    href: string,
    btnText: string
}

type I_ArticleType = {
    category:string,
    src: string,
    title: string,
    content: string,
    href: string,
    date: string,
    views: string,
}

export interface I_PageType {
    bannerData: I_BannerType[],
    messageCenterData: I_MessageType[],
    platformEntryData:I_PlatformType[],
    graphicsCardData:I_GraphicsCardType[],
    articleList:I_ArticleType[],
}
