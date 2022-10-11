import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footers } from "./ManuFooter";
import HomePage from "./Home";
import AboutPage from "./About";
import ProjectPage from "./Project";
import HtmlPage from "./Html";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path="/h" element={<HomePage/>} />
        <Route path="Html" element={<HtmlPage/>} />
        <Route path="About" element={<AboutPage/>} />
        <Route path="Project" element={<ProjectPage/>} />
      </Routes>
    <Footers/>
    </Router>
);
