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
      <Route path="/colabify/" element={<Home />} />
      <Route path="/colabify/about" element={<About />} />
      <Route path="/colabify/creator" element={<Creator />} />
      <Route path="/colabify/profile" element={<Profile />} />
      <Route path="/colabify/business" element={<Business />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
