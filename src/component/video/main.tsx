import React from "react";
import { BGBannerStyle } from "./styledComponent";
import { I_Video } from "./interface"
import "./css.scss";

const Video: React.FC<I_Video> = ({ src }) => {
    const componentName = "Video";

    return (
        <div className={`${componentName}Content`}>
            <video controls >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}


export default Video;
