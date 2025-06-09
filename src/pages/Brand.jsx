import MainBackground from "../components/MainBackground.jsx";
import { useState } from "react";
import Header from "../components/Header.jsx";
import BrandCreatorMain from "../components/BrandCreatorMain.jsx";

const Brand = () => {
  //state for index of input to determine what will show next

  return (
    <div className="h-[115dvh] w-full bg-colabify-back relative">
      <BrandCreatorMain name="brand" />
      {/* Background component */}
      <MainBackground />
    </div>
  );
};

export default Brand;
