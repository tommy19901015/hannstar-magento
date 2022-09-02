import React from "react";
import { BGBannerStyle } from "./styledComponent";
import "./css.scss";


const bannerTextData = {
    src: "https://webdev.hannstar.com/upload/package_b/ALL_package_20F12_5iycmervqs.jpg",
    title: "瀚宇彩晶願景",
    content: "讓我們的下一代都能享受新彩麗世界的新希望透過不斷創新的顯示技術，讓視覺可以穿越綠野、越過高山，到達世界的彼端，打開一扇使人類生命更豐富，讓生活更精采的視窗"
}

const BannerText: React.FC<any> = () => {
    return (
        <div className="bannerTextBlock">
            <BGBannerStyle src={bannerTextData.src} />
        </div>
    )
}


export default BannerText;
