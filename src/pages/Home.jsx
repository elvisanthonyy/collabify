import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";

import Copy from "../components/Copy.jsx";

const Home = () => {
  /*<div className="flex flex-col justify-center items-center relative mb-9">
            <div className="flex justify-center items-center w-[414px] h-[104px] bg-colabify-green rounded-[16px] border-white border-[8px] text-[5.3em] overflow-hidden">
              Coming
            </div>
            <div className="flex justify-center items-center text-white w-[336px] h-[113px] -rotate-3 bg-colabify-blue rounded-[16px] border-black border-[8px] text-[5.3em] overflow-hidden relative bottom-3">
              Soon
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center h-[104px] w-[414px] bg-colabify-green border-[8px]  border-white rounded-[16px] z-14 font-jarkata font-extrabold  text-[86px]">
              Coming
            </div>
            <div className=" w-0 h-0 border-t-[83px] border-white border-l-[177px] border-l-transparent border-r-[0px] border-r-transparent ml-[4.5px] -mt-1 text-colabify-textYellow"></div>
          </div>
          <div className="">
            <div className="flex justify-center items-center h-[113px] w-[336px] bg-colabify-blue -mt-[89px] ml-5 border-[8px] border-black  rounded-[16px] -rotate-4 font-jarkata font-[1000] text-[76px] text-white z-10">
              Soon
            </div>
            <div className="w-[350px] h-[60px] overflow-hidden -mt-7">
              <div className=" w-0 h-0 border-t-[70px] border-l-[73px] border-l-transparent border-r-[260px] border-r-transparent ml-22 -mt-5 border-colabify-blue"></div>
            </div>
          </div>
          */
  return (
    <>
      <div className="h-[110dvh] md:h-[115dvh] w-full bg-colabify-back relative">
        <Header name="home" />

        <Copy state="notDone" />

        <Background name="home" />
      </div>
    </>
  );
};

export default Home;
