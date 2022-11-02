import React from "react";
import { I_GraphicsImage } from "./interface"
import "./css.scss";

// const data = {
//   straight:{
//     src:"https://fakeimg.pl/300/"
//   },
//   horizontal:{
//     src:"https://fakeimg.pl/300/"
//   },
//   columns:[
//     {
//       src:"https://fakeimg.pl/300/"
//     },
//     {
//       src:"https://fakeimg.pl/300/"
//     },
//     {
//       src:"https://fakeimg.pl/300/"
//     },
//   ]
// }

//https://fakeimg.pl/300/


const Graphics4: React.FC<I_GraphicsImage> = ({straight,horizontal,columns}) => {
  // const {straight,horizontal,columns} = data;
  return (
    <div className="graphics4Block">
     <div className="straightBlock">
      <img src={straight.src} alt="" />
    </div>
     <div className="straightBlock">
      <div className="horizontalBlock">
        <img src={horizontal.src} alt="" /> 
      </div>
      <div className="horizontalBlock">
        {
          columns.map(col => (<div className="colBlock">{col.src}</div>))
        }
      </div>
     </div>
    </div>
  );
};

export default Graphics4;
