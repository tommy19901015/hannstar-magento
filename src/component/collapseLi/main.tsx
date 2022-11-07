import React, { useState } from "react";
import { I_Porps } from "./interface";
import "./css.scss";



const CollapseLi: React.FC<I_Porps> = ({ data }) => {
    const [currIndex, setCurrIndex] = useState<number>(0);
    const [show, setShowDown] = useState<boolean>(false);
    const handleOpenList = (idx: number) => {
        if(idx !== currIndex){
            setShowDown(true);
            setCurrIndex(idx);
        } else{
            setShowDown(false);
            setCurrIndex(0);
        }
    }

    const handleContentType = (content: string | React.ReactNode) => {
        return typeof content === "string" ? <div className="htmlBlock"
            dangerouslySetInnerHTML={{ __html: content }}>
        </div> : content
    }

    return (
        <div className="collapseBlock">
            <ul className="itemList">
                {data.map((item, idx) => {
                    return <li className={`itemLi ${currIndex === idx+1 && show ? "open" : "close"}`}
                        key={idx+1}
                        onClick={() => handleOpenList(idx+1)}>
                        <div className="liContent">
                            {handleContentType(item.title)}
                        </div>
                        <ul className="secItemList">
                            {item.content?.map((htmlContent, idx) =>
                                handleContentType(htmlContent))}
                        </ul>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default CollapseLi;
