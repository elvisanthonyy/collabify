import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";
import BrandCreatorMain from "../components/BrandCreatorMain.jsx";
import { useState } from "react";

const Creator = () => {
  return (
    <div className="h-[115dvh] w-full bg-colabify-back relative">
      <Background />
      <BrandCreatorMain name="creator" />
    </div>
  );
};

export default Creator;
