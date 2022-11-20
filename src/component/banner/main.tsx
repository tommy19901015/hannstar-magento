import React from "react";
import { BGBannerStyle } from "./styledComponent";
import { I_Banner } from "./interface"
import "./css.scss";

const Banner: React.FC<I_Banner> = ({ src, title, text, textAlign, btnText, btnHref }) => {
    const componentName = "Banner";

    return (
        <div className={`${componentName}Content`}>
            {/* <BGBannerStyle src={src}>
                <div className={`textBlock ${textAlign}`}>
                    <h2 className="title">{title}</h2>
                    <div className="text">{text}</div>
                </div>
            </BGBannerStyle> */}
            <img src={src} alt={title} />
            <div className={`textBlock ${textAlign}`}>
                <h2 className="title">{title}</h2>
                <div className="text">
                    {btnText&&<a href={btnHref}>{btnText}</a>}
                    {text}
                </div>
            </div>
        </div>
    )
}


export default Banner;
