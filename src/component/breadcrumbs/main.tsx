import React from "react";
import "./css.scss";
import { I_Breadcrumbs } from "./interface"



const Breadcrumbs: React.FC<I_Breadcrumbs> = ({ title, breadcrumbsLink }) => {
    const componentName = "Breadcrumbs";

    return (
        <div className={`${componentName}Content`}>
            <div className="linkBlock">
                {breadcrumbsLink.map((item, index) =>
                    <a className="link" href={item.href} key={index}>{item.text}</a>)}
            </div>
            <h1 className="mainTitle">{title}</h1>
        </div>
    )
}


export default Breadcrumbs;
