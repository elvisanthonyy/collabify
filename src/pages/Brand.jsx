import MainBackground from "../components/MainBackground.jsx";
import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import BrandCreatorMain from "../components/BrandCreatorMain.jsx";

const Brand = () => {
  const [isMounted, setIsMounted] = useState(false);
  //state for index of input to determine what will show next
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div
      className={`h-[115dvh] w-full bg-colabify-back relative ${
        isMounted ? "opacity-100" : "translate-y-[100%] opacity-0"
      } transition-all duration-300 ease-in`}
    >
      <BrandCreatorMain name="brand" />
      {/* Background component */}
      <MainBackground />
    </div>
  );
};

export default Brand;
