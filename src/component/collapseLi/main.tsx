import React, { useState } from "react";
import { I_Porps } from "./interface";
import "./css.scss";



const CollapseLi: React.FC<I_Porps> = ({ data }) => {
    const [listOpen, setListOpen] = useState(0);

    const handleOpenList = (idx: number) => setListOpen(idx);

    const handleContentType = (content: string | React.ReactNode) => {
        return typeof content === "string" ? <div className="htmlBlock"
            dangerouslySetInnerHTML={{ __html: content }}>
        </div> : content
    }

    return (
        <div className="collapseBlock">
            <ul className="itemList">
                {data.map((item, idx) => {
                    return <li className={`itemLi ${listOpen === idx ? "open" : "close"}`}
                        key={idx}
                        onClick={() => handleOpenList(idx)}>
                        <div className="liContent">
                            {handleContentType(item.title)}
                        </div>
                        <ul className="secItemList">
                            {item.content.map((htmlContent, idx) =>
                                handleContentType(htmlContent))}
                        </ul>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default CollapseLi;
