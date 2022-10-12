import React from "react";
import "./css.scss";
import { TitleContentStyle } from "./styledComponent"
import { I_TitleContent } from "./interface"



const TitleContent: React.FC<I_TitleContent> = ({ title, content, btnText, btnHref, bgColor }) => {
    const componentName = "TitleContent";

    return (
        <div className={`${componentName}Content`}>
            <TitleContentStyle bgColor={bgColor}>
                <div className="title">{title}</div>
                <div className="textBlock">
                    <div className="content">{content}</div>
                    {
                        btnText && <a className="linkBtn" href={btnHref}>{btnText}</a>
                    }
                </div>
            </TitleContentStyle>
        </div>
    )
}


export default TitleContent;
