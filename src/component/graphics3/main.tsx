import React from "react";
import "./css.scss";
import { I_Graphics3, GrapTheme } from "./interface";
import { ImgStyle, GraphicsStyle } from "./styledComponent";
import { I_TemplateLayout, I_DataModel} from "../../templates/TemplateLayout/interface";
import { getSyntheticLeadingComments } from "typescript";



const Graphics3: React.FC<I_Graphics3> = ({groups}:I_Graphics3) => {

  const componentName = "Graphics3";
  return (
    <div className={`${componentName}Content`}>
      {groups.map((item, index) => (
        <GraphicsStyle 
        bgColor="444"
        className={`graphicsBlock ${(item.theme && item.theme ===  GrapTheme.Customization) ? 'align-inherit customization':''}`} key={index}>
          <div className="imgBlock">
            <ImgStyle
              src={item.src}
              alt={item.title}
              imgSizePercent={item.imgSizePercent}
            />
          </div>
          <div className={`textBlock ${(item.theme && item.theme ===  GrapTheme.Customization) ? 'borderStyle':''}`}>

            <div className="title">{item.title}</div>
            {item.image && <img className="logo" src={item.image}></img>}
            <div className="content">{item.content}</div>
            {typeof item.comment === 'string' && <div className={`comment`}>{item.comment}</div>}
            {typeof item.comment === 'object' && (
              <div className={`comment ${item.paragraphs? 'border-top': ''}`}>
                <h6 className="commentTitle">{item.comment.commentTitle}</h6>
                {
                  item.comment.comments.map((el:string)=> (<p className="commentItem">{el}</p>))
                }
              </div>
            )}
            {item.btnText && (
              <a className="linkBtn" href={item.btnHref}>
                {item.btnText}
              </a>
            )}
             {item.moreHref && (
             <div className="bottomLineBox">
              <div className="line"></div>
              <a className="learnMore" href={item.moreHref}>
                LEARN MORE<span className="plusLine"></span>
              </a>
            </div>
            )}
          </div>
        </GraphicsStyle>
      ))}
    </div>
  );
};

export default Graphics3;
