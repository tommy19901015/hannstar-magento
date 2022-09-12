import React from "react";
import "./css.scss";



interface I_Breadcrumbs {
    data: {
        title: string;
        breadcrumbsLink: { text: string, href: string }[]
    }
}

const Breadcrumbs: React.FC<I_Breadcrumbs> = ({ data }) => {
    return (
        <div className="breadcrumbsBlock">
            <h1 className="mainTitle">{data.title}</h1>
            <div className="rightBlock">
                {data.breadcrumbsLink.map(item =>
                    <a className="textLink" href={item.href}>{item.text}</a>)}
            </div>
        </div>
    )
}


export default Breadcrumbs;
