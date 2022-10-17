import React from "react";
import "./css.scss";
import { I_Popup } from "./interface"

const Popup: React.FC<I_Popup> = ({ openFc, content }) => {
    const componentName = "Popup";

    const handleOnClick = () => {
        openFc.current.classList.remove("show");
    };

    return (
        <div ref={openFc} className={`${componentName}Component`}>
            <div className={`${componentName}`}>
                <div className={`${componentName}Header`}>
                    <div className={`${componentName}CloseBtn`}
                        onClick={handleOnClick}></div>
                </div>
                <div className={`${componentName}Content`}>{content}</div>
            </div>
        </div>
    )
}


export default Popup;
