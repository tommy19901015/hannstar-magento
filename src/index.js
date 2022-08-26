import React from "react";
import ReactDOM from "react-dom";
import "./style/reset.css";
import "./style/common.scss";
import Index from "./pages/index/main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Index />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
