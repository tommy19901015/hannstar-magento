import React from "react";
import ReactDOM from "react-dom";
import "./style/reset.css";
import "./style/common.scss";
import Index from "./pages/index/main"
import About from "./pages/about/main"
import Document360Test from "./pages/document360Test/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ReactDOM.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/document360Test" element={<Document360Test />} />
//         </Routes>
//     </BrowserRouter>,
//     document.getElementById("root")
// );

ReactDOM.render(<Index />, document.getElementById("root"));
