type I_GrapModel= {
    src: string;
    title: string;
    content: string[] | string ;
    comment?: string;
    subTitle?: string;
    btnText?: string;
    btnHref?: string;
    bgColor?: string
    imgSizePercent?: number;
}

export interface I_Graphics3 {
    groups:I_GrapModel[]
}