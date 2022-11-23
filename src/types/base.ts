import { TextAlign } from "../component/banner/interface";
import { GraphicsTheme } from "../component/graphicsCard/interface";
//import { I_TitleContent } from "../component/titleContent/interface";

// Banner Type
export type I_Banner = {
    src: string,
    title: string,
    text: string,
    textAlign: TextAlign,
};

// Breadcrumbs Type
export type I_Breadcrumbs = {
    title?: string;
    breadcrumbsLink: { text: string, href?: string }[]
}


export type I_TitleContent = {
    title: string;
    content: string;
    btnText?: string;
    btnHref?: string;
    bgColor?: string
}

type commentList = {
    commentTitle:string,
    comments:string[],
  }

  
export type I_GraphicsModel = {
    src: string;
    title: string;
    content: string[] | string;
    comment?: commentList |string;
    subTitle?: string;
    btnText?: string;
    btnHref?: string;
    bgColor?: string;
    image?:string;
    paragraphs?: boolean;
    imgSizePercent?: number;
    theme?: number;
    moreHref:"/";
}
export interface I_TitleContentBanner {
    titleContent:I_TitleContent,
    banner:I_Banner
} 

export interface I_TitleContentVideo{
    titleContent:I_TitleContent,
    video:{
        src: string;
    }
}

export interface I_TitleContentImgGrid{
    rowCount: number;
    imgGrids: {
        src: string;
        href?:string;
    }[],
}






type I_TextContent = {
    title: string,
    content:string,
    src?: string,
};

type I_GraphicsCardContent = {
    src: string,
    title: string,
    href: string,
    text: string,
    btnText:string,
};

type I_GraphicsCard = {
    rowCount: number,
    theme?:GraphicsTheme,
    data: I_GraphicsCardContent[];
};

type I_Module1 = {
    titleContent: I_TitleContent,
};

type I_ModuleContent = {
    titleContent:I_TitleContent
    banner:I_Banner
};

type I_Module2 = {
    titleContent: I_TitleContent
    banner: I_Banner
}


type I_Module3 = {
    titleContent: I_TitleContent;
    video: {
        src: string
    };
}

type I_Module4 = {
    graphics3:I_TextContent[],
};

type I_Module5 = {
    titleContent: I_ModuleContent,
    video: {
        src:string
    },
}

type I_Module6 = {
    titleContent: I_ModuleContent,
    graphicsCard: I_GraphicsCard,
};

export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    banner:I_Banner,
    module1?:I_Module1,
    module2?:I_Module2[],
    module3?:I_Module3,
    module4?:I_Module4,
    module5?:I_Module5[],
    module6?:I_Module6,
}