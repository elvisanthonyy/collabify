import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";
import BrandCreatorMain from "../components/BrandCreatorMain.jsx";
import { useState, useEffect } from "react";

const Creator = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div
      className={`h-[115dvh] w-full bg-colabify-back relative transition-all duration-300 ease-in ${
        isMounted ? "opacity-100" : "translate-y-[100%] opacity-0"
      } `}
    >
      <Background />
      <BrandCreatorMain name="creator" />
    </div>
  );
};

export default Creator;
