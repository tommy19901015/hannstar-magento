import { I_Breadcrumbs } from "../../component/breadcrumbs/interface";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
    href: string,
    text: string,
    btnText:string,
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
    module3:I_Module,
}