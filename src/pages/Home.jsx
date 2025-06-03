import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";
import soon from "../assets/copy.png";

const Home = () => {
  /*<div className="flex flex-col justify-center items-center relative mb-9">
            <div className="flex justify-center items-center w-[414px] h-[104px] bg-colabify-green rounded-[16px] border-white border-[8px] text-[5.3em] overflow-hidden">
              Coming
            </div>
            <div className="flex justify-center items-center text-white w-[336px] h-[113px] -rotate-3 bg-colabify-blue rounded-[16px] border-black border-[8px] text-[5.3em] overflow-hidden relative bottom-3">
              Soon
            </div>
          </div>*/
  return (
    <>
      <div className="h-[100vh] w-full bg-colabify-back relative">
        <Header />
        <div className="flex flex-col justify-center items-center top-[50%] left-[50%] relative -translate-x-[50%] -translate-y-[50%] z-10">
          <div>
            <img src={soon}></img>
          </div>
          <div className="w-[472px] text-center m-7 text-white font-inter tetx-[16px]">
            Get Early Access to
            <span className="bg-colabify-blue px-1 py-1 rounded-sm mx-1">
              Collabify,
            </span>
            Join as a creator or brand and be the first to onboard when we
            launch.
          </div>
          <div className="flex">
            <Link to={"/collabify/business"}>
              <div className="relative cursor-pointer m-[8px] hover:opacity-75">
                <div className="flex justify-center items-center bg-colabify-green w-[162px] h-[56px] rounded-[82px] z-10text-[16px] font-inter font-medium text-colabify-textYellow absolute -top-[8px]">
                  I am a Brand
                </div>
                <div className="flex justify-center bg-colabify-darkGreen w-[162px] h-[56px] rounded-[64px] overflow-hidden  z-8"></div>
              </div>
            </Link>
            <Link to={"/collabify/creator"}>
              <div className="relative cursor-pointer m-[8px] hover:opacity-75">
                <div className="flex justify-center items-center bg-white w-[162px] h-[56px] rounded-[82px] z-10 text-[16px] font-inter font-medium text-colabify-black absolute -top-[8px]">
                  I am a Creator
                </div>
                <div className="flex justify-center bg-colabify-grey w-[162px] h-[56px] rounded-[64px] overflow-hidden  z-8"></div>
              </div>
            </Link>
          </div>
        </div>
        <Background name="home" />
      </div>
    </>
  );
};

export default Home;
