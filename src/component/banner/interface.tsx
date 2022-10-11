export enum TextAlign {
    TopRight = "topRight",
    TopLeft = "topLeft",
    BottomLeft = "bottomLeft",
    BottomRight = "bottomRight",
}

export interface I_Banner {
    src: string;
    title: string;
    text: string;
    textAlign: TextAlign;
}