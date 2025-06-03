import React from "react";
import Background from "../components/Background.jsx";
import star from "../assets/star.png";

//for displaying invalid pages
const PageNotFound = () => {
  return (
    <div className="h-[100vh] w-full bg-colabify-back relative">
      <img src={star} className="h-[100vh] w-full absolute top-0"></img>
      <div className="text-7xl text-white text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        404 <br /> Not Found
      </div>
    </div>
  );
};

export default PageNotFound;
