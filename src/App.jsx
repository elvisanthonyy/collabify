import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Creator from "./pages/Creator.jsx";
import Business from "./pages/Business.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/collabify/" element={<Home />} />
      <Route path="/collabify/about" element={<About />} />
      <Route path="/collabify/creator" element={<Creator />} />
      <Route path="/collabify/profile" element={<Profile />} />
      <Route path="/collabify/business" element={<Business />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
