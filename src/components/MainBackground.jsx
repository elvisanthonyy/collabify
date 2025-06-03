import React from "react";
import star from "../assets/star.png";
import building_left from "../assets/building_left.png";
import building_right from "../assets/building_right.png";

const MainBackground = () => {
  return (
    <div className="z-5">
      <img src={star} className="h-[100vh] w-full absolute top-0"></img>

      <div className="flex justify-center items-center absolute bottom-0 w-[651px] h-[384px] overflow-hidden">
        <img
          src={building_left}
          className="w-[651px] h-[384px] translate-y-10"
        ></img>
      </div>
      <div className="flex justify-center items-center absolute bottom-0 right-0 z-7 w-[651px] h-[384px] overflow-hidden">
        <img
          src={building_right}
          alt="building_one"
          className="w-[651px] h-[384px] translate-y-10"
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

export default MainBackground;
