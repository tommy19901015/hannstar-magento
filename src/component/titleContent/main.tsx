import React from "react";
import "./css.scss";
import { I_TitleContent } from "./interface"



const TitleContent: React.FC<I_TitleContent> = ({ title, content }) => {
    const componentName = "TitleContent";

    return (
        <div className={`${componentName}Content`}>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    )
}


export default TitleContent;
