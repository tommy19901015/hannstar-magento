import React from "react";
import { BGBannerStyle } from "./styledComponent";
import "./css.scss";


interface I_BannerText {
    data: {
        src: string;
        title: string;
        content: string;
    }
}

const BannerText: React.FC<I_BannerText> = ({ data }) => {
    return (
        <div className="bannerTextBlock">
            <BGBannerStyle src={data.src}>
                <div className="textBlock">
                    <h1 className="title">{data.title}</h1>
                    <div className="content">{data.content}</div>
                </div>
            </BGBannerStyle>
        </div>
    )
}


export default BannerText;
