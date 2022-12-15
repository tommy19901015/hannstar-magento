export enum TextAlign {
    TopRight = "topRight",
    TopLeft = "topLeft",
    BottomLeft = "bottomLeft",
    BottomRight = "bottomRight",
    Center = "center",
}

export enum BannerType {
    Main,
    Default,
}

export interface I_Banner {
    src: string;
    title: string;
    text: string;
    textAlign: TextAlign;
    href?: string,
    btnText?: string;
    btnHref?: string;
    type?: BannerType;
}