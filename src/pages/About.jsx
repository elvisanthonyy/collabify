import React from "react";
import MainBackground from "../components/MainBackground.jsx";
import Header from "../components/Header.jsx";
import computer from "../assets/computer.png";
import starField from "../assets/star_field.png";
import tri from "../assets/yellow_tri.png";

const About = () => {
  return (
    <div className="h-[100dvh] w-full bg-colabify-back relative">
      <Header name="about" />
      <div className="absolute w-full h-full bg-black/30 z-8 backdrop-blur-[8px]"></div>
      <div className="flex flex-col md:h-[75vh] h-[75vh] w-[80%] md:w-[35%] overflow-hidden items-center top-[50%] left-[50%] relative -translate-x-[50%] md:-translate-y-[50%] -translate-y-[45%]  bg-white rounded-[24px] z-10 -rotate-1">
        <img src={starField} alt="star_field z-10 absolute top-0"></img>
        <div className="absolute  top-10 left-11">
          <div className="flex justify-center border-[2px] border-white items-center rotate-1 h-[52px] w-[159px] font-jarkata text-[24px]  font-semibold bg-colabify-blue text-white rounded-[12px]">
            About us
          </div>
          <img src={tri} className="absolute top-[53px] left-10 h-[14px]"></img>
        </div>
        <div className="h-[288px] w-[80%] left-10 top-30 text-[14px] z-15 absolute font-inter text-colabify-textBlack">
          <b>Collabify</b> is a platform built to connect creators and brands
          through performance-based, pay-per-view campaigns. We’re creating a
          fair, fast, and transparent way for both sides to collaborate and earn
          — without the chaos.
          <br /> We exist to solve two major problems:
          <ul>
            <li className="list-disc ml-5">
              <b>Brands</b> struggle with finding real creators and measuring
              results.
            </li>
            <li className="list-disc ml-5">
              <b>Creators</b> deal with unclear deals, inconsistent payments,
              and fake promises.
            </li>
          </ul>
          With Collabify, brands launch campaigns, set their budget, and only
          pay for authentic views. Creators get matched or browse open
          campaigns, post content, and get paid for every 1,000 real views — no
          negotiations, no stress.
        </div>
        <img
          src={computer}
          alt="computer"
          className="absolute -left-2 -bottom-2"
        ></img>
      </div>
      <MainBackground />
    </div>
  );
};

export default About;
