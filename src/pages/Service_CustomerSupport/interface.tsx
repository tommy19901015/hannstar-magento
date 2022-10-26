import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";

type I_Banner = {
    src: string,
    title: string,
    text: string,
    textAlign: TextAlign,
};

type I_ModuleContent = {
    title: string,
    content: string,
};

type I_GraphicsCardContent = {
    src: string,
    title: string,
    text: string,
};

type I_GraphicsCard = {
    rowCount: number,
    theme?:GraphicsTheme,
    data: I_GraphicsCardContent[];
};

type I_Module = {
    titleContent: I_ModuleContent,
    graphicsCard: I_GraphicsCard,
};

export interface I_PageType {
    breadcrumbs: I_Breadcrumbs,
    banner:I_Banner,
    module4:I_Module,
    module5:I_Module,
}