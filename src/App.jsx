import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Brand from "./pages/Brand.jsx";
import Creator from "./pages/Creator.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Background from "./components/Background.jsx";

const App = () => {
  return (
    <div className="h-[110dvh] md:h-[115dvh] w-full bg-colabify-back">
      <Routes>
        <Route path="/collabify/" element={<Home />} />
        <Route path="/collabify/about" element={<About />} />
        <Route path="/collabify/brand" element={<Brand />} />
        <Route path="/collabify/creator" element={<Creator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
