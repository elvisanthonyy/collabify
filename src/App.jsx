import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Brand from "./pages/Brand.jsx";
import Creator from "./pages/Creator.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/collabify/" element={<Home />} />
      <Route path="/collabify/about" element={<About />} />
      <Route path="/collabify/brand" element={<Brand />} />
      <Route path="/collabify/creator" element={<Creator />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
