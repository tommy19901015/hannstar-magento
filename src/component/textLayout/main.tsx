import React from "react";
import "./css.scss";

interface I_Props {
    imgSrc:string,
    title:string,
    text:string,
    btnHref:string,
    btnText:string
}[];




const TextLayout: React.FC<I_Props[]> = ( data ) => {

  const theme = (idx:number) => {
    return idx % 2 === 0 ? 'reverserow':'row';
  }

  const hasBtn = (item :I_Props) => {
    return Object.values(item).every(x => x === null || x === '')
  }
  
  return (
    <>
      { data.map((item,idx)=>{
        <div className={`TextLayoutBlock ${theme(idx)}`} >
          <img className="imgBlock" src={item.imgSrc} alt={item.title} />
          <div className="textBlock" >
            <h2 className="hannstarH4Title" >{item.title}</h2>
            <span className="hannstarContentText" >{item.text}</span>
            { hasBtn(item) && <a className="hannstarBtn" href={item.btnHref}>{item.btnText}</a>
            }
          </div>
        </div>
      })
    }
    </>
  );
};


export default TextLayout;


