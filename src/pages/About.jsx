import { useState, useEffect } from "react";
import MainBackground from "../components/MainBackground.jsx";
import Header from "../components/Header.jsx";
import computer from "../assets/computer.png";
import starField from "../assets/star_field.png";
import tri from "../assets/yellow_tri.png";
import Paper from "../components/Paper.jsx";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div
      className={`h-[100dvh] w-full bg-colabify-back relative ${
        isMounted ? "opacity-100" : "translate-y-[100%] opacity-0"
      } transition-all duration-300 ease-in`}
    >
      <Header name="about" />
      <div className="absolute w-full h-full bg-black/30 z-8 backdrop-blur-[8px]"></div>
      <div className="flex flex-col md:h-[75vh] h-[77vh] w-[82%]  md:w-[65%] lg:w-[600px] overflow-hidden items-center top-[50%] md:top-[52%] left-[50%] fixed -translate-x-[50%] md:-translate-y-[50%] -translate-y-[45%]  bg-white rounded-[24px] z-10 -rotate-1">
        <img
          src={starField}
          alt="star_field"
          className="z-8 absolute top-0"
        ></img>
        <div className="flex flex-col ml-16 mt-12 mr-auto mb-5">
          <div className=" flex justify-center border-[2px] border-white items-center rotate-1 md:h-[52px] h-[48px] md:w-[159px] w-[148px] font-jarkata md:text-[24px] text-[20px] font-semibold bg-colabify-blue text-white rounded-[12px] z-10">
            About us
          </div>
          <img
            src={tri}
            className="md:mt-[4px] mt-[4px] md:ml-10 ml-8 h-[14px] w-[80px] z-10"
          ></img>
        </div>
        <div className="h-[288px] w-[80%] text-[12.5px] md:text-[15px] lg:text-[16px] z-15 font-inter text-colabify-textBlack">
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
        <Paper />
      </div>
      <MainBackground />
    </div>
  );
};

export default About;
