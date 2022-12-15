import React from "react";
import { BGBannerStyle } from "./styledComponent";
import { BannerType, I_Banner } from "./interface"
import "./css.scss";

const Banner: React.FC<I_Banner> = ({ src, title, href, text, textAlign, btnText, btnHref, type = BannerType.Default }) => {
    const componentName = "Banner";

    const handleBannerLink = () => {
        href && (window.location.href = href)
    }

    return (
        <div className={`${componentName}Content ${href && 'hasLink'}`} onClick={handleBannerLink}>
            {/* <BGBannerStyle src={src}>
                <div className={`textBlock ${textAlign}`}>
                    <h2 className="title">{title}</h2>
                    <div className="text">{text}</div>
                </div>
            </BGBannerStyle> */}
            <img src={src} alt={title} className={`${type === BannerType.Main ? "min-h-400" : ""}`} />
            {(text || title) && (
                <div className={`textBlock ${textAlign} ${type === BannerType.Main ? "main-banner-text" : ""}`}>
                    <h2 className="title">{title}</h2>
                    <div className="text">
                        {btnText && <a href={btnHref}>{btnText}</a>}
                        {text}
                    </div>
                </div>
            )}
        </div>
    )
}


export default Banner;
