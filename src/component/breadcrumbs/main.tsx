import React from "react";
import "./css.scss";


const breadcrumbsData = {
    title: "瀚宇彩晶簡介",
    breadcrumbsLink: [
        {
            text: "首頁",
            href: "",
        },
        {
            text: "關於瀚宇彩晶",
            href: "",
        },
        {
            text: "瀚宇彩晶簡介",
            href: "",
        }
    ]
}

const Breadcrumbs: React.FC<any> = () => {
    return (
        <div className="breadcrumbsBlock">
            <h1 className="mainTitle">{breadcrumbsData.title}</h1>
            <div className="rightBlock">
                {breadcrumbsData.breadcrumbsLink.map(item =>
                    <a className="textLink" href={item.href}>{item.text}</a>)}
            </div>
        </div>
    )
}


export default Breadcrumbs;
