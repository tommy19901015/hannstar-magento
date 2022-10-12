import React from "react";
import "./css.scss";
import { I_Graphics3 } from "./interface"



const Graphics3: React.FC<I_Graphics3> = ({ data }) => {
    const componentName = "Graphics3";

    return (
        <div className={`${componentName}Content`}>
            {data.map((item, index) => <div className="graphicsBlock" key={index}>
                <img src={item.src} alt={item.title} />
                <div className="textBlock">
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>
                    {item.btnText && <a className="linkBtn" href={item.btnHref}>{item.btnText}</a>}
                </div>
            </div>)}
        </div>
    )
}


export default Graphics3;
