import React from "react";
import star from "../assets/star.png";
import building_one from "../assets/building_one.png";
import building_two from "../assets/building_two.png";
import header from "../assets/Header.png";
import Footer from "../components/Footer.jsx";

const Background = ({ name }) => {
  return (
    <div className="z-5">
      <img src={star} className="h-[100vh] w-full absolute top-0"></img>

      <div className="flex justify-center items-center absolute bottom-0 w-[300px] h-[200px] md:w-[651px] md:h-[384px] overflow-hidden">
        <img
          src={building_two}
          className="w-[300px] h-[200px] md:w-[651px] md:h-[384px] translate-y-20"
        ></img>
      </div>
      <div className="flex justify-center items-center absolute bottom-0 right-0 z-7 w-[300px] h-[200px] md:w-[651px] md:h-[384px] overflow-hidden">
        <img
          src={building_one}
          alt="building_one"
          className="w-[300px] h-[200px] md:w-[651px] md:h-[384px] translate-y-20"
        ></img>
      </div>

      {name == "home" && <Footer />}
    </div>
  );
};

export default Background;
