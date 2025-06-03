import React from "react";
import star from "../assets/star.png";
import building_one from "../assets/building_one.png";
import building_two from "../assets/building_two.png";
import header from "../assets/Header.png";
import footer from "../assets/footer.png";

const Background = ({ name }) => {
  /*<div className="w-[190px] flex items-center justify-between fixed top-6 left-[50%] -translate-x-[50%] z-15">
        <div className="h-[40px] w-[143px] bg-gray-700/50 rounded-3xl"></div>
        <div className="h-[40px] w-[40px] bg-black/50 rounded-full"></div>
      </div>*/
  return (
    <div className="z-5">
      <img src={star} className="h-[100vh] w-full absolute top-0"></img>

      <div className="flex justify-center items-center absolute bottom-0 w-[651px] h-[384px] overflow-hidden">
        <img
          src={building_two}
          className="w-[651px] h-[384px] translate-y-20"
        ></img>
      </div>
      <div className="flex justify-center items-center absolute bottom-0 right-0 z-7 w-[651px] h-[384px] overflow-hidden">
        <img
          src={building_one}
          alt="building_one"
          className="w-[651px] h-[384px] translate-y-20"
        ></img>
      </div>

      {name == "home" && (
        <img
          src={footer}
          alt={"footer"}
          className="absolute bottom-6 left-[50%] -translate-x-[50%] z-15"
        ></img>
      )}
    </div>
  );
};

export default Background;
