import React from "react";
import "./css.scss";
import { I_Graphics3 } from "./interface"
import { ImgStyle, GraphicsStyle } from "./styledComponent"



const Graphics3: React.FC<I_Graphics3> = ({ data }) => {
    const componentName = "Graphics3";

    return (
        <div className={`${componentName}Content`}>
            {data.map((item, index) => <GraphicsStyle className="graphicsBlock" key={index}>
                <div className="imgBlock">
                    <ImgStyle src={item.src} alt={item.title} imgSizePercent={item.imgSizePercent} />
                </div>
                <div className="textBlock">
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>
                    {item.btnText && <a className="linkBtn" href={item.btnHref}>{item.btnText}</a>}
                </div>
            </GraphicsStyle>)}
        </div>
    )
}


export default Graphics3;
